import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import type { GenericCardSchema } from 'synapse-react-client'
import type { CardConfiguration } from 'synapse-react-client'
import columnAliases from '../columnAliases'
import { datasetsSql } from '../resources'

const rgbIndex = 0

export const datasetSchema: GenericCardSchema = {
  type: SynapseConstants.DATASET,
  title: 'datasetName',
  description: 'description',
  secondaryLabels: [
    'overallDesign',
    'tumorType',
    'tissue',
    'assay',
    'species',
    'fileFormats',
    'externalLink',
    'consortium',
  ],
}

export const datasetCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: datasetSchema,
  secondaryLabelLimit: 4,
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'externalLink',
    },
    {
      isMarkdown: false,
      URLColumnName: 'publicationTitle',
      matchColumnName: 'publicationTitle',
      baseURL: 'Explore/Publications/DetailsPage',
    },
    {
      isMarkdown: false,
      matchColumnName: 'grantName',
      URLColumnName: 'grantName',
      baseURL: 'Explore/Grants/DetailsPage',
    },
  ],
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Datasets/DetailsPage',
    URLColumnName: 'datasetId',
    matchColumnName: 'datasetId',
  },
}

export const datasets: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    cardConfiguration: datasetCardConfiguration,
    shouldDeepLink: true,
    name: 'Datasets',
    sql: datasetsSql,
    columnAliases,
    hideDownload: true,
    searchConfiguration: {
      searchable: [
        'datasetName',
        'description',
        'overallDesign',
        'publicationTitle',
        'tummorType',
        'species',
        'assay',
        'grantName',
        'grantNumber',
        'datasetAlias',
        'externalLink',
      ],
    },
  },
}
