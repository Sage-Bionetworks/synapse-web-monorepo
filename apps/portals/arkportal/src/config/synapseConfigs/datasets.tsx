import experimentalDataSvg from '@/config/style/experimentalData.svg?url'
import publicationDataSvg from '@/config/style/publicationData.svg?url'
import type {
  CardConfiguration,
  LabelLinkConfig,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import columnAliases from '../columnAliases'
import { datasetsSql } from '../resources'
import { citationBoilerplateText } from './commonProps'

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

export const datasetSchema: TableToGenericCardMapping = {
  type: 'Dataset',
  title: 'name',
  subTitle: 'program',
  description: 'description',
  secondaryLabels: ['project', 'programPhase', 'assay', 'datasetType', 'id'],
  icon: 'datasetType',
  includeCitation: true,
  defaultCitationFormat: 'nature',
  citationBoilerplateText: citationBoilerplateText,
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
  iconOptions: {
    Publication: publicationDataSvg,
    'Experimental Data': experimentalDataSvg,
  },
}
