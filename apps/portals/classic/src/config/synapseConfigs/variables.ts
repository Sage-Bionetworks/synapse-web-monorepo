import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { variablesSql } from '../resources'

const variablesPlotNavProps: QueryWrapperPlotNavProps = {
  sql: variablesSql,
  //   name: 'Variables',
  fileIdColumnName: 'id',
  tableConfiguration: {
    showAccessColumn: true,
    showDownloadColumn: false,
    hideAddToDownloadListColumn: true,
  },
}

export default variablesPlotNavProps
