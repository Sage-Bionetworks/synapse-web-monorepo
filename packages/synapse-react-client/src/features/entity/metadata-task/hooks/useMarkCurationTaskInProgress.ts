import { useUpdateCurationTaskStatus } from '@/synapse-queries/curation/task/useCurationTask'
import { useSynapseContext } from '@/utils/index'
import {
  SynapseClientError,
  TaskStatus,
  TaskStatusStateEnum,
} from '@sage-bionetworks/synapse-client'
import { useMutation } from '@tanstack/react-query'

/**
 * A hook to record that work has begun on a curation task by advancing its `TaskStatus` from
 * `NOT_STARTED` to `IN_PROGRESS`.
 *
 * @returns A mutation object taking a `taskId`. The mutation resolves to the updated `TaskStatus`,
 * or to `undefined` when the task had already advanced past `NOT_STARTED` and was left untouched.
 */
export default function useMarkCurationTaskInProgress() {
  const { synapseClient } = useSynapseContext()
  const { mutateAsync: updateCurationTaskStatus } =
    useUpdateCurationTaskStatus()

  return useMutation<TaskStatus | undefined, SynapseClientError, number>({
    mutationFn: async taskId => {
      const latestStatus =
        await synapseClient.curationTaskServicesClient.getRepoV1CurationTaskTaskIdStatus(
          { taskId },
        )

      if (latestStatus.state !== TaskStatusStateEnum.NOT_STARTED) {
        return undefined
      }

      return await updateCurationTaskStatus({
        ...latestStatus,
        state: TaskStatusStateEnum.IN_PROGRESS,
      })
    },
  })
}
