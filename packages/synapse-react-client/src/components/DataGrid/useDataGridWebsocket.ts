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
  const wsRef = useRef<DataGridWebSocket | null>(null) // Reference to current WebSocket instance
  const isVisible = useDocumentVisibility()

  const {
    mutateAsync: establishWebsocketConnection,
    isPending: isEstablishingWebsocketConnection,
    reconnect,
  } = useEstablishWebsocketConnection({
    onSuccess: (ws: DataGridWebSocket) => {
      wsRef.current = ws
    },
  })

  // Initiate (or re-initiate) a connection
  const connect = useCallback((replicaId: number, sessionId: string) => {
    setConnectionParams({ replicaId, sessionId })
  }, [])

  const shouldEstablishWebsocketConnection =
    !!connectionParams &&
    !isConnected &&
    !isEstablishingWebsocketConnection &&
    isVisible

  /**
   * Establish the WebSocket connection when conditions are met.
   * Delegates to the mutation hook for presigned URL fetch, WebSocket creation, and retry logic.
   */
  useEffect(() => {
    if (shouldEstablishWebsocketConnection) {
      const { replicaId, sessionId } = connectionParams

      establishWebsocketConnection({
        replicaId,
        sessionId,
        websocketOptions: {
          onGridReady: () => {
            setIsGridReady(true)
          },
          onStatusChange: (open: boolean) => {
            setIsConnected(open)
            if (!open && connectionParams) {
              reconnect(connectionParams)
            }
          },
          onModelCreate: model => {
            setModel(model)
          },
        },
      }).catch(err => {
        console.error('Failed to establish WebSocket connection', err)
      })
    }
  }, [
    shouldEstablishWebsocketConnection,
    connectionParams,
    establishWebsocketConnection,
    isVisible,
  ])

  useEffect(() => {
    return () => {
      wsRef.current?.disconnect()
    }
  }, [])

  return {
    isConnected,
    websocketInstance: wsRef.current,
    isGridReady,
    model,
    modelSnapshot,
    connect,
  }
}
