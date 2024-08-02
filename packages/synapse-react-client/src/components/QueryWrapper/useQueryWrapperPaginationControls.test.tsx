import { act, renderHook, waitFor } from '@testing-library/react'
import { UseQueryWrapperDataReturn } from './useQueryWrapperData'
import {
  mockCompleteAsyncJob,
  mockQueryBundleRequest,
  mockQueryResultBundle,
} from '../../mocks/mockFileViewQuery'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { useQueryWrapperPaginationControls } from './useQueryWrapperPaginationControls'
import { ImmutableTableQueryResult } from '../../utils/hooks/useImmutableTableQuery/useImmutableTableQuery'

describe('useQueryWrapperPaginationControls tests', () => {
  const immutableTableQueryResult: ImmutableTableQueryResult = {
    currentPage: 1,
    entityId: 'syn123',
    currentQueryRequest: mockQueryBundleRequest,
    nextQueryRequest: mockQueryBundleRequest,
    commitChanges: jest.fn(),
    getInitQueryRequest: jest.fn(),
    getCurrentQueryRequest: jest.fn(),
    goToPage: jest.fn(),
    isConfirmingChange: false,
    onCancelChange: jest.fn(),
    onConfirmChange: jest.fn(),
    pageSize: 10,
    removeQueryFilter: jest.fn(),
    addValueToSelectedFacet: jest.fn(),
    setRangeFacetValue: jest.fn(),
    removeSelectedFacet: jest.fn(),
    removeValueFromQueryFilter: jest.fn(),
    removeValueFromSelectedFacet: jest.fn(),
    resetQuery: jest.fn(),
    setPageSize: jest.fn(),
    setQuery: jest.fn(),
    resetDebounceTimer: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('paginated query', () => {
    const queryWrapperData: UseQueryWrapperDataReturn<false> = {
      data: mockQueryResultBundle,
      currentAsyncStatus: mockCompleteAsyncJob,
      error: null,
      isLoadingNewBundle: false,
    }

    it('returns pagination controls', async () => {
      const isInfinite = false
      const { result } = renderHook(
        () =>
          useQueryWrapperPaginationControls({
            immutableTableQueryResult,
            queryWrapperData,
            isInfinite,
          }),
        { wrapper: createWrapper() },
      )

      await waitFor(() => {
        expect(result.current.currentPage).toBe(
          immutableTableQueryResult.currentPage,
        )
        expect(result.current.goToPage).toBe(immutableTableQueryResult.goToPage)
        expect(result.current.pageSize).toBe(immutableTableQueryResult.pageSize)
        expect(result.current.setPageSize).toBe(
          immutableTableQueryResult.setPageSize,
        )
      })
    })
  })

  describe('infinite query', () => {
    const queryWrapperData: UseQueryWrapperDataReturn<true> = {
      data: mockQueryResultBundle,
      currentAsyncStatus: mockCompleteAsyncJob,
      error: null,
      isLoadingNewBundle: false,
      currentPage: 'ALL',
      fetchNextPage: jest.fn().mockResolvedValue(undefined),
      fetchPreviousPage: jest.fn(),
      hasNextPage: true,
      hasPreviousPage: false,
      isFetchingNextPage: false,
      setCurrentPage: jest.fn(),
    }

    it('returns pagination controls', async () => {
      const isInfinite = true
      const { result } = renderHook(
        () =>
          useQueryWrapperPaginationControls({
            immutableTableQueryResult,
            queryWrapperData,
            isInfinite,
          }),
        { wrapper: createWrapper() },
      )

      await waitFor(() => {
        expect(result.current.hasNextPage).toBe(queryWrapperData.hasNextPage)
        expect(result.current.isLoadingNewPage).toBe(
          queryWrapperData.isFetchingNextPage,
        )
        expect(result.current.hasPreviousPage).toBe(
          queryWrapperData.hasPreviousPage,
        )

        expect(result.current.appendNextPageToResults).toBeDefined()
        expect(result.current.goToNextPage).toBeDefined()
        expect(result.current.goToPreviousPage).toBeDefined()
      })
    })

    describe('appendNextPageToResults', () => {
      it('calls fetchNextPage and updates currentPage', async () => {
        const isInfinite = true
        const { result } = renderHook(
          () =>
            useQueryWrapperPaginationControls({
              immutableTableQueryResult,
              queryWrapperData,
              isInfinite,
            }),
          { wrapper: createWrapper() },
        )
        await waitFor(() => {
          expect(result.current.appendNextPageToResults).toBeDefined()
        })

        act(() => {
          result.current.appendNextPageToResults()
        })

        await waitFor(() => {
          expect(queryWrapperData.fetchNextPage).toHaveBeenCalled()
          expect(queryWrapperData.setCurrentPage).toHaveBeenCalledWith('ALL')
        })
      })
      it('throws error when there is no next page', async () => {
        const isInfinite = true
        const { result } = renderHook(
          () =>
            useQueryWrapperPaginationControls({
              immutableTableQueryResult,
              queryWrapperData: {
                ...queryWrapperData,
                hasNextPage: false,
              },
              isInfinite,
            }),
          { wrapper: createWrapper() },
        )
        await waitFor(() => {
          expect(result.current.appendNextPageToResults).toBeDefined()
        })

        await expect(async () => {
          await result.current.appendNextPageToResults()
        }).rejects.toThrow()
      })
    })

    describe('goToNextPage', () => {
      it('calls fetchNextPage and updates currentPage', async () => {
        const isInfinite = true
        const { result } = renderHook(
          () =>
            useQueryWrapperPaginationControls({
              immutableTableQueryResult,
              queryWrapperData: {
                ...queryWrapperData,
                currentPage: 5,
                hasNextPage: true,
              },
              isInfinite,
            }),
          { wrapper: createWrapper() },
        )
        await waitFor(() => {
          expect(result.current.goToNextPage).toBeDefined()
        })

        act(() => {
          result.current.goToNextPage()
        })

        await waitFor(() => {
          expect(queryWrapperData.fetchNextPage).toHaveBeenCalled()
          expect(queryWrapperData.setCurrentPage).toHaveBeenCalledWith(6)
        })
      })
      it('throws error when there is no next page', async () => {
        const isInfinite = true
        const { result } = renderHook(
          () =>
            useQueryWrapperPaginationControls({
              immutableTableQueryResult,
              queryWrapperData: {
                ...queryWrapperData,
                currentPage: 5,
                hasNextPage: false,
              },
              isInfinite,
            }),
          { wrapper: createWrapper() },
        )
        await waitFor(() => {
          expect(result.current.goToNextPage).toBeDefined()
        })

        await expect(async () => {
          await result.current.goToNextPage()
        }).rejects.toThrow()
      })
      it('throws error when called if showing all pages', async () => {
        const isInfinite = true
        const { result } = renderHook(
          () =>
            useQueryWrapperPaginationControls({
              immutableTableQueryResult,
              queryWrapperData: {
                ...queryWrapperData,
                currentPage: 'ALL',
                hasNextPage: true,
              },
              isInfinite,
            }),
          { wrapper: createWrapper() },
        )
        await waitFor(() => {
          expect(result.current.goToNextPage).toBeDefined()
        })

        await expect(async () => {
          await result.current.goToNextPage()
        }).rejects.toThrow()
      })
    })

    describe('goToPreviousPage', () => {
      it('calls fetchPreviousPage and updates currentPage', async () => {
        const isInfinite = true
        const { result } = renderHook(
          () =>
            useQueryWrapperPaginationControls({
              immutableTableQueryResult,
              queryWrapperData: {
                ...queryWrapperData,
                currentPage: 5,
                hasPreviousPage: true,
              },
              isInfinite,
            }),
          { wrapper: createWrapper() },
        )
        await waitFor(() => {
          expect(result.current.goToPreviousPage).toBeDefined()
        })

        act(() => {
          result.current.goToPreviousPage()
        })

        await waitFor(() => {
          expect(queryWrapperData.fetchPreviousPage).toHaveBeenCalled()
          expect(queryWrapperData.setCurrentPage).toHaveBeenCalledWith(4)
        })
      })
      it('throws error when there is no previous page', async () => {
        const isInfinite = true
        const { result } = renderHook(
          () =>
            useQueryWrapperPaginationControls({
              immutableTableQueryResult,
              queryWrapperData: {
                ...queryWrapperData,
                currentPage: 0,
                hasPreviousPage: false,
              },
              isInfinite,
            }),
          { wrapper: createWrapper() },
        )
        await waitFor(() => {
          expect(result.current.goToPreviousPage).toBeDefined()
        })

        await expect(async () => {
          await result.current.goToPreviousPage()
        }).rejects.toThrow()
      })
      it('throws error when called if showing all pages', async () => {
        const isInfinite = true
        const { result } = renderHook(
          () =>
            useQueryWrapperPaginationControls({
              immutableTableQueryResult,
              queryWrapperData: {
                ...queryWrapperData,
                currentPage: 'ALL',
                hasPreviousPage: true,
              },
              isInfinite,
            }),
          { wrapper: createWrapper() },
        )
        await waitFor(() => {
          expect(result.current.goToPreviousPage).toBeDefined()
        })

        await expect(async () => {
          await result.current.goToPreviousPage()
        }).rejects.toThrow()
      })
    })
  })
})
