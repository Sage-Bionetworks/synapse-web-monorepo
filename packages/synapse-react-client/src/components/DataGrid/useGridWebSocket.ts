import { useState, useEffect, useRef, useCallback } from 'react'
import SynapseClient from '@/synapse-client/index'
import { useSynapseContext } from '@/utils/context/SynapseContext'

interface UseGridWebSocketProps {
  sessionId?: string
  replicaId?: string
  enabled?: boolean
}

interface GridMessage {
  type: string
  data: any
  timestamp: string
}

export const useGridWebSocket = ({
  sessionId,
  replicaId,
  enabled = false,
}: UseGridWebSocketProps) => {
  const { accessToken } = useSynapseContext()
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [messages, setMessages] = useState<GridMessage[]>([])

  // Use refs for values that don't need to trigger re-renders
  const wsRef = useRef<WebSocket | null>(null)
  const reconnectTimeoutRef = useRef<NodeJS.Timeout>()
  const reconnectAttemptsRef = useRef<number>(0)
  const messageQueueRef = useRef<any[]>([])
  const throttleTimeoutRef = useRef<NodeJS.Timeout>()
  const lastSentTimeRef = useRef<number>(0)

  // Store the latest values in refs to avoid stale closures and unnecessary reconnections
  const latestPropsRef = useRef({ sessionId, replicaId, accessToken, enabled })
  const connectionEstablishedRef = useRef(false)

  // Update refs when props change but don't trigger reconnection
  latestPropsRef.current = { sessionId, replicaId, accessToken, enabled }

  const maxReconnectAttempts = 5

  const connect = useCallback(async () => {
    const {
      sessionId: currentSessionId,
      replicaId: currentReplicaId,
      accessToken: currentAccessToken,
    } = latestPropsRef.current

    if (!currentSessionId || !currentReplicaId || !currentAccessToken) {
      console.log('Cannot connect: missing required props', {
        sessionId: !!currentSessionId,
        replicaId: !!currentReplicaId,
        accessToken: !!currentAccessToken,
      })
      return
    }

    if (isConnecting || wsRef.current?.readyState === WebSocket.CONNECTING) {
      console.log('Already connecting, skipping...')
      return
    }

    if (wsRef.current?.readyState === WebSocket.OPEN) {
      console.log('Already connected, skipping...')
      return
    }

    try {
      setIsConnecting(true)
      setError(null)
      console.log('Starting WebSocket connection...')

      // Get presigned WebSocket URL
      const presignedUrlResponse = await SynapseClient.GridSessionPresignedUrl(
        currentSessionId,
        currentReplicaId,
        currentAccessToken,
      )

      console.log('Got presigned URL, creating WebSocket...')
      const ws = new WebSocket(presignedUrlResponse.presignedUrl)
      wsRef.current = ws

      ws.onopen = () => {
        console.log('WebSocket connected successfully')
        setIsConnected(true)
        setIsConnecting(false)
        setError(null)
        reconnectAttemptsRef.current = 0
        connectionEstablishedRef.current = true
      }

      ws.onmessage = event => {
        try {
          const message: GridMessage = JSON.parse(event.data)
          setMessages(prev => [...prev, message])
          console.log('Received message:', message)
        } catch (error) {
          console.error('Failed to parse WebSocket message:', error)
        }
      }

      ws.onclose = event => {
        console.log('WebSocket closed:', event.code, event.reason)
        setIsConnected(false)
        setIsConnecting(false)

        const wasIntentionalClose = event.code === 1000
        const shouldReconnect =
          latestPropsRef.current.enabled &&
          !wasIntentionalClose &&
          reconnectAttemptsRef.current < maxReconnectAttempts &&
          connectionEstablishedRef.current

        if (shouldReconnect) {
          reconnectAttemptsRef.current += 1
          const reconnectDelay = Math.min(
            3000 * reconnectAttemptsRef.current,
            30000,
          )

          console.log(
            `Attempting to reconnect (${reconnectAttemptsRef.current}/${maxReconnectAttempts}) in ${reconnectDelay}ms...`,
          )

          reconnectTimeoutRef.current = setTimeout(() => {
            connect()
          }, reconnectDelay)
        } else if (reconnectAttemptsRef.current >= maxReconnectAttempts) {
          console.log('Max reconnection attempts reached')
          setError(`Connection failed after ${maxReconnectAttempts} attempts`)
        }

        // Clear the ref if this is an intentional close
        if (wasIntentionalClose) {
          wsRef.current = null
          connectionEstablishedRef.current = false
        }
      }

      ws.onerror = error => {
        console.error('WebSocket error:', error)
        setError('WebSocket connection error')
        setIsConnecting(false)
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Failed to connect'
      setError(errorMessage)
      setIsConnecting(false)
      console.error('Failed to establish WebSocket connection:', error)
    }
  }, [isConnecting]) // Only depend on isConnecting to prevent loops

  const disconnect = useCallback(() => {
    console.log('Disconnecting WebSocket...')

    // Clear timeouts
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current)
    }
    if (throttleTimeoutRef.current) {
      clearTimeout(throttleTimeoutRef.current)
    }

    // Close WebSocket
    if (wsRef.current) {
      wsRef.current.close(1000, 'Client disconnect')
      wsRef.current = null
    }

    // Reset state
    messageQueueRef.current = []
    lastSentTimeRef.current = 0
    reconnectAttemptsRef.current = 0
    connectionEstablishedRef.current = false
    setIsConnected(false)
    setIsConnecting(false)
  }, [])

  const retryConnection = useCallback(() => {
    console.log('Manual retry connection')
    reconnectAttemptsRef.current = 0
    setError(null)
    disconnect()
    setTimeout(() => {
      if (latestPropsRef.current.enabled) {
        connect()
      }
    }, 100)
  }, [connect, disconnect])

  const processMessageQueue = useCallback(() => {
    if (
      !wsRef.current ||
      !isConnected ||
      messageQueueRef.current.length === 0
    ) {
      return
    }

    const latestMessage =
      messageQueueRef.current[messageQueueRef.current.length - 1]

    try {
      wsRef.current.send(JSON.stringify(latestMessage))
      console.log('Sent throttled message:', latestMessage)
      lastSentTimeRef.current = Date.now()
    } catch (error) {
      console.error('Failed to send queued message:', error)
    }

    messageQueueRef.current = []
  }, [isConnected])

  const sendMessage = useCallback(
    (message: any) => {
      if (!wsRef.current || !isConnected) {
        console.warn('Cannot send message: WebSocket not connected')
        return false
      }

      const now = Date.now()
      const timeSinceLastSent = now - lastSentTimeRef.current
      const throttleDelay = 1000

      messageQueueRef.current.push(message)

      if (timeSinceLastSent >= throttleDelay) {
        processMessageQueue()
      } else {
        const remainingDelay = throttleDelay - timeSinceLastSent

        if (throttleTimeoutRef.current) {
          clearTimeout(throttleTimeoutRef.current)
        }

        throttleTimeoutRef.current = setTimeout(() => {
          processMessageQueue()
        }, remainingDelay)
      }

      return true
    },
    [isConnected, processMessageQueue],
  )

  // FIXED: Use a more stable effect that only connects when necessary
  useEffect(() => {
    const shouldConnect =
      enabled &&
      sessionId &&
      replicaId &&
      !connectionEstablishedRef.current &&
      !isConnecting
    const shouldDisconnect = !enabled && (isConnected || isConnecting)

    console.log('WebSocket useEffect:', {
      enabled,
      sessionId: !!sessionId,
      replicaId: !!replicaId,
      shouldConnect,
      shouldDisconnect,
      isConnected,
      isConnecting,
      connectionEstablished: connectionEstablishedRef.current,
    })

    if (shouldConnect) {
      console.log('Initiating WebSocket connection...')
      connect()
    } else if (shouldDisconnect) {
      console.log('Disconnecting WebSocket due to disabled state...')
      disconnect()
    }

    // Cleanup on unmount only
    return () => {
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current)
      }
      if (throttleTimeoutRef.current) {
        clearTimeout(throttleTimeoutRef.current)
      }
    }
  }, [enabled, sessionId, replicaId, isConnecting, connect, disconnect])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      disconnect()
    }
  }, [disconnect])

  return {
    isConnected,
    isConnecting,
    error,
    messages,
    connect,
    disconnect,
    sendMessage,
    retryConnection,
    reconnectAttempts: reconnectAttemptsRef.current,
    maxReconnectAttempts,
  }
}
