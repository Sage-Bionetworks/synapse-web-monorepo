import {
  CurationTask,
  GridSession,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import { useMutation } from '@tanstack/react-query'
import { getCreateGridRequestForMetadataTask } from '../utils/getCreateGridRequestForMetadataTask'
import { getGridSourceIdForTask } from '../utils/getGridSourceIdForTask'
import useGetOrCreateGridSessionForSource from './useGetOrCreateGridSessionForSource'

/**
 * A hook to get or create a GridSession for a given CurationTask. If an appropriate GridSession exists, it will be returned.
 * If not, a new GridSession will be created based on the CurationTask's properties.
 *
 * @returns A mutation object with a function to get or create a GridSession for a CurationTask.
 */
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
