import MergeGridWithSourceTableButton from '@/components/DataGrid/MergeGridWithSourceTableButton'
import { SkeletonTable } from '@/components/index'
import { ComplexJSONRenderer } from '@/components/SynapseTable/SynapseTableCell/JSON/ComplexJSONRenderer'
import { useGetSchema } from '@/synapse-queries/index'
import getEnumeratedValues from '@/utils/jsonschema/getEnumeratedValues'
import getSchemaForProperty from '@/utils/jsonschema/getSchemaForProperty'
import Grid from '@mui/material/Grid'
import { GridSession } from '@sage-bionetworks/synapse-client'
import classNames from 'classnames'
import throttle from 'lodash-es/throttle'
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import {
  checkboxColumn,
  Column,
  createTextColumn,
  DataSheetGrid,
  floatColumn,
  keyColumn,
} from 'react-datasheet-grid'
import 'react-datasheet-grid/dist/style.css'
import '../../style/components/_data-grid-extra.scss'
import FullWidthAlert from '../FullWidthAlert/FullWidthAlert'
import { autocompleteColumn } from './columns/AutocompleteColumn'
import {
  DataGridRow,
  GridModel,
  GridModelSnapshot,
  Operation,
} from './DataGridTypes'
import { removeNoOpOperations, rowsAreIdentical } from './DataGridUtils'
import { StartGridSession } from './StartGridSession'
import { useDataGridWebSocket } from './useDataGridWebsocket'
import { Button, Menu, MenuItem } from '@mui/material'
import { useGridUndo } from '@/utils/hooks/useGridUndo'
import { applyModelChange } from '@/utils/functions/applyModelChange'

export type SynapseGridProps = {
  query: string
  showDebugInfo?: boolean
}

const SynapseGrid = forwardRef<
  { initializeGrid: () => void },
  SynapseGridProps
