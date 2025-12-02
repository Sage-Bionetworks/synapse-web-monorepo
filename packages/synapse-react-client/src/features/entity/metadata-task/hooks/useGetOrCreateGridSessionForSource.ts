import { getLatestGridSessionForSource } from '@/features/entity/metadata-task/utils/getLatestGridSessionForSource'
import { useCreateGridSession } from '@/synapse-queries/grid/useGridSession'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import {
  CreateGridRequest,
  GridSession,
  SynapseClientError,
} from '@sage-bionetworks/synapse-client'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export default function useGetOrCreateGridSessionForSource() {
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
