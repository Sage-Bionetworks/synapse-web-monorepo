import {
  AsynchronousJobStatus,
  FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
  FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE,
  FacetColumnResultRange,
  QueryBundleRequest,
  QueryResultBundle,
  TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'
import type {
  SearchIndexQuery,
  SearchQueryResults,
} from '@sage-bionetworks/synapse-client'
import dayjs from 'dayjs'
import { describe, expect, it } from 'vitest'
import {
  getNextPageParamForSearchQueryResults,
  searchQueryResultsToQueryResultBundle,
  toSearchIndexQuery,
} from './SearchQueryUseQueryOptions'

const SEARCH_INDEX_ID = 'syn60001'

/** Minimal valid QueryBundleRequest for use as a baseline. */
function makeQueryBundleRequest(
  overrides: Partial<QueryBundleRequest['query']> = {},
): QueryBundleRequest {
  return {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
    partMask: 0,
    entityId: 'syn60000',
    query: {
      sql: 'SELECT * FROM syn60000',
      limit: 25,
      offset: 0,
      ...overrides,
    },
  }
}

/** Minimal SearchIndexQuery for passing to searchQueryResultsToQueryResultBundle. */
const MINIMAL_SEARCH_INDEX_QUERY: SearchIndexQuery = {
  concreteType: 'org.sagebionetworks.repo.model.search.table.SearchIndexQuery',
  searchIndexId: SEARCH_INDEX_ID,
}

function makeAsyncStatusWithRows(
  rowCount: number,
  queryCount?: number,
  size?: number,
): AsynchronousJobStatus<SearchIndexQuery, QueryResultBundle> {
  return {
    jobState: 'COMPLETE',
    jobCanceling: false,
    etag: 'etag',
    jobId: 'job1',
    startedByUserId: 1,
    startedOn: '2024-01-01T00:00:00.000Z',
    changedOn: '2024-01-01T00:00:00.000Z',
    runtimeMS: 0,
    responseBody: {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
      queryCount,
      queryResult: {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
        queryResults: {
          concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
          tableId: 'syn1',
          etag: 'etag',
          headers: [],
          rows: Array.from({ length: rowCount }).map((_, i) => ({
            rowId: i,
            values: [],
          })),
        },
      },
    },
    requestBody: {
      concreteType:
        'org.sagebionetworks.repo.model.search.table.SearchIndexQuery',
      searchIndexId: SEARCH_INDEX_ID,
      searchQuery: {
        size,
      },
    },
  }
}

describe('getNextPageParamForSearchQueryResults', () => {
  it('returns undefined when the last page has fewer rows than the requested page size', () => {
    const firstPage = makeAsyncStatusWithRows(25, undefined, 25)
    const lastPage = makeAsyncStatusWithRows(7, undefined, 25)

    const result = getNextPageParamForSearchQueryResults(lastPage, [
      firstPage,
      lastPage,
    ])

    expect(result).toBeUndefined()
  })

  it('returns undefined when the last page is empty', () => {
    const firstPage = makeAsyncStatusWithRows(25, undefined, 25)
    const lastPage = makeAsyncStatusWithRows(0, undefined, 25)

    const result = getNextPageParamForSearchQueryResults(lastPage, [
      firstPage,
      lastPage,
    ])

    expect(result).toBeUndefined()
  })

  it('returns undefined when fetched rows already meet queryCount', () => {
    const firstPage = makeAsyncStatusWithRows(25, 30, 25)
    const lastPage = makeAsyncStatusWithRows(5, 30, 25)

    const result = getNextPageParamForSearchQueryResults(lastPage, [
      firstPage,
      lastPage,
    ])

    expect(result).toBeUndefined()
  })

  it('returns the next offset when another full page is possible', () => {
    const firstPage = makeAsyncStatusWithRows(25, 100, 25)
    const lastPage = makeAsyncStatusWithRows(25, 100, 25)

    const result = getNextPageParamForSearchQueryResults(lastPage, [
      firstPage,
      lastPage,
    ])

    expect(result).toBe(50)
  })
})

// ---------------------------------------------------------------------------
// toSearchIndexQuery
// ---------------------------------------------------------------------------

describe('toSearchIndexQuery', () => {
  it('produces the correct concreteType', () => {
    const result = toSearchIndexQuery(makeQueryBundleRequest(), SEARCH_INDEX_ID)
    expect(result.concreteType).toBe(
      'org.sagebionetworks.repo.model.search.table.SearchIndexQuery',
    )
  })

  it('forwards the searchIndexId', () => {
    const result = toSearchIndexQuery(makeQueryBundleRequest(), 'syn99999')
    expect(result.searchIndexId).toBe('syn99999')
  })

  it('forwards limit and offset from the query as size and from', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest({ limit: 10, offset: 20 }),
      SEARCH_INDEX_ID,
    )
    expect(result.searchQuery?.size).toBe(10)
    expect(result.searchQuery?.from).toBe(20)
  })

  it('produces a match_all query when no query text or filters are provided', () => {
    const result = toSearchIndexQuery(makeQueryBundleRequest(), SEARCH_INDEX_ID)
    expect(result.searchQuery?.query).toEqual({ match_all: {} })
  })

  it('uses fuzziness AUTO in the multi_match clause when query text is present', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest({
        additionalFilters: [
          {
            concreteType: TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE_VALUE,
            searchExpression: 'test',
          },
        ],
      }),
      SEARCH_INDEX_ID,
    )
    expect(result.searchQuery?.query).toMatchObject({
      multi_match: { fuzziness: 'AUTO' },
    })
  })

  it('produces match_all query, no aggregations, and no sort when the query is empty', () => {
    const result = toSearchIndexQuery(makeQueryBundleRequest(), SEARCH_INDEX_ID)
    const q = result.searchQuery!
    expect(q.query).toEqual({ match_all: {} })
    expect(q.aggregations).toBeUndefined()
    expect(q.sort).toBeUndefined()
  })

  // ---- selectedFacets → query DSL filter clauses ---

  it('maps enumeration selectedFacets to terms filter clauses in the query DSL', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest({
        selectedFacets: [
          {
            concreteType: FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE,
            columnName: 'consortium',
            facetValues: ['HTAN', 'CPTAC'],
          },
        ],
      }),
      SEARCH_INDEX_ID,
    )
    expect(result.searchQuery?.query).toMatchObject({
      bool: { filter: [{ terms: { consortium: ['HTAN', 'CPTAC'] } }] },
    })
  })

  it('maps range selectedFacets to range filter clauses in the query DSL', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest({
        selectedFacets: [
          {
            concreteType: FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
            columnName: 'modified_on',
            min: '1000000',
            max: '2000000',
          },
        ],
      }),
      SEARCH_INDEX_ID,
    )
    expect(result.searchQuery?.query).toMatchObject({
      bool: {
        filter: [
          { range: { modified_on: { gte: '1000000', lte: '2000000' } } },
        ],
      },
    })
  })

  it('converts DATE range filter values from YYYY-MM-DD to unix milliseconds', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest({
        selectedFacets: [
          {
            concreteType: FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
            columnName: 'event_date',
            min: '2021-06-01',
            max: '2021-12-31',
          },
        ],
      }),
      SEARCH_INDEX_ID,
      [
        {
          id: 'c1',
          name: 'event_date',
          columnType: 'DATE',
          facetType: 'range',
        },
      ],
    )
    expect(result.searchQuery?.query).toMatchObject({
      bool: {
        filter: [
          {
            range: {
              event_date: {
                gte: String(dayjs('2021-06-01').valueOf()),
                lte: String(dayjs('2021-12-31').valueOf()),
              },
            },
          },
        ],
      },
    })
  })

  it('passes non-DATE range filter values through unchanged', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest({
        selectedFacets: [
          {
            concreteType: FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
            columnName: 'year',
            min: '1996',
            max: '1999',
          },
        ],
      }),
      SEARCH_INDEX_ID,
      [{ id: 'c1', name: 'year', columnType: 'INTEGER', facetType: 'range' }],
    )
    expect(result.searchQuery?.query).toMatchObject({
      bool: {
        filter: [{ range: { year: { gte: '1996', lte: '1999' } } }],
      },
    })
  })

  it('keeps undefined range filter bounds as undefined without conversion', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest({
        selectedFacets: [
          {
            concreteType: FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
            columnName: 'event_date',
            min: undefined,
            max: '2021-12-31',
          },
        ],
      }),
      SEARCH_INDEX_ID,
      [
        {
          id: 'c1',
          name: 'event_date',
          columnType: 'DATE',
          facetType: 'range',
        },
      ],
    )
    // Only lte should be present; gte should be absent
    expect(result.searchQuery?.query).toMatchObject({
      bool: {
        filter: [
          {
            range: {
              event_date: { lte: String(dayjs('2021-12-31').valueOf()) },
            },
          },
        ],
      },
    })
    const rangeClause = (
      result.searchQuery?.query as {
        bool: {
          filter: Array<{ range: { event_date: Record<string, unknown> } }>
        }
      }
    )?.bool?.filter?.[0]?.range?.event_date
    expect(rangeClause).not.toHaveProperty('gte')
  })

  it('keeps enumeration and range selectedFacets separate', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest({
        selectedFacets: [
          {
            concreteType: FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE,
            columnName: 'organ',
            facetValues: ['Brain'],
          },
          {
            concreteType: FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
            columnName: 'age',
            min: '0',
            max: '100',
          },
        ],
      }),
      SEARCH_INDEX_ID,
    )
    // Both filter clauses should appear in the bool.filter array
    expect(
      (result.searchQuery?.query as { bool: { filter: unknown[] } })?.bool
        ?.filter,
    ).toHaveLength(2)
  })

  // ---- additionalFilters → query DSL ---

  it('sets the query to multi_match when only a TextMatchesQueryFilter is present', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest({
        additionalFilters: [
          {
            concreteType: TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE_VALUE,
            searchExpression: 'glioblastoma brain',
          },
        ],
      }),
      SEARCH_INDEX_ID,
    )
    expect(result.searchQuery?.query).toMatchObject({
      multi_match: { query: 'glioblastoma brain' },
    })
  })

  it('concatenates TextMatchesQueryFilter searchExpressions into a single multi_match query', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest({
        additionalFilters: [
          {
            concreteType: TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE_VALUE,
            searchExpression: 'glioblastoma',
          },
          {
            concreteType: TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE_VALUE,
            searchExpression: 'brain',
          },
        ],
      }),
      SEARCH_INDEX_ID,
    )
    expect(result.searchQuery?.query).toMatchObject({
      multi_match: { query: 'glioblastoma brain' },
    })
  })

  it('produces match_all query when no TextMatchesQueryFilter is present', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest({ additionalFilters: [] }),
      SEARCH_INDEX_ID,
    )
    expect(result.searchQuery?.query).toEqual({ match_all: {} })
  })

  it('wraps text + filter queries in a bool.must + bool.filter clause', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest({
        additionalFilters: [
          {
            concreteType: TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE_VALUE,
            searchExpression: 'glioblastoma',
          },
        ],
        selectedFacets: [
          {
            concreteType: FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE,
            columnName: 'organ',
            facetValues: ['Brain'],
          },
        ],
      }),
      SEARCH_INDEX_ID,
    )
    expect(result.searchQuery?.query).toMatchObject({
      bool: {
        must: [{ multi_match: { query: 'glioblastoma' } }],
        filter: [{ terms: { organ: ['Brain'] } }],
      },
    })
  })

  // ---- columnModels → aggregations ---

  it('builds aggregations from columnModels that have facetType enumeration', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest(),
      SEARCH_INDEX_ID,
      [
        {
          id: 'c1',
          name: 'consortium',
          columnType: 'STRING',
          facetType: 'enumeration',
        },
        { id: 'c2', name: 'description', columnType: 'STRING' }, // no facetType → excluded
      ],
    )
    expect(Object.keys(result.searchQuery?.aggregations ?? {})).toHaveLength(1)
    expect(result.searchQuery?.aggregations?.['consortium']).toBeDefined()
  })

  it('excludes columnModels without a facetType from aggregations', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest(),
      SEARCH_INDEX_ID,
      [{ id: 'c1', name: 'description', columnType: 'STRING' }],
    )
    expect(result.searchQuery?.aggregations).toBeUndefined()
  })

  it('excludes range-type columns from aggregations, keeping only enumeration columns', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest(),
      SEARCH_INDEX_ID,
      [
        { id: 'c1', name: 'year', columnType: 'INTEGER', facetType: 'range' },
        {
          id: 'c2',
          name: 'consortium',
          columnType: 'STRING',
          facetType: 'enumeration',
        },
      ],
    )
    expect(Object.keys(result.searchQuery?.aggregations ?? {})).toHaveLength(1)
    expect(result.searchQuery?.aggregations?.['consortium']).toBeDefined()
  })

  it('produces undefined aggregations when columnModels is not provided', () => {
    const result = toSearchIndexQuery(makeQueryBundleRequest(), SEARCH_INDEX_ID)
    expect(result.searchQuery?.aggregations).toBeUndefined()
  })

  it('maps facetSortConfig.property VALUE → OpenSearch order key _key (ascending)', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest(),
      SEARCH_INDEX_ID,
      [
        {
          id: 'c1',
          name: 'consortium',
          columnType: 'STRING',
          facetType: 'enumeration',
          facetSortConfig: { property: 'VALUE', direction: 'ASC' },
        },
      ],
    )
    expect(
      result.searchQuery?.aggregations?.['consortium']?.terms?.order,
    ).toEqual({ _key: 'asc' })
  })

  it('maps facetSortConfig.property FREQUENCY DESC → OpenSearch order key _count descending', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest(),
      SEARCH_INDEX_ID,
      [
        {
          id: 'c1',
          name: 'consortium',
          columnType: 'STRING',
          facetType: 'enumeration',
          facetSortConfig: { property: 'FREQUENCY', direction: 'DESC' },
        },
      ],
    )
    expect(
      result.searchQuery?.aggregations?.['consortium']?.terms?.order,
    ).toEqual({ _count: 'desc' })
  })

  // ---- query.sort → sort ---

  it('maps query.sort SortItem[] to OpenSearch sort objects', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest({
        sort: [
          { column: 'name', direction: 'ASC' },
          { column: 'modified_on', direction: 'DESC' },
        ],
      }),
      SEARCH_INDEX_ID,
    )
    expect(result.searchQuery?.sort).toEqual([
      { name: 'asc' },
      { modified_on: 'desc' },
    ])
  })

  it('filters out sort entries with empty direction', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest({
        sort: [
          { column: 'name', direction: '' }, // "remove sort" sentinel
          { column: 'modified_on', direction: 'DESC' },
        ],
      }),
      SEARCH_INDEX_ID,
    )
    expect(result.searchQuery?.sort).toEqual([{ modified_on: 'desc' }])
  })

  it('produces undefined sort when all entries have empty direction', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest({
        sort: [{ column: 'name', direction: '' }],
      }),
      SEARCH_INDEX_ID,
    )
    expect(result.searchQuery?.sort).toBeUndefined()
  })

  it('produces undefined sort when query.sort is not set', () => {
    const result = toSearchIndexQuery(makeQueryBundleRequest(), SEARCH_INDEX_ID)
    expect(result.searchQuery?.sort).toBeUndefined()
  })
})

