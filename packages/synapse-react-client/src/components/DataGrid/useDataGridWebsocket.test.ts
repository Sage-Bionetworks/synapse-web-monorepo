import { GridModel } from '@/components/DataGrid/DataGridTypes'
import { DataGridWebSocket } from '@/components/DataGrid/DataGridWebSocket'
import { act, renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useDataGridWebSocket } from './useDataGridWebsocket'
import { useEstablishWebsocketConnection } from '@/synapse-queries/grid/useEstablishWebsocketConnection'
import { Model } from 'json-joy/lib/json-crdt'
import { createWrapper } from '@/testutils/TestingLibraryUtils'

const mockUseDocumentVisibility = vi.fn(() => true)

// Mock useCRDTModelView to just return the model passed in
vi.mock('./useCRDTModelView', () => ({
  useCRDTModelView: vi.fn((model: GridModel | null | undefined) =>
    model
      ? {
          snapshot: 'mockSnapshot',
          model,
          columnNames: ['mock_col'],
          columnOrder: [1],
          rows: [{ id: 'mock_row' }],
        }
      : undefined,
  ),
}))

// Mock useEstablishWebsocketConnection
vi.mock('@/synapse-queries/grid/useEstablishWebsocketConnection', () => ({
  useEstablishWebsocketConnection: vi.fn(),
}))

// Mock document visibility
vi.mock('@react-hookz/web', () => ({
  useDocumentVisibility: () => mockUseDocumentVisibility(),
}))

// Mock DataGridWebSocket
type MockWebSocketConfig = Record<string, unknown> & {
  onGridReady?: () => void
  onStatusChange?: (isConnected: boolean, instance: unknown) => void
  onModelCreate?: (model: GridModel) => void
  model?: GridModel | null
}

type MockWebSocketInstance = MockWebSocketConfig & {
  socket: { readyState: number }
  sendPatch: ReturnType<typeof vi.fn>
  disconnect: ReturnType<typeof vi.fn>
}

vi.mock('./DataGridWebSocket', () => ({
  DataGridWebSocket: vi.fn().mockImplementation(
    (
      config: MockWebSocketConfig,
      _instance?: unknown,
    ): MockWebSocketInstance => ({
      ...config,
      socket: { readyState: WebSocket.OPEN },
      sendPatch: vi.fn(),
      disconnect: vi.fn(),
    }),
  ),
}))

const MockDataGridWebSocket = vi.mocked(DataGridWebSocket)
const mockEstablishWebsocketConnection = vi.fn()
const mockResetEstablishWebsocketConnection = vi.fn()
const mockClearPresignedUrl = vi.fn()
const MockUseEstablishWebsocketConnection = vi.mocked(
  useEstablishWebsocketConnection,
)

let currentIsPending = false
let currentError: unknown = null
let currentPresignedUrl: string | null = 'ws://mocked-url'

const createEstablishHookState = () =>
  ({
    mutateAsync: mockEstablishWebsocketConnection,
    isPending: currentIsPending,
    error: currentError,
    presignedUrl: currentPresignedUrl,
    reset: mockResetEstablishWebsocketConnection,
    clearPresignedUrl: mockClearPresignedUrl,
  } as unknown as ReturnType<typeof useEstablishWebsocketConnection>)

const createDeferred = <T>() => {
  let resolve: (value: T | PromiseLike<T>) => void
  let reject: (reason?: unknown) => void
  const promise = new Promise<T>((res, rej) => {
    resolve = res
    reject = rej
  })
  return {
    promise,
    resolve: resolve!,
    reject: reject!,
  }
}

beforeEach(() => {
  vi.clearAllMocks()

  currentIsPending = false
  currentError = null
  currentPresignedUrl = 'ws://mocked-url'

  mockEstablishWebsocketConnection.mockImplementation(
    ({
      replicaId,
      websocketOptions,
    }: {
      replicaId: number
      websocketOptions?: MockWebSocketConfig
    }) =>
      Promise.resolve(
        new DataGridWebSocket({
          replicaId,
          url: 'ws://mocked-url',
          ...(websocketOptions ?? {}),
        }),
      ),
  )

  MockUseEstablishWebsocketConnection.mockImplementation(() =>
    createEstablishHookState(),
  )

  mockUseDocumentVisibility.mockImplementation(() => true)
})

