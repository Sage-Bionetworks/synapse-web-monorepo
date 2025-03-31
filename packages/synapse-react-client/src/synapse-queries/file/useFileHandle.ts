import { useSynapseContext } from '@/utils/index'
import { PostFileV1ExternalFileHandleRequest } from '@sage-bionetworks/synapse-client'
import { useMutation } from '@tanstack/react-query'

export function useCreateExternalFileHandle() {
  const { synapseClient } = useSynapseContext()

  return useMutation({
    mutationFn: (args: PostFileV1ExternalFileHandleRequest) =>
      synapseClient.fileServicesClient.postFileV1ExternalFileHandle(args),
  })
}
