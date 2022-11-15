import MobileToolboxLogoSvg from 'assets/MobileToolboxLogo.svg'
import SynapseLogoSvg from 'assets/SynapseLogo.svg'
import { ThemeOptions, } from '@mui/material'
import React from 'react'
import palette from 'synapse-react-client/dist/utils/theme/palette/Palette'
import mtbPalette from './palettes/MtbPalette'

export type SourceAppConfig = {
  appId: string // app ID used in the query params
  redirectURL: string // URL to redirect back to
  friendlyName: string
  logo: JSX.Element,
  theme: ThemeOptions
}

const mobileToolboxLogo = <img
  src={MobileToolboxLogoSvg}
  style={{ width: 80 }}
  alt="Mobile Toolbox Logo"
/>
const synapseLogo = <img
  src={SynapseLogoSvg}
  style={{ height: 50, width: 50 }}
  alt="Synapse.org Logo"
/>

const SourceAppConfigs:SourceAppConfig[] = [
  {
    appId: 'MTB',
    redirectURL: 'https://www.mobiletoolbox.org/',
    friendlyName: 'Mobile Toolbox',
    logo: mobileToolboxLogo,
    theme: {
      palette: mtbPalette
    }
  },
  {
    appId: 'MTB-staging',
    redirectURL: 'https://staging.mobiletoolbox.org/',
    friendlyName: 'Mobile Toolbox (staging)',
    logo: mobileToolboxLogo,
    theme: {
      palette: mtbPalette
    }
  },
  {
    appId: 'synapse.org',
    redirectURL: 'https://www.synapse.org/',
    friendlyName: 'Synapse',
    logo: synapseLogo,
    theme: {
      palette: palette
    }
  },
  {
    appId: 'staging.synapse.org',
    redirectURL: 'https://staging.synapse.org/',
    friendlyName: 'Synapse (staging)',
    logo: synapseLogo,
    theme: {
      palette: palette
    }
  },
]


export default SourceAppConfigs