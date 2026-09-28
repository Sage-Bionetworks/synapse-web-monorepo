import {
  GridModel,
  GridModelSnapshot,
} from '@/components/DataGrid/DataGridTypes'
import { useCRDTModelView } from '@/components/DataGrid/useCRDTModelView'
import { normalizeWebsocketError } from '@/components/DataGrid/utils/normalizeWebsocketError'
import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react'
import { DataGridWebSocket } from './DataGridWebSocket'
import { useEstablishWebsocketConnection } from '@/synapse-queries/grid/useEstablishWebsocketConnection'
import { useDocumentVisibility } from '@react-hookz/web'

// State type
export interface WebSocketState {
  model: GridModel | null
  /**
   * True if the WebSocket has finished a sync exchange on the current connection
   * and can process CRDT updates. Set by `GRID_READY`; cleared on disconnect until
   * `hasCompletedInitialLoad` is set, since a drop mid-replay leaves the model
   * holding only part of the server's data.
   */
  hasCompletedInitialSync: boolean
  /**
   * True once the first connection for the current session has finished replaying
   * the server's data into the model. A one-way transition: later sync activity
   * never takes it back to false, and only connecting to a different
   * session/replica resets it.
   */
  hasCompletedInitialLoad: boolean
  /**
   * True while a clock-sync exchange is in progress. Set on every outgoing
   * `synchronize-clock` and cleared on `ResponseComplete`, which the server
   * sends once per exchange to signal "we're synchronized" — not per request.
   */
  isSyncing: boolean
  isConnected: boolean
  isConnecting: boolean
  connectionParams: {
    replicaId: number
    sessionId: string
  } | null
  websocketInstance: DataGridWebSocket | null
  connectionAttemptId: number | null
  connectionError: unknown
  websocketError: unknown
}

// Action types
export type WebSocketAction =
  | {
      type: 'CONNECT_REQUESTED'
      payload: { replicaId: number; sessionId: string; attemptId: number }
    }
  | { type: 'CONNECTION_ESTABLISHED'; payload: DataGridWebSocket }
  | { type: 'CONNECTION_OPENED' }
  | { type: 'CONNECTION_CLOSED' }
  | { type: 'GRID_READY' }
  | { type: 'INITIAL_LOAD_COMPLETE' }
  | { type: 'SYNC_STARTED' }
  | { type: 'SYNC_ENDED' }
  | { type: 'MODEL_CREATED'; payload: GridModel }
  | { type: 'CONNECTION_ERROR'; payload: unknown }
  | { type: 'WEBSOCKET_ERROR'; payload: unknown }

// Reducer function
export function websocketReducer(
  state: WebSocketState,
  action: WebSocketAction,
): WebSocketState {
  switch (action.type) {
    case 'CONNECT_REQUESTED': {
      const isSameConnection =
        state.connectionParams &&
        state.connectionParams.replicaId === action.payload.replicaId &&
        state.connectionParams.sessionId === action.payload.sessionId

      return {
        ...state,
        connectionParams: {
          replicaId: action.payload.replicaId,
          sessionId: action.payload.sessionId,
        },
        hasCompletedInitialSync: isSameConnection
          ? state.hasCompletedInitialSync
          : false,
        hasCompletedInitialLoad: isSameConnection
          ? state.hasCompletedInitialLoad
          : false,
        isSyncing: false,
        model: isSameConnection ? state.model : null,
        isConnected: false,
        isConnecting: false,
        connectionAttemptId: action.payload.attemptId,
        connectionError: null,
      }
    }

    case 'CONNECTION_ESTABLISHED':
      return {
        ...state,
        websocketInstance: action.payload,
        isConnecting: true,
      }

    case 'CONNECTION_OPENED':
      return {
        ...state,
        isConnected: true,
        isConnecting: false,
      }

    case 'CONNECTION_CLOSED':
      return {
        ...state,
        isConnected: false,
        isConnecting: false,
        isSyncing: false,
        // A drop before the initial load finishes invalidates the completed-exchange
        // signal: the model may hold only the part of the data that arrived so far.
        // Clearing it makes the readiness gate wait for the reconnect's replay
        // instead of latching onto a partially loaded model. Once the load is done,
        // drops are ordinary reconnects and the signal must survive them.
        hasCompletedInitialSync: state.hasCompletedInitialLoad
          ? state.hasCompletedInitialSync
          : false,
      }

    case 'GRID_READY':
      return {
        ...state,
        hasCompletedInitialSync: true,
      }

    case 'INITIAL_LOAD_COMPLETE':
      return {
        ...state,
        hasCompletedInitialLoad: true,
      }

    case 'SYNC_STARTED':
      return {
        ...state,
        isSyncing: true,
      }

    case 'SYNC_ENDED':
      return {
        ...state,
        isSyncing: false,
      }

    case 'MODEL_CREATED':
      return {
        ...state,
        model: action.payload,
      }

    case 'CONNECTION_ERROR':
      return {
        ...state,
        connectionError: action.payload,
        isConnecting: false,
      }

    case 'WEBSOCKET_ERROR':
      return {
        ...state,
        websocketError: action.payload,
      }

    default:
      return state
  }
}

