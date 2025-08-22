import SynapseClient from '@/synapse-client'
import { SynapseClientError, useSynapseContext } from '@/utils'
import {
  ALL_ENTITY_BUNDLE_FIELDS,
  EntityBundle,
  EntityBundleRequest,
} from '@sage-bionetworks/synapse-types'
import {
  skipToken,
  useQuery,
  UseQueryOptions,
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query'

export function useGetEntityBundleQueryOptions<
  T extends EntityBundleRequest = typeof ALL_ENTITY_BUNDLE_FIELDS,
  TSelect = EntityBundle<T>,
>(
  entityId?: string,
  version?: number,
  bundleRequest: T = ALL_ENTITY_BUNDLE_FIELDS as T,
  select?: (data: EntityBundle<T>) => TSelect,
): UseQueryOptions<EntityBundle<T>, SynapseClientError, TSelect> {
  const { accessToken, keyFactory } = useSynapseContext()
  return {
    select,
    queryKey: keyFactory.getEntityBundleQueryKey(
      entityId,
      version,
      bundleRequest,
    ),
    queryFn: entityId
      ? () =>
          SynapseClient.getEntityBundleV2<T>(
            entityId,
            bundleRequest,
            version,
            accessToken,
          )
      : skipToken,
  }
}

export function useGetEntityBundleSuspenseQueryOptions<
  T extends EntityBundleRequest = typeof ALL_ENTITY_BUNDLE_FIELDS,
  TSelect = EntityBundle<T>,
>(
  entityId: string,
  version?: number,
  bundleRequest: T = ALL_ENTITY_BUNDLE_FIELDS as T,
  select?: (data: EntityBundle<T>) => TSelect,
): UseSuspenseQueryOptions<EntityBundle<T>, SynapseClientError, TSelect> {
  const { accessToken } = useSynapseContext()
  const baseQueryOptions = useGetEntityBundleQueryOptions<T, TSelect>(
    entityId,
    version,
    bundleRequest,
    select,
  )
  return {
    ...baseQueryOptions,
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
  entityId?: string,
  version?: number,
  bundleRequest: T = ALL_ENTITY_BUNDLE_FIELDS as T,
  options?: Partial<
    UseQueryOptions<EntityBundle<T>, SynapseClientError, TSelect>
  >,
) {
  const queryOptions = useGetEntityBundleQueryOptions<T, TSelect>(
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
  TSelect = EntityBundle<T>,
>(
  entityId: string,
  version?: number,
  bundleRequest: T = ALL_ENTITY_BUNDLE_FIELDS as T,
  options?: Partial<
    UseSuspenseQueryOptions<EntityBundle<T>, SynapseClientError, TSelect>
  >,
) {
  const queryOptions = useGetEntityBundleSuspenseQueryOptions<T, TSelect>(
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
