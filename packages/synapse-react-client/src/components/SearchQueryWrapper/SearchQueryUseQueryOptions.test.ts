import {
  FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
  FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE,
  QueryBundleRequest,
  TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE_VALUE,
} from '@sage-bionetworks/synapse-types'
import type {
  SearchIndexQuery,
  SearchQueryResults,
} from '@sage-bionetworks/synapse-client'
import { describe, expect, it } from 'vitest'
import {
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

  it('forwards limit and offset from the query', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest({ limit: 10, offset: 20 }),
      SEARCH_INDEX_ID,
    )
    expect(result.searchQuery?.limit).toBe(10)
    expect(result.searchQuery?.offset).toBe(20)
  })

  it('sets queryType to MULTI_MATCH', () => {
    const result = toSearchIndexQuery(makeQueryBundleRequest(), SEARCH_INDEX_ID)
    expect(result.searchQuery?.queryType).toBe('MULTI_MATCH')
  })

  it('sets fuzziness to AUTO', () => {
    const result = toSearchIndexQuery(makeQueryBundleRequest(), SEARCH_INDEX_ID)
    expect(result.searchQuery?.fuzziness).toBe('AUTO')
  })

  it('produces no termsFilters, rangeFilters, facetRequests, or sort when the query is empty', () => {
    const result = toSearchIndexQuery(makeQueryBundleRequest(), SEARCH_INDEX_ID)
    const q = result.searchQuery!
    expect(q.termsFilters).toBeUndefined()
    expect(q.rangeFilters).toBeUndefined()
    expect(q.facetRequests).toBeUndefined()
    expect(q.sort).toBeUndefined()
    expect(q.queryText).toBeUndefined()
  })

  // ---- selectedFacets → termsFilters / rangeFilters ---

  it('maps enumeration selectedFacets to termsFilters', () => {
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
    expect(result.searchQuery?.termsFilters).toEqual([
      { key: 'consortium', values: ['HTAN', 'CPTAC'] },
    ])
  })

  it('maps range selectedFacets to rangeFilters', () => {
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
    expect(result.searchQuery?.rangeFilters).toEqual([
      { key: 'modified_on', min: '1000000', max: '2000000' },
    ])
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
    expect(result.searchQuery?.termsFilters).toHaveLength(1)
    expect(result.searchQuery?.rangeFilters).toHaveLength(1)
  })

  // ---- additionalFilters → queryText ---

  it('concatenates TextMatchesQueryFilter searchExpressions into queryText', () => {
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
    expect(result.searchQuery?.queryText).toBe('glioblastoma brain')
  })

  it('produces undefined queryText when no TextMatchesQueryFilter is present', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest({ additionalFilters: [] }),
      SEARCH_INDEX_ID,
    )
    expect(result.searchQuery?.queryText).toBeUndefined()
  })

  // ---- columnModels → facetRequests ---

  it('builds facetRequests from columnModels that have a facetType', () => {
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
    expect(result.searchQuery?.facetRequests).toHaveLength(1)
    expect(result.searchQuery?.facetRequests![0].columnName).toBe('consortium')
  })

  it('excludes columnModels without a facetType from facetRequests', () => {
    const result = toSearchIndexQuery(
      makeQueryBundleRequest(),
      SEARCH_INDEX_ID,
      [{ id: 'c1', name: 'description', columnType: 'STRING' }],
    )
    expect(result.searchQuery?.facetRequests).toBeUndefined()
  })

  it('produces undefined facetRequests when columnModels is not provided', () => {
    const result = toSearchIndexQuery(makeQueryBundleRequest(), SEARCH_INDEX_ID)
    expect(result.searchQuery?.facetRequests).toBeUndefined()
  })

  it('maps facetSortConfig.property VALUE → sortField KEY', () => {
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
    expect(result.searchQuery?.facetRequests![0].sortField).toBe('KEY')
  })

  it('maps facetSortConfig.property FREQUENCY → sortField COUNT', () => {
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
    expect(result.searchQuery?.facetRequests![0].sortField).toBe('COUNT')
    expect(result.searchQuery?.facetRequests![0].sortDirection).toBe('DESC')
  })

  // ---- query.sort → sort ---

  it('maps query.sort SortItem[] to SearchSortField[]', () => {
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
      { columnName: 'name', direction: 'ASC' },
      { columnName: 'modified_on', direction: 'DESC' },
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
    expect(result.searchQuery?.sort).toEqual([
      { columnName: 'modified_on', direction: 'DESC' },
    ])
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

  it('forwards the facets from the search results as-is', () => {
    const facets = [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnResultValues' as const,
        columnName: 'organ',
        facetType: 'enumeration' as const,
        facetValues: [{ value: 'Brain', count: 5, isSelected: false }],
      },
    ]
    const results: SearchQueryResults = {
      concreteType: 'org.sagebionetworks.repo.model.search.SearchQueryResults',
      totalHits: 5,
      hits: [],
      selectColumns: [],
      facets,
    }
    const result = searchQueryResultsToQueryResultBundle(
      results,
      MINIMAL_SEARCH_INDEX_QUERY,
    )
    expect(result.facets).toEqual(facets)
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
})
