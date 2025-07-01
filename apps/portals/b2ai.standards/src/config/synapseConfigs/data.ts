import IsMatureIconMap from '@/components/IsMatureIconMap'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import {
  LabelLinkConfig,
  QueryWrapperPlotNavProps,
  StandaloneQueryWrapperProps,
} from 'synapse-react-client'
import columnAliases from '../columnAliases'
import {
  dataFtsConfig,
  // dataSetExploreSql,
  dataSql,
  DST_TABLE_COLUMN_NAMES,
} from '../resources'

const dataRgbIndex = 0
export const dataColumnLinks: LabelLinkConfig = [
  {
    isMarkdown: true,
    // the column whose value will be used for the markdown
    matchColumnName: 'acronym',
    // If set, also show a tooltip
    // tooltipText?: string
  },
  {
    matchColumnName: 'mature',
    isMapValueToReactNodeConfig: true,
    Component: IsMatureIconMap,
  },
]

export const dataQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex: dataRgbIndex,
  shouldDeepLink: true,
  hideDownload: false,
  sql: dataSql, // TODO: now that we're having more pages, this should be renamed standardsSql
  name: 'Standards',
  columnAliases,
  tableConfiguration: {
    showDownloadColumn: false,
    columnLinks: dataColumnLinks,
  },
  facetsToPlot: [
    'topic',
    // 'Organizations',
    DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_NAMES,
  ],
  initialPlotType: 'BAR',
  searchConfiguration: {
    ftsConfig: dataFtsConfig,
  },
}

export const dataDetailPageProps: StandaloneQueryWrapperProps = {
  sql: dataSql,
  rgbIndex: dataRgbIndex,
  columnLinks: dataColumnLinks,
  hideDownload: true,
  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
}

/* part of PR #1865, not ready yet
const dataSetColumnLinks: LabelLinkConfig = [
  {
    isMarkdown: true,
    matchColumnName: 'name',
  },
]
export const dataSetsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex: dataRgbIndex,
  shouldDeepLink: true,
  hideDownload: false,
  sql: dataSetExploreSql,
  name: 'DataSets',
  columnAliases,
  tableConfiguration: {
    showDownloadColumn: false,
    columnLinks: dataSetColumnLinks,
  },
}
*/

export default dataQueryWrapperPlotNavProps
