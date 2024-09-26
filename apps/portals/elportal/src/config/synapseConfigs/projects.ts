import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { CardConfiguration, SynapseConstants } from 'synapse-react-client'
import {
  computationalSql,
  defaultSearchConfiguration,
  peopleSql,
  projectsSql,
  publicationsSql,
  studiesSql,
} from '../resources'
import { DetailsPageProps } from '@sage-bionetworks/synapse-portal-framework/types/portal-util-types'
import { studyCardConfiguration } from './studies'
import { publicationCardProps } from './publications'
import { computationalCardConfiguration } from './computational_tools'
import { ColumnMultiValueFunction } from '@sage-bionetworks/synapse-types'

const rgbIndex = 4
export const projectCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  descriptionConfig: {
    showFullDescriptionByDefault: false,
  },
  genericCardSchema: {
    type: 'Project',
    title: 'name',
    subTitle: 'principalInvestigators',
    description: 'abstract',
    secondaryLabels: ['institutions', 'program', 'grant'],
  },
  secondaryLabelLimit: 4,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Projects/DetailsPage',
    URLColumnName: 'shortName',
    matchColumnName: 'shortName',
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
      columnName: 'shortName',
      title: 'Studies',
      tableSqlKeys: ['project'],
      props: {
        ...studyCardConfiguration,
        sql: studiesSql,
      },
    },
    {
      name: 'CardContainerLogic',
      columnName: 'grant',
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
      columnName: 'grant',
      tableSqlKeys: ['grant'],
      props: {
        sql: peopleSql,
        limit: 6,
        type: SynapseConstants.MEDIUM_USER_CARD,
      },
    },
    {
      name: 'CardContainerLogic',
      title: 'Computational Tools',
      columnName: 'shortName',
      tableSqlKeys: ['project'],
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
      // 'name', //PORTALS-3259
      'institutions',
      'principalInvestigators',
      // 'grant', //PORTALS-3259
      // 'Program',
    ],
    searchConfiguration: defaultSearchConfiguration,
  },
}

export default projects
