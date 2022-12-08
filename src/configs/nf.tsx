import React from 'react'
import { SourceAppConfig } from "components/SourceAppConfigs";
import { nfPortalPalette } from 'synapse-react-client/dist/utils/theme/palette/Palettes'
import LogoSvg from '../assets/NFLogo.svg'

const logo = <img
  src={LogoSvg}
  alt="Logo"
/>

const description = 'An open science platform to help scientists find neurofibromatosis - NF1, NF2, schwannomatosis - datasets, resources, analysis, tools, and publications.'

export const nf:SourceAppConfig = {
    appId: 'nf',
    redirectURL: 'https://nf.synapse.org/',
    friendlyName: 'NF Data Portal',
    logo,
    theme: {
      palette: nfPortalPalette
    },
    description
  }

export const nfStaging:SourceAppConfig = {
    appId: 'nf-staging',
    redirectURL: 'https://staging.nf.synapse.org/',
    friendlyName: 'NF Data Portal (staging)',
    logo,
    theme: {
      palette: nfPortalPalette
    },
    description
  }