import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from 'types/portal-config'
import { GenericCardSchema } from 'synapse-react-client/dist/containers/GenericCard'
import {
  CardConfiguration, CardLink,
} from 'synapse-react-client/dist/containers/CardContainerLogic'
import { challengeProjectsSql } from '../resources'
import { DetailsPageProps, RowSynapseConfig } from 'types/portal-util-types'
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

const taskTabConfigs = (taskID:string) => {
  /** Not currently using DataType or TaskType. */
  const configs:RowSynapseConfig[] = []
  configs.push(
    {
    name: 'Markdown',
    columnName: `${taskID}.Description`,
    title: 'Description',
    props: {},
  },
  {
    name: 'Markdown',
    columnName: `${taskID}.Motivation`,
    title: 'Motivation',
    props: {},
  },
  {
    name: 'Markdown',
    columnName: `${taskID}.DataWiki`,
    title: 'Data',
    props: {},
  },
  // TODO: Add Training Data Folder component
  // {
  //   name: 'GenUIFileListing',
  //   columnName: `${taskID}.DataFolder`,
  //   title: 'Training Data',
  //   props: {},
  // },
  {
    name: 'Markdown',
    columnName: `${taskID}.EvaluationWiki`,
    title: 'Evaluation',
    props: {},
  },
  {
    name: 'Markdown',
    columnName: `${taskID}.SubmissionWiki`,
    title: 'Submission',
    props: {},
  },
  // TODO: Add Submission component
  // {
  //   name: 'GenUISubmissionComponent',
  //   columnName: `${taskID}.SubmissionType`, // Docker or File
  //   props: {},
  // },
  {
    name: 'Markdown',
    columnName: `${taskID}.Leaderboard`,
    title: 'Results',
    props: {},
  },
  {
    name: 'Markdown',
    columnName: `${taskID}.AlgorithmWiki`,
    props: {},
  },
  {
    name: 'Markdown',
    columnName: `${taskID}.WinningSubmission`,
    props: {},
  },
  )
  return configs
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
          overrideSqlSourceTable: true, // Instead, modify the sql (SELECT * FROM <column value>)
          props: {
            sql: '',
            limit: 6,
            type: SynapseConstants.MEDIUM_USER_CARD,
          },
        },
        {
          name: 'CardContainerLogic',
          title: 'Contributors',
          columnName: 'Contributors',
          overrideSqlSourceTable: true,
          props: {
            sql: '',
            limit: 6,
            type: SynapseConstants.MEDIUM_USER_CARD,
          },
        },
        {
          name: 'CardContainerLogic',
          title: 'Sponsors',
          columnName: 'Sponsors',
          overrideSqlSourceTable: true,
          props: {
            sql: '',
            limit: 6,
            type: SynapseConstants.MEDIUM_USER_CARD,
          },
        },
        {
          name: 'ChallengeParticipantGoogleMap',
          title: 'Participants',
          columnName: 'id',
          props: undefined
        },
        {
          name: 'Markdown',
          columnName: 'Incentives',
          title: 'Incentives',
          props: {},
        },
      ],
    },
    {
      title: 'Instructions',
      uriValue: 'Instructions',
      synapseConfigArray: [
        {
          name: 'Markdown',
          columnName: 'Instructions',
          title: 'Instructions',
          props: {},
        },
        {
          name: 'Markdown',
          columnName: 'EligibilityRules',
          title: 'Eligibility Rules',
          props: {},
        },
        {
          name: 'Markdown',
          columnName: 'ConductRules',
          title: 'Conduct Rules',
          props: {},
        },
      ],
    },
    {
      title: 'Task 1',
      uriValue: 'Task1',
      // specify a column that determines visibility.  For this case, set to a required Task0 annotation (description)
      // toolTip: 'Task 1',
      hideIfColumnValueUndefined: 'Task_0.Description',
      synapseConfigArray: taskTabConfigs('Task_0'),
    },
    {
      title: 'Task 2',
      uriValue: 'Task2',
      hideIfColumnValueUndefined: 'Task_1.Description',
      synapseConfigArray: taskTabConfigs('Task_1'),
    },
    {
      title: 'Task 3',
      uriValue: 'Task3',
      hideIfColumnValueUndefined: 'Task_2.Description',
      synapseConfigArray: taskTabConfigs('Task_2'),
    },
    {
      title: 'Task 4',
      uriValue: 'Task4',
      hideIfColumnValueUndefined: 'Task_3.Description',
      synapseConfigArray: taskTabConfigs('Task_3'),
    },
    {
      title: 'Task 5',
      uriValue: 'Task5',
      hideIfColumnValueUndefined: 'Task_4.Description',
      synapseConfigArray: taskTabConfigs('Task_4'),
    },
    {
      title: 'News',
      uriValue: 'News',
      hideIfColumnValueUndefined: 'Announcements',
      synapseConfigArray: [
        {
          name: 'Markdown',
          columnName: 'Announcements',
          title: 'Announcements',
          props: {},
        },
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
