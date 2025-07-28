import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  EntityHeader,
  FavoriteSortBy,
  FavoriteSortDirection,
  PaginatedResults,
} from '@sage-bionetworks/synapse-types'
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
import { getNextPageParamForPaginatedResults } from '../InfiniteQueryUtils'

export function useIsFavorite(entityId: string) {
  // Gets all pages of favorities to check if the entity is a favorite
  const { data: allFavorites, isLoading } = useGetFavorites()
  const isFavorite = allFavorites?.some(favorite => favorite.id === entityId)
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
  options?: Partial<UseQueryOptions<EntityHeader[], SynapseClientError>>,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery({
    ...options,
    queryKey: keyFactory.getUserFavoritesQueryKey(sort, sortDirection),
    queryFn: () =>
      SynapseClient.getAllUserFavorites(accessToken, sort, sortDirection),
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
      QueryKey,
      number | undefined
    >
  >,
) {
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
        undefined,
        sort,
        sortDirection,
      )
    },
    initialPageParam: undefined,
    getNextPageParam: getNextPageParamForPaginatedResults,
  })
}