export const initialWebSocketState: WebSocketState = {
  model: null,
  hasCompletedInitialSync: false,
  hasCompletedInitialLoad: false,
  isSyncing: false,
  isConnected: false,
  isConnecting: false,
  connectionParams: null,
  websocketInstance: null,
  connectionAttemptId: null,
  connectionError: null,
  websocketError: null,
}

/**
 * Checks if the model snapshot contains the minimum data required for rendering (columns and rows).
 */
function isModelRenderable(
  model: GridModel | null,
  modelSnapshot: GridModelSnapshot | null | undefined,
) {
  if (!model?.api.getSnapshot() || !modelSnapshot) {
    return false
  }
  const { columnNames, columnOrder, rows } = modelSnapshot
  const columnsReady = columnNames.length >= 1
  const orderReady = columnOrder.length >= 1
  const rowsReady = rows.length >= 0
  return columnsReady && orderReady && rowsReady
}

/**
 * Whether the server has finished replaying its data into the model, so the grid
 * can be shown and edited. Drives the one-way `INITIAL_LOAD_COMPLETE` transition.
 *
 * Returns false once `hasCompletedInitialLoad` is set, so callers can dispatch
 * unconditionally on a true result without re-entering the transition.
 *
 * `hasCompletedInitialSync` alone is not sufficient: the server may complete the
 * snapshot request before the client has fetched and decoded the snapshot, which
 * leaves that flag true while the rows are still arriving. Requiring an idle sync
 * exchange holds the transition until the replay drains.
 */
export function isInitialLoadReady(
  state: WebSocketState,
  modelSnapshot: GridModelSnapshot | null | undefined,
): boolean {
  return (
    !state.hasCompletedInitialLoad &&
    state.hasCompletedInitialSync &&
    !state.isSyncing &&
    isModelRenderable(state.model, modelSnapshot)
  )
}

/**
 * Custom hook to manage a DataGrid WebSocket connection.
 * Handles:
 *   - Fetching presigned URLs via a mutation hook
 *   - Instantiating the DataGridWebSocket
 *   - Connection status tracking
 *   - Reconnection on disconnect
 *   - Grid model updates and snapshot tracking
 */
export interface UseDataGridWebSocketOptions {
  onGridReady?: () => void
  onReplicaConnected?: () => void
  onReplicaDisconnected?: () => void
}

