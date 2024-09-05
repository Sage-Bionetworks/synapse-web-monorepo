import { CardContainerLogicProps, SynapseConstants } from 'synapse-react-client'

import type { GenericCardSchema } from 'synapse-react-client'
import type { CardConfiguration } from 'synapse-react-client'
import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { DetailsPageProps } from '@sage-bionetworks/synapse-portal-framework/types/portal-util-types'
import { studiesSql, dataSql, metadataSql } from '../resources'
import { publicationDetailPageProps } from './publications'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'
const rgbIndex = 1

export const studySchema: GenericCardSchema = {
  type: SynapseConstants.STUDY,
  title: 'studyName',
  subTitle: 'contributingInstitution',
  description: 'studyDescription',
  secondaryLabels: [
    'dataTypes',
    'diagnosis',
    'tissue',
    'nucleicAcidSource',
    'species',
    'numberOfIndividuals',
    'grants',
  ],
}

export const studyCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: studySchema,
  secondaryLabelLimit: 7,
  titleLinkConfig: {
    baseURL: 'Explore/Studies/DetailsPage',
    URLColumnName: 'study',
    matchColumnName: 'study',
    isMarkdown: false,
  },
  labelLinkConfig: [
    {
      matchColumnName: 'grants',
      URLColumnName: 'grants',
      isMarkdown: false,
      baseURL: 'Explore/Grants/DetailsPage',
    },
  ],
}

export const studies: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: studiesSql,
    shouldDeepLink: true,
    cardConfiguration: studyCardConfiguration,
    name: 'Studies',
    searchConfiguration: {
      searchable: [
        'contributingInstitution',
        'dataTypes',
        'diagnosis',
        'grants',
        'tissue',
        'species',
        'studyName',
      ],
    },
  },
}

export const details: DetailsPageProps = {
  sql: studiesSql,
  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
  tabLayout: [
    {
      title: 'Study Details',
      uriValue: 'StudyDetails',
      iconName: 'study',
      toolTip: 'Description, methods, acknowledgements and related studies',
      synapseConfigArray: [
        {
          name: 'Markdown',
          props: {},
          injectMarkdown: false,
          columnName: 'study',
          title: 'Study Description',
        },
        {
          name: 'Markdown',
          props: {},
          columnName: 'methods',
          title: 'Methods',
          resolveSynId: {
            title: true,
          },
        },
        {
          name: 'CardContainerLogic',
          title: 'Related Studies',
          props: {
            ...studyCardConfiguration,
            sql: studiesSql,
          },
          columnName: 'relatedStudies',
          tableSqlKeys: ['study'],
        },
        {
          name: 'CardContainerLogic',
          title: 'Publications',
          props: publicationDetailPageProps,
          columnName: 'study',
          tableSqlKeys: ['study'],
          resolveSynId: {
            value: true,
          },
        },
      ],
    },
    {
      title: 'Study Data',
      uriValue: 'StudyData',
      iconName: 'database',
      toolTip: 'All of the Data generated within this study',
      cssClass: 'tab-database',
      synapseConfigArray: [
        {
          name: 'Markdown',
          props: {
            ownerId: 'syn4921369',
            wikiId: '477467',
          },
          title: 'Access Requirements',
          standalone: true,
        },
        {
          name: 'StandaloneQueryWrapper',
          props: {
            sql: metadataSql,
            columnAliases: {
              id: 'File Name',
              metadataType: 'Metadata Type',
              dataType: 'Data Type',
              assay: 'Assay',
            },
            rgbIndex,
            sqlOperator: ColumnMultiValueFunction.HAS,
          },
          resolveSynId: {
            value: true,
          },
          tableSqlKeys: ['study'],
          columnName: 'study',
          title: 'Study Metadata',
          className: 'metadata-table',
        },
        {
          name: 'QueryWrapperPlotNav',
          props: {
            rgbIndex: 8,
            sql: dataSql,
            sqlOperator: ColumnMultiValueFunction.HAS,
            tableConfiguration: {
              showAccessColumn: true,
              showDownloadColumn: true,
              columnLinks: [
                {
                  matchColumnName: 'study',
                  URLColumnName: 'studyName',
                  baseURL: 'Explore/Studies/DetailsPage',
                  isMarkdown: false,
                },
              ],
            },
            visibleColumnCount: 10,
            shouldDeepLink: false,
            name: 'Study Data',
            columnAliases: {
              id: 'File',
            },
            facetsToPlot: [
              'study',
              'dataType',
              'species',
              'tissue',
              'referenceSet',
              'fileFormat',
            ],
          },
          resolveSynId: {
            value: true,
          },
          tableSqlKeys: ['study'],
          columnName: 'study',
        },
      ],
    },
  ],
}

export const studyDetailPage: SynapseConfig[] = [
  {
    name: 'CardContainerLogic',
    isOutsideContainer: true,
    props: {
      isHeader: true,
      isAlignToLeftNav: true,
      ...studyCardConfiguration,
      titleLinkConfig: undefined,
      rgbIndex,
      genericCardSchema: studySchema,
      sql: studiesSql,
      sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
    },
  },
  {
    name: 'DetailsPage',
    props: details,
    containerClassName: 'container-full-width',
  },
]

export const studyDetailPageProps: CardContainerLogicProps = {
  sql: studiesSql,
  sqlOperator: ColumnMultiValueFunction.HAS,
  ...studyCardConfiguration,
}
