import type { QueryWrapperPlotNavProps } from 'synapse-react-client'
import {
  cavaticaConnectAccountURL,
  dataSql,
  enabledAnalysisPlatforms,
} from '../resources'

const rgbIndex = 1

export const dataQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  name: 'Data',
  visibleColumnCount: 10,
  enabledExternalAnalysisPlatforms: enabledAnalysisPlatforms,
  cavaticaConnectAccountURL: cavaticaConnectAccountURL,
  isRowSelectionVisible: true,
  tableConfiguration: {
    showAccessColumn: true,
    showDownloadColumn: true,
  },
  sql: dataSql,
  shouldDeepLink: true,
}
