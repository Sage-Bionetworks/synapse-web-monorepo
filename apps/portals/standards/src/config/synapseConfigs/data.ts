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
  {
    isMarkdown: false,
    baseURL: 'Explore/Standard/DetailsPage',
    // URLColumnName: 'name',
    // matchColumnName: 'name',
    URLColumnName: 'id',
    matchColumnName: 'id',
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
    // 'Data_Topic',  // what it's called in DataRegistry
    'topic', // what it's called in DST_denormalized
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
