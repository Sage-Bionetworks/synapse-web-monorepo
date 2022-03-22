import MobileToolboxLogoSvg from 'assets/MobileToolboxLogo.svg'
import SynapseLogoSvg from 'assets/SynapseLogo.svg'
import React from 'react'

export type SourceAppConfig = {
  appId: string // app ID used in the query params
  redirectURL: string // URL to redirect back to
  friendlyName: string
  logo: JSX.Element
}

const mobileToolboxLogo = <img
  src={MobileToolboxLogoSvg}
  alt="Mobile Toolbox Logo"
/>
const synapseLogo = <img
  src={SynapseLogoSvg}
  style={{ height: 50 }}
  alt="Synapse.org Logo"
/>

const SourceAppConfigs:SourceAppConfig[] = [
  {
    appId: 'MTB',
    redirectURL: 'https://www.mobiletoolbox.org/',
    friendlyName: 'Mobile Toolbox',
    logo: mobileToolboxLogo
  },
  {
    appId: 'MTB-staging',
    redirectURL: 'https://staging.mobiletoolbox.org/',
    friendlyName: 'Mobile Toolbox (staging)',
    logo: mobileToolboxLogo
  },
  {
    appId: 'synapse.org',
    redirectURL: 'https://www.synapse.org/',
    friendlyName: 'Synapse',
    logo: synapseLogo
  },
  {
    appId: 'staging.synapse.org',
    redirectURL: 'https://staging.synapse.org/',
    friendlyName: 'Synapse (staging)',
    logo: synapseLogo
  },
]


export default SourceAppConfigs