describe('useDataGridWebSocket', () => {
  it('should initialize with correct default state', () => {
    const { result } = renderHook(() => useDataGridWebSocket(), {
      wrapper: createWrapper(),
    })
    expect(result.current.model).toBeNull()
    expect(result.current.isConnected).toBe(false)
    expect(result.current.websocketInstance).toBeNull()
    expect(result.current.hasCompletedInitialSync).toBe(false)
    expect(result.current.modelSnapshot).toBeUndefined()
    expect(result.current.presignedUrl).toBe('ws://mocked-url')
    expect(result.current.errorEstablishingWebsocketConnection).toBeNull()
    expect(result.current.hasSufficientData).toBe(false)
  })

  it('should create websocket and update state via callbacks', async () => {
    const { result } = renderHook(() => useDataGridWebSocket(), {
      wrapper: createWrapper(),
    })

    // Trigger WebSocket creation
    act(() => {
      result.current.connect(123, 'session-abc')
    })

    expect(mockResetEstablishWebsocketConnection).toHaveBeenCalledTimes(1)
    expect(mockClearPresignedUrl).toHaveBeenCalledTimes(1)

    // Wait for the websocket instance to be assigned
    await waitFor(() => {
      expect(mockEstablishWebsocketConnection).toHaveBeenCalledWith({
        replicaId: 123,
        sessionId: 'session-abc',
        websocketOptions: expect.objectContaining({
          onGridReady: expect.any(Function),
          onStatusChange: expect.any(Function),
          onModelCreate: expect.any(Function),
          model: null,
        }) as MockWebSocketConfig,
      })
      expect(result.current.websocketInstance).not.toBeNull()
    })

    // Simulate onGridReady
    act(() => {
      MockDataGridWebSocket.mock.lastCall![0].onGridReady!()
    })
    expect(result.current.hasCompletedInitialSync).toBe(true)

    // Simulate onStatusChange
    act(() => {
      MockDataGridWebSocket.mock.lastCall![0].onStatusChange!(
        true,
        result.current.websocketInstance!,
      )
    })
    expect(result.current.isConnected).toBe(true)

    // Simulate onModelCreate
    const fakeModel = {
      foo: 'bar',
      api: { getSnapshot: vi.fn(() => ({ columns: [], rows: [] })) },
    }
    act(() => {
      MockDataGridWebSocket.mock.lastCall![0].onModelCreate!(
        fakeModel as unknown as GridModel,
      )
    })
    expect(result.current.model).toEqual(fakeModel)
    // modelSnapshot should reflect mocked useCRDTModelView
    expect(result.current.modelSnapshot).toEqual({
      snapshot: 'mockSnapshot',
      model: fakeModel,
      columnNames: ['mock_col'],
      columnOrder: [1],
      rows: [{ id: 'mock_row' }],
    })
    expect(result.current.hasSufficientData).toBe(true)
  })

  it('should defer connection attempts until the document becomes visible', async () => {
    let isVisible = false
    mockUseDocumentVisibility.mockImplementation(() => isVisible)

    const { result, rerender } = renderHook(() => useDataGridWebSocket(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.connect(99, 'hidden-session')
    })

    expect(mockResetEstablishWebsocketConnection).toHaveBeenCalledTimes(1)
    expect(mockClearPresignedUrl).toHaveBeenCalledTimes(1)
    expect(mockEstablishWebsocketConnection).not.toHaveBeenCalled()

    act(() => {
      isVisible = true
      rerender()
    })

    await waitFor(() => {
      expect(mockEstablishWebsocketConnection).toHaveBeenCalledTimes(1)
    })
    expect(mockUseDocumentVisibility).toHaveBeenCalled()
  })

  it('should replace an existing websocket if connect is called again', async () => {
    const { result } = renderHook(() => useDataGridWebSocket(), {
      wrapper: createWrapper(),
    })

    // First connection
    act(() => {
      result.current.connect(1, 'session-a')
    })

    // Wait for first websocket instance to be created
    await waitFor(() => {
      expect(result.current.websocketInstance).not.toBeNull()
    })

    const firstInstance = result.current.websocketInstance!

    // Second connection (should replace the first)
    act(() => {
      result.current.connect(2, 'session-b')
    })

    // Wait for second websocket instance to be created
    await waitFor(() => {
      expect(mockClearPresignedUrl).toHaveBeenCalledTimes(2)
      expect(result.current.websocketInstance).not.toBe(firstInstance)
    })

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(firstInstance.disconnect).toHaveBeenCalled()
    expect(result.current.websocketInstance).not.toBe(firstInstance)
    // Second instance should not be disconnected yet
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(result.current.websocketInstance?.disconnect).not.toHaveBeenCalled()
  })

  it('should retain model and readiness when reconnecting to the same session', async () => {
    const { result } = renderHook(() => useDataGridWebSocket(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.connect(5, 'shared-session')
    })

    await waitFor(() => {
      expect(result.current.websocketInstance).not.toBeNull()
    })

    act(() => {
      MockDataGridWebSocket.mock.lastCall![0].onGridReady!()
    })

    const existingModel = {
      baz: 'qux',
      api: { getSnapshot: vi.fn(() => ({ columns: [], rows: [] })) },
    } as unknown as GridModel
    act(() => {
      MockDataGridWebSocket.mock.lastCall![0].onModelCreate!(existingModel)
    })

    expect(result.current.model).toBe(existingModel)
    expect(result.current.hasCompletedInitialSync).toBe(true)
    expect(result.current.hasSufficientData).toBe(true)

    const clearCountAfterFirstConnection =
      mockClearPresignedUrl.mock.calls.length

    act(() => {
      result.current.connect(5, 'shared-session')
    })

    await waitFor(() => {
      expect(mockEstablishWebsocketConnection).toHaveBeenCalledTimes(2)
      expect(MockDataGridWebSocket).toHaveBeenCalledTimes(2)
    })

    const secondCallArgs = mockEstablishWebsocketConnection.mock
      .calls[1][0] as {
      replicaId: number
      sessionId: string
      websocketOptions: MockWebSocketConfig
    }
    expect(secondCallArgs.websocketOptions.model).toBe(existingModel)
    expect(mockClearPresignedUrl).toHaveBeenCalledTimes(
      clearCountAfterFirstConnection,
    )
    expect(result.current.model).toBe(existingModel)
    expect(result.current.hasCompletedInitialSync).toBe(true)
    expect(result.current.hasSufficientData).toBe(true)
  })

  it('should avoid duplicate connection attempts while establish mutation is pending', async () => {
    const deferred = createDeferred<DataGridWebSocket>()
    let establishArgs:
      | {
          replicaId: number
          sessionId: string
          websocketOptions?: MockWebSocketConfig
        }
      | undefined

    mockEstablishWebsocketConnection.mockImplementationOnce(async args => {
      establishArgs = args as {
        replicaId: number
        sessionId: string
        websocketOptions?: MockWebSocketConfig
      }
      currentIsPending = true
      return deferred.promise
    })

    const { result, rerender } = renderHook(() => useDataGridWebSocket(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.connect(7, 'pending-session')
    })

    expect(mockEstablishWebsocketConnection).toHaveBeenCalledTimes(1)

    act(() => {
      rerender()
    })

    await waitFor(() => {
      expect(mockEstablishWebsocketConnection).toHaveBeenCalledTimes(1)
    })

    act(() => {
      currentIsPending = false
      deferred.resolve(
        new DataGridWebSocket({
          replicaId: establishArgs!.replicaId,
          url: 'ws://mocked-url',
          ...(establishArgs!.websocketOptions ?? {}),
        }),
      )
    })

    await waitFor(() => {
      expect(result.current.websocketInstance).not.toBeNull()
    })
  })

  it('should surface errors when establishing the websocket fails', async () => {
    const testError = new Error('failed to connect')
    mockEstablishWebsocketConnection.mockImplementationOnce(() =>
      Promise.reject(testError),
    )

    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => undefined)

    const { result } = renderHook(() => useDataGridWebSocket(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.connect(11, 'error-session')
    })

    await waitFor(() => {
      expect(result.current.errorEstablishingWebsocketConnection).toBe(
        testError,
      )
    })
    expect(mockEstablishWebsocketConnection).toHaveBeenCalledTimes(1)
    expect(result.current.websocketInstance).toBeNull()

    consoleErrorSpy.mockRestore()
  })

  it('should attempt to reconnect when the websocket closes unexpectedly', async () => {
    const { result } = renderHook(() => useDataGridWebSocket(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.connect(13, 'auto-retry')
    })

    await waitFor(() => {
      expect(result.current.websocketInstance).not.toBeNull()
      expect(mockEstablishWebsocketConnection).toHaveBeenCalledTimes(1)
    })

    const firstInstance = result.current.websocketInstance!
    const firstCallConfig = MockDataGridWebSocket.mock.calls.at(-1)![0]

    act(() => {
      firstCallConfig.onStatusChange!(true, firstInstance)
    })

    const existingModel = {
      fizz: 'buzz',
      api: { getSnapshot: vi.fn(() => ({ columns: [], rows: [] })) },
    } as unknown as GridModel
    act(() => {
      firstCallConfig.onModelCreate!(existingModel)
    })

    expect(result.current.model).toBe(existingModel)

    act(() => {
      firstCallConfig.onStatusChange!(false, firstInstance)
    })

    await waitFor(() => {
      expect(mockEstablishWebsocketConnection).toHaveBeenCalledTimes(2)
    })

    const retryArgs = mockEstablishWebsocketConnection.mock.calls[1][0] as {
      replicaId: number
      sessionId: string
      websocketOptions: MockWebSocketConfig
    }
    expect(retryArgs.replicaId).toBe(13)
    expect(retryArgs.sessionId).toBe('auto-retry')
    expect(retryArgs.websocketOptions.model).toBe(existingModel)

    await waitFor(() => {
      expect(result.current.websocketInstance).not.toBe(firstInstance)
    })
    expect(mockClearPresignedUrl).toHaveBeenCalledTimes(1)
  })

  it('should disconnect the websocket on unmount without clearing the model', async () => {
    const { result, unmount } = renderHook(() => useDataGridWebSocket(), {
      wrapper: createWrapper(),
    })

    // Establish a websocket connection
    act(() => {
      result.current.connect(1, 'session-a')
    })

    // Wait for the websocket instance to be created
    await waitFor(() => {
      expect(result.current.websocketInstance).not.toBeNull()
    })

    const createdModel = Model.create({
      foo: 'bar',
    }) as unknown as GridModel

    // Simulate model creation
    act(() => {
      MockDataGridWebSocket.mock.lastCall![0].onModelCreate!(createdModel)
    })

    expect(result.current.model).toBe(createdModel)

    // call under test
    act(() => {
      unmount()
    })

    await waitFor(() => {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(result.current.websocketInstance?.disconnect).toHaveBeenCalled()
    })
  })
})
