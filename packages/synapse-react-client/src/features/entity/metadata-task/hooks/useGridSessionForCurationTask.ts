import {
  CurationTask,
  GridSession,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import { useMutation } from '@tanstack/react-query'
import { getGridSourceIdForTask } from '../utils/getGridSourceIdForTask'
import useGetOrCreateGridSessionForSource from '@/features/grid/hooks/useGetOrCreateGridSessionForSource'
import { getCreateGridRequestForMetadataTask } from '../utils/getCreateGridRequestForMetadataTask'

export default function useGridSessionForCurationTask() {
  const { mutateAsync: getOrCreateGridSession } =
    useGetOrCreateGridSessionForSource()

  return useMutation<
    GridSession,
    SynapseClientError,
    { curationTask: CurationTask }
  >({
    mutationFn: async ({ curationTask }) => {
      const taskProperties = curationTask.taskProperties
      if (taskProperties == null) {
        throw new Error('CurationTask is missing taskProperties')
      }

      const gridSourceId = getGridSourceIdForTask(curationTask)

      const createGridRequest =
        getCreateGridRequestForMetadataTask(taskProperties)
      return await getOrCreateGridSession({
        sourceId: gridSourceId,
        createRequest: createGridRequest,
      })
    },
  })
}
