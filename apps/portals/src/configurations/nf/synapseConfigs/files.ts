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
    tableConfiguration: {
      showAccessColumn: true,
      showDownloadColumn: true,
      // set the entity ID column and version column to use (instead of the Row ID and Version)
      rowEntityIDColumnName: 'id',
      rowEntityVersionColumnName: 'currentVersion',
    },
    shouldDeepLink: true,
    columnAliases,
  },
}

export default files
