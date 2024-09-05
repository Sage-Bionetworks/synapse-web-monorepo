import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import type { GenericCardSchema } from 'synapse-react-client'
import type { CardConfiguration } from 'synapse-react-client'
import columnAliases from '../columnAliases'
import { datasetsSql, grantsSql, peopleSql, publicationSql } from '../resources'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { grantsCardConfiguration } from './grants'
import { peopleCardConfiguration } from './people'
import { publicationsCardConfiguration } from './publications'
import DatasetSvg from '../style/Dataset.svg?url'

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

export const datasetDetailsPageConfig: SynapseConfig[] = [
  {
    name: 'CardContainerLogic',
    isOutsideContainer: true,
    props: {
      isHeader: true,
      sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
      ...datasetCardConfiguration,
      secondaryLabelLimit: Infinity,
      sql: datasetsSql,
      iconOptions: {
        dataset: DatasetSvg,
      },
      columnAliases,
    },
  },
  {
    name: 'DetailsPage',
    props: {
      sql: datasetsSql,
      sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
      synapseConfigArray: [
        {
          name: 'CardContainerLogic',
          columnName: 'grantNumber',
          title: 'Related Grants',
          tableSqlKeys: ['grantNumber'],
          helpText:
            'MC2 Center member grant(s) that supported development of the resource',
          props: {
            sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
            sql: grantsSql,
            ...grantsCardConfiguration,
            columnAliases,
          },
        },
        {
          name: 'CardContainerLogic',
          columnName: 'pubMedId',
          title: 'Related People',
          tableSqlKeys: ['publicationId'],
          helpText:
            'Individual(s) that contributed to the development of the resource',
          props: {
            sqlOperator: ColumnSingleValueFilterOperator.LIKE,
            sql: peopleSql,
            ...peopleCardConfiguration,
            columnAliases,
          },
        },
        {
          name: 'CardContainerLogic',
          columnName: 'pubMedId',
          title: 'Related Publications',
          helpText: 'The publication in which the resource was first reported',
          tableSqlKeys: ['pubMedId'],
          props: {
            sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
            sql: publicationSql,
            ...publicationsCardConfiguration,
            columnAliases,
          },
        },
      ],
    },
  },
]
