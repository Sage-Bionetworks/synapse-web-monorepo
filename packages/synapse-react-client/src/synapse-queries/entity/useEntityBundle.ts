import {
  useQuery,
  UseQueryOptions,
  useSuspenseQuery,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  ALL_ENTITY_BUNDLE_FIELDS,
  EntityBundle,
  EntityBundleRequest,
} from '@sage-bionetworks/synapse-types'

export function useGetEntityBundleQueryOptions<
  T extends EntityBundleRequest = typeof ALL_ENTITY_BUNDLE_FIELDS,
>(
  entityId: string,
  version?: number,
  bundleRequest: T = ALL_ENTITY_BUNDLE_FIELDS as T,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return {
    queryKey: keyFactory.getEntityBundleQueryKey(
      entityId,
      version,
      bundleRequest,
    ),

    queryFn: () =>
      SynapseClient.getEntityBundleV2<T>(
        entityId,
        bundleRequest,
        version,
        accessToken,
      ),
  }
}

export function useGetEntityBundle<
  T extends EntityBundleRequest = typeof ALL_ENTITY_BUNDLE_FIELDS,
  TSelect = EntityBundle<T>,
>(
  entityId: string,
  version?: number,
  bundleRequest: T = ALL_ENTITY_BUNDLE_FIELDS as T,
  options?: Partial<
    UseQueryOptions<EntityBundle<T>, SynapseClientError, TSelect>
  >,
) {
  const queryOptions = useGetEntityBundleQueryOptions(
    entityId,
    version,
    bundleRequest,
  )
  return useQuery<EntityBundle<T>, SynapseClientError, TSelect>({
    ...options,
    ...queryOptions,
  })
}

export function useSuspenseGetEntityBundle<
  T extends EntityBundleRequest = typeof ALL_ENTITY_BUNDLE_FIELDS,
>(
  entityId: string,
  version?: number,
  bundleRequest: T = ALL_ENTITY_BUNDLE_FIELDS as T,
  options?: Partial<UseQueryOptions<EntityBundle<T>, SynapseClientError>>,
) {
  const queryOptions = useGetEntityBundleQueryOptions(
    entityId,
    version,
    bundleRequest,
  )
  return useSuspenseQuery({
    ...options,
    ...queryOptions,
  })
}

export default useGetEntityBundle
