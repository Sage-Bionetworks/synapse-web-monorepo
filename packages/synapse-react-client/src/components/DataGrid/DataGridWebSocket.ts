import {
  GridModel,
  GridModelSnapshot,
} from '@/components/DataGrid/DataGridTypes'
import JsonRx from '@/components/DataGrid/utils/json-rx/JsonRx'
import JsonRxMessage from '@/components/DataGrid/utils/json-rx/JsonRxMessage'
import JsonRxNotification from '@/components/DataGrid/utils/json-rx/JsonRxNotification'
import JsonRxRequestComplete from '@/components/DataGrid/utils/json-rx/JsonRxRequestComplete'
import JsonRxResponse from '@/components/DataGrid/utils/json-rx/JsonRxResponse'
import JsonRxResponseComplete from '@/components/DataGrid/utils/json-rx/JsonRxResponseComplete'
import MessageCounter from '@/components/DataGrid/utils/MessageCounter'
import { splitPatch } from '@/components/DataGrid/utils/splitPatch'
import { Model } from 'json-joy/lib/json-crdt'
import {
  CompactCodecPatch,
  decode,
} from 'json-joy/lib/json-crdt-patch/codec/compact'
import { Encoder as VerboseEncoder } from 'json-joy/lib/json-crdt/codec/structural/verbose/Encoder'
import { JsonCrdtVerboseLogicalTimestamp } from 'json-joy/lib/json-crdt/codec/structural/verbose/types'
import noop from 'lodash-es/noop'
import throttle from 'lodash-es/throttle'
import { type DebouncedFunc } from 'lodash-es'
import { Decoder as SnapshotDecoder } from 'json-joy/lib/json-crdt/codec/indexed/binary/Decoder'
import { decode as decodeCbor } from 'cbor2'
import type { IndexedFields } from 'json-joy/lib/json-crdt/codec/indexed/binary'
import { fetchWithExponentialTimeout } from '@sage-bionetworks/synapse-client'

enum SynapseGridWebSocketMessagePayloadType {
  PATCH = 'patch',
  SNAPSHOT = 'snapshot',
  PATCHES = 'patches',
}

type SynapseGridWebSocketMessagePayload =
  | {
      type: SynapseGridWebSocketMessagePayloadType.PATCH
      body: CompactCodecPatch
    }
  | {
      type: SynapseGridWebSocketMessagePayloadType.PATCHES
      body: CompactCodecPatch[]
    }
  | { type: SynapseGridWebSocketMessagePayloadType.SNAPSHOT; body: string }

export interface CellChangeInfo {
  rowIndex: number
  colName: string
}

type DataGridWebSocketConstructorArgs = {
  replicaId: number
  url: string
  onGridReady?: () => void
  onStatusChange?: (isOpen: boolean, instance: DataGridWebSocket) => void
  onModelCreate?: (model: GridModel) => void
  onReplicaConnected?: () => void
  onReplicaDisconnected?: () => void
  /**
   * Called after each incoming patch is applied to the model.
   * authorSid is the json-joy session ID of the replica that authored the patch,
   * which equals the server-assigned replicaId for that replica.
   * changes lists each cell (by row index and column name) modified by the patch.
   * SERVICE-authored patches are excluded by the consumer using the replica list.
   */
  onPatchApplied?: (authorSid: number, changes: CellChangeInfo[]) => void
  maxPayloadSizeBytes?: number
  socket?: WebSocket
  model?: GridModel | null
  patchThrottleMs?: number
}

// API Gateway WebSocket payload size limit is 32 KB per message
// There is some overhead we aren't computing in our utility, namely the size of the patch header and the communication protocol itself
// So add some buffer
const DEFAULT_MAX_PAYLOAD_SIZE_BYTES = 30 * 1024 // 30 KB
const DEFAULT_PATCH_THROTTLE_MS = 250

export class DataGridWebSocket {
  private socket: WebSocket
  private model: GridModel | null = null
  private messageCounter: MessageCounter
  private replicaId: number
  private verboseEncoder = new VerboseEncoder()
  private maxPayloadSizeBytes: number
  private throttledSendPatch: DebouncedFunc<() => void>
  private snapshotDecoder = new SnapshotDecoder()

  private onModelCreate: (model: GridModel) => void
  private onGridReady: () => void
  private onStatusChange: (isOpen: boolean, _this: DataGridWebSocket) => void
  private onReplicaConnected: () => void
  private onReplicaDisconnected: () => void
  private onPatchApplied: (authorSid: number, changes: CellChangeInfo[]) => void
  /** Snapshot of rows after last applied incoming patch, used for diffing. */
  private rowsBaseline: GridModelSnapshot['rows'] | null = null

