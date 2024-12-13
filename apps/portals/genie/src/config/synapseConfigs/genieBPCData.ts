import { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/index'
import { genieBPCSql } from '../resources'

const rgbIndex = 0

const genieBPCDataQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: genieBPCSql,
  name: 'Files',
  showExportToCavatica: true,
  isRowSelectionVisible: true,
  rowSelectionPrimaryKey: ['id'],
  visibleColumnCount: 6,
  fileIdColumnName: 'id',
  fileNameColumnName: 'name',
  fileVersionColumnName: 'currentVersion',
  tableConfiguration: {
    showAccessColumn: true,
  },
  defaultShowPlots: false,
}

export default genieBPCDataQueryWrapperPlotNavProps
