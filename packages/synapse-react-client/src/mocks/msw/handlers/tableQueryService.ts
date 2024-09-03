import {
  Query,
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { cloneDeep, omit } from 'lodash-es'
import {
  BUNDLE_MASK_LAST_UPDATED_ON,
  BUNDLE_MASK_QUERY_COLUMN_MODELS,
  BUNDLE_MASK_QUERY_COUNT,
  BUNDLE_MASK_QUERY_FACETS,
  BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE,
  BUNDLE_MASK_QUERY_RESULTS,
  BUNDLE_MASK_QUERY_SELECT_COLUMNS,
  BUNDLE_MASK_SUM_FILES_SIZE_BYTES,
} from '../../../utils/SynapseConstants'
import BasicMockedCrudService from '../util/BasicMockedCrudService'

const BIT_TO_FIELD_MAP: Record<number, keyof QueryResultBundle> = {
  [BUNDLE_MASK_QUERY_RESULTS]: 'queryResult',
  [BUNDLE_MASK_QUERY_COUNT]: 'queryCount',
  [BUNDLE_MASK_QUERY_SELECT_COLUMNS]: 'selectColumns',
  [BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE]: 'maxRowsPerPage',
  [BUNDLE_MASK_QUERY_COLUMN_MODELS]: 'columnModels',
  [BUNDLE_MASK_QUERY_FACETS]: 'facets',
  [BUNDLE_MASK_SUM_FILES_SIZE_BYTES]: 'sumFileSizes',
  [BUNDLE_MASK_LAST_UPDATED_ON]: 'lastUpdatedOn',
}

type QueryAndQueryResultBundle = {
  id: string
  query: Omit<Query, 'limit' | 'offset'>
  result: QueryResultBundle
}
const mockTableQueryService = new BasicMockedCrudService<
  QueryAndQueryResultBundle,
  'id'
>({
  idField: 'id',
  autoGenerateId: true,
})

function removeBundleFieldsUsingMask(
  queryResultBundle: QueryResultBundle,
  partMask: number,
): QueryResultBundle {
  const result = cloneDeep(queryResultBundle)
  Object.entries(BIT_TO_FIELD_MAP).forEach(([bit, field]) => {
    if ((partMask & parseInt(bit)) === 0) {
      delete result[field]
    }
  })
  return result
}

function applyLimitAndOffset(
  queryResultBundle: QueryResultBundle,
  limit: number = 25,
  offset: number = 0,
): QueryResultBundle {
  const result = cloneDeep(queryResultBundle)
  if (result.queryResult?.queryResults.rows) {
    result.queryResult.queryResults.rows =
      result.queryResult.queryResults.rows.slice(offset, offset + limit)
  }
  return result
}

function updateResponseUsingRequest(
  request: QueryBundleRequest,
  queryResultBundle: QueryResultBundle,
): QueryResultBundle {
  let result = queryResultBundle
  result = removeBundleFieldsUsingMask(result, request.partMask)
  result = applyLimitAndOffset(
    result,
    request.query.limit,
    request.query.offset,
  )
  return result
}

function removeExcludedFieldsFromQuery(
  query: Query,
): QueryAndQueryResultBundle['query'] {
  return omit(cloneDeep(query), ['limit', 'offset'])
}

/**
 * Create or update a registered query binding
 */
function registerQueryBinding(binding: Omit<QueryAndQueryResultBundle, 'id'>) {
  const existingQuery = mockTableQueryService.getOneByField(
    'query',
    binding.query,
  )

  if (existingQuery) {
    mockTableQueryService.update(existingQuery.id, {
      ...binding,
      id: existingQuery.id,
    })
  } else {
    mockTableQueryService.create(binding)
  }
}

/**
 * Fetch a registered QueryResultBundle that matches the given query.
 * The results may be modified based on the limit and offset fields of the query, and the partMask of the request.
 * @param queryBundleRequest
 */
export function getTableQueryResult(queryBundleRequest: QueryBundleRequest) {
  const queryWithExcludedFields = removeExcludedFieldsFromQuery(
    queryBundleRequest.query,
  )
  const binding = mockTableQueryService.getOneByField(
    'query',
    queryWithExcludedFields,
  )

  if (binding == null) {
    throw new Error(
      `mockTableQueryService does not have a query result for the given query:\n${JSON.stringify(
        queryBundleRequest,
        null,
        2,
      )}`,
    )
  }
  return updateResponseUsingRequest(queryBundleRequest, binding.result)
}

/**
 * Register a query and its result with the mock service. When this specific query is sent in a QueryBundleRequest, the given response will be returned.
 * @param query - the query used to match to the response. Note: the limit and offset fields of a query are ignored when matching to a response. Limit and offset functionality are implemented by the mock service.
 * @param response - the QueryResultBundle to return when the given query is requested. The results may be modified based on the limit and offset fields of the query.
 */
export function registerTableQueryResult(
  query: Query,
  response: QueryResultBundle,
) {
  registerQueryBinding({
    query: removeExcludedFieldsFromQuery(query),
    result: response,
  })
}
