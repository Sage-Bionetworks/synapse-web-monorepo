import {
  QueryObserverLoadingResult,
  QueryObserverSuccessResult,
  UseInfiniteQueryResult,
  UseMutationResult,
  UseQueryResult,
} from '@tanstack/react-query'
import noop from 'lodash-es/noop'
import { Dispatch, SetStateAction, useState } from 'react'

export function getUseQuerySuccessMock<TData>(
  data: TData,
): QueryObserverSuccessResult<TData, never> {
  return {
    data: data,
    dataUpdatedAt: Date.now(),
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    failureCount: 0,
    isError: false,
    isFetched: true,
    isFetchedAfterMount: true,
    isFetching: false,
    isLoading: false,
    isLoadingError: false,
    isPlaceholderData: false,
    isRefetchError: false,
    isRefetching: false,
    isStale: false,
    isSuccess: true,
    refetch: noop as any,
    status: 'success',
    failureReason: null,
    fetchStatus: 'idle',
    isInitialLoading: false,
    isPaused: false,
    isPending: false,
  }
}

export function getUseQueryLoadingMock(): QueryObserverLoadingResult<
  never,
  never
> {
  return {
    data: undefined,
    dataUpdatedAt: Date.now(),
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    failureCount: 0,
    isError: false,
    isFetched: true,
    isFetchedAfterMount: true,
    isFetching: true,
    isLoading: true,
    isLoadingError: false,
    isPlaceholderData: false,
    isRefetchError: false,
    isRefetching: false,
    isStale: false,
    isSuccess: false,
    refetch: noop as any,
    status: 'pending',
    failureReason: null,
    fetchStatus: 'fetching',
    isPending: true,
    isInitialLoading: true,
    isPaused: false,
  }
}

export function getUseQueryErrorMock<TError>(
  error: TError,
): UseQueryResult<never, TError> {
  return {
    data: undefined,
    dataUpdatedAt: 0,
    error: error,
    errorUpdateCount: 1,
    errorUpdatedAt: Date.now(),
    failureCount: 1,
    isError: true,
    isFetched: false,
    isFetchedAfterMount: true,
    isFetching: false,
    isLoadingError: true,
    isPlaceholderData: false,
    isRefetchError: false,
    isRefetching: false,
    isStale: false,
    isSuccess: false,
    refetch: vi.fn(),
    status: 'error',
    failureReason: null,
    fetchStatus: 'idle',
    isInitialLoading: false,
    isPaused: false,
    isLoading: false,
    isPending: false,
  }
}

/**
 * Mock for useQuery with status 'idle', e.g. when the query is disabled.
 */
export function getUseQueryIdleMock(): UseQueryResult<never, never> {
  return {
    data: undefined,
    dataUpdatedAt: 0,
    error: null,
    errorUpdateCount: 1,
    errorUpdatedAt: Date.now(),
    failureCount: 1,
    isError: false,
    isFetched: false,
    isFetchedAfterMount: false,
    isFetching: false,
    isLoadingError: false,
    isPlaceholderData: false,
    isRefetchError: false,
    isRefetching: false,
    isStale: false,
    isSuccess: false,
    refetch: noop as any,
    status: 'pending',
    failureReason: null,
    fetchStatus: 'idle',
    isInitialLoading: false,
    isPaused: true,
    isLoading: false,
    isPending: true,
  }
}

export function getUseMutationMock<TData = any, TError = any, TVariables = any>(
  data?: TData,
) {
  return {
    context: undefined,
    data: undefined,
    error: null,
    failureCount: 0,
    isError: false,
    isIdle: true,
    isPaused: false,
    isSuccess: false,
    mutate: vi.fn(),
    mutateAsync: vi.fn().mockResolvedValue(data),
    reset: vi.fn(),
    status: 'idle',
    variables: undefined,
    failureReason: null,
    isPending: false,
    submittedAt: 0,
  } satisfies UseMutationResult<TData, TError, TVariables>
}

export function getUseMutationPendingMock<
  TData = any,
  TError = any,
  TVariables = any,
>(data?: TData, variables?: TVariables) {
  return {
    context: undefined,
    data: undefined,
    error: null,
    failureCount: 0,
    isError: false,
    isIdle: false,
    isPaused: false,
    isSuccess: false,
    mutate: vi.fn(),
    mutateAsync: vi.fn().mockResolvedValue(data),
    reset: vi.fn(),
    status: 'pending',
    variables: variables!,
    failureReason: null,
    isPending: true,
    submittedAt: 0,
  } satisfies UseMutationResult<TData, TError, TVariables>
}

