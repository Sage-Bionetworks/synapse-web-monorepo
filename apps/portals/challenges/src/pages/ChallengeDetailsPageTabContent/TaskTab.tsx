import ChallengeDataDownloadWrapper from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeDataDownloadWrapper'
import ChallengeSubmissionWrapper, {
  ChallengeSubmissionWrapperProps,
} from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeSubmissionWrapper'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import { useParams } from 'react-router'
import ErrorPage, {
  SynapseErrorType,
} from 'synapse-react-client/components/error/ErrorPage'

const TASK_ID_PATH_PATTERN = /Task(\d+)/

function mapTaskIdToColumnName(taskId): string {
  const match = TASK_ID_PATH_PATTERN.exec(taskId)
  return `Task_${match?.[1]}`
}

/**
 * Tab for a specific task.
 *
 * If the URL path is /Task1, this will show the content for the `Task_1` columns defined in the table.
 */
function TaskTab() {
  const params = useParams()
  const taskIdParam = params['taskId']
  const taskId = mapTaskIdToColumnName(taskIdParam)

  if (taskId) {
    return (
      <DetailsPageContent
        content={[
          {
            id: 'Description',
            title: 'Description',
            element: (
              <MarkdownSynapseFromColumnData
                columnName={`${taskId}.Description`}
              />
            ),
          },
          {
            id: 'Data',
            title: 'Data',
            element: (
              <MarkdownSynapseFromColumnData
                columnName={`${taskId}.DataWiki`}
              />
            ),
          },
          {
            id: 'Data Files',
            title: 'Data Files',
            element: (
              <DetailsPageContextConsumer columnName={`${taskId}.DataFolder`}>
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
                columnName={`${taskId}.EvaluationWiki`}
              />
            ),
          },
          {
            id: 'Submission',
            title: 'Submission',
            element: (
              <MarkdownSynapseFromColumnData
                columnName={`${taskId}.SubmissionWiki`}
              />
            ),
          },
          {
            id: 'ChallengeSubmissionWrapper',
            element: (
              <DetailsPageContextConsumer
                columnName={`${taskId}.SubmissionType`}
              >
                {({ value }) => (
                  <ChallengeSubmissionWrapper
                    entityType={
                      value as ChallengeSubmissionWrapperProps['entityType']
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
              <MarkdownSynapseFromColumnData
                columnName={`${taskId}.Leaderboard`}
              />
            ),
          },
          {
            id: `AlgorithmWiki`,
            element: (
              <MarkdownSynapseFromColumnData
                columnName={`${taskId}.AlgorithmWiki`}
              />
            ),
          },
          {
            id: `WinningSubmission`,
            element: (
              <MarkdownSynapseFromColumnData
                columnName={`${taskId}.WinningSubmission`}
              />
            ),
          },
        ]}
      />
    )
  }
  return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
}

export default TaskTab
