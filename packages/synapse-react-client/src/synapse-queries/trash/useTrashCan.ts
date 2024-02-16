import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  PaginatedResults,
  TrashedEntity,
} from '@sage-bionetworks/synapse-types'
import { getNextPageParamForPaginatedResults } from '../InfiniteQueryUtils'

export function useGetItemsInTrashCanInfinite<
  TData = InfiniteData<PaginatedResults<TrashedEntity>>,
>(
  options?: Partial<
    UseInfiniteQueryOptions<
      PaginatedResults<TrashedEntity>,
      SynapseClientError,
      TData,
      PaginatedResults<TrashedEntity>,
      QueryKey,
      number | undefined
    >
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useInfiniteQuery<
    PaginatedResults<TrashedEntity>,
    SynapseClientError,
    TData,
    QueryKey,
    number | undefined
  >({
    ...options,
    queryKey: keyFactory.getTrashCanItemsQueryKey(),
    queryFn: context => {
      return SynapseClient.getItemsInTrashCan(accessToken, context.pageParam)
    },
    initialPageParam: undefined,
    getNextPageParam: getNextPageParamForPaginatedResults,
  })
}

export function useRestoreEntities(
  options?: Partial<
    UseMutationOptions<
      PromiseSettledResult<void>[],
      SynapseClientError,
      string | Set<string>
    >
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<
    PromiseSettledResult<void>[],
    SynapseClientError,
    string | Set<string>
  >({
    ...options,
    mutationFn: (ids: string | Set<string>) => {
      if (typeof ids === 'string') {
        ids = new Set([ids])
      }
      const promises = Array.from(ids).map(id => {
        return SynapseClient.restoreFromTrashCan(id, accessToken)
      })
      return Promise.allSettled(promises)
    },
    onSuccess: async (_, ids, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getTrashCanItemsQueryKey(),
      })
      if (options?.onSuccess) {
        await options.onSuccess(_, ids, ctx)
      }
    },
  })
}

export function usePurgeEntities(
  options?: Partial<
    UseMutationOptions<
      PromiseSettledResult<void>[],
      SynapseClientError,
      string | Set<string>
    >
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<
    PromiseSettledResult<void>[],
    SynapseClientError,
    string | Set<string>
  >({
    ...options,
    mutationFn: (ids: string | Set<string>) => {
      if (typeof ids === 'string') {
        ids = new Set([ids])
      }
      const promises = Array.from(ids).map(id => {
        return SynapseClient.purgeFromTrashCan(id, accessToken)
      })
      return Promise.allSettled(promises)
    },
    onSuccess: async (_, ids, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getTrashCanItemsQueryKey(),
      })
      if (options?.onSuccess) {
        await options.onSuccess(_, ids, ctx)
      }
    },
  })
}
