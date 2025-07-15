import { useCallback, useRef, useEffect, useMemo, useState } from 'react'
import {
  DataSheetGrid,
  keyColumn,
  Column,
  createTextColumn,
} from 'react-datasheet-grid'
import 'react-datasheet-grid/dist/style.css'
import '../../style/components/_data-grid-extra.scss'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { SynapseClient, TableQuery } from '@sage-bionetworks/synapse-client'
import { useCreateGridSession } from './useCreateGridSession'
import {
  CreateGridRequest,
  PostRepoV1GridSessionSessionIdReplicaRequest,
} from '@sage-bionetworks/synapse-client'
import { Model, VecApi } from 'json-joy/lib/json-crdt'
import { konst } from 'json-joy/lib/json-crdt-patch'
import throttle from 'lodash-es/throttle'
import { parseQueryInput } from './DataGridUtils'
import { ModelSnapshot, Operation } from './DataGridTypes'
import { useDataGridWebSocket } from './useDataGridWebsocket'

const DataGrid = () => {
  const synapseClient = useSynapseContext().synapseClient

  // Grid session state
  const [sessionId, setSessionId] = useState<string>('')
  const [replicaId, setReplicaId] = useState<number | null>(null)
  const [presignedUrl, setPresignedUrl] = useState<string>('')
  const [gridSql, setGridSql] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

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
    if (presignedUrl) {
      createWebsocket(presignedUrl)
    }
  }, [presignedUrl, createWebsocket])

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
  type DataGridRow = { [key: string]: string | number }
  const [rowValues, setRowValues] = useState<DataGridRow[]>(
    modelRowsToGrid(modelSnapshot),
  )
  const [colValues, setColValues] = useState<Column[]>(
    modelColsToGrid(modelSnapshot),
  )
  const [prevRows, setPrevRows] = useState(rowValues)

  useEffect(() => {
    setRowValues(modelRowsToGrid(modelSnapshot))
    setColValues(modelColsToGrid(modelSnapshot))
  }, [modelSnapshot])

  const createReplicaId = async (
    synapseClient: SynapseClient,
    sessionId: string,
  ) => {
    try {
      console.log('Creating replica for session ID:', sessionId)
      const replica =
        await synapseClient.gridServicesClient.postRepoV1GridSessionSessionIdReplica(
          {
            sessionId,
            createReplicaRequest: {
              gridSessionId: sessionId,
            },
          } as PostRepoV1GridSessionSessionIdReplicaRequest,
        )
      return replica
    } catch (error) {
      console.error('Failed to create replica:', error)
      return
    }
  }

  // Convert model rows to a format suitable for DataSheetGrid
  function modelRowsToGrid(modelSnapshot: ModelSnapshot): DataGridRow[] {
    if (!modelSnapshot) return []
    const { columnNames, columnOrder, rows } = modelSnapshot
    const gridRows = rows.map(row => {
      const rowObj: { [key: string]: any } = {}
      // Use columnOrder to determine which columnNames to use and in what order
      columnOrder.forEach((index: number) => {
        const columnName = columnNames[index]
        if (columnName) {
          rowObj[columnName] = row[index]
        }
      })
      return rowObj
    })
    return gridRows
  }

  // Convert model columns to a format suitable for DataSheetGrid
  function modelColsToGrid(modelSnapshot: ModelSnapshot): Column[] {
    if (!modelSnapshot) return []
    const { columnNames, columnOrder } = modelSnapshot
    const gridCols: Column[] = columnOrder.map((index: number) => {
      return {
        ...keyColumn(
          columnNames[index],
          createTextColumn({ continuousUpdates: false }),
        ),
        title: columnNames[index],
      }
    })
    return gridCols
  }

  // Function to apply grid changes to a model
  function gridToModel(gridRows: DataGridRow[], model: Model): Model {
    if (!model) return model
    const rowsArr = model.api.arr(['rows'])
    const { columnNames: mcnUpdate } = model.api.getSnapshot() as ModelSnapshot

    // Apply row changes
    // Update existing rows and add new ones
    for (let i = 0; i < gridRows.length; i++) {
      const editedRow = gridRows[i]
      const rowVec = rowsArr.get(i) as VecApi<any>

      // Update each cell in the row
      Object.entries(editedRow).forEach(([key, value]) => {
        const columnIndex = mcnUpdate.indexOf(key)
        if (!isNaN(columnIndex)) {
          rowVec.set([[columnIndex, konst(value)]])
        }
      })
    }
    return model
  }

  // Based on user input, start a new session with or without a SQL query
  // or join an existing session by ID
  const startGridSession = useCreateGridSession()
  const handleStartSession = async (input: string) => {
    const parsedInput = parseQueryInput(input)

    try {
      if (parsedInput.type === 'empty' || parsedInput.type === 'sql') {
        // Start a new session and clear replicaId and presignedUrl
        const gridRequest = {
          concreteType: 'org.sagebionetworks.repo.model.grid.CreateGridRequest',
          initialQuery: undefined as TableQuery | undefined,
          schema$id: undefined as string | undefined,
        } as CreateGridRequest

        if (parsedInput.type === 'sql') {
          gridRequest.initialQuery = { sql: parsedInput.input } as TableQuery
          setGridSql(parsedInput.input)
          console.log('Starting grid session with table query: ', gridSql)
        } else {
          setGridSql('')
          console.log('Starting a new empty grid session.')
        }

        const gridSessionResponse = await startGridSession.mutateAsync(
          gridRequest,
        )
        console.log('Grid session started:', gridSessionResponse)
        const newSessionId = gridSessionResponse.gridSession?.sessionId || ''
        setSessionId(newSessionId)

        const replica = await createReplicaId(synapseClient, newSessionId)
        console.log('Replica created:', replica)
        const newReplicaId = replica?.replica?.replicaId || null
        setReplicaId(newReplicaId)

        const getPresignedUrl =
          await synapseClient.gridServicesClient.postRepoV1GridSessionSessionIdPresignedUrl(
            {
              sessionId: newSessionId,
              createGridPresignedUrlRequest: {
                gridSessionId: newSessionId,
                replicaId: newReplicaId || undefined,
              },
            },
          )
        setPresignedUrl(getPresignedUrl.presignedUrl || '')
      } else if (parsedInput.type === 'sessionId') {
        console.log(`Joining existing session ID: ${parsedInput.input}`)
        setSessionId(parsedInput.input)

        const replica = await createReplicaId(synapseClient, parsedInput.input)
        console.log('Replica created:', replica)
        const newReplicaId = replica?.replica?.replicaId || null
        setReplicaId(newReplicaId)

        const getPresignedUrl =
          await synapseClient.gridServicesClient.postRepoV1GridSessionSessionIdPresignedUrl(
            {
              sessionId: parsedInput.input,
              createGridPresignedUrlRequest: {
                gridSessionId: parsedInput.input,
                replicaId: newReplicaId || undefined,
              },
            },
          )
        setPresignedUrl(getPresignedUrl.presignedUrl || '')
      } else {
        console.error(
          'Unknown input type, please provide a valid SQL query or session ID.',
        )
      }
    } catch (error) {
      console.error('Error starting session:', error)
    }
  }

  // Grid editing functions
  const createdRowIds = useMemo(() => new Set(), [])
  const deletedRowIds = useMemo(() => new Set(), [])
  const updatedRowIds = useMemo(() => new Set(), [])

  const cancel = () => {
    setRowValues(prevRows)
    createdRowIds.clear()
    deletedRowIds.clear()
    updatedRowIds.clear()
  }

  const performCommit = (dataToCommit: DataGridRow[]) => {
    // Update model and send changes to server
    // This mutates the model -- maybe we should move this?
    gridToModel(dataToCommit, getModel()!)
    websocketInstance.sendPatch()
    // setRowValues(modelRowsToGrid(modelSnapshotRef.current))

    // Reset tracking
    createdRowIds.clear()
    deletedRowIds.clear()
    updatedRowIds.clear()

    return dataToCommit
  }

  const commit = () => performCommit(rowValues)

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
      const rowsArr = modelRef.current?.api.arr(['rows'])
      if (operation.type === 'CREATE') {
        // Add new rows to the model iterating fromRowIndex to toRowIndex
        // and adding rows to the model via the api
        for (let i = operation.fromRowIndex; i < operation.toRowIndex; i++) {
          rowsArr?.ins(i, [modelRef.current?.api.builder.vec()])
        }

        newValue
          .slice(operation.fromRowIndex, operation.toRowIndex)
          .forEach(({ _rowId }: any) => createdRowIds.add(_rowId))
      }

      if (operation.type === 'UPDATE') {
        newValue
          .slice(operation.fromRowIndex, operation.toRowIndex)
          .forEach(({ _rowId }: any) => {
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
      ({ _rowId }: { _rowId: number | string }) => !deletedRowIds.has(_rowId),
    )
    // Update UI state
    setRowValues(filteredData)
    setPrevRows(filteredData)

    autoCommit(filteredData)
  }

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="(Optional) Enter a SQL query or session ID"
          style={{ width: '300px' }}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              const inputValue = inputRef.current?.value || ''
              handleStartSession(inputValue)
            }
          }}
        />
        <button
          onClick={() => {
            const inputValue = inputRef.current?.value || ''
            handleStartSession(inputValue)
          }}
          style={{ backgroundColor: '#4CAF50', color: 'white' }}
        >
          Start Grid Session
        </button>
      </div>

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
          <div key={index} style={{ fontSize: '12px', marginBottom: '5px' }}>
            {message}
          </div>
        ))}
      </div>
      {!isGridReady && <h3>Loading grid...</h3>}
      {isGridReady && (
        <div>
          <button onClick={commit}>Commit</button>
          <button onClick={cancel}>Cancel</button>
          <DataSheetGrid
            value={rowValues}
            columns={colValues}
            rowKey="_rowId"
            rowClassName={({ rowData }: any) => {
              if (deletedRowIds.has(rowData._rowId)) {
                return 'row-deleted'
              }
              if (createdRowIds.has(rowData._rowId)) {
                return 'row-created'
              }
              if (updatedRowIds.has(rowData._rowId)) {
                return 'row-updated'
              } else return ''
            }}
            createRow={addRowToModel}
            duplicateRow={({ rowData }: any) => ({
              ...rowData,
              _rowId: genId(),
            })}
            onChange={handleChange}
          />
        </div>
      )}
      <div
        style={{
          margin: '10px 0',
          padding: '10px',
          border: '1px solid #ccc',
          maxHeight: '200px',
          overflowY: 'auto',
        }}
      >
        <h3>Model snapshot</h3>
        <p>
          {modelSnapshot ? JSON.stringify(modelSnapshot) : 'No model available'}
        </p>
      </div>
    </div>
  )
}

export default DataGrid
