import { QueryClient } from '@tanstack/react-query'
import { KeyFactory } from './KeyFactory'
import { BUNDLE_MASK_ACTIONS_REQUIRED } from '../utils/SynapseConstants'
import { isNumber, isObject } from 'lodash-es'
import { QueryFilters } from '@tanstack/query-core'

/**
 * Invalidate all queries for the given entity.
 * @param queryClient
 * @param keyFactory
 * @param id
 */
export function invalidateAllQueriesForEntity(
  queryClient: QueryClient,
  keyFactory: KeyFactory,
  id: string,
) {
  // TODO: Figure out how to handle cases where the change can affect other entities.
  // Some examples:
  //  - deleting an entity should invalidate the parent's children
  //  - moving an entity should invalidate the old and new parent's children
  return queryClient.invalidateQueries({
    queryKey: keyFactory.getEntityQueryKey(id),
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
