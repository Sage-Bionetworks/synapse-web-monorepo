import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { Activity } from '../../../synapseTypes/Provenance/Provenance'
import useKeyFactory from '../useKeyFactory'

export function useGetActivityForEntity(
  entityId: string,
  versionNumber: number,
  options?: UseQueryOptions<Activity, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const keyFactory = useKeyFactory()
  return useQuery<Activity, SynapseClientError>(
    keyFactory.getEntityActivityQueryKey(entityId, versionNumber),
    () =>
      SynapseClient.getActivityForEntity(entityId, versionNumber, accessToken),
    options,
  )
}
