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
  const wsRef = useRef<WebSocket | null>(null)
  const reconnectTimeoutRef = useRef<NodeJS.Timeout>()

  // Throttling state
  const messageQueueRef = useRef<any[]>([])
  const throttleTimeoutRef = useRef<NodeJS.Timeout>()
  const lastSentTimeRef = useRef<number>(0)

  const connect = useCallback(async () => {
    if (!sessionId || !replicaId || !accessToken || isConnecting) {
      return
    }

    try {
      setIsConnecting(true)
      setError(null)

      // Get presigned WebSocket URL
      const presignedUrlResponse = await SynapseClient.GridSessionPresignedUrl(
        sessionId,
        replicaId,
        accessToken,
      )

      // Create WebSocket connection
      console.log('Connecting to WebSocket:', presignedUrlResponse.url)
      const ws = new WebSocket(presignedUrlResponse.url)
      wsRef.current = ws

      ws.onopen = () => {
        console.log('WebSocket connected')
        setIsConnected(true)
        setIsConnecting(false)
        setError(null)
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

        // Auto-reconnect if connection was not closed intentionally
        if (event.code !== 1000 && enabled) {
          reconnectTimeoutRef.current = setTimeout(() => {
            console.log('Attempting to reconnect...')
            connect()
          }, 3000)
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
  }, [sessionId, replicaId, accessToken, isConnecting, enabled])

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

    // Clear message queue
    messageQueueRef.current = []
    lastSentTimeRef.current = 0

    setIsConnected(false)
    setIsConnecting(false)
  }, [])

  // Process queued messages and send them
  const processMessageQueue = useCallback(() => {
    if (
      !wsRef.current ||
      !isConnected ||
      messageQueueRef.current.length === 0
    ) {
      return
    }

    // Get the most recent message from the queue (ignore older ones)
    const latestMessage =
      messageQueueRef.current[messageQueueRef.current.length - 1]

    try {
      wsRef.current.send(JSON.stringify(latestMessage))
      console.log('Sent throttled message:', latestMessage)
      lastSentTimeRef.current = Date.now()
    } catch (error) {
      console.error('Failed to send queued message:', error)
    }

    // Clear the queue after sending
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
      const throttleDelay = 1000 // 1 second

      // Add message to queue
      messageQueueRef.current.push(message)

      // If enough time has passed since last send, send immediately
      if (timeSinceLastSent >= throttleDelay) {
        processMessageQueue()
      } else {
        // Schedule sending after the remaining throttle time
        const remainingDelay = throttleDelay - timeSinceLastSent

        // Clear existing timeout to reset the timer
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

  // Auto-connect when enabled and we have required data
  useEffect(() => {
    if (enabled && sessionId && replicaId && !isConnected && !isConnecting) {
      connect()
    } else if (!enabled) {
      disconnect()
    }

    return () => {
      disconnect()
    }
  }, [
    enabled,
    sessionId,
    replicaId,
    connect,
    disconnect,
    isConnected,
    isConnecting,
  ])

  return {
    isConnected,
    isConnecting,
    error,
    messages,
    connect,
    disconnect,
    sendMessage,
  }
}
