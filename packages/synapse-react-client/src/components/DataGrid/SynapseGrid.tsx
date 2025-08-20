import { ComplexJSONRenderer } from '@/components/SynapseTable/SynapseTableCell/JSON/ComplexJSONRenderer'
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
import {
  GridModel,
  GridModelSnapshot,
  Operation,
  DataGridRow,
} from './DataGridTypes'
import { StartGridSession } from './StartGridSession'
import { useDataGridWebSocket } from './useDataGridWebsocket'
import { rowsAreIdentical } from './DataGridUtils'
import { SkeletonTable } from '../Skeleton'
import { autocompleteColumn } from './columns/AutocompleteColumn'

export type SynapseGridProps = {
  query: string
  showDebugInfo?: boolean
}

const SynapseGrid = forwardRef<
  { initializeGrid: () => void },
  SynapseGridProps
>(({ query, showDebugInfo = false }, ref) => {
  // Grid session state
  const [sessionId, setSessionId] = useState<string>('')
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

  const connectionStatus = isConnected ? 'Connected' : 'Disconnected'

  const [messages, setMessages] = useState<string[]>([])

  // If grid sessionId or replicaId changes, reset the model
  useEffect(() => {
    if (sessionId || replicaId) {
      modelRef.current = null
      // modelSnapshotRef.current = {
      //   columnNames: [],
      //   columnOrder: [],
      //   rows: [],
      // }
      setRowValues([])
      setColValues([])
      setMessages([]) // Clear message log
    }
  }, [sessionId, replicaId, websocketInstance])

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
    const gridRows = rows.map(row => {
      const rowObj: { [key: string]: any } = {}
      columnOrder.forEach((index: number) => {
        const columnName = columnNames[index]
        if (columnName) {
          rowObj[columnName] = row.data[index]
        }
      })
      const validation = row.metadata?.rowValidation
      rowObj.validationStatus = validation
        ? validation.isValid
          ? 'valid'
          : 'invalid'
        : 'unknown'
      rowObj.validationMessages = validation?.allValidationMessages ?? []
      return rowObj
    })
    return gridRows
  }

  function getEnumeratedValuesForColumn(columnName: string): string[] | null {
    // Options based on column name
    // Replace with actual data source later
    const columnEnumerations: { [key: string]: string[] } = {
      breed: [
        'domestic short hair',
        'domestic long hair',
        'persian',
        'ragdoll',
      ],
      color: ['white', 'black', 'blue bicolor', 'seal bicolor'],
    }

    return columnEnumerations[columnName.toLowerCase()] || null
  }

  // Convert model columns to a format suitable for DataSheetGrid
  function modelColsToGrid(modelSnapshot: GridModelSnapshot): Column[] {
    if (!modelSnapshot) return []
    const { columnNames, columnOrder } = modelSnapshot
    const gridCols: Column[] = columnOrder.map((index: number) => {
      const columnName = columnNames[index]
      const enumeratedValues = getEnumeratedValuesForColumn(columnName)

      if (enumeratedValues) {
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
    for (const operation of operations) {
      const model = getModel()!
      const rowsArr = model.api.arr(['rows'])
      if (operation.type === 'CREATE') {
        // Add new rows to the model iterating fromRowIndex to toRowIndex
        // and adding rows to the model via the api
        for (let i = operation.fromRowIndex; i < operation.toRowIndex; i++) {
          const rowArr = model.api.arr(['rows'])
          rowArr.ins(i, [{ data: s.vec(s.con('')), metadata: s.obj({}) }])
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
      <div>
        <StartGridSession
          ref={startGridSessionRef}
          onSessionChange={setSessionId}
          onReplicaChange={setReplicaId}
          onPresignedUrlChange={setPresignedUrl}
          query={query}
        />
      </div>
      {sessionId && (
        <>
          {/* Debug Information */}
          {showDebugInfo && (
            <>
              <div>
                <p>Session ID: {sessionId || 'No session created'}</p>
                <p>Replica ID: {replicaId || 'No replica created'}</p>
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

              {/* Message Log */}
              <div
                style={{
                  margin: '10px 0',
                  padding: '10px',
                  border: '1px solid #ccc',
                  maxHeight: '200px',
                  overflowY: 'auto',
                }}
              >
                <h4>Server Message Log</h4>
                {messages.map((message, index) => (
                  <div
                    key={index}
                    style={{ fontSize: '12px', marginBottom: '5px' }}
                  >
                    {message}
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Grid Loading State */}
          {!isGridReady && (
            <>
              <h3>Setting up grid...</h3>
              <div style={{ marginBottom: '10px' }}>
                {!sessionId && <p>Creating grid session...</p>}
                {sessionId && !replicaId && <p>Setting up real-time sync...</p>}
                {sessionId && replicaId && !presignedUrl && (
                  <p>Establishing secure connection...</p>
                )}
                {sessionId && replicaId && presignedUrl && !isConnected && (
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
                rowClassName={({ rowData, rowIndex }: any) => {
                  let className = ''
                  if (deletedRowIds.has(rowData._rowId)) {
                    className += 'row-deleted'
                  }
                  if (createdRowIds.has(rowData._rowId)) {
                    className += 'row-created'
                  }
                  if (updatedRowIds.has(rowData._rowId)) {
                    className += 'row-updated'
                  }
                  if (rowData.validationStatus === 'valid')
                    className += 'row-valid'
                  if (rowData.validationStatus === 'invalid')
                    className += 'row-invalid'
                  if (rowData.validationStatus === 'unknown')
                    className += 'row-unknown'
                  if (selectedRowIndex === rowIndex) {
                    className += ' row-selected'
                  }
                  return className
                }}
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
                rowValues[selectedRowIndex].validationMessages &&
                rowValues[selectedRowIndex].validationMessages.length > 0 && (
                  <div
                    style={{
                      marginTop: 12,
                      background: '#fffbe6',
                      border: '1px solid #ffe58f',
                      borderRadius: 4,
                      padding: 10,
                      maxWidth: 400,
                      fontSize: 13,
                    }}
                  >
                    <strong>Validation Messages:</strong>
                    <ul style={{ margin: 0, paddingLeft: 18 }}>
                      {rowValues[selectedRowIndex].validationMessages.map(
                        (msg: string, i: number) => (
                          <li key={i}>{msg}</li>
                        ),
                      )}
                    </ul>
                  </div>
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
