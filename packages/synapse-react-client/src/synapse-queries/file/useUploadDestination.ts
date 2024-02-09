import { UseQueryOptions, useQuery } from '@tanstack/react-query'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import { UploadDestination } from '@sage-bionetworks/synapse-types'
import {
  getDefaultUploadDestination,
  getUploadDestinationForStorageLocation,
} from '../../synapse-client/SynapseClient'

export function useGetDefaultUploadDestination(
  containerEntityId: string,
  options?: UseQueryOptions<UploadDestination, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<UploadDestination, SynapseClientError>(
    keyFactory.getDefaultUploadDestinationQueryKey(containerEntityId),
    () => getDefaultUploadDestination(containerEntityId, accessToken),
    {
      ...options,
    },
  )
}

export function useGetUploadDestinationForStorageLocation(
  parentId: string,
  storageLocationId: number,
  options?: UseQueryOptions<UploadDestination, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<UploadDestination, SynapseClientError>(
    keyFactory.getUploadDestinationForStorageLocationQueryKey(
      parentId,
      storageLocationId,
    ),
    () =>
      getUploadDestinationForStorageLocation(
        parentId,
        storageLocationId,
        accessToken,
      ),
    {
      ...options,
    },
  )
}
