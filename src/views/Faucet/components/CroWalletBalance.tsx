import React from 'react'
import { Text, Flex } from '@crystals/uikit'
import { useWeb3React } from '@web3-react/core'
import { useGetBnbBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getBalanceNumber } from 'utils/formatBalance'
import CardValue from '../../Home/components/CardValue'

const CroWalletBalance: React.FC = () => {
  const { t } = useTranslation()
  const { balance: croBalance } = useGetBnbBalance()
  const { account } = useWeb3React()

  if (!account) {
    return (
      <Text color="textDisabled" fontSize="24px">
        {t('Locked')}
      </Text>
    )
  }

  return (
    <>
      <Flex justifyContent="center">
        <CardValue value={getBalanceNumber(croBalance)} decimals={4} fontSize="24px" lineHeight="36px" />
      </Flex>
    </>
  )
}

export default CroWalletBalance