>(({ query, showDebugInfo = false }, ref) => {
  const [session, setSession] = useState<GridSession | null>(null)
  const [replicaId, setReplicaId] = useState<number | null>(null)
  const [presignedUrl, setPresignedUrl] = useState<string>('')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => setAnchorEl(null)

  const startGridSessionRef = useRef<{
    handleStartSession: (input: string) => void
  } | null>(null)

  useImperativeHandle(
    ref,
    () => ({
      initializeGrid: () => {
        if (startGridSessionRef.current) {
          startGridSessionRef.current.handleStartSession(query)
        }
      },
    }),
    [query],
  )

  // WebSocket state
  const {
    isConnected,
    websocketInstance,
    createWebsocket,
    isGridReady,
    model,
    modelSnapshot,
  } = useDataGridWebSocket()

  useEffect(() => {
    if (replicaId && presignedUrl) {
      createWebsocket(replicaId, presignedUrl)
    }
  }, [replicaId, presignedUrl, createWebsocket])

  const { data: jsonSchema } = useGetSchema(session?.gridJsonSchema$Id ?? '', {
    enabled: !!session?.gridJsonSchema$Id,
  })

  const connectionStatus = isConnected ? 'Connected' : 'Disconnected'

  // Transform the model view rows and columns to DataSheetGrid format
  const rowValues = modelSnapshot ? modelRowsToGrid(modelSnapshot) : []
  const colValues = modelSnapshot ? modelColsToGrid(modelSnapshot) : []

  // Convert model rows to a format suitable for DataSheetGrid
  function modelRowsToGrid(modelSnapshot: GridModelSnapshot): DataGridRow[] {
    if (!modelSnapshot) return []
    const { columnNames, columnOrder, rows } = modelSnapshot
    const gridRows = rows.map((row): DataGridRow => {
      const rowObj: DataGridRow = {}
      columnOrder.forEach((index: number) => {
        const columnName = columnNames[index]
        if (columnName) {
          rowObj[columnName] = row.data[index]
        }
      })
      // Assign a stable ID if none exists
      if (!rowObj._rowId) {
        rowObj._rowId = genId()
      }
      rowObj.__validationResults = row.metadata?.rowValidation
      return rowObj
    })
    return gridRows
  }

  // Convert model columns to a format suitable for DataSheetGrid
  function modelColsToGrid(modelSnapshot: GridModelSnapshot): Column[] {
    if (!modelSnapshot) return []
    const { columnNames, columnOrder } = modelSnapshot
    const gridCols: Column[] = columnOrder.map((index: number) => {
      const columnName = columnNames[index]
      const enumeratedValues = jsonSchema
        ? getEnumeratedValues(getSchemaForProperty(jsonSchema, columnName)).map(
            item => item.value,
          )
        : null
      const colType = jsonSchema
        ? getSchemaForProperty(jsonSchema, columnName).type
        : null

      if (colType === 'boolean') {
        return {
          ...keyColumn(columnName, checkboxColumn),
          title: columnName,
        }
      }

      if (colType === 'number' || colType === 'integer') {
        return {
          ...keyColumn(columnName, floatColumn),
          title: columnName,
        }
      }

      if (enumeratedValues && enumeratedValues.length > 0) {
        // Use autocomplete column for columns with enumerated values
        return {
          ...keyColumn(
            columnName,
            autocompleteColumn({
              choices: enumeratedValues,
            }),
          ),
          title: columnName,
        }
      }
      return {
        // Default to text column for columns without enumerated values
        ...keyColumn(
          columnName,
          createTextColumn({ continuousUpdates: false }),
        ),
        title: columnName,
      }
    })
    return gridCols
  }

  function applyOperationsToModel(
    operations: Operation[],
    newValue: DataGridRow[],
    oldValue: DataGridRow[],
    model: GridModel,
  ) {
    if (!model) return

    for (const operation of operations) {
      if (operation.type === 'CREATE') {
        // Add new rows to the model
        for (let i = operation.fromRowIndex; i < operation.toRowIndex; i++) {
          applyModelChange(model, {
            type: 'CREATE',
            rowIndex: i,
            rowData: newValue[i],
          })
        }
      }

      if (operation.type === 'UPDATE') {
        // Only update the specific rows and cells that changed
        for (
          let rowIndex = operation.fromRowIndex;
          rowIndex < operation.toRowIndex;
          rowIndex++
        ) {
          applyModelChange(model, {
            type: 'UPDATE',
            rowIndex: operation.fromRowIndex,
            updatedData: newValue[operation.fromRowIndex],
          })
        }
      }

      if (operation.type === 'DELETE') {
        applyModelChange(model, {
          type: 'DELETE',
          rowIndex: operation.fromRowIndex,
          count: operation.toRowIndex - operation.fromRowIndex,
        })
      }
    }
  }

  function genId() {
    return Math.floor(Math.random() * 1000000)
  }

  const commit = useCallback(
    throttle(() => {
      console.log('Auto-committing changes')
      // The model has already been updated in handleChange, just send the patch
      websocketInstance?.sendPatch()
    }, 500),
    [websocketInstance],
  )

  function addRowToModel() {
    return { _rowId: genId() }
  }

  const handleChange = (newValue: DataGridRow[], operations: Operation[]) => {
    if (!model) {
      console.error('Model is not initialized')
      return
    }

    // Check that something changed before updating the model
    operations = removeNoOpOperations(newValue, rowValues, operations)

    if (operations.length > 0) {
      // Track row creation, updates, and deletions to keep UI state and undo history in sync
      for (const operation of operations) {
        if (operation.type === 'CREATE') {
          for (let i = operation.fromRowIndex; i < operation.toRowIndex; i++) {
            const newRow = newValue[i]
            const rowId = newRow?._rowId || genId()

            // Add to created rows tracking
            createdRowIds.add(rowId)

            addToUndoStack({
              type: 'CREATE',
              rowId,
              rowIndex: i,
              newValue: newRow,
            })
          }
        }

        if (operation.type === 'UPDATE') {
          const oldVal = rowValues.slice(
            operation.fromRowIndex,
            operation.toRowIndex,
          )
          const newVal = newValue.slice(
            operation.fromRowIndex,
            operation.toRowIndex,
          )

          const comparisonResults = oldVal.map((oldItem, idx) =>
            rowsAreIdentical(oldItem, newVal[idx]),
          )

          if (comparisonResults.every(Boolean)) return

          newVal
            .filter((_, idx) => !comparisonResults[idx])
            .forEach((newRow: DataGridRow, idx: number) => {
              const { _rowId } = newRow
              const oldRow = oldVal[idx]
              const rowIndex = operation.fromRowIndex + idx

              if (!createdRowIds.has(_rowId)) {
                updatedRowIds.add(_rowId)

                addToUndoStack({
                  type: 'UPDATE',
                  rowId: typeof _rowId === 'number' ? _rowId : undefined,
                  rowIndex: rowIndex,
                  previousValue: oldRow,
                  newValue: newRow,
                })
              }
            })
        }

        if (operation.type === 'DELETE') {
          let keptRows = 0

          rowValues
            .slice(operation.fromRowIndex, operation.toRowIndex)
            .forEach((row, i) => {
              const { _rowId } = row
              const actualRowIndex = operation.fromRowIndex + i

              // Check if this was a created row before clearing tracking
              const wasCreated = createdRowIds.has(_rowId)

              // Clear all tracking for this row when it's deleted
              updatedRowIds.delete(_rowId)
              createdRowIds.delete(_rowId)
              deletedRowIds.delete(_rowId)

              if (!wasCreated) {
                deletedRowIds.add(_rowId)

                addToUndoStack({
                  type: 'DELETE',
                  rowId: _rowId,
                  rowIndex: actualRowIndex,
                  previousValue: row,
                  newValue: undefined,
                })

                newValue.splice(
                  operation.fromRowIndex + keptRows++,
                  0,
                  rowValues[operation.fromRowIndex + i],
                )
              }
            })
        }
      }

      // Apply the changes to the model
      applyOperationsToModel(operations, newValue, rowValues, model)

      // Push the changes to the server (throttled)
      commit()
    }
  }

  const {
    undoPreview,
    handleUndo,
    addToUndoStack,
    createdRowIds,
    deletedRowIds,
    updatedRowIds,
  } = useGridUndo(model, websocketInstance, modelRowsToGrid, handleChange)

  // Track the currently selected row index
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null)

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, xl: 8 }}>
          <StartGridSession
            ref={startGridSessionRef}
            onSessionChange={setSession}
            onReplicaChange={setReplicaId}
            onPresignedUrlChange={setPresignedUrl}
            query={query}
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
                {session?.gridJsonSchema$Id || 'No schema attached to session'}
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
                  {session && !replicaId && <p>Setting up real-time sync...</p>}
                  {session && replicaId && !presignedUrl && (
                    <p>Establishing secure connection...</p>
                  )}
                  {session && replicaId && presignedUrl && !isConnected && (
                    <p>Connecting to server...</p>
                  )}
                  {isConnected && !isGridReady && <p>Loading table data...</p>}
                  <SkeletonTable numRows={4} numCols={1} />
                </div>
              </Grid>
            )}

            {/* Grid */}
            {isGridReady && (
              <Grid size={12}>
                <>
                  <Button
                    aria-controls={open ? 'undo-menu' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    disabled={!undoPreview}
                  >
                    Undo {undoPreview && `(${undoPreview.totalActions})`} ▼
                  </Button>
                  <Menu
                    id="undo-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    {undoPreview ? (
                      [
                        <MenuItem
                          key="lastAction"
                          onClick={() => handleUndo('lastAction', handleClose)}
                        >
                          Undo last {undoPreview.lastType.toLowerCase()} action
                        </MenuItem>,
                        ...(undoPreview.sameTypeCount > 1
                          ? [
                              <MenuItem
                                key="consecutiveActions"
                                onClick={() =>
                                  handleUndo('consecutiveActions', handleClose)
                                }
                              >
                                Undo last {undoPreview.sameTypeCount}{' '}
                                {undoPreview.lastType.toLowerCase()} actions
                              </MenuItem>,
                            ]
                          : []),
                        ...(undoPreview.totalActions > undoPreview.sameTypeCount
                          ? [
                              <MenuItem
                                key="allActions"
                                onClick={() =>
                                  handleUndo('allActions', handleClose)
                                }
                              >
                                Undo all {undoPreview.totalActions} actions
                                (mixed types)
                              </MenuItem>,
                            ]
                          : []),
                      ]
                    ) : (
                      <MenuItem disabled>No actions to undo</MenuItem>
                    )}
                  </Menu>
                </>
                <DataSheetGrid
                  value={rowValues}
                  columns={colValues}
                  rowKey="_rowId"
                  rowClassName={({ rowData, rowIndex }) =>
                    classNames({
                      'row-valid':
                        rowData.__validationResults?.isValid === true,
                      'row-invalid':
                        rowData.__validationResults?.isValid === false,
                      'row-unknown':
                        rowData.__validationResults?.isValid == undefined,
                      'row-selected': selectedRowIndex === rowIndex,
                    })
                  }
                  createRow={addRowToModel}
                  duplicateRow={({ rowData }: any) => ({
                    ...rowData,
                    _rowId: genId(),
                  })}
                  onChange={handleChange}
                  onActiveCellChange={({ cell }) => {
                    setSelectedRowIndex(cell ? cell.row : null)
                  }}
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
                <h3>Model snapshot</h3>
                {modelSnapshot ? (
                  <ComplexJSONRenderer value={modelSnapshot} />
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
})

export default SynapseGrid
