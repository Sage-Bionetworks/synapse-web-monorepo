import React from 'react'
import { SourceAppConfig } from "components/SourceAppConfigs";
import { bsmnPortalPalette } from 'synapse-react-client/dist/utils/theme/palette/Palettes'
import LogoSvg from '../assets/BSMNLogo.svg'

const logo = <img
  src={LogoSvg}
  alt="Logo"
/>

const description = 'Access data and tools from a multi-site effort funded by the National Institute of Mental Health to study the role of brain somatic mosaicism in neuropsychiatric disease.'

export const bsmn:SourceAppConfig = {
    appId: 'BSMN',
    redirectURL: 'https://bsmn.synapse.org/',
    friendlyName: 'BSMN Knowledge Portal',
    logo,
    theme: {
      palette: bsmnPortalPalette
    },
    description
  }

export const bsmnStaging:SourceAppConfig = {
    appId: 'BSMN-staging',
    redirectURL: 'https://staging.bsmn.synapse.org/',
    friendlyName: 'BSMN Knowledge Portal (staging)',
    logo,
    theme: {
      palette: bsmnPortalPalette
    },
    description
  }