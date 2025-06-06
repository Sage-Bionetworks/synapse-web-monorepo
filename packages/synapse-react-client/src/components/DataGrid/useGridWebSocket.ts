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

  // Store the latest values in refs to avoid stale closures
  const sessionIdRef = useRef(sessionId)
  const replicaIdRef = useRef(replicaId)
  const accessTokenRef = useRef(accessToken)
  const enabledRef = useRef(enabled)

  // Update refs when props change
  sessionIdRef.current = sessionId
  replicaIdRef.current = replicaId
  accessTokenRef.current = accessToken
  enabledRef.current = enabled

  const maxReconnectAttempts = 5

  const connect = useCallback(async () => {
    const currentSessionId = sessionIdRef.current
    const currentReplicaId = replicaIdRef.current
    const currentAccessToken = accessTokenRef.current

    if (
      !currentSessionId ||
      !currentReplicaId ||
      !currentAccessToken ||
      isConnecting
    ) {
      return
    }

    try {
      setIsConnecting(true)
      setError(null)

      // Get presigned WebSocket URL
      const presignedUrlResponse = await SynapseClient.GridSessionPresignedUrl(
        currentSessionId,
        currentReplicaId,
        currentAccessToken,
      )

      // Create WebSocket connection
      console.log('Connecting to WebSocket:', presignedUrlResponse)
      const ws = new WebSocket(presignedUrlResponse.presignedUrl)
      wsRef.current = ws

      ws.onopen = () => {
        console.log('WebSocket connected')
        setIsConnected(true)
        setIsConnecting(false)
        setError(null)
        reconnectAttemptsRef.current = 0
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
        wsRef.current = null

        // Auto-reconnect if connection was not closed intentionally and we haven't exceeded max attempts
        if (
          event.code !== 1000 &&
          enabledRef.current &&
          reconnectAttemptsRef.current < maxReconnectAttempts
        ) {
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
          console.log('Max reconnection attempts reached. Giving up.')
          setError(`Connection failed after ${maxReconnectAttempts} attempts`)
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
  }, [isConnecting]) // Only depend on isConnecting state

  const disconnect = useCallback(() => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current)
    }

    if (throttleTimeoutRef.current) {
      clearTimeout(throttleTimeoutRef.current)
    }

    if (wsRef.current) {
      wsRef.current.close(1000, 'Client disconnect')
      wsRef.current = null
    }

    messageQueueRef.current = []
    lastSentTimeRef.current = 0
    reconnectAttemptsRef.current = 0

    setIsConnected(false)
    setIsConnecting(false)
  }, [])

  const retryConnection = useCallback(() => {
    reconnectAttemptsRef.current = 0
    setError(null)
    if (enabledRef.current && sessionIdRef.current && replicaIdRef.current) {
      connect()
    }
  }, [connect])

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

  // FIXED: Simplified useEffect with stable dependencies
  useEffect(() => {
    const shouldConnect =
      enabled && sessionId && replicaId && !isConnected && !isConnecting
    const shouldDisconnect = !enabled

    if (shouldConnect) {
      console.log('Starting WebSocket connection...')
      connect()
    } else if (shouldDisconnect && (isConnected || isConnecting)) {
      console.log('Stopping WebSocket connection...')
      disconnect()
    }

    return () => {
      // Cleanup on unmount
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current)
      }
      if (throttleTimeoutRef.current) {
        clearTimeout(throttleTimeoutRef.current)
      }
      if (wsRef.current) {
        wsRef.current.close(1000, 'Component unmount')
      }
    }
  }, [
    enabled,
    sessionId,
    replicaId,
    isConnected,
    isConnecting,
    connect,
    disconnect,
  ])

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
