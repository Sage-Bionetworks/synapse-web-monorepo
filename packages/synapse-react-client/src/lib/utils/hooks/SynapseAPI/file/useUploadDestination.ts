import { UseQueryOptions, useQuery } from 'react-query'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { UploadDestination } from '../../../synapseTypes/File/UploadDestination'
import { getDefaultUploadDestination } from '../../../SynapseClient'
import useKeyFactory from '../useKeyFactory'

export function useGetDefaultUploadDestination(
  containerEntityId: string,
  options?: UseQueryOptions<UploadDestination, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const keyFactory = useKeyFactory()
  return useQuery<UploadDestination, SynapseClientError>(
    keyFactory.getDefaultUploadDestinationQueryKey(containerEntityId),
    () => getDefaultUploadDestination(containerEntityId, accessToken),
    {
      ...options,
    },
  )
}
