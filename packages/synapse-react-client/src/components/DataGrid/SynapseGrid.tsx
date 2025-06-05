import { useEffect, useState } from 'react'
import { useCreateGridSession } from './useCreateGridSession'
import {
  SynapseContextProvider,
  useSynapseContext,
} from '@/utils/context/SynapseContext'
import { DataGrid, DataGridRow } from './DataGrid'
import { Column } from 'react-datasheet-grid'

interface SynapseGridProps {
  initialRows?: DataGridRow[] // Replace with actual row type
  initialColumns?: Column[] // Replace with actual column type
}

export function SynapseGrid({
  initialRows = [],
  initialColumns = [],
}: SynapseGridProps = {}) {
  const currentContext = useSynapseContext()
  const [hasInitialized, setHasInitialized] = useState(false)
  const createGridSession = useCreateGridSession({
    onSuccess: response => {
      console.log('Session created:', response)
    },
    onError: error => {
      console.error('Failed to create session:', error)
    },
  })

  // Only trigger the grid session creation once on component mount
  useEffect(() => {
    if (!hasInitialized && !createGridSession.isPending) {
      createGridSession.mutate({})
      setHasInitialized(true)
    }
  }, [
    hasInitialized,
    createGridSession,
    createGridSession.isPending,
    createGridSession.mutate,
  ])

  return (
    <SynapseContextProvider synapseContext={currentContext}>
      <div>
        <h2>Synapse Grid</h2>

        {/* Show loading state during initialization */}
        {createGridSession.isPending && (
          <div>
            <p>Initializing grid session...</p>
          </div>
        )}

        {/* Show error if initialization failed */}
        {createGridSession.error && (
          <div style={{ color: 'red' }}>
            Error: {createGridSession.error.message}
          </div>
        )}

        {/* Show success state once session is created */}
        {createGridSession.data && (
          <div>
            <p>Grid Session Created!</p>
            <p>Session ID: {createGridSession.data.gridSession.sessionId}</p>
            <DataGrid
              rows={initialRows} // Replace with actual data rows
              columns={initialColumns} // Replace with actual data columns
            />
          </div>
        )}
      </div>
    </SynapseContextProvider>
  )
}
