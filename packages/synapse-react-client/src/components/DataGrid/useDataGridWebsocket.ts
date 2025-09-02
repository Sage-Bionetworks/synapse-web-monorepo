import { GridModel } from '@/components/DataGrid/DataGridTypes'
import { useCRDTModelView } from '@/components/DataGrid/useCRDTModelView'
import { useCallback, useEffect, useState } from 'react'
import { DataGridWebSocket } from './DataGridWebSocket'

export function useDataGridWebSocket() {
  const [model, setModel] = useState<GridModel | null>(null)
  const [websocketInstance, setWebSocketInstance] =
    useState<DataGridWebSocket | null>(null)
  const [isGridReady, setIsGridReady] = useState(false)
  // TODO: Connection status could be derived from a `useSyncExternalStore` subscribed to the WebSocket instance
  const [isConnected, setIsConnected] = useState(false)

  const modelSnapshot = useCRDTModelView(model)

  const createWebsocket = useCallback((replicaId: number, url: string) => {
    if (url && !websocketInstance) {
      const webSocketHandler = new DataGridWebSocket({
        replicaId: replicaId,
        url,
        onGridReady: () => {
          setIsGridReady(true)
        },
        onStatusChange: (isOpen: boolean, _instance: DataGridWebSocket) => {
          setIsConnected(isOpen)
        },
        onModelCreate: model => {
          setModel(model)
        },
      })

      setWebSocketInstance(webSocketHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    return () => {
      if (websocketInstance) {
        websocketInstance.disconnect()
      }
      setModel(null)
      setIsGridReady(false)
    }
  }, [websocketInstance])

  return {
    isConnected,
    createWebsocket,
    websocketInstance,
    isGridReady,
    model,
    modelSnapshot,
  }
}
