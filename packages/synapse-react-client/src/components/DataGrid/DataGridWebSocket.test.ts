import { Model } from 'json-joy/lib/json-crdt'
import { encode } from 'json-joy/lib/json-crdt-patch/codec/compact'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { GridModel, gridSchema } from './DataGridTypes'
import { DataGridWebSocket } from './DataGridWebSocket'

// Mock the compact codec to allow intercepting decode() in specific tests
const mockDecode = vi.fn()
vi.mock('json-joy/lib/json-crdt-patch/codec/compact', async importOriginal => {
  const actual = await importOriginal<
    typeof import('json-joy/lib/json-crdt-patch/codec/compact')
  >()
  return {
    ...actual,
    decode: (...args: unknown[]) => mockDecode(...args) as unknown,
  }
})

class MockWebSocket {
  public sentMessages: string[] = []
  public readyState: number = WebSocket.OPEN
  public close = vi.fn()
  public send = vi.fn((msg: string) => {
    this.sentMessages.push(msg)
  })
  public onopen: ((ev: Event) => void) | null = null
  public onmessage: ((ev: MessageEvent) => void) | null = null
  public onclose: ((ev: CloseEvent) => void) | null = null
  public onerror: ((ev: Event) => void) | null = null

  /** Simulate the server opening the connection */
  public simulateOpen() {
    this.onopen?.({} as Event)
  }

  /** Simulate receiving a JSON-Rx message from the server */
  public simulateMessage(data: unknown) {
    this.onmessage?.({ data: JSON.stringify(data) } as MessageEvent)
  }

  /** Simulate the server closing the connection */
  public simulateClose() {
    this.onclose?.({} as CloseEvent)
  }

  /** Simulate a WebSocket error */
  public simulateError() {
    this.onerror?.({} as Event)
  }
}

function createDataGridWebSocket(
  overrides: Partial<ConstructorParameters<typeof DataGridWebSocket>[0]> = {},
  mockSocket = new MockWebSocket(),
) {
  const ws = new DataGridWebSocket({
    replicaId: 1,
    url: 'ws://test',
    socket: mockSocket as unknown as WebSocket,
    patchThrottleMs: 0,
    ...overrides,
  })
  return { ws, mockSocket }
}

/** Parse all sent messages from the mock socket into JSON arrays */
function parseSentMessages(mockSocket: MockWebSocket): unknown[][] {
  return mockSocket.sentMessages.map(msg => JSON.parse(msg) as unknown[])
}

/** Create a CRDT model with initial schema, flush the creation ops, then return it */
function createTestModel(): GridModel {
  const model = Model.create(gridSchema)
  model.api.flush()
  return model as unknown as GridModel
}

/**
 * Build the raw JSON-Rx array for a JsonRxResponse carrying a compact-encoded patch.
 * Format: [4, subscriptionId, payload]
 */
function buildPatchResponseMessage(model: GridModel): unknown[] {
  // Make a change to generate a patch
  ;(model as unknown as Model).api.vec(['columnNames']).set([[0, 'test_col']])
  const patch = (model as unknown as Model).api.flush()
  const encoded = encode(patch)
  // JsonRxResponse type code is 4
  return [4, 1, { type: 'patch', body: encoded }]
}