  constructor(args: DataGridWebSocketConstructorArgs) {
    const {
      replicaId,
      url,
      onGridReady,
      onStatusChange,
      onModelCreate,
      onReplicaConnected,
      onReplicaDisconnected,
      onPatchApplied,
      maxPayloadSizeBytes,
      socket,
      model,
      patchThrottleMs,
    } = args
    this.messageCounter = new MessageCounter()
    this.replicaId = replicaId
    this.maxPayloadSizeBytes =
      maxPayloadSizeBytes ?? DEFAULT_MAX_PAYLOAD_SIZE_BYTES
    this.socket = socket ?? new WebSocket(url)

    // Assign callbacks, falling back to no-ops
    this.onModelCreate = onModelCreate ?? noop
    this.onGridReady = onGridReady ?? noop
    this.onStatusChange = onStatusChange ?? noop
    this.onReplicaConnected = onReplicaConnected ?? noop
    this.onReplicaDisconnected = onReplicaDisconnected ?? noop
    this.onPatchApplied = onPatchApplied ?? noop

    // Restore existing model if provided
    if (model) {
      this.model = model
    }

    this.attachSocketHandlers()

    this.throttledSendPatch = throttle(
      () => this.sendPatchImmediate(),
      patchThrottleMs ?? DEFAULT_PATCH_THROTTLE_MS,
      { leading: false, trailing: true },
    )
  }

  private attachSocketHandlers() {
    this.socket.onopen = () => {
      console.debug('Connected to the WebSocket server')
      this.onStatusChange(true, this)
    }

    this.socket.onmessage = (event: MessageEvent) => {
      if (typeof event.data === 'string') {
        this.handleMessage(event.data)
      } else {
        console.error('Received non-string message data:', event.data)
      }
    }

    this.socket.onclose = () => {
      console.debug('Disconnected from the WebSocket server')
      this.onStatusChange(false, this)
    }

    this.socket.onerror = (error: Event) => {
      console.error('WebSocket error:', error)
    }
  }

