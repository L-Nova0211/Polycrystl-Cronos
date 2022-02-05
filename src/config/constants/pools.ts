import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 8,
    stakingToken: tokens.crystl,
    earningToken: tokens.crogas,
    contractAddress: {
      25: '0xaAd5B5B257CC353A8BBdc0702EadBEc9ea439Fc6',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '28163.58024717361',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 7,
    stakingToken: tokens.crystl,
    earningToken: tokens.polydoge,
    contractAddress: {
      25: '0xBcA8883Afe4EEcBa2bF1E2DfdDECE936f408A3C1',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '433940.97222222225',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 6,
    stakingToken: tokens.crystl,
    earningToken: tokens.mmf,
    contractAddress: {
      25: '0xF7Baa9b7f01693472D25B32BD89c245e4f8D0127',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.024799107142857144',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 5,
    stakingToken: tokens.crystl,
    earningToken: tokens.salem,
    contractAddress: {
      25: '0x71B0D0D2c0C12719B6ae4B360EB8b66707FC1db0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000451388888888889',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 4,
    stakingToken: tokens.crystl,
    earningToken: tokens.usdc,
    contractAddress: {
      25: '0x9fC138D126BBaFF7B70fc059212721E4Dd274043',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.014468',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: tokens.crystl,
    earningToken: tokens.btc,
    contractAddress: {
      25: '0x3865F5fFdce6e3D725cb8dE9e1C506E8ac10260A',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00000029',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: tokens.crystl,
    earningToken: tokens.btc,
    contractAddress: {
      25: '0x8CF24a6C69B5100e20Cc5Ebb6917a42426823fB3',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00000029',
    sortOrder: 1,
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 1,
    stakingToken: tokens.crystl,
    earningToken: tokens.wind,
    contractAddress: {
      25: '0xc2514189a061f4fe195ef78cb89504f176a65ce7',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.006597222222222222',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
