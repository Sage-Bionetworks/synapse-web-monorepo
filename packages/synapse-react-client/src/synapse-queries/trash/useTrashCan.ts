import {
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

export function useGetItemsInTrashCanInfinite(
  options?: UseInfiniteQueryOptions<
    PaginatedResults<TrashedEntity>,
    SynapseClientError
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useInfiniteQuery<PaginatedResults<TrashedEntity>, SynapseClientError>(
    keyFactory.getTrashCanItemsQueryKey(),
    context => {
      return SynapseClient.getItemsInTrashCan(accessToken, context.pageParam)
    },
    {
      ...options,
      getNextPageParam: getNextPageParamForPaginatedResults,
    },
  )
}

export function useRestoreEntities(
  options?: UseMutationOptions<
    PromiseSettledResult<void>[],
    SynapseClientError,
    string | Set<string>
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<
    PromiseSettledResult<void>[],
    SynapseClientError,
    string | Set<string>
  >(
    (ids: string | Set<string>) => {
      if (typeof ids === 'string') {
        ids = new Set([ids])
      }
      const promises = Array.from(ids).map(id => {
        return SynapseClient.restoreFromTrashCan(id, accessToken)
      })
      return Promise.allSettled(promises)
    },
    {
      ...options,
      onSuccess: async (_, ids, ctx) => {
        await queryClient.invalidateQueries(
          keyFactory.getTrashCanItemsQueryKey(),
        )
        if (options?.onSuccess) {
          await options.onSuccess(_, ids, ctx)
        }
      },
    },
  )
}

export function usePurgeEntities(
  options?: UseMutationOptions<
    PromiseSettledResult<void>[],
    SynapseClientError,
    string | Set<string>
  >,
) {
  const queryClient = useQueryClient()
  const { accessToken, keyFactory } = useSynapseContext()

  return useMutation<
    PromiseSettledResult<void>[],
    SynapseClientError,
    string | Set<string>
  >(
    (ids: string | Set<string>) => {
      if (typeof ids === 'string') {
        ids = new Set([ids])
      }
      const promises = Array.from(ids).map(id => {
        return SynapseClient.purgeFromTrashCan(id, accessToken)
      })
      return Promise.allSettled(promises)
    },
    {
      ...options,
      onSuccess: async (_, ids, ctx) => {
        await queryClient.invalidateQueries(
          keyFactory.getTrashCanItemsQueryKey(),
        )
        if (options?.onSuccess) {
          await options.onSuccess(_, ids, ctx)
        }
      },
    },
  )
}
