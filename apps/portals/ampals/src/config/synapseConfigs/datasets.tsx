import ampAlsAccessColumn from '@/components/AmpAlsAccessColumn'
import type {
  CardConfiguration,
  LabelLinkConfig,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import columnAliases from '../columnAliases'
import { datasetsSql } from '../resources'

const rgbIndex = 0
export const datasetColumnLinks: LabelLinkConfig = [
  {
    isMarkdown: false,
    baseURL: 'Explore/Datasets/DetailsPage',
    URLColumnName: 'id',
    matchColumnName: 'name',
    overrideValueWithRowID: true,
  },
]

export const datasetQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  shouldDeepLink: true,
  sql: datasetsSql,
  name: 'Datasets',
  columnAliases,
  tableConfiguration: {
    columnLinks: datasetColumnLinks,
    showAccessColumn: false, // use custom access column instead
    customColumns: [ampAlsAccessColumn],
  },
  defaultShowSearchBox: true,
  facetsToPlot: ['program', 'project', 'datasetType', 'assay'],
  searchConfiguration: {
    searchable: ['name', 'program', 'project', 'datasetType', 'assay'],
  },
}

export const datasetSchema: TableToGenericCardMapping = {
  type: 'Dataset',
  title: 'name',
  subTitle: 'program',
  description: 'description',
  secondaryLabels: ['project', 'assay', 'datasetType', 'id'],
  icon: 'datasetType',
}
export const datasetColumnAliases: Record<string, string> = {
  id: 'On Synapse',
}
export const datasetCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: datasetSchema,
  titleLinkConfig: {
    isMarkdown: false,
    matchColumnName: 'id',
    URLColumnName: 'id',
    baseURL: 'Explore/Datasets/DetailsPage',
  },
}
