import { SynapseConfig } from 'types/portal-config'
import { columnAliases } from './commonProps'
import { filesSql } from '../resources'

const rgbIndex = 1
export const visibleColumnCount = 7

const files: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    name: 'Files',
    sql: filesSql,
    visibleColumnCount,
    showExportToCavatica: true,
    isRowSelectionVisible: true,
    rowSelectionPrimaryKey: ['id'],
    fileIdColumnName: 'id',
    fileNameColumnName: 'name',
    fileVersionColumnName: 'currentVersion',
    tableConfiguration: {
      showAccessColumn: true,
      showDownloadColumn: true,
    },
    shouldDeepLink: true,
    columnAliases,
  },
}

export default files
