import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import type { LabelLinkConfig } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import type { StandaloneQueryWrapperProps } from 'synapse-react-client/components/StandaloneQueryWrapper/StandaloneQueryWrapper'
import columnAliases from '../columnAliases'
import { dataSql, enabledAnalysisPlatforms } from '../resources'

const rgbIndex = 0
export const dataColumnLinks: LabelLinkConfig = [
  {
    matchColumnName: 'project',
    isMarkdown: false,
    baseURL: 'Explore/Projects/DetailsPage',
    URLColumnName: 'Project',
  },
  {
    matchColumnName: 'program',
    isMarkdown: false,
    baseURL: 'Explore/Programs/DetailsPage',
    URLColumnName: 'Program',
  },
  {
    matchColumnName: 'dataset',
    isMarkdown: false,
    baseURL: 'Explore/Datasets/DetailsPage',
    URLColumnName: 'id',
  },
]

export const dataQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  shouldDeepLink: true,
  sql: dataSql,
  name: 'Data',
  columnAliases,
  tableConfiguration: {
    columnLinks: dataColumnLinks,
  },
  facetsToPlot: ['program', 'project'],
  searchConfiguration: {
    searchable: ['name', 'program', 'project', 'id'],
  },
  enabledExternalAnalysisPlatforms: enabledAnalysisPlatforms,
  isRowSelectionVisible: true,
}

export const dataDetailPageProps: StandaloneQueryWrapperProps = {
  sql: dataSql,
  rgbIndex,
  columnLinks: dataColumnLinks,
  hideDownload: true,
  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
}
