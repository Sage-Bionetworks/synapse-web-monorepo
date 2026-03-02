import { Query } from '@sage-bionetworks/synapse-types'
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import {
  getQueryRequestFromLink,
  updateUrlWithNewSearchParam,
} from './deepLinkingUtils'

describe('deepLinkingUtils', () => {
  const mockHistoryReplaceState = vi.fn()
  const originalLocation = window.location

  beforeEach(() => {
    // Mock window.history.replaceState
    Object.defineProperty(window, 'history', {
      value: {
        replaceState: mockHistoryReplaceState,
      },
      writable: true,
    })

    // Mock window.location
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    delete (window as any).location
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    window.location = {
      ...originalLocation,
      pathname: '/test',
      search: '',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any
  })

  afterEach(() => {
    vi.clearAllMocks()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment
    window.location = originalLocation as any
  })

  describe('updateUrlWithNewSearchParam', () => {
    const initQuery: Query = {
      sql: 'SELECT * FROM syn123',
      limit: 25,
      offset: 0,
      selectedFacets: [],
    }

    it('should store only the diff when queries differ', () => {
      const currentQuery: Query = {
        ...initQuery,
        limit: 50,
        offset: 25,
      }

      updateUrlWithNewSearchParam('QueryWrapper', 0, currentQuery, initQuery)

      // Verify the call was made
      expect(mockHistoryReplaceState).toHaveBeenCalled()

      // Extract and verify the URL
      const callArgs = mockHistoryReplaceState.mock.calls[0]
      const urlString = callArgs[2] as string
      expect(urlString).toContain('/test?QueryWrapper0=')

      // Parse and verify the diff content
      const searchParams = new URLSearchParams(urlString.split('?')[1])
      const diffJson = searchParams.get('QueryWrapper0')
      expect(diffJson).toBeTruthy()

      const diff = JSON.parse(diffJson!) as Partial<Query>
      expect(diff).toEqual({ offset: 25, limit: 50 })
    })

    it('should remove the search param when queries are equal', () => {
      updateUrlWithNewSearchParam('QueryWrapper', 0, initQuery, initQuery)

      expect(mockHistoryReplaceState).toHaveBeenCalledWith(null, '', '/test')
    })

    it('should remove the search param when currentQuery is null', () => {
      updateUrlWithNewSearchParam('QueryWrapper', 0, null, initQuery)

      expect(mockHistoryReplaceState).toHaveBeenCalledWith(null, '', '/test')
    })

    it('should handle complex query differences', () => {
      const currentQuery: Query = {
        ...initQuery,
        selectedFacets: [
          {
            columnName: 'status',
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
            facetValues: ['active'],
          },
        ],
        additionalFilters: [
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
            searchExpression: 'test',
          },
        ],
      }

      updateUrlWithNewSearchParam('QueryWrapper', 0, currentQuery, initQuery)

      const callArgs = mockHistoryReplaceState.mock.calls[0]
      const urlString = callArgs[2] as string
      const searchParams = new URLSearchParams(urlString.split('?')[1])
      const diffJson = searchParams.get('QueryWrapper0')
      expect(diffJson).toBeTruthy()

      const diff = JSON.parse(diffJson!) as Partial<Query>
      expect(diff).toHaveProperty('selectedFacets')
      expect(diff).toHaveProperty('additionalFilters')
      expect(diff).not.toHaveProperty('sql')
      expect(diff).not.toHaveProperty('limit')
      expect(diff).not.toHaveProperty('offset')
    })
  })

  describe('getQueryRequestFromLink', () => {
    const initQuery: Query = {
      sql: 'SELECT * FROM syn123',
      limit: 25,
      offset: 0,
      selectedFacets: [],
    }

    it('should reconstruct query from diff', () => {
      const diff = { limit: 50, offset: 25 }
      window.location.search = `?QueryWrapper0=${encodeURIComponent(
        JSON.stringify(diff),
      )}`

      const result = getQueryRequestFromLink('QueryWrapper', 0, initQuery)

      expect(result).toBeDefined()
      expect(result?.query).toEqual({
        ...initQuery,
        limit: 50,
        offset: 25,
      })
    })

    it('should return undefined when no search param exists', () => {
      window.location.search = ''

      const result = getQueryRequestFromLink('QueryWrapper', 0, initQuery)

      expect(result).toBeUndefined()
    })

    it('should handle complex diffs', () => {
      const diff = {
        selectedFacets: [
          {
            columnName: 'status',
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
            facetValues: ['active'],
          },
        ],
        additionalFilters: [
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
            searchExpression: 'test',
          },
        ],
      }
      window.location.search = `?QueryWrapper0=${encodeURIComponent(
        JSON.stringify(diff),
      )}`

      const result = getQueryRequestFromLink('QueryWrapper', 0, initQuery)

      expect(result).toBeDefined()
      expect(result?.query).toEqual({
        ...initQuery,
        ...diff,
      })
    })

    it('should handle invalid JSON gracefully', () => {
      window.location.search = '?QueryWrapper0=invalid-json'

      const result = getQueryRequestFromLink('QueryWrapper', 0, initQuery)

      expect(result).toBeUndefined()
    })
  })

  describe('round-trip test', () => {
    it('should correctly store and retrieve query differences', () => {
      const initQuery: Query = {
        sql: 'SELECT * FROM syn123',
        limit: 25,
        offset: 0,
        selectedFacets: [],
      }

      const currentQuery: Query = {
        ...initQuery,
        limit: 100,
        offset: 50,
        selectedFacets: [
          {
            columnName: 'category',
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
            facetValues: ['test'],
          },
        ],
      }

      // Store the query diff
      updateUrlWithNewSearchParam('QueryWrapper', 0, currentQuery, initQuery)

      // Extract the search params that were set
      const callArgs = mockHistoryReplaceState.mock.calls[0]
      const urlString = callArgs[2] as string
      window.location.search = urlString.includes('?')
        ? '?' + urlString.split('?')[1]
        : ''

      // Retrieve the query
      const result = getQueryRequestFromLink('QueryWrapper', 0, initQuery)

      expect(result).toBeDefined()
      expect(result?.query).toEqual(currentQuery)
    })
  })
})
