import { GridModel } from '@/components/DataGrid/DataGridTypes'
import { useCRDTModelView } from '@/components/DataGrid/useCRDTModelView'
import { useCallback, useEffect, useRef, useState } from 'react'
import { DataGridWebSocket } from './DataGridWebSocket'
import { useEstablishWebsocketConnection } from '@/synapse-queries/grid/useEstablishWebsocketConnection'
import { useDocumentVisibility } from '@react-hookz/web'

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
  const [model, setModel] = useState<GridModel | null>(null)
  const [isGridReady, setIsGridReady] = useState(false)
  // TODO: Connection status could be derived from a `useSyncExternalStore` subscribed to the WebSocket instance
  const [isConnected, setIsConnected] = useState(false)
  const [connectionParams, setConnectionParams] = useState<{
    replicaId: number
    sessionId: string
  } | null>(null)

  const modelSnapshot = useCRDTModelView(model)
  const [websocketInstance, setWebSocketInstance] =
    useState<DataGridWebSocket | null>(null)
  const isVisible = useDocumentVisibility()

  const {
    mutate: establishWebsocketConnection,
    isPending: isEstablishingWebsocketConnection,
    error: errorEstablishingWebsocketConnection,
    presignedUrl,
  } = useEstablishWebsocketConnection({
    onSuccess: ws => setWebSocketInstance(ws),
    onError: err => console.error('Failed to establish WebSocket', err),
  })

  // Initiate (or re-initiate) a connection
  const connect = useCallback((replicaId: number, sessionId: string) => {
    setConnectionParams({ replicaId, sessionId })
  }, [])

  const shouldEstablishWebsocketConnection =
    !!connectionParams &&
    !isConnected &&
    !isEstablishingWebsocketConnection &&
    !errorEstablishingWebsocketConnection &&
    isVisible

  /**
   * Establish the WebSocket connection when conditions are met.
   * Delegates to the mutation hook for presigned URL fetch, WebSocket creation, and retry logic.
   */
  useEffect(() => {
    if (!shouldEstablishWebsocketConnection || !connectionParams) return

    establishWebsocketConnection({
      replicaId: connectionParams.replicaId,
      sessionId: connectionParams.sessionId,
      websocketOptions: {
        onGridReady: () => setIsGridReady(true),
        onStatusChange: (open: boolean) => setIsConnected(open),
        onModelCreate: setModel,
      },
    })
  }, [
    shouldEstablishWebsocketConnection,
    connectionParams,
    establishWebsocketConnection,
    isVisible,
  ])

  useEffect(() => {
    return () => {
      websocketInstance?.disconnect()
    }
  }, [websocketInstance])

  return {
    isConnected,
    websocketInstance,
    isGridReady,
    model,
    modelSnapshot,
    connect,
    presignedUrl,
  }
}
