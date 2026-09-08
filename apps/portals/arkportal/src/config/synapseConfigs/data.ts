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
    baseURL: 'Explore/Projects',
    URLColumnName: 'Project',
    urlParamStyle: 'path-segment',
  },
  {
    matchColumnName: 'program',
    isMarkdown: false,
    baseURL: 'Explore/Programs',
    URLColumnName: 'Program',
    urlParamStyle: 'path-segment',
  },
  {
    matchColumnName: 'dataset',
    isMarkdown: false,
    baseURL: 'Explore/Datasets',
    URLColumnName: 'id',
    urlParamStyle: 'path-segment',
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
