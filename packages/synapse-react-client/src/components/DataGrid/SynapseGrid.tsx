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

        {/* Show recent messages (for debugging) */}
        {wsMessages.length > 0 && (
          <div style={{ marginTop: '1rem' }}>
            <h3>Recent Messages:</h3>
            <div style={{ maxHeight: '200px', overflow: 'auto' }}>
              {wsMessages.slice(-5).map((msg, index) => (
                <div
                  key={index}
                  style={{ fontSize: '0.8rem', margin: '0.25rem 0' }}
                >
                  <strong>{msg.type}:</strong> {JSON.stringify(msg.data)}
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