export function getUseInfiniteQuerySuccessMock<TData>(
  pages: TData[],
  hasNextPage = false,
) {
  return {
    data: {
      pages: pages,
    },
    error: null,
    isError: false,
    isPending: false,
    isLoading: false,
    isLoadingError: false,
    isRefetchError: false,
    isSuccess: true,
    status: 'success',
    fetchNextPage: vi.fn(),
    fetchPreviousPage: vi.fn(),
    hasNextPage: hasNextPage,
    hasPreviousPage: false,
    isFetchingNextPage: false,
    isFetchingPreviousPage: false,
    dataUpdatedAt: 0,
    errorUpdatedAt: 0,
    failureCount: 0,
    failureReason: null,
    errorUpdateCount: 0,
    isFetched: false,
    isFetchedAfterMount: false,
    isFetching: false,
    isInitialLoading: false,
    isPaused: false,
    isPlaceholderData: false,
    isRefetching: false,
    isStale: false,
    refetch: vi.fn(),
    fetchStatus: 'idle',
  } satisfies UseInfiniteQueryResult<{ pages: TData[] }, never>
}

/**
 * Returns a mock instance for useInfiniteQuery, as well as functions to manipulate the mock hook's state, and
 * mock functions for fetchNextPage, fetchPreviousPage, and refetch.
 *
 * Example usage:
 * ```tsx
 * const { mock, setSuccess } = getUseInfiniteQueryMock<MyDataType, MyErrorType>();
 *
 * // Set the mock implementation
 * myMockedHook.mockImplementation(mock);
 * // Update the hook's state to success with data
 * act(() => { myMockedHook.setSuccess(myDataArray, true); });
 * ```
 */
export function getUseInfiniteQueryMock<TData = unknown, TError = unknown>() {
  // Stable mock functions
  const mockFetchNextPage = vi.fn()
  const mockFetchPreviousPage = vi.fn()
  const mockRefetch = vi.fn()

  let currentSetValue: Dispatch<
    SetStateAction<UseInfiniteQueryResult<{ pages: TData[] }, TError>>
  > | null = null

  const setSuccess = (data: TData[], hasNextPage = false) => {
    if (currentSetValue) {
      const successState: UseInfiniteQueryResult<{ pages: TData[] }, TError> = {
        data: { pages: data },
        hasNextPage: hasNextPage,
        status: 'success',
        isSuccess: true,
        isPending: false,
        isLoading: false,
        isError: false,
        error: null,
        isFetched: true,
        isFetchedAfterMount: true,
        isFetching: false,
        isInitialLoading: false,
        isLoadingError: false,
        isRefetchError: false,
        isRefetching: false,
        fetchStatus: 'idle',
        isPaused: false,
        dataUpdatedAt: Date.now(),
        errorUpdatedAt: 0,
        errorUpdateCount: 0,
        failureCount: 0,
        failureReason: null,
        fetchNextPage: mockFetchNextPage,
        fetchPreviousPage: mockFetchPreviousPage,
        refetch: mockRefetch,
        hasPreviousPage: false, // Or make this controllable
        isFetchingNextPage: false,
        isFetchingPreviousPage: false,
        isPlaceholderData: false,
        isStale: false,
      }
      currentSetValue(successState)
    } else {
      console.warn(
        'setSuccess called before mock query was rendered or setValue was captured.',
      )
    }
  }
  // let setError: (error: TError) => void = () => {}
  // let setLoading: () => void = () => {}
  const mock = function useMockInfiniteQuery() {
    const [value, setValue] = useState<
      UseInfiniteQueryResult<{ pages: TData[] }, TError>
    >({
      data: undefined,
      fetchStatus: 'idle',
      dataUpdatedAt: 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: null,
      fetchNextPage: mockFetchNextPage,
      fetchPreviousPage: mockFetchPreviousPage,
      hasNextPage: false,
      hasPreviousPage: false,
      isError: false,
      isFetched: false,
      isFetchedAfterMount: false,
      isFetching: false,
      isFetchingNextPage: false,
      isFetchingPreviousPage: false,
      isInitialLoading: false,
      isLoading: true,
      isLoadingError: false,
      isPaused: false,
      isPending: true,
      isPlaceholderData: false,
      isRefetchError: false,
      isRefetching: false,
      isStale: false,
      isSuccess: false,
      refetch: mockRefetch,
      status: 'pending',
    })

    currentSetValue = setValue

    return value
  }
  return {
    mock: mock,
    mockFetchNextPage: mockFetchNextPage,
    setSuccess,
    // setError,
    // setLoading,
  }
}

// What methods do I want to manipulate the mock?
// - setSuccess(data)
// - setError(error)
// - setLoading()
