import { useCallback, useEffect, useState } from 'react'
import { WebSocketHandler } from './DataGridWebSocket'
import { useCRDTState } from './useCRDTState'

export function useDataGridWebSocket() {
  const [websocketInstance, setWebSocketInstance] =
    useState<WebSocketHandler | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isGridReady, setIsGridReady] = useState(false)
  //   useEffect(() => {
  //      return () => {
  //         if (websocketInstance) {
  //             websocketInstance.disconnect()
  //             setWebSocketInstance(null)
  //             // TODO: Maybe tell the component that we are disconnected
  //         }
  //     }
  //  }, [url, websocketInstance])

  const { modelRef, modelSnapshot, getModel, setModel } = useCRDTState()

  const createWebsocket = useCallback((url: string) => {
    if (url && !websocketInstance) {
      const webSocketHandler = new WebSocketHandler({
        url,
        onGridReady: () => {
          setIsGridReady(true)
        },
        onStatusChange: (isOpen, instance) => {
          setIsConnected(isOpen)
          instance.sendSyncMessage()
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
