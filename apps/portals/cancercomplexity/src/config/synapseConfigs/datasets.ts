import type {
  CardConfiguration,
  GenericCardSchema,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
import columnAliases from '../columnAliases'
import { datasetsSql } from '../resources'

const rgbIndex = 0

export const datasetSchema: GenericCardSchema = {
  type: SynapseConstants.DATASET,
  title: 'datasetName',
  description: 'description',
  includeCitation: true,
  customSecondaryLabelConfig: {
    key: 'HOW TO DOWNLOAD',
    value: 'This file is hosted externally, follow the External Link, below',
    isVisible: (schema: Record<string, number>, data: string[]) => {
      return data[schema['externalLink']]
        ? [
            'HOW TO DOWNLOAD',
            'This file is hosted externally, follow the External Link, below',
            'externalLink',
          ]
        : undefined
    },
  },
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

export const datasetsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  cardConfiguration: datasetCardConfiguration,
  shouldDeepLink: true,
  name: 'Datasets',
  sql: datasetsSql,
  columnAliases,
  hideDownload: true,
  initialExpandedFacetControls: ['assay', 'species', 'tissue', 'theme'],
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
}
