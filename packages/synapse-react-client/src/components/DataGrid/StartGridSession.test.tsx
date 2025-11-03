import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef } from 'react'
import {
  StartGridSession,
  StartGridSessionHandle,
  StartGridSessionProps,
} from './StartGridSession'
import useInitializeGridConnection, {
  CreateOrGetGridSessionInput,
} from './useInitializeGridConnection'
import {
  useDeleteGridSession,
  useGetGridSessionsInfinite,
} from '@/synapse-queries/grid/useGridSession'
import {
  CreateGridRequest,
  GridReplica,
  GridSession,
} from '@sage-bionetworks/synapse-client'
import { UseMutationOptions } from '@tanstack/react-query'

type InitializeGridConnectionOptions = Omit<
  UseMutationOptions<
    { session: GridSession; replica: GridReplica },
    unknown,
    CreateOrGetGridSessionInput
  >,
  'mutationFn'
>

// Mock the hooks
vi.mock('./useInitializeGridConnection')
vi.mock('@/synapse-queries/grid/useGridSession')
vi.mock('../ToastMessage/ToastMessage', () => ({
  displayToast: vi.fn(),
}))

const mockUseInitializeGridConnection = vi.mocked(useInitializeGridConnection)
const mockUseDeleteGridSession = vi.mocked(useDeleteGridSession)
const mockUseGetGridSessionsInfinite = vi.mocked(useGetGridSessionsInfinite)

const mockGridSession: GridSession = {
  sessionId: 'test-session-123',
  sourceEntityId: 'syn123456',
  gridJsonSchema$Id: 'https://schema.example.com/grid',
  modifiedOn: '2025-10-27T00:00:00.000Z',
}

const mockGridSession2: GridSession = {
  sessionId: 'test-session-456',
  sourceEntityId: 'syn789012',
  gridJsonSchema$Id: undefined,
  modifiedOn: '2025-10-27T00:00:00.000Z',
}

