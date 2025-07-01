import { useState, useRef, useEffect, useMemo } from 'react'
import {
  DataSheetGrid,
  keyColumn,
  Column,
  createTextColumn,
} from 'react-datasheet-grid'
import 'react-datasheet-grid/dist/style.css'
import '../../style/components/_data-grid-extra.scss'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { SynapseClient } from '@sage-bionetworks/synapse-client'
import { useCreateGridSession } from './useCreateGridSession'
import {
  CreateGridRequest,
  PostRepoV1GridSessionIdReplicaRequest,
} from '@sage-bionetworks/synapse-client'
import { Model, VecApi } from 'json-joy/lib/json-crdt'
import { encode, decode } from 'json-joy/lib/json-crdt-patch/codec/compact'
import { konst } from 'json-joy/lib/json-crdt-patch'
import throttle from 'lodash.throttle'
import { Encoder as VerboseEncoder } from 'json-joy/lib/json-crdt/codec/structural/verbose/Encoder'

const verboseEncoder = new VerboseEncoder()

const DataGrid = () => {
  const synapseClient = useSynapseContext().synapseClient

  // Grid session state
  const [sessionId, setSessionId] = useState<string>('')
  const [replicaId, setReplicaId] = useState<number | null>(null)
  const [presignedUrl, setPresignedUrl] = useState<string>('')
  const [gridSql, setGridSql] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const webSocketRef = useRef<WebSocket | null>(null)

  // WebSocket state
  const [isConnected, setIsConnected] = useState<boolean>(false)
  const [connectionStatus, setConnectionStatus] =
    useState<string>('Disconnected')
  const [messages, setMessages] = useState<string[]>([])

  // CRDT state
  const sequenceNumberRef = useRef<number>(1)
  const modelRef = useRef<Model | null>(null)
  type ModelColumnNames = string
  type ModelColumnOrder = number
  type ModelRow = string
  type ModelSnapshot = {
    columnNames: ModelColumnNames[]
    columnOrder: ModelColumnOrder[]
    rows: ModelRow[]
  }
  const modelSnapshotRef = useRef<ModelSnapshot>({
    columnNames: [],
    columnOrder: [],
    rows: [],
  })
  const [modelCols, setModelCols] = useState<ModelColumnNames[]>(
    modelSnapshotRef?.current.columnNames || [],
  )
  const [modelColOrder, setModelColOrder] = useState<ModelColumnOrder[]>(
    modelSnapshotRef?.current.columnOrder || [],
  )
  const [modelRows, setModelRows] = useState<ModelRow[]>(
    modelSnapshotRef?.current.rows || [],
  )
  const getModel = () => modelRef.current
  const setModel = (newModel: Model) => {
    if (newModel.view() !== modelRef.current?.view()) {
      modelRef.current = newModel
      modelSnapshotRef.current = modelRef.current.api.getSnapshot()
    }
  }

  // Grid rows and columns
  type DataGridRow = { [key: string]: string | number }
  const [gridReady, setGridReady] = useState<boolean>(false)
  const [rowValues, setRowValues] = useState<DataGridRow[]>(
    modelRowsToGrid(modelSnapshotRef.current),
  )
  const [colValues, setColValues] = useState<Column[]>(
    modelColsToGrid(modelSnapshotRef.current),
  )
  const [prevRows, setPrevRows] = useState(rowValues)

  // Query Input can either be an empty string, a SQL query, or a session ID
  const parseQueryInput = (input: string) => {
    if (!input) {
      return { type: 'empty', input: '' }
    } else if (input.toUpperCase().startsWith('SELECT')) {
      return { type: 'sql', input }
    } else if (/^N\w*=$/.test(input)) {
      return { type: 'sessionId', input }
    }
    return { type: 'unknown', input }
  }

  const createReplicaId = async (
    synapseClient: SynapseClient,
    sessionId: string,
  ) => {
    try {
      console.log('Creating replica for session ID:', sessionId)
      const replica =
        await synapseClient.gridServicesClient.postRepoV1GridSessionIdReplica({
          sessionId,
          createReplicaRequest: {
            gridSessionId: sessionId,
          },
        } as PostRepoV1GridSessionIdReplicaRequest)
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
    const rows = gridRows.map(row => {
      const { ...rest } = row
      //console.log('rest:', row, 'row');
      return { ...rest }
    })

    const {
      columnNames: mcn,
      columnOrder: mco,
      rows: currentRows,
    } = model.api.getSnapshot()
    const columnNames = mcn[mco] || {}

    const cn = model.api.vec(['columnNames'])
    const co = model.api.arr(['columnOrder'])
    const rowsArr = model.api.arr(['rows'])

    const { columnNames: mcnUpdate, columnOrder: mcoUpdate } =
      model.api.getSnapshot()

    // Delete rows that are no longer in gridRows
    const currentRowCount = rowsArr.length()

    // Apply row changes
    // Update existing rows and add new ones
    for (let i = 0; i < gridRows.length; i++) {
      // Check if row exists at index i before trying to get it
      const rowExists = i < rowsArr.length()

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

  // WebSocket connection management
  const connectWebSocket = (url: string) => {
    if (webSocketRef.current) {
      webSocketRef.current.close()
    }

    try {
      const ws = new WebSocket(url)
      webSocketRef.current = ws

      ws.onopen = () => {
        console.log('WebSocket connected')
        setIsConnected(true)
        setConnectionStatus('Connected')
        setMessages(prev => ['Connected to WebSocket', ...prev])
      }

      ws.onmessage = event => {
        console.log('WebSocket message received:', event.data)
        setMessages(prev => [`Received: ${event.data}`, ...prev])

        // Handle different message types if needed
        try {
          const data = JSON.parse(event.data)
          handleWebSocketMessage(data)
        } catch {
          console.log('Plain text message:', event.data)
        }
      }

      ws.onclose = event => {
        console.log('WebSocket closed:', event.code, event.reason)
        setIsConnected(false)
        setConnectionStatus(`Disconnected (${event.code})`)
        setMessages(prev => [
          `Disconnected: ${event.reason || 'Connection closed'}`,
          ...prev,
        ])
      }

      ws.onerror = error => {
        console.error('WebSocket error:', error)
        setConnectionStatus('Error')
        setMessages(prev => ['WebSocket error occurred', ...prev])
      }
    } catch (error) {
      console.error('Failed to create WebSocket connection:', error)
      setConnectionStatus('Failed to connect')
    }
  }

  const disconnectWebSocket = () => {
    if (webSocketRef.current) {
      webSocketRef.current.close()
      webSocketRef.current = null
    }
  }

  const sendWebSocketMessage = (message: string | object) => {
    if (
      webSocketRef.current &&
      webSocketRef.current.readyState === WebSocket.OPEN
    ) {
      const messageToSend =
        typeof message === 'string' ? message : JSON.stringify(message)
      webSocketRef.current.send(messageToSend)
      console.log('WebSocket message sent:', messageToSend)
      setMessages(prev => [`Sent: ${messageToSend}`, ...prev])
    } else {
      console.error('WebSocket is not connected')
      setMessages(prev => ['Failed to send: WebSocket not connected', ...prev])
    }
  }

  interface jsonJoyMessage {
    sequenceNumber: number
    sequtypeenceNumber: string
    payload?: string
  }

  const handleWebSocketMessage = (latestMsg: jsonJoyMessage) => {
    // [4, <sequence_number>, <payload>]
    if (
      Array.isArray(latestMsg) &&
      latestMsg.length === 3 &&
      latestMsg[0] === 4
    ) {
      const [, , payload] = latestMsg
      try {
        // Apply patch to model
        const patch = decode(payload)
        if (!modelRef.current) {
          // Initialize the model if it doesn't exist
          console.log('Initializing new model from patch:', patch)
          // use the replica ID the server gives us - don't use an empty one
          modelRef.current = Model.fromPatches([patch]).fork(replicaId!)
          modelSnapshotRef.current =
            modelRef.current.api.getSnapshot() as ModelSnapshot
          const { columnNames } = modelSnapshotRef.current
          setModelCols(columnNames)
          setRowValues(modelRowsToGrid(modelSnapshotRef.current))
          setColValues(modelColsToGrid(modelSnapshotRef.current))
        } else {
          console.log('Applying patch from server:', patch)
          modelRef.current?.applyPatch(patch)
          modelSnapshotRef.current =
            modelRef.current.api.getSnapshot() as ModelSnapshot
          const { columnNames } = modelSnapshotRef.current
          modelSnapshotRef.current =
            modelRef.current.api.getSnapshot() as ModelSnapshot
          setModelCols(columnNames)
          setRowValues(modelRowsToGrid(modelSnapshotRef.current))
          setColValues(modelColsToGrid(modelSnapshotRef.current))
        }
        // Calculate the new clock
        const modelClock = modelRef.current.api.flush()
        let encodedModelClock
        if (modelClock.ops.length !== 0) {
          encodedModelClock = encode(modelClock)
        }
        if (encodedModelClock) {
          const msg = [1, sequenceNumberRef.current, 'patch', encodedModelClock]
          console.log('Responding with patch:', msg)
          sendWebSocketMessage(msg)
        } else {
          const verbModel = verboseEncoder.encode(modelRef.current)
          const msg = [
            1,
            sequenceNumberRef.current,
            'synchronize-clock',
            verbModel.time,
          ]
          console.log('Responding with synchronize-clock:', msg)
          sendWebSocketMessage(msg)
        }
      } catch (err) {
        console.error('Failed to apply patch or send clock:', err)
      }
    }

    // [5, <sequence_number>]
    else if (
      Array.isArray(latestMsg) &&
      latestMsg.length === 2 &&
      latestMsg[0] === 5
    ) {
      // Clocks are in sync, no further action needed
      sequenceNumberRef.current += 1
      modelSnapshotRef.current =
        modelRef.current?.api.getSnapshot() as ModelSnapshot
      setModelRows(modelSnapshotRef.current.rows)
      setModelCols(modelSnapshotRef.current.columnNames)
      setGridReady(true)
      console.log(
        'Clocks synchronized with server. Incrementing sequence number.',
      )
    }
    // [8, <message>]
    else if (Array.isArray(latestMsg) && latestMsg[0] === 8) {
      // Clocks are in sync, no further action needed
      console.log('Message received from server:', latestMsg[1])
      if (latestMsg[1] === 'ping') {
        // Handle ping response
        console.log('Received ping response from server')
      }
      if (latestMsg[1] === 'connected') {
        // Handle connected response
        console.log('Server ready to receive patches')
        sendTestMessage()
      }
      if (latestMsg[1] === 'error') {
        // Handle error response
        console.warn('Error from server:', latestMsg[2])
      }
      if (latestMsg[1] === 'new-patch') {
        const verbModel = verboseEncoder.encode(modelRef.current!)
        console.log('New patch received, syncing data:', verbModel.time)
        const msg = [
          1,
          sequenceNumberRef.current,
          'synchronize-clock',
          verbModel.time,
        ]
        sendWebSocketMessage(msg)
      }
    } else {
      console.warn('Unexpected WebSocket message format:', latestMsg)
    }
  }

  // Connect to WebSocket when presignedUrl is available
  useEffect(() => {
    if (presignedUrl) {
      connectWebSocket(presignedUrl)
    }

    // Cleanup on unmount
    return () => {
      disconnectWebSocket()
    }
  }, [presignedUrl])

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
        } as CreateGridRequest

        if (parsedInput.type === 'sql') {
          gridRequest.initialQuery = { sql: parsedInput.input }
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
          await synapseClient.gridServicesClient.postRepoV1GridSessionIdPresignedUrl(
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
          await synapseClient.gridServicesClient.postRepoV1GridSessionIdPresignedUrl(
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

  // Test function to send a message
  const sendTestMessage = () => {
    const testMessage = [1, sequenceNumberRef.current, 'synchronize-clock', []]
    sendWebSocketMessage(testMessage)
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

  const performCommit = (dataToCommit: any) => {
    // Filter out deleted rows
    const filteredData = dataToCommit.filter(
      ({ _rowId }: { _rowId: number | string }) => !deletedRowIds.has(_rowId),
    )

    // Update UI state
    setRowValues(filteredData)
    setPrevRows(filteredData)

    // Update model and send changes to server
    gridToModel(filteredData, getModel()!)
    const patch = modelRef.current?.api.flush()
    modelSnapshotRef.current = modelRef.current?.api.getSnapshot()
    setModelCols(modelSnapshotRef.current.columnNames)
    setModelColOrder(modelSnapshotRef.current.columnOrder)
    setModelRows(modelSnapshotRef.current.rows)
    if (patch) {
      console.log('Sending patch to server:', patch)
      const binaryData = encode(patch)
      const msg = [1, sequenceNumberRef.current, 'patch', binaryData]
      sendWebSocketMessage(msg)
    }
    setRowValues(modelRowsToGrid(modelSnapshotRef.current))

    // Reset tracking
    createdRowIds.clear()
    deletedRowIds.clear()
    updatedRowIds.clear()

    return filteredData
  }

  const commit = () => performCommit(rowValues)

  function genId() {
    return Math.floor(Math.random() * 1000000)
  }

  const autoCommitRef = useRef(
    throttle(newValue => {
      console.log('Auto-committing changes')
      performCommit(newValue)
    }, 500),
  )

  function addRowToModel() {
    return { _rowId: genId() }
  }

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="(Optional) Enter a SQL query or session ID"
          style={{ width: '300px' }}
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
      {!gridReady && <h3>Loading grid...</h3>}
      {gridReady && (
        <div>
          <button onClick={commit}>Commit</button>
          <button onClick={cancel}>Cancel</button>
          <DataSheetGrid
            value={rowValues}
            columns={colValues}
            rowKey="_rowId"
            rowClassName={({ rowData }) => {
              if (deletedRowIds.has(rowData._rowId)) {
                return 'row-deleted'
              }
              if (createdRowIds.has(rowData._rowId)) {
                return 'row-created'
              }
              if (updatedRowIds.has(rowData._rowId)) {
                return 'row-updated'
              }
            }}
            createRow={addRowToModel}
            duplicateRow={({ rowData }) => ({ ...rowData, _rowId: genId() })}
            onChange={(newValue, operations) => {
              for (const operation of operations) {
                const rowsArr = modelRef.current?.api.arr(['rows'])
                if (operation.type === 'CREATE') {
                  // Add new rows to the model iterating fromRowIndex to toRowIndex
                  // and adding rows to the model via the api
                  for (
                    let i = operation.fromRowIndex;
                    i < operation.toRowIndex;
                    i++
                  ) {
                    rowsArr?.ins(i, [modelRef.current?.api.builder.vec()])
                  }

                  newValue
                    .slice(operation.fromRowIndex, operation.toRowIndex)
                    .forEach(({ _rowId }) => createdRowIds.add(_rowId))
                }

                if (operation.type === 'UPDATE') {
                  newValue
                    .slice(operation.fromRowIndex, operation.toRowIndex)
                    .forEach(({ _rowId }) => {
                      if (
                        !createdRowIds.has(_rowId) &&
                        !deletedRowIds.has(_rowId)
                      ) {
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
              autoCommitRef.current(newValue)
            }}
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
          {modelSnapshotRef.current
            ? JSON.stringify(modelSnapshotRef.current)
            : 'No model available'}
        </p>
      </div>
    </div>
  )
}

export default DataGrid
