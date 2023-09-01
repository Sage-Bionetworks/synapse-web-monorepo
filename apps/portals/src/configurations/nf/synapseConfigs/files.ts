import { SynapseConfig } from '../../../types/portal-config'
import { filesSql } from '../resources'
import { columnAliases } from './commonProps'

const rgbIndex = 1
export const visibleColumnCount = 7

const files: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    name: 'Files',
    sql: filesSql,
    visibleColumnCount,
    tableConfiguration: {
      showAccessColumn: true,
      showDownloadColumn: true,
    },
    shouldDeepLink: true,
    columnAliases,
  },
}

export default files
