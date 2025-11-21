import GridMenuButton from '@/components/DataGrid/components/GridMenuButton/GridMenuButton'
import UploadCsvToGridButton from '@/components/DataGrid/components/UploadCsvToGridButton'
import useGetSchemaForGrid from '@/components/DataGrid/hooks/useGetSchemaForGrid'
import MergeGridWithSourceTableButton from '@/components/DataGrid/MergeGridWithSourceTableButton'
import computeReplicaSelectionModel from '@/components/DataGrid/utils/computeReplicaSelectionModel'
import modelRowsToGrid from '@/components/DataGrid/utils/modelRowsToGrid'
import { SkeletonTable } from '@/components/index'
import { useGetEntity } from '@/synapse-queries/index'
import { getSchemaPropertiesInfo } from '@/utils/jsonschema/getSchemaPropertyInfo'
import { SmartToyTwoTone } from '@mui/icons-material'
import { Stack } from '@mui/material'
import Grid from '@mui/material/Grid'
import {
  CreateGridRequest,
  GridSession,
} from '@sage-bionetworks/synapse-client'
import { ClickableJsonCrdt } from 'clickable-json'
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import { DataSheetGridRef } from 'react-datasheet-grid'
import { SelectionWithId } from 'react-datasheet-grid/dist/types'
import FullWidthAlert from '../FullWidthAlert/FullWidthAlert'
import GridAgentChat from '../SynapseChat/GridAgentChat'
import DataGrid from './DataGrid'
import { DataGridRow, GridModel, Operation } from './DataGridTypes'
import { useGridUndoRedo } from './hooks/useGridUndoRedo'
import { StartGridSession, StartGridSessionHandle } from './StartGridSession'
import { useDataGridWebSocket } from './useDataGridWebsocket'
import { applyModelChange, ModelChange } from './utils/applyModelChange'
import { removeNoOpOperations } from './utils/DataGridUtils'
import { mapOperationsToModelChanges } from './utils/mapOperationsToModelChanges'

export type SynapseGridProps = {
  agentRegistrationId?: string
  showDebugInfo?: boolean
}

export type SynapseGridHandle = {
  initializeGrid: (request: CreateGridRequest) => void
  loadExistingSession: (sessionId: string) => void
}

