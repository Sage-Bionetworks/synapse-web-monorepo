import type {
  CardConfiguration,
  GenericCardSchema,
  LabelLinkConfig,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
import columnAliases from '../columnAliases'
import { datasetsSql } from '../resources'
import experimentalDataSvg from '../style/experimentalData.svg?url'
import publicationDataSvg from '../style/publicationData.svg?url'

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
  },
  facetsToPlot: ['program', 'project', 'datasetType', 'assay'],
  searchConfiguration: {
    searchable: ['name', 'program', 'project', 'datasetType', 'assay'],
  },
}

export const datasetSchema: GenericCardSchema = {
  type: 'Dataset',
  title: 'name',
  subTitle: 'program',
  description: 'description',
  secondaryLabels: ['project', 'assay', 'datasetType'],
  icon: 'datasetType',
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
  iconOptions: {
    Publication: publicationDataSvg,
    'Experimental Data': experimentalDataSvg,
  },
}
