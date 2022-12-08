import React from 'react'
import { SourceAppConfig } from "components/SourceAppConfigs";
import { mtbPalette } from 'synapse-react-client/dist/utils/theme/palette/Palettes'
import MobileToolboxLogoSvg from '../assets/MobileToolboxLogo.svg'

const logo = <img
  src={MobileToolboxLogoSvg}
  style={{ width: 80 }}
  alt="Mobile Toolbox Logo"
/>

const description = 'Mobile Toolbox delivers digital tests of cognition to research study participants through a smartphone app, allowing researchers to conduct their studies remotely.'

export const mtb:SourceAppConfig = {
    appId: 'MTB',
    redirectURL: 'https://www.mobiletoolbox.org/',
    friendlyName: 'Mobile Toolbox',
    logo,
    theme: {
      palette: mtbPalette
    },
    description
  }

export const mtbStaging:SourceAppConfig = {
    appId: 'MTB-staging',
    redirectURL: 'https://staging.mobiletoolbox.org/',
    friendlyName: 'Mobile Toolbox (staging)',
    logo,
    theme: {
      palette: mtbPalette
    },
    description
  }