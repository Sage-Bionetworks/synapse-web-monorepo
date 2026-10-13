import { GridModel } from '@/components/DataGrid/DataGridTypes'
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

type DataGridWebSocketConstructorArgs = {
  replicaId: number
  url: string
  onGridReady?: () => void
  onStatusChange?: (isOpen: boolean, instance: DataGridWebSocket) => void
  onModelCreate?: (model: GridModel) => void
  onReplicaConnected?: () => void
  onReplicaDisconnected?: () => void
  onSyncStart?: () => void
  onSyncEnd?: () => void
  onError?: (error: unknown) => void
  maxPayloadSizeBytes?: number
  socket?: WebSocket
  model?: GridModel | null
  patchThrottleMs?: number
  /** Patches the previous connection never saw acknowledged, resent in order ahead of new ones */
  pendingPatches?: CompactCodecPatch[]
  patchAckTimeoutMs?: number
}

// API Gateway WebSocket payload size limit is 32 KB per message
// There is some overhead we aren't computing in our utility, namely the size of the patch header and the communication protocol itself
// So add some buffer
const DEFAULT_MAX_PAYLOAD_SIZE_BYTES = 30 * 1024 // 30 KB
const DEFAULT_PATCH_THROTTLE_MS = 250
// A patch is acknowledged only after the server has stored it, so a missing acknowledgement means the connection is unusable
const DEFAULT_PATCH_ACK_TIMEOUT_MS = 15 * 1000

export class DataGridWebSocket {
  private socket: WebSocket
  private model: GridModel | null = null
  private messageCounter: MessageCounter
  private replicaId: number
  private verboseEncoder = new VerboseEncoder()
  private maxPayloadSizeBytes: number
  private throttledSendPatch: DebouncedFunc<() => void>
  private snapshotDecoder = new SnapshotDecoder()
  // Oldest first. The server must receive patches in order, so only the head is ever on the wire
  // (identified by inFlightPatchRequestId); the rest wait for its acknowledgement.
  private unacknowledgedPatches: CompactCodecPatch[]
  private inFlightPatchRequestId: number | null = null
  private patchAckTimeoutMs: number
  private patchAckTimer: number | null = null

  private onModelCreate: (model: GridModel) => void
  private onGridReady: () => void
  private onStatusChange: (isOpen: boolean, _this: DataGridWebSocket) => void
  private onReplicaConnected: () => void
  private onReplicaDisconnected: () => void
  private onSyncStart: () => void
  private onSyncEnd: () => void
  private onError: (error: unknown) => void

  constructor(args: DataGridWebSocketConstructorArgs) {
    const {
      replicaId,
      url,
      onGridReady,
      onStatusChange,
      onModelCreate,
      onReplicaConnected,
      onReplicaDisconnected,
      onSyncStart,
      onSyncEnd,
      onError,
      maxPayloadSizeBytes,
      socket,
      model,
      patchThrottleMs,
      pendingPatches,
      patchAckTimeoutMs,
    } = args
    this.messageCounter = new MessageCounter()
    this.replicaId = replicaId
    this.maxPayloadSizeBytes =
      maxPayloadSizeBytes ?? DEFAULT_MAX_PAYLOAD_SIZE_BYTES
    this.socket = socket ?? new WebSocket(url)
    this.unacknowledgedPatches = [...(pendingPatches ?? [])]
    this.patchAckTimeoutMs = patchAckTimeoutMs ?? DEFAULT_PATCH_ACK_TIMEOUT_MS

    // Assign callbacks, falling back to no-ops
    this.onModelCreate = onModelCreate ?? noop
    this.onGridReady = onGridReady ?? noop
    this.onStatusChange = onStatusChange ?? noop
    this.onReplicaConnected = onReplicaConnected ?? noop
    this.onReplicaDisconnected = onReplicaDisconnected ?? noop
    this.onSyncStart = onSyncStart ?? noop
    this.onSyncEnd = onSyncEnd ?? noop
    this.onError = onError ?? noop

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
      this.stopWaitingForPatchAck()
      this.onStatusChange(false, this)
    }

