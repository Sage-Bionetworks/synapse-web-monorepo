import {
  mockQueryBundleRequest,
  mockQueryResultBundle,
} from '@/mocks/mockFileViewQuery'

import { registerTableQueryResult } from '@/mocks/msw/handlers/tableQueryService'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { act, renderHook as _renderHook, waitFor } from '@testing-library/react'
import { QueryWrapper } from '../QueryWrapper'
import { useRowSet } from './UseRowSet'

describe('UseRowSet', () => {
  beforeAll(() => {
    server.listen()
    registerTableQueryResult(
      mockQueryBundleRequest.query,
      mockQueryResultBundle,
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())
  function renderHook(isInfinite: boolean, initialLimit?: number) {
    return _renderHook(() => useRowSet(initialLimit), {
      wrapper: ({ children }) => {
        const Wrapper = createWrapper()
        return (
          <Wrapper>
            <QueryWrapper
              initQueryRequest={{
                ...mockQueryBundleRequest,
                query: {
                  ...mockQueryBundleRequest.query,
                  limit: 5,
                  offset: 0,
                },
              }}
              isInfinite={isInfinite}
            >
              {children}
            </QueryWrapper>
          </Wrapper>
        )
      },
    })
  }

  describe('paginated', () => {
    it('Returns a rowSet for a page of data', async () => {
      const isInfinite = false

      const hook = renderHook(isInfinite)

      expect(hook.result.current.rowSet).toBe(undefined)

      const firstFiveResults = {
        ...mockQueryResultBundle.queryResult.queryResults,
        rows: mockQueryResultBundle.queryResult.queryResults.rows.slice(0, 5),
      }

      await waitFor(() => {
        expect(hook.result.current.rowSet).toEqual(firstFiveResults)
        expect(hook.result.current.isLoadingNewPage).toBe(false)
      })

      expect(hook.result.current.hasNextPageOfInfiniteData).toBe(false)
      expect(hook.result.current.isLoading).toBe(false)
      expect(hook.result.current.isLoadingNewPage).toBe(false)
    })
  })

  describe('infinite', () => {
    it('Returns a rowSet for an infinite page of data', async () => {
      const isInfinite = true

      const hook = renderHook(isInfinite)

      const firstFiveResults = {
        ...mockQueryResultBundle.queryResult.queryResults,
        rows: mockQueryResultBundle.queryResult.queryResults.rows.slice(0, 5),
      }
      const firstTenResults = {
        ...mockQueryResultBundle.queryResult.queryResults,
        rows: mockQueryResultBundle.queryResult.queryResults.rows.slice(0, 10),
      }

      await waitFor(() => {
        expect(hook.result.current.rowSet).toEqual(firstFiveResults)
        expect(hook.result.current.isLoadingNewPage).toBe(false)
      })

      expect(hook.result.current.hasNextPageOfInfiniteData).toBe(true)
      expect(hook.result.current.isLoading).toBe(false)
      expect(hook.result.current.isLoadingNewPage).toBe(false)

      // Fetch an additional page
      act(() => {
        hook.result.current.fetchNextPageOfInfiniteData()
      })
      await waitFor(() => {
        expect(hook.result.current.rowSet).toEqual(firstTenResults)
      })
      expect(hook.result.current.isLoading).toBe(false)
      expect(hook.result.current.isLoadingNewPage).toBe(false)
    })

    it('Can apply an initial limit to infinite data', async () => {
      const isInfinite = true
      const initialLimit = 3
      const hook = renderHook(isInfinite, initialLimit)

      const firstThreeResults = {
        ...mockQueryResultBundle.queryResult.queryResults,
        rows: mockQueryResultBundle.queryResult.queryResults.rows.slice(
          0,
          initialLimit,
        ),
      }

      await waitFor(() => {
        expect(hook.result.current.rowSet).toEqual(firstThreeResults)
        expect(hook.result.current.isLoading).toBe(false)
        expect(hook.result.current.isLoadingNewPage).toBe(false)
      })
    })
  })
})
