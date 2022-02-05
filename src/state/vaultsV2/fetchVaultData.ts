import BigNumber from 'bignumber.js'
import vaultGetterABI from 'config/abi/vaultGetterAbi.json'
import integratedVaultABI from 'config/abi/integratedVaultAbi.json'
import avtoCrossABI from 'config/abi/avtoCrossAbi.json'
import apePriceGetterAbi from 'config/abi/apePriceGetter.json'
import { getApePriceGetterAddress, getVaultGetterAddress, getVaultHealerV2Address } from 'utils/addressHelpers'
import {
  TOKEN_PER_BLOCK_MAP,
  LP_PROVIDER,
  DAILY_COMPOUND_FREQUENCY,
  PERFORMANCE_FEE,
  BLOCKS_PER_YEAR,
  ZERO_ADDRESS,
  LIQUIDITY_LINKS,
  FARMS,
  FARM_SITES,
  PROJECT_SITES,
  DEPOSIT_FEES_BY_PID_V2,
  CRODEX_FARMS,
  PHOTON_FARMS,
  ELK_FARMS,
  CROSS_FARMS,
} from 'config/index'
import { formatNumber, getBalanceAmount, getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import { tokenEarnedPerThousandDollarsCompounding, getRoi } from 'utils/compoundApyHelpers'
import { BIG_ZERO } from 'utils/bigNumber'
import multicall from 'utils/multicall'
import { getTokenDecimals } from 'utils/getTokenInfo'
import { SerializedBigNumber, VaultApy } from '../types'

type VaultUser = {
  allowance: string
  tokenBalance: string
  stakedBalance: string
  stakedWantBalance: string
  stakedBalanceUSD: string
}

export type PublicVaultData = {
  pid: number
  wantAddress: string
  strategyAddress: string
  lpType: string
  lpSymbol: string
  lpLink: string
  farmType: string
  farmSite: string
  projectSite: string
  totalValueLocked: SerializedBigNumber
  allocPoint: string
  tolerance: string
  burnedAmount: string
  lpTokenPrice: string
  quoteTokenAddress: string
  tokenAddress: string
  paused: boolean
  apys: VaultApy
  userData: VaultUser
  depositFee: string
}

const fetchQuickApr = async (
  lpTotalInQuoteToken: BigNumber,
  quoteTokenPrice: number,
  masterChefAddress: string,
  functionName: string,
): Promise<VaultApy> => {
  // Next get vault reward token current price

  const SECONDS_IN_A_YEAR = new BigNumber(31536000)

  const [rewardRate, rewardToken] = await multicall(integratedVaultABI, [
    { address: masterChefAddress, name: functionName },
    { address: masterChefAddress, name: 'rewardsToken' },
  ])

  const decimals = getTokenDecimals(rewardToken[0])

  const fetchEarnedTokenPrice = await multicall(apePriceGetterAbi, [
    {
      address: getApePriceGetterAddress(),
      name: 'getPrice',
      params: [rewardToken[0], decimals],
    },
  ])
  const rewardTokenPriceBusd = getBalanceNumber(fetchEarnedTokenPrice, decimals)
  const yearlyRewardTokens = SECONDS_IN_A_YEAR.times(getBalanceNumber(rewardRate, decimals))
  const oneThousandDollarsWorthOfToken = 1000 / rewardTokenPriceBusd
  const apr = yearlyRewardTokens.times(rewardTokenPriceBusd).div(lpTotalInQuoteToken.times(quoteTokenPrice)).times(100)

  const tokensEarnedYearly = tokenEarnedPerThousandDollarsCompounding({
    numberOfDays: 365,
    farmApr: apr,
    tokenPrice: rewardTokenPriceBusd,
    roundingDecimals: 18,
    compoundFrequency: DAILY_COMPOUND_FREQUENCY,
    performanceFee: PERFORMANCE_FEE,
  })
  const tokensEarnedMonthly = tokenEarnedPerThousandDollarsCompounding({
    numberOfDays: 30,
    farmApr: apr,
    tokenPrice: rewardTokenPriceBusd,
    roundingDecimals: 18,
    compoundFrequency: DAILY_COMPOUND_FREQUENCY,
    performanceFee: PERFORMANCE_FEE,
  })
  const tokensEarnedWeekly = tokenEarnedPerThousandDollarsCompounding({
    numberOfDays: 7,
    farmApr: apr,
    tokenPrice: rewardTokenPriceBusd,
    roundingDecimals: 18,
    compoundFrequency: DAILY_COMPOUND_FREQUENCY,
    performanceFee: PERFORMANCE_FEE,
  })
  const tokensEarnedDaily = tokenEarnedPerThousandDollarsCompounding({
    numberOfDays: 1,
    farmApr: apr,
    tokenPrice: rewardTokenPriceBusd,
    roundingDecimals: 18,
    compoundFrequency: DAILY_COMPOUND_FREQUENCY,
    performanceFee: PERFORMANCE_FEE,
  })

  const dailyApy = getRoi({ amountEarned: tokensEarnedDaily, amountInvested: oneThousandDollarsWorthOfToken })
  const weeklyApy = getRoi({ amountEarned: tokensEarnedWeekly, amountInvested: oneThousandDollarsWorthOfToken })
  const monthlyApy = getRoi({ amountEarned: tokensEarnedMonthly, amountInvested: oneThousandDollarsWorthOfToken })
  const yearlyApy = getRoi({ amountEarned: tokensEarnedYearly, amountInvested: oneThousandDollarsWorthOfToken })
  const apyObject: VaultApy = { dailyApy, weeklyApy, monthlyApy, yearlyApy, yearlyApr: apr.toNumber() }

  return apyObject
}

const fetchTokenPerSecondApr = async (
  lpTotalInQuoteToken: BigNumber,
  quoteTokenPrice: number,
  pid: number,
  masterChefAddress: string,
  earnedTokenPrice: BigNumber,
): Promise<[VaultApy, string, string]> => {
  const rewardTokenPriceBusd = getBalanceNumber(earnedTokenPrice)

  let vaultABI = integratedVaultABI
  if (CROSS_FARMS.includes(masterChefAddress)) vaultABI = avtoCrossABI

  const response = async () => {
    try {
      const calls = [
        {
          address: masterChefAddress,
          name: 'poolInfo',
          params: [pid],
        },
        {
          address: masterChefAddress,
          name: 'totalAllocPoint',
        },
        {
          address: masterChefAddress,
          name: TOKEN_PER_BLOCK_MAP[masterChefAddress],
        },
      ]
      return await multicall(vaultABI, calls)
    } catch (e) {
      console.error(e)
      return [null, null, null]
    }
  }

  const [poolInfo, totalAllocPoint, tokensPerSecond] = await response()

  const allocPoint = poolInfo ? new BigNumber(poolInfo.allocPoint?._hex) : BIG_ZERO

  const depositFee = new BigNumber(DEPOSIT_FEES_BY_PID_V2[pid.toString()] ?? 0)

  // Calculate APR
  const SECONDS_IN_A_YEAR = new BigNumber(31536000)
  const poolWeight = totalAllocPoint ? allocPoint.div(new BigNumber(totalAllocPoint)) : BIG_ZERO
  const rewardTokensPerSecond = tokensPerSecond ? getBalanceNumber(tokensPerSecond) : BIG_ZERO
  const yearlyRewardTokens = SECONDS_IN_A_YEAR.times(rewardTokensPerSecond).times(poolWeight)
  const oneThousandDollarsWorthOfToken = 1000 / rewardTokenPriceBusd
  const apr = yearlyRewardTokens.times(rewardTokenPriceBusd).div(lpTotalInQuoteToken.times(quoteTokenPrice)).times(100)

  const tokensEarnedYearly = tokenEarnedPerThousandDollarsCompounding({
    numberOfDays: 365,
    farmApr: apr,
    tokenPrice: rewardTokenPriceBusd,
    roundingDecimals: 18,
    compoundFrequency: DAILY_COMPOUND_FREQUENCY,
    performanceFee: PERFORMANCE_FEE,
  })
  const tokensEarnedMonthly = tokenEarnedPerThousandDollarsCompounding({
    numberOfDays: 30,
    farmApr: apr,
    tokenPrice: rewardTokenPriceBusd,
    roundingDecimals: 18,
    compoundFrequency: DAILY_COMPOUND_FREQUENCY,
    performanceFee: PERFORMANCE_FEE,
  })
  const tokensEarnedWeekly = tokenEarnedPerThousandDollarsCompounding({
    numberOfDays: 7,
    farmApr: apr,
    tokenPrice: rewardTokenPriceBusd,
    roundingDecimals: 18,
    compoundFrequency: DAILY_COMPOUND_FREQUENCY,
    performanceFee: PERFORMANCE_FEE,
  })
  const tokensEarnedDaily = tokenEarnedPerThousandDollarsCompounding({
    numberOfDays: 1,
    farmApr: apr,
    tokenPrice: rewardTokenPriceBusd,
    roundingDecimals: 18,
    compoundFrequency: DAILY_COMPOUND_FREQUENCY,
    performanceFee: PERFORMANCE_FEE,
  })

  const dailyApy = getRoi({ amountEarned: tokensEarnedDaily, amountInvested: oneThousandDollarsWorthOfToken })
  const weeklyApy = getRoi({ amountEarned: tokensEarnedWeekly, amountInvested: oneThousandDollarsWorthOfToken })
  const monthlyApy = getRoi({ amountEarned: tokensEarnedMonthly, amountInvested: oneThousandDollarsWorthOfToken })
  const yearlyApy = getRoi({ amountEarned: tokensEarnedYearly, amountInvested: oneThousandDollarsWorthOfToken })
  const apyObject: VaultApy = { dailyApy, weeklyApy, monthlyApy, yearlyApy, yearlyApr: apr.toNumber() }

  return [apyObject, new BigNumber(allocPoint).toJSON(), formatNumber(depositFee.toNumber())]
}

// Temporary until we get a better strategy for APR
const fetchApr = async (
  lpTotalInQuoteToken: BigNumber,
  quoteTokenPrice: number,
  pid: number,
  masterChefAddress: string,
  earnedTokenPrice: BigNumber,
): Promise<[VaultApy, string, string]> => {
  const rewardTokenPriceBusd = getBalanceNumber(earnedTokenPrice)

  const response = async () => {
    try {
      const calls = [
        {
          address: masterChefAddress,
          name: 'poolInfo',
          params: [pid],
        },
        {
          address: masterChefAddress,
          name: 'totalAllocPoint',
        },
        {
          address: masterChefAddress,
          name: TOKEN_PER_BLOCK_MAP[masterChefAddress],
        },
      ]
      return await multicall(integratedVaultABI, calls)
    } catch (e) {
      console.error(e)
      return [null, null, null]
    }
  }

  const [poolInfo, totalAllocPoint, tokensPerBlock] = await response()

  const allocPoint = poolInfo ? new BigNumber(poolInfo.allocPoint?._hex) : BIG_ZERO

  const depositFee = new BigNumber(DEPOSIT_FEES_BY_PID_V2[pid.toString()] ?? 0)

  // Calculate APR
  const poolWeight = totalAllocPoint ? allocPoint.div(new BigNumber(totalAllocPoint)) : BIG_ZERO
  const rewardTokensPerBlock = tokensPerBlock ? getBalanceNumber(tokensPerBlock) : BIG_ZERO
  const yearlyRewardTokens = BLOCKS_PER_YEAR.times(rewardTokensPerBlock).times(poolWeight)
  const oneThousandDollarsWorthOfToken = 1000 / rewardTokenPriceBusd
  const apr = yearlyRewardTokens.times(rewardTokenPriceBusd).div(lpTotalInQuoteToken.times(quoteTokenPrice)).times(100)
  const tokensEarnedYearly = tokenEarnedPerThousandDollarsCompounding({
    numberOfDays: 365,
    farmApr: apr,
    tokenPrice: rewardTokenPriceBusd,
    roundingDecimals: 18,
    compoundFrequency: DAILY_COMPOUND_FREQUENCY,
    performanceFee: PERFORMANCE_FEE,
  })
  const tokensEarnedMonthly = tokenEarnedPerThousandDollarsCompounding({
    numberOfDays: 30,
    farmApr: apr,
    tokenPrice: rewardTokenPriceBusd,
    roundingDecimals: 18,
    compoundFrequency: DAILY_COMPOUND_FREQUENCY,
    performanceFee: PERFORMANCE_FEE,
  })
  const tokensEarnedWeekly = tokenEarnedPerThousandDollarsCompounding({
    numberOfDays: 7,
    farmApr: apr,
    tokenPrice: rewardTokenPriceBusd,
    roundingDecimals: 18,
    compoundFrequency: DAILY_COMPOUND_FREQUENCY,
    performanceFee: PERFORMANCE_FEE,
  })
  const tokensEarnedDaily = tokenEarnedPerThousandDollarsCompounding({
    numberOfDays: 1,
    farmApr: apr,
    tokenPrice: rewardTokenPriceBusd,
    roundingDecimals: 18,
    compoundFrequency: DAILY_COMPOUND_FREQUENCY,
    performanceFee: PERFORMANCE_FEE,
  })

  const dailyApy = getRoi({ amountEarned: tokensEarnedDaily, amountInvested: oneThousandDollarsWorthOfToken })
  const weeklyApy = getRoi({ amountEarned: tokensEarnedWeekly, amountInvested: oneThousandDollarsWorthOfToken })
  const monthlyApy = getRoi({ amountEarned: tokensEarnedMonthly, amountInvested: oneThousandDollarsWorthOfToken })
  const yearlyApy = getRoi({ amountEarned: tokensEarnedYearly, amountInvested: oneThousandDollarsWorthOfToken })
  const apyObject: VaultApy = { dailyApy, weeklyApy, monthlyApy, yearlyApy, yearlyApr: apr.toNumber() }

  return [apyObject, new BigNumber(allocPoint).toJSON(), formatNumber(depositFee.toNumber())]
}

const isMinimumStakedBalance = (balance: string) => {
  const balanceNumber = new BigNumber(balance)
  const gwei = new BigNumber(1)
  return balanceNumber.isEqualTo(gwei)
}

const formatStakedWantBalance = (balance: string, account: string) => {
  if (isMinimumStakedBalance(balance) || !account) {
    return '0'
  }
  return new BigNumber(balance).toJSON()
}

const fetchVault = async (pid: number, account: string): Promise<PublicVaultData | null> => {
  // Not super happy with keeping zero address calls when a user is not logged in, but ran out of time to restructure
  // SOULTION when refactoring for V2
  // Seperate user and public calls. Keep same structure, but move calls into seperate folders.
  // This will create a few extra folders, but definitely more efficient.
  // Hopefully we will have contracts for APY and we can cut calls in half saving a ton of time

  const vaultHealerAddress = getVaultHealerV2Address()
  const apePriceGetterAddress = getApePriceGetterAddress()
  const vaultGetterAddress = getVaultGetterAddress()
  const [response] = await multicall(vaultGetterABI, [
    {
      address: vaultGetterAddress,
      name: 'getVault',
      params: [vaultHealerAddress, apePriceGetterAddress, pid, account || ZERO_ADDRESS],
    },
  ])

  const { facts, info, user } = response

  const {
    chefPid: stratVaultPid,
    tolerance,
    masterchefAddress: masterChefAddress,
    wantAddress,
    strategyAddress: stratAddress,
    token0Address,
    token1Address,
    lpFactoryAddress: factoryAddress,
    token0Symbol,
    token1Symbol,
  } = facts

  const { paused, wantLockedTotal, burnedAmount, lpTokenPrice: lpPrice, earnedTokenPrice, masterchefWantBalance } = info

  const {
    allowance: userApproved,
    tokenBalance: userRawLpBalance,
    stakedBalance,
    stakedWantBalance,
    stakedBalanceUSD,
  } = user

  const vaultShares = getBalanceNumber(wantLockedTotal._hex)
  const formatLpPrice = getBalanceNumber(lpPrice._hex)
  const totalValueLocked = vaultShares * formatLpPrice

  const lpTokenStakedMC = getBalanceAmount(new BigNumber(masterchefWantBalance._hex))

  const tokenBalance = account ? new BigNumber(userRawLpBalance._hex).toJSON() : '0'
  const allowance = account ? new BigNumber(userApproved._hex).toJSON() : '0'
  const stakedBalanceFormatted = account ? new BigNumber(stakedBalance._hex).toJSON() : '0'

  const userStakedUSDAmount = formatStakedWantBalance(stakedBalanceUSD._hex, account)
  const stakedWantBalanceFormatted = formatStakedWantBalance(stakedWantBalance._hex, account)

  let returnedApy: VaultApy = { dailyApy: 0, weeklyApy: 0, monthlyApy: 0, yearlyApy: 0, yearlyApr: 0 }
  let allocPoint = ''
  let farmType = ''
  let farmSite = ''
  let depositFee = formatNumber(0)

  if (CRODEX_FARMS.includes(masterChefAddress)) {
    farmType = 'Crodex'
    farmSite = 'https://swap.crodex.app/'
  } else if (PHOTON_FARMS.includes(masterChefAddress)) {
    farmType = 'Photon'
    farmSite = 'https://photonswap.finance/'
  } else if (ELK_FARMS.includes(masterChefAddress)) {
    farmType = 'Elk'
    farmSite = 'https://app.elk.finance/'
  } else {
    farmType = FARMS[masterChefAddress]
    farmSite = FARM_SITES[masterChefAddress]
  }

  if (!paused) {
    if (['Crona', 'Salem', 'DNADollar', 'AvtoCross', 'DarkCrypto'].includes(farmType)) {
      const apr = await fetchTokenPerSecondApr(
        lpTokenStakedMC,
        formatLpPrice,
        new BigNumber(stratVaultPid).toNumber(),
        masterChefAddress,
        new BigNumber(earnedTokenPrice._hex),
      )
      returnedApy = apr[0]
      allocPoint = apr[1]
      depositFee = apr[2]
    } else if (['Crodex', 'Photon', 'Elk'].includes(farmType)) {
      const apr = await fetchQuickApr(lpTokenStakedMC, formatLpPrice, masterChefAddress, 'rewardRate')
      returnedApy = apr
      allocPoint = '1'
    } else {
      const apr = await fetchApr(
        lpTokenStakedMC,
        formatLpPrice,
        new BigNumber(stratVaultPid).toNumber(),
        masterChefAddress,
        new BigNumber(earnedTokenPrice._hex),
      )
      returnedApy = apr[0]
      allocPoint = apr[1]
      depositFee = apr[2]
    }
  }

  let vaultSymbol = ''
  if (token0Symbol === 'WCRO') vaultSymbol = `${token1Symbol}-CRO LP`
  else if (token1Symbol === 'WCRO') vaultSymbol = `CRO-${token0Symbol} LP`
  else vaultSymbol = `${token1Symbol}-${token0Symbol} LP`

  return {
    pid,
    wantAddress,
    strategyAddress: stratAddress,
    lpType: LP_PROVIDER[factoryAddress],
    lpSymbol: vaultSymbol,
    lpLink: LIQUIDITY_LINKS[factoryAddress],
    farmType,
    farmSite,
    projectSite: PROJECT_SITES[wantAddress],
    totalValueLocked: totalValueLocked.toFixed(2),
    burnedAmount: new BigNumber(burnedAmount._hex).toJSON(),
    tolerance: new BigNumber(tolerance).toJSON(),
    lpTokenPrice: formatLpPrice.toString(),
    quoteTokenAddress: token0Address,
    tokenAddress: token1Address,
    allocPoint,
    paused,
    apys: returnedApy,
    userData: {
      allowance,
      tokenBalance,
      stakedBalance: stakedBalanceFormatted,
      stakedBalanceUSD: getFullDisplayBalance(new BigNumber(userStakedUSDAmount)),
      stakedWantBalance: stakedWantBalanceFormatted,
    },
    depositFee,
  }
}

export default fetchVault
