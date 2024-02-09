import { SynapseConfig } from 'types/portal-config'
import { DetailsPageProps } from 'types/portal-util-types'
import { SynapseConstants } from 'synapse-react-client'
import type { CardConfiguration } from 'synapse-react-client'
import studyHeaderSvg from '../style/study-header.svg'
import { studiesSql, dataSql, dataOnStudiesPageSql } from '../resources'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'

const rgbIndex = 0
export const studyCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 4,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Studies/DetailsPage',
    URLColumnName: 'Study',
    matchColumnName: 'Study',
  },
  labelLinkConfig: [
    {
      isMarkdown: false,
      matchColumnName: 'Program',
      URLColumnName: 'Program',
      baseURL: 'Explore/Programs/DetailsPage',
    },
  ],
  genericCardSchema: {
    type: SynapseConstants.STUDY,
    title: 'Study_Name',
    subTitle: 'Data_Contributor',
    icon: 'Access_Type',
    description: 'Study_Description',
    secondaryLabels: [
      'DataType_All',
      'studyFocus',
      'Number_Of_Individuals',
      'specimenType',
      'Species',
      'Cohort_Type',
      'Study_Status',
      'Program',
      'Grant Number',
    ],
  },
}
const columnAliases = {
  DataType_All: 'Data Types',
  Data_Contributor: 'Data Contributor',
  Study_Description: 'Study Description',
  Study_Name: 'Study Name',
  Number_of_Individuals: 'Individuals',
  'Grant Number': 'Grant',
}
const studies: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    columnAliases,
    sql: studiesSql,
    name: 'Studies',
    shouldDeepLink: true,
    cardConfiguration: studyCardConfiguration,
    searchConfiguration: {
      searchable: [
        'Study_Name',
        'Study_Description',
        'DataType_All',
        'studyFocus',
        'Data_Contributor',
        'specimenType',
        'Species',
        'Grant Number',
        'Program',
      ],
    },
  },
}

export const studiesDetailsPageProps: DetailsPageProps = {
  sql: studiesSql,
  sqlOperator: ColumnSingleValueFilterOperator.LIKE,
  tabLayout: [
    {
      title: 'Study Details',
      uriValue: 'StudyDetails',
      iconName: 'study',
      toolTip: 'Description, methods, acknowledgements and related studies',
      synapseConfigArray: [
        {
          name: 'Markdown',
          columnName: 'Study',
          title: 'Study Description',
          props: {},
        },
        {
          name: 'Markdown',
          columnName: 'ackContext',
          title: 'Acknowledgement',
          props: {},
        },
        {
          name: 'MarkdownCollapse',
          columnName: 'Acknowledgement',
          props: {
            textDescription: 'full statement',
            showCopyPlainText: true,
          },
        },
        {
          name: 'Markdown',
          columnName: 'Methods',
          title: 'Methods',
          props: {},
          resolveSynId: {
            title: true,
          },
        },
        {
          name: 'CardContainerLogic',
          columnName: 'Related_Studies',
          title: 'Related Studies',
          tableSqlKeys: ['Study'],
          props: {
            sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
            sql: studiesSql,
            ...studyCardConfiguration,
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
          name: 'RssFeedCards',
          title: 'Recent Data Updates',
          columnName: 'Study',
          resolveSynId: {
            value: true,
          },
          props: {
            url: 'https://news.adknowledgeportal.org',
            itemsToShow: 3,
            allowCategories: [],
            // mailChimpListName: 'study specific list name????',
            // mailChimpUrl:'https://study specific url????'
            viewAllNewsButtonText: 'View All Data Updates',
          },
        },
        {
          name: 'Markdown',
          title: 'Access Requirements',
          columnName: 'accessReqs',
          props: {},
        },
        {
          name: 'Markdown',
          title: 'Study Metadata',
          columnName: 'studyMetadata',
          props: {},
        },
        {
          name: 'QueryWrapperPlotNav',
          props: {
            sqlOperator: ColumnMultiValueFunction.HAS,
            showColumnSelection: true,
            rgbIndex,
            name: 'Metadata Files',
            visibleColumnCount: 10,
            showExportToCavatica: true,
            isRowSelectionVisible: true,
            tableConfiguration: {
              showAccessColumn: true,
              showDownloadColumn: true,
            },
            availableFacets: ['metadataType', 'dataType', 'assay'],
            sql: dataOnStudiesPageSql,
            shouldDeepLink: false,
            defaultShowPlots: false,
          },
          resolveSynId: {
            value: true,
          },
          tableSqlKeys: ['study'],
          columnName: 'Study',
        },
        {
          name: 'QueryWrapperPlotNav',
          title: 'Study Data',
          props: {
            sqlOperator: ColumnMultiValueFunction.HAS,
            rgbIndex,
            visibleColumnCount: 10,
            isRowSelectionVisible: true,
            showExportToCavatica: true,
            tableConfiguration: {
              showAccessColumn: true,
              showDownloadColumn: true,
              columnLinks: [
                {
                  matchColumnName: 'study',
                  isMarkdown: false,
                  baseURL: 'Explore/Studies/DetailsPage',
                  URLColumnName: 'Study_Name',
                  wrapValueWithParens: true,
                },
              ],
            },
            sql: dataSql,
            shouldDeepLink: false,
          },
          resolveSynId: {
            value: true,
          },
          tableSqlKeys: ['study'],
          columnName: 'Study',
        },
      ],
    },
  ],
}

export const studiesProgrammaticRouteConfig: SynapseConfig[] = [
  {
    name: 'CardContainerLogic',
    isOutsideContainer: true,
    props: {
      isHeader: true,
      ...studyCardConfiguration,
      sql: studiesSql,
      columnAliases,
      isAlignToLeftNav: true,
      secondaryLabelLimit: Infinity,

      iconOptions: {
        study: studyHeaderSvg,
      },
    },
  },
  {
    name: 'DetailsPage',
    isOutsideContainer: false,
    props: studiesDetailsPageProps,
    containerClassName: 'container-full-width',
  },
]
export default studies
