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
    fileIdColumnName: 'id',
    fileNameColumnName: 'name',
    fileVersionColumnName: 'fileVersion',
    tableConfiguration: {
      showAccessColumn: true,
    },
    defaultShowPlots: false,
  },
}

export default genieBPCData
