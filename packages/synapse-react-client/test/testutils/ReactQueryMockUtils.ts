import {
  MutateOptions,
  QueryObserverSuccessResult,
  UseMutationResult,
  UseQueryResult,
} from 'react-query'

export function getUseQuerySuccessMock<TData>(
  data: TData,
): QueryObserverSuccessResult<TData, never> {
  return {
    data: data,
    dataUpdatedAt: Date.now(),
    error: undefined,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    failureCount: 0,
    isError: false,
    isFetched: true,
    isFetchedAfterMount: true,
    isFetching: false,
    isIdle: false,
    isLoading: false,
    isLoadingError: false,
    isPlaceholderData: false,
    isPreviousData: false,
    isRefetchError: false,
    isRefetching: false,
    isStale: false,
    isSuccess: true,
    refetch: jest.fn(),
    remove: jest.fn(),
    status: 'success',
  }
}

export function getUseQueryErrorMock(error): UseQueryResult {
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
    isIdle: false,
    isLoading: false,
    isLoadingError: false,
    isPlaceholderData: false,
    isPreviousData: false,
    isRefetchError: true,
    isRefetching: false,
    isStale: false,
    isSuccess: false,
    refetch: jest.fn(),
    remove: jest.fn(),
    status: 'error',
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
    isLoading: false,
    isPaused: false,
    isSuccess: false,
    mutate: jest.fn(),
    mutateAsync: jest.fn(),
    reset: jest.fn(),
    status: 'idle',
    variables: undefined,
  }
}