  public disconnect() {
    this.throttledSendPatch.flush()
    this.throttledSendPatch.cancel()
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.close()
      console.debug('WebSocket connection closed')
    } else {
      console.warn('WebSocket is not open. No action taken.')
    }
  }

  /**
   * Flushes the local model clock and sends the resulting patch (or a clock-sync
   * message) to the server so that both sides converge.
   */
  private sendClockSync() {
    if (!this.model) {
      console.error('Model is not initialized. Cannot sync model.')
      return
    }

    const patchesWereSent = this.sendPatchImmediate()
    if (!patchesWereSent) {
      // We've flushed all of our changes, so now we can receive changes from the server
      const verbModel = this.verboseEncoder.encode(this.model)
      this.sendSyncMessage(verbModel.time)
    }
  }

  private handleMessage(rawMessage: string) {
    const message = JsonRx.fromJson(JSON.parse(rawMessage))
    if (message instanceof JsonRxResponse) {
      this.handleResponse(
        message as JsonRxResponse<SynapseGridWebSocketMessagePayload>,
      )
    } else if (message instanceof JsonRxResponseComplete) {
      this.handleResponseComplete()
    } else if (message instanceof JsonRxNotification) {
      this.handleNotification(message)
    } else {
      console.warn('Unexpected WebSocket message format:', message)
    }
  }

  private handleResponse(
    message: JsonRxResponse<SynapseGridWebSocketMessagePayload>,
  ) {
    const payload = message.getPayload()

    switch (payload.type) {
      case SynapseGridWebSocketMessagePayloadType.PATCH:
        this.handlePatchPayload([payload.body])
        break

      case SynapseGridWebSocketMessagePayloadType.PATCHES:
        void this.handlePatchPayload(payload.body)
        break

      case SynapseGridWebSocketMessagePayloadType.SNAPSHOT:
        void this.handleSnapshotPayload(payload.body)
        break

      default:
        console.warn('Unknown payload type:', payload)
        break
    }
  }

  private handlePatchPayload(encodedPatch: CompactCodecPatch[]) {
    try {
      const patches = encodedPatch.map(decode)
      if (!this.model) {
        this.model = Model.fromPatches(patches).fork(
          this.replicaId,
        ) as unknown as GridModel
        this.onModelCreate(this.model)
        // Seed the baseline from the initial model
        this.rowsBaseline = this.model.api.getSnapshot()?.rows ?? null
      } else {
        // Extract author sid before applying (each patch has its own author;
        // for the common single-patch case this is exact; for rare multi-author
        // batches we attribute to the first patch's author).
        const firstPatch = patches[0]
        const authorSid =
          firstPatch && firstPatch.ops.length > 0
            ? firstPatch.ops[0].id.sid
            : null

        this.model.applyBatch(patches)

        // Report cell changes attributed to the author.
        // Single snapshot call (not two) — compare against stored baseline.
        if (authorSid !== null) {
          const newSnapshot = this.model.api.getSnapshot()
          const changes = this.diffRows(
            newSnapshot.rows,
            newSnapshot.columnNames,
          )
          if (changes.length > 0) {
            this.onPatchApplied(authorSid, changes)
          }
          this.rowsBaseline = newSnapshot.rows
        }
      }
      this.sendClockSync()
    } catch (err) {
      console.error('Failed to apply patches or send clock:', err)
    }
  }

  /**
   * Compare the new rows snapshot against the stored baseline and return cells
   * whose values have changed.
   */
  private diffRows(
    newRows: GridModelSnapshot['rows'],
    columnNames: GridModelSnapshot['columnNames'],
  ): CellChangeInfo[] {
    const changes: CellChangeInfo[] = []
    const baseline = this.rowsBaseline
    if (!baseline) return changes

    const minRows = Math.min(baseline.length, newRows.length)
    for (let i = 0; i < minRows; i++) {
      const prevData = baseline[i]?.data
      const nextData = newRows[i]?.data
      if (!prevData || !nextData) continue
      const minCols = Math.min(prevData.length, nextData.length)
      for (let j = 0; j < minCols; j++) {
        if (prevData[j] !== nextData[j]) {
          changes.push({ rowIndex: i, colName: columnNames[j] ?? String(j) })
        }
      }
    }
    return changes
  }

  private async handleSnapshotPayload(snapshotUrl: string) {
    console.debug('Received snapshot URL from server:', snapshotUrl)
    try {
      const decodedModel = await this.fetchAndDecodeSnapshot(snapshotUrl)
      this.model = decodedModel.fork(this.replicaId) as unknown as GridModel
      this.onModelCreate(this.model)
      // Seed baseline so subsequent patch diffs have a starting point
      this.rowsBaseline = this.model.api.getSnapshot()?.rows ?? null
      this.sendClockSync()
    } catch (err) {
      console.error('Failed to fetch or decode snapshot', err)
    }
  }

  private handleResponseComplete() {
    // Clocks are in sync, no further action needed
    this.onGridReady()
    console.debug(
      'Clocks synchronized with server. Incrementing sequence number.',
    )
  }

  private handleNotification(message: JsonRxNotification) {
    const methodName = message.getMethodName()
    console.debug('Notification received from server:', methodName)

    switch (methodName) {
      case 'ping':
        console.debug('Received ping from server')
        break

      case 'connected':
        console.debug('Server ready to receive patches')
        this.sendSyncMessage(
          this.model ? this.verboseEncoder.encode(this.model).time : undefined,
        )
        break

      case 'error':
        console.warn('Error from server:', message.getPayload())
        break

      case 'new-patch':
        if (!this.model) {
          console.warn(
            "Model is not initialized. Cannot handle 'new-patch' message.",
          )
          break
        }
        {
          const verbModel = this.verboseEncoder.encode(this.model)
          console.debug('New patch received, syncing data:', verbModel.time)
          const msg = new JsonRxRequestComplete(
            this.messageCounter.getNext(),
            'synchronize-clock',
            verbModel.time,
          )
          this.sendMessage(msg)
        }
        break

      case 'replica-connected':
        console.debug('A replica connected to the grid session')
        this.onReplicaConnected()
        break

      case 'replica-disconnected':
        console.debug('A replica disconnected from the grid session')
        this.onReplicaDisconnected()
        break

      default:
        console.warn('Unknown notification method:', methodName)
        break
    }
  }

  private sendMessage(message: JsonRxMessage) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message.getJson()))
    } else {
      console.error(
        'WebSocket is not open. Unable to send message. Current state:',
        this.socket.readyState,
      )
    }
  }

  public sendPatch() {
    this.throttledSendPatch()
  }

  /**
   * @returns true if one or more patches were sent
   */
  private sendPatchImmediate(): boolean {
    if (!this.model) {
      console.warn('Model is not initialized. Cannot send patch.')
      return false
    }

    const patch = this.model.api.flush()
    const hasOperationsToDispatch = patch.ops.length > 0

    if (hasOperationsToDispatch) {
      // Track local changes for cell decorators. The local replica's edits are
      // never echoed back by the server, so we must attribute them here.
      const newSnapshot = this.model.api.getSnapshot()
      const changes = this.diffRows(newSnapshot.rows, newSnapshot.columnNames)
      if (changes.length > 0) {
        this.onPatchApplied(this.replicaId, changes)
      }
      this.rowsBaseline = newSnapshot.rows

      // Split the patch if it exceeds the maximum size we can send in a single frame
      const patches = splitPatch(patch, this.maxPayloadSizeBytes)
      patches.forEach(compactEncodedPatch => {
        console.debug('Sending patch to server:', compactEncodedPatch)
        const msg = new JsonRxRequestComplete(
          this.messageCounter.getNext(),
          'patch',
          compactEncodedPatch,
        )
        this.sendMessage(msg)
      })
    }

    return hasOperationsToDispatch
  }

  private sendSyncMessage(clock?: number | JsonCrdtVerboseLogicalTimestamp[]) {
    const message = new JsonRxRequestComplete(
      this.messageCounter.getNext(),
      'synchronize-clock',
      clock ?? [],
    )
    this.sendMessage(message)
  }

  private async fetchAndDecodeSnapshot(
    snapshotUrl: string,
  ): Promise<GridModel> {
    const response = await fetchWithExponentialTimeout(snapshotUrl)
    const blob = await response.blob()
    const buffer = await blob.arrayBuffer()
    const decodedFromCbor = decodeCbor(new Uint8Array(buffer))
    const decodedModel = this.snapshotDecoder.decode(
      decodedFromCbor as IndexedFields,
    ) as unknown as GridModel
    return decodedModel
  }
}
