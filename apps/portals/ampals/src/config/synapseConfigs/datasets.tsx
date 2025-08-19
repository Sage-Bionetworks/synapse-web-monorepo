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
  {
    isMarkdown: false,
    linkColumnName: 'url',
    matchColumnName: 'source',
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
  isInfinite: true,
  initialLimit: 50,
}

export const datasetSchema: TableToGenericCardMapping = {
  type: SynapseConstants.DATASET,
  title: 'name',
  subTitle: 'program',
  description: 'description',
  secondaryLabels: ['keywords', 'id', 'source'],
}
export const datasetColumnAliases: Record<string, string> = {
  id: 'On Synapse',
  url: 'External Repository',
}
export const datasetCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: datasetSchema,

  titleLinkConfig: {
    isMarkdown: false,
    matchColumnName: 'name',
    overrideLinkURLColumnName: 'url',
  },

  labelLinkConfig: datasetColumnLinks,
}
