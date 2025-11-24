import { GridModel } from '@/components/DataGrid/DataGridTypes'
import { useCRDTModelView } from '@/components/DataGrid/useCRDTModelView'
import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react'
import { DataGridWebSocket } from './DataGridWebSocket'
import { useEstablishWebsocketConnection } from '@/synapse-queries/grid/useEstablishWebsocketConnection'
import { useDocumentVisibility } from '@react-hookz/web'

// State type
interface WebSocketState {
  model: GridModel | null
  isGridReady: boolean
  isConnected: boolean
  isConnecting: boolean
  connectionParams: {
    replicaId: number
    sessionId: string
  } | null
  websocketInstance: DataGridWebSocket | null
  connectionAttemptId: number | null
  connectionError: unknown
}

// Action types
type WebSocketAction =
  | {
      type: 'CONNECT_REQUESTED'
      payload: { replicaId: number; sessionId: string; attemptId: number }
    }
  | { type: 'CONNECTION_ESTABLISHED'; payload: DataGridWebSocket }
  | { type: 'CONNECTION_OPENED' }
  | { type: 'CONNECTION_CLOSED' }
  | { type: 'GRID_READY' }
  | { type: 'MODEL_CREATED'; payload: GridModel }
  | { type: 'CONNECTION_ERROR'; payload: unknown }

// Reducer function
function websocketReducer(
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
        isGridReady: isSameConnection ? state.isGridReady : false,
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
      }

    case 'GRID_READY':
      return {
        ...state,
        isGridReady: true,
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

    default:
      return state
  }
}

export const initialWebSocketState: WebSocketState = {
  model: null,
  isGridReady: false,
  isConnected: false,
  isConnecting: false,
  connectionParams: null,
  websocketInstance: null,
  connectionAttemptId: null,
  connectionError: null,
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
export function useDataGridWebSocket() {
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
      onGridReady: () => dispatch({ type: 'GRID_READY' }),
      onStatusChange: (open: boolean) =>
        dispatch({ type: open ? 'CONNECTION_OPENED' : 'CONNECTION_CLOSED' }),
      onModelCreate: handleModelCreate,
    }),
    [handleModelCreate],
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

  return {
    isConnected: state.isConnected,
    websocketInstance: state.websocketInstance,
    isGridReady: state.isGridReady,
    model: state.model,
    modelSnapshot,
    connect,
    presignedUrl,
    errorEstablishingWebsocketConnection:
      state.connectionError ?? errorEstablishingWebsocketConnection,
  }
}
