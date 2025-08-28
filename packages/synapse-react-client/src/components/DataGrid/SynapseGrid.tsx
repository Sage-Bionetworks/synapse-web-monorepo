import MergeGridWithSourceTableButton from '@/components/DataGrid/MergeGridWithSourceTableButton'
import { ComplexJSONRenderer } from '@/components/SynapseTable/SynapseTableCell/JSON/ComplexJSONRenderer'
import { useGetSchema } from '@/synapse-queries/index'
import getEnumeratedValues from '@/utils/jsonschema/getEnumeratedValues'
import getSchemaForProperty from '@/utils/jsonschema/getSchemaForProperty'
import Grid from '@mui/material/Grid'
import { GridSession } from '@sage-bionetworks/synapse-client'
import classNames from 'classnames'
import { s } from 'json-joy/lib/json-crdt-patch'
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
  Column,
  createTextColumn,
  DataSheetGrid,
  keyColumn,
  checkboxColumn,
  floatColumn,
} from 'react-datasheet-grid'
import 'react-datasheet-grid/dist/style.css'
import '../../style/components/_data-grid-extra.scss'
import FullWidthAlert from '../FullWidthAlert/FullWidthAlert'
import { SkeletonTable } from '../Skeleton'
import { autocompleteColumn } from './columns/AutocompleteColumn'
import {
  DataGridRow,
  GridModel,
  GridModelSnapshot,
  Operation,
} from './DataGridTypes'
import { rowsAreIdentical } from './DataGridUtils'
import { StartGridSession } from './StartGridSession'
import { useDataGridWebSocket } from './useDataGridWebsocket'
import { Button, Menu, MenuItem } from '@mui/material'

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
    modelRef,
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

  // Grid rows and columns
  const [rowValues, setRowValues] = useState<DataGridRow[]>([])
  const [colValues, setColValues] = useState<Column[]>([])

  const getModel = () => modelRef.current

  // If grid sessionId or replicaId changes, reset the model
  useEffect(() => {
    if (session || replicaId) {
      modelRef.current = null
      // modelSnapshotRef.current = {
      //   columnNames: [],
      //   columnOrder: [],
      //   rows: [],
      // }
      setRowValues([])
      setColValues([])
    }
  }, [session, replicaId, websocketInstance, modelRef])

  useEffect(() => {
    if (modelSnapshot) {
      setRowValues(modelRowsToGrid(modelSnapshot))
      setColValues(modelColsToGrid(modelSnapshot))
    }
  }, [modelSnapshot])

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

    const { columnNames } = model.api.getSnapshot()
    const rowsArr = model.api.arr(['rows'])

    for (const operation of operations) {
      if (operation.type === 'CREATE') {
        // Add new rows to the model
        for (let i = operation.fromRowIndex; i < operation.toRowIndex; i++) {
          // Use actual row data from newValue[i] to initialize the new row
          const rowData = newValue[i] || {}
          const dataArray = columnNames.map(columnName =>
            s.con(rowData[columnName] ?? ''),
          )
          rowsArr?.ins(i, [{ data: s.vec(...dataArray) }])
        }
      }

      if (operation.type === 'UPDATE') {
        // Only update the specific rows and cells that changed
        for (
          let rowIndex = operation.fromRowIndex;
          rowIndex < operation.toRowIndex;
          rowIndex++
        ) {
          const newRow = newValue?.[rowIndex]
          const oldRow = oldValue?.[rowIndex]

          // Compare each cell and only update changed ones
          Object.entries(newRow).forEach(([columnName, newCellValue]) => {
            if (columnName.startsWith('_')) return // Skip internal properties like _rowId

            const oldCellValue = oldRow?.[columnName]
            if (newCellValue !== oldCellValue) {
              const columnIndex = columnNames.indexOf(columnName)
              if (columnIndex !== -1) {
                const rowVec = model.api.vec(['rows', String(rowIndex), 'data'])
                rowVec?.set([[columnIndex, s.con(newCellValue)]])
              }
            }
          })
        }
      }

      if (operation.type === 'DELETE') {
        rowsArr?.del(
          operation.fromRowIndex,
          operation.toRowIndex - operation.fromRowIndex,
        )
      }
    }
  }

  type UndoableAction = {
    type: 'CREATE' | 'DELETE' | 'UPDATE'
    rowId: string | number | boolean | null | undefined
    rowIndex: number
    previousValue?: DataGridRow
    newValue?: DataGridRow
  }
  const undoStackRef = useRef<UndoableAction[]>([])
  const isUndoingRef = useRef(false)

  // Grid editing functions
  const createdRowIds = useMemo(() => new Set(), [])
  const deletedRowIds = useMemo(() => new Set(), [])
  const updatedRowIds = useMemo(() => new Set(), [])

  // Generate preview information for the undo menu to show users exactly what will be undone
  // Returns: lastType (CREATE/UPDATE/DELETE), sameTypeCount (consecutive actions of same type),
  // totalActions (all actions in stack).
  const getUndoPreview = () => {
    if (undoStackRef.current.length === 0) return null

    const lastAction = undoStackRef.current[undoStackRef.current.length - 1]
    const lastType = lastAction.type

    // Count consecutive actions of same type from the end
    let sameTypeCount = 0
    for (let i = undoStackRef.current.length - 1; i >= 0; i--) {
      if (undoStackRef.current[i].type === lastType) {
        sameTypeCount++
      } else {
        break
      }
    }

    return {
      lastType,
      sameTypeCount,
      totalActions: undoStackRef.current.length,
    }
  }

  const undoPreview = getUndoPreview()

  const handleUndo = (
    undoType: 'lastAction' | 'consecutiveActions' | 'allActions',
  ) => {
    if (undoStackRef.current.length === 0) return

    isUndoingRef.current = true

    let actionsToUndo: UndoableAction[] = []

    switch (undoType) {
      case 'lastAction':
        actionsToUndo = [undoStackRef.current.pop()!]
        break
      case 'consecutiveActions': {
        // Undo all consecutive actions of the same type as the last action
        const lastType = undoStackRef.current.at(-1)?.type
        const consecutiveActions: typeof actionsToUndo = []

        while (undoStackRef.current.at(-1)?.type === lastType) {
          consecutiveActions.push(undoStackRef.current.pop()!)
        }

        // Reverse so the newest action is undone first
        actionsToUndo = consecutiveActions.reverse()
        break
      }
      case 'allActions':
        // Later changes depend on earlier ones so undo from newest to oldest, then clear the stack
        actionsToUndo = [...undoStackRef.current].reverse()
        undoStackRef.current = []
        break
    }

    // Apply undo operations to the current model
    const model = getModel()
    if (!model) return console.error('No model available for undo')

    // Build a map of rows to undo updates for.
    // This handles the "undo consecutive actions of the same type" use case:
    //   - Ensure each row is restored once to its oldest state in the group,
    //     avoiding intermediate overwrites
    const updateMap = new Map<number, UndoableAction>()

    actionsToUndo.forEach(action => {
      if (action.type === 'UPDATE') {
        // Only keep the first (oldest) update for each row
        if (!updateMap.has(action.rowIndex)) {
          updateMap.set(action.rowIndex, action)
        }
      }
    })

    // Undo DELETEs from lowest to highest rowIndex to safely restore original positions
    const deleteActions = actionsToUndo
      .filter(action => action.type === 'DELETE')
      .sort((a, b) => a.rowIndex - b.rowIndex)

    // Undo CREATEs from highest to lowest rowIndex to safely remove rows without shifting indices
    const createActions = actionsToUndo
      .filter(action => action.type === 'CREATE')
      .sort((a, b) => b.rowIndex - a.rowIndex)

    // Doesn't change row order, keep the same
    const updateActions = actionsToUndo.filter(
      action => action.type === 'UPDATE',
    )

    // Process actions in the correct order
    // 1. Restoring deleted rows first ensures all original positions exist before applying updates or deletes.
    // 2. Applying updates next ensures row values are restored correctly while all rows are at their proper indices.
    // 3. Removing newly created rows last prevents shifting indices that would break updates or deletions.
    const orderedActions = [
      ...deleteActions,
      ...updateActions,
      ...createActions,
    ]

    orderedActions.forEach(action => {
      const rowsArr = model.api.arr(['rows'])

      if (action.type === 'CREATE') {
        // Remove the created row
        rowsArr?.del(action.rowIndex, 1)
        createdRowIds.delete(action.rowId)
      }

      if (action.type === 'UPDATE') {
        // Only process if this is the action we kept in the map (the oldest one)
        const keptAction = updateMap.get(action.rowIndex)
        if (keptAction === action) {
          // Restore the oldest previous value
          if (action.previousValue) {
            const { columnNames } = model.api.getSnapshot()

            Object.entries(action.previousValue).forEach(([key, value]) => {
              if (key.startsWith('_')) return // Skip metadata fields
              const columnIndex = columnNames.indexOf(key)
              if (columnIndex !== -1) {
                const rowVec = model.api.vec([
                  'rows',
                  String(action.rowIndex),
                  'data',
                ])
                rowVec?.set([[columnIndex, s.con(value)]])
              }
            })
          }
          updatedRowIds.delete(action.rowId)
        }
      }

      if (action.type === 'DELETE') {
        // Re-insert the deleted row
        if (action.previousValue) {
          const { columnNames } = model.api.getSnapshot()

          // Create the row data for the model
          const rowData = columnNames.map(
            colName => action.previousValue![colName] || '',
          )

          // Insert the row into the model
          rowsArr?.ins(action.rowIndex, [
            { data: s.vec(...rowData.map(s.con)) },
          ])
        }
        deletedRowIds.delete(action.rowId)
      }
    })

    // Send the undo changes to server
    websocketInstance?.sendPatch()

    // Update UI to reflect the undo
    const updatedSnapshot = model.api.getSnapshot()
    setRowValues(modelRowsToGrid(updatedSnapshot))

    // Reset the undo flag after a brief delay to allow the model updates to complete
    setTimeout(() => {
      isUndoingRef.current = false
    }, 100)

    handleClose()
  }

  const performCommit = (dataToCommit: DataGridRow[]) => {
    // The model has already been updated in handleChange, just send the patch
    websocketInstance?.sendPatch()

    return dataToCommit
  }

  function genId() {
    return Math.floor(Math.random() * 1000000)
  }

  const autoCommit = useCallback(
    throttle((newValue: DataGridRow[]) => {
      console.log('Auto-committing changes')
      performCommit(newValue)
    }, 500),
    [performCommit],
  )

  function addRowToModel() {
    return { _rowId: genId() }
  }

  const handleChange = (newValue: DataGridRow[], operations: Operation[]) => {
    if (!modelRef.current) {
      console.error('Model is not initialized')
      return
    }

    // Apply all model updates in one place
    applyOperationsToModel(operations, newValue, rowValues, modelRef.current)

    // Handle row tracking for UI state

    // Don't track actions if we're currently undoing
    if (isUndoingRef.current) {
      // Still update the UI state but don't track for undo
      const filteredData = newValue.filter(
        ({ _rowId }: DataGridRow) => !deletedRowIds.has(_rowId),
      )
      setRowValues(filteredData)
      return
    }

    for (const operation of operations) {
      if (operation.type === 'CREATE') {
        for (let i = operation.fromRowIndex; i < operation.toRowIndex; i++) {
          const newRow = newValue[i]
          const rowId = newRow?._rowId || genId()

          undoStackRef.current.push({
            type: 'CREATE',
            rowId,
            rowIndex: i,
            newValue: newRow,
          })
        }

        newValue
          .slice(operation.fromRowIndex, operation.toRowIndex)
          .forEach(({ _rowId }: any) => createdRowIds.add(_rowId))
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

            // Skip tracking UPDATE operations for newly created rows or deleted rows
            if (!createdRowIds.has(_rowId) && !deletedRowIds.has(_rowId)) {
              updatedRowIds.add(_rowId)

              undoStackRef.current.push({
                type: 'UPDATE',
                rowId: typeof _rowId === 'number' ? _rowId : -1,
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

            if (wasCreated) {
              // Row was created and then deleted - don't track this as a DELETE action
              console.log('Removing created row from tracking:', _rowId)
            } else {
              deletedRowIds.add(_rowId)

              undoStackRef.current.push({
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

    // Filter out deleted rows
    const filteredData = newValue.filter(
      ({ _rowId }: DataGridRow) => !deletedRowIds.has(_rowId),
    )

    // Update UI state
    setRowValues(filteredData)
    autoCommit(filteredData)
  }

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
                          onClick={() => handleUndo('lastAction')}
                        >
                          Undo last {undoPreview.lastType.toLowerCase()} action
                        </MenuItem>,
                        ...(undoPreview.sameTypeCount > 1
                          ? [
                              <MenuItem
                                key="consecutiveActions"
                                onClick={() => handleUndo('consecutiveActions')}
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
                                onClick={() => handleUndo('allActions')}
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
                      'row-deleted': deletedRowIds.has(rowData._rowId),
                      'row-created': createdRowIds.has(rowData._rowId),
                      'row-updated': updatedRowIds.has(rowData._rowId),
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
