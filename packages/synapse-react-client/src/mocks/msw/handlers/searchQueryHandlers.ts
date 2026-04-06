import {
  SEARCH_QUERY_ASYNC_GET,
  SEARCH_QUERY_ASYNC_START,
} from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import {
  SearchIndexQuery,
  SearchQueryResults,
} from '@sage-bionetworks/synapse-client'
import { cloneDeep, omit } from 'lodash-es'
import { generateAsyncJobHandlers } from './asyncJobHandlers'
import { mockSearchQueryResultBundle } from '@/mocks/mockSearchQueryData'
import BasicMockedCrudService from '../util/BasicMockedCrudService'

/**
 * A key derived from a SearchIndexQuery, excluding pagination fields.
 * Used to match registered bindings against incoming requests.
 */
type SearchIndexQueryKey = Omit<SearchIndexQuery, 'limit' | 'offset'>

type SearchQueryBinding = {
  id: string
  queryKey: SearchIndexQueryKey
  result: QueryResultBundle
}

const mockSearchQueryService = new BasicMockedCrudService<
  SearchQueryBinding,
  'id'
>({
  idField: 'id',
  autoGenerateId: true,
})

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
  request: SearchIndexQuery,
  baseBundle: QueryResultBundle,
): QueryResultBundle {
  return applyLimitOffset(baseBundle, request.limit, request.offset)
}

/**
 * Register a specific query binding for the mock search service.
 * If a binding for the same query key (ignoring limit/offset) already exists, it is updated.
 */
export function registerSearchQueryResult(
  queryKey: SearchIndexQueryKey,
  result: QueryResultBundle,
) {
  const existing = mockSearchQueryService.getOneByField('queryKey', queryKey)
  if (existing) {
    mockSearchQueryService.update(existing.id, { ...existing, result })
  } else {
    mockSearchQueryService.create({ queryKey, result })
  }
}

function getSearchQueryResult(request: SearchIndexQuery): QueryResultBundle {
  const queryKey = omit(cloneDeep(request), [
    'limit',
    'offset',
  ]) as SearchIndexQueryKey

  const binding = mockSearchQueryService.getOneByField('queryKey', queryKey)
  const baseBundle = binding?.result ?? mockSearchQueryResultBundle

  return processSearchRequest(request, baseBundle)
}

/**
 * Adapts the QueryResultBundle mock result into the SearchQueryResults shape
 * that the real SearchQueryServicesApi returns.
 */
function toSearchQueryResults(bundle: QueryResultBundle): SearchQueryResults {
  const hits = (bundle.queryResult?.queryResults.rows ?? []).map(row => ({
    rowId: row.rowId,
    rowVersion: row.versionNumber,
    fields: (bundle.queryResult?.queryResults.headers ?? []).map(
      (header, i) => ({ name: header.name, value: row.values[i] ?? undefined }),
    ),
  }))

  return {
    concreteType:
      'org.sagebionetworks.repo.model.search.SearchQueryResults' as const,
    totalHits: bundle.queryCount,
    hits,
    facets: bundle.facets as SearchQueryResults['facets'],
    offset: bundle.queryResult?.queryResults.rows?.length ? 0 : undefined,
  }
}

/**
 * Returns MSW handlers for the SearchQueryServicesApi endpoints.
 * Uses the default mock data from mockSearchQueryData.ts unless overridden via registerSearchQueryResult().
 */
export function getHandlersForSearchQuery(
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
) {
  return generateAsyncJobHandlers<SearchIndexQuery, SearchQueryResults>(
    SEARCH_QUERY_ASYNC_START,
    tokenParam => SEARCH_QUERY_ASYNC_GET(tokenParam),
    request => toSearchQueryResults(getSearchQueryResult(request)),
    backendOrigin,
  )
}
