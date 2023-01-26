import { QueryClient } from 'react-query'
import {
  EntityBundleRequest,
  EntityChildrenRequest,
  QueryBundleRequest,
} from '../../../synapseTypes'

/**
 * Co-location of react-query keys for queries related to Synapse entity data. Two objectives of this strategy are
 * - minimize the risk of inappropriate cache key collisions
 * - simplify clearing the approprate query caches when the entity data is updated
 *
 * For more information, see https://tkdodo.eu/blog/leveraging-the-query-function-context
 */
export const entityQueryKeys = {
  /** Query key for all entities */
  all: [{ objectType: 'entity' }],
  // Data for an entity
  entity: (id: string) => [{ ...entityQueryKeys.all[0], id: id }],
  // Data for a particular version of an entity
  version: (id: string, versionNumber?: string | number) => [
    {
      ...entityQueryKeys.entity(id)[0],
      versionNumber: versionNumber,
    },
  ],

  // List of Entity Versions
  versions: (id: string) => [
    {
      ...entityQueryKeys.entity(id)[0],
      scope: 'versions',
    },
  ],
  versionsQuery: (id: string, limit: number, offset: number) => [
    {
      ...entityQueryKeys.versions(id)[0],
      versionQuery: {
        limit: limit,
        offset: offset,
      },
    },
  ],

  // JSON Representation of an entity
  json: (id: string) => [{ ...entityQueryKeys.entity(id)[0], scope: 'json' }],

  // Entity path
  path: (id: string) => [{ ...entityQueryKeys.entity(id)[0], scope: 'path' }],

  // Entity bundle
  bundle: (
    id: string,
    versionNumber: string | number | undefined,
    bundleRequest: EntityBundleRequest,
  ) => [
    {
      ...entityQueryKeys.version(id, versionNumber)[0],
      scope: 'entityBundle',
      entityBundleRequest: bundleRequest,
    },
  ],

  children: (request: EntityChildrenRequest, infinite: boolean) => [
    {
      ...entityQueryKeys.entity(request.parentId ?? 'root')[0],
      scope: 'children',
      isInfinite: infinite,
      entityChildrenRequest: request,
    },
  ],

  tableQueryResult: (
    queryBundleRequest: QueryBundleRequest,
    infinite: boolean,
  ) => [
    {
      ...entityQueryKeys.entity(queryBundleRequest.entityId)[0],
      scope: 'tableQueryResult',
      isInfinite: infinite,
      tableQueryBundleRequest: queryBundleRequest,
    },
  ],

  tableQueryResultWithAsyncStatus: (
    queryBundleRequest: QueryBundleRequest,
    infinite: boolean,
  ) => [
    {
      ...entityQueryKeys.entity(queryBundleRequest.entityId)[0],
      scope: 'tableQueryResultWithAsyncStatus',
      isInfinite: infinite,
      tableQueryBundleRequest: queryBundleRequest,
    },
  ],

  fullTableQueryResult: (queryBundleRequest: QueryBundleRequest) => [
    {
      ...entityQueryKeys.entity(queryBundleRequest.entityId)[0],
      scope: 'fullTableQueryResult',
      tableQueryBundleRequest: queryBundleRequest,
    },
  ],

  boundJSONSchema: (id: string) => [
    {
      ...entityQueryKeys.entity(id)[0],
      scope: 'boundJSONSchema',
    },
  ],

  schemaValidationResults: (id: string) => [
    {
      ...entityQueryKeys.entity(id)[0],
      scope: 'schemaValidationResults',
    },
  ],
}

export function invalidateAllQueriesForEntity(
  queryClient: QueryClient,
  id: string,
) {
  // TODO: Figure out how to handle cases where the change can affect other entities.
  // Some examples:
  //  - deleting an entity should invalidate the parent's children
  //  - moving an entity should invalidate the old and new parent's children
  return queryClient.invalidateQueries(entityQueryKeys.entity(id))
}
