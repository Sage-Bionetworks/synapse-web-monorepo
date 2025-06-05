import { useEffect, useState } from 'react'
import { useCreateGridSession } from './useCreateGridSession'
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
  const [hasInitialized, setHasInitialized] = useState(false)
  const [replicaData, setReplicaData] = useState<CreateReplicaResponse | null>(
    null,
  )
  const [replicaError, setReplicaError] = useState<string | null>(null)
  const [isCreatingReplica, setIsCreatingReplica] = useState(false)

  const createGridSession = useCreateGridSession({
    onSuccess: async response => {
      console.log('Session created:', response)

      // Automatically create replica after session is created
      try {
        setIsCreatingReplica(true)
        setReplicaError(null)
        console.log(
          'Creating replica for session:',
          response.gridSession.sessionId,
        )
        const replica = await SynapseClient.GridSessionReplica(
          response.gridSession.sessionId,
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

  useEffect(() => {
    if (!hasInitialized && !createGridSession.isPending) {
      createGridSession.mutate({})
      setHasInitialized(true)
    }
  }, [hasInitialized, createGridSession.isPending, createGridSession.mutate])

  const isLoading = createGridSession.isPending || isCreatingReplica
  const hasError = createGridSession.error || replicaError
  const isReady = createGridSession.data && replicaData && !hasError
  console.log('createGridSession:', createGridSession)
  console.log('replicaData:', replicaData)

  return (
    <SynapseContextProvider synapseContext={currentContext}>
      <div>
        <h2>Synapse Grid</h2>

        {/* Show loading state during initialization */}
        {isLoading && (
          <div>
            <p>
              {createGridSession.isPending
                ? 'Initializing grid session...'
                : 'Creating replica...'}
            </p>
          </div>
        )}

        {/* Show error if initialization failed */}
        {hasError && (
          <div style={{ color: 'red' }}>
            Error: {createGridSession.error?.message || replicaError}
          </div>
        )}

        {/* Show success state once session and replica are created */}
        {isReady && (
          <div>
            <p>Grid Ready!</p>
            <p>Session ID: {createGridSession.data.gridSession.sessionId}</p>
            <p>Replica ID: {replicaData.replica.replicaId}</p>
            <DataGrid rows={initialRows} columns={initialColumns} />
          </div>
        )}

        {/* Retry button for errors */}
        {hasError && (
          <button
            onClick={() => {
              setHasInitialized(false)
              setReplicaData(null)
              setReplicaError(null)
            }}
          >
            Retry
          </button>
        )}
      </div>
    </SynapseContextProvider>
  )
}
