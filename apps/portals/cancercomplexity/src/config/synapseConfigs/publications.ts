import { Direction } from '@sage-bionetworks/synapse-types'
import type {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import columnAliases from '../columnAliases'
import { publicationSql } from '../resources'
import { citationBoilerplateText } from './commonProps'
import { columnIconConfigs } from './commonProps'

const rgbIndex = 1

export const publicationSchema: TableToGenericCardMapping = {
  type: SynapseConstants.PUBLICATION,
  title: 'publicationTitle',
  subTitle: 'authors',
  includeCitation: true,
  defaultCitationFormat: 'nature',
  citationBoilerplateText: citationBoilerplateText,
  secondaryLabels: [
    'pubMedLink',
    'journal',
    'publicationYear',
    'theme',
    'tumorType',
    'tissue',
    'assay',
    'keywords',
    'doi',
    'consortium',
  ],
  dataTypeIconNames: 'dataType',
}

export const publicationsCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: publicationSchema,
  secondaryLabelLimit: 5,
  titleLinkConfig: {
    isMarkdown: false,
    URLColumnName: 'pubMedId',
    matchColumnName: 'pubMedId',
    baseURL: 'Explore/Publications/DetailsPage',
  },
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'pubMedLink',
    },
    {
      isMarkdown: true,
      matchColumnName: 'doi',
    },
    {
      isMarkdown: false,
      baseURL: 'Explore/Grants/DetailsPage',
      matchColumnName: 'grantName',
      URLColumnName: 'grantName',
    },
    {
      isMarkdown: false,
      baseURL: 'Explore/Datasets/DetailsPage',
      URLColumnName: 'datasetAlias',
      matchColumnName: 'dataset',
    },
  ],
  columnIconOptions: columnIconConfigs,
}

export const publicationsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  cardConfiguration: publicationsCardConfiguration,
  sql: publicationSql,
  shouldDeepLink: true,
  name: 'Publications',
  columnAliases,
  facetValueSortConfigs: [
    { columnName: 'publicationYear', direction: Direction.DESC },
  ],
  searchConfiguration: {
    ftsConfig: {
      textMatchesMode: 'BOOLEAN',
      distance: 3,
    },
    searchable: [
      'publicationTitle',
      'authors',
      'journal',
      'doi',
      'pubMedId',
      'keywords',
      'tummorType',
      'tissue',
      'assay',
      'grantName',
      'grantNumber',
      'dataset',
    ],
  },
}
