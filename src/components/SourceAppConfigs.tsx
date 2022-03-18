import { MobileToolboxLogo } from 'assets/MobileToolboxLogo'
import { SynapseLogo } from 'assets/SynapseLogo'
import React from 'react'

export type SourceAppConfig = {
  appId: string // app ID used in the query params
  redirectURL: string // URL to redirect back to
  friendlyName: string
  logo: JSX.Element
}

const SourceAppConfigs:SourceAppConfig[] = [
  {
    appId: 'MTB',
    redirectURL: 'https://www.mobiletoolbox.org/',
    friendlyName: 'Mobile Toolbox',
    logo: <MobileToolboxLogo />
  },
  {
    appId: 'MTB-staging',
    redirectURL: 'https://staging.mobiletoolbox.org/',
    friendlyName: 'Mobile Toolbox (staging)',
    logo: <MobileToolboxLogo />
  },
  {
    appId: 'synapse.org',
    redirectURL: 'https://www.synapse.org/',
    friendlyName: 'Synapse',
    logo: <SynapseLogo />
  },
  {
    appId: 'staging.synapse.org',
    redirectURL: 'https://staging.synapse.org/',
    friendlyName: 'Synapse (staging)',
    logo: <SynapseLogo />
  },
]


export default SourceAppConfigs