// ---------------------------------------------------------------------------
// searchQueryResultsToQueryResultBundle
// ---------------------------------------------------------------------------

describe('searchQueryResultsToQueryResultBundle', () => {
  it('returns a minimal bundle when results is undefined', () => {
    const result = searchQueryResultsToQueryResultBundle(
      undefined,
      MINIMAL_SEARCH_INDEX_QUERY,
    )
    expect(result.concreteType).toBe(
      'org.sagebionetworks.repo.model.table.QueryResultBundle',
    )
    expect(result.queryResult).toBeUndefined()
    expect(result.queryCount).toBeUndefined()
  })

  it('returns the correct bundle concreteType', () => {
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 0,
      hits: [],
      selectColumns: [],
    }
    const result = searchQueryResultsToQueryResultBundle(
      results,
      MINIMAL_SEARCH_INDEX_QUERY,
    )
    expect(result.concreteType).toBe(
      'org.sagebionetworks.repo.model.table.QueryResultBundle',
    )
  })

  it('maps totalHits to queryCount', () => {
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 42,
      hits: [],
      selectColumns: [],
    }
    const result = searchQueryResultsToQueryResultBundle(
      results,
      MINIMAL_SEARCH_INDEX_QUERY,
    )
    expect(result.queryCount).toBe(42)
  })

  it('maps hit fields to row values in the order defined by selectColumns', () => {
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 1,
      selectColumns: [{ name: 'name' }, { name: 'consortium' }],
      hits: [
        {
          rowId: 101,
          rowVersion: 2,
          fields: [
            { name: 'consortium', value: 'HTAN' },
            { name: 'name', value: 'My Study' }, // out of order on purpose
          ],
        },
      ],
    }
    const result = searchQueryResultsToQueryResultBundle(
      results,
      MINIMAL_SEARCH_INDEX_QUERY,
    )
    const rows = result.queryResult?.queryResults.rows ?? []
    expect(rows).toHaveLength(1)
    // Values must follow the selectColumns order: name, consortium
    expect(rows[0].values).toEqual(['My Study', 'HTAN'])
    expect(rows[0].rowId).toBe(101)
    expect(rows[0].versionNumber).toBe(2)
  })

  it('uses null for a missing field value', () => {
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 1,
      selectColumns: [{ name: 'name' }, { name: 'description' }],
      hits: [
        {
          rowId: 1,
          rowVersion: 1,
          fields: [{ name: 'name', value: 'Test' }], // no 'description' field
        },
      ],
    }
    const result = searchQueryResultsToQueryResultBundle(
      results,
      MINIMAL_SEARCH_INDEX_QUERY,
    )
    expect(result.queryResult?.queryResults.rows[0].values).toEqual([
      'Test',
      null,
    ])
  })

  it('uses the columnType from columnModels when available', () => {
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 1,
      selectColumns: [{ name: 'modified_on' }],
      hits: [{ rowId: 1, rowVersion: 1, fields: [] }],
    }
    const result = searchQueryResultsToQueryResultBundle(
      results,
      MINIMAL_SEARCH_INDEX_QUERY,
      [{ id: 'c1', name: 'modified_on', columnType: 'DATE' }],
    )
    expect(result.queryResult?.queryResults.headers[0].columnType).toBe('DATE')
  })

  it('falls back to STRING columnType when columnModels is not provided', () => {
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 1,
      selectColumns: [{ name: 'name' }],
      hits: [{ rowId: 1, rowVersion: 1, fields: [] }],
    }
    const result = searchQueryResultsToQueryResultBundle(
      results,
      MINIMAL_SEARCH_INDEX_QUERY,
    )
    expect(result.queryResult?.queryResults.headers[0].columnType).toBe(
      'STRING',
    )
  })

  it('uses the correct RowSet concreteType (not QueryResultBundle)', () => {
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 1,
      selectColumns: [{ name: 'name' }],
      hits: [{ rowId: 1, rowVersion: 1, fields: [] }],
    }
    const result = searchQueryResultsToQueryResultBundle(
      results,
      MINIMAL_SEARCH_INDEX_QUERY,
    )
    expect(result.queryResult?.queryResults.concreteType).toBe(
      'org.sagebionetworks.repo.model.table.RowSet',
    )
  })

  it('sets tableId on the RowSet from the searchIndexId in the query', () => {
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 1,
      selectColumns: [{ name: 'name' }],
      hits: [{ rowId: 1, rowVersion: 1, fields: [] }],
    }
    const result = searchQueryResultsToQueryResultBundle(results, {
      concreteType:
        'org.sagebionetworks.repo.model.search.table.SearchIndexQuery',
      searchIndexId: 'syn99999',
    })
    expect(result.queryResult?.queryResults.tableId).toBe('syn99999')
  })

  it('parses aggregationResults into FacetColumnResultValues when no columnModels are provided', () => {
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 5,
      hits: [],
      selectColumns: [],
      aggregationResults: {
        organ: { buckets: [{ key: 'Brain', doc_count: 5 }] },
      },
    }
    const result = searchQueryResultsToQueryResultBundle(
      results,
      MINIMAL_SEARCH_INDEX_QUERY,
    )
    expect(result.facets).toHaveLength(1)
    expect(result.facets![0]).toMatchObject({
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
      columnName: 'organ',
      facetType: 'enumeration',
      facetValues: [{ value: 'Brain', count: 5, isSelected: false }],
    })
  })

  it('reorders facets to match the columnModels order', () => {
    // Server aggregations come in a different order than columnModels.
    // Note: range columns (age) are synthesized by searchQueryResultsToQueryResultBundle;
    // they are not returned in aggregationResults.
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 5,
      hits: [],
      selectColumns: [],
      aggregationResults: {
        organ: { buckets: [{ key: 'Brain', doc_count: 5 }] },
        consortium: { buckets: [{ key: 'HTAN', doc_count: 3 }] },
      },
    }
    // columnModels order: consortium → age → organ
    const columnModels = [
      {
        id: 'c1',
        name: 'consortium',
        columnType: 'STRING' as const,
        facetType: 'enumeration' as const,
      },
      {
        id: 'c2',
        name: 'age',
        columnType: 'INTEGER' as const,
        facetType: 'range' as const,
      },
      {
        id: 'c3',
        name: 'organ',
        columnType: 'STRING' as const,
        facetType: 'enumeration' as const,
      },
    ]
    const result = searchQueryResultsToQueryResultBundle(
      results,
      MINIMAL_SEARCH_INDEX_QUERY,
      columnModels,
    )
    expect(result.facets?.map(f => f.columnName)).toEqual([
      'consortium',
      'age',
      'organ',
    ])
  })

  it('appends facets with no matching columnModel at the end', () => {
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 2,
      hits: [],
      selectColumns: [],
      // 'unknownColumn' has no matching columnModel; 'consortium' does
      aggregationResults: {
        unknownColumn: { buckets: [] },
        consortium: { buckets: [] },
      },
    }
    const columnModels = [
      {
        id: 'c1',
        name: 'consortium',
        columnType: 'STRING' as const,
        facetType: 'enumeration' as const,
      },
    ]
    const result = searchQueryResultsToQueryResultBundle(
      results,
      MINIMAL_SEARCH_INDEX_QUERY,
      columnModels,
    )
    expect(result.facets?.map(f => f.columnName)).toEqual([
      'consortium',
      'unknownColumn',
    ])
  })

  it('produces undefined queryResult when there are no hits and no headers', () => {
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 0,
      hits: [],
      selectColumns: [],
    }
    const result = searchQueryResultsToQueryResultBundle(
      results,
      MINIMAL_SEARCH_INDEX_QUERY,
    )
    expect(result.queryResult).toBeUndefined()
  })

  it('populates selectColumns on the bundle from the hit headers', () => {
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 1,
      selectColumns: [{ name: 'name' }, { name: 'organ' }],
      hits: [{ rowId: 1, rowVersion: 1, fields: [] }],
    }
    const result = searchQueryResultsToQueryResultBundle(
      results,
      MINIMAL_SEARCH_INDEX_QUERY,
      [
        { id: 'c1', name: 'name', columnType: 'STRING' },
        { id: 'c2', name: 'organ', columnType: 'STRING' },
      ],
    )
    expect(result.selectColumns).toEqual([
      { name: 'name', columnType: 'STRING' },
      { name: 'organ', columnType: 'STRING' },
    ])
  })

  it('handles multiple hits correctly', () => {
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 2,
      selectColumns: [{ name: 'name' }],
      hits: [
        { rowId: 1, rowVersion: 1, fields: [{ name: 'name', value: 'Alpha' }] },
        { rowId: 2, rowVersion: 3, fields: [{ name: 'name', value: 'Beta' }] },
      ],
    }
    const result = searchQueryResultsToQueryResultBundle(
      results,
      MINIMAL_SEARCH_INDEX_QUERY,
    )
    const rows = result.queryResult?.queryResults.rows ?? []
    expect(rows).toHaveLength(2)
    expect(rows[0].values).toEqual(['Alpha'])
    expect(rows[1].values).toEqual(['Beta'])
    expect(rows[1].rowId).toBe(2)
    expect(rows[1].versionNumber).toBe(3)
  })

  // ---- Synthetic FacetColumnResultRange for DATE / DOUBLE range columns ----

  it('synthesizes a FacetColumnResultRange for DATE range columns absent from server results', () => {
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 0,
      hits: [],
      selectColumns: [],
    }
    const result = searchQueryResultsToQueryResultBundle(
      results,
      MINIMAL_SEARCH_INDEX_QUERY,
      [
        {
          id: 'c1',
          name: 'event_date',
          columnType: 'DATE',
          facetType: 'range',
        },
      ],
    )
    expect(result.facets).toHaveLength(1)
    const facet = result.facets![0] as FacetColumnResultRange
    expect(facet.columnName).toBe('event_date')
    expect(facet.facetType).toBe('range')
    expect(facet.columnMin).toBe('')
    expect(facet.columnMax).toBe('')
  })

  it('synthesizes a FacetColumnResultRange for DOUBLE range columns absent from server results', () => {
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 0,
      hits: [],
      selectColumns: [],
    }
    const result = searchQueryResultsToQueryResultBundle(
      results,
      MINIMAL_SEARCH_INDEX_QUERY,
      [
        {
          id: 'c1',
          name: 'score',
          columnType: 'DOUBLE',
          facetType: 'range',
        },
      ],
    )
    expect(result.facets).toHaveLength(1)
    expect(result.facets![0].columnName).toBe('score')
    expect(result.facets![0].facetType).toBe('range')
  })

  it('synthesizes a FacetColumnResultRange for INTEGER range columns absent from server results', () => {
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 0,
      hits: [],
      selectColumns: [],
    }
    const result = searchQueryResultsToQueryResultBundle(
      results,
      MINIMAL_SEARCH_INDEX_QUERY,
      [{ id: 'c1', name: 'year', columnType: 'INTEGER', facetType: 'range' }],
    )
    expect(result.facets).toHaveLength(1)
    const facet = result.facets![0] as FacetColumnResultRange
    expect(facet.columnName).toBe('year')
    expect(facet.facetType).toBe('range')
    expect(facet.columnMin).toBe('')
    expect(facet.columnMax).toBe('')
  })

  it('reads selectedMin and selectedMax from selectedFacets for DATE range columns', () => {
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 0,
      hits: [],
      selectColumns: [],
    }
    const result = searchQueryResultsToQueryResultBundle(
      results,
      MINIMAL_SEARCH_INDEX_QUERY,
      [
        {
          id: 'c1',
          name: 'event_date',
          columnType: 'DATE',
          facetType: 'range',
        },
      ],
      [
        {
          concreteType: FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
          columnName: 'event_date',
          min: '2021-06-01',
          max: '2021-12-31',
        },
      ],
    )
    const facet = result.facets![0] as FacetColumnResultRange
    expect(facet.selectedMin).toBe('2021-06-01')
    expect(facet.selectedMax).toBe('2021-12-31')
  })

  it('leaves selectedMin and selectedMax undefined when no selectedFacets are provided', () => {
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 0,
      hits: [],
      selectColumns: [],
    }
    const result = searchQueryResultsToQueryResultBundle(
      results,
      MINIMAL_SEARCH_INDEX_QUERY,
      [
        {
          id: 'c1',
          name: 'event_date',
          columnType: 'DATE',
          facetType: 'range',
        },
      ],
    )
    const facet = result.facets![0] as FacetColumnResultRange
    expect(facet.selectedMin).toBeUndefined()
    expect(facet.selectedMax).toBeUndefined()
  })

  it('supports one-sided synthesized ranges when only one selectedFacets bound is set', () => {
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 0,
      hits: [],
      selectColumns: [],
    }
    const result = searchQueryResultsToQueryResultBundle(
      results,
      MINIMAL_SEARCH_INDEX_QUERY,
      [
        {
          id: 'c1',
          name: 'event_date',
          columnType: 'DATE',
          facetType: 'range',
        },
      ],
      [
        {
          concreteType: FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
          columnName: 'event_date',
          min: undefined,
          max: '2021-12-31',
        },
      ],
    )
    const facet = result.facets![0] as FacetColumnResultRange
    expect(facet.selectedMin).toBeUndefined()
    expect(facet.selectedMax).toBe('2021-12-31')
  })
})
