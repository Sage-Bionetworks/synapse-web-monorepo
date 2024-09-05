import { SynapseConstants, TargetEnum } from 'synapse-react-client'
import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import type { GenericCardSchema } from 'synapse-react-client'
import type { CardConfiguration } from 'synapse-react-client'
import columnAliases from '../columnAliases'
import { DetailsPageProps } from '@sage-bionetworks/synapse-portal-framework/types/portal-util-types'
import { dataDetailPageProps } from './data'
import { toolsDetailPageProps } from './tools'
import { publicationDetailPageProps } from './publications'
import { studySql } from '../resources'
import { iconOptions } from './iconOptions'

const rgbIndex = 9

export const studySchema: GenericCardSchema = {
  type: '',
  title: 'study',
  subTitle: 'investigator',
  icon: 'collectionType',
  description: 'studyDescription',
  secondaryLabels: [
    'collectionType',
    'diagnosis',
    'intervention',
    'numberParticipants',
    'reportedOutcome',
    'deviceType',
    'sensorType',
    'dataCollectionMethod',
    'devicePlatform',
    'deviceLocation',
    'digitalAssessmentCategory',
    'digitalAssessmentDetails',
    'sensorDataType',
    'dataUsed',
    'keywords',
  ],
}

export const studiesCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: studySchema,
  iconOptions,
  titleLinkConfig: {
    isMarkdown: false,
    target: TargetEnum.CURRENT_WINDOW,
    baseURL: 'Explore/Collections/DetailsPage',
    URLColumnName: 'study',
    matchColumnName: 'study',
  },
  labelLinkConfig: [
    {
      matchColumnName: 'dataUsed',
      isMarkdown: true,
    },
  ],
}

export const studies: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    cardConfiguration: studiesCardConfiguration,
    sql: studySql,
    shouldDeepLink: true,
    hideDownload: true,
    name: 'Collections',
    columnAliases,
    facetsToPlot: [
      'collectionType',
      'deviceLocation',
      'devicePlatform',
      'deviceType',
      'diagnosis',
      'digitalAssessmentCategory',
      'intervention',
      'reportedOutcome',
      'sensorType',
    ],
    searchConfiguration: {
      searchable: [
        'diagnosis',
        'digitalAssessmentCategory',
        'digitalAssessmentDetails',
        'intervention',
        'investigator',
        'keywords',
        'reportedOutcome',
        'study',
      ],
    },
  },
}

export const details: DetailsPageProps = {
  sql: studySql,
  synapseConfigArray: [
    {
      name: 'Markdown',
      props: {},
      injectMarkdown: false,
      columnName: 'studyDescriptionLocation',
      title: 'Study Description',
    },
    {
      name: 'Markdown',
      props: {},
      injectMarkdown: true,
      columnName: 'dataAccessInstructions',
      title: 'Data Access',
      className: 'PORTALS-1365',
    },
    {
      name: 'Markdown',
      props: {},
      injectMarkdown: false,
      columnName: 'studyDataDescriptionLocation',
      title: 'Data Description',
    },
    {
      name: 'StandaloneQueryWrapper',
      title: 'Data Files',
      columnName: 'id',
      tableSqlKeys: ['projectId'],
      props: dataDetailPageProps,
    },
    {
      name: 'CardContainerLogic',
      title: 'Suggested Tools',
      columnName: 'id',
      tableSqlKeys: ['suggestedStudies'],
      props: toolsDetailPageProps,
    },
    {
      name: 'CardContainerLogic',
      title: 'Publications',
      columnName: 'id',
      tableSqlKeys: ['synID'],
      props: publicationDetailPageProps,
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
      ...studiesCardConfiguration,
      rgbIndex,
      columnAliases,
      genericCardSchema: {
        ...studySchema,
        title: 'study',
        link: 'id',
      },
      sql: studySql,
    },
  },
  {
    name: 'DetailsPage',
    props: details,
  },
]
