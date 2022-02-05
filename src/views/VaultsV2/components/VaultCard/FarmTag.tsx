import React from 'react'
import styled from 'styled-components'
import { Tag } from '@crystals/uikit'

export interface FarmTagProps {
  farmType?: string
}

const StyledTag = styled(Tag)`
  margin-left: 2px;
  margin-bottom: 2px;
`

const FarmTag: React.FC<FarmTagProps> = ({ farmType }) => {
  return (
    <div>
      {
        {
          Dinoswap: (
            <StyledTag scale="sm" variant="success" outline>
              {farmType}
            </StyledTag>
          ),
          Jetswap: (
            <StyledTag scale="sm" variant="primary" outline>
              {farmType}
            </StyledTag>
          ),
          Barbershop: (
            <StyledTag scale="sm" variant="warning" outline>
              {farmType}
            </StyledTag>
          ),
          Boneswap: (
            <StyledTag scale="sm" variant="secondary" outline>
              {farmType}
            </StyledTag>
          ),
          Waultswap: (
            <StyledTag scale="sm" variant="success" outline>
              {farmType}
            </StyledTag>
          ),
          Kavian: (
            <StyledTag scale="sm" variant="primary" outline>
              {farmType}
            </StyledTag>
          ),
          Polypulsar: (
            <StyledTag scale="sm" variant="success" outline>
              {farmType}
            </StyledTag>
          ),
          TakoDefi: (
            <StyledTag scale="sm" variant="warning" outline>
              {farmType}
            </StyledTag>
          ),
          Polyroll: (
            <StyledTag scale="sm" variant="warning" outline>
              {farmType}
            </StyledTag>
          ),
          Quickswap: (
            <StyledTag scale="sm" variant="primary" outline>
              {farmType}
            </StyledTag>
          ),
          Apeswap: (
            <StyledTag scale="sm" variant="warning" outline>
              {farmType}
            </StyledTag>
          ),
          Libra: (
            <StyledTag scale="sm" variant="warning" outline>
              {farmType}
            </StyledTag>
          ),
          DokiDoki: (
            <StyledTag scale="sm" variant="secondary" outline>
              {farmType}
            </StyledTag>
          ),
          Crona: (
            <StyledTag scale="sm" variant="primary" outline>
              {farmType}
            </StyledTag>
          ),
          Crodex: (
            <StyledTag scale="sm" variant="primary" outline>
              {farmType}
            </StyledTag>
          ),
          VVS: (
            <StyledTag scale="sm" variant="secondary" outline>
              {farmType}
            </StyledTag>
          ),
          Photon: (
            <StyledTag scale="sm" variant="primary" outline>
              {farmType}
            </StyledTag>
          ),
          Elk: (
            <StyledTag scale="sm" variant="success" outline>
              {farmType}
            </StyledTag>
          ),
          Stormswap: (
            <StyledTag scale="sm" variant="primary" outline>
              {farmType}
            </StyledTag>
          ),
          CronosYield: (
            <StyledTag scale="sm" variant="primary" outline>
              {farmType}
            </StyledTag>
          ),
          SmolSwap: (
            <StyledTag scale="sm" variant="secondary" outline>
              {farmType}
            </StyledTag>
          ),
          Chronoswap: (
            <StyledTag scale="sm" variant="primary" outline>
              {farmType}
            </StyledTag>
          ),
          Salem: (
            <StyledTag scale="sm" variant="warning" outline>
              {farmType}
            </StyledTag>
          ),
          MMFinance: (
            <StyledTag scale="sm" variant="warning" outline>
              {farmType}
            </StyledTag>
          ),
          DNADollar: (
            <StyledTag scale="sm" variant="warning" outline>
              {farmType}
            </StyledTag>
          ),
          AvtoCross: (
            <StyledTag scale="sm" variant="success" outline>
              {farmType}
            </StyledTag>
          ),
          DarkCrypto: (
            <StyledTag scale="sm" variant="primary" outline>
              {farmType}
            </StyledTag>
          ),
        }[farmType]
      }
    </div>
  )
}

export default FarmTag
