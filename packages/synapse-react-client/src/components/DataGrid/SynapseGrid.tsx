import MergeGridWithSourceTableButton from '@/components/DataGrid/MergeGridWithSourceTableButton'
import computeReplicaSelectionModel from '@/components/DataGrid/utils/computeReplicaSelectionModel'
import modelRowsToGrid from '@/components/DataGrid/utils/modelRowsToGrid'
import { SkeletonTable } from '@/components/index'
import { useGetSchema } from '@/synapse-queries/index'
import getEnumeratedValues from '@/utils/jsonschema/getEnumeratedValues'
import getRequiredAttributes from '@/utils/jsonschema/getRequiredAttributes'
import getSchemaForProperty from '@/utils/jsonschema/getSchemaForProperty'
import { getType } from '@/utils/jsonschema/getType'
import Grid from '@mui/material/Grid'
import {
  CreateGridRequest,
  GridSession,
} from '@sage-bionetworks/synapse-client'
import classNames from 'classnames'
import { ClickableJsonCrdt } from 'clickable-json'
import throttle from 'lodash-es/throttle'
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  checkboxColumn,
  Column,
  createTextColumn,
  DataSheetGrid,
  DataSheetGridRef,
  floatColumn,
  keyColumn,
} from 'react-datasheet-grid'
import 'react-datasheet-grid/dist/style.css'
import '../../style/components/_data-grid-extra.scss'
import { SelectionWithId } from 'react-datasheet-grid/dist/types'
import FullWidthAlert from '../FullWidthAlert/FullWidthAlert'
import { autocompleteColumn } from './columns/AutocompleteColumn'
import {
  DataGridRow,
  GridModel,
  GridModelSnapshot,
  Operation,
} from './DataGridTypes'
import { useGridUndoRedo } from './hooks/useGridUndoRedo'
import { StartGridSession, StartGridSessionHandle } from './StartGridSession'
import { useDataGridWebSocket } from './useDataGridWebsocket'
import { applyModelChange, ModelChange } from './utils/applyModelChange'
import {
  GRID_ROW_REACT_KEY_PROPERTY,
  removeNoOpOperations,
} from './utils/DataGridUtils'
import { getCellClassName } from './utils/getCellClassName'
import { mapOperationsToModelChanges } from './utils/mapOperationsToModelChanges'
import { Button } from '@mui/material'
import GridAgentChat from '../SynapseChat/GridAgentChat'
import { useDocumentVisibility } from '@react-hookz/web'

export type SynapseGridProps = {
  showDebugInfo?: boolean
}

export type SynapseGridHandle = {
  initializeGrid: (request: CreateGridRequest) => void
  loadExistingSession: (sessionId: string) => void
}

