import * as SynapseClient from '@/synapse-client/SynapseClient'
import { tableQueryUseQueryDefaults } from '@/synapse-queries'
import { useGetEntityBundle } from '@/synapse-queries/entity/useEntityBundle'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import {
  AsynchronousJobStatus,
  ColumnModel,
  FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
  FacetColumnRangeRequest,
  FacetColumnResultRange,
  FacetColumnResultValues,
  FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE,
  FacetColumnValuesRequest,
  QueryBundleRequest,
  QueryResultBundle,
  RowSet,
  SortItem,
  TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE_VALUE,
  TextMatchesQueryFilter,
} from '@sage-bionetworks/synapse-types'
import type {
  Aggregation,
  DslQuery,
  SearchIndexQuery,
  SearchQueryResults,
  SearchSearchQuery,
  SynapseClientError,
  TermsAggregation,
} from '@sage-bionetworks/synapse-client'
import {
  InfiniteData,
  QueryKey,
  UseInfiniteQueryOptions,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query'
import { omit } from 'lodash-es'
import dayjs from 'dayjs'
import { useCallback, useMemo } from 'react'
import { KeyFactory } from '@/synapse-queries/KeyFactory'

// ─── Local OpenSearch DSL types ─────────────────────────────────────────────
// Narrow typings for the OpenSearch structures we build (query DSL, sort) and
// parse (aggregation results). These are intentionally minimal – only the fields
// we actually produce/consume are declared. Aggregation types use the generated
// Aggregation/TermsAggregation types from @sage-bionetworks/synapse-client.

export type SearchQueryStrategy =
  | 'MULTI_MATCH'
  | 'MULTI_MATCH_BEST_FIELDS'
  | 'MULTI_MATCH_CROSS_FIELDS'
  | 'SIMPLE_QUERY_STRING'
  | 'PHRASE_PREFIX'
  | 'BOOSTED_FUZZY'

export type SearchQueryConfig = {
  /**
   * Which OpenSearch query clause to emit when the user has typed a search term.
   * Defaults to 'MULTI_MATCH' (all fields, fuzziness AUTO — today's behavior).
   */
  queryStrategy?: SearchQueryStrategy
  /**
   * Per-field relevance multipliers. Serialized to the OpenSearch `fields` array
   * as e.g. `["resourceName^5", "synonyms^4"]`. When omitted, all fields are
   * queried at equal weight.
   */
  fieldBoosts?: Record<string, number>
  /**
   * Fuzziness override. Overrides the per-strategy default. Leave undefined to
   * use each strategy's natural default (AUTO for MULTI_MATCH/BOOSTED_FUZZY,
   * none for the rest).
   */
  fuzziness?: string
}

type FilterClause =
  | { terms: Record<string, string[]> }
  | { range: Record<string, { gte?: string; lte?: string }> }

type MultiMatchClause = {
  multi_match: {
    query: string
    fuzziness?: string
    type?: 'best_fields' | 'cross_fields' | 'phrase_prefix'
    fields?: string[]
  }
}

type SimpleQueryStringClause = {
  simple_query_string: { query: string; fields?: string[] }
}

type BoolQuery = {
  bool: {
    must?: MultiMatchClause[] | FilterClause[]
    filter?: FilterClause[]
  }
}

// post_filter / per-facet aggregation filter: a single FilterClause, match_all, or AND of many.
type SelectionFilter =
  | FilterClause
  | { match_all: Record<never, never> }
  | { bool: { must: FilterClause[] } }

type SearchQueryDSL =
  | MultiMatchClause
  | SimpleQueryStringClause
  | { match_all: Record<never, never> }
  | BoolQuery

function resolveFields(
  fieldBoosts: Record<string, number> | undefined,
): string[] | undefined {
  if (!fieldBoosts) return undefined
  return Object.entries(fieldBoosts).map(([field, boost]) =>
    boost === 1 ? field : `${field}^${boost}`,
  )
}

function buildQueryClause(
  queryText: string,
  config: SearchQueryConfig = {},
): MultiMatchClause | SimpleQueryStringClause {
  const { queryStrategy = 'MULTI_MATCH', fieldBoosts, fuzziness } = config
  const fields = resolveFields(fieldBoosts)

  switch (queryStrategy) {
    case 'SIMPLE_QUERY_STRING':
      return {
        simple_query_string: {
          query: queryText,
          ...(fields ? { fields } : {}),
        },
      }
    case 'MULTI_MATCH_BEST_FIELDS':
      return {
        multi_match: {
          query: queryText,
          type: 'best_fields',
          ...(fields ? { fields } : {}),
          ...(fuzziness ? { fuzziness } : {}),
        },
      }
    case 'MULTI_MATCH_CROSS_FIELDS':
      return {
        multi_match: {
          query: queryText,
          type: 'cross_fields',
          ...(fields ? { fields } : {}),
          ...(fuzziness ? { fuzziness } : {}),
        },
      }
    case 'PHRASE_PREFIX':
      return {
        multi_match: {
          query: queryText,
          type: 'phrase_prefix',
          ...(fields ? { fields } : {}),
        },
      }
    case 'BOOSTED_FUZZY':
      return {
        multi_match: {
          query: queryText,
          ...(fields ? { fields } : {}),
          fuzziness: fuzziness ?? 'AUTO',
        },
      }
    default: // 'MULTI_MATCH'
      return {
        multi_match: {
          query: queryText,
          fuzziness: fuzziness ?? 'AUTO',
        },
      }
  }
}

type OpenSearchBucket = { key: unknown; doc_count: number }
type OpenSearchTermsAgg = { buckets?: OpenSearchBucket[] }

/**
 * TanStack Query options for the SearchQueryServicesApi, mirroring TableQueryUseQueryOptions
 * but parameterised over SearchIndexQuery rather than QueryBundleRequest. This eliminates
 * `as unknown as` casts inside the implementation. A single cast to TableQueryUseQueryOptions
 * is still required at the boundary where SearchQueryWrapper assigns these into QueryContextType.
 */
export type SearchTableQueryUseQueryOptions = {
  rowDataQueryOptions: UseSuspenseQueryOptions<
    AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>,
    SynapseClientError,
    RowSet | undefined
  >
  rowDataInfiniteQueryOptions: UseInfiniteQueryOptions<
    AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>,
    SynapseClientError,
    InfiniteData<AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>>,
    QueryKey,
    string | number | undefined
  >
  queryMetadataQueryOptions: UseSuspenseQueryOptions<
    AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>,
    SynapseClientError,
    Omit<QueryResultBundle, 'queryResult'>
  >
}

export function getNextPageParamForSearchQueryResults(
  lastPage: AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>,
  allPages: AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>[],
): number | string | undefined {
  const rowsInLastPage =
    lastPage.responseBody?.queryResult?.queryResults.rows?.length ?? 0
  const requestedPageSize = lastPage.requestBody?.searchQuery?.size
  const totalRows = lastPage.responseBody?.queryCount
  const fetchedRows = allPages.reduce(
    (acc, page) =>
      acc + (page.responseBody?.queryResult?.queryResults.rows?.length ?? 0),
    0,
  )

  if (rowsInLastPage === 0) {
    return undefined
  }

  // A short page means we've reached the end, even when total hits is missing or stale.
  if (requestedPageSize != null && rowsInLastPage < requestedPageSize) {
    return undefined
  }

  if (totalRows != null && fetchedRows >= totalRows) {
    return undefined
  }

  return fetchedRows
}

/**
 * Converts a QueryBundleRequest (used internally for state management) into a SearchIndexQuery
 * that can be sent to the SearchQueryServicesApi.
 *
 * Mapping:
 *  - columnModels (facetType 'enumeration') → aggregations (OpenSearch terms or filter-wrapped aggregations)
 *  - query.selectedFacets (enumeration) → post_filter (terms clauses) + per-facet filter aggregations
 *  - query.selectedFacets (range)       → post_filter (range clauses) + included in all per-facet aggregation filters
 *  - query.additionalFilters (TextMatchesQueryFilter) → multi_match query clause
 *  - query.sort → sort (SortItem { column, direction } → [{ column: 'asc'|'desc' }])
 *  - query.limit → size
 *  - query.offset → from
 *  - partMask → dropped (SearchIndexQuery has no bitmask concept)
 *
 * Per-facet filter bucketing (OpenSearch "faceted search" pattern):
 *   When any facet selections are active, each enum aggregation is wrapped in an OpenSearch
 *   filter aggregation whose filter is the AND of all OTHER selections (its own selection is
 *   dropped so the column stays wide). post_filter = AND of ALL selections, narrowing hits/total
 *   only. This lets each selected facet column show the full set of option counts while all
 *   other columns narrow to the selection — in a single request.
 */
export function toSearchIndexQuery(
  queryBundleRequest: QueryBundleRequest,
  searchIndexId: string,
  columnModels?: ColumnModel[],
  searchQueryConfig?: SearchQueryConfig,
): SearchIndexQuery {
  // Build aggregations from ColumnModels that have facetType 'enumeration'.
  // Range columns are excluded: we synthesize FacetColumnResultRange entries client-side.
  // Aggregations are built lazily after filterClauses is populated so the per-facet
  // filter wrapping logic has access to all active selections.

  // Build filter clauses from enumeration selectedFacets
  const filterClauses: FilterClause[] = []

  queryBundleRequest.query.selectedFacets
    ?.filter(
      (f): f is FacetColumnValuesRequest =>
        f.concreteType === FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE,
    )
    .forEach(f => {
      filterClauses.push({ terms: { [f.columnName]: f.facetValues ?? [] } })
    })

  // Build range filter clauses from range selectedFacets.
  // DATE columns: the Range UI emits formatted dates ("YYYY-MM-DD") but OpenSearch
  // expects unix millisecond timestamps. Convert here.
  queryBundleRequest.query.selectedFacets
    ?.filter(
      (f): f is FacetColumnRangeRequest =>
        f.concreteType === FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
    )
    .forEach(f => {
      const columnType = columnModels?.find(
        cm => cm.name === f.columnName,
      )?.columnType
      const toApiValue = (v: string | undefined): string | undefined => {
        if (!v || columnType !== 'DATE') return v
        // Convert "YYYY-MM-DD" → unix ms; leave already-numeric values untouched
        if (/^\d{4}-\d{2}-\d{2}$/.test(v)) {
          return String(dayjs(v).valueOf())
        }
        return v
      }
      const rangeClause: { gte?: string; lte?: string } = {}
      const min = toApiValue(f.min)
      const max = toApiValue(f.max)
      if (min !== undefined) rangeClause.gte = min
      if (max !== undefined) rangeClause.lte = max
      filterClauses.push({ range: { [f.columnName]: rangeClause } })
    })

  // Extract queryText by concatenating all TextMatchesQueryFilter searchExpression values
  const textMatchesExpressions = queryBundleRequest.query.additionalFilters
    ?.filter(
      (f): f is TextMatchesQueryFilter =>
        f.concreteType === TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE_VALUE,
    )
    .map(f => f.searchExpression)
    .filter((expr): expr is string => expr != null && expr.length > 0)
  const queryText =
    textMatchesExpressions && textMatchesExpressions.length > 0
      ? textMatchesExpressions.join(' ')
      : undefined

  // Build the OpenSearch query DSL (text search only; facet selections go to post_filter).
  let query: SearchQueryDSL
  if (queryText) {
    query = buildQueryClause(queryText, searchQueryConfig)
  } else {
    query = { match_all: {} }
  }

  // post_filter narrows hits/total by ALL active facet selections without affecting the
  // aggregation counts. Each enum aggregation independently applies a per-facet filter
  // (see aggregationEntries below) so each column stays wide for its own selection while
  // all other columns narrow.
  let postFilter: SelectionFilter | undefined
  if (filterClauses.length === 1) {
    postFilter = filterClauses[0]
  } else if (filterClauses.length > 1) {
    postFilter = { bool: { must: filterClauses } }
  }

  // Build aggregations. When selections are active, wrap each term's aggregation in an
  // OpenSearch filter aggregation whose filter is ALL selections EXCEPT the one for this
  // column. That keeps the column's own options wide while the others narrow.
  const aggregationEntries = columnModels
    ?.filter(cm => cm.facetType === 'enumeration')
    .map(cm => {
      const termsAgg: TermsAggregation = { field: cm.name, size: 100 }
      if (cm.facetSortConfig?.property != null) {
        // Map FacetColumnSortProperty ('VALUE'|'FREQUENCY') → OpenSearch order key ('_key'|'_count')
        const orderKey =
          cm.facetSortConfig.property === 'VALUE' ? '_key' : '_count'
        const orderDir =
          cm.facetSortConfig.direction === 'DESC' ? 'desc' : 'asc'
        termsAgg.order = { [orderKey]: orderDir }
      }

      if (filterClauses.length === 0) {
        // Baseline (no selections): plain terms aggregation, no wrapping needed.
        return [cm.name, { terms: termsAgg }] as [string, Aggregation]
      }

      // Per-facet filter bucketing: exclude this column's own selection from the filter
      // so it stays wide, while all other active selections narrow the counts.
      const otherClauses = filterClauses.filter(clause => {
        if ('terms' in clause) return !(cm.name in clause.terms)
        if ('range' in clause) return !(cm.name in clause.range)
        return true
      })
      const aggFilter: SelectionFilter =
        otherClauses.length === 0
          ? { match_all: {} }
          : otherClauses.length === 1
            ? otherClauses[0]
            : { bool: { must: otherClauses } }
      return [
        cm.name,
        {
          filter: aggFilter,
          aggregations: { [cm.name]: { terms: termsAgg } },
        } as unknown as Aggregation,
      ] as [string, Aggregation]
    })
  const aggregations =
    aggregationEntries && aggregationEntries.length > 0
      ? Object.fromEntries(aggregationEntries)
      : undefined

  // Map SortItem[] → OpenSearch sort shape: [{ columnName: 'asc'|'desc' }, ...]
  // filtering out entries with no direction (which mean "remove sort").
  const sortEntries = queryBundleRequest.query.sort
    ?.filter(
      (s): s is SortItem & { direction: 'ASC' | 'DESC' } =>
        s.direction === 'ASC' || s.direction === 'DESC',
    )
    .map(s => ({ [s.column]: s.direction.toLowerCase() }))

  const searchQuery: SearchSearchQuery = {
    query: query as unknown as DslQuery,
    post_filter: postFilter ? (postFilter as unknown as DslQuery) : undefined,
    aggregations,
    sort: sortEntries?.length ? sortEntries : undefined,
    size: queryBundleRequest.query.limit,
    from: queryBundleRequest.query.offset,
  }

  return {
    concreteType:
      'org.sagebionetworks.repo.model.search.table.SearchIndexQuery' as const,
    searchIndexId,
    searchQuery,
  }
}

/**
 * Converts a SearchQueryResults (the actual API response) into a QueryResultBundle
 * so that existing subcomponents (FacetFilterControls, RowSetView, etc.) work unchanged.
 *
 * Mapping:
 *  - totalHits → queryCount
 *  - hits → queryResult.queryResults (rows derived from hit.rowId/rowVersion/fields)
 *  - aggregationResults → facets (parsed from opaque OpenSearch aggregation JSON)
 */
export function searchQueryResultsToQueryResultBundle(
  results: SearchQueryResults | undefined,
  query: SearchIndexQuery,
  columnModels?: ColumnModel[],
  selectedFacets?: (FacetColumnValuesRequest | FacetColumnRangeRequest)[],
): QueryResultBundle {
  if (!results) {
    return {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    }
  }

  // Derive column names from the server-returned selectColumns. Both the row data
  // query and the metadata query request SELECT_COLUMNS, so this is always present.
  const fieldNames: string[] =
    results.selectColumns
      ?.map(col => col.name)
      .filter((n): n is string => !!n) ?? []

  const headers = fieldNames.map(name => ({
    name,
    columnType:
      columnModels?.find(cm => cm.name === name)?.columnType ??
      ('STRING' as const),
  }))

  const rows = (results.hits ?? []).map(hit => ({
    rowId: hit.rowId,
    versionNumber: hit.rowVersion,
    values: fieldNames.map(name => {
      return hit.fields?.find(f => f.name === name)?.value ?? null
    }),
  }))

  const queryResult =
    headers.length > 0 || rows.length > 0
      ? {
          concreteType:
            'org.sagebionetworks.repo.model.table.QueryResult' as const,
          queryResults: {
            concreteType:
              'org.sagebionetworks.repo.model.table.RowSet' as const,
            tableId: query.searchIndexId ?? '',
            etag: '',
            headers,
            rows,
          },
        }
      : undefined

  // Parse aggregationResults (opaque OpenSearch aggregation JSON) into FacetColumnResultValues.
  // Each key in aggregationResults corresponds to a column name whose aggregation was requested
  // in toSearchIndexQuery. Two response shapes are possible:
  //
  //   Plain terms (no active selections):
  //     { buckets: [{ key: unknown, doc_count: number }] }
  //
  //   Filter-wrapped terms (per-facet filter bucketing, selections active):
  //     { doc_count: number, "<type>#columnName": { buckets: [...] } }
  //
  // OpenSearch prefixes the aggregation type to the name in the response. The prefix depends
  // on the field type: "sterms" for string fields, "lterms" for long/integer fields, etc.
  // We detect the shape by looking for any "type#columnName" key with a buckets property.
  const aggregationResults = results.aggregationResults as unknown as Record<
    string,
    OpenSearchTermsAgg | Record<string, OpenSearchTermsAgg>
  > | null
  const rawFacets: FacetColumnResultValues[] = Object.entries(
    aggregationResults ?? {},
  ).map(([columnName, agg]) => {
    // Resolve the actual terms result: OpenSearch prefixes the agg type when it is
    // nested inside a filter aggregation, producing a "sterms#columnName" key.
    // Fall back to a direct [columnName] match (defensive), then to the agg itself
    // for the plain (no-selection) terms shape.
    const aggRecord = agg as Record<string, OpenSearchTermsAgg>
    // OpenSearch prefixes the aggregation type to the name when nested inside a filter
    // aggregation. For string fields this is "sterms#columnName"; for long/integer fields
    // it is "lterms#columnName". Rather than hardcoding known prefixes, look for any key
    // ending in "#columnName" so that future numeric types (e.g. double) also work.
    const nestedKey = Object.keys(aggRecord).find(key =>
      key.endsWith(`#${columnName}`),
    )
    const nested =
      (nestedKey !== undefined ? aggRecord[nestedKey] : undefined) ??
      aggRecord[columnName]
    const termsAgg: OpenSearchTermsAgg =
      nested?.buckets !== undefined ? nested : (agg as OpenSearchTermsAgg)
    const selectedValues =
      selectedFacets
        ?.filter(
          (f): f is FacetColumnValuesRequest =>
            f.concreteType ===
              FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE &&
            f.columnName === columnName,
        )
        .flatMap(f => f.facetValues ?? []) ?? []
    return {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues' as const,
      facetType: 'enumeration' as const,
      columnName,
      facetValues: (termsAgg.buckets ?? []).map(b => ({
        value: String(b.key),
        count: b.doc_count,
        isSelected: selectedValues.includes(String(b.key)),
      })),
    }
  })

  // Synthesize FacetColumnResultRange for range-type DATE/DOUBLE/INTEGER columns. The Search
  // API's aggregations only produce terms (enumeration) results; range stats are unavailable
  // server-side. columnMin/columnMax are left empty; selectedMin/selectedMax are taken
  // directly from selectedFacets so any applied range filter is still reflected in the UI.
  // Note: for INTEGER columns the RangeSlider requires real bounds, so the UI falls back to a
  // plain Range number input when columnMin/columnMax are absent.
  const syntheticRangeFacets: FacetColumnResultRange[] = (columnModels ?? [])
    .filter(
      cm =>
        cm.facetType === 'range' &&
        (cm.columnType === 'DATE' ||
          cm.columnType === 'DOUBLE' ||
          cm.columnType === 'INTEGER') &&
        !rawFacets.some(f => f.columnName === cm.name),
    )
    .map(cm => {
      const rangeFilter = selectedFacets?.find(
        (f): f is FacetColumnRangeRequest =>
          f.concreteType === FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE &&
          f.columnName === cm.name,
      )
      return {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnResultRange' as const,
        facetType: 'range' as const,
        columnName: cm.name,
        columnMin: '',
        columnMax: '',
        selectedMin: rangeFilter?.min,
        selectedMax: rangeFilter?.max,
      }
    })

  const allFacets: NonNullable<QueryResultBundle['facets']> = [
    ...(rawFacets ?? []),
    ...syntheticRangeFacets,
  ]

  // Reorder all facets to match the columnModels order so downstream components
  // (e.g. FacetFilterControls) render facets in the expected column order.
  const orderedFacets: QueryResultBundle['facets'] = columnModels
    ? [
        ...allFacets
          .filter(f => columnModels.some(cm => cm.name === f.columnName))
          .sort(
            (a, b) =>
              columnModels.findIndex(cm => cm.name === a.columnName) -
              columnModels.findIndex(cm => cm.name === b.columnName),
          ),
        ...allFacets.filter(
          f => !columnModels.some(cm => cm.name === f.columnName),
        ),
      ]
    : allFacets

  const maxScore = results.hits?.[0]?.score
  return {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
    queryCount: results.totalHits,
    selectColumns: headers,
    queryResult,
    facets: orderedFacets,
    ...(maxScore !== undefined && { maxScore }),
  } as QueryResultBundle
}

export function getSearchQueryUseQueryOptions(
  queryBundleRequest: QueryBundleRequest,
  keyFactory: KeyFactory,
  accessToken: string | undefined,
  searchIndexId: string,
  columnModels?: ColumnModel[],
  searchQueryConfig?: SearchQueryConfig,
): SearchTableQueryUseQueryOptions {
  const baseQuery: SearchIndexQuery = toSearchIndexQuery(
    queryBundleRequest,
    searchIndexId,
    columnModels,
    searchQueryConfig,
  )
  const rowDataQuery: SearchIndexQuery = {
    ...baseQuery,
    searchQuery: {
      ...baseQuery.searchQuery,
      // Omit aggregations from the row data query: facet aggregations are only needed
      // in the metadata query. Removing them here keeps the row data query key stable
      // while column models are loading, preventing an unnecessary re-fetch (and a brief
      // loading flash) when column models first arrive.
      aggregations: undefined,
    },
    // Request SELECT_COLUMNS so headers are available for row rendering.
    // HITS is returned by default even when responseParts is specified.
    responseParts: new Set(['HITS', 'SELECT_COLUMNS'] as const),
  }
  const metadataQuery: SearchIndexQuery = {
    ...baseQuery,
    searchQuery: {
      ...baseQuery.searchQuery,
      // Fetch only 1 hit: we need just the top hit's score for tab auto-selection.
      // Aggregation counts are independent of size.
      size: 1,
    },
    // Request all opt-in parts needed for the metadata response:
    // HITS → exposes the top hit's relevance score for tab auto-selection
    // TOTAL_HITS → queryCount (drives tab count / spinner resolution)
    // SELECT_COLUMNS → column headers for the table
    // Aggregation results are returned automatically when aggregations is set on the query.
    responseParts: new Set(['HITS', 'TOTAL_HITS', 'SELECT_COLUMNS'] as const),
  }

  // Convert responseParts Set → sorted array for query key building.
  // JSON.stringify(new Set([...])) === '{}', so two queries whose only difference is
  // their responseParts would hash to the same key and share a cache entry.
  // Using a sorted array gives each query a distinct, stable key.
  const toKeyShape = (query: SearchIndexQuery) => ({
    ...query,
    responseParts: query.responseParts
      ? [...query.responseParts].sort()
      : undefined,
  })

  // Fetches from the SearchQueryServicesApi and converts the SearchQueryResults responseBody
  // into QueryResultBundle shape. This allows all downstream shared components
  // (UseRowSet, QueryVisualizationWrapper, etc.) to access data.responseBody.*
  // using the same patterns as regular table queries (queryResult.queryResults, selectColumns, etc.).
  const fetchAndConvert = async (query: SearchIndexQuery) => {
    const asyncStatus = await SynapseClient.getSearchQueryAsyncJobResults(
      query,
      accessToken,
    )
    return {
      ...asyncStatus,
      responseBody: searchQueryResultsToQueryResultBundle(
        asyncStatus.responseBody,
        query,
        columnModels,
        queryBundleRequest.query.selectedFacets as
          | (FacetColumnValuesRequest | FacetColumnRangeRequest)[]
          | undefined,
      ),
    }
  }

  // `as unknown as` is necessary because SearchIndexQuery.responseParts is a Set but
  // toKeyShape converts it to a sorted string[] for stable cache key serialisation.
  const rowDataQueryOptions: SearchTableQueryUseQueryOptions['rowDataQueryOptions'] =
    {
      ...tableQueryUseQueryDefaults,
      queryKey: keyFactory.getSearchQueryResultWithAsyncStatusQueryKey(
        toKeyShape(rowDataQuery) as unknown as SearchIndexQuery,
        false,
      ),
      queryFn: () => fetchAndConvert(rowDataQuery),
      select: (
        data: AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>,
      ): RowSet | undefined => data.responseBody?.queryResult?.queryResults,
    }

  const rowDataInfiniteQueryOptions: SearchTableQueryUseQueryOptions['rowDataInfiniteQueryOptions'] =
    {
      ...tableQueryUseQueryDefaults,
      queryKey: keyFactory.getSearchQueryResultWithAsyncStatusQueryKey(
        toKeyShape(rowDataQuery) as unknown as SearchIndexQuery,
        true,
      ),
      initialPageParam: 0 as number | string | undefined,
      getNextPageParam: (
        lastPage: AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>,
        allPages: AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>[],
      ): number | string | undefined => {
        return getNextPageParamForSearchQueryResults(lastPage, allPages)
      },
      queryFn: (context: { pageParam?: number | string }) => {
        const offset =
          typeof context.pageParam === 'string'
            ? parseInt(context.pageParam)
            : (context.pageParam ?? 0)
        const requestForPage: SearchIndexQuery = {
          ...rowDataQuery,
          searchQuery: {
            ...rowDataQuery.searchQuery,
            from: offset,
          },
        }
        return fetchAndConvert(requestForPage)
      },
      select: (
        data: InfiniteData<
          AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>
        >,
      ) => data,
    }

  const queryMetadataQueryOptions: SearchTableQueryUseQueryOptions['queryMetadataQueryOptions'] =
    {
      ...tableQueryUseQueryDefaults,
      queryKey: keyFactory.getSearchQueryResultWithAsyncStatusQueryKey(
        toKeyShape(metadataQuery) as unknown as SearchIndexQuery,
        false,
      ),
      queryFn: () => fetchAndConvert(metadataQuery),
      select: (
        data: AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle>,
      ): Omit<QueryResultBundle, 'queryResult'> => {
        const result = omit(data.responseBody ?? {}, 'queryResult') as Omit<
          QueryResultBundle,
          'queryResult'
        >
        return columnModels ? { ...result, columnModels } : result
      },
    }

  return {
    rowDataQueryOptions,
    rowDataInfiniteQueryOptions,
    queryMetadataQueryOptions,
  }
}

/**
 * Returns a stable callback that fetches autocomplete suggestions for a search input
 * using the synchronous `POST /search/autocomplete` endpoint.
 *
 * The query is built from the current `searchIndexId` and `autocompleteFieldName`:
 *  - `searchQuery.query` is a `match_bool_prefix` clause scoped to `autocompleteFieldName`
 *  - `searchQuery._source` is set to `[autocompleteFieldName]` so only that field is returned
 *
 * When `autocompleteFieldName` is undefined, the returned callback immediately returns `[]`.
 */
export function useGetSuggestionsForSearchIndex(
  searchIndexId: string,
  autocompleteFieldName: string | undefined,
): (searchText: string) => Promise<string[]> {
  const { synapseClient } = useSynapseContext()

  return useCallback(
    async (searchText: string): Promise<string[]> => {
      if (!autocompleteFieldName) return []
      const trimmed = searchText.trim()
      if (!trimmed) return []
      const results =
        await synapseClient.searchManagementServicesClient.postRepoV1SearchAutocomplete(
          {
            searchAutocompleteRequest: {
              searchIndexId,
              searchQuery: {
                query: {
                  match_bool_prefix: {
                    [autocompleteFieldName]: { query: trimmed },
                  },
                },
                _source: { includes: [autocompleteFieldName] },
              },
            },
          },
        )
      const suggestions: string[] = []
      for (const hit of results.hits ?? []) {
        for (const field of hit.fields ?? []) {
          if (field.value) {
            suggestions.push(field.value)
          }
        }
      }
      return suggestions
    },
    [synapseClient, searchIndexId, autocompleteFieldName],
  )
}

/**
 * Returns TanStack Query options that call the SearchQueryServicesApi (instead of the
 * standard Table Query API) but return data in the same QueryResultBundle format, allowing
 * all existing subcomponents (FacetFilterControls, RowSetView, etc.) to work unchanged.
 */
export function useSearchQueryUseQueryOptions(
  queryBundleRequest: QueryBundleRequest,
  searchIndexId: string,
  synapseId?: string,
  searchQueryConfig?: SearchQueryConfig,
): SearchTableQueryUseQueryOptions {
  const { keyFactory, accessToken } = useSynapseContext()

  const { data: entityBundle } = useGetEntityBundle(synapseId, undefined, {
    includeTableBundle: true,
  })
  const columnModels = entityBundle?.tableBundle?.columnModels

  return useMemo(
    () =>
      getSearchQueryUseQueryOptions(
        queryBundleRequest,
        keyFactory,
        accessToken,
        searchIndexId,
        columnModels,
        searchQueryConfig,
      ),
    [
      keyFactory,
      accessToken,
      queryBundleRequest,
      searchIndexId,
      columnModels,
      searchQueryConfig,
    ],
  )
}
