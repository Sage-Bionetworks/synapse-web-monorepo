import React from 'react'
import { SourceAppConfig } from 'components/SourceAppConfigs'
import palette from 'synapse-react-client/dist/utils/theme/palette/Palettes'
import SynapseLogoSvg from '../assets/SynapseLogo.svg'

const logo = <img src={SynapseLogoSvg} alt="Synapse.org Logo" />

const description =
  'Synapse is a collaborative compute space that allows scientists to share and analyze data together.'

export const synapse: SourceAppConfig = {
  appId: 'synapse.org',
  appURL: 'https://www.synapse.org/',
  friendlyName: 'Synapse',
  logo,
  palette: palette,
  description,
}
