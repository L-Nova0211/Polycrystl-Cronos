import React from 'react'
import styled from 'styled-components'
import { Modal, Flex, Box, LinkExternal } from '@crystals/uikit'
import { useTranslation } from 'contexts/Localization'
import { getBscScanAddressUrl } from 'utils/bscscan'

interface VaultInformationModal {
  onDismiss?: () => void
  projectLink?: string
  lpAddress?: string
  farmLink?: string
  lpLabel: string
}

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const VaultInformationModal: React.FC<VaultInformationModal> = ({
  projectLink,
  lpAddress,
  lpLabel,
  farmLink,
  onDismiss,
}) => {
  const { t } = useTranslation()
  const contractLink = getBscScanAddressUrl(lpAddress)

  return (
    <Modal title={lpLabel} onDismiss={onDismiss}>
      <Flex justifyContent="stretch">
        <Box mb="15px" maxWidth="340px">
          <StyledLinkExternal href={projectLink}>{t('View Project Site')}</StyledLinkExternal>
          <StyledLinkExternal href={farmLink}>{t('View Farm Site')}</StyledLinkExternal>
          <StyledLinkExternal href={contractLink}>{t('View Contract')}</StyledLinkExternal>
        </Box>
      </Flex>
    </Modal>
  )
}

export default VaultInformationModal
