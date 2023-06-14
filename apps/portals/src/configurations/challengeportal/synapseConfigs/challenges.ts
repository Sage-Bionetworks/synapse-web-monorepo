import {
  CardConfiguration,
  CardLink,
  GenericCardSchema,
  SynapseConstants,
} from 'synapse-react-client'
import { SynapseConfig } from 'types/portal-config'
import { challengeProjectsSql } from '../resources'
import { DetailsPageProps, RowSynapseConfig } from 'types/portal-util-types'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'

const rgbIndex = 3

export const challengesSchema: GenericCardSchema = {
  type: 'challenge',
  title: 'name',
  subTitle: 'Status',
  description: 'Abstract',
  secondaryLabels: ['Difficulty', 'ChallengeType', 'DataType', 'Tags'],
}
export const challengeTitleLinkConfig: CardLink = {
  isMarkdown: false,
  baseURL: 'Challenges/DetailsPage',
  URLColumnName: 'id',
  matchColumnName: 'id',
}

export const challengeCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: challengesSchema,
  secondaryLabelLimit: 5,
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

const taskTabConfigs = (taskID: string) => {
  /** Not currently using DataType or TaskType. */
  const configs: RowSynapseConfig[] = []
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
          name: 'Markdown',
          columnName: 'Timeline',
          title: 'Timeline',
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
          props: undefined,
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
      hideIfColumnValueNull: 'Task_1.Description',
      synapseConfigArray: taskTabConfigs('Task_1'),
    },
    {
      title: 'Task 2',
      uriValue: 'Task2',
      hideIfColumnValueNull: 'Task_2.Description',
      synapseConfigArray: taskTabConfigs('Task_2'),
    },
    {
      title: 'Task 3',
      uriValue: 'Task3',
      hideIfColumnValueNull: 'Task_3.Description',
      synapseConfigArray: taskTabConfigs('Task_3'),
    },
    {
      title: 'Task 4',
      uriValue: 'Task4',
      hideIfColumnValueNull: 'Task_4.Description',
      synapseConfigArray: taskTabConfigs('Task_4'),
    },
    {
      title: 'Task 5',
      uriValue: 'Task5',
      hideIfColumnValueNull: 'Task_5.Description',
      synapseConfigArray: taskTabConfigs('Task_5'),
    },
    {
      title: 'News',
      uriValue: 'News',
      hideIfColumnValueNull: 'Announcements',
      synapseConfigArray: [
        {
          name: 'Markdown',
          columnName: 'Announcements',
          title: 'Announcements',
          props: {},
        },
      ],
    },
    {
      title: 'Community',
      uriValue: 'Community',
      synapseConfigArray: [
        {
          name: 'ProjectDiscussionForum',
          title: 'Discussion Forum',
          columnName: 'id',
          props: undefined,
        },
      ],
    },
  ],
}

export const challengeDetailsLandingPage: SynapseConfig[] = [
  // Register For Challenge component is here, and the wrapper positions it properly in the header card
  {
    name: 'CardContainerLogic',
    isOutsideContainer: true,
    props: {
      ...challengeCardConfiguration,
      sql: challengeProjectsSql,
      isHeader: true,
    },
    className: 'challengeDetailPageHeaderCard',
  },
  {
    name: 'ChallengeDetailPageWrapper',
    isOutsideContainer: true,
    props: undefined,
  },
  {
    name: 'DetailsPage',
    props: challengeDetailsPageConfig,
  },
]
