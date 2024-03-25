import { SynapseConfig } from 'types/portal-config'
import { genieDataSql } from '../resources'

const rgbIndex = 0

const genieData: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: genieDataSql,
    name: 'Files',
    showExportToCavatica: true,
    isRowSelectionVisible: true,
    rowSelectionPrimaryKey: ['id'],
    tableConfiguration: {
      showAccessColumn: true,
      // set the entity ID column and version column to use (instead of the Row ID and Version)
      rowEntityIDColumnName: 'id',
      rowEntityVersionColumnName: 'currentVersion',
    },
    defaultShowPlots: false,
  },
}

export default genieData
