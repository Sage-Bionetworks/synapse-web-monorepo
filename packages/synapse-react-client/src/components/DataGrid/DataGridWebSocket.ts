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
  encode,
} from 'json-joy/lib/json-crdt-patch/codec/compact'
import { Encoder as VerboseEncoder } from 'json-joy/lib/json-crdt/codec/structural/verbose/Encoder'
import { JsonCrdtVerboseLogicalTimestamp } from 'json-joy/lib/json-crdt/codec/structural/verbose/types'
import noop from 'lodash-es/noop'
import throttle from 'lodash-es/throttle'
import type { DebouncedFunc } from 'lodash-es'

type DataGridWebSocketConstructorArgs = {
  replicaId: number
  url: string
  onGridReady?: () => void
  onStatusChange?: (isOpen: boolean, instance: DataGridWebSocket) => void
  onModelCreate?: (model: GridModel) => void
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
  private replicaId?: number
  private verboseEncoder = new VerboseEncoder()
  private maxPayloadSizeBytes: number
  private throttledSendPatch: DebouncedFunc<() => void>

  private onModelCreate: (model: GridModel) => void = noop
  private onGridReady: () => void = noop
  private onStatusChange: (isOpen: boolean, _this: DataGridWebSocket) => void =
    noop

  constructor(args: DataGridWebSocketConstructorArgs) {
    const {
      replicaId,
      url,
      onGridReady,
      onStatusChange,
      onModelCreate,
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

    if (onModelCreate) {
      this.onModelCreate = onModelCreate
    }

    if (onGridReady) {
      this.onGridReady = onGridReady
    }

    if (onStatusChange) {
      this.onStatusChange = onStatusChange
    }

    // Restore existing model if provided
    this.model = model || null

    this.throttledSendPatch = throttle(
      () => this.sendPatchImmediate(),
      patchThrottleMs ?? DEFAULT_PATCH_THROTTLE_MS,
      { leading: false, trailing: true },
    )
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

  private messageHandler = (message: JsonRxMessage) => {
    if (message instanceof JsonRxResponse) {
      const payload = message.getPayload() as CompactCodecPatch
      try {
        // Apply patch to model
        const patch = decode(payload)
        if (!this.model) {
          // Initialize the model if it doesn't exist
          console.debug('Initializing new model from patch:')
          console.debug(patch.toString())
          // use the replica ID the server gives us - don't use an empty one
          this.model = (
            Model.fromPatches([patch]) as unknown as GridModel
          ).fork(this.replicaId)
          this.onModelCreate(this.model)
        } else {
          console.debug('Applying patch from server:', patch)
          this.model?.applyPatch(patch)
        }
        // Calculate the new clock
        const modelClock = this.model?.api.flush()
        let encodedModelClock
        if (modelClock?.ops.length !== 0) {
          encodedModelClock = encode(modelClock)
        }
        if (encodedModelClock) {
          const msg = new JsonRxRequestComplete(
            this.messageCounter.getNext(),
            'patch',
            encodedModelClock,
          )
          console.debug('Responding with patch:', msg)
          this.sendMessage(msg)
        } else {
          const verbModel = this.verboseEncoder.encode(this.model)
          this.sendSyncMessage(verbModel.time)
        }
      } catch (err) {
        console.error('Failed to apply patch or send clock:', err)
      }
    } else if (message instanceof JsonRxResponseComplete) {
      // Clocks are in sync, no further action needed
      this.onGridReady()
      console.debug(
        'Clocks synchronized with server. Incrementing sequence number.',
      )
    }
    // [8, <message>]
    else if (message instanceof JsonRxNotification) {
      const methodName = message.getMethodName()
      console.debug('Message received from server:', methodName)

      if (methodName === 'ping') {
        console.debug('Received ping response from server')
      }

      if (methodName === 'connected') {
        console.debug('Server ready to receive patches')
        const verbModel = this.model
          ? this.verboseEncoder.encode(this.model)
          : null
        // Send the persisted clock time if model exists, otherwise send empty sync
        this.sendSyncMessage(verbModel?.time)
      }

      if (methodName === 'error') {
        // Handle error response
        console.warn('Error from server:', message.getPayload())
        //this.disconnect()
        return
      }
      if (methodName === 'new-patch') {
        if (!this.model) {
          console.warn(
            "Model is not initialized. Cannot handle 'new-patch' message.",
          )
          return
        }
        const verbModel = this.verboseEncoder.encode(this.model)
        console.debug('New patch received, syncing data:', verbModel.time)
        const msg = new JsonRxRequestComplete(
          this.messageCounter.getNext(),
          'synchronize-clock',
          verbModel.time,
        )
        this.sendMessage(msg)
      }
    } else {
      console.warn('Unexpected WebSocket message format:', message)
    }
  }

  private handleMessage(message: string) {
    this.messageHandler(JsonRx.fromJson(JSON.parse(message)))
  }

  private sendMessage(message: JsonRxMessage) {
    if (this.socket.readyState === WebSocket.OPEN) {
      console.debug('Sending message:', message)
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

  private sendPatchImmediate() {
    if (!this.model) {
      console.warn('Model is not initialized. Cannot send patch.')
      return
    }

    const patch = this.model.api.flush()

    if (patch) {
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
  }

  private sendSyncMessage(
    clock: number | JsonCrdtVerboseLogicalTimestamp[] = [],
  ) {
    const message = new JsonRxRequestComplete(
      this.messageCounter.getNext(),
      'synchronize-clock',
      clock,
    )
    this.sendMessage(message)
  }
}
