import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text, Flex, ArrowForwardIcon, useMatchBreakpoints } from '@crystals/uikit'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'contexts/Localization'
import { useTotalValue } from 'state/hooks'
import CardValue from './CardValue'

const StyledTotalValueLockedCard = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.lg} {
    margin: 0;
    max-width: none;
  }

  /* transition: opacity 200ms;
  &:hover {
    opacity: 0.65;
  } */
`

const StyledArrowForwardIcon = styled(ArrowForwardIcon)`
  position: absolute;
  bottom: 24px;
  right: 3%;
`

const TotalValueLockedCard = () => {
  const { t } = useTranslation()
  const data = useTotalValue()
  const tvl = data
  const learnVaultUrl =
    'https://polycrystal.gitbook.io/polycrystal-finance/crystal-clear-education/ultimate-guide-to-polycrystal/unmasking-vaults'

  const { isXl } = useMatchBreakpoints()
  const isMobile = !isXl

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading color="contrast" scale={isMobile ? 'md' : 'lg'} mb="24px">
          {t('Total Value Locked (TVL)')}
        </Heading>
        {data ? (
          <>
            <CardValue value={tvl.toNumber()} prefix="$" decimals={2} />
            <Flex justifyContent="space-between">
              <Text color="textSubtle">{t('Across all the Vaults')}</Text>
              <NavLink activeClassName="active" to={{ pathname: learnVaultUrl }} target="_blank">
                <Text color="textSubtle" style={{ marginRight: isMobile ? '7px' : '17px' }}>
                  {t('Learn about vaults')}
                </Text>
                <StyledArrowForwardIcon mt={30} color="primary" />
              </NavLink>
            </Flex>
          </>
        ) : (
          <Skeleton animation="pulse" variant="rect" height="44px" />
        )}
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
