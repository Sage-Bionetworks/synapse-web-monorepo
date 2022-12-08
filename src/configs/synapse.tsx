import React from 'react'
import { SourceAppConfig } from "components/SourceAppConfigs";
import palette from 'synapse-react-client/dist/utils/theme/palette/Palettes'
import SynapseLogoSvg from '../assets/SynapseLogo.svg'

const logo = <img
  src={SynapseLogoSvg}
  style={{ height: 50, width: 50 }}
  alt="Synapse.org Logo"
/>

const description = 'Synapse is a collaborative compute space that allows scientists to share and analyze data together.'

export const synapse:SourceAppConfig = {
  appId: 'synapse.org',
  redirectURL: 'https://www.synapse.org/',
  friendlyName: 'Synapse',
  logo,
  theme: {
    palette: palette
  },
  description
}

export const synapseStaging:SourceAppConfig = {
  appId: 'staging.synapse.org',
  redirectURL: 'https://staging.synapse.org/',
  friendlyName: 'Synapse (staging)',
  logo,
  theme: {
    palette: palette
  },
  description
}