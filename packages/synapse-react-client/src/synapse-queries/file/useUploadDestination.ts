import { SynapseClientError, useSynapseContext } from '@/utils'
import { UploadDestination } from '@sage-bionetworks/synapse-client'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

export function useGetDefaultUploadDestination(
  containerEntityId: string,
  options?: Partial<UseQueryOptions<UploadDestination, SynapseClientError>>,
) {
  const { keyFactory, synapseClient } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getDefaultUploadDestinationQueryKey(containerEntityId),
    queryFn: () =>
      synapseClient.fileServicesClient.getFileV1EntityIdUploadDestination({
        id: containerEntityId,
      }),
  })
}

export function useGetUploadDestinationForStorageLocation(
  parentId: string,
  storageLocationId: number,
  options?: Partial<UseQueryOptions<UploadDestination, SynapseClientError>>,
) {
  const { synapseClient, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getUploadDestinationForStorageLocationQueryKey(
      parentId,
      storageLocationId,
    ),

    queryFn: () =>
      synapseClient.fileServicesClient.getFileV1EntityIdUploadDestinationStorageLocationId(
        { id: parentId, storageLocationId },
      ),
  })
}
