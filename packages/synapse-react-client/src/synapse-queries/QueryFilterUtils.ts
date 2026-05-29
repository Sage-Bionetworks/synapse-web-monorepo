import { BUNDLE_MASK_ACTIONS_REQUIRED } from '@/utils/SynapseConstants'
import { matchQuery, QueryFilters } from '@tanstack/query-core'
import { QueryClient, QueryKey } from '@tanstack/react-query'
import { isEqual, isNumber, isObject } from 'lodash-es'
import { KeyFactory } from './KeyFactory'

/**
 * Invalidate all queries for the given entity. Table queries will be reset, i.e. the stale data will be removed from the cache.
 * @param queryClient
 * @param keyFactory
 * @param id the ID of the entity
 * @param excludeQueryKey do not invalidate queries exactly matching this query key (useful if you intend to call setQueryData)
 */
export function invalidateAllQueriesForEntity(
  queryClient: QueryClient,
  keyFactory: KeyFactory,
  id: string,
  excludeQueryKey?: QueryKey,
) {
  // Since we are resetting, no need to `await` - our UI will show loading screens
  void queryClient.resetQueries({
    // We invalidate all table query results because this entity could be shown in a view or used to compose JOINed tables
    // Reset all table query results to avoid showing stale data (SWC-6722)
    // Additionally, we do not want to wait for all tables to rebuild before we consider the invalidation 'complete'
    queryKey: keyFactory.getAllTableQueryResultsKey(),
  })

  return queryClient.invalidateQueries({
    queryKey: keyFactory.getEntityQueryKey(id),
    predicate: query => {
      if (excludeQueryKey && isEqual(query.queryKey, excludeQueryKey)) {
        // Don't invalidate query keys that are specifically excluded
        return false
      } else if (
        matchQuery({ queryKey: keyFactory.getAllTableQueryResultsKey() }, query)
      ) {
        // Don't invalidate any cached table query data; these queries were already reset above
        return false
      }
      return true
    },
  })
}

/**
 * Invalidate all queries that retrieve the actions required to gain download access
 * @param queryClient
 * @param keyFactory
 */
export function getAllActionsRequiredQueryFilters(
  keyFactory: KeyFactory,
): QueryFilters[] {
  return [
    // individual entity
    {
      queryKey: keyFactory.getAllEntityActionsRequiredQueryKey(),
    },
    // actions required for entities on the download list
    {
      queryKey: keyFactory.getDownloadListBaseQueryKey(),
    },
    {
      queryKey: keyFactory.getAllTableQueryResultsKey(),
      predicate: query => {
        // Match only queries that include actions required in the part mask
        const queryKey = query.queryKey
        for (const queryKeyItem of queryKey) {
          // Find the query bundle request, if it exists in the query key
          // If so, return true if the partMask includes the ACTIONS_REQUIRED part
          if (
            isObject(queryKeyItem) &&
            'tableQueryBundleRequest' in queryKeyItem &&
            isObject(queryKeyItem.tableQueryBundleRequest) &&
            'partMask' in queryKeyItem.tableQueryBundleRequest &&
            isNumber(queryKeyItem.tableQueryBundleRequest.partMask) &&
            Boolean(
              queryKeyItem.tableQueryBundleRequest.partMask &
                BUNDLE_MASK_ACTIONS_REQUIRED,
            )
          ) {
            return true
          }
        }
        return false
      },
    },
  ]
}
