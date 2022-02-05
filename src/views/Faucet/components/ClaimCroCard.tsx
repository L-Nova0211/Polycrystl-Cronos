import React, { useState } from 'react'
import Reaptcha from 'reaptcha'
import { Link } from 'react-router-dom'
import { Button, Text, Card, CardBody, Heading, Flex } from '@crystals/uikit'
import { useWeb3React } from '@web3-react/core'
import { useGetBnbBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import getApiUrl from 'utils/getApiUrl'
import getPolygonScanTxn from 'utils/getPolygonScanTxn'
import UnlockButton from 'components/UnlockButton'
import { exchangeUrl } from 'components/Menu/config'
import useLocalStorage from 'hooks/useLocalStorage'
import CroWalletBalance from './CroWalletBalance'
import SvgComponent from '../../../components/CROsvg'

const GemSpinner = styled.div`
  position: relative;
  & img {
    width: 300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`

const Block = styled.div`
  margin-bottom: 16px;
  text-align: center;
`

const Label = styled.div`
  color: ${({ theme }) => theme.colors.textSubtle};
  font-size: 14px;
`

const Actions = styled.div`
  margin-top: 24px;
  text-align: center;
`

export interface ClaimCroProps {
  small?: boolean
}

const maxCro = parseFloat(process.env.REACT_APP_CRO_FAUCET_MAX_BALANCE)

const ClaimCroCard: React.FC<ClaimCroProps> = ({ small }: ClaimCroProps) => {
  const { t } = useTranslation()
  const { balance: croBalance } = useGetBnbBalance()
  const croBalanceNumber = getBalanceNumber(croBalance)
  const { account } = useWeb3React()
  const [lastFaucetUsage, setLastUsage] = useLocalStorage(btoa('lastFaucetUsage'), null)
  const [data, setData] = useState<{
    err: string | null
    hash: string | null
    loading: boolean
  }>({
    err: null,
    hash: null,
    loading: false,
  })
  const [verified, setVerified] = useState(false)

  const handleClick = async () => {
    setData({
      err: null,
      hash: null,
      loading: true,
    })
    const url = getApiUrl(
      `/api/claim-matic?token=${btoa(
        JSON.stringify({
          account,
          lastFaucetUsage,
        }),
      )}`,
    )
    try {
      const res = await fetch(url)
      const { err, hash, timestamp } = await res.json()
      if (!err) {
        setLastUsage(timestamp)
      }
      setData({
        err,
        hash,
        loading: false,
      })
    } catch (err) {
      setData({
        err: 'Cronos is busy, try again later :(',
        hash: null,
        loading: false,
      })
    }
  }

  const renderAction = (verifiedCapCha, setVerifiedCapCha) => {
    const onVerify = () => {
      setVerifiedCapCha(true)
    }
    if (account) {
      if (croBalanceNumber > maxCro) {
        return (
          <Button width="100%" style={{ marginTop: '30px' }} disabled>
            {t('You already have enough gas!')}
          </Button>
        )
      }
      if (data.loading) {
        return (
          <Button width="100%" style={{ marginTop: '30px' }} disabled>
            {t('Sending CRO Your Way!')}
          </Button>
        )
      }
      if (data.err) {
        return (
          <Button width="100%" disabled>
            {data.err}
          </Button>
        )
      }
      if (data.hash) {
        return (
          <>
            <Link to={{ pathname: exchangeUrl }} target="_blank" rel="noreferrer">
              <Button width="100%" marginBottom="1em" external>
                Buy $CRO!
              </Button>
            </Link>
            <Link to={{ pathname: getPolygonScanTxn(data.hash) }} target="_blank" rel="noreferrer">
              <Button width="100%" external>
                View Transaction
              </Button>
            </Link>
          </>
        )
      }
      return (
        <div>
          <Flex justifyContent="center">
            <Reaptcha
              theme="dark"
              size="normal"
              sitekey="6LcziHMdAAAAADM52XQSrplHfHhQSMHz5tQP9sGO"
              onVerify={onVerify}
            />
          </Flex>
          <Button onClick={handleClick} width="100%" marginTop="30px" disabled={!verifiedCapCha}>
            {t('Use our CRO Faucet')}
          </Button>
        </div>
      )
    }
    return <UnlockButton width="100%" style={{ marginTop: '30px' }} />
  }

  const copy = (
    <Block>
      <Text fontSize="24px">Ran out of gas?</Text>
      <Text fontSize="24px">Use our faucet to get you going!</Text>
    </Block>
  )

  const spinner = (
    <GemSpinner>
      <SvgComponent />
    </GemSpinner>
  )

  return (
    <Card>
      <CardBody>
        <Heading scale="xl" mb="24px" style={{ textAlign: 'center' }}>
          {t('Need Some CRO?')}
        </Heading>
        {!small && copy}
        <Actions>
          {!small && spinner}
          <Block>
            <Label style={{ fontSize: '24px', marginTop: '20px' }}>{t('Your Wallet')}</Label>
            <CroWalletBalance />
          </Block>
          {renderAction(verified, setVerified)}
        </Actions>
      </CardBody>
    </Card>
  )
}

export default ClaimCroCard
