import { SynapseConfig } from 'types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import { CardConfiguration } from 'synapse-react-client/dist/containers/CardContainerLogic'
import {
  projectsSql,
  publicationsSql,
  studiesSql,
  peopleSql,
} from '../resources'
import { DetailsPageProps, RowSynapseConfig } from 'types/portal-util-types'
import { studyCardConfiguration } from './studies'
import { publicationCardProps } from './publications'

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
      tableSqlKeys: ['grantNumber'],
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
    facetsToPlot: ['Name',
      'Institutions',
      'Principal Investigators',
      'Grant Number',
      // 'Program',
    ],
  },
}

export default projects
