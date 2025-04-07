import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import {
  LabelLinkConfig,
  QueryWrapperPlotNavProps,
  StandaloneQueryWrapperProps,
} from 'synapse-react-client'
import columnAliases from '../columnAliases'
import { dataSql } from '../resources'

const dataRgbIndex = 0
export const dataColumnLinks: LabelLinkConfig = [
  /* {
    isMarkdown: false,
    baseURL: 'Explore/Standard/DetailsPage',
    matchColumnName: 'id',
    URLColumnName: 'id',
  },
  {
    isMarkdown: false,
    matchColumnName: 'acronym',
    linkColumnName: 'link',
  },
  */
  {
    isMarkdown: true,
    // the column whose value will be used for the markdown
    matchColumnName: 'acronym',
    // If set, also show a tooltip
    // tooltipText?: string
  },
]

export const dataQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex: dataRgbIndex,
  shouldDeepLink: true,
  hideDownload: true,
  sql: dataSql,
  name: 'Standards',
  columnAliases,
  tableConfiguration: {
    showDownloadColumn: false,
    columnLinks: dataColumnLinks,
  },

  facetsToPlot: [
    'topic',
    // 'Organizations',
    'relevantOrgName',
  ],
  initialPlotType: 'BAR',
}

export const dataDetailPageProps: StandaloneQueryWrapperProps = {
  sql: dataSql,
  rgbIndex: dataRgbIndex,
  columnLinks: dataColumnLinks,
  hideDownload: true,
  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
}

export default dataQueryWrapperPlotNavProps