describe('StartGridSession - useImperativeHandle methods', () => {
  const mockInitializeGridConnection = vi.fn()
  const mockDeleteSession = vi.fn()
  const mockOnSessionChange = vi.fn()
  const mockOnReplicaChange = vi.fn()

  function renderComponent(propOverrides?: Partial<StartGridSessionProps>) {
    const user = userEvent.setup()
    const ref = createRef<StartGridSessionHandle>()
    const result = render(
      <StartGridSession
        ref={ref}
        show={true}
        onSessionChange={mockOnSessionChange}
        onReplicaChange={mockOnReplicaChange}
        {...propOverrides}
      />,
      {
        wrapper: createWrapper(),
      },
    )

    return { user, ref, result }
  }

  beforeEach(() => {
    vi.clearAllMocks()

    // Mock useInitializeGridConnection
    mockUseInitializeGridConnection.mockReturnValue({
      mutate: mockInitializeGridConnection,
      // Add other required properties for the mutation result
      mutateAsync: vi.fn(),
      data: undefined,
      error: null,
      isError: false,
      isIdle: true,
      isPending: false,
      isSuccess: false,
      failureCount: 0,
      failureReason: null,
      isPaused: false,
      status: 'idle',
      variables: undefined,
      submittedAt: 0,
      reset: vi.fn(),
      context: undefined,
    })

    // Mock useDeleteGridSession
    mockUseDeleteGridSession.mockReturnValue({
      mutate: mockDeleteSession,
      mutateAsync: vi.fn(),
      data: undefined,
      error: null,
      isError: false,
      isIdle: true,
      isPending: false,
      isSuccess: false,
      failureCount: 0,
      failureReason: null,
      isPaused: false,
      status: 'idle',
      variables: undefined,
      submittedAt: 0,
      reset: vi.fn(),
      context: undefined,
    })

    // Mock useGetGridSessionsInfinite
    mockUseGetGridSessionsInfinite.mockReturnValue({
      data: {
        pages: [{ page: [mockGridSession, mockGridSession2] }],
        pageParams: [undefined],
      },
      // Add other required properties for the infinite query result
      fetchNextPage: vi.fn(),
      fetchPreviousPage: vi.fn(),
      hasNextPage: false,
      hasPreviousPage: false,
      isFetchingNextPage: false,
      isFetchingPreviousPage: false,
      isFetchNextPageError: false,
      isFetchPreviousPageError: false,
      isLoading: false,
      isInitialLoading: false,
      isError: false,
      error: null,
      refetch: vi.fn(),
      status: 'success',
      fetchStatus: 'idle',
      dataUpdatedAt: 0,
      errorUpdatedAt: 0,
      failureCount: 0,
      failureReason: null,
      errorUpdateCount: 0,
      isFetched: true,
      isFetchedAfterMount: true,
      isFetching: false,
      isPending: false,
      isLoadingError: false,
      isPaused: false,
      isPlaceholderData: false,
      isRefetchError: false,
      isRefetching: false,
      isStale: false,
      isSuccess: true,
      promise: Promise.resolve({
        pages: [{ page: [mockGridSession, mockGridSession2] }],
        pageParams: [undefined],
      }),
    })
  })

  describe('handleStartSession method', () => {
    it('should expose handleStartSession via ref and call initializeGridConnection', () => {
      const { ref } = renderComponent()

      const createGridRequest: CreateGridRequest = {
        initialQuery: {
          sql: 'SELECT * FROM syn123',
        },
        concreteType: 'org.sagebionetworks.repo.model.grid.CreateGridRequest',
      }

      // Call the imperative handle method
      ref.current?.handleStartSession(createGridRequest)

      // Verify initializeGridConnection was called with correct args
      expect(mockInitializeGridConnection).toHaveBeenCalledTimes(1)
      expect(mockInitializeGridConnection).toHaveBeenCalledWith({
        createGridRequest,
      })
    })

    it('should work with recordSetId in CreateGridRequest', () => {
      const { ref } = renderComponent()

      const createGridRequest: CreateGridRequest = {
        recordSetId: 'syn123456',
        concreteType: 'org.sagebionetworks.repo.model.grid.CreateGridRequest',
      }

      ref.current?.handleStartSession(createGridRequest)

      expect(mockInitializeGridConnection).toHaveBeenCalledWith({
        createGridRequest,
      })
    })

    it('should work with both SQL query and recordSetId', () => {
      const { ref } = renderComponent()

      const createGridRequest: CreateGridRequest = {
        initialQuery: {
          sql: 'SELECT * FROM syn123',
        },
        recordSetId: 'syn123456',
        concreteType: 'org.sagebionetworks.repo.model.grid.CreateGridRequest',
      }

      ref.current?.handleStartSession(createGridRequest)

      expect(mockInitializeGridConnection).toHaveBeenCalledWith({
        createGridRequest,
      })
    })
  })

  describe('handleLoadSession method', () => {
    it('should expose handleLoadSession via ref and call initializeGridConnection with sessionId', () => {
      const { ref } = renderComponent()

      const sessionId = 'existing-session-789'

      // Call the imperative handle method
      ref.current?.handleLoadSession(sessionId)

      // Verify initializeGridConnection was called with sessionId
      expect(mockInitializeGridConnection).toHaveBeenCalledTimes(1)
      expect(mockInitializeGridConnection).toHaveBeenCalledWith({
        sessionId,
      })
    })

    it('should handle loading multiple different sessions', () => {
      const { ref } = renderComponent()

      const sessionId1 = 'session-aaa'
      const sessionId2 = 'session-bbb'

      ref.current?.handleLoadSession(sessionId1)
      expect(mockInitializeGridConnection).toHaveBeenCalledWith({
        sessionId: sessionId1,
      })

      ref.current?.handleLoadSession(sessionId2)
      expect(mockInitializeGridConnection).toHaveBeenCalledWith({
        sessionId: sessionId2,
      })

      expect(mockInitializeGridConnection).toHaveBeenCalledTimes(2)
    })
  })

  describe('ref stability', () => {
    it('should maintain stable ref methods across re-renders', () => {
      const { ref, result } = renderComponent()

      const initialHandleStartSession = ref.current?.handleStartSession
      const initialHandleLoadSession = ref.current?.handleLoadSession

      // Force a re-render by changing props
      result.rerender(
        <StartGridSession
          ref={ref}
          show={true}
          onSessionChange={mockOnSessionChange}
          onReplicaChange={mockOnReplicaChange}
        />,
      )

      // Methods should be the same reference (stable)
      expect(ref.current?.handleStartSession).toBe(initialHandleStartSession)
      expect(ref.current?.handleLoadSession).toBe(initialHandleLoadSession)
    })
  })

  describe('ref methods when component is hidden', () => {
    it('should still work when show is false', () => {
      const { ref } = renderComponent({ show: false })

      const sessionId = 'hidden-session-123'
      ref.current?.handleLoadSession(sessionId)

      // Should still call the mutation even when component is not visible
      expect(mockInitializeGridConnection).toHaveBeenCalledWith({
        sessionId,
      })
    })
  })

  describe('integration with callbacks', () => {
    it('should trigger onSessionChange and onReplicaChange when session is successfully initialized', () => {
      const mockSession: GridSession = {
        sessionId: 'new-session-999',
        sourceEntityId: 'syn999999',
        gridJsonSchema$Id: 'https://schema.example.com/test',
        modifiedOn: '2025-10-27T00:00:00.000Z',
      }
      const mockReplica = { replicaId: 42 }

      // Capture the options passed to useInitializeGridConnection
      let capturedOptions: InitializeGridConnectionOptions | undefined

      // Mock useInitializeGridConnection to capture the options
      mockUseInitializeGridConnection.mockImplementation(options => {
        capturedOptions = options
        return {
          mutate: mockInitializeGridConnection,
          mutateAsync: vi.fn(),
          data: undefined,
          error: null,
          isError: false,
          isIdle: true,
          isPending: false,
          isSuccess: false,
          failureCount: 0,
          failureReason: null,
          isPaused: false,
          status: 'idle',
          variables: undefined,
          submittedAt: 0,
          reset: vi.fn(),
          context: undefined,
        }
      })

      const { ref } = renderComponent()

      // Now simulate calling the mutation which should trigger the onSuccess in the captured options
      mockInitializeGridConnection.mockImplementation(() => {
        // Call the onSuccess from the component's options
        if (capturedOptions?.onSuccess) {
          capturedOptions.onSuccess(
            {
              session: mockSession,
              replica: mockReplica,
            },
            { sessionId: 'new-session-999' },
            undefined,
          )
        }
      })

      // Call handleLoadSession
      ref.current?.handleLoadSession('new-session-999')

      // Verify the callbacks were called
      expect(mockOnSessionChange).toHaveBeenCalledWith(mockSession)
      expect(mockOnReplicaChange).toHaveBeenCalledWith(42)
    })

    it('should use noop when onSessionChange callback not provided', () => {
      const mockSession: GridSession = {
        sessionId: 'test-session-111',
        sourceEntityId: 'syn111111',
        gridJsonSchema$Id: 'https://schema.example.com/test',
        modifiedOn: '2025-10-27T00:00:00.000Z',
      }
      const mockReplica = { replicaId: 99 }

      let capturedOptions: InitializeGridConnectionOptions | undefined

      mockUseInitializeGridConnection.mockImplementation(options => {
        capturedOptions = options
        return {
          mutate: mockInitializeGridConnection,
          mutateAsync: vi.fn(),
          data: undefined,
          error: null,
          isError: false,
          isIdle: true,
          isPending: false,
          isSuccess: false,
          failureCount: 0,
          failureReason: null,
          isPaused: false,
          status: 'idle',
          variables: undefined,
          submittedAt: 0,
          reset: vi.fn(),
          context: undefined,
        }
      })

      // Render without providing callbacks
      const ref = createRef<StartGridSessionHandle>()
      render(<StartGridSession ref={ref} show={true} />, {
        wrapper: createWrapper(),
      })

      mockInitializeGridConnection.mockImplementation(() => {
        if (capturedOptions?.onSuccess) {
          capturedOptions.onSuccess(
            {
              session: mockSession,
              replica: mockReplica,
            },
            { sessionId: 'test-session-111' },
            undefined,
          )
        }
      })

      // Should not throw error even without callbacks
      expect(() => {
        ref.current?.handleLoadSession('test-session-111')
      }).not.toThrow()
    })

    it('should call onSessionChange with null when deleting session', () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let capturedDeleteOptions: any

      mockUseDeleteGridSession.mockImplementation(options => {
        capturedDeleteOptions = options
        return {
          mutate: mockDeleteSession,
          mutateAsync: vi.fn(),
          data: undefined,
          error: null,
          isError: false,
          isIdle: true,
          isPending: false,
          isSuccess: false,
          failureCount: 0,
          failureReason: null,
          isPaused: false,
          status: 'idle',
          variables: undefined,
          submittedAt: 0,
          reset: vi.fn(),
          context: undefined,
        }
      })

      renderComponent()

      // Simulate successful deletion
      mockDeleteSession.mockImplementation(sessionId => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (capturedDeleteOptions?.onSuccess) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          capturedDeleteOptions.onSuccess(undefined, sessionId, undefined)
        }
      })

      // Call delete
      mockDeleteSession('session-to-delete')

      // Verify callbacks were called with null
      expect(mockOnSessionChange).toHaveBeenCalledWith(null)
      expect(mockOnReplicaChange).toHaveBeenCalledWith(null)
    })

    it('should call onMutate callback with debug logging', () => {
      const consoleSpy = vi.spyOn(console, 'debug').mockImplementation(() => {})
      let capturedOptions: InitializeGridConnectionOptions | undefined

      mockUseInitializeGridConnection.mockImplementation(options => {
        capturedOptions = options
        return {
          mutate: mockInitializeGridConnection,
          mutateAsync: vi.fn(),
          data: undefined,
          error: null,
          isError: false,
          isIdle: true,
          isPending: false,
          isSuccess: false,
          failureCount: 0,
          failureReason: null,
          isPaused: false,
          status: 'idle',
          variables: undefined,
          submittedAt: 0,
          reset: vi.fn(),
          context: undefined,
        }
      })

      const { ref } = renderComponent()

      const createGridRequest: CreateGridRequest = {
        initialQuery: { sql: 'SELECT * FROM syn123' },
        concreteType:
          'org.sagebionetworks.repo.model.grid.CreateGridRequest' as const,
      }

      // Simulate onMutate being called
      mockInitializeGridConnection.mockImplementation(
        (input: CreateOrGetGridSessionInput) => {
          if (capturedOptions?.onMutate) {
            capturedOptions.onMutate(input)
          }
        },
      )

      ref.current?.handleStartSession(createGridRequest)

      expect(consoleSpy).toHaveBeenCalledWith(
        'Starting grid session with args:',
        { createGridRequest },
      )

      consoleSpy.mockRestore()
    })

    it('should handle multiple sequential session changes', () => {
      const mockSession1: GridSession = {
        sessionId: 'session-1',
        sourceEntityId: 'syn111',
        gridJsonSchema$Id: undefined,
        modifiedOn: '2025-10-27T00:00:00.000Z',
      }
      const mockSession2: GridSession = {
        sessionId: 'session-2',
        sourceEntityId: 'syn222',
        gridJsonSchema$Id: undefined,
        modifiedOn: '2025-10-27T00:00:00.000Z',
      }
      const mockReplica1 = { replicaId: 1 }
      const mockReplica2 = { replicaId: 2 }

      let capturedOptions: InitializeGridConnectionOptions | undefined

      mockUseInitializeGridConnection.mockImplementation(options => {
        capturedOptions = options
        return {
          mutate: mockInitializeGridConnection,
          mutateAsync: vi.fn(),
          data: undefined,
          error: null,
          isError: false,
          isIdle: true,
          isPending: false,
          isSuccess: false,
          failureCount: 0,
          failureReason: null,
          isPaused: false,
          status: 'idle',
          variables: undefined,
          submittedAt: 0,
          reset: vi.fn(),
          context: undefined,
        }
      })

      const { ref } = renderComponent()

      // First session
      mockInitializeGridConnection.mockImplementationOnce(() => {
        if (capturedOptions?.onSuccess) {
          capturedOptions.onSuccess(
            {
              session: mockSession1,
              replica: mockReplica1,
            },
            { sessionId: 'session-1' },
            undefined,
          )
        }
      })
      ref.current?.handleLoadSession('session-1')

      expect(mockOnSessionChange).toHaveBeenNthCalledWith(1, mockSession1)
      expect(mockOnReplicaChange).toHaveBeenNthCalledWith(1, 1)

      // Second session
      mockInitializeGridConnection.mockImplementationOnce(() => {
        if (capturedOptions?.onSuccess) {
          capturedOptions.onSuccess(
            {
              session: mockSession2,
              replica: mockReplica2,
            },
            { sessionId: 'session-2' },
            undefined,
          )
        }
      })
      ref.current?.handleLoadSession('session-2')

      expect(mockOnSessionChange).toHaveBeenNthCalledWith(2, mockSession2)
      expect(mockOnReplicaChange).toHaveBeenNthCalledWith(2, 2)

      // Should have been called twice total
      expect(mockOnSessionChange).toHaveBeenCalledTimes(2)
      expect(mockOnReplicaChange).toHaveBeenCalledTimes(2)
    })
  })
})
