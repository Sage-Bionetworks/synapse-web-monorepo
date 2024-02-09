import { SynapseConfig } from 'types/portal-config'
import { DetailsPageProps } from 'types/portal-util-types'
import { SynapseConstants, CardConfiguration } from 'synapse-react-client'
import studyHeaderSvg from '../style/study-header.svg'
import {
  studiesSql,
  dataSql,
  dataOnStudiesPageSql,
  defaultSearchConfiguration,
  cavaticaConnectAccountURL,
} from '../resources'
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
    URLColumnName: 'studyKey',
    matchColumnName: 'studyKey',
  },
  labelLinkConfig: [
    {
      isMarkdown: false,
      baseURL: 'Explore/Projects/DetailsPage',
      URLColumnName: 'grantNumber',
      matchColumnName: 'grantNumber',
    },
  ],
  genericCardSchema: {
    type: SynapseConstants.STUDY,
    title: 'studyName',
    subTitle: 'dataContributor',
    icon: 'Access_Type',
    description: 'studyAbstract',
    secondaryLabels: [
      'dataTypeAll',
      'studyFocus',
      'species',
      'specimenType',
      'program',
      'grantNumber',
      'Number_Of_Individuals',
      'Cohort_Type',
      'Study_Status',
    ],
  },
}
const columnAliases = {
  dataTypeAll: 'Data Types',
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
    searchConfiguration: defaultSearchConfiguration,
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
          columnName: 'studyDescription',
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
          columnName: 'acknowledgement',
          props: {
            textDescription: 'full statement',
            showCopyPlainText: true,
          },
        },
        {
          name: 'Markdown',
          columnName: 'methods',
          title: 'Methods',
          props: {},
          resolveSynId: {
            title: true,
          },
        },
        {
          name: 'CardContainerLogic',
          columnName: 'studyKey',
          title: 'Related Studies',
          tableSqlKeys: ['relatedStudies'],
          props: {
            sqlOperator: ColumnMultiValueFunction.HAS,
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
            sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
            showColumnSelection: true,
            rgbIndex,
            visibleColumnCount: 10,
            name: 'Metadata Files',
            showExportToCavatica: true,
            cavaticaConnectAccountURL: cavaticaConnectAccountURL,
            isRowSelectionVisible: true,
            isRowSelectionUIFloating: false,
            tableConfiguration: {
              showAccessColumn: true,
              showDownloadColumn: true,
            },
            availableFacets: ['metadataType', 'dataType', 'assay'],
            sql: dataOnStudiesPageSql,
            shouldDeepLink: false,
            defaultShowPlots: false,
          },
          tableSqlKeys: ['study'],
          columnName: 'studyKey',
        },
        {
          name: 'QueryWrapperPlotNav',
          title: 'Study Data',
          props: {
            sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
            rgbIndex,
            visibleColumnCount: 10,
            showExportToCavatica: true,
            cavaticaConnectAccountURL: cavaticaConnectAccountURL,
            isRowSelectionVisible: true,
            isRowSelectionUIFloating: false,
            tableConfiguration: {
              showAccessColumn: true,
              showDownloadColumn: true,
              columnLinks: [
                {
                  matchColumnName: 'study',
                  isMarkdown: false,
                  baseURL: 'Explore/Studies/DetailsPage',
                  URLColumnName: 'studyKey',
                  wrapValueWithParens: true,
                },
              ],
            },
            sql: dataSql,
            shouldDeepLink: false,
          },
          tableSqlKeys: ['study'],
          columnName: 'studyKey',
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
