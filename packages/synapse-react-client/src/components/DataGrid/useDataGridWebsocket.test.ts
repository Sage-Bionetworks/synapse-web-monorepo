import {
  GridModel,
  GridModelSnapshot,
} from '@/components/DataGrid/DataGridTypes'
import { DataGridWebSocket } from '@/components/DataGrid/DataGridWebSocket'
import { act, renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import {
  initialWebSocketState,
  isInitialLoadReady,
  useDataGridWebSocket,
  WebSocketAction,
  websocketReducer,
  WebSocketState,
} from './useDataGridWebsocket'
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
  DataGridWebSocket: vi.fn().mockImplementation(function (
    this: MockWebSocketInstance,
    config: MockWebSocketConfig,
    _instance?: unknown,
  ): MockWebSocketInstance {
    return {
      ...config,
      socket: { readyState: WebSocket.OPEN },
      sendPatch: vi.fn(),
      disconnect: vi.fn(),
    }
  }),
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
  }) as unknown as ReturnType<typeof useEstablishWebsocketConnection>

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

describe('websocketReducer', () => {
  const someModel = {
    api: { getSnapshot: () => ({}) },
  } as unknown as GridModel

  const connectRequested = (
    replicaId: number,
    sessionId: string,
  ): WebSocketAction => ({
    type: 'CONNECT_REQUESTED',
    payload: { replicaId, sessionId, attemptId: 1 },
  })

  /** A session whose initial load has finished. */
  const loadedState: WebSocketState = {
    ...initialWebSocketState,
    connectionParams: { replicaId: 1, sessionId: 'session-a' },
    model: someModel,
    isConnected: true,
    hasCompletedInitialSync: true,
    hasCompletedInitialLoad: true,
  }

  it('sets hasCompletedInitialLoad on INITIAL_LOAD_COMPLETE', () => {
    const next = websocketReducer(initialWebSocketState, {
      type: 'INITIAL_LOAD_COMPLETE',
    })
    expect(next.hasCompletedInitialLoad).toBe(true)
  })

  const NON_RESETTING_ACTIONS: WebSocketAction[] = [
    { type: 'GRID_READY' },
    { type: 'SYNC_STARTED' },
    { type: 'SYNC_ENDED' },
    { type: 'CONNECTION_OPENED' },
    { type: 'CONNECTION_CLOSED' },
    { type: 'MODEL_CREATED', payload: someModel },
    { type: 'INITIAL_LOAD_COMPLETE' },
  ]

  it.each(NON_RESETTING_ACTIONS)(
    'keeps hasCompletedInitialLoad true through $type',
    action => {
      expect(
        websocketReducer(loadedState, action).hasCompletedInitialLoad,
      ).toBe(true)
    },
  )

  describe('CONNECT_REQUESTED', () => {
    it('preserves load progress when reconnecting to the same replica and session', () => {
      const next = websocketReducer(
        loadedState,
        connectRequested(1, 'session-a'),
      )
      expect(next.hasCompletedInitialLoad).toBe(true)
      expect(next.hasCompletedInitialSync).toBe(true)
      expect(next.model).toBe(someModel)
    })

    it.each([
      { reason: 'the session differs', replicaId: 1, sessionId: 'session-b' },
      { reason: 'the replica differs', replicaId: 2, sessionId: 'session-a' },
    ])('discards load progress when $reason', ({ replicaId, sessionId }) => {
      const next = websocketReducer(
        loadedState,
        connectRequested(replicaId, sessionId),
      )
      expect(next.hasCompletedInitialLoad).toBe(false)
      expect(next.hasCompletedInitialSync).toBe(false)
      expect(next.model).toBeNull()
    })
  })

  describe('CONNECTION_CLOSED', () => {
    it('discards the completed-exchange signal when the drop happens mid-load', () => {
      const midLoad: WebSocketState = {
        ...loadedState,
        hasCompletedInitialLoad: false,
        hasCompletedInitialSync: true,
      }
      const next = websocketReducer(midLoad, { type: 'CONNECTION_CLOSED' })
      // Otherwise the gate would treat a partially replayed model as loaded
      expect(next.hasCompletedInitialSync).toBe(false)
    })

    it('keeps the completed-exchange signal once the load has finished', () => {
      const next = websocketReducer(loadedState, { type: 'CONNECTION_CLOSED' })
      expect(next.hasCompletedInitialSync).toBe(true)
    })

    it.each([true, false])(
      'clears the connection and sync flags (hasCompletedInitialLoad=%s)',
      hasCompletedInitialLoad => {
        const next = websocketReducer(
          { ...loadedState, hasCompletedInitialLoad, isSyncing: true },
          { type: 'CONNECTION_CLOSED' },
        )
        expect(next.isConnected).toBe(false)
        expect(next.isConnecting).toBe(false)
        expect(next.isSyncing).toBe(false)
      },
    )
  })
})

