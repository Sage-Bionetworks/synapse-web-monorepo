import type { InfiniteData } from '@tanstack/query-core'
import {
  QueryObserverLoadingResult,
  QueryObserverSuccessResult,
  UseInfiniteQueryResult,
  UseMutationResult,
  UseQueryResult,
} from '@tanstack/react-query'
import noop from 'lodash-es/noop'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

/**
 * Returns a mock instance for useQuery, as well as functions to manipulate the mock hook's state, and
 * mocks for function(s) returned by the hook.
 *
 * Example usage:
 * ```tsx
 * const { mock, setSuccess } = getUseQueryMock<MyDataType, MyErrorType>();
 *
 * // Set the mock implementation
 * myMockedHook.mockImplementation(mock);
 *
 * // ...optionally verify a loading state in your component/hook
 *
 * // Update the hook's state to success with data
 * act(() => { myMockedHook.setSuccess(myDataArray, true); });
 * ```
 */
export function getUseQueryMock<TData = unknown, TError = unknown>() {
  // Stable mock functions
  const mockRefetch = vi.fn()

  let currentSetValue: Dispatch<
    SetStateAction<UseQueryResult<TData, TError>>
  > | null = null

  const setSuccess = (data: TData) => {
    if (currentSetValue) {
      const successState: UseQueryResult<TData, TError> = {
        data: data,
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
        refetch: mockRefetch,
        isPlaceholderData: false,
        isStale: false,
        promise: Promise.resolve(data),
      }

      currentSetValue(successState)
    } else {
      console.warn(
        'setSuccess called before mock query was rendered or setValue was captured.',
      )
    }
  }

  const setError = (error: TError) => {
    if (currentSetValue) {
      const errorState: UseQueryResult<TData, TError> = {
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
        refetch: mockRefetch,
        status: 'error',
        failureReason: null,
        fetchStatus: 'idle',
        isInitialLoading: false,
        isPaused: false,
        isLoading: false,
        isPending: false,
        promise: new Promise(() => {}),
      }

      currentSetValue(errorState)
    } else {
      console.warn(
        'setError called before mock query was rendered or setValue was captured.',
      )
    }
  }

  const setLoading = () => {
    if (currentSetValue) {
      const loadingState: UseQueryResult<TData, TError> = {
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
        refetch: mockRefetch,
        status: 'pending',
        failureReason: null,
        fetchStatus: 'fetching',
        isPending: true,
        isInitialLoading: true,
        isPaused: false,
        promise: new Promise(() => {}),
      }

      currentSetValue(loadingState)
    } else {
      console.warn(
        'setError called before mock query was rendered or setValue was captured.',
      )
    }
  }

  function setIdle() {
    if (currentSetValue) {
      const idleState: UseQueryResult<TData, TError> = {
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
        refetch: mockRefetch,
        status: 'pending',
        failureReason: null,
        fetchStatus: 'idle',
        isInitialLoading: false,
        isPaused: true,
        isLoading: false,
        isPending: true,
        promise: new Promise(() => {}),
      }
      currentSetValue(idleState)
    } else {
      console.warn(
        'setIdle called before mock query was rendered or setValue was captured.',
      )
    }
  }

  const mock = vi.fn(function useQueryMocked() {
    const [value, setValue] = useState<UseQueryResult<TData, TError>>({
      data: undefined,
      fetchStatus: 'fetching',
      dataUpdatedAt: 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: null,
      isError: false,
      isFetched: false,
      isFetchedAfterMount: false,
      isFetching: false,
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
      promise: new Promise(() => {}),
    })

    currentSetValue = setValue

    return value
  })
  return {
    mock: mock,
    mockRefetch: mockRefetch,
    setSuccess,
    setError,
    setLoading,
    setIdle,
  }
}

/**
 * @deprecated Use {@link getUseQueryMock} instead, which provides utilities to dynamically change the state of the mock hook.
 */
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
    promise: Promise.resolve(data),
  }
}

/**
 * @deprecated Use {@link getUseQueryMock} instead, which provides utilities to dynamically change the state of the mock hook.
 */
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
    promise: new Promise(() => {}),
  }
}

/**
 * @deprecated Use {@link getUseQueryMock} instead, which provides utilities to dynamically change the state of the mock hook.
 */
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
    promise: undefined as any,
  }
}

/**
 * @deprecated Use {@link getUseQueryMock} instead, which provides utilities to dynamically change the state of the mock hook.
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
    promise: new Promise(() => {}),
  }
}

/**
 * Returns a mock instance for useMutation, as well as functions to manipulate the mock hook's state, and
 * mocks for function(s) returned by the hook.
 *
 * Example usage:
 * ```tsx
 * const { mock, setPending, setSuccess, mockMutate } = getUseMutationMockImpl<MyDataType, MyErrorType, MyVarsType>();
 *
 * // Set the mock implementation
 * myMockedHook.mockImplementation(mock);
 *
 * // ...trigger the mutation using your component/hook interface, then
 * expect(mockMutate).toHaveBeenCalledWith(expectedVars);
 * act(() => { setPending(); })
 *
 * // ...verify the pending state in your component/hook, then resolve the mutation
 *
 *
 * // Update the hook's state to success with data
 * act(() => { myMockedHook.setSuccess(myDataArray, true); });
 * ```
 */
