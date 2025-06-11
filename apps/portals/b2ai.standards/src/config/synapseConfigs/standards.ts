import IsMatureIconMap from '@/components/IsMatureIconMap'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import {
  LabelLinkConfig,
  QueryWrapperPlotNavProps,
  StandaloneQueryWrapperProps,
} from 'synapse-react-client'
import columnAliases from '../columnAliases'
import {
  standardsFtsConfig,
  // dataSetExploreSql,
  standardsSql,
  DST_TABLE_COLUMN_NAMES,
} from '../resources'

const standardsRgbIndex = 0
export const standardsColumnLinks: LabelLinkConfig = [
  {
    isMarkdown: true,
    // the column whose value will be used for the markdown
    matchColumnName: 'acronym',
    // If set, also show a tooltip
    // tooltipText?: string
  },
  {
    matchColumnName: 'isMature',
    isMapValueToReactNodeConfig: true,
    Component: IsMatureIconMap,
  },
]

export const standardsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex: standardsRgbIndex,
  shouldDeepLink: true,
  hideDownload: false,
  sql: standardsSql, // TODO: now that we're having more pages, this should be renamed standardsSql
  name: 'Standards',
  columnAliases,
  tableConfiguration: {
    showDownloadColumn: false,
    columnLinks: standardsColumnLinks,
  },
  facetsToPlot: [
    'topic',
    // 'Organizations',
    DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_NAMES,
  ],
  initialPlotType: 'BAR',
  searchConfiguration: {
    ftsConfig: standardsFtsConfig,
  },
}

export const standardsDetailPageProps: StandaloneQueryWrapperProps = {
  sql: standardsSql,
  rgbIndex: standardsRgbIndex,
  columnLinks: standardsColumnLinks,
  hideDownload: true,
  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
}
