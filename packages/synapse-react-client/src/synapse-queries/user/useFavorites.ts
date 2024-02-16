import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query'
import SynapseClient from '../../synapse-client'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  EntityHeader,
  FavoriteSortBy,
  FavoriteSortDirection,
  PaginatedResults,
} from '@sage-bionetworks/synapse-types'
import { getNextPageParamForPaginatedResults } from '../InfiniteQueryUtils'

export function useIsFavorite(entityId: string) {
  // TODO: Handle pagination - the default limit is 200
  // It would probably make more sense to add a backend service to check if an entity ID is favorited
  const { data: allFavorites, isLoading } = useGetFavorites()
  const isFavorite = allFavorites?.results?.some(
    favorite => favorite.id === entityId,
  )
  return { isFavorite, isLoading }
}

export function useAddFavorite(
  options?: Partial<
    UseMutationOptions<EntityHeader, SynapseClientError, string>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation({
    ...options,
    mutationFn: (entityId: string) =>
      SynapseClient.addUserFavorite(entityId, accessToken),
    mutationKey: ['addFavorite'],
    onSuccess: async (data, variables, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getFavoritesQueryKey(),
      })
      if (options?.onSuccess) {
        return options.onSuccess(data, variables, ctx)
      }
      return
    },
  })
}

export function useRemoveFavorite(
  options?: Partial<UseMutationOptions<void, SynapseClientError, string>>,
) {
  const { accessToken } = useSynapseContext()
  const queryClient = useQueryClient()
  const { keyFactory } = useSynapseContext()

  return useMutation({
    ...options,
    mutationFn: (entityId: string) =>
      SynapseClient.removeUserFavorite(entityId, accessToken),
    mutationKey: ['removeFavorite'],
    onSuccess: async (data, variables, ctx) => {
      await queryClient.invalidateQueries({
        queryKey: keyFactory.getFavoritesQueryKey(),
      })
      if (options?.onSuccess) {
        return options.onSuccess(data, variables, ctx)
      }
      return
    },
  })
}

export function useGetFavorites(
  sort: FavoriteSortBy = 'FAVORITED_ON',
  sortDirection: FavoriteSortDirection = 'DESC',
  options?: Partial<
    UseQueryOptions<PaginatedResults<EntityHeader>, SynapseClientError>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getUserFavoritesQueryKey(sort, sortDirection),
    queryFn: () =>
      SynapseClient.getUserFavorites(
        accessToken,
        undefined,
        undefined,
        sort,
        sortDirection,
      ),
  })
}

export function useGetFavoritesInfinite<
  TData = InfiniteData<PaginatedResults<EntityHeader>>,
>(
  sort: FavoriteSortBy = 'FAVORITED_ON',
  sortDirection: FavoriteSortDirection = 'DESC',
  options?: Partial<
    UseInfiniteQueryOptions<
      PaginatedResults<EntityHeader>,
      SynapseClientError,
      TData,
      PaginatedResults<EntityHeader>,
      QueryKey,
      number | undefined
    >
  >,
) {
  const LIMIT = 10

  const { accessToken, keyFactory } = useSynapseContext()

  return useInfiniteQuery<
    PaginatedResults<EntityHeader>,
    SynapseClientError,
    TData,
    QueryKey,
    number | undefined
  >({
    ...options,
    queryKey: keyFactory.getUserFavoritesInfiniteQueryKey(sort, sortDirection),
    queryFn: async context => {
      return SynapseClient.getUserFavorites(
        accessToken,
        // pass the context.pageParam for the new offset
        context.pageParam,
        LIMIT,
        sort,
        sortDirection,
      )
    },
    initialPageParam: undefined,
    getNextPageParam: getNextPageParamForPaginatedResults,
  })
}
