import React from 'react'
import { SourceAppConfig } from "components/SourceAppConfigs";
import { digitalHealthPortalPalette } from 'synapse-react-client/dist/utils/theme/palette/Palettes'
import LogoSvg from '../assets/DHealthLogo.svg'

const logo = <img
  src={LogoSvg}
  alt="Logo"
/>

const description = 'A Digital Health Knowledge Portal to enable the discovery and download digital and mobile health data, tools, and benchmarked outcomes and digital biomarkers.'

export const dHealth:SourceAppConfig = {
    appId: 'dHealth',
    redirectURL: 'https://dhealth.synapse.org/',
    friendlyName: 'dHealth Digital Health Data Portal',
    logo,
    theme: {
      palette: digitalHealthPortalPalette
    },
    description
  }

export const dHealthStaging:SourceAppConfig = {
    appId: 'dHealth-staging',
    redirectURL: 'https://staging.dhealth.synapse.org/',
    friendlyName: 'dHealth Digital Health Data Portal (staging)',
    logo,
    theme: {
      palette: digitalHealthPortalPalette
    },
    description
  }