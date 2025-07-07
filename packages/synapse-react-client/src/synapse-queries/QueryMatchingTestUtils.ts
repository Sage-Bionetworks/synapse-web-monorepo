import {
  matchQuery,
  Query,
  QueryClient,
  QueryKey,
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
    client: new QueryClient(),
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
  const isMatch = doesQueryKeyMatch(queryKey, matcher)
  if (!isMatch) {
    console.error(`Expected query key: ${JSON.stringify(queryKey)}`)
    console.error(`Received query key: ${JSON.stringify(matcher)}`)
  }
  expect(isMatch).toBe(true)
}

export function expectQueryKeyNotToMatch(
  queryKey: QueryKey,
  matcher: QueryKey,
) {
  const isMatch = doesQueryKeyMatch(queryKey, matcher)
  if (isMatch) {
    console.error(
      `Expected query keys to differ, but they matched: ${JSON.stringify(
        queryKey,
      )}`,
    )
  }
  expect(isMatch).toBe(false)
}
