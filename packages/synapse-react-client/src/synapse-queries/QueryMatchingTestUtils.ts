import { QueryKey } from '@tanstack/react-query'
import {
  matchQuery,
  Query,
  QueryCache,
  QueryFilters,
} from '@tanstack/query-core'

/**
 * Returns true iff a query with the given queryKey is matched by the provided `filters`
 * @param queryKey
 * @param filters
 */
export function doesQueryFilterMatch(
  queryKey: QueryKey,
  filters: QueryFilters,
): boolean {
  const query = new Query({
    cache: new QueryCache(),
    queryKey: queryKey,
    queryHash: '',
  })
  return matchQuery(filters, query)
}

function doesQueryKeyMatch(
  queryKey: QueryKey,
  matcherQueryKey: QueryKey,
): boolean {
  return doesQueryFilterMatch(queryKey, { queryKey: matcherQueryKey })
}

export function expectQueryKeyToMatch(queryKey: QueryKey, matcher: QueryKey) {
  expect(doesQueryKeyMatch(queryKey, matcher)).toBe(true)
}

export function expectQueryKeyNotToMatch(
  queryKey: QueryKey,
  matcher: QueryKey,
) {
  expect(doesQueryKeyMatch(queryKey, matcher)).toBe(false)
}
