import { useMutation } from '@tanstack/react-query'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'

export function useGridPresignedUrl() {
  const { synapseClient } = useSynapseContext()
  return useMutation<string, unknown, { sessionId: string; replicaId: number }>(
    {
      mutationFn: async ({ sessionId, replicaId }) => {
        const { presignedUrl } =
          await synapseClient.gridServicesClient.postRepoV1GridSessionSessionIdPresignedUrl(
            {
              sessionId,
              createGridPresignedUrlRequest: {
                gridSessionId: sessionId,
                replicaId,
              },
            },
          )
        return presignedUrl!
      },
    },
  )
}

export default useGridPresignedUrl
