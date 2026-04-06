import {
  BUNDLE_MASK_QUERY_RESULTS,
  BUNDLE_MASK_QUERY_COUNT,
  BUNDLE_MASK_QUERY_SELECT_COLUMNS,
  BUNDLE_MASK_QUERY_MAX_ROWS_PER_PAGE,
  BUNDLE_MASK_QUERY_COLUMN_MODELS,
  BUNDLE_MASK_QUERY_FACETS,
  BUNDLE_MASK_SUM_FILES_SIZE_BYTES,
  BUNDLE_MASK_LAST_UPDATED_ON,
} from '@/utils/SynapseConstants'
import {
  SEARCH_QUERY_ASYNC_GET,
  SEARCH_QUERY_ASYNC_START,
} from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  QueryResultBundle,
  SearchQueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { cloneDeep, omit } from 'lodash-es'
import { generateAsyncJobHandlers } from './asyncJobHandlers'
import { mockSearchQueryResultBundle } from '@/mocks/mockSearchQueryData'
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

type SearchQueryBinding = {
  id: string
  query: Omit<SearchQueryBundleRequest['query'], 'limit' | 'offset'>
  result: QueryResultBundle
}

const mockSearchQueryService = new BasicMockedCrudService<
  SearchQueryBinding,
  'id'
>({
  idField: 'id',
  autoGenerateId: true,
})

function applyPartMask(
  bundle: QueryResultBundle,
  partMask: number,
): QueryResultBundle {
  const result = cloneDeep(bundle)
  Object.entries(BIT_TO_FIELD_MAP).forEach(([bit, field]) => {
    if ((partMask & parseInt(bit)) === 0) {
      delete result[field]
    }
  })
  return result
}

function applyLimitOffset(
  bundle: QueryResultBundle,
  limit = 25,
  offset = 0,
): QueryResultBundle {
  const result = cloneDeep(bundle)
  if (result.queryResult?.queryResults.rows) {
    result.queryResult.queryResults.rows =
      result.queryResult.queryResults.rows.slice(offset, offset + limit)
  }
  return result
}

function processSearchRequest(
  request: SearchQueryBundleRequest,
  baseBundle: QueryResultBundle,
): QueryResultBundle {
  let result = baseBundle
  result = applyPartMask(result, request.partMask ?? 0xffffffff)
  result = applyLimitOffset(result, request.query.limit, request.query.offset)
  return result
}

/**
 * Register a specific query binding for the mock search service.
 * If a binding for the same query (ignoring limit/offset) already exists, it is updated.
 */
export function registerSearchQueryResult(
  query: Omit<SearchQueryBundleRequest['query'], 'limit' | 'offset'>,
  result: QueryResultBundle,
) {
  const existing = mockSearchQueryService.getOneByField('query', query)
  if (existing) {
    mockSearchQueryService.update(existing.id, { ...existing, result })
  } else {
    mockSearchQueryService.create({ query, result })
  }
}

function getSearchQueryResult(
  request: SearchQueryBundleRequest,
): QueryResultBundle {
  const queryKey = omit(cloneDeep(request.query), ['limit', 'offset'])

  // Try to find a registered binding
  const binding = mockSearchQueryService.getOneByField('query', queryKey)
  const baseBundle = binding?.result ?? mockSearchQueryResultBundle

  return processSearchRequest(request, baseBundle)
}

/**
 * Returns MSW handlers for the SearchQueryServicesApi mock endpoints.
 * Uses the default mock data from mockSearchQueryData.ts unless overridden via registerSearchQueryResult().
 */
export function getHandlersForSearchQuery(
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
) {
  return generateAsyncJobHandlers<SearchQueryBundleRequest, QueryResultBundle>(
    SEARCH_QUERY_ASYNC_START,
    tokenParam => SEARCH_QUERY_ASYNC_GET(tokenParam),
    request => getSearchQueryResult(request),
    backendOrigin,
  )
}