    this.socket.onerror = (error: Event) => {
      console.error('WebSocket error:', error)
    }
  }

  public disconnect() {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.throttledSendPatch.flush()
      this.throttledSendPatch.cancel()
      this.stopWaitingForPatchAck()
      this.socket.close()
      console.debug('WebSocket connection closed')
    } else {
      // Edits that were never flushed stay in the model for the next connection to send
      this.throttledSendPatch.cancel()
      console.warn('WebSocket is not open. No action taken.')
    }
  }

  /**
   * @returns the patches the server has not acknowledged, oldest first. A replacement connection
   * created with these as `pendingPatches` resends them in order.
   */
  public getPendingPatches(): CompactCodecPatch[] {
    return [...this.unacknowledgedPatches]
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
      this.handleResponseComplete(message)
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
      } else {
        this.model.applyBatch(patches)
      }
      this.sendClockSync()
    } catch (err) {
      console.error('Failed to apply patches or send clock:', err)
    }
  }

  private async handleSnapshotPayload(snapshotUrl: string) {
    console.debug('Received snapshot URL from server:', snapshotUrl)
    try {
      const decodedModel = await this.fetchAndDecodeSnapshot(snapshotUrl)
      this.model = decodedModel.fork(this.replicaId) as unknown as GridModel
      this.onModelCreate(this.model)
      this.sendClockSync()
    } catch (err) {
      console.error('Failed to fetch or decode snapshot', err)
    }
  }

  private handleResponseComplete(message: JsonRxResponseComplete) {
    if (message.getSubscriptionId() === this.inFlightPatchRequestId) {
      this.unacknowledgedPatches.shift()
      this.stopWaitingForPatchAck()
      this.sendNextPatch()
      return
    }
    // Clocks are in sync, no further action needed
    this.onGridReady()
    this.onSyncEnd()
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
        // Resend patches an earlier connection never saw acknowledged
        this.sendNextPatch()
        break

      case 'error':
        console.warn('Error from server:', message.getPayload())
        this.onError(message.getPayload())
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
          this.sendSyncMessage(verbModel.time)
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
   * @returns true if the model had local changes, which are now queued to be sent
   */
  private sendPatchImmediate(): boolean {
    if (!this.model) {
      console.warn('Model is not initialized. Cannot send patch.')
      return false
    }

    const patch = this.model.api.flush()
    const hasOperationsToDispatch = patch.ops.length > 0

    if (hasOperationsToDispatch) {
      // Split the patch if it exceeds the maximum size we can send in a single frame
      this.unacknowledgedPatches.push(
        ...splitPatch(patch, this.maxPayloadSizeBytes),
      )
      this.sendNextPatch()
    }

    return hasOperationsToDispatch
  }

  private sendNextPatch() {
    const nextPatch = this.unacknowledgedPatches[0]
    if (
      nextPatch === undefined ||
      this.inFlightPatchRequestId !== null ||
      this.socket.readyState !== WebSocket.OPEN
    ) {
      return
    }
    console.debug('Sending patch to server:', nextPatch)
    const requestId = this.messageCounter.getNext()
    this.inFlightPatchRequestId = requestId
    this.patchAckTimer = window.setTimeout(
      () => this.handlePatchAckTimeout(),
      this.patchAckTimeoutMs,
    )
    this.sendMessage(new JsonRxRequestComplete(requestId, 'patch', nextPatch))
  }

  private stopWaitingForPatchAck() {
    if (this.patchAckTimer !== null) {
      window.clearTimeout(this.patchAckTimer)
      this.patchAckTimer = null
    }
    this.inFlightPatchRequestId = null
  }

  /**
   * Resending on the same connection could reorder patches, so the connection is dropped and
   * the owner reconnects with getPendingPatches(). The server ignores patches it already stored.
   */
  private handlePatchAckTimeout() {
    console.warn(
      'Timed out waiting for a patch acknowledgement. Dropping the connection so unacknowledged patches are resent.',
    )
    // Detach handlers so late events from the abandoned socket can't interleave with its replacement
    this.socket.onopen = null
    this.socket.onmessage = null
    this.socket.onclose = null
    this.socket.onerror = null
    this.throttledSendPatch.cancel()
    this.stopWaitingForPatchAck()
    this.socket.close()
    this.onStatusChange(false, this)
  }

  private sendSyncMessage(clock?: number | JsonCrdtVerboseLogicalTimestamp[]) {
    const message = new JsonRxRequestComplete(
      this.messageCounter.getNext(),
      'synchronize-clock',
      clock ?? [],
    )
    this.onSyncStart()
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
