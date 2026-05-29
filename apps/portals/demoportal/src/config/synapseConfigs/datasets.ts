import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { datasetsSql } from '../resources'

export const datasetsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex: 0,
  name: 'Datasets',
  visibleColumnCount: 10,
  tableConfiguration: {
    showAccessColumn: true,
    showDownloadColumn: true,
  },
  sql: datasetsSql,
  shouldDeepLink: true,
}
