import ChallengeDataDownloadWrapper from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeDataDownloadWrapper'
import ChallengeDetailPageWrapper from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeDetailPageWrapper'
import ChallengeParticipantGoogleMap from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeParticipantGoogleMap'
import ChallengeSubmissionWrapper from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeSubmissionWrapper'
import {
  DetailsPageContent,
  DetailsPageContentType,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import ProjectDiscussionForum from '@sage-bionetworks/synapse-portal-framework/components/ProjectDiscussionForum'
import RedirectWithQuery from '@sage-bionetworks/synapse-portal-framework/components/RedirectWithQuery'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import {
  ColumnSingleValueFilterOperator,
  EntityType,
} from '@sage-bionetworks/synapse-types'
import { Outlet, RouteObject } from 'react-router'
import {
  CardConfiguration,
  CardContainerLogic,
  ErrorPage,
  NoContentAvailable,
  SynapseConstants,
  SynapseErrorType,
} from 'synapse-react-client'
import { CardLink } from 'synapse-react-client/components/CardContainer/CardLink'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import { challengeProjectsSql } from '../resources'

export const challengesSchema: TableToGenericCardMapping = {
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

function getTaskTabConfig(taskID: string): DetailsPageContentType {
  /** Not currently using DataType or TaskType. */
  const configs: DetailsPageContentType = []
  configs.push(
    {
      id: 'Description',
      title: 'Description',
      element: (
        <MarkdownSynapseFromColumnData columnName={`${taskID}.Description`} />
      ),
    },
    {
      id: 'Data',
      title: 'Data',
      element: (
        <MarkdownSynapseFromColumnData columnName={`${taskID}.DataWiki`} />
      ),
    },
    {
      id: 'Data Files',
      title: 'Data Files',
      element: (
        <DetailsPageContextConsumer columnName={`${taskID}.DataFolder`}>
          {({ value }) => (
            <ChallengeDataDownloadWrapper parentContainerId={value!} />
          )}
        </DetailsPageContextConsumer>
      ),
    },
    {
      id: 'Evaluation',
      title: 'Evaluation',
      element: (
        <MarkdownSynapseFromColumnData
          columnName={`${taskID}.EvaluationWiki`}
        />
      ),
    },
    {
      id: 'Submission',
      title: 'Submission',
      element: (
        <MarkdownSynapseFromColumnData
          columnName={`${taskID}.SubmissionWiki`}
        />
      ),
    },
    {
      id: 'ChallengeSubmissionWrapper',
      element: (
        <DetailsPageContextConsumer columnName={`${taskID}.SubmissionType`}>
          {({ value }) => (
            <ChallengeSubmissionWrapper
              entityType={
                value as EntityType.FILE | EntityType.DOCKER_REPO | undefined
              }
            />
          )}
        </DetailsPageContextConsumer>
      ),
    },
    {
      id: 'Results',
      title: 'Results',
      element: (
        <MarkdownSynapseFromColumnData columnName={`${taskID}.Leaderboard`} />
      ),
    },
    {
      id: `AlgorithmWiki`,
      element: (
        <MarkdownSynapseFromColumnData columnName={`${taskID}.AlgorithmWiki`} />
      ),
    },
    {
      id: `WinningSubmission`,
      element: (
        <MarkdownSynapseFromColumnData
          columnName={`${taskID}.WinningSubmission`}
        />
      ),
    },
  )
  return configs
}

const challengeDetailsPageTabConfig: DetailsPageTabConfig[] = [
  {
    title: 'Overview',
    path: 'Overview',
    tooltip: 'Challenge overview',
  },
  {
    title: 'Instructions',
    path: 'Instructions',
  },
  {
    title: 'Task 1',
    path: 'Task1',
    // specify a column that determines visibility.  For this case, set to a required Task0 annotation (description)
    hideIfColumnValueNull: 'Task_1.Description',
  },

  {
    title: 'Task 2',
    path: 'Task2',
    hideIfColumnValueNull: 'Task_2.Description',
  },
  {
    title: 'Task 3',
    path: 'Task3',
    hideIfColumnValueNull: 'Task_3.Description',
  },
  {
    title: 'Task 4',
    path: 'Task4',
    hideIfColumnValueNull: 'Task_4.Description',
  },
  {
    title: 'Task 5',
    path: 'Task5',
    hideIfColumnValueNull: 'Task_5.Description',
  },
  {
    title: 'News',
    path: 'News',
    hideIfColumnValueNull: 'Announcements',
  },
  {
    title: 'Community',
    path: 'Community',
  },
]

export const challengeDetailsPageTabRoutes: RouteObject[] = [
  {
    index: true,
    element: <RedirectWithQuery to={challengeDetailsPageTabConfig[0].path} />,
  },
  {
    path: challengeDetailsPageTabConfig[0].path,
    element: (
      <DetailsPageContent
        content={[
          {
            id: 'Overview',
            title: 'Overview',
            element: <MarkdownSynapseFromColumnData columnName={'id'} />,
          },
          {
            id: 'Objective',
            title: 'Objective',
            element: <MarkdownSynapseFromColumnData columnName={'Objective'} />,
          },
          {
            id: 'Description',
            title: 'Description',
            element: (
              <MarkdownSynapseFromColumnData columnName={'Description'} />
            ),
          },
          {
            id: 'Timeline',
            title: 'Timeline',
            element: <MarkdownSynapseFromColumnData columnName={'Timeline'} />,
          },
          {
            id: 'Organizers',
            title: 'Organizers',
            element: (
              <DetailsPageContextConsumer columnName={'Organizers'}>
                {({ value }) => (
                  <CardContainerLogic
                    sql={`SELECT * FROM ${value}`}
                    limit={6}
                    cardConfiguration={{
                      type: SynapseConstants.MEDIUM_USER_CARD,
                    }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'OrganizersDescription',
            element: (
              <MarkdownSynapseFromColumnData
                columnName={'OrganizersDescription'}
              />
            ),
          },
          {
            id: 'Contributors',
            title: 'Contributors',
            element: (
              <DetailsPageContextConsumer columnName={'Contributors'}>
                {({ value }) => (
                  <CardContainerLogic
                    sql={`SELECT * FROM ${value}`}
                    limit={6}
                    cardConfiguration={{
                      type: SynapseConstants.MEDIUM_USER_CARD,
                    }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'ContributorsDescription',
            element: (
              <MarkdownSynapseFromColumnData
                columnName={'ContributorsDescription'}
              />
            ),
          },
          {
            id: 'Sponsors',
            title: 'Sponsors',
            element: (
              <DetailsPageContextConsumer columnName={'Sponsors'}>
                {({ value }) => (
                  <CardContainerLogic
                    sql={`SELECT * FROM ${value}`}
                    limit={6}
                    cardConfiguration={{
                      type: SynapseConstants.MEDIUM_USER_CARD,
                    }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'Support',
            title: 'Support',
            element: (
              <DetailsPageContextConsumer columnName={'Support'}>
                {({ value }) => {
                  // TODO: Generalize sql transform to apply falsy check everywhere
                  if (value) {
                    return (
                      <CardContainerLogic
                        sql={`SELECT * FROM ${value}`}
                        limit={6}
                        cardConfiguration={{
                          type: SynapseConstants.MEDIUM_USER_CARD,
                        }}
                      />
                    )
                  }
                  return <NoContentAvailable />
                }}
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'Participants',
            title: 'Participants',
            element: (
              <DetailsPageContextConsumer columnName={'id'}>
                {({ value: id }) => (
                  <ChallengeParticipantGoogleMap projectId={id!} />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            id: 'Incentives',
            title: 'Incentives',
            element: (
              <MarkdownSynapseFromColumnData
                columnName={'Incentives'}
                showNoContentAvailable={true}
              />
            ),
          },
        ]}
      />
    ),
  },
  {
    path: challengeDetailsPageTabConfig[1].path,
    element: (
      <DetailsPageContent
        content={[
          {
            id: 'Instructions',
            title: 'Instructions',
            element: (
              <MarkdownSynapseFromColumnData columnName={'Instructions'} />
            ),
          },
          {
            id: 'Eligibility Rules',
            title: 'Eligibility Rules',
            element: (
              <MarkdownSynapseFromColumnData columnName={'EligibilityRules'} />
            ),
          },
          {
            id: 'Conduct Rules',
            title: 'Conduct Rules',
            element: (
              <MarkdownSynapseFromColumnData columnName={'ConductRules'} />
            ),
          },
          {
            id: 'Data Conditions For Use',
            title: 'Data Conditions For Use',
            element: (
              <MarkdownSynapseFromColumnData
                columnName={'DataConditionsForUse'}
              />
            ),
          },
        ]}
      />
    ),
  },
  {
    path: challengeDetailsPageTabConfig[2].path,
    element: <DetailsPageContent content={getTaskTabConfig('Task_1')} />,
  },

  {
    path: challengeDetailsPageTabConfig[3].path,
    element: <DetailsPageContent content={getTaskTabConfig('Task_2')} />,
  },
  {
    path: challengeDetailsPageTabConfig[4].path,
    element: <DetailsPageContent content={getTaskTabConfig('Task_3')} />,
  },
  {
    path: challengeDetailsPageTabConfig[5].path,
    element: <DetailsPageContent content={getTaskTabConfig('Task_4')} />,
  },
  {
    path: challengeDetailsPageTabConfig[6].path,
    element: <DetailsPageContent content={getTaskTabConfig('Task_5')} />,
  },
  {
    path: challengeDetailsPageTabConfig[7].path,
    element: (
      <DetailsPageContent
        content={[
          {
            id: 'Announcements',
            title: 'Announcements',
            element: (
              <MarkdownSynapseFromColumnData columnName={'Announcements'} />
            ),
          },
        ]}
      />
    ),
  },
  {
    path: challengeDetailsPageTabConfig[8].path,
    element: (
      <DetailsPageContent
        content={[
          {
            id: 'Discussion Forum',
            title: 'Discussion Forum',
            element: <ProjectDiscussionForum />,
          },
        ]}
      />
    ),
  },
]

export function ChallengeDetailsPage() {
  const { id } = useGetPortalComponentSearchParams()

  if (!id) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }
  return (
    <>
      <div className={'challengeDetailPageHeaderCard'}>
        <CardContainerLogic
          cardConfiguration={challengeCardConfiguration}
          sql={challengeProjectsSql}
          isHeader
          searchParams={{ id }}
        />
      </div>
      {/*Register For Challenge component is here, and the wrapper positions it properly in the header card*/}
      <ChallengeDetailPageWrapper />
      <DetailsPage
        sql={challengeProjectsSql}
        sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
      >
        <DetailsPageTabs tabConfig={challengeDetailsPageTabConfig} />
        <Outlet />
      </DetailsPage>
    </>
  )
}
