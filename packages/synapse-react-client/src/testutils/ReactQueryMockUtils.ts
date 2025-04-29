import {
  QueryObserverLoadingResult,
  QueryObserverSuccessResult,
  UseInfiniteQueryResult,
  UseMutationResult,
  UseQueryResult,
} from '@tanstack/react-query'

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
    refetch: jest.fn(),
    status: 'success',
    failureReason: null,
    fetchStatus: 'idle',
    isInitialLoading: false,
    isPaused: false,
    isPending: false,
  }
}

export function getUseQueryLoadingMock<TData>(): QueryObserverLoadingResult<
  TData,
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
    refetch: jest.fn(),
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
    refetch: jest.fn(),
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
    refetch: jest.fn(),
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
    mutate: jest.fn(),
    mutateAsync: jest.fn().mockResolvedValue(data),
    reset: jest.fn(),
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
    mutate: jest.fn(),
    mutateAsync: jest.fn().mockResolvedValue(data),
    reset: jest.fn(),
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
    fetchNextPage: jest.fn(),
    fetchPreviousPage: jest.fn(),
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
    refetch: jest.fn(),
    fetchStatus: 'idle',
  } satisfies UseInfiniteQueryResult<{ pages: TData[] }, never>
}
