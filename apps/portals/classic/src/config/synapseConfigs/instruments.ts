import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { instrumentsSql } from '../resources'

const instrumentsPlotNavProps: QueryWrapperPlotNavProps = {
  sql: instrumentsSql,
  //   name: 'Instruments',
  fileIdColumnName: 'id',
  tableConfiguration: {
    showAccessColumn: true,
    showDownloadColumn: false,
    hideAddToDownloadListColumn: true,
  },
}

export default instrumentsPlotNavProps
