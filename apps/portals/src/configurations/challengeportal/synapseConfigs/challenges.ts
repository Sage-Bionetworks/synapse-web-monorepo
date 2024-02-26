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
  secondaryLabels: ['ChallengeType', 'DataType', 'Tags'],
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
      columnName: `${taskID}.DataWiki`,
      title: 'Data',
      props: {},
    },
    {
      name: 'ChallengeDataDownloadWrapper',
      columnName: `${taskID}.DataFolder`,
      title: 'Data Files',
      props: {
        parentContainerId: '', // filled in dynamically by DetailsPage using value from `${taskID}.DataFolder`
      },
    },
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
    {
      name: 'ChallengeSubmissionWrapper',
      columnName: `${taskID}.SubmissionType`, // Docker or File
      props: {
        //entityType will be set by the DetailsPage, using the value in the column
        //projectId will be set in the ChallengeSubmissionWrapper by looking at the query param
      },
    },
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
          title: 'Organizers',
          name: 'CardContainerLogic',
          columnName: 'Organizers',
          overrideSqlSourceTable: true, // Instead, modify the sql (SELECT * FROM <column value>)
          props: {
            sql: '',
            limit: 6,
            type: SynapseConstants.MEDIUM_USER_CARD,
          },
        },
        {
          name: 'Markdown',
          columnName: 'OrganizersDescription',
          injectMarkdown: true,
          props: {},
        },
        {
          title: 'Contributors',
          name: 'CardContainerLogic',
          columnName: 'Contributors',
          overrideSqlSourceTable: true,
          props: {
            sql: '',
            limit: 6,
            type: SynapseConstants.MEDIUM_USER_CARD,
          },
        },
        {
          name: 'Markdown',
          columnName: 'ContributorsDescription',
          injectMarkdown: true,
          props: {},
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
          name: 'CardContainerLogic',
          title: 'Support',
          columnName: 'Support',
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
        {
          name: 'Markdown',
          columnName: 'DataConditionsForUse',
          title: 'Data Conditions For Use',
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
