import React from 'react'
import styled from 'styled-components'
import { BaseLayout, /* BrandLogo,  */ useMatchBreakpoints } from '@crystals/uikit'
/* import { usePollVaultData,  usePollVaultV2Data } from 'state/hooks' */
import Page from 'components/layout/Page'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import VaultsV2 from 'views/VaultsV2'
import HomepageCronosLogo from 'components/Logos/HomepageCronosLogo'
import EarnVaultCard from './components/EarnVaultCard'

const Hero = styled.div`
  align-items: center;
  background-size: 135px;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  text-align: center;
  animation: floating 3.4s infinite normal ease;

  @keyframes floating {
    0% {
      transform: translate(0px, 0px);
    }
    50% {
      transform: translate(0px, 8px);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }

  ${({ theme }) => theme.mediaQueries.xs} {
    svg {
      width: 92%;
      margin-bottom: 18px;
    }
    & > div {
      grid-column: span 8;
    }
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    svg {
      width: 50%;
      margin-bottom: 32px;
    }
    & > div {
      grid-column: span 8;
    }
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    svg {
      width: 42.5%;
      margin-bottom: 30px;
    }
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  /* margin-bottom: 24px; */
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    /* margin-bottom: 32px; */
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`

const Home: React.FC = () => {
  const { isXl } = useMatchBreakpoints()
  const isMobile = !isXl
  /* usePollVaultV2Data(true) */

  return (
    <Page>
      <Hero>
        <HomepageCronosLogo />
      </Hero>
      <div>
        <Cards>
          {!isMobile && <EarnVaultCard />}
          <TotalValueLockedCard />
        </Cards>
        <VaultsV2 />
      </div>
    </Page>
  )
}

export default Home
