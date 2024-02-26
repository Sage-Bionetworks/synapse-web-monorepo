import { QueryClient } from '@tanstack/react-query'
import { KeyFactory } from './KeyFactory'

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
