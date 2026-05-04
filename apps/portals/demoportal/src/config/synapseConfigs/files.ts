import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { filesSql } from '../resources'

export const filesQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex: 1,
  name: 'Files',
  visibleColumnCount: 10,
  isRowSelectionVisible: true,
  rowSelectionPrimaryKey: ['id'],
  tableConfiguration: {
    showAccessColumn: true,
    showDownloadColumn: true,
  },
  sql: filesSql,
  shouldDeepLink: true,
}
