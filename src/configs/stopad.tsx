import React from 'react'
import { SourceAppConfig } from "components/SourceAppConfigs";
import { stopAdPortalPalette } from 'synapse-react-client/dist/utils/theme/palette/Palettes'
import LogoSvg from '../assets/StopAdLogo.svg'

const logo = <img
  src={LogoSvg}
  alt="Logo"
/>

const description = "Screening the Optimal Pharmaceutical for Alzheimer's Disease (STOP-AD) is a program that offers preclinical screening of compounds through the MODEL-AD Preclinical Testing Core."

export const stopAd:SourceAppConfig = {
    appId: 'stopad',
    redirectURL: 'https://stopadportal.synapse.org/',
    friendlyName: 'STOP-AD Portal',
    logo,
    theme: {
      palette: stopAdPortalPalette
    },
    description
  }

export const stopAdStaging:SourceAppConfig = {
    appId: 'stopad-staging',
    redirectURL: 'https://staging.stopadportal.synapse.org/',
    friendlyName: 'STOP-AD Portal (staging)',
    logo,
    theme: {
      palette: stopAdPortalPalette
    },
    description
  }