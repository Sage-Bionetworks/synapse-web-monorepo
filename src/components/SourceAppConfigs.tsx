import { ThemeOptions } from '@mui/material'
import { adKnowledgePortal } from 'configs/adknowledgeportal'
import { ark } from 'configs/ark'
import { bsmn } from 'configs/bsmn'
import { cckp } from 'configs/cancercomplexity'
import { dHealth } from 'configs/dhealth'
import { mtb } from 'configs/mtb'
import { nf } from 'configs/nf'
import { psychEncode } from 'configs/psychencode'
import { synapse } from 'configs/synapse'

export type SourceAppConfig = {
  appId: string // app ID used in the query params
  appURL: string // URL that points to the production version of this app
  friendlyName: string
  logo: JSX.Element
  theme: ThemeOptions
  description: string
}

export const SourceAppConfigs: SourceAppConfig[] = [
  mtb,
  synapse,
  adKnowledgePortal,
  ark,
  bsmn,
  cckp,
  dHealth,
  nf,
  psychEncode,
  // stopAd,
]

export default SourceAppConfigs
