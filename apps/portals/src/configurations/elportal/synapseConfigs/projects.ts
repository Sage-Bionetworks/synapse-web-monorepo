import { CardConfiguration, SynapseConstants } from 'synapse-react-client'
import { ColumnMultiValueFunction } from '@sage-bionetworks/synapse-types'
import { SynapseConfig } from '../../../types/portal-config'
import { DetailsPageProps } from '../../../types/portal-util-types'
import {
  computationalSql,
  defaultSearchConfiguration,
  peopleSql,
  projectsSql,
  publicationsSql,
  studiesSql,
} from '../resources'
import { studyCardConfiguration } from './studies'
import { publicationCardProps } from './publications'
import { computationalCardConfiguration } from './computational_tools'

const rgbIndex = 4
export const projectCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: 'Project',
    title: 'name',
    subTitle: 'principalInvestigators',
    description: 'abstract',
    secondaryLabels: ['institutions', 'program', 'grantNumber'],
  },
  secondaryLabelLimit: 4,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Projects/DetailsPage',
    URLColumnName: 'grantNumber',
    matchColumnName: 'grantNumber',
  },
  labelLinkConfig: [
    {
      isMarkdown: false,
      matchColumnName: 'moreInformation',
      linkColumnName: 'moreInformationURL',
    },
  ],
}

export const projectsDetailsPageConfiguration: DetailsPageProps = {
  showMenu: true,
  sql: projectsSql,
  synapseConfigArray: [
    {
      name: 'CardContainerLogic',
      columnName: 'grantNumber',
      title: 'Studies',
      tableSqlKeys: ['grantNumber'],
      props: {
        ...studyCardConfiguration,
        sql: studiesSql,
      },
    },
    {
      name: 'CardContainerLogic',
      columnName: 'grantNumber',
      title: 'Publications',
      showTitleSeperator: false,
      tableSqlKeys: ['grant'],
      props: {
        ...publicationCardProps,
        sql: publicationsSql,
      },
    },
    {
      name: 'CardContainerLogic',
      title: 'People',
      columnName: 'grantNumber',
      tableSqlKeys: ['grantNumber'],
      props: {
        sql: peopleSql,
        limit: 6,
        type: SynapseConstants.MEDIUM_USER_CARD,
      },
    },
    {
      name: 'CardContainerLogic',
      title: 'Computational Tools',
      columnName: 'grantNumber',
      tableSqlKeys: ['grant'],
      props: {
        ...computationalCardConfiguration,
        sqlOperator: ColumnMultiValueFunction.HAS,
        sql: computationalSql,
      },
    },
  ],
}

const projects: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: projectsSql,
    shouldDeepLink: true,
    name: 'Projects',
    cardConfiguration: projectCardConfiguration,
    // unitDescription: 'Projects',
    facetsToPlot: [
      'name',
      'institutions',
      'principalInvestigators',
      'grantNumber',
      // 'Program',
    ],
    searchConfiguration: defaultSearchConfiguration,
  },
}

export default projects
