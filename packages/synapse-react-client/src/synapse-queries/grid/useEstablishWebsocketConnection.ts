import { useCallback, useEffect, useRef } from 'react'
import { useGridPresignedUrl } from '@/synapse-queries/grid/useGridPresignedUrl'
import { DataGridWebSocket } from '@/components/DataGrid/DataGridWebSocket'
import { useDocumentVisibility } from '@react-hookz/web'
import { useMutation, UseMutationOptions } from '@tanstack/react-query'
import { GridModel } from '@/components/DataGrid/DataGridTypes'

interface EstablishWebsocketParams {
  replicaId: number
  sessionId: string
  websocketOptions?: {
    onGridReady?: () => void
    onStatusChange?: (open: boolean) => void
    onModelCreate?: (model: GridModel) => void
  }
}

/**
 * Hook to establish a DataGrid WebSocket using a presigned URL,
 * with optional callbacks for grid readiness, status changes, and model creation.
 * Handles automatic reconnection with exponential backoff and returns the WebSocket instance.
 */
export function useEstablishWebsocketConnection(
  options?: Partial<
    UseMutationOptions<DataGridWebSocket, unknown, EstablishWebsocketParams>
  >,
) {
  const { mutateAsync: fetchPresignedUrl } = useGridPresignedUrl()
  const isVisible = useDocumentVisibility()

  const retryRef = useRef(1000) // starting delay 1s
  const retryTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const wsRef = useRef<DataGridWebSocket | null>(null)
  const lastParamsRef = useRef<EstablishWebsocketParams | null>(null)

  const createWebsocket = useCallback(
    async ({
      replicaId,
      sessionId,
      websocketOptions,
    }: EstablishWebsocketParams) => {
      if (!replicaId) throw new Error('replicaId is required')
      const url = await fetchPresignedUrl({ replicaId, sessionId })

      // If there is an existing WebSocket, disconnect it before creating a new one
      if (wsRef.current) {
        wsRef.current.disconnect()
        wsRef.current = null
      }

      // Create a new DataGridWebSocket instance with the replicaId and presigned URL + any optional callbacks
      const ws = new DataGridWebSocket({
        replicaId,
        url,
        ...(websocketOptions || {}),
      })

      // Save the new WebSocket instance
      wsRef.current = ws

      // Save the parameters used to create this WebSocket, for future reconnect attempts
      lastParamsRef.current = { replicaId, sessionId, websocketOptions }

      return ws
    },
    [fetchPresignedUrl],
  )

  const mutation = useMutation<
    DataGridWebSocket,
    unknown,
    EstablishWebsocketParams
  >({
    mutationFn: createWebsocket,
    ...options,
  })

  const reconnect = useCallback(
    ({ replicaId, sessionId }: EstablishWebsocketParams) => {
      if (!replicaId || !isVisible) return
      let stopped = false

      const attemptReconnect = async () => {
        if (stopped) return

        const socketReady = wsRef.current?.socket.readyState === WebSocket.OPEN

        if (!socketReady) {
          console.log(
            `Reconnecting WebSocket... next retry in ${retryRef.current}ms`,
          )

          // Call the mutation to create a new WebSocket instance.
          await mutation.mutateAsync({
            replicaId,
            sessionId,
            websocketOptions: lastParamsRef.current?.websocketOptions,
          })

          // Schedule next attempt with exponential backoff
          retryTimerRef.current = setTimeout(() => {
            attemptReconnect()
          }, retryRef.current)

          // Double the delay for the next attempt, ceiling at 10s
          retryRef.current = Math.min(retryRef.current * 2, 10000)
        } else {
          // Reset delay when connected
          retryRef.current = 1000
          if (retryTimerRef.current) {
            clearTimeout(retryTimerRef.current)
            retryTimerRef.current = null
          }
        }
      }

      attemptReconnect()

      return () => {
        stopped = true
        if (retryTimerRef.current) {
          clearTimeout(retryTimerRef.current)
          retryTimerRef.current = null
        }
      }
    },
    [mutation, isVisible],
  )

  useEffect(() => {
    return () => {
      wsRef.current?.disconnect()
      if (retryTimerRef.current) {
        clearTimeout(retryTimerRef.current)
        retryTimerRef.current = null
      }
    }
  }, [])

  return {
    ...mutation,
    websocketInstance: wsRef.current,
    reconnect,
  }
}
