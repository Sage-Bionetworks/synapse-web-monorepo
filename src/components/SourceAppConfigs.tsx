import { ThemeOptions, } from '@mui/material'
import { ark, arkStaging } from 'configs/ark'
import { mtb, mtbStaging } from 'configs/mtb'
import { synapse, synapseStaging } from 'configs/synapse'

export type SourceAppConfig = {
  appId: string // app ID used in the query params
  redirectURL: string // URL to redirect back to
  friendlyName: string
  logo: JSX.Element,
  theme: ThemeOptions,
  description: string
}

const SourceAppConfigs:SourceAppConfig[] = [
  mtb,
  mtbStaging,
  synapse,
  synapseStaging,
  ark,
  arkStaging,
]

export default SourceAppConfigs