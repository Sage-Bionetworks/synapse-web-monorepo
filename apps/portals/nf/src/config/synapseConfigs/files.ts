import { columnAliases } from './commonProps'
import { filesSql } from '../resources'
import { QueryWrapperPlotNavProps } from 'synapse-react-client'

const rgbIndex = 1
export const visibleColumnCount = 7
export const filesPlotNavProps: QueryWrapperPlotNavProps = {
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
}

export default filesPlotNavProps
