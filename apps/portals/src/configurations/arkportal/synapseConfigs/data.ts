import {
  LabelLinkConfig,
  StandaloneQueryWrapperProps,
} from 'synapse-react-client'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { SynapseConfig } from '../../../types/portal-config'
import columnAliases from '../columnAliases'
import { dataSql } from '../resources'

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

const data: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
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
      searchable: ['name', 'program', 'project'],
    },
    defaultShowFacetVisualization: false,
  },
}

export const dataDetailPageProps: StandaloneQueryWrapperProps = {
  sql: dataSql,
  rgbIndex,
  columnLinks: dataColumnLinks,
  hideDownload: true,
  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
}

export default data
