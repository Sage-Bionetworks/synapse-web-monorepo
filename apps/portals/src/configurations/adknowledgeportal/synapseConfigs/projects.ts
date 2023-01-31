import { SynapseConfig } from 'types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import { CardConfiguration } from 'synapse-react-client/dist/containers/CardContainerLogic'
import {
  computationalSql,
  projectsSql,
  publicationsSql,
  studiesSql,
  experimentalModelsSql,
  peopleSql,
} from '../resources'
import { DetailsPageProps } from 'types/portal-util-types'
import { studyCardConfiguration } from './studies'
import { publicationCardProps } from './publications'
import { experimentalDetailsTableConfigurationColumnLinks, experimentalToolsCardConfiguration } from './experimental_tools'
import { computationalCardConfiguration } from './computational_tools'
import { targetEnablingResourcesDetailsPageSql } from '../resources'
import { targetEnablingResourcesCardConfiguration } from './target_enabling_resources'

const rgbIndex = 4
export const projectCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: 'Project',
    title: 'Name',
    subTitle: 'Principal Investigators',
    description: 'Abstract',
    secondaryLabels: [
      'Institutions',
      'Program',
      'Grant Number',
      'More Information',
    ],
  },
  secondaryLabelLimit: 4,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Projects/DetailsPage',
    URLColumnName: 'Grant Number',
    matchColumnName: 'Grant Number',
  },
  labelLinkConfig: [
    {
      isMarkdown: false,
      matchColumnName: 'More Information',
      linkColumnName: 'More Information URL',
    },
  ],
}

export const projectsDetailsPageConfiguration: DetailsPageProps = {
  showMenu: true,
  sql: projectsSql,
  synapseConfigArray: [
    {
      name: 'CardContainerLogic',
      columnName: 'Grant Number',
      title: 'Studies',
      tableSqlKeys: ['Grant Number'],
      props: {
        ...studyCardConfiguration,
        sql: studiesSql,
      },
    },
    {
      name: 'CardContainerLogic',
      columnName: 'Grant Number',
      title: 'Publications',
      showTitleSeperator: false,
      tableSqlKeys: ['grant'],
      props: {
        sql: publicationsSql,
        ...publicationCardProps,
      },
    },
    {
      name: 'ToggleSynapseObjects',
      title: 'Experimental Models',
      showTitleSeperator: false,
      standalone: true,
      toggleConfigs: {
        icon1: 'table',
        config1: {
          name: 'StandaloneQueryWrapper',
          props: {
            sql: experimentalModelsSql,
            rgbIndex,
            sqlOperator: '=',
            columnLinks: experimentalDetailsTableConfigurationColumnLinks,
          },
          columnName: 'Grant Number',
          tableSqlKeys: ['grant'],
        },
        icon2: 'cards',
        config2: {
          name: 'CardContainerLogic',
          columnName: 'Grant Number',
          tableSqlKeys: ['grant'],
          props: {
            sql: experimentalModelsSql,
            ...experimentalToolsCardConfiguration,
          },
        },
      },
      props: {},
    },
    {
      name: 'CardContainerLogic',
      columnName: 'Grant Number',
      title: 'Computational Tools',
      showTitleSeperator: false,
      tableSqlKeys: ['grant'],
      props: {
        sql: computationalSql,
        ...computationalCardConfiguration,
      },
    },
    {
      name: 'CardContainerLogic',
      columnName: 'Grant Number',
      title: 'Target Enabling Resources',
      showTitleSeperator: false,
      tableSqlKeys: ['grant'],
      props: {
        sql: targetEnablingResourcesDetailsPageSql,
        ...targetEnablingResourcesCardConfiguration,
      },
    },
    {
      name: 'CardContainerLogic',
      title: 'People',
      columnName: 'Grant Number',
      tableSqlKeys: ['Grant Number'],
      props: {
        sql: peopleSql,
        limit: 6,
        type: SynapseConstants.MEDIUM_USER_CARD,
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
    searchConfiguration: {
      searchable: [
        'Name',
        'Grant Number',
        'Program',
        'Principal Investigators',
        'Institutions',
        'Abstract',
      ],
    },
  },
}

export default projects
