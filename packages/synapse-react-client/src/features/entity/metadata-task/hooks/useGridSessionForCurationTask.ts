import { useUpdateCurationTaskStatus } from '@/synapse-queries/curation/task/useCurationTask'
import {
  getGridSessionQuery,
  useCreateGridSession,
  useDeleteGridSession,
} from '@/synapse-queries/grid/useGridSession'
import { useSynapseContext } from '@/utils'
import {
  GridSession,
  SynapseClientError,
  TaskBundle,
} from '@sage-bionetworks/synapse-client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { getCreateGridRequestForMetadataTask } from '../utils/getCreateGridRequestForMetadataTask'
import taskHasAssignee from '../utils/taskHasAssignee'

export type UseGridSessionForCurationTaskResult = {
  gridSession: GridSession
  gridSessionOwnerMatchesTaskAssignee: boolean
}

/**
 * A hook to get or create a GridSession for a given CurationTask. If an appropriate GridSession exists, it will be returned.
 * If not, a new GridSession will be created based on the CurationTask's properties.
 *
 * @returns A mutation object with a function to get or create a GridSession for a CurationTask. The response will also indicate
 * if the GridSession owner matches the task assignee (if there is one).
 * @throws SynapseClientError with status 403 if the user does not have permission to access an existing GridSession
 */
export default function useGridSessionForCurationTask() {
  const { mutateAsync: createGridSession } = useCreateGridSession()
  const { mutateAsync: updateCurationTaskStatus } =
    useUpdateCurationTaskStatus()
  const { mutateAsync: deleteGridSession } = useDeleteGridSession()

  const synapseContext = useSynapseContext()
  const queryClient = useQueryClient()

  return useMutation<
    UseGridSessionForCurationTaskResult,
    SynapseClientError,
    TaskBundle
  >({
    mutationFn: async curationTaskBundle => {
      const { task, status } = curationTaskBundle
      if (!task || !status) {
        throw new Error('CurationTaskBundle is missing task or status')
      }

      const hasAssignee = taskHasAssignee(task)

      const gridSessionId = status?.executionDetails?.activeSessionId
      if (gridSessionId) {
        try {
          // Verify the session is still active before returning it
          const gridSession = await queryClient.fetchQuery({
            ...getGridSessionQuery(gridSessionId, {
              ...synapseContext,
              queryClient,
            }),
            staleTime: 0,
          })

          const assigneeMatchesGridSessionOwner =
            hasAssignee &&
            gridSession.ownerPrincipalId == task.assigneePrincipalId

          return {
            gridSession,
            gridSessionOwnerMatchesTaskAssignee:
              assigneeMatchesGridSessionOwner,
          }
        } catch (e) {
          if (e instanceof SynapseClientError && e.status === 404) {
            // Session not found, will create a new one
          } else {
            throw e
          }
        }
      }
      // Create a session and link it to the task
      const taskProperties = task.taskProperties
      if (taskProperties == null) {
        throw new Error('CurationTask is missing taskProperties')
      }

      const createGridRequest = getCreateGridRequestForMetadataTask(task)
      const createGridResponse = await createGridSession(createGridRequest)
      const gridSession = createGridResponse.gridSession!

      // Associate the new session with the task
      try {
        await updateCurationTaskStatus({
          ...status,
          executionDetails: {
            ...status.executionDetails,
            activeSessionId: gridSession.sessionId!,
            concreteType:
              'org.sagebionetworks.repo.model.curation.execution.GridExecutionDetails',
          },
        })
      } catch (e) {
        if (e instanceof SynapseClientError && e.status === 412) {
          // etag mismatch -- possible race condition.
          // Delete the session we just created to avoid orphaned sessions, and throw an error to notify the user that they may need to refresh and try again.
          await deleteGridSession(gridSession.sessionId!)
          throw new Error(
            'Failed to link Grid session to Curation Task. The task was updated since it was last retrieved. Please refresh and try again.',
          )
        } else {
          // Rethrow any other error
          throw e
        }
      }

      // Since we just created the session, the user must have access, and the owner must match the assignee (if there is one).
      return {
        gridSession,
        gridSessionOwnerMatchesTaskAssignee: hasAssignee,
      }
    },
  })
}
