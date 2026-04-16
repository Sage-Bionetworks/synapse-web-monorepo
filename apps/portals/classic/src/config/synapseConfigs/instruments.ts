import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { instrumentsSql } from '../resources'

const instrumentsPlotNavProps: QueryWrapperPlotNavProps = {
  sql: instrumentsSql,
  //   name: 'Instruments',
  tableConfiguration: {
    showAccessColumn: false,
    showDownloadColumn: false,
  },
}

export default instrumentsPlotNavProps