export function getUseMutationMock<
  TData = unknown,
  TError = unknown,
  TVariables = unknown,
>() {
  let currentSetValue: Dispatch<
    SetStateAction<UseMutationResult<TData, TError, TVariables>>
  > | null = null

  function setVars(vars: TVariables) {
    if (currentSetValue) {
      currentSetValue(
        prevState =>
          ({
            ...prevState,
            variables: vars,
          } as UseMutationResult<TData, TError, TVariables>),
      )
    } else {
      console.warn(
        'mutate or mutateAsync called before mock mutation was rendered or setValue was captured.',
      )
    }
  }

  // Stable mock functions
  const mockMutate = vi.fn()
  const mockMutateAsync = vi.fn()
  const mockReset = vi.fn()
  const variables =
    mockMutate.mock.lastCall?.[0] || mockMutateAsync.mock.lastCall?.[0]

  function mutate(vars: TVariables): void {
    setVars(vars)
    return mockMutate(vars)
  }

  function mutateAsync(vars: TVariables): Promise<TData> {
    setVars(vars)
    return mockMutateAsync(vars)
  }

  const setSuccess = (data: TData) => {
    if (currentSetValue) {
      const successState: UseMutationResult<TData, TError, TVariables> = {
        data: data,
        mutate,
        mutateAsync,
        reset: mockReset,
        context: undefined,
        error: null,
        failureCount: 0,
        isError: false,
        isIdle: false,
        isPaused: false,
        isSuccess: true,
        status: 'success',
        variables: variables!,
        failureReason: null,
        isPending: false,
        submittedAt: 0,
      }

      currentSetValue(
        prev =>
          ({ ...successState, variables: prev.variables } as UseMutationResult<
            TData,
            TError,
            TVariables
          >),
      )
    } else {
      console.warn(
        'setSuccess called before mock mutation was rendered or setValue was captured.',
      )
    }
  }

  const setError = (error: TError) => {
    if (currentSetValue) {
      const errorState: UseMutationResult<TData, TError, TVariables> = {
        error: error,
        data: undefined,
        mutate,
        mutateAsync,
        reset: mockReset,
        context: undefined,
        failureCount: 1,
        isError: true,
        isIdle: false,
        isPaused: false,
        isSuccess: false,
        status: 'error',
        variables: variables!,
        failureReason: error,
        isPending: false,
        submittedAt: 0,
      }

      currentSetValue(
        prev =>
          ({ ...errorState, variables: prev.variables } as UseMutationResult<
            TData,
            TError,
            TVariables
          >),
      )
    } else {
      console.warn(
        'setError called before mock mutation was rendered or setValue was captured.',
      )
    }
  }

  const setPending = () => {
    if (currentSetValue) {
      const pendingState: UseMutationResult<TData, TError, TVariables> = {
        data: undefined,
        error: null,
        mutate,
        mutateAsync,
        reset: mockReset,
        context: undefined,
        failureCount: 0,
        isError: false,
        isIdle: false,
        isPaused: false,
        isSuccess: false,
        status: 'pending',
        failureReason: null,
        isPending: true,
        submittedAt: 0,
        variables: variables!,
      }

      currentSetValue(
        prev =>
          ({ ...pendingState, variables: prev.variables } as UseMutationResult<
            TData,
            TError,
            TVariables
          >),
      )
    } else {
      console.warn(
        'setPending called before mock mutation was rendered or setValue was captured.',
      )
    }
  }

  function setIdle() {
    if (currentSetValue) {
      const idleState: UseMutationResult<TData, TError, TVariables> = {
        data: undefined,
        error: null,
        mutate,
        mutateAsync,
        reset: mockReset,
        variables: undefined,
        context: undefined,
        failureCount: 0,
        isError: false,
        isIdle: true,
        isPaused: false,
        isSuccess: false,
        status: 'idle',
        failureReason: null,
        isPending: false,
        submittedAt: 0,
      }
      currentSetValue(idleState)
    } else {
      console.warn(
        'setIdle called before mock mutation was rendered or setValue was captured.',
      )
    }
  }

  const mock = vi.fn(function useMutationMocked() {
    const [value, setValue] = useState<
      UseMutationResult<TData, TError, TVariables>
    >({
      data: undefined,
      error: null,
      mutate,
      mutateAsync,
      reset: mockReset,
      variables: undefined,
      context: undefined,
      failureCount: 0,
      isError: false,
      isIdle: true,
      isPaused: false,
      isSuccess: false,
      status: 'idle',
      failureReason: null,
      isPending: false,
      submittedAt: 0,
    })

    currentSetValue = setValue

    return value
  })
  return {
    mock: mock,
    mockMutate,
    mockMutateAsync,
    mockReset,
    setSuccess,
    setError,
    setPending,
    setIdle,
  }
}

