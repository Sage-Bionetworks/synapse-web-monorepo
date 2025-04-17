import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import {
  QueryWrapperPlotNavProps,
  StandaloneQueryWrapperProps,
} from 'synapse-react-client'
import columnAliases from '../columnAliases'
import { dataSql } from '../resources'

const rgbIndex = 0
// export const dataColumnLinks: LabelLinkConfig = [
//   {
//     matchColumnName: 'dataset',
//     isMarkdown: false,
//     baseURL: 'Explore/Datasets/DetailsPage',
//     URLColumnName: 'id',
//   },
// ]

export const dataQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  shouldDeepLink: true,
  sql: dataSql,
  name: 'Data',
  columnAliases,
  defaultShowSearchBox: true,
  tableConfiguration: {
    // columnLinks: dataColumnLinks,
  },
  // facetsToPlot: ['program', 'project'],
}

export const dataDetailPageProps: StandaloneQueryWrapperProps = {
  sql: dataSql,
  rgbIndex,
  // columnLinks: dataColumnLinks,
  hideDownload: true,
  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
}