export function useDataGridWebSocket(options?: UseDataGridWebSocketOptions) {
  const [state, dispatch] = useReducer(websocketReducer, initialWebSocketState)

  const connectionAttemptCounter = useRef(0)
  const activeConnectionAttemptIdRef = useRef<number | null>(null)

  const modelSnapshot = useCRDTModelView(state.model)

  const isDocumentVisible = useDocumentVisibility()

  const {
    mutateAsync: establishWebsocketConnection,
    isPending: isEstablishingWebsocketConnection,
    error: errorEstablishingWebsocketConnection,
    presignedUrl,
    reset: resetEstablishWebsocketConnection,
    clearPresignedUrl,
  } = useEstablishWebsocketConnection()

  // Update model creation handler - only set model, don't reset to null on disconnect
  const handleModelCreate = useCallback(
    (newModel: GridModel) => {
      dispatch({ type: 'MODEL_CREATED', payload: newModel })
    },
    [dispatch],
  )

  // Memoize websocket options to prevent unnecessary re-renders (excluding model to avoid circular deps)
  const websocketOptionsWithoutModel = useMemo(
    () => ({
      onGridReady: () => {
        dispatch({ type: 'GRID_READY' })
        options?.onGridReady?.()
      },
      onStatusChange: (open: boolean) =>
        dispatch({ type: open ? 'CONNECTION_OPENED' : 'CONNECTION_CLOSED' }),
      onModelCreate: handleModelCreate,
      onReplicaConnected: options?.onReplicaConnected,
      onReplicaDisconnected: options?.onReplicaDisconnected,
      onSyncStart: () => dispatch({ type: 'SYNC_STARTED' }),
      onSyncEnd: () => dispatch({ type: 'SYNC_ENDED' }),
      onError: (error: unknown) =>
        dispatch({
          type: 'WEBSOCKET_ERROR',
          payload: normalizeWebsocketError(error),
        }),
    }),
    [
      handleModelCreate,
      options?.onGridReady,
      options?.onReplicaConnected,
      options?.onReplicaDisconnected,
    ],
  )

  // Initiate (or re-initiate) a connection
  const connect = useCallback(
    (replicaId: number, sessionId: string) => {
      resetEstablishWebsocketConnection()

      const isDifferentConnection =
        !state.connectionParams ||
        state.connectionParams.replicaId !== replicaId ||
        state.connectionParams.sessionId !== sessionId

      if (isDifferentConnection) {
        clearPresignedUrl()
      }

      connectionAttemptCounter.current += 1
      const attemptId = connectionAttemptCounter.current

      dispatch({
        type: 'CONNECT_REQUESTED',
        payload: { replicaId, sessionId, attemptId },
      })
    },
    [
      dispatch,
      state.connectionParams,
      resetEstablishWebsocketConnection,
      clearPresignedUrl,
      connectionAttemptCounter,
    ],
  )

  /**
   * Establish the WebSocket connection when conditions are met.
   * Uses the current model state at connection time for reconnections to the same session.
   * Note: Changes to `model` alone do NOT trigger reconnection - only changes to connection
   * params, visibility, or connection status will trigger a new connection attempt.
   */
  useEffect(() => {
    // Don't attempt connection if conditions aren't met
    const { connectionParams, connectionAttemptId } = state

    if (
      !connectionParams ||
      connectionAttemptId === null ||
      state.isConnected ||
      state.isConnecting ||
      isEstablishingWebsocketConnection ||
      errorEstablishingWebsocketConnection ||
      state.connectionError ||
      !isDocumentVisible
    ) {
      return
    }

    activeConnectionAttemptIdRef.current = connectionAttemptId

    // Use current model state for reconnections to same session
    // (model may have been created by a previous connection)
    establishWebsocketConnection({
      replicaId: connectionParams.replicaId,
      sessionId: connectionParams.sessionId,
      websocketOptions: {
        ...websocketOptionsWithoutModel,
        model: state.model, // Current model at connection time
      },
    })
      .then(ws => {
        if (activeConnectionAttemptIdRef.current !== connectionAttemptId) {
          ws.disconnect()
          return
        }

        dispatch({ type: 'CONNECTION_ESTABLISHED', payload: ws })
      })
      .catch(err => {
        dispatch({ type: 'CONNECTION_ERROR', payload: err })
        console.error('Failed to establish WebSocket', err)
      })
  }, [
    state,
    state.connectionParams,
    state.connectionAttemptId,
    state.isConnected,
    state.isConnecting,
    isEstablishingWebsocketConnection,
    errorEstablishingWebsocketConnection,
    isDocumentVisible,
    establishWebsocketConnection,
    websocketOptionsWithoutModel,
  ])

  const previousConnectionParams =
    useRef<WebSocketState['connectionParams']>(null)

  useEffect(() => {
    const previous = previousConnectionParams.current
    const current = state.connectionParams

    if (
      previous &&
      current &&
      (previous.replicaId !== current.replicaId ||
        previous.sessionId !== current.sessionId)
    ) {
      state.websocketInstance?.disconnect()
    }

    previousConnectionParams.current = current
  }, [state.connectionParams, state.websocketInstance])

  useEffect(() => {
    return () => {
      state.websocketInstance?.disconnect()
      activeConnectionAttemptIdRef.current = null
    }
  }, [state.websocketInstance])

  useEffect(() => {
    if (isInitialLoadReady(state, modelSnapshot)) {
      dispatch({ type: 'INITIAL_LOAD_COMPLETE' })
    }
  }, [state, modelSnapshot])

  return {
    isConnected: state.isConnected,
    websocketInstance: state.websocketInstance,
    hasCompletedInitialSync: state.hasCompletedInitialSync,
    hasCompletedInitialLoad: state.hasCompletedInitialLoad,
    isSyncing: state.isSyncing,
    model: state.model,
    modelSnapshot,
    connect,
    presignedUrl,
    errorEstablishingWebsocketConnection:
      state.connectionError ?? errorEstablishingWebsocketConnection,
    websocketError: state.websocketError,
  }
}
