import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from 'types/portal-config'
import { GenericCardSchema } from 'synapse-react-client/dist/containers/GenericCard'
import {
  CardConfiguration, CardLink,
} from 'synapse-react-client/dist/containers/CardContainerLogic'
import { challengeProjectsSql } from '../resources'
import { DetailsPageProps } from 'types/portal-util-types'
import { ColumnSingleValueFilterOperator } from 'synapse-react-client/dist/utils/synapseTypes/Table/QueryFilter'

const rgbIndex = 3

export const challengesSchema: GenericCardSchema = {
  type: 'challenge',
  title: 'name',
  subTitle: 'Status',
  description: 'Abstract',
  secondaryLabels: [
    'Difficulty',
    'ChallengeType',
    'Tags',
  ]
}
export const challengeTitleLinkConfig:CardLink = {
  isMarkdown: false,
  baseURL: 'Challenges/DetailsPage',
  URLColumnName: 'id',
  matchColumnName: 'id',
}

export const challengeCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: challengesSchema,
}

export const challenges: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    cardConfiguration: challengeCardConfiguration,
    sql: challengeProjectsSql,
    hideDownload: true,
    shouldDeepLink: true,
    defaultColumn: 'name',
    name: 'Challenges',
  },
}


export const challengeDetailsPageConfig: DetailsPageProps = {
  sql: challengeProjectsSql,
  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
  showMenu: true,

  tabLayout: [
    {
      title: 'Overview',
      uriValue: 'Overview',
      // iconName: '',
      toolTip: 'Challenge overview',
      synapseConfigArray: [
        {
          name: 'Markdown',
          columnName: 'Overview',
          title: 'Overview',
          props: {},
        },
        {
          name: 'Markdown',
          columnName: 'Objective',
          title: 'Objective',
          props: {},
        },
        {
          name: 'Markdown',
          columnName: 'Description',
          title: 'Description',
          props: {},
        },
        {
          name: 'CardContainerLogic',
          title: 'Organizers',
          columnName: 'Organizers',
          overrideSqlSourceTable: true, // Instead, modify the sql (SELECT * FROM <search_param_value>).<rowVersionNumber>
          props: {
            sql: '',
            limit: 6,
            type: SynapseConstants.MEDIUM_USER_CARD,
          },
        },
      ],
    },
    {
      title: 'Task 1',
      uriValue: 'Task1',
      // TODO: add ability to specify a column that determins visibility (if truthy value).  For this case, set to a required Task0 annotation
      // toolTip: 'Task 1',
      synapseConfigArray: [
        // TODO: programmatically generate based on task number
      ],
    },
  ],
}

export const challengeDetailsLandingPage: SynapseConfig[] = [
  {
    name: 'CardContainerLogic',
    isOutsideContainer: true,
    props: {
      ...challengeCardConfiguration,
      sql: challengeProjectsSql,
      isHeader: true,
    },
  },
  // TODO: Add Register For Challenge component here, and position it properly in the header card
  {
    name: 'DetailsPage',
    props: challengeDetailsPageConfig,
  },
]
