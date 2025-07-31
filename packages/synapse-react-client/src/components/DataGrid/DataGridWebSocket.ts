import { GridModel } from '@/components/DataGrid/DataGridTypes'
import { Model } from 'json-joy/lib/json-crdt'
import { decode, encode } from 'json-joy/lib/json-crdt-patch/codec/compact'
import { Encoder as VerboseEncoder } from 'json-joy/lib/json-crdt/codec/structural/verbose/Encoder'
import { JsonCrdtVerboseLogicalTimestamp } from 'json-joy/lib/json-crdt/codec/structural/verbose/types'
import noop from 'lodash-es/noop'

type DataGridWebSocketConstructorArgs = {
  replicaId: number
  url: string
  onGridReady?: () => void
  onStatusChange?: (isOpen: boolean, instance: DataGridWebSocket) => void
  onModelChange?: (model: GridModel) => void
}

export class DataGridWebSocket {
  private socket: WebSocket

  private model: GridModel | null = null
  private sequenceNumber: number = 0
  private replicaId?: number
  private verboseEncoder = new VerboseEncoder()

  private onModelChange: (model: GridModel) => void = noop
  private onGridReady: () => void = noop
  private onStatusChange: (isOpen: boolean, _this: DataGridWebSocket) => void =
    noop

  constructor(args: DataGridWebSocketConstructorArgs) {
    const { replicaId, url, onGridReady, onStatusChange, onModelChange } = args
    this.replicaId = replicaId
    this.socket = new WebSocket(url)

    this.socket.onopen = () => {
      console.log('Connected to the WebSocket server')
      this.onStatusChange(true, this)
    }

    this.socket.onmessage = (event: MessageEvent) => {
      this.handleMessage(event.data)
    }

    this.socket.onclose = () => {
      console.log('Disconnected from the WebSocket server')
      this.onStatusChange(false, this)
    }

    this.socket.onerror = (error: Event) => {
      console.error('WebSocket error:', error)
    }

    if (onModelChange) {
      this.onModelChange = onModelChange
    }

    if (onGridReady) {
      this.onGridReady = onGridReady
    }

    if (onStatusChange) {
      this.onStatusChange = onStatusChange
    }
  }

  public disconnect() {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.close()
      console.log('WebSocket connection closed')
    } else {
      console.warn('WebSocket is not open. No action taken.')
    }
  }

  private messageHandler = (latestMsg: string) => {
    latestMsg = JSON.parse(latestMsg)
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
        if (!this.model) {
          // Initialize the model if it doesn't exist
          console.log('Initializing new model from patch:')
          console.log(patch.toString())
          // use the replica ID the server gives us - don't use an empty one
          this.model = (
            Model.fromPatches([patch]) as unknown as GridModel
          ).fork(this.replicaId)
          this.onModelChange(this.model)
        } else {
          console.log('Applying patch from server:', patch)
          this.model?.applyPatch(patch)
          this.onModelChange(this.model)
        }
        // Calculate the new clock
        const modelClock = this.model?.api.flush()
        let encodedModelClock
        if (modelClock?.ops.length !== 0) {
          encodedModelClock = encode(modelClock)
        }
        if (encodedModelClock) {
          const msg = [1, this.sequenceNumber, 'patch', encodedModelClock]
          console.log('Responding with patch:', msg)
          this.sendMessage(msg)
        } else {
          const verbModel = this.verboseEncoder.encode(this.model)
          this.sendSyncMessage(verbModel.time)
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
      this.sequenceNumber += 1
      this.onGridReady()
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
        this.sendSyncMessage()
      }
      if (latestMsg[1] === 'error') {
        // Handle error response
        console.warn('Error from server:', latestMsg[2])
        //this.disconnect()
        return
      }
      if (latestMsg[1] === 'new-patch') {
        if (!this.model) {
          console.warn(
            "Model is not initialized. Cannot handle 'new-patch' message.",
          )
          return
        }
        const verbModel = this.verboseEncoder.encode(this.model)
        console.log('New patch received, syncing data:', verbModel.time)
        const msg = [
          1,
          this.sequenceNumber,
          'synchronize-clock',
          verbModel.time,
        ]
        this.sendMessage(msg)
      }
    } else {
      console.warn('Unexpected WebSocket message format:', latestMsg)
    }
  }

  private handleMessage(message: string) {
    this.messageHandler(message)
  }

  private sendMessage(message: any) {
    if (this.socket.readyState === WebSocket.OPEN) {
      console.log('Sending message:', message)
      this.socket.send(JSON.stringify(message))
    } else {
      console.error(
        'WebSocket is not open. Unable to send message. Current state:',
        this.socket.readyState,
      )
    }
  }

  public sendPatch() {
    if (!this.model) {
      console.warn('Model is not initialized. Cannot send patch.')
      return
    }
    // Calling `onModelChange` because we mutated immediately before - let's reorganize this later
    this.onModelChange(this.model)
    const patch = this.model.api.flush()

    if (patch) {
      console.log('Sending patch to server:', patch)
      const binaryData = encode(patch)
      const msg = [1, this.sequenceNumber, 'patch', binaryData]
      this.sendMessage(msg)
    }
  }

  private sendSyncMessage(
    clock: number | JsonCrdtVerboseLogicalTimestamp[] = [],
  ) {
    const message = [1, this.sequenceNumber, 'synchronize-clock', clock]
    this.sendMessage(message)
  }
}
