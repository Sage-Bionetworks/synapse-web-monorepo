import { ThemeOptions, } from '@mui/material'
import { adKnowledgePortal, adKnowledgePortalStaging } from 'configs/adknowledgeportal'
import { ark, arkStaging } from 'configs/ark'
import { bsmn, bsmnStaging } from 'configs/bsmn'
import { cckp, cckpStaging } from 'configs/cancercomplexity'
import { dHealth, dHealthStaging } from 'configs/dhealth'
import { mtb, mtbStaging } from 'configs/mtb'
import { nf, nfStaging } from 'configs/nf'
import { psychEncode, psychEncodeStaging } from 'configs/psychencode'
import { stopAd, stopAdStaging } from 'configs/stopad'
import { synapse, synapseStaging } from 'configs/synapse'

export type SourceAppConfig = {
  appId: string // app ID used in the query params
  redirectURL: string // URL to redirect back to
  friendlyName: string
  logo: JSX.Element,
  theme: ThemeOptions,
  description: string
}

export const SourceAppConfigs:SourceAppConfig[] = [
  mtb,
  mtbStaging,
  synapse,
  synapseStaging,
  adKnowledgePortal,
  adKnowledgePortalStaging,
  ark,
  arkStaging,
  bsmn,
  bsmnStaging,
  cckp,
  cckpStaging,
  dHealth,
  dHealthStaging,
  nf,
  nfStaging,
  psychEncode,
  psychEncodeStaging,
  stopAd,
  stopAdStaging
]

export default SourceAppConfigs