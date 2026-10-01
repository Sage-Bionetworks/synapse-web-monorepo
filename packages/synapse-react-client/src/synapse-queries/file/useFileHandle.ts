import { useSynapseContext } from '@/utils/index'
import { PostFileV1ExternalFileHandleRequest } from '@sage-bionetworks/synapse-client'
import SynapseClient from '@/synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { FileHandle } from '@sage-bionetworks/synapse-types'
import { useMutation, useQuery, UseQueryOptions } from '@tanstack/react-query'

export function useCreateExternalFileHandle() {
  const { synapseClient } = useSynapseContext()

  return useMutation({
    mutationFn: (args: PostFileV1ExternalFileHandleRequest) =>
      synapseClient.fileServicesClient.postFileV1ExternalFileHandle(args),
  })
}

/**
 * Get a file handle by its id. Synapse only serves a file handle that is not associated with an
 * object to the user that created it.
 */
export function useGetCreatorFileHandle(
  fileHandleId: string,
  options?: Partial<UseQueryOptions<FileHandle, SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<FileHandle, SynapseClientError>({
    ...options,
    queryKey: keyFactory.getFileHandleQueryKey(fileHandleId),
    queryFn: () => SynapseClient.getFileHandleById(fileHandleId, accessToken),
  })
}