/**
 * @deprecated Use {@link getUseMutationMock} instead, which provides utilities to dynamically change the state of the mock hook.
 */
export function getUseMutationIdleMock<
  TData = any,
  TError = any,
  TVariables = any,
>(data?: TData) {
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

/**
 * @deprecated Use {@link getUseMutationMock} instead, which provides utilities to dynamically change the state of the mock hook.
 */
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

/**
 * @deprecated Use {@link getUseInfiniteQueryMock} instead, which provides utilities to dynamically change the state of the mock hook.
 */
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
    isFetchNextPageError: false,
    isFetchPreviousPageError: false,
    promise: Promise.resolve({ pages }),
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
    SetStateAction<UseInfiniteQueryResult<InfiniteData<TData>, TError>>
  > | null = null

  const setSuccess = (
    data: TData[],
    hasNextPage = false,
    isFetchingNextPage = false,
  ) => {
    if (currentSetValue) {
      const successState: UseInfiniteQueryResult<
        InfiniteData<TData>,
        TError
      > = {
        data: { pages: data, pageParams: [] },
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
        fetchStatus: isFetchingNextPage ? 'fetching' : 'idle',
        isPaused: false,
        dataUpdatedAt: Date.now(),
        errorUpdatedAt: 0,
        errorUpdateCount: 0,
        failureCount: 0,
        failureReason: null,
        fetchNextPage: mockFetchNextPage,
        fetchPreviousPage: mockFetchPreviousPage,
        refetch: mockRefetch,
        hasPreviousPage: false,
        isFetchingNextPage: isFetchingNextPage,
        isFetchingPreviousPage: false,
        isPlaceholderData: false,
        isStale: false,
        isFetchPreviousPageError: false,
        isFetchNextPageError: false,
        promise: Promise.resolve({ pages: data, pageParams: [] }),
      }
      currentSetValue(successState)
    } else {
      console.warn(
        'setSuccess called before useInfiniteQueryMock was rendered or setValue was captured.',
      )
    }
  }

  const setError = (error: TError) => {
    if (currentSetValue) {
      const errorState: UseInfiniteQueryResult<InfiniteData<TData>, TError> = {
        data: undefined,
        hasNextPage: false,
        status: 'error',
        isSuccess: false,
        isPending: false,
        isLoading: false,
        isError: true,
        error: error,
        isFetched: true,
        isFetchedAfterMount: true,
        isFetching: false,
        isInitialLoading: false,
        isLoadingError: true,
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
        hasPreviousPage: false,
        isFetchingNextPage: false,
        isFetchingPreviousPage: false,
        isPlaceholderData: false,
        isStale: false,
        isFetchNextPageError: false,
        isFetchPreviousPageError: false,
        promise: new Promise(() => {}),
      }
      currentSetValue(errorState)
    } else {
      console.warn(
        'setError called before useInfiniteQueryMock was rendered or setValue was captured.',
      )
    }
  }

  const setLoading = () => {
    if (currentSetValue) {
      const loadingState: UseInfiniteQueryResult<
        InfiniteData<TData>,
        TError
      > = {
        data: undefined,
        hasNextPage: false,
        status: 'pending',
        isSuccess: false,
        isPending: true,
        isLoading: true,
        isError: false,
        error: null,
        isFetched: true,
        isFetchedAfterMount: true,
        isFetching: false,
        isInitialLoading: false,
        isLoadingError: false,
        isRefetchError: false,
        isRefetching: false,
        fetchStatus: 'fetching',
        isPaused: false,
        dataUpdatedAt: Date.now(),
        errorUpdatedAt: 0,
        errorUpdateCount: 0,
        failureCount: 0,
        failureReason: null,
        fetchNextPage: mockFetchNextPage,
        fetchPreviousPage: mockFetchPreviousPage,
        refetch: mockRefetch,
        hasPreviousPage: false,
        isFetchingNextPage: true,
        isFetchingPreviousPage: false,
        isPlaceholderData: false,
        isStale: false,
        isFetchNextPageError: false,
        isFetchPreviousPageError: false,
        promise: new Promise(() => {}),
      }
      currentSetValue(loadingState)
    } else {
      console.warn(
        'setError called before useInfiniteQueryMock was rendered or setValue was captured.',
      )
    }
  }

  const mock = vi.fn(function useMockInfiniteQuery() {
    const [value, setValue] = useState<
      UseInfiniteQueryResult<InfiniteData<TData>, TError>
    >({
      data: undefined,
      fetchStatus: 'fetching',
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
      isFetchNextPageError: false,
      isFetchPreviousPageError: false,
      promise: new Promise(() => {}),
    })

    currentSetValue = setValue

    return value
  })
  return {
    mock: mock,
    mockFetchNextPage: mockFetchNextPage,
    setSuccess,
    setError,
    setLoading,
  }
}
