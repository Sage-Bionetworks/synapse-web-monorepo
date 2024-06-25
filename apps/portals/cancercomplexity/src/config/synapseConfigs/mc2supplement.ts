import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { mc2SupplementSql } from '../resources'

const rgbIndex = 8

export const mc2SupplementTable: SynapseConfig = {
  name: 'StandaloneQueryWrapper',
  title: 'MC2 Digital Pathology QC Supplement',
  props: {
    rgbIndex,
    hideDownload: false,
    sql: mc2SupplementSql,
    showTopLevelControls: true,
    columnLinks: [
      {
        matchColumnName: 'fuse_mask',
        isEntityImage: true,
      },
      {
        matchColumnName: 'thumb',
        isEntityImage: true,
      },
    ],
  },
}
