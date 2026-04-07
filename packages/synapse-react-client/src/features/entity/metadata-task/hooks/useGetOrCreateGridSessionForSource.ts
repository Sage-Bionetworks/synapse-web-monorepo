import { getLatestGridSessionForSource } from '@/features/entity/metadata-task/utils/getLatestGridSessionForSource'
import { useCreateGridSession } from '@/synapse-queries/grid/useGridSession'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  CreateGridRequest,
  GridSession,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import { useMutation, useQueryClient } from '@tanstack/react-query'

/**
 * Given a source ID, retrieve the latest grid session owned by the user that uses that source. If no grid session
 * exists, a new one is created.
 * @deprecated Functionality to retrieve grid sessions has been replaced by tasks. This hook only remains to enable a legacy
 * scenario that will be removed in the future.
 */
export default function useGetOrCreateGridSessionForSource_legacy() {
  const queryClient = useQueryClient()
  const synapseContext = useSynapseContext()

  const { mutateAsync: createGridSession } = useCreateGridSession()

  return useMutation<
    GridSession,
    SynapseClientError,
    { sourceId: string; createRequest: CreateGridRequest }
  >({
    mutationFn: async ({ sourceId, createRequest }) => {
      const maybeGridSession = await getLatestGridSessionForSource(sourceId, {
        queryClient,
        synapseContext,
      })

      if (maybeGridSession != null) {
        return maybeGridSession
      }
      return (await createGridSession(createRequest)).gridSession!
    },
  })
}
