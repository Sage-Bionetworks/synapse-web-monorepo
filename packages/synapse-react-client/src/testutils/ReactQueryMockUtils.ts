import {
  QueryObserverLoadingResult,
  QueryObserverSuccessResult,
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
): UseQueryResult<null, TError> {
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

export function getUseMutationMock<TData, TError, TVariables>(
  data: TData,
): UseMutationResult<TData, TError, TVariables> {
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
    mutateAsync: jest.fn(),
    reset: jest.fn(),
    status: 'idle',
    variables: undefined,
    failureReason: null,
    isPending: false,
    submittedAt: 0,
  }
}
