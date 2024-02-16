import { act, renderHook, waitFor } from '@testing-library/react'
import { noop } from 'lodash-es'
import useQueryWrapperData, {
  UseQueryWrapperDataReturn,
} from './useQueryWrapperData'
import {
  QueryBundleRequest,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import { getQueryTableAsyncJobResults } from '../../synapse-client'
import { mockCompleteAsyncJob } from '../../mocks/mockFileViewQuery'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { SynapseClientError } from '../../index'

jest.mock('../../../src/synapse-client', () => ({
  getQueryTableAsyncJobResults: jest.fn(),
}))

const mockGetQueryTableAsyncJobResults = jest.mocked(
  getQueryTableAsyncJobResults,
)

const query: QueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
  entityId: 'syn123',
  partMask: 1,
  query: {
    sql: 'SELECT * FROM syn123.3 WHERE "foo"=\'bar\'',
  },
}

describe('useQueryWrapperData tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()

    mockGetQueryTableAsyncJobResults.mockImplementation(
      (_req, _token, setCurrentAsyncJobStatus) => {
        if (setCurrentAsyncJobStatus) {
          setCurrentAsyncJobStatus(mockCompleteAsyncJob)
        }
        return Promise.resolve(mockCompleteAsyncJob)
      },
    )
  })

  describe('paginated query', () => {
    it('returns paginated data and all related controls', async () => {
      const isInfinite = false
      const { result } = renderHook(
        () => useQueryWrapperData(query, isInfinite),
        { wrapper: createWrapper() },
      )

      await waitFor(() => {
        expect(result.current.data).toBeDefined()
        expect(result.current.currentAsyncStatus).toBeDefined()
        expect(result.current.error).toBeNull()
        expect(result.current.isLoadingNewBundle).toBe(false)

        // Infinite data controls should not exist on the result
        // Cast just so we can test that they are undefined
        const resultCurrentIfIsInfinite =
          result.current as UseQueryWrapperDataReturn<true>
        expect(resultCurrentIfIsInfinite.hasNextPage).toBeUndefined()
        expect(resultCurrentIfIsInfinite.fetchPreviousPage).toBeUndefined()
        expect(resultCurrentIfIsInfinite.fetchNextPage).toBeUndefined()
        expect(resultCurrentIfIsInfinite.isFetchingNextPage).toBeUndefined()
        expect(resultCurrentIfIsInfinite.currentPage).toBeUndefined()
        expect(resultCurrentIfIsInfinite.setCurrentPage).toBeUndefined()
      })
    })

    it('returns error', async () => {
      const consoleErrorSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(noop)

      const error = new SynapseClientError(
        500,
        'some error',
        expect.getState().currentTestName!,
      )

      mockGetQueryTableAsyncJobResults.mockRejectedValue(error)

      const isInfinite = false
      const { result } = renderHook(
        () => useQueryWrapperData(query, isInfinite),
        { wrapper: createWrapper() },
      )

      await waitFor(() => {
        expect(result.current.data).toBeUndefined()
        expect(result.current.currentAsyncStatus).toBeUndefined()
        expect(result.current.error).toBe(error)
        expect(result.current.isLoadingNewBundle).toBe(false)

        // Infinite data controls should not exist on the result
        // Cast just so we can test that they are undefined
        const resultCurrentIfIsInfinite =
          result.current as UseQueryWrapperDataReturn<true>
        expect(resultCurrentIfIsInfinite.hasNextPage).toBeUndefined()
        expect(resultCurrentIfIsInfinite.fetchPreviousPage).toBeUndefined()
        expect(resultCurrentIfIsInfinite.fetchNextPage).toBeUndefined()
        expect(resultCurrentIfIsInfinite.isFetchingNextPage).toBeUndefined()
        expect(resultCurrentIfIsInfinite.currentPage).toBeUndefined()
        expect(resultCurrentIfIsInfinite.setCurrentPage).toBeUndefined()
      })

      consoleErrorSpy.mockRestore()
    })
  })

  describe('infinite query', () => {
    it('returns infinite data and all related controls', async () => {
      const isInfinite = true
      const { result } = renderHook(
        () => useQueryWrapperData(query, isInfinite),
        { wrapper: createWrapper() },
      )

      await waitFor(() => {
        expect(result.current.data).toBeDefined()
        expect(result.current.currentAsyncStatus).toBeDefined()
        expect(result.current.error).toBeNull()
        expect(result.current.isLoadingNewBundle).toBe(false)

        // Infinite data controls should be present
        expect(result.current.hasNextPage).toBeDefined()
        expect(result.current.fetchPreviousPage).toBeDefined()
        expect(result.current.fetchNextPage).toBeDefined()
        expect(result.current.isFetchingNextPage).toBe(false)
        expect(result.current.currentPage).toBe(0)
        expect(result.current.setCurrentPage).toBeDefined()
      })
    })

    it('returns all pages when asked', async () => {
      const isInfinite = true
      const { result } = renderHook(
        () => useQueryWrapperData(query, isInfinite),
        { wrapper: createWrapper() },
      )

      let pageZeroData: QueryResultBundle | undefined
      await waitFor(() => {
        expect(result.current.data).toBeDefined()
        pageZeroData = result.current.data
        expect(result.current.currentAsyncStatus).toBeDefined()
        expect(result.current.error).toBeNull()
        expect(result.current.isLoadingNewBundle).toBe(false)

        // Infinite data controls should be present
        expect(result.current.hasNextPage).toBeDefined()
        expect(result.current.fetchPreviousPage).toBeDefined()
        expect(result.current.fetchNextPage).toBeDefined()
        expect(result.current.isFetchingNextPage).toBe(false)
        expect(result.current.currentPage).toBe(0)
        expect(result.current.setCurrentPage).toBeDefined()
      })

      act(() => {
        result.current.setCurrentPage('ALL')
      })

      await waitFor(() => {
        expect(result.current.data).not.toBe(pageZeroData)
        expect(result.current.currentPage).toBe('ALL')
      })
    })

    it('returns error', async () => {
      const consoleErrorSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(noop)

      const error = new SynapseClientError(
        500,
        'some error',
        expect.getState().currentTestName!,
      )

      mockGetQueryTableAsyncJobResults.mockRejectedValue(error)

      const isInfinite = true
      const { result } = renderHook(
        () => useQueryWrapperData(query, isInfinite),
        { wrapper: createWrapper() },
      )

      await waitFor(() => {
        expect(result.current.data).toBeUndefined()
        expect(result.current.currentAsyncStatus).toBeUndefined()
        expect(result.current.error).toBe(error)
        expect(result.current.isLoadingNewBundle).toBe(false)

        expect(result.current.hasNextPage).toBe(false)
        expect(result.current.currentPage).toBe(0)
        expect(result.current.setCurrentPage).toBeDefined()
        expect(result.current.isFetchingNextPage).toBe(false)
        expect(result.current.fetchNextPage).toBeDefined()
        expect(result.current.fetchPreviousPage).toBeDefined()
      })

      consoleErrorSpy.mockRestore()
    })
  })
})