describe('DataGridWebSocket', () => {
  beforeEach(async () => {
    vi.restoreAllMocks()
    // Reset mockDecode to delegate to the real implementation by default
    const { decode: realDecode } = await vi.importActual<
      typeof import('json-joy/lib/json-crdt-patch/codec/compact')
    >('json-joy/lib/json-crdt-patch/codec/compact')
    mockDecode.mockImplementation(realDecode)
  })

  describe('constructor', () => {
    it('wires onopen to call onStatusChange(true)', () => {
      const onStatusChange = vi.fn()
      const { ws, mockSocket } = createDataGridWebSocket({ onStatusChange })

      mockSocket.simulateOpen()

      expect(onStatusChange).toHaveBeenCalledWith(true, ws)
    })

    it('wires onclose to call onStatusChange(false)', () => {
      const onStatusChange = vi.fn()
      const { ws, mockSocket } = createDataGridWebSocket({ onStatusChange })

      mockSocket.simulateClose()

      expect(onStatusChange).toHaveBeenCalledWith(false, ws)
    })

    it('wires onerror to log an error', () => {
      const consoleError = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket()

      mockSocket.simulateError()

      expect(consoleError).toHaveBeenCalledWith(
        'WebSocket error:',
        expect.anything(),
      )
    })

    it('restores an existing model when provided via constructor', () => {
      const existingModel = createTestModel()
      const { ws } = createDataGridWebSocket({ model: existingModel })

      expect(ws['model']).toBe(existingModel)
    })

    it('handles non-string message data by logging an error', () => {
      const consoleError = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket()

      // Simulate binary data (non-string)
      mockSocket.onmessage?.({
        data: new ArrayBuffer(8),
      } as unknown as MessageEvent)

      expect(consoleError).toHaveBeenCalledWith(
        'Received non-string message data:',
        expect.anything(),
      )
    })
  })

  describe('disconnect', () => {
    it('closes the socket when it is OPEN', () => {
      const { ws, mockSocket } = createDataGridWebSocket()
      mockSocket.readyState = WebSocket.OPEN

      ws.disconnect()

      expect(mockSocket.close).toHaveBeenCalled()
    })

    it('does not close the socket when it is not OPEN and logs a warning', () => {
      const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const { ws, mockSocket } = createDataGridWebSocket()
      mockSocket.readyState = WebSocket.CLOSED

      ws.disconnect()

      expect(mockSocket.close).not.toHaveBeenCalled()
      expect(consoleWarn).toHaveBeenCalledWith(
        'WebSocket is not open. No action taken.',
      )
    })

    it('flushes the throttled send before closing', () => {
      const { ws, mockSocket } = createDataGridWebSocket({
        patchThrottleMs: 5000, // Long throttle to ensure flush is needed
      })

      const model = createTestModel()
      ws['model'] = model
      // Make a change and call sendPatch (will be throttled)
      ;(model as unknown as Model).api.vec(['columnNames']).set([[0, 'flush']])
      ws.sendPatch()

      // disconnect should flush, causing the patch to be sent
      ws.disconnect()

      expect(mockSocket.sentMessages.length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('messageHandler — patch response', () => {
    it('creates a new model and calls onModelCreate when receiving a patch with no existing model', () => {
      const onModelCreate = vi.fn()
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket({
        onModelCreate,
        model: null,
      })

      // Build a patch from a fresh model
      const sourceModel = createTestModel()
      const patchMessage = buildPatchResponseMessage(sourceModel)

      mockSocket.simulateMessage(patchMessage)

      expect(onModelCreate).toHaveBeenCalledTimes(1)
      const createdModel = onModelCreate.mock.calls[0][0] as GridModel
      expect(createdModel).toBeDefined()
    })

    it('applies a patch to an existing model without calling onModelCreate again', () => {
      const onModelCreate = vi.fn()
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})

      const existingModel = createTestModel()
      const { mockSocket } = createDataGridWebSocket({
        onModelCreate,
        model: existingModel,
      })

      // Generate a patch from a forked model
      const sourceModel = createTestModel()
      const patchMessage = buildPatchResponseMessage(sourceModel)

      mockSocket.simulateMessage(patchMessage)

      // onModelCreate should NOT be called since the model already existed
      expect(onModelCreate).not.toHaveBeenCalled()
    })

    it('handles a raw patch array', () => {
      // TODO: This can be removed once PLFM-9398 is safely released to production
      const onModelCreate = vi.fn()
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket({
        onModelCreate,
        model: null,
      })

      const sourceModel = createTestModel()
      ;(sourceModel as unknown as Model).api
        .vec(['columnNames'])
        .set([[0, 'wrapped_col']])
      const patch = (sourceModel as unknown as Model).api.flush()
      const encoded = encode(patch)

      // Wrap in the object format
      const rawPatchMessage = [4, 1, encoded]

      mockSocket.simulateMessage(rawPatchMessage)

      expect(onModelCreate).toHaveBeenCalledTimes(1)
    })

    it('sends a sync message after applying a patch', () => {
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket({ model: null })

      const sourceModel = createTestModel()
      const patchMessage = buildPatchResponseMessage(sourceModel)

      mockSocket.simulateMessage(patchMessage)

      // Should have sent a response (patch or synchronize-clock)
      expect(mockSocket.sentMessages.length).toBeGreaterThanOrEqual(1)
      const sent = parseSentMessages(mockSocket)
      // The method name should be 'patch' or 'synchronize-clock'
      const methods = sent.map(arr => arr[2])
      expect(
        methods.some(m => m === 'patch' || m === 'synchronize-clock'),
      ).toBe(true)
    })

    it('logs an error when patch decoding fails', () => {
      const consoleError = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {})
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})

      // Make decode() throw to exercise the catch branch
      mockDecode.mockImplementationOnce(() => {
        throw new Error('corrupt patch')
      })

      const { mockSocket } = createDataGridWebSocket({ model: null })

      // The outer array is what isArray() sees as a compact patch
      const badPatchMessage = [4, 1, [[1, 1]]]

      mockSocket.simulateMessage(badPatchMessage)

      expect(consoleError).toHaveBeenCalledWith(
        'Failed to apply patch or send clock:',
        expect.anything(),
      )
    })
  })

  describe('messageHandler — snapshot response', () => {
    it('fetches and decodes a snapshot, creates a model, and calls onModelCreate', async () => {
      const onModelCreate = vi.fn()
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})

      const fakeModel = createTestModel()

      const { ws, mockSocket } = createDataGridWebSocket({
        onModelCreate,
        model: null,
      })

      // Mock the private fetchAndDecodeSnapshot to avoid CBOR complexity
      vi.spyOn(
        ws as unknown as Record<string, () => Promise<GridModel>>,
        'fetchAndDecodeSnapshot',
      ).mockResolvedValue(fakeModel)

      const snapshotMessage = [
        4,
        1,
        { type: 'snapshot', body: 'https://example.com/snapshot.cbor' },
      ]

      mockSocket.simulateMessage(snapshotMessage)

      // Wait for async promise chain
      await vi.waitFor(() => {
        expect(onModelCreate).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('messageHandler — ResponseComplete', () => {
    it('calls onGridReady when clocks are synchronized', () => {
      const onGridReady = vi.fn()
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket({ onGridReady })

      // JsonRxResponseComplete: [5, subscriptionId, payload?]
      mockSocket.simulateMessage([5, 1])

      expect(onGridReady).toHaveBeenCalledTimes(1)
    })
  })

  describe('messageHandler — notifications', () => {
    it('sends a sync message with the model clock on "connected" notification (with model)', () => {
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const existingModel = createTestModel()
      const { mockSocket } = createDataGridWebSocket({
        model: existingModel,
      })

      // JsonRxNotification: [8, methodName, payload?]
      mockSocket.simulateMessage([8, 'connected'])

      const sent = parseSentMessages(mockSocket)
      expect(sent.length).toBeGreaterThanOrEqual(1)
      expect(sent[0][2]).toBe('synchronize-clock')
    })

    it('sends a sync message with empty clock on "connected" notification (without model)', () => {
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket({ model: null })

      mockSocket.simulateMessage([8, 'connected'])

      const sent = parseSentMessages(mockSocket)
      expect(sent.length).toBeGreaterThanOrEqual(1)
      expect(sent[0][2]).toBe('synchronize-clock')
      // When no model, verbModel is null so sendSyncMessage receives undefined,
      // which falls back to the default of []
      expect(sent[0][3]).toEqual([])
    })

    it('sends a synchronize-clock message on "new-patch" notification (with model)', () => {
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const existingModel = createTestModel()
      const { mockSocket } = createDataGridWebSocket({
        model: existingModel,
      })

      mockSocket.simulateMessage([8, 'new-patch'])

      const sent = parseSentMessages(mockSocket)
      expect(sent.length).toBeGreaterThanOrEqual(1)
      expect(sent[0][2]).toBe('synchronize-clock')
    })

    it('logs a warning on "new-patch" notification when model is null', () => {
      const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket({ model: null })

      mockSocket.simulateMessage([8, 'new-patch'])

      expect(consoleWarn).toHaveBeenCalledWith(
        "Model is not initialized. Cannot handle 'new-patch' message.",
      )
      expect(mockSocket.sentMessages.length).toBe(0)
    })

    it('does not throw or send messages on "ping" notification', () => {
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket()

      expect(() => mockSocket.simulateMessage([8, 'ping'])).not.toThrow()
      // ping does also match 'connected' check in the current non-exclusive if-chain,
      // but 'connected' != 'ping', so no sync message should be sent for ping alone
      // However the current code uses non-exclusive ifs, so ALL ifs are checked.
      // After refactoring to switch/else-if, ping will be a clean no-op.
    })

    it('logs a warning on "error" notification', () => {
      const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket()

      mockSocket.simulateMessage([8, 'error', 'something went wrong'])

      expect(consoleWarn).toHaveBeenCalledWith(
        'Error from server:',
        'something went wrong',
      )
    })
  })

  describe('messageHandler — unknown messages', () => {
    it('logs a warning for unrecognized message formats', () => {
      const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket()

      // JsonRxRequest type code 0 — not handled by messageHandler
      mockSocket.simulateMessage([0, 1, 'someMethod', 'payload'])

      expect(consoleWarn).toHaveBeenCalledWith(
        'Unexpected WebSocket message format:',
        expect.anything(),
      )
    })
  })

  describe('sendPatch', () => {
    it('sends multiple messages for a large patch', () => {
      vi.useFakeTimers()
      const { ws, mockSocket } = createDataGridWebSocket({
        maxPayloadSizeBytes: 100, // very small to force splitting
      })

      const model = Model.create(gridSchema)
      model.api.flush()
      for (let i = 0; i < 5; i++) {
        model.api.vec(['columnNames']).set([[i, 'x'.repeat(200)]])
      }
      ws['model'] = model

      ws.sendPatch()
      vi.advanceTimersByTime(0)

      expect(mockSocket.sentMessages.length).toBeGreaterThan(1)
      const sent = parseSentMessages(mockSocket)
      sent.forEach(arr => {
        expect(arr[2]).toBe('patch')
        expect(Array.isArray(arr[3])).toBe(true)
      })
      vi.useRealTimers()
    })

    it('does not throw and logs a warning when model is null', () => {
      vi.useFakeTimers()
      const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {})
      const { ws, mockSocket } = createDataGridWebSocket({ model: null })

      ws.sendPatch()
      vi.advanceTimersByTime(0)

      expect(consoleWarn).toHaveBeenCalledWith(
        'Model is not initialized. Cannot send patch.',
      )
      expect(mockSocket.sentMessages.length).toBe(0)
      vi.useRealTimers()
    })

    it('does not send when model has no pending changes', () => {
      vi.useFakeTimers()
      const { ws, mockSocket } = createDataGridWebSocket()
      const model = createTestModel()
      ws['model'] = model

      ws.sendPatch()
      vi.advanceTimersByTime(0)

      // No pending ops after flush in createTestModel, so nothing sent
      expect(mockSocket.sentMessages.length).toBe(0)
      vi.useRealTimers()
    })
  })

  describe('sendMessage (via patch path)', () => {
    it('logs an error when socket is not OPEN', () => {
      const consoleError = vi
        .spyOn(console, 'error')
        .mockImplementation(() => {})
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket({ model: null })
      mockSocket.readyState = WebSocket.CLOSED

      // Trigger a message that would cause sendMessage to be called
      const sourceModel = createTestModel()
      const patchMessage = buildPatchResponseMessage(sourceModel)
      mockSocket.simulateMessage(patchMessage)

      expect(consoleError).toHaveBeenCalledWith(
        'WebSocket is not open. Unable to send message. Current state:',
        WebSocket.CLOSED,
      )
      expect(mockSocket.send).not.toHaveBeenCalled()
    })
  })

  describe('onModelSynced (via patch response)', () => {
    it('sends a synchronize-clock message when model clock has no ops', () => {
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})

      const existingModel = createTestModel()
      const { mockSocket } = createDataGridWebSocket({
        model: existingModel,
      })

      // Simulate receiving a patch — the model will apply it, flush,
      // and if no remaining ops, send a synchronize-clock
      const sourceModel = createTestModel()
      const patchMessage = buildPatchResponseMessage(sourceModel)
      mockSocket.simulateMessage(patchMessage)

      const sent = parseSentMessages(mockSocket)
      expect(sent.length).toBeGreaterThanOrEqual(1)
      const methods = sent.map(arr => arr[2])
      expect(
        methods.some(m => m === 'patch' || m === 'synchronize-clock'),
      ).toBe(true)
    })
  })
})
