import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from 'types/portal-config'
import { GenericCardSchema } from 'synapse-react-client/dist/containers/GenericCard'
import { CardConfiguration } from 'synapse-react-client/dist/containers/CardContainerLogic'
import columnAliases from '../columnAliases'
import { publicationSql } from '../resources'

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
