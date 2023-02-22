import {
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
  UseMutationOptions,
} from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { EntityHeader, PaginatedResults } from '../../../synapseTypes'
import {
  FavoriteSortBy,
  FavoriteSortDirection,
} from '../../../synapseTypes/FavoriteSortBy'

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
  options?: UseMutationOptions<EntityHeader, SynapseClientError, string>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  const queryClient = useQueryClient()
  return useMutation({
    ...options,
    mutationFn: (entityId: string) =>
      SynapseClient.addUserFavorite(entityId, accessToken),
    mutationKey: ['addFavorite'],
    onSuccess: async (data, variables, ctx) => {
      await queryClient.invalidateQueries(keyFactory.getFavoritesQueryKey())
      if (options?.onSuccess) {
        return options.onSuccess(data, variables, ctx)
      }
    },
  })
}

export function useRemoveFavorite(
  options?: UseMutationOptions<void, SynapseClientError, string>,
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
      await queryClient.invalidateQueries(keyFactory.getFavoritesQueryKey())
      if (options?.onSuccess) {
        return options.onSuccess(data, variables, ctx)
      }
    },
  })
}

export function useGetFavorites(
  sort: FavoriteSortBy = 'FAVORITED_ON',
  sortDirection: FavoriteSortDirection = 'DESC',
  options?: UseQueryOptions<
    PaginatedResults<EntityHeader>,
    SynapseClientError,
    PaginatedResults<EntityHeader>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useQuery<PaginatedResults<EntityHeader>, SynapseClientError>(
    keyFactory.getUserFavoritesQueryKey(sort, sortDirection),
    () =>
      SynapseClient.getUserFavorites(
        accessToken,
        undefined,
        undefined,
        sort,
        sortDirection,
      ),
    options,
  )
}

export function useGetFavoritesInfinite(
  sort: FavoriteSortBy = 'FAVORITED_ON',
  sortDirection: FavoriteSortDirection = 'DESC',
  options?: UseInfiniteQueryOptions<
    PaginatedResults<EntityHeader>,
    SynapseClientError
  >,
) {
  const LIMIT = 10

  const { accessToken, keyFactory } = useSynapseContext()

  return useInfiniteQuery<PaginatedResults<EntityHeader>, SynapseClientError>(
    keyFactory.getUserFavoritesInfiniteQueryKey(sort, sortDirection),
    async context => {
      return SynapseClient.getUserFavorites(
        accessToken,
        // pass the context.pageParam for the new offset
        context.pageParam,
        LIMIT,
        sort,
        sortDirection,
      )
    },
    {
      ...options,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.results.length > 0) return pages.length * LIMIT
        //set the new offset to (page * limit)
        else return undefined
      },
    },
  )
}
