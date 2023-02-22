import {
  QueryFunctionContext,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useQuery,
  UseQueryOptions,
} from 'react-query'
import { SynapseClient } from '../../..'
import { SynapseClientError } from '../../../SynapseClientError'
import { useSynapseContext } from '../../../SynapseContext'
import { SearchQuery, SearchResults } from '../../../synapseTypes/Search'

export function useSearch(
  query: SearchQuery,
  options?: UseQueryOptions<SearchResults, SynapseClientError, SearchResults>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<SearchResults, SynapseClientError>(
    keyFactory.getSearchEntitiesQueryKey(query),
    () => SynapseClient.searchEntities(query, accessToken),
    options,
  )
}

export function useSearchInfinite(
  query: Omit<SearchQuery, 'start'>,
  options?: UseInfiniteQueryOptions<
    SearchResults,
    SynapseClientError,
    SearchResults
  >,
) {
  const { accessToken, keyFactory } = useSynapseContext()

  return useInfiniteQuery<SearchResults, SynapseClientError>(
    keyFactory.getSearchEntitiesQueryKey(query),
    async (context: QueryFunctionContext) => {
      return SynapseClient.searchEntities(
        { ...query, start: context.pageParam },
        accessToken,
      )
    },
    {
      ...options,
      getNextPageParam: prevPage => {
        if (prevPage.start + prevPage.hits.length === prevPage.found) {
          return null
        } else {
          return prevPage.start + prevPage.hits.length
        }
      },
    },
  )
}
