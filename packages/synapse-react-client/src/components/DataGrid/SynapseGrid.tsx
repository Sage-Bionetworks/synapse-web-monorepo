import { useEffect, useMemo, useState, useRef, useCallback } from 'react'
import { useCreateGridSession } from './useCreateGridSession'
import { useGridWebSocket } from './useGridWebSocket'
import SynapseClient from '@/synapse-client/index'
import {
  SynapseContextProvider,
  useSynapseContext,
} from '@/utils/context/SynapseContext'
import { DataGrid, DataGridRow } from './DataGrid'
import { Column } from 'react-datasheet-grid'
import { CreateReplicaResponse } from '@sage-bionetworks/synapse-types'

interface SynapseGridProps {
  initialRows?: DataGridRow[]
  initialColumns?: Column[]
}

export function SynapseGrid({
  initialRows = [],
  initialColumns = [],
}: SynapseGridProps = {}) {
  const currentContext = useSynapseContext()
  const { accessToken } = useSynapseContext()

  const hasInitializedRef = useRef(false)

  // Store session ID separately since createGridSession.data isn't persisting
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [replicaData, setReplicaData] = useState<CreateReplicaResponse | null>(
    null,
  )
  const [replicaError, setReplicaError] = useState<string | null>(null)
  const [isCreatingReplica, setIsCreatingReplica] = useState(false)

  const createGridSession = useCreateGridSession({
    onSuccess: async response => {
      console.log('=== SESSION CREATION SUCCESS ===')
      console.log('Full response:', response)

      // Store the session ID immediately
      const sessionIdFromResponse = response.gridSession?.sessionId
      setSessionId(sessionIdFromResponse)
      console.log('Stored session ID:', sessionIdFromResponse)

      try {
        setIsCreatingReplica(true)
        setReplicaError(null)

        const replica = await SynapseClient.GridSessionReplica(
          sessionIdFromResponse,
          accessToken,
        )
        setReplicaData(replica)
        console.log('Replica created:', replica)
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Failed to create replica'
        setReplicaError(errorMessage)
        console.error('Failed to create replica:', error)
      } finally {
        setIsCreatingReplica(false)
      }
    },
    onError: error => {
      console.error('Failed to create session:', error)
    },
  })

  // Extract replica ID
  const replicaId = useMemo(
    () => replicaData?.replica?.replicaId,
    [replicaData?.replica?.replicaId],
  )

  // Memoize the enabled flag
  const wsEnabled = useMemo(
    () => !!(sessionId && replicaId),
    [sessionId, replicaId],
  )

  // WebSocket connection
  const {
    isConnected: wsConnected,
    isConnecting: wsConnecting,
    error: wsError,
    messages: wsMessages,
    sendMessage,
  } = useGridWebSocket({
    sessionId,
    replicaId,
    enabled: wsEnabled,
  })

  // Initialize session
  useEffect(() => {
    if (
      !hasInitializedRef.current &&
      !createGridSession.isPending &&
      !sessionId
    ) {
      console.log('Initializing grid session...')
      hasInitializedRef.current = true
      createGridSession.mutate({})
    }
  }, [createGridSession.isPending, sessionId])

  const isLoading =
    createGridSession.isPending || isCreatingReplica || wsConnecting
  const hasError = createGridSession.error || replicaError || wsError
  const isReady = sessionId && replicaData && wsConnected && !hasError

  const handleDataChange = useCallback(
    (newRows: DataGridRow[]) => {
      if (wsConnected) {
        sendMessage({
          type: 'DATA_UPDATE',
          data: newRows,
          timestamp: new Date().toISOString(),
        })
      }
    },
    [wsConnected, sendMessage],
  )

  // NEW: Function to send ping message
  const handleSendPing = useCallback(() => {
    if (wsConnected) {
      const pingMessage = [8, 'ping']
      console.log('Sending ping message:', pingMessage)
      sendMessage(pingMessage)
    } else {
      console.warn('Cannot send ping: WebSocket not connected')
    }
  }, [wsConnected, sendMessage])

  const handleRetry = useCallback(() => {
    hasInitializedRef.current = false
    setSessionId(null)
    setReplicaData(null)
    setReplicaError(null)
    setIsCreatingReplica(false)
  }, [])

  return (
    <SynapseContextProvider synapseContext={currentContext}>
      <div>
        <h2>Curator Grid PoC</h2>

        {/* Show loading state */}
        {isLoading && (
          <div>
            <p>
              {createGridSession.isPending && 'Initializing grid session...'}
              {isCreatingReplica && 'Creating replica...'}
              {wsConnecting && 'Connecting to grid...'}
            </p>
          </div>
        )}

        {/* Show error state */}
        {hasError && (
          <div style={{ color: 'red' }}>
            Error: {createGridSession.error?.message || replicaError || wsError}
          </div>
        )}

        {/* Show connection status */}
        {sessionId && replicaData && (
          <div style={{ marginBottom: '1rem' }}>
            <p>Session ID: {sessionId}</p>
            <p>Replica ID: {replicaId}</p>
            <p>
              WebSocket Status:
              <span
                style={{
                  color: wsConnected
                    ? 'green'
                    : wsConnecting
                    ? 'orange'
                    : 'red',
                  marginLeft: '0.5rem',
                }}
              >
                {wsConnected
                  ? 'Connected'
                  : wsConnecting
                  ? 'Connecting...'
                  : 'Disconnected'}
              </span>
            </p>
          </div>
        )}

        {/* Show DataGrid when ready */}
        {isReady && (
          <div>
            <p style={{ color: 'green' }}>Grid Ready!</p>
            <DataGrid
              rows={initialRows}
              columns={initialColumns}
              onDataChange={handleDataChange}
            />
          </div>
        )}

        {/* WebSocket Message */}
        {wsConnected && (
          <div
            style={{
              marginBottom: '1rem',
              padding: '0.75rem',
            }}
          >
            <button
              onClick={handleSendPing}
              style={{
                padding: '0.375rem 0.75rem',
                backgroundColor: '#4caf50',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer',
                fontSize: '0.8rem',
              }}
            >
              📤 Send Ping [8, 'ping']
            </button>
          </div>
        )}

        {/* Server Messages */}
        {wsMessages.length > 0 && (
          <div
            style={{
              marginTop: '1rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              backgroundColor: '#fafafa',
              maxHeight: '200px',
              overflow: 'hidden',
            }}
          >
            <h4
              style={{
                margin: '0',
                padding: '0.5rem',
                backgroundColor: '#f0f0f0',
                borderBottom: '1px solid #ddd',
                fontSize: '0.85rem',
              }}
            >
              📨 Messages ({wsMessages.length})
            </h4>
            <div
              style={{
                maxHeight: '150px',
                overflow: 'auto',
                padding: '0.25rem',
              }}
            >
              {wsMessages
                .slice()
                .reverse()
                .map((msg, index) => (
                  <div
                    key={wsMessages.length - index - 1}
                    style={{
                      fontSize: '0.7rem',
                      margin: '0.25rem 0',
                      padding: '0.375rem',
                      backgroundColor: 'white',
                      border: '1px solid #eee',
                      borderRadius: '2px',
                      fontFamily: 'monospace',
                      wordBreak: 'break-all',
                    }}
                  >
                    <div style={{ color: '#555' }}>
                      {JSON.stringify(msg, null, 2)}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Retry button */}
        {hasError && <button onClick={handleRetry}>Retry</button>}
      </div>
    </SynapseContextProvider>
  )
}
