import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { variablesSql } from '../resources'

const variablesPlotNavProps: QueryWrapperPlotNavProps = {
  sql: variablesSql,
  //   name: 'Variables',
  tableConfiguration: {
    showAccessColumn: false,
    showDownloadColumn: false,
  },
}

export default variablesPlotNavProps
