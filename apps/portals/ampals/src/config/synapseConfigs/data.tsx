import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import {
  QueryWrapperPlotNavProps,
  StandaloneQueryWrapperProps,
  LabelLinkConfig,
} from 'synapse-react-client'
import columnAliases from '../columnAliases'
import { filesSql } from '../resources'

const rgbIndex = 0
export const dataColumnLinks: LabelLinkConfig = [
  {
    matchColumnName: 'dataset',
    isMarkdown: false,
    baseURL: 'Explore/Datasets/DetailsPage',
    URLColumnName: 'id',
  },
]

export const filesQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  shouldDeepLink: true,
  sql: filesSql,
  name: 'Files',
  columnAliases,
  defaultShowSearchBox: true,
  tableConfiguration: {
    columnLinks: dataColumnLinks,
    showAccessColumn: true,
    showExternalAccessIcon: true,
  },
  // facetsToPlot: ['program', 'project'],
}

export const filesDetailPageProps: StandaloneQueryWrapperProps = {
  sql: filesSql,
  rgbIndex,
  // columnLinks: dataColumnLinks,
  hideDownload: true,
  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
}
