import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { ALL_ENTITY_BUNDLE_FIELDS } from '../../../SynapseConstants'
import { useSynapseContext } from '../../../SynapseContext'
import { EntityBundle, EntityBundleRequest } from '../../../synapseTypes'
import useKeyFactory from '../useKeyFactory'

export function useGetEntityBundle<
  T extends EntityBundleRequest = typeof ALL_ENTITY_BUNDLE_FIELDS,
>(
  entityId: string,
  version?: number,
  bundleRequest: T = ALL_ENTITY_BUNDLE_FIELDS as T,
  options?: UseQueryOptions<EntityBundle<T>, SynapseClientError>,
) {
  const { accessToken } = useSynapseContext()
  const keyFactory = useKeyFactory()
  return useQuery<EntityBundle<T>, SynapseClientError>(
    keyFactory.getEntityBundleQueryKey(entityId, version, bundleRequest),
    () =>
      SynapseClient.getEntityBundleV2<T>(
        entityId,
        bundleRequest,
        version,
        accessToken,
      ),
    options,
  )
}

export default useGetEntityBundle
