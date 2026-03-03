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

    it('should store compressed diff when queries differ', async () => {
      const currentQuery: Query = {
        ...initQuery,
        limit: 50,
        offset: 25,
      }

      await updateUrlWithNewSearchParam('qw', 0, currentQuery, initQuery)

      // Verify the call was made
      expect(mockHistoryReplaceState).toHaveBeenCalled()

      // Extract and verify the URL
      const callArgs = mockHistoryReplaceState.mock.calls[0]
      const urlString = callArgs[2] as string
      expect(urlString).toContain('/test?qw0=')

      // The value should be base64-encoded compressed data
      const searchParams = new URLSearchParams(urlString.split('?')[1])
      const compressedValue = searchParams.get('qw0')
      expect(compressedValue).toBeTruthy()
      // Should be base64 encoded (only contains valid base64 characters)
      expect(compressedValue).toMatch(/^[A-Za-z0-9+/=]+$/)
    })

    it('should remove the search param when queries are equal', async () => {
      await updateUrlWithNewSearchParam('qw', 0, initQuery, initQuery)

      expect(mockHistoryReplaceState).toHaveBeenCalledWith(null, '', '/test')
    })

    it('should remove the search param when currentQuery is null', async () => {
      await updateUrlWithNewSearchParam('qw', 0, null, initQuery)

      expect(mockHistoryReplaceState).toHaveBeenCalledWith(null, '', '/test')
    })

    it('should handle complex query differences', async () => {
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

      await updateUrlWithNewSearchParam('qw', 0, currentQuery, initQuery)

      const callArgs = mockHistoryReplaceState.mock.calls[0]
      const urlString = callArgs[2] as string
      const searchParams = new URLSearchParams(urlString.split('?')[1])
      const compressedValue = searchParams.get('qw0')
      expect(compressedValue).toBeTruthy()
      // Should be base64 encoded
      expect(compressedValue).toMatch(/^[A-Za-z0-9+/=]+$/)
    })

    it('should demonstrate compression reduces size significantly', async () => {
      const currentQuery: Query = {
        ...initQuery,
        limit: 100,
        offset: 50,
        selectedFacets: [
          {
            columnName: 'category',
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
            facetValues: ['value1', 'value2', 'value3'],
          },
          {
            columnName: 'status',
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
            facetValues: ['active', 'inactive'],
          },
        ],
        additionalFilters: [
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
            searchExpression: 'test query with multiple words',
          },
        ],
      }

      await updateUrlWithNewSearchParam('qw', 0, currentQuery, initQuery)

      const callArgs = mockHistoryReplaceState.mock.calls[0]
      const urlString = callArgs[2] as string
      const searchParams = new URLSearchParams(urlString.split('?')[1])
      const compressedValue = searchParams.get('qw0')!

      // Compute what the uncompressed diff would look like
      const diff = {
        limit: 100,
        offset: 50,
        selectedFacets: currentQuery.selectedFacets,
        additionalFilters: currentQuery.additionalFilters,
      }
      const uncompressedJson = JSON.stringify(diff)

      // Log for debugging
      console.log('Uncompressed size:', uncompressedJson.length)
      console.log('Compressed size:', compressedValue.length)
      console.log(
        'Compression ratio:',
        ((1 - compressedValue.length / uncompressedJson.length) * 100).toFixed(
          1,
        ) + '%',
      )

      // Compression should reduce size (even modest reduction is valuable)
      // Note: Small payloads may not compress as well due to gzip overhead
      expect(compressedValue.length).toBeLessThan(uncompressedJson.length)
    })
  })

  describe('getQueryRequestFromLink', () => {
    const initQuery: Query = {
      sql: 'SELECT * FROM syn123',
      limit: 25,
      offset: 0,
      selectedFacets: [],
    }

    it('should reconstruct query from compressed diff', async () => {
      const diff = { limit: 50, offset: 25 }

      // We need to compress and encode the diff the same way updateUrlWithNewSearchParam does
      const jsonString = JSON.stringify(diff)
      const encoder = new TextEncoder()
      const data = encoder.encode(jsonString)
      const stream = new Response(data).body!.pipeThrough(
        new CompressionStream('gzip'),
      )
      const compressedData = await new Response(stream).arrayBuffer()
      const base64 = btoa(
        String.fromCharCode(...new Uint8Array(compressedData)),
      )

      window.location.search = `?qw0=${encodeURIComponent(base64)}`

      const result = await getQueryRequestFromLink('qw', 0, initQuery)

      expect(result).toBeDefined()
      expect(result?.query).toEqual({
        ...initQuery,
        limit: 50,
        offset: 25,
      })
    })

    it('should return undefined when no search param exists', async () => {
      window.location.search = ''

      const result = await getQueryRequestFromLink('qw', 0, initQuery)

      expect(result).toBeUndefined()
    })

    it('should handle complex diffs', async () => {
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

      // Compress and encode the diff
      const jsonString = JSON.stringify(diff)
      const encoder = new TextEncoder()
      const data = encoder.encode(jsonString)
      const stream = new Response(data).body!.pipeThrough(
        new CompressionStream('gzip'),
      )
      const compressedData = await new Response(stream).arrayBuffer()
      const base64 = btoa(
        String.fromCharCode(...new Uint8Array(compressedData)),
      )

      window.location.search = `?qw0=${encodeURIComponent(base64)}`

      const result = await getQueryRequestFromLink('qw', 0, initQuery)

      expect(result).toBeDefined()
      expect(result?.query).toEqual({
        ...initQuery,
        ...diff,
      })
    })

    it('should handle invalid data gracefully', async () => {
      window.location.search = '?qw0=invalid-base64'

      const result = await getQueryRequestFromLink('qw', 0, initQuery)

      expect(result).toBeUndefined()
    })
  })

  describe('round-trip test', () => {
    it('should correctly store and retrieve query differences with compression', async () => {
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
      await updateUrlWithNewSearchParam('qw', 0, currentQuery, initQuery)

      // Extract the search params that were set
      const callArgs = mockHistoryReplaceState.mock.calls[0]
      const urlString = callArgs[2] as string
      window.location.search = urlString.includes('?')
        ? '?' + urlString.split('?')[1]
        : ''

      // Retrieve the query
      const result = await getQueryRequestFromLink('qw', 0, initQuery)

      expect(result).toBeDefined()
      expect(result?.query).toEqual(currentQuery)
    })
  })
})
