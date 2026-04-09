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
 * A hook to get or create a GridSession for an unassigned CurationTask. The session will be owned by the calling user.
 *
 * @returns A mutation object with a function to get or create a GridSession for a CurationTask.
 * @deprecated This functionality is preserved to ensure users are not blocked from doing work, but enables a critical
 * data loss scenario, so we must aim to remove it.
 */
export default function useGridSessionForCurationTask_legacy() {
  const { mutateAsync: getOrCreateGridSession } =
    useGetOrCreateGridSessionForSource()

  return useMutation<
    GridSession,
    SynapseClientError,
    { curationTask: CurationTask }
  >({
    mutationFn: async ({ curationTask }) => {
      const gridSourceId = getGridSourceIdForTask(curationTask)

      const createGridRequest =
        getCreateGridRequestForMetadataTask(curationTask)
      return await getOrCreateGridSession({
        sourceId: gridSourceId,
        createRequest: createGridRequest,
      })
    },
  })
}
