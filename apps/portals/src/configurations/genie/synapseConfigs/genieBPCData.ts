import { SynapseConfig } from 'types/portal-config'
import { genieBPCSql } from '../resources'

const rgbIndex = 0

const genieBPCData: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: genieBPCSql,
    name: 'Files',
    showExportToCavatica: true,
    isRowSelectionVisible: true,
    rowSelectionPrimaryKey: ['id'],
    visibleColumnCount: 6,
    tableConfiguration: {
      showAccessColumn: true,
      // set the entity ID column and version column to use (instead of the Row ID and Version)
      rowEntityIDColumnName: 'id',
      rowEntityVersionColumnName: 'currentVersion',
    },
    defaultShowPlots: false,
  },
}

export default genieBPCData
