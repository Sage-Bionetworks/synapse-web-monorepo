import React from 'react'
import { SourceAppConfig } from 'components/SourceAppConfigs'
import { adKnowledgePortalPalette } from 'synapse-react-client/dist/utils/theme/palette/Palettes'
import LogoSvg from '../assets/ADKnowledgePortalLogo.svg'

const logo = <img src={LogoSvg} alt="Logo" />

const description =
  "Discover and download Alzheimer's Disease data, analyses, and tools from the National Institute on Aging's Alzheimer's Disease Translational Research Program."

export const adKnowledgePortal: SourceAppConfig = {
  appId: 'ADKP',
  appURL: 'https://adknowledgeportal.synapse.org/',
  friendlyName: 'AD Knowledge Portal',
  logo,
  palette: adKnowledgePortalPalette,
  description,
}
