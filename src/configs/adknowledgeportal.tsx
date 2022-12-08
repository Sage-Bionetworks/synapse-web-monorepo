import React from 'react'
import { SourceAppConfig } from "components/SourceAppConfigs";
import { adKnowledgePortalPalette } from 'synapse-react-client/dist/utils/theme/palette/Palettes'
import LogoSvg from '../assets/ADKnowledgePortalLogo.svg'

const logo = <img
  src={LogoSvg}
  alt="Logo"
/>

const description = 'Discover and download Alzheimer\'s Disease data, analyses, and tools from the National Institute on Aging\'s Alzheimer\'s Disease Translational Research Program.'

export const adKnowledgePortal:SourceAppConfig = {
    appId: 'ADKnowledgePortal',
    redirectURL: 'https://adknowledgeportal.synapse.org/',
    friendlyName: 'AD Knowledge Portal',
    logo,
    theme: {
      palette: adKnowledgePortalPalette
    },
    description
  }

export const adKnowledgePortalStaging:SourceAppConfig = {
    appId: 'ADKnowledgePortal-staging',
    redirectURL: 'https://staging.adknowledgeportal.synapse.org/',
    friendlyName: 'AD Knowledge Portal (staging)',
    logo,
    theme: {
      palette: adKnowledgePortalPalette
    },
    description
  }