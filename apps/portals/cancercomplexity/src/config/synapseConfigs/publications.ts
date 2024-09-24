import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import type { GenericCardSchema } from 'synapse-react-client'
import type { CardConfiguration } from 'synapse-react-client'
import columnAliases from '../columnAliases'
import { publicationSql } from '../resources'
import { Direction } from '@sage-bionetworks/synapse-types'

const rgbIndex = 1

export const publicationSchema: GenericCardSchema = {
  type: SynapseConstants.PUBLICATION,
  title: 'publicationTitle',
  subTitle: 'authors',
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
}

export const publications: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
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
  },
}
