import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import columnAliases from '../columnAliases'
import { filesSql } from '../resources'

const rgbIndex = 8

export const files: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    shouldDeepLink: true,
    sql: filesSql,
    name: 'Files',
    visibleColumnCount: Infinity,
    tableConfiguration: {
      showDownloadColumn: true,
    },
    columnAliases,
    searchConfiguration: {
      searchable: [
        'tummorType',
        'tissue',
        'assay',
        'dataFormat',
        'species',
        'gender',
        'grantName',
        'grant',
      ],
    },
  },
}
