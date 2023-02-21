import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { Activity } from '../../../synapseTypes/Provenance/Provenance'
import { KeyFactory } from '../KeyFactory'

export function useGetActivityForEntity(
  entityId: string,
  versionNumber: number,
  options?: UseQueryOptions<Activity, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const keyFactory = new KeyFactory(accessToken)
  return useQuery<Activity, SynapseClientError>(
    keyFactory.getEntityActivityQueryKey(entityId, versionNumber),
    () =>
      SynapseClient.getActivityForEntity(entityId, versionNumber, accessToken),
    options,
  )
}
