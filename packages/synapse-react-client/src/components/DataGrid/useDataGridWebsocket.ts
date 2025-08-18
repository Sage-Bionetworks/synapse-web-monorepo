import { useCallback, useState } from 'react'
import { DataGridWebSocket } from './DataGridWebSocket'
import { useCRDTState } from './useCRDTState'

export function useDataGridWebSocket() {
  const [websocketInstance, setWebSocketInstance] =
    useState<DataGridWebSocket | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isGridReady, setIsGridReady] = useState(false)

  const { modelRef, modelSnapshot, getModel, setModel } = useCRDTState()

  const createWebsocket = useCallback((replicaId: number, url: string) => {
    if (url && !websocketInstance) {
      const webSocketHandler = new DataGridWebSocket({
        replicaId: replicaId,
        url,
        onGridReady: () => {
          setIsGridReady(true)
        },
        onStatusChange: (isOpen: boolean, instance: DataGridWebSocket) => {
          setIsConnected(isOpen)
        },
        onModelChange: model => {
          setModel(model)
        },
      })

      setWebSocketInstance(webSocketHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    isConnected,
    createWebsocket,
    websocketInstance,
    isGridReady,
    modelRef,
    modelSnapshot,
    getModel,
    setModel,
  }
}
