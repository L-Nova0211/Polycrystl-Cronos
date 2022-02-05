import React /* , { useState, useCallback } */ from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody /* , Button  */ } from '@crystals/uikit'
/* import { harvest } from 'utils/callHelpers'
import { useWeb3React } from '@web3-react/core' */
import { useTranslation } from 'contexts/Localization'
/* import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import { useMasterchef } from 'hooks/useContract'
import UnlockButton from 'components/UnlockButton'
import CrystlHarvestBalance from './CrystlHarvestBalance' */
import CrystlWalletBalance from './CrystlWalletBalance'

const StyledFarmStakingCard = styled(Card)`
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

/* const Actions = styled.div`
  margin-top: 24px;
` */

const FarmedStakingCard = () => {
  /* const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React() */
  const { t } = useTranslation()
  /* const farmsWithBalance = useFarmsWithBalance()
  const masterChefContract = useMasterchef()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0) */

  /* const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    // eslint-disable-next-line no-restricted-syntax
    for (const farmWithBalance of balancesWithValue) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await harvest(masterChefContract, farmWithBalance.pid, account)
      } catch (error) {
        // TODO: find a way to handle when the user rejects transaction or it fails
      }
    }
    setPendingTx(false)
  }, [account, balancesWithValue, masterChefContract]) */

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading scale="xl" mb="24px">
          {t('Mines & Staking')}
        </Heading>
        <CardImage src="/images/crystlbg.png" alt="crystal logo" width={64} height={64} />
        {/* <Block>
          <Label>{t('CRYSTL to Harvest')}:</Label>
          <CrystlHarvestBalance />
        </Block> */}
        <Block>
          <Label>{t('TCRO in Wallet')}:</Label>
          <CrystlWalletBalance />
        </Block>
        {/* <Actions>
          {account ? (
            <Button
              id="harvest-all"
              disabled={balancesWithValue.length <= 0 || pendingTx}
              onClick={harvestAllFarms}
              width="100%"
            >
              {pendingTx
                ? t('Collecting CRYSTL')
                : t('Harvest all (%count%)', {
                    count: balancesWithValue.length,
                  })}
            </Button>
          ) : (
            <UnlockButton width="100%" />
          )}
        </Actions> */}
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default FarmedStakingCard