describe('isInitialLoadReady', () => {
  const renderableModel = {
    api: { getSnapshot: () => ({ columns: [], rows: [] }) },
  } as unknown as GridModel

  const populatedSnapshot = {
    columnNames: ['col'],
    columnOrder: [0],
    rows: [{ id: 'row' }],
  } as unknown as GridModelSnapshot

  /**
   * `gridSchema` types `columnNames` as a fixed-length tuple, so states the CRDT
   * reaches at runtime (no columns yet) aren't representable in the type — hence
   * the cast.
   */
  const snapshotWith = (
    overrides: Record<string, unknown>,
  ): GridModelSnapshot =>
    ({ ...populatedSnapshot, ...overrides }) as unknown as GridModelSnapshot

  /** Every gate condition satisfied; the cases below each break exactly one. */
  const readyState: WebSocketState = {
    ...initialWebSocketState,
    model: renderableModel,
    hasCompletedInitialSync: true,
    hasCompletedInitialLoad: false,
    isSyncing: false,
  }

  const BLOCKED_CASES: Array<{
    reason: string
    state: Partial<WebSocketState>
    snapshot: GridModelSnapshot | null | undefined
  }> = [
    {
      reason: 'the load has already completed',
      state: { hasCompletedInitialLoad: true },
      snapshot: populatedSnapshot,
    },
    {
      reason: 'no sync exchange has completed yet',
      state: { hasCompletedInitialSync: false },
      snapshot: populatedSnapshot,
    },
    {
      reason: 'a sync exchange is still in flight',
      state: { isSyncing: true },
      snapshot: populatedSnapshot,
    },
    {
      reason: 'there is no model yet',
      state: { model: null },
      snapshot: populatedSnapshot,
    },
    { reason: 'the snapshot is null', state: {}, snapshot: null },
    { reason: 'the snapshot is undefined', state: {}, snapshot: undefined },
    {
      reason: 'the snapshot has no column names',
      state: {},
      snapshot: snapshotWith({ columnNames: [] }),
    },
    {
      reason: 'the snapshot has no column order',
      state: {},
      snapshot: snapshotWith({ columnOrder: [] }),
    },
  ]

  it('is true when a sync exchange has completed and the model is renderable', () => {
    expect(isInitialLoadReady(readyState, populatedSnapshot)).toBe(true)
  })

  it.each(BLOCKED_CASES)('is false when $reason', ({ state, snapshot }) => {
    expect(isInitialLoadReady({ ...readyState, ...state }, snapshot)).toBe(
      false,
    )
  })

  // A grid whose source has columns but no records is a legitimate loaded state,
  // so row count deliberately does not gate readiness.
  it('is true for a session with columns but no rows', () => {
    expect(isInitialLoadReady(readyState, snapshotWith({ rows: [] }))).toBe(
      true,
    )
  })
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
    expect(result.current.hasCompletedInitialLoad).toBe(false)
    expect(result.current.isSyncing).toBe(false)
    expect(result.current.modelSnapshot).toBeUndefined()
    expect(result.current.presignedUrl).toBe('ws://mocked-url')
    expect(result.current.errorEstablishingWebsocketConnection).toBeNull()
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
    expect(result.current.hasCompletedInitialLoad).toBe(true)
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

    // oxlint-disable-next-line @typescript-eslint/unbound-method
    expect(firstInstance.disconnect).toHaveBeenCalled()
    expect(result.current.websocketInstance).not.toBe(firstInstance)
    // Second instance should not be disconnected yet
    // oxlint-disable-next-line @typescript-eslint/unbound-method
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
    expect(result.current.hasCompletedInitialLoad).toBe(true)

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
    // `hasCompletedInitialLoad` is deliberately not asserted here: the effect
    // re-latches it within the same commit, so a post-reconnect read cannot tell
    // "preserved" from "reset then re-latched". Covered by the render-history test
    // in the `hasCompletedInitialLoad` block instead.
    expect(result.current.hasCompletedInitialSync).toBe(true)
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

  it('should toggle isSyncing via onSyncStart/onSyncEnd callbacks', async () => {
    const { result } = renderHook(() => useDataGridWebSocket(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.connect(42, 'sync-session')
    })

    await waitFor(() => {
      expect(result.current.websocketInstance).not.toBeNull()
    })

    expect(result.current.isSyncing).toBe(false)

    act(() => {
      MockDataGridWebSocket.mock.lastCall![0].onSyncStart!()
    })
    expect(result.current.isSyncing).toBe(true)

    act(() => {
      MockDataGridWebSocket.mock.lastCall![0].onSyncEnd!()
    })
    expect(result.current.isSyncing).toBe(false)
  })

  it('should reset isSyncing when the websocket closes mid-sync', async () => {
    const { result } = renderHook(() => useDataGridWebSocket(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.connect(43, 'sync-close-session')
    })

    await waitFor(() => {
      expect(result.current.websocketInstance).not.toBeNull()
    })

    const config = MockDataGridWebSocket.mock.lastCall![0]

    act(() => {
      config.onStatusChange!(true, result.current.websocketInstance!)
      config.onSyncStart!()
    })
    expect(result.current.isSyncing).toBe(true)

    act(() => {
      config.onStatusChange!(false, result.current.websocketInstance!)
    })

    // The close also triggers an auto-reconnect; wait for it to settle
    await waitFor(() => {
      expect(result.current.isSyncing).toBe(false)
      expect(mockEstablishWebsocketConnection).toHaveBeenCalledTimes(2)
    })
  })

  it('should surface websocketError when the server sends an error notification', async () => {
    const { result } = renderHook(() => useDataGridWebSocket(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.connect(50, 'error-notif-session')
    })

    await waitFor(() => {
      expect(result.current.websocketInstance).not.toBeNull()
    })

    expect(result.current.websocketError).toBeNull()

    act(() => {
      MockDataGridWebSocket.mock.lastCall![0].onError!('something went wrong')
    })

    expect(result.current.websocketError).toBe('something went wrong')
  })

  it('should store the normalized error in websocketError when the server sends an error payload', async () => {
    const { result } = renderHook(() => useDataGridWebSocket(), {
      wrapper: createWrapper(),
    })

    act(() => {
      result.current.connect(51, 'server-error-session')
    })

    await waitFor(() => {
      expect(result.current.websocketInstance).not.toBeNull()
    })

    act(() => {
      MockDataGridWebSocket.mock.lastCall![0].onError!({
        message: 'DataIntegrityViolationException',
        code: 'Bad Request',
        errno: 400,
      })
    })

    // Normalization details are covered by normalizeWebsocketError.test.ts;
    // here we just verify the hook stores the result of that util.
    expect(result.current.websocketError).toBeInstanceOf(Error)
    expect((result.current.websocketError as Error).message).toBe(
      'DataIntegrityViolationException',
    )
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
      // oxlint-disable-next-line @typescript-eslint/unbound-method
      expect(result.current.websocketInstance?.disconnect).toHaveBeenCalled()
    })
  })

  describe('hasCompletedInitialLoad', () => {
    const createRenderableModel = () =>
      ({
        api: { getSnapshot: vi.fn(() => ({ columns: [], rows: [] })) },
      }) as unknown as GridModel

    it('stays false when the socket drops mid-replay, then opens after the reconnect replays', async () => {
      const { result } = renderHook(() => useDataGridWebSocket(), {
        wrapper: createWrapper(),
      })

      act(() => {
        result.current.connect(9, 'drop-mid-replay')
      })

      await waitFor(() => {
        expect(result.current.websocketInstance).not.toBeNull()
      })

      const config = MockDataGridWebSocket.mock.lastCall![0]

      act(() => {
        config.onStatusChange!(true, result.current.websocketInstance!)
        config.onGridReady!()
        config.onSyncEnd!()
      })

      // The snapshot lands and the exchange carrying the remaining rows begins
      act(() => {
        config.onModelCreate!(createRenderableModel())
        config.onSyncStart!()
      })
      expect(result.current.hasCompletedInitialLoad).toBe(false)

      // Closing the socket also clears isSyncing, leaving a renderable but only
      // partially loaded model. The gate must not mistake that for a finished load.
      act(() => {
        config.onStatusChange!(false, result.current.websocketInstance!)
      })

      expect(result.current.isSyncing).toBe(false)
      expect(result.current.model).not.toBeNull()
      expect(result.current.hasCompletedInitialSync).toBe(false)
      expect(result.current.hasCompletedInitialLoad).toBe(false)

      // Re-opening the socket must not open the gate either: the server has not
      // replayed the remainder yet, and `connected` (which starts the next
      // exchange) arrives after `onopen`.
      await waitFor(() => {
        expect(mockEstablishWebsocketConnection).toHaveBeenCalledTimes(2)
      })

      const reconnectConfig = MockDataGridWebSocket.mock.lastCall![0]
      act(() => {
        reconnectConfig.onStatusChange!(true, result.current.websocketInstance!)
      })
      expect(result.current.hasCompletedInitialLoad).toBe(false)

      // Once the reconnect's replay drains, the gate opens — the stricter guard
      // must not deadlock the load.
      act(() => {
        reconnectConfig.onGridReady!()
        reconnectConfig.onSyncEnd!()
      })
      expect(result.current.hasCompletedInitialLoad).toBe(true)
    })

    it('keeps the completed sync signal when the socket drops after the initial load', async () => {
      const { result } = renderHook(() => useDataGridWebSocket(), {
        wrapper: createWrapper(),
      })

      act(() => {
        result.current.connect(10, 'drop-after-load')
      })

      await waitFor(() => {
        expect(result.current.websocketInstance).not.toBeNull()
      })

      const config = MockDataGridWebSocket.mock.lastCall![0]

      act(() => {
        config.onStatusChange!(true, result.current.websocketInstance!)
        config.onModelCreate!(createRenderableModel())
        config.onGridReady!()
        config.onSyncEnd!()
      })
      expect(result.current.hasCompletedInitialLoad).toBe(true)

      act(() => {
        config.onStatusChange!(false, result.current.websocketInstance!)
      })

      expect(result.current.hasCompletedInitialSync).toBe(true)
      expect(result.current.hasCompletedInitialLoad).toBe(true)

      // The close also triggers an auto-reconnect; let it settle
      await waitFor(() => {
        expect(mockEstablishWebsocketConnection).toHaveBeenCalledTimes(2)
      })
      expect(result.current.hasCompletedInitialLoad).toBe(true)
    })

    it('never reports false again while reconnecting to the same session', async () => {
      const renderedFlags: boolean[] = []
      const { result } = renderHook(
        () => {
          const hook = useDataGridWebSocket()
          // Record every rendered value. Asserting only the latest would pass even
          // if CONNECT_REQUESTED reset the flag and the effect re-latched it within
          // the same commit — which the user would see as the skeleton flickering
          // back over a loaded grid.
          renderedFlags.push(hook.hasCompletedInitialLoad)
          return hook
        },
        { wrapper: createWrapper() },
      )

      act(() => {
        result.current.connect(11, 'no-flicker-session')
      })

      await waitFor(() => {
        expect(result.current.websocketInstance).not.toBeNull()
      })

      const config = MockDataGridWebSocket.mock.lastCall![0]
      act(() => {
        config.onStatusChange!(true, result.current.websocketInstance!)
        config.onModelCreate!(createRenderableModel())
        config.onGridReady!()
        config.onSyncEnd!()
      })
      expect(result.current.hasCompletedInitialLoad).toBe(true)

      const firstRenderAfterLoad = renderedFlags.length

      act(() => {
        result.current.connect(11, 'no-flicker-session')
      })

      // Tolerant of the exact count so that this test fails on the render history
      // rather than on connection bookkeeping
      await waitFor(() => {
        expect(
          mockEstablishWebsocketConnection.mock.calls.length,
        ).toBeGreaterThanOrEqual(2)
      })

      const flagsAfterReconnect = renderedFlags.slice(firstRenderAfterLoad)
      // Guard against the assertion below passing on an empty array
      expect(flagsAfterReconnect.length).toBeGreaterThan(0)
      expect(flagsAfterReconnect).not.toContain(false)
    })

    it('becomes true once the model is renderable and the sync exchange is idle', async () => {
      const { result } = renderHook(() => useDataGridWebSocket(), {
        wrapper: createWrapper(),
      })

      act(() => {
        result.current.connect(4, 'loaded-session')
      })

      await waitFor(() => {
        expect(result.current.websocketInstance).not.toBeNull()
      })

      const config = MockDataGridWebSocket.mock.lastCall![0]

      act(() => {
        config.onModelCreate!(createRenderableModel())
        config.onSyncStart!()
      })
      expect(result.current.hasCompletedInitialLoad).toBe(false)

      act(() => {
        config.onGridReady!()
        config.onSyncEnd!()
      })
      expect(result.current.hasCompletedInitialLoad).toBe(true)
    })
  })
})
