import {
  getUseInfiniteQueryMock,
  getUseMutationMock,
  getUseQueryMock,
} from '@/testutils/ReactQueryMockUtils'
import { act, renderHook } from '@testing-library/react'

describe('ReactQueryMockUtils tests', () => {
  describe('getUseQueryMock', () => {
    const mockData = { key: 'value' }
    const mockError = new Error('mock error')
    const {
      mock: mockHook,
      setSuccess,
      setError,
      setIdle,
      setLoading,
      mockRefetch,
    } = getUseQueryMock<typeof mockData, typeof mockError>()
    let hook = renderHook(() => mockHook())
    beforeEach(() => {
      // Clear mocks and re-render hook before each test
      vi.clearAllMocks()
      hook = renderHook(() => mockHook())
    })
    it('initially starts in loading state', () => {
      expect(hook.result.current).toEqual(
        expect.objectContaining({
          data: undefined,
          error: null,
          status: 'pending',
          isSuccess: false,
          isError: false,
          isLoading: true,
        }),
      )
    })
    it('can be transitioned to success state', () => {
      act(() => {
        setSuccess(mockData)
      })
      expect(hook.result.current).toEqual(
        expect.objectContaining({
          data: mockData,
          error: null,
          status: 'success',
          isSuccess: true,
          isError: false,
          isLoading: false,
        }),
      )
    })
    it('can be transitioned to error state', () => {
      act(() => {
        setError(mockError)
      })
      expect(hook.result.current).toEqual(
        expect.objectContaining({
          data: undefined,
          error: mockError,
          status: 'error',
          isSuccess: false,
          isError: true,
          isLoading: false,
        }),
      )
    })
    it('can be transitioned to loading state', () => {
      act(() => {
        setLoading()
      })
      expect(hook.result.current).toEqual(
        expect.objectContaining({
          data: undefined,
          error: null,
          status: 'pending',
          isSuccess: false,
          isError: false,
          isLoading: true,
        }),
      )
    })
    it('can be transitioned to idle state', () => {
      act(() => {
        setIdle()
      })
      expect(hook.result.current).toEqual(
        expect.objectContaining({
          data: undefined,
          error: null,
          status: 'pending',
          isSuccess: false,
          isError: false,
          isLoading: false,
        }),
      )
    })
    it('returns mock functions in the hook result', () => {
      hook.result.current.refetch()

      expect(mockRefetch).toHaveBeenCalledTimes(1)
    })
  })

  describe('getUseMutationMockImpl', () => {
    const mockData = { id: '123' }
    const mockError = new Error('mutation failed')
    const mockVariables = { name: 'test' }
    const {
      mock: mockHook,
      setSuccess,
      setError,
      setPending,
      mockMutate,
      mockMutateAsync,
    } = getUseMutationMock<
      typeof mockData,
      typeof mockError,
      typeof mockVariables
    >()
    let hook = renderHook(() => mockHook())

    beforeEach(() => {
      // Clear mocks and re-render hook before each test
      vi.clearAllMocks()
      hook = renderHook(() => mockHook())
    })

    it('initially starts in idle state', () => {
      expect(hook.result.current).toEqual(
        expect.objectContaining({
          data: undefined,
          error: null,
          status: 'idle',
          isSuccess: false,
          isError: false,
          isPending: false,
          isIdle: true,
        }),
      )
    })

    it('can be transitioned to pending state', () => {
      act(() => {
        setPending()
      })
      expect(hook.result.current).toEqual(
        expect.objectContaining({
          data: undefined,
          error: null,
          status: 'pending',
          isSuccess: false,
          isError: false,
          isPending: true,
          isIdle: false,
        }),
      )
    })

    it('can be transitioned to success state', () => {
      act(() => {
        hook.result.current.mutate(mockVariables) // Call mutate to set variables
      })
      act(() => {
        setSuccess(mockData)
      })
      expect(hook.result.current).toEqual(
        expect.objectContaining({
          data: mockData,
          error: null,
          status: 'success',
          isSuccess: true,
          isError: false,
          isPending: false,
          isIdle: false,
          variables: mockVariables,
        }),
      )
    })

    it('can be transitioned to error state', () => {
      act(() => {
        hook.result.current.mutate(mockVariables) // Call mutate to set variables
      })
      expect(mockMutate).toHaveBeenCalledWith(mockVariables)
      act(() => {
        setError(mockError)
      })
      expect(hook.result.current).toEqual(
        expect.objectContaining({
          data: undefined,
          error: mockError,
          status: 'error',
          isSuccess: false,
          isError: true,
          isPending: false,
          isIdle: false,
          variables: mockVariables,
        }),
      )
    })

    it('mutate function is called with variables', () => {
      act(() => {
        hook.result.current.mutate(mockVariables)
      })
      expect(mockMutate).toHaveBeenCalledWith(mockVariables)
      act(() => {
        // Transition to a state that exposes variables
        setPending()
      })
      expect(hook.result.current.variables).toEqual(mockVariables)
    })

    it('mutateAsync function is called with variables', async () => {
      await act(async () => {
        await hook.result.current.mutateAsync(mockVariables)
      })

      expect(mockMutateAsync).toHaveBeenCalledWith(mockVariables)

      act(() => {
        // Transition to a state that exposes variables
        setPending()
      })
      expect(hook.result.current.variables).toEqual(mockVariables)
    })
  })

  describe('getUseInfiniteQueryMock', () => {
    const mockPage1 = [{ id: '1' }, { id: '2' }]
    const mockPage2 = [{ id: '3' }, { id: '4' }]
    const mockError = new Error('infinite query error')

    const {
      mock: mockHook,
      setSuccess,
      mockFetchNextPage,
      setError,
      setLoading,
    } = getUseInfiniteQueryMock<typeof mockPage1>()
    let hook = renderHook(() => mockHook())

    beforeEach(() => {
      mockFetchNextPage.mockClear()
      hook = renderHook(() => mockHook())
    })

    it('initially starts in loading state', () => {
      expect(hook.result.current).toEqual(
        expect.objectContaining({
          data: undefined,
          error: null,
          status: 'pending',
          isSuccess: false,
          isError: false,
          isLoading: true,
          hasNextPage: false,
        }),
      )
    })

    it('can be transitioned to success state with initial data and no next page', () => {
      act(() => {
        setSuccess([mockPage1], false)
      })
      expect(hook.result.current).toEqual(
        expect.objectContaining({
          data: { pages: [mockPage1], pageParams: [] },
          error: null,
          status: 'success',
          isSuccess: true,
          isError: false,
          isLoading: false,
          hasNextPage: false,
        }),
      )
    })

    it('can be transitioned to success state with initial data and has next page', () => {
      act(() => {
        setSuccess([mockPage1], true)
      })
      expect(hook.result.current).toEqual(
        expect.objectContaining({
          data: { pages: [mockPage1], pageParams: [] },
          status: 'success',
          isSuccess: true,
          hasNextPage: true,
        }),
      )
    })

    it('can update data and hasNextPage when setSuccess is called again', () => {
      act(() => {
        setSuccess([mockPage1], true)
      })
      expect(hook.result.current.data).toEqual({
        pages: [mockPage1],
        pageParams: [],
      })
      expect(hook.result.current.hasNextPage).toBe(true)

      act(() => {
        setSuccess([mockPage1, mockPage2], false)
      })
      expect(hook.result.current).toEqual(
        expect.objectContaining({
          data: { pages: [mockPage1, mockPage2], pageParams: [] },
          status: 'success',
          isSuccess: true,
          hasNextPage: false,
        }),
      )
    })

    it('can set isFetchingNextPage to true', () => {
      act(() => {
        setSuccess([mockPage1], true, true)
      })
      expect(hook.result.current.data).toEqual({
        pages: [mockPage1],
        pageParams: [],
      })
      expect(hook.result.current.hasNextPage).toBe(true)
      expect(hook.result.current.isFetchingNextPage).toBe(true)
      expect(hook.result.current.fetchStatus).toBe('fetching')
      expect(hook.result.current.isLoading).toBe(false)
    })

    it('fetchNextPage mock can be called', () => {
      act(() => {
        setSuccess([mockPage1], true) // Ensure hook is in a state where fetchNextPage might be relevant
      })
      act(() => {
        hook.result.current.fetchNextPage()
      })
      expect(mockFetchNextPage).toHaveBeenCalledTimes(1)
    })

    it('can be transitioned to error state', () => {
      act(() => {
        setError(mockError)
      })
      expect(hook.result.current).toEqual(
        expect.objectContaining({
          data: undefined,
          error: mockError,
          status: 'error',
          isSuccess: false,
          isError: true,
          isLoading: false,
        }),
      )
    })

    it('can be transitioned to loading state', () => {
      act(() => {
        setLoading()
      })
      expect(hook.result.current).toEqual(
        expect.objectContaining({
          data: undefined,
          error: null,
          status: 'pending',
          isSuccess: false,
          isError: false,
          isLoading: true,
        }),
      )
    })
  })
})
