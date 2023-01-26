import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { Activity } from '../../../synapseTypes/Provenance/Provenance'

export function useGetActivityForEntity(
  entityId: string,
  versionNumber: number,
  options?: UseQueryOptions<Activity, SynapseClientError, Activity>,
) {
  const { accessToken } = useSynapseContext()
  return useQuery<Activity, SynapseClientError>(
    ['getActivityForEntity', entityId, versionNumber, accessToken],
    () =>
      SynapseClient.getActivityForEntity(entityId, versionNumber, accessToken),
    options,
  )
}
