import { UseQueryOptions, useQuery } from 'react-query'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { UploadDestination } from '../../../synapseTypes/File/UploadDestination'
import { getDefaultUploadDestination } from '../../../SynapseClient'

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
