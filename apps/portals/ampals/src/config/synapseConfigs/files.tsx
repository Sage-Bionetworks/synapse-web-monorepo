import type { QueryWrapperPlotNavProps } from 'synapse-react-client'
import columnAliases from '../columnAliases'
import { filesSql } from '../resources'

const rgbIndex = 1
export const visibleColumnCount = 7
export const filesQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  name: 'Files',
  sql: filesSql,
  visibleColumnCount,
  isRowSelectionVisible: true,
  rowSelectionPrimaryKey: ['id'],
  fileIdColumnName: 'id',
  fileNameColumnName: 'name',
  fileVersionColumnName: 'currentVersion',
  tableConfiguration: {
    showAccessColumn: true,
  },
  shouldDeepLink: true,
  columnAliases,
}
