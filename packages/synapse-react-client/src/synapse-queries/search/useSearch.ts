import SynapseClient from '@/synapse-client'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { SearchQuery, SearchResults } from '@sage-bionetworks/synapse-types'
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from '@tanstack/react-query'

export function useSearch(
  query: SearchQuery,
  options?: Partial<
    UseQueryOptions<SearchResults, SynapseClientError, SearchResults>
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getSearchEntitiesQueryKey(query),
    queryFn: () => SynapseClient.searchEntities(query, accessToken),
  })
}

export function useSearchInfinite<TData = InfiniteData<SearchResults>>(
  query: Omit<SearchQuery, 'start'>,
  options?: Partial<
    UseInfiniteQueryOptions<
      SearchResults,
      SynapseClientError,
      TData,
      QueryKey,
      number | undefined
    >
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useInfiniteQuery<
    SearchResults,
    SynapseClientError,
    TData,
    QueryKey,
    number | undefined
  >({
    ...options,
    queryKey: keyFactory.getSearchEntitiesQueryKey(query),
    queryFn: async context => {
      return SynapseClient.searchEntities(
        { ...query, start: context.pageParam },
        accessToken,
      )
    },
    initialPageParam: undefined,
    getNextPageParam: prevPage => {
      if (prevPage.start + prevPage.hits.length === prevPage.found) {
        return null
      } else {
        return prevPage.start + prevPage.hits.length
      }
    },
  })
}
