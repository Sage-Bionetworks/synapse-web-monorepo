import ChallengeDataDownloadWrapper from '@sage-bionetworks/synapse-portal-framework/components/challengeportal/ChallengeDataDownloadWrapper'
import ChallengeDetailPageWrapper from '@sage-bionetworks/synapse-portal-framework/components/challengeportal/ChallengeDetailPageWrapper'
import ChallengeParticipantGoogleMap from '@sage-bionetworks/synapse-portal-framework/components/challengeportal/ChallengeParticipantGoogleMap'
import ChallengeSubmissionWrapper from '@sage-bionetworks/synapse-portal-framework/components/challengeportal/ChallengeSubmissionWrapper'
import {
  DetailsPageContent,
  DetailsPageContentType,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import ProjectDiscussionForum from '@sage-bionetworks/synapse-portal-framework/components/ProjectDiscussionForum'
import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { DetailsPageProps } from '@sage-bionetworks/synapse-portal-framework/types/portal-util-types'
import {
  PortalSearchParams,
  useGetPortalComponentSearchParams,
} from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import {
  ColumnSingleValueFilterOperator,
  EntityType,
} from '@sage-bionetworks/synapse-types'
import React from 'react'
import {
  CardConfiguration,
  CardContainerLogic,
  CardLink,
  ErrorPage,
  GenericCardSchema,
  NoContentAvailable,
  SynapseConstants,
  SynapseErrorType,
} from 'synapse-react-client'
import { challengeProjectsSql } from '../resources'

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

export const challengeDetailsPageConfig: DetailsPageProps = {
  sql: challengeProjectsSql,
  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
  tabRoutes: [
    {
      title: 'Overview',
      path: 'Overview',
      tooltip: 'Challenge overview',
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
              element: (
                <MarkdownSynapseFromColumnData columnName={'Objective'} />
              ),
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
              element: (
                <MarkdownSynapseFromColumnData columnName={'Timeline'} />
              ),
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
                      type={SynapseConstants.MEDIUM_USER_CARD}
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
                      type={SynapseConstants.MEDIUM_USER_CARD}
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
                      type={SynapseConstants.MEDIUM_USER_CARD}
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
                          type={SynapseConstants.MEDIUM_USER_CARD}
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
                <PortalSearchParams keyFilter={['id']}>
                  {searchParams => (
                    <ChallengeParticipantGoogleMap
                      projectId={searchParams['id']}
                    />
                  )}
                </PortalSearchParams>
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
      title: 'Instructions',
      path: 'Instructions',
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
                <MarkdownSynapseFromColumnData
                  columnName={'EligibilityRules'}
                />
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
      title: 'Task 1',
      path: 'Task1',
      element: <DetailsPageContent content={getTaskTabConfig('Task_1')} />,
      // specify a column that determines visibility.  For this case, set to a required Task0 annotation (description)
      hideIfColumnValueNull: 'Task_1.Description',
    },
    {
      title: 'Task 2',
      path: 'Task2',
      element: <DetailsPageContent content={getTaskTabConfig('Task_2')} />,
      hideIfColumnValueNull: 'Task_2.Description',
    },
    {
      title: 'Task 3',
      path: 'Task3',
      hideIfColumnValueNull: 'Task_3.Description',
      element: <DetailsPageContent content={getTaskTabConfig('Task_3')} />,
    },
    {
      title: 'Task 4',
      path: 'Task4',
      hideIfColumnValueNull: 'Task_4.Description',
      element: <DetailsPageContent content={getTaskTabConfig('Task_4')} />,
    },
    {
      title: 'Task 5',
      path: 'Task5',
      hideIfColumnValueNull: 'Task_5.Description',
      element: <DetailsPageContent content={getTaskTabConfig('Task_5')} />,
    },
    {
      title: 'News',
      path: 'News',
      hideIfColumnValueNull: 'Announcements',
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
      title: 'Community',
      path: 'Community',
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
  ],
}

export const challengeDetailsLandingPage: SynapseConfig[] = [
  {
    name: 'DetailsPage',
    props: challengeDetailsPageConfig,
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
          {...challengeCardConfiguration}
          sql={challengeProjectsSql}
          isHeader
          searchParams={{ id }}
        />
      </div>
      {/*Register For Challenge component is here, and the wrapper positions it properly in the header card*/}
      <ChallengeDetailPageWrapper />
      <DetailsPage {...challengeDetailsPageConfig} />
    </>
  )
}