const SynapseGrid = forwardRef<SynapseGridHandle, SynapseGridProps>(
  ({ showDebugInfo = false }, ref) => {
    const [session, setSession] = useState<GridSession | null>(null)
    const [replicaId, setReplicaId] = useState<number | null>(null)
    const [presignedUrl, setPresignedUrl] = useState<string>('')
    const [chatOpen, setChatOpen] = useState(false)

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

    const isVisible = useDocumentVisibility()

    // WebSocket state
    const {
      isConnected,
      websocketInstance,
      createWebsocket,
      isGridReady,
      model,
      modelSnapshot,
      reconnect,
    } = useDataGridWebSocket()

    // Auto-reconnect WebSocket when the document becomes visible and disconnected.
    // Exponential backoff with a max delay of 10s between attempts.
    const retryRef = useRef(1000) // starting delay 1s
    const retryTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
      if (!replicaId || !presignedUrl || !isVisible) return // only retry if tab is visible
      if (!reconnect) return

      let stopped = false

      const attemptReconnect = () => {
        if (stopped) return

        const socketReady =
          websocketInstance?.socket.readyState === WebSocket.OPEN

        if (!socketReady) {
          console.log(
            `Reconnecting WebSocket... next retry in ${retryRef.current}ms`,
          )
          console.log('using presignedUrl', presignedUrl)

          reconnect(replicaId, presignedUrl, session?.sessionId || '')

          // Schedule next attempt with exponential backoff
          retryTimerRef.current = setTimeout(() => {
            attemptReconnect()
          }, retryRef.current)

          // Double the delay for the next attempt, ceiling at 10s
          retryRef.current = Math.min(retryRef.current * 2, 10000)
        } else {
          // If the socket is successfully connected, reset delay to 1s
          retryRef.current = 1000
          if (retryTimerRef.current) {
            clearTimeout(retryTimerRef.current)
            retryTimerRef.current = null
          }
        }
      }

      // only start if socket is not open
      if (
        !websocketInstance ||
        websocketInstance.socket.readyState !== WebSocket.OPEN
      ) {
        attemptReconnect()
      }

      return () => {
        stopped = true
        if (retryTimerRef.current) {
          clearTimeout(retryTimerRef.current)
          retryTimerRef.current = null
        }
      }
    }, [replicaId, presignedUrl, reconnect, isVisible])

    useEffect(() => {
      if (replicaId && presignedUrl) {
        createWebsocket(replicaId, presignedUrl)
      }
    }, [replicaId, presignedUrl, createWebsocket])

    const { data: jsonSchema } = useGetSchema(
      session?.gridJsonSchema$Id ?? '',
      {
        enabled: !!session?.gridJsonSchema$Id,
      },
    )

    const connectionStatus = isConnected ? 'Connected' : 'Disconnected'

    // Transform the model view rows and columns to DataSheetGrid format
    const rowValues = useMemo(
      () => (modelSnapshot ? modelRowsToGrid(model, modelSnapshot) : []),
      [model, modelSnapshot],
    )
    const colValues = modelSnapshot ? modelColsToGrid(modelSnapshot) : []

    // Convert model columns to a format suitable for DataSheetGrid
    function modelColsToGrid(modelSnapshot: GridModelSnapshot): Column[] {
      if (!modelSnapshot) return []
      const { columnNames, columnOrder } = modelSnapshot
      const requiredFields = jsonSchema ? getRequiredAttributes(jsonSchema) : []
      const gridCols: Column[] = columnOrder.map((index: number) => {
        const columnName = columnNames[index]
        const enumeratedValues = jsonSchema
          ? getEnumeratedValues(
              getSchemaForProperty(jsonSchema, columnName),
            ).map(item => item.value)
          : null
        const colType = jsonSchema
          ? getType(getSchemaForProperty(jsonSchema, columnName))
          : null

        if (colType === 'boolean') {
          return {
            ...keyColumn(columnName, checkboxColumn),
            title: columnName,
            headerClassName: requiredFields.includes(columnName)
              ? 'header-cell-required'
              : 'header-cell',
          }
        }

        if (colType === 'number' || colType === 'integer') {
          return {
            ...keyColumn(columnName, floatColumn),
            title: columnName,
            headerClassName: requiredFields.includes(columnName)
              ? 'header-cell-required'
              : 'header-cell',
          }
        }

        if (enumeratedValues && enumeratedValues.length > 0) {
          // Use autocomplete column for columns with enumerated values
          return {
            ...keyColumn(
              columnName,
              autocompleteColumn({
                choices: enumeratedValues,
                colType: colType,
              }),
            ),
            title: columnName,
            headerClassName: requiredFields.includes(columnName)
              ? 'header-cell-required'
              : 'header-cell',
          }
        }
        return {
          // Default to text column for columns without enumerated values
          ...keyColumn(
            columnName,
            createTextColumn({ continuousUpdates: false }),
          ),
          title: columnName,
          headerClassName: requiredFields.includes(columnName)
            ? 'header-cell-required'
            : 'header-cell',
        }
      })
      return gridCols
    }

    const commit = useCallback(
      throttle(() => {
        console.log('Auto-committing changes')
        // The model has already been updated in handleChange, just send the patch
        websocketInstance?.sendPatch()
      }, 500),
      [websocketInstance],
    )

    const applyAndCommitChanges = useCallback(
      (model: GridModel, modelChanges: ModelChange[]) => {
        // Apply each change to the model
        modelChanges.forEach(change => {
          applyModelChange(model, change)
        })

        // Push the changes to the server (throttled)
        commit()
      },
      [commit],
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
        const modelChanges = mapOperationsToModelChanges(
          operations,
          newValue,
          rowValues,
        )

        applyAndCommitChanges(model, modelChanges)
      }
    }

    const handleSelectionChange = useCallback(
      (opts: { selection: SelectionWithId | null }) => {
        const { selection } = opts
        if (selection != null && model != null && replicaId != null) {
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
              onPresignedUrlChange={setPresignedUrl}
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
                  JSON Schema $id:{' '}
                  {session?.gridJsonSchema$Id ||
                    'No schema attached to session'}
                </p>
                <p>
                  Presigned URL:{' '}
                  {presignedUrl.substring(0, 30) +
                    (presignedUrl.length > 30
                      ? ' ... ' +
                        presignedUrl.substring(
                          presignedUrl.length - 10,
                          presignedUrl.length,
                        )
                      : '') || 'No URL generated'}
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
                <Grid size={12}>
                  {undoUI}
                  {redoUI}
                  <Button onClick={() => setChatOpen(true)}>Open chat</Button>
                  <GridAgentChat
                    open={chatOpen}
                    onClose={() => setChatOpen(false)}
                    gridSessionId={session.sessionId!}
                    usersReplicaId={replicaId!}
                    chatbotName="Grid Assistant"
                  />

                  <DataSheetGrid
                    ref={gridRef}
                    value={rowValues}
                    columns={colValues}
                    rowKey={GRID_ROW_REACT_KEY_PROPERTY}
                    rowClassName={({ rowData, rowIndex }) =>
                      classNames({
                        'row-valid':
                          rowData.__validationResults?.isValid === true,
                        'row-invalid':
                          rowData.__validationResults?.isValid === false,
                        'row-unknown':
                          !!jsonSchema &&
                          rowData.__validationResults?.isValid == undefined,
                        'row-selected': selectedRowIndex === rowIndex,
                      })
                    }
                    cellClassName={({ rowData, rowIndex, columnId }) =>
                      getCellClassName({
                        rowData: rowData as DataGridRow,
                        rowIndex,
                        columnId,
                        selectedRowIndex,
                      })
                    }
                    duplicateRow={({ rowData }: any) => ({
                      ...rowData,
                    })}
                    onChange={handleChange}
                    onActiveCellChange={({ cell }) => {
                      setSelectedRowIndex(cell ? cell.row : null)
                    }}
                    onSelectionChange={handleSelectionChange}
                  />
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
                        title="Validation Messages:"
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
              )}
              {isGridReady && session.sourceEntityId && (
                <Grid container size={12} sx={{ justifyContent: 'flex-end' }}>
                  <MergeGridWithSourceTableButton
                    sourceEntityId={session.sourceEntityId}
                    gridSessionId={session.sessionId!}
                  />
                </Grid>
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
