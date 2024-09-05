import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import type { CardConfiguration } from 'synapse-react-client'
import { DetailsPageProps } from '@sage-bionetworks/synapse-portal-framework/types/portal-util-types'
import { publicationsCardConfiguration } from './publications'
import { publicationsSql, studiesSql } from '../resources'

const rgbIndex = 0

export const studyCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.DATASET,
    title: 'studyName',
    subTitle: 'institutions',
    description: 'studyDescription',
    icon: 'studyStatus',
    secondaryLabels: [
      'diagnosis',
      'organs',
      'tissues',
      'tissueFraction',
      'dataTypes',
      'project',
      'ndaLink',
    ],
  },
  labelLinkConfig: [
    {
      matchColumnName: 'ndaLink',
      isMarkdown: true,
    },
    {
      isMarkdown: true,
      matchColumnName: 'project',
    },
  ],
  secondaryLabelLimit: 4,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Data/DetailsPage',
    URLColumnName: 'id',
    matchColumnName: 'id',
  },
}

const studies: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    shouldDeepLink: true,
    sql: studiesSql,
    hideDownload: true,
    name: 'Data',
    cardConfiguration: studyCardConfiguration,
    facetsToPlot: [
      'studyStatus',
      'diagnosis',
      'organs',
      'tissues',
      'dataTypes',
      'tissueFraction',
    ],
    searchConfiguration: {
      searchable: [
        'studyName',
        'institutions',
        'studyDescription',
        'diagnosis',
        'organs',
        'tissues',
        'tissueFraction',
        'dataTypes',
        'methods',
      ],
    },
  },
}

export const studiesDetailPageConfiguration: DetailsPageProps = {
  showMenu: true,
  sql: studiesSql,
  synapseConfigArray: [
    {
      name: 'Markdown',
      title: 'Study Description',
      columnName: 'id',
      props: {},
    },
    {
      name: 'Markdown',
      title: 'Access Requirements',
      columnName: 'accessRequirements',
      props: {},
    },
    {
      name: 'CardContainerLogic',
      columnName: 'id',
      title: 'Publications',
      tableSqlKeys: ['study'],
      props: {
        sql: publicationsSql,
        ...publicationsCardConfiguration,
      },
    },
  ],
}

export default studies