const SynapseGrid = forwardRef<SynapseGridHandle, SynapseGridProps>(
  ({ agentRegistrationId, showDebugInfo = false }, ref) => {
    const [session, setSession] = useState<GridSession | null>(null)
    const [replicaId, setReplicaId] = useState<number | null>(null)
    const [chatOpen, setChatOpen] = useState(false)
    const [lastSelection, setLastSelection] = useState<SelectionWithId | null>(
      null,
    )

    const startGridSessionRef = useRef<StartGridSessionHandle | null>(null)

    useImperativeHandle(
      ref,
      () => ({
        initializeGrid: (request: CreateGridRequest) => {
          if (startGridSessionRef.current) {
            startGridSessionRef.current.handleStartSession(request)
          }
        },
        loadExistingSession: (sessionId: string) => {
          if (startGridSessionRef.current) {
            startGridSessionRef.current.handleLoadSession(sessionId)
          }
        },
      }),
      [],
    )

    // WebSocket state
    const {
      isConnected,
      websocketInstance,
      isGridReady,
      model,
      modelSnapshot,
      connect,
      presignedUrl,
    } = useDataGridWebSocket()

    const websocketInstanceRef = useRef<typeof websocketInstance | null>(null)

    useEffect(() => {
      websocketInstanceRef.current = websocketInstance
    }, [websocketInstance])

    // Track last connection parameters to avoid redundant connections
    const lastConnectParamsRef = useRef<{
      replicaId: number
      sessionId: string
    } | null>(null)

    useEffect(() => {
      if (
        replicaId === null ||
        replicaId === undefined ||
        !session?.sessionId
      ) {
        lastConnectParamsRef.current = null
        return
      }

      const nextParams = {
        replicaId,
        sessionId: session.sessionId,
      }

      const prevParams = lastConnectParamsRef.current

      if (
        prevParams &&
        prevParams.replicaId === nextParams.replicaId &&
        prevParams.sessionId === nextParams.sessionId
      ) {
        return
      }

      lastConnectParamsRef.current = nextParams
      connect(replicaId, session.sessionId)
    }, [replicaId, session?.sessionId, connect])

    // Reset grid state when model is reset (new session/replica)
    useEffect(() => {
      if (model === null) {
        // Clear any grid-specific state when starting a new session
        setLastSelection(null)
        setSelectedRowIndex(null)
        // Clear active cell if grid exists
        if (gridRef.current) {
          gridRef.current.setActiveCell(null)
        }
      }
    }, [model])

    const jsonSchema = useGetSchemaForGrid(session)

    // Grid behaves differently for views vs recordSets
    // Note for future: can get modifiedOn to refresh grid when view changes
    const { data: entityData } = useGetEntity(
      session?.sourceEntityId,
      undefined,
      {
        enabled: !!session?.sourceEntityId,
      },
    )

    const entityIsView =
      entityData?.concreteType ===
      'org.sagebionetworks.repo.model.table.EntityView'

    // Process schema properties once
    const schemaPropertiesInfo = useMemo(() => {
      return getSchemaPropertiesInfo(jsonSchema ?? null)
    }, [jsonSchema])

    const connectionStatus = isConnected ? 'Connected' : 'Disconnected'

    // Transform the model view rows and columns to DataSheetGrid format
    const rowValues = useMemo(
      () => (modelSnapshot ? modelRowsToGrid(model, modelSnapshot) : []),
      [model, modelSnapshot],
    )

    const commit = useCallback(() => {
      if (!isConnected || !websocketInstanceRef.current) {
        return
      }

      websocketInstanceRef.current.sendPatch()
    }, [isConnected, websocketInstanceRef])

    useEffect(() => {
      if (isConnected) {
        commit()
      }
    }, [isConnected, commit])

    const applyAndCommitChanges = useCallback(
      (model: GridModel, modelChanges: ModelChange[]) => {
        // Apply each change to the model
        modelChanges.forEach(change => {
          applyModelChange(model, change, schemaPropertiesInfo)
        })

        commit()
      },
      [commit, schemaPropertiesInfo],
    )

    const handleChange = (newValue: DataGridRow[], operations: Operation[]) => {
      if (!model) {
        console.error('Model is not initialized')
        return
      }

      // Check that something changed before updating the model
      operations = removeNoOpOperations(newValue, rowValues, operations)

      if (operations.length > 0) {
        // Clear redo stack since new changes invalidate redo history
        clearRedoStack()

        // Track row creation, updates, and deletions to keep UI state and undo history in sync

        // Add all operations to the undo stack
        addOperationsToUndoStack(operations, rowValues, newValue)

        // Transform operations to model changes
        const modelChanges = mapOperationsToModelChanges(operations, newValue)

        applyAndCommitChanges(model, modelChanges)
      }
    }

    const handleSelectionChange = useCallback(
      (opts: { selection: SelectionWithId | null }) => {
        const { selection } = opts
        if (selection != null) {
          setLastSelection(selection)

          if (model != null && replicaId != null) {
            const replicaSelectionModel = computeReplicaSelectionModel(
              selection,
              model,
            )
            // insert it into the CRDT Model
            applyAndCommitChanges(model, [
              {
                type: 'SET_SELECTION',
                replicaId: replicaId.toString(),
                selection: replicaSelectionModel,
              },
            ])
          }
        }
      },
      [applyAndCommitChanges, model, replicaId],
    )

    const applyModelChangeFromUndoRedo = useCallback(
      (change: ModelChange) => {
        if (!model) {
          console.error('Model is not initialized')
          return
        }

        if (change.type === 'DELETE' && gridRef.current) {
          // The user may have set a cell as active that we are removing with an 'undo'. In that case, clear the active state
          gridRef.current.setActiveCell(null)
        }

        applyAndCommitChanges(model, [change])
      },
      [model, applyAndCommitChanges],
    )

    const { undoUI, redoUI, addOperationsToUndoStack, clearRedoStack } =
      useGridUndoRedo(applyModelChangeFromUndoRedo)

    // Track the currently selected row index
    const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(
      null,
    )

    const gridRef = useRef<DataSheetGridRef | null>(null)

    return (
      <div>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, xl: 8 }}>
            <StartGridSession
              ref={startGridSessionRef}
              onSessionChange={setSession}
              onReplicaChange={setReplicaId}
              show={showDebugInfo}
            />
          </Grid>
          {/* Debug Information */}
          <Grid size={{ xs: 12, xl: 4 }}>
            {showDebugInfo && (
              <div>
                <p>Session ID: {session?.sessionId || 'No session created'}</p>
                <p>Replica ID: {replicaId || 'No replica created'}</p>
                <p>
                  Source Entity ID:{' '}
                  {session?.sourceEntityId || 'No source entity'}
                </p>
                <p>
                  JSON Schema $id:{' '}
                  {session?.gridJsonSchema$Id ||
                    'No schema attached to session'}
                </p>
                <p>
                  Presigned URL:{' '}
                  {presignedUrl
                    ? presignedUrl.substring(0, 30) +
                      (presignedUrl.length > 30
                        ? ' ... ' +
                          presignedUrl.substring(presignedUrl.length - 10)
                        : '')
                    : 'No URL generated'}
                </p>
                <p>
                  WebSocket Status:{' '}
                  <span style={{ color: isConnected ? 'green' : 'red' }}>
                    {connectionStatus}
                  </span>
                </p>
              </div>
            )}
          </Grid>

          {session && (
            <>
              {/* Grid Loading State */}
              {!isGridReady && (
                <Grid size={12}>
                  <h3>Setting up grid...</h3>
                  <div style={{ marginBottom: '10px' }}>
                    {!session && <p>Creating grid session...</p>}
                    {session && !replicaId && (
                      <p>Setting up real-time sync...</p>
                    )}
                    {session && replicaId && !presignedUrl && (
                      <p>Establishing secure connection...</p>
                    )}
                    {session && replicaId && presignedUrl && !isConnected && (
                      <p>Connecting to server...</p>
                    )}
                    {isConnected && !isGridReady && (
                      <p>Loading table data...</p>
                    )}
                    <SkeletonTable numRows={4} numCols={1} />
                  </div>
                </Grid>
              )}

              {/* Grid */}
              {isGridReady && (
                <>
                  <Grid size={12}>
                    <Stack
                      direction={'row'}
                      spacing={1}
                      sx={{ justifyContent: 'flex-end' }}
                    >
                      {undoUI}
                      {redoUI}
                      <GridMenuButton
                        variant={'outlined'}
                        onClick={() => setChatOpen(true)}
                        startIcon={<SmartToyTwoTone />}
                      >
                        Open chat
                      </GridMenuButton>
                      <GridAgentChat
                        agentRegistrationId={agentRegistrationId}
                        open={chatOpen}
                        onClose={() => setChatOpen(false)}
                        gridSessionId={session.sessionId!}
                        usersReplicaId={replicaId!}
                        chatbotName="Grid Assistant"
                      />
                      {session.sourceEntityId && (
                        <UploadCsvToGridButton
                          sourceEntityId={session.sourceEntityId}
                          gridSessionId={session.sessionId!}
                        />
                      )}
                      {session.sourceEntityId && (
                        <MergeGridWithSourceTableButton
                          sourceEntityId={session.sourceEntityId}
                          gridSessionId={session.sessionId!}
                        />
                      )}
                    </Stack>
                  </Grid>
                  <Grid size={12}>
                    <DataGrid
                      gridRef={gridRef}
                      rowValues={rowValues}
                      columnNames={modelSnapshot?.columnNames ?? []}
                      columnOrder={modelSnapshot?.columnOrder ?? []}
                      schemaPropertiesInfo={schemaPropertiesInfo}
                      entityIsView={entityIsView}
                      jsonSchema={jsonSchema}
                      selectedRowIndex={selectedRowIndex}
                      lastSelection={lastSelection}
                      handleChange={handleChange}
                      setSelectedRowIndex={setSelectedRowIndex}
                      handleSelectionChange={handleSelectionChange}
                    />
                  </Grid>
                  <Grid size={12}>
                    {/* Show validation messages for selected row */}
                    {selectedRowIndex !== null &&
                      rowValues[selectedRowIndex] &&
                      Array.isArray(
                        rowValues[selectedRowIndex].__validationResults
                          ?.allValidationMessages,
                      ) &&
                      rowValues[selectedRowIndex].__validationResults
                        ?.allValidationMessages.length > 0 && (
                        <FullWidthAlert
                          variant="warning"
                          title="Validation Messages For Selected Row:"
                          isGlobal={false}
                          description={
                            <ul>
                              {rowValues[
                                selectedRowIndex
                              ].__validationResults.allValidationMessages.map(
                                (msg: string) => (
                                  <li key={msg}>{msg}</li>
                                ),
                              )}
                            </ul>
                          }
                          sx={{
                            marginTop: '12px',
                          }}
                        />
                      )}
                  </Grid>
                </>
              )}
              {/* Debug Model Snapshot */}
              {showDebugInfo && (
                <Grid
                  size={12}
                  style={{
                    margin: '10px 0',
                    padding: '10px',
                    border: '1px solid #ccc',
                    maxHeight: '400px',
                    overflowY: 'auto',
                  }}
                >
                  <h3>Model</h3>
                  {model ? (
                    <ClickableJsonCrdt model={model} />
                  ) : (
                    'No model available'
                  )}
                </Grid>
              )}
            </>
          )}
        </Grid>
      </div>
    )
  },
)

export default SynapseGrid
