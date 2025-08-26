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
    getModel,
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
  }, [session, replicaId, websocketInstance])

  // Grid rows and columns
  const [rowValues, setRowValues] = useState<DataGridRow[]>([])
  const [colValues, setColValues] = useState<Column[]>([])

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

  // Function to apply grid changes to a model
  function gridToModel(gridRows: DataGridRow[], model: GridModel): GridModel {
    if (!model) return model
    const { columnNames: mcnUpdate } = model.api.getSnapshot()

    // Apply row changes
    // Update existing rows and add new ones
    for (let i = 0; i < gridRows.length; i++) {
      const editedRow = gridRows[i]
      const rowVec = model.api.vec(['rows', String(i), 'data'])

      // Update each cell in the row
      Object.entries(editedRow).forEach(([key, value]) => {
        const columnIndex = mcnUpdate.indexOf(key)
        if (!isNaN(columnIndex)) {
          rowVec?.set([[columnIndex, s.con(value)]])
        }
      })
    }
    return model
  }

  // Grid editing functions
  const createdRowIds = useMemo(() => new Set(), [])
  const deletedRowIds = useMemo(() => new Set(), [])
  const updatedRowIds = useMemo(() => new Set(), [])

  const performCommit = (dataToCommit: DataGridRow[]) => {
    // Update model and send changes to server
    // This mutates the model -- maybe we should move this?
    gridToModel(dataToCommit, getModel()!)
    websocketInstance?.sendPatch()

    // Reset tracking
    createdRowIds.clear()
    deletedRowIds.clear()
    updatedRowIds.clear()

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
    for (const operation of operations) {
      const model = modelRef.current
      const rowsArr = model.api.arr(['rows'])
      if (operation.type === 'CREATE') {
        // Add new rows to the model iterating fromRowIndex to toRowIndex
        // and adding rows to the model via the api
        for (let i = operation.fromRowIndex; i < operation.toRowIndex; i++) {
          const rowArr = model.api.arr(['rows'])
          rowArr.ins(i, [{ data: s.vec(s.con('')) }])
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

        // Compare all elements of oldVal and newVal
        const comparisonResults = oldVal.map((oldItem, idx) =>
          rowsAreIdentical(oldItem, newVal[idx]),
        )

        // If all compared rows are identical, no state updates are necessary.
        // It is safe to return early here to avoid unnecessary updates.
        if (comparisonResults.every(Boolean)) return
        // Only process newVal items where comparisonResults is false (i.e., changed rows)
        newVal
          .filter((_, idx) => !comparisonResults[idx])
          .forEach(({ _rowId }: DataGridRow) => {
            if (!createdRowIds.has(_rowId) && !deletedRowIds.has(_rowId)) {
              updatedRowIds.add(_rowId)
            }
          })
      }

      if (operation.type === 'DELETE') {
        let keptRows = 0
        rowsArr?.del(
          operation.fromRowIndex,
          operation.toRowIndex - operation.fromRowIndex,
        )

        rowValues
          .slice(operation.fromRowIndex, operation.toRowIndex)
          .forEach(({ _rowId }, i) => {
            updatedRowIds.delete(_rowId)

            if (createdRowIds.has(_rowId)) {
              createdRowIds.delete(_rowId)
            } else {
              deletedRowIds.add(_rowId)
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
      </Grid>
      {session && (
        <>
          {/* Grid Loading State */}
          {!isGridReady && (
            <>
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
            </>
          )}

          {/* Grid */}
          {isGridReady && (
            <div>
              <DataSheetGrid
                value={rowValues}
                columns={colValues}
                rowKey="_rowId"
                rowClassName={({ rowData, rowIndex }: any) =>
                  classNames({
                    'row-deleted': deletedRowIds.has(rowData._rowId),
                    'row-created': createdRowIds.has(rowData._rowId),
                    'row-updated': updatedRowIds.has(rowData._rowId),
                    'row-valid': rowData.__validationResults?.isValid === true,
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
            </div>
          )}

          {/* Debug Model Snapshot */}
          {showDebugInfo && (
            <div
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
            </div>
          )}
        </>
      )}
    </div>
  )
})

export default SynapseGrid
