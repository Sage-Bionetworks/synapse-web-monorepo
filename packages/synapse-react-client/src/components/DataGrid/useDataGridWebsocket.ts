import { GridModel } from '@/components/DataGrid/DataGridTypes'
import { useCRDTModelView } from '@/components/DataGrid/useCRDTModelView'
import { useCallback, useEffect, useRef, useState } from 'react'
import { DataGridWebSocket } from './DataGridWebSocket'
import { useGridPresignedUrl } from './hooks/useGridPresignedUrl'

export function useDataGridWebSocket() {
  const [model, setModel] = useState<GridModel | null>(null)
  const [isGridReady, setIsGridReady] = useState(false)
  // TODO: Connection status could be derived from a `useSyncExternalStore` subscribed to the WebSocket instance
  const [isConnected, setIsConnected] = useState(false)

  const modelSnapshot = useCRDTModelView(model)

  const wsRef = useRef<DataGridWebSocket | null>(null) // Reference to current WebSocket instance
  const connectingRef = useRef(false) // Tracks if a connection attempt is in progress

  const { mutateAsync: fetchPresignedUrl } = useGridPresignedUrl()

  // Checks if a WebSocket exists and is open, to avoid unnecessary reconnects.
  const isUsableSocket = (ws: DataGridWebSocket | null | undefined) =>
    !!ws && ws.socket.readyState === WebSocket.OPEN

  const createWebsocket = useCallback((replicaId: number, url: string) => {
    if (!url || connectingRef.current) return

    connectingRef.current = true

    // Disconnect previous socket only if it exists
    if (wsRef.current && wsRef.current.socket.readyState !== WebSocket.CLOSED) {
      wsRef.current.disconnect()
    }

    const webSocketHandler = new DataGridWebSocket({
      replicaId: replicaId,
      url,
      onGridReady: () => {
        setIsGridReady(true)
      },
      onStatusChange: (open: boolean) => {
        setIsConnected(open)
        if (open) connectingRef.current = false
      },
      onModelCreate: model => {
        setModel(model)
      },
    })

    wsRef.current = webSocketHandler
  }, [])

  const reconnect = useCallback(
    async (replicaId?: number, sessionId?: string) => {
      if (!replicaId) return
      if (isUsableSocket(wsRef.current)) return

      connectingRef.current = false
      setIsConnected(false)
      setIsGridReady(false)

      // Get a fresh presigned URL since old ones can expire before reconnecting
      const url = await fetchPresignedUrl({
        sessionId: sessionId ?? '',
        replicaId,
      })

      createWebsocket(replicaId, url)
    },
    [createWebsocket],
  )

  useEffect(() => {
    return () => {
      wsRef.current?.disconnect()
    }
  }, [])

  return {
    isConnected,
    createWebsocket,
    websocketInstance: wsRef.current,
    isGridReady,
    model,
    modelSnapshot,
    reconnect,
  }
}
