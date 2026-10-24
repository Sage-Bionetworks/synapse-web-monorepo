import { Model } from 'json-joy/lib/json-crdt'
import {
  CompactCodecPatch,
  decode,
  encode,
} from 'json-joy/lib/json-crdt-patch/codec/compact'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { GridModel, gridSchema } from './DataGridTypes'
import { DataGridWebSocket } from './DataGridWebSocket'

// Mock the compact codec to allow intercepting decode() in specific tests
const mockDecode = vi.fn()
vi.mock('json-joy/lib/json-crdt-patch/codec/compact', async importOriginal => {
  const actual =
    await importOriginal<
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

const replicaId = 4324438

function createDataGridWebSocket(
  overrides: Partial<ConstructorParameters<typeof DataGridWebSocket>[0]> = {},
  mockSocket = new MockWebSocket(),
) {
  const ws = new DataGridWebSocket({
    replicaId: replicaId,
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
  model.api.vec(['columnNames']).set([[0, 'test_col']])
  const patch = model.api.flush()
  const encoded = encode(patch)
  // JsonRxResponse type code is 4
  return [4, 1, { type: 'patch', body: encoded }]
}

/**
 * Build the raw JSON-Rx array for a JsonRxResponse carrying multiple compact-encoded patches.
 * Format: [4, subscriptionId, { type: 'patches', body: CompactCodecPatch[] }]
 */
function buildPatchesResponseMessage(model: GridModel): unknown[] {
  // First patch: set first column name
  model.api.vec(['columnNames']).set([[0, 'col_a']])
  const patch1 = model.api.flush()
  const encoded1 = encode(patch1)

  // Second patch: set second column name
  model.api.vec(['columnNames']).set([[1, 'col_b']])
  const patch2 = model.api.flush()
  const encoded2 = encode(patch2)

  // JsonRxResponse type code is 4
  return [4, 1, { type: 'patches', body: [encoded1, encoded2] }]
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

  describe('patch sending', () => {
    const PATCH_ACK_TIMEOUT_MS = 1000

    beforeEach(() => {
      vi.useFakeTimers()
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'warn').mockImplementation(() => {})
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    function addColumnEdit(model: GridModel, index: number, name: string) {
      ;(model as unknown as Model).api.vec(['columnNames']).set([[index, name]])
    }

    /** A maxPayloadSizeBytes of 1 makes splitPatch emit one patch per operation */
    function createWebSocketWithUnsentEdits(
      overrides: Parameters<typeof createDataGridWebSocket>[0] = {},
    ) {
      const model = createTestModel()
      addColumnEdit(model, 0, 'a')
      addColumnEdit(model, 1, 'b')
      addColumnEdit(model, 2, 'c')
      const { ws, mockSocket } = createDataGridWebSocket({
        model,
        maxPayloadSizeBytes: 1,
        patchAckTimeoutMs: PATCH_ACK_TIMEOUT_MS,
        ...overrides,
      })
      return { ws, mockSocket, model }
    }

    function sentRequests(mockSocket: MockWebSocket, method: string) {
      return parseSentMessages(mockSocket).filter(
        message => message[2] === method,
      )
    }

    function flushThrottledPatch(ws: DataGridWebSocket) {
      ws.sendPatch()
      vi.advanceTimersByTime(0)
    }

    /** The logical clock time at which each sent patch starts, in the order they were sent */
    function sentPatchStartTimes(mockSocket: MockWebSocket) {
      return sentRequests(mockSocket, 'patch').map(
        request => decode(request[3] as CompactCodecPatch).getId()!.time,
      )
    }

    /** Each patch must be the only one on the socket until the one before it is acknowledged */
    function expectPatchesSentOneAtATime(
      mockSocket: MockWebSocket,
      expectedPatches: CompactCodecPatch[],
    ) {
      expectedPatches.forEach((expectedPatch, index) => {
        const patchRequests = sentRequests(mockSocket, 'patch')
        expect(patchRequests).toHaveLength(index + 1)
        expect(patchRequests[index][3]).toEqual(expectedPatch)
        mockSocket.simulateMessage([5, patchRequests[index][1]])
      })
      expect(sentRequests(mockSocket, 'patch')).toHaveLength(
        expectedPatches.length,
      )
    }

    it('keeps one patch on the socket until its acknowledgement arrives, across every part of a split patch', () => {
      const { ws, mockSocket } = createWebSocketWithUnsentEdits()
      flushThrottledPatch(ws)
      const expectedPatches = ws.getPendingPatches()
      expect(expectedPatches.length).toBeGreaterThan(1)

      expectPatchesSentOneAtATime(mockSocket, expectedPatches)

      expect(ws.getPendingPatches()).toEqual([])
      const startTimes = sentPatchStartTimes(mockSocket)
      expect(startTimes).toEqual([...startTimes].toSorted((a, b) => a - b))
    })

    it('holds a later flush behind the unacknowledged patch', () => {
      const { ws, mockSocket, model } = createWebSocketWithUnsentEdits()
      flushThrottledPatch(ws)
      addColumnEdit(model, 3, 'd')
      flushThrottledPatch(ws)

      expect(sentRequests(mockSocket, 'patch')).toHaveLength(1)
      expectPatchesSentOneAtATime(mockSocket, ws.getPendingPatches())
      const startTimes = sentPatchStartTimes(mockSocket)
      expect(startTimes).toEqual([...startTimes].toSorted((a, b) => a - b))
    })

    it('does not release the next patch when a clock sync completes', () => {
      const onGridReady = vi.fn()
      const onSyncEnd = vi.fn()
      const { ws, mockSocket } = createWebSocketWithUnsentEdits({
        onGridReady,
        onSyncEnd,
      })
      flushThrottledPatch(ws)
      mockSocket.simulateMessage([8, 'new-patch'])
      const [syncRequest] = sentRequests(mockSocket, 'synchronize-clock')

      mockSocket.simulateMessage([5, syncRequest[1]])

      expect(sentRequests(mockSocket, 'patch')).toHaveLength(1)
      expect(onGridReady).toHaveBeenCalledTimes(1)
      expect(onSyncEnd).toHaveBeenCalledTimes(1)
    })

    it('does not treat a patch acknowledgement as a completed clock sync', () => {
      const onGridReady = vi.fn()
      const onSyncEnd = vi.fn()
      const { ws, mockSocket } = createWebSocketWithUnsentEdits({
        onGridReady,
        onSyncEnd,
      })
      flushThrottledPatch(ws)
      const [patchRequest] = sentRequests(mockSocket, 'patch')

      mockSocket.simulateMessage([5, patchRequest[1]])

      expect(onGridReady).not.toHaveBeenCalled()
      expect(onSyncEnd).not.toHaveBeenCalled()
    })

    it('confirms the clock once the patches sent during a sync are acknowledged', () => {
      const onGridReady = vi.fn()
      const { ws, mockSocket } = createWebSocketWithUnsentEdits({ onGridReady })
      mockSocket.simulateMessage([8, 'connected'])
      flushThrottledPatch(ws)
      expect(sentRequests(mockSocket, 'synchronize-clock')).toHaveLength(1)

      expectPatchesSentOneAtATime(mockSocket, ws.getPendingPatches())

      const syncRequests = sentRequests(mockSocket, 'synchronize-clock')
      expect(syncRequests).toHaveLength(2)
      mockSocket.simulateMessage([5, syncRequests[1][1]])
      expect(onGridReady).toHaveBeenCalledTimes(1)
    })

    it('does not confirm the clock again when the sync already completed', () => {
      const { ws, mockSocket } = createWebSocketWithUnsentEdits()
      mockSocket.simulateMessage([8, 'connected'])
      const [syncRequest] = sentRequests(mockSocket, 'synchronize-clock')
      mockSocket.simulateMessage([5, syncRequest[1]])
      flushThrottledPatch(ws)

      expectPatchesSentOneAtATime(mockSocket, ws.getPendingPatches())

      expect(sentRequests(mockSocket, 'synchronize-clock')).toHaveLength(1)
    })

    it('drops the connection instead of sending the next patch when an acknowledgement never arrives', () => {
      const onStatusChange = vi.fn()
      const { ws, mockSocket } = createWebSocketWithUnsentEdits({
        onStatusChange,
      })
      flushThrottledPatch(ws)
      const unacknowledgedPatches = ws.getPendingPatches()

      vi.advanceTimersByTime(PATCH_ACK_TIMEOUT_MS)

      expect(mockSocket.close).toHaveBeenCalledTimes(1)
      expect(onStatusChange).toHaveBeenCalledWith(false, ws)
      expect(sentRequests(mockSocket, 'patch')).toHaveLength(1)
      expect(ws.getPendingPatches()).toEqual(unacknowledgedPatches)
    })

    it('ignores late events from a connection dropped for a missing acknowledgement', () => {
      const onStatusChange = vi.fn()
      const { ws, mockSocket } = createWebSocketWithUnsentEdits({
        onStatusChange,
      })
      flushThrottledPatch(ws)
      const [patchRequest] = sentRequests(mockSocket, 'patch')
      vi.advanceTimersByTime(PATCH_ACK_TIMEOUT_MS)
      const pendingAfterTimeout = ws.getPendingPatches()

      mockSocket.simulateMessage([5, patchRequest[1]])
      mockSocket.simulateClose()

      expect(sentRequests(mockSocket, 'patch')).toHaveLength(1)
      expect(ws.getPendingPatches()).toEqual(pendingAfterTimeout)
      expect(onStatusChange).toHaveBeenCalledTimes(1)
    })

    it('keeps the connection when the acknowledgement arrives in time', () => {
      const { ws, mockSocket } = createWebSocketWithUnsentEdits({
        maxPayloadSizeBytes: undefined,
      })
      flushThrottledPatch(ws)
      const [patchRequest] = sentRequests(mockSocket, 'patch')

      mockSocket.simulateMessage([5, patchRequest[1]])
      vi.advanceTimersByTime(PATCH_ACK_TIMEOUT_MS * 2)

      expect(mockSocket.close).not.toHaveBeenCalled()
    })

    it('resends unacknowledged patches in order on a replacement connection once the server is ready', () => {
      const original = createWebSocketWithUnsentEdits()
      flushThrottledPatch(original.ws)
      vi.advanceTimersByTime(PATCH_ACK_TIMEOUT_MS)
      const unacknowledgedPatches = original.ws.getPendingPatches()
      expect(unacknowledgedPatches.length).toBeGreaterThan(1)

      const replacement = createDataGridWebSocket({
        pendingPatches: unacknowledgedPatches,
      })
      expect(replacement.mockSocket.sentMessages).toHaveLength(0)
      replacement.mockSocket.simulateMessage([8, 'connected'])

      expectPatchesSentOneAtATime(replacement.mockSocket, unacknowledgedPatches)
      expect(replacement.ws.getPendingPatches()).toEqual([])
      const startTimes = sentPatchStartTimes(replacement.mockSocket)
      expect(startTimes).toEqual([...startTimes].toSorted((a, b) => a - b))
    })

    it('sends patches inherited from a previous connection before new edits', () => {
      const original = createWebSocketWithUnsentEdits()
      flushThrottledPatch(original.ws)
      const inheritedPatches = original.ws.getPendingPatches()
      const newModel = createTestModel()
      addColumnEdit(newModel, 5, 'new')
      const replacement = createDataGridWebSocket({
        model: newModel,
        pendingPatches: inheritedPatches,
      })

      flushThrottledPatch(replacement.ws)

      const allPatches = replacement.ws.getPendingPatches()
      expect(allPatches.length).toBeGreaterThan(inheritedPatches.length)
      expect(allPatches.slice(0, inheritedPatches.length)).toEqual(
        inheritedPatches,
      )
      expectPatchesSentOneAtATime(replacement.mockSocket, allPatches)
    })

    it('keeps the in-flight patch pending when the connection closes before it is acknowledged', () => {
      const { ws, mockSocket } = createWebSocketWithUnsentEdits()
      flushThrottledPatch(ws)
      const unacknowledgedPatches = ws.getPendingPatches()

      mockSocket.simulateClose()
      vi.advanceTimersByTime(PATCH_ACK_TIMEOUT_MS)

      expect(ws.getPendingPatches()).toEqual(unacknowledgedPatches)
      expect(mockSocket.close).not.toHaveBeenCalled()
    })

    it('leaves edits waiting on the throttle in the model when the connection closes', () => {
      const { ws, mockSocket, model } = createWebSocketWithUnsentEdits({
        patchThrottleMs: 5000,
      })
      ws.sendPatch()

      mockSocket.simulateClose()
      vi.advanceTimersByTime(5000)

      expect(ws.getPendingPatches()).toEqual([])
      expect(
        (model as unknown as Model).api.flush().ops.length,
      ).toBeGreaterThan(0)
    })

    it('closes only after every queued patch is acknowledged when disconnecting', () => {
      const { ws, mockSocket } = createWebSocketWithUnsentEdits({
        patchThrottleMs: 5000,
      })
      ws.sendPatch()

      ws.disconnect()

      const queuedPatches = ws.getPendingPatches()
      expect(queuedPatches.length).toBeGreaterThan(1)
      queuedPatches.forEach((_patch, index) => {
        expect(mockSocket.close).not.toHaveBeenCalled()
        expect(sentRequests(mockSocket, 'patch')).toHaveLength(index + 1)
        mockSocket.simulateMessage([
          5,
          sentRequests(mockSocket, 'patch')[index][1],
        ])
      })
      expect(mockSocket.close).toHaveBeenCalledTimes(1)
    })

    it('stops notifying its owner once disconnect is requested', () => {
      const onGridReady = vi.fn()
      const onStatusChange = vi.fn()
      const { ws, mockSocket } = createWebSocketWithUnsentEdits({
        onGridReady,
        onStatusChange,
        patchThrottleMs: 5000,
      })
      ws.sendPatch()
      ws.disconnect()

      mockSocket.simulateMessage([5, 9999])
      mockSocket.simulateClose()

      expect(onGridReady).not.toHaveBeenCalled()
      expect(onStatusChange).not.toHaveBeenCalled()
    })

    it('leaves unflushed edits in the model when disconnecting a socket that is not open', () => {
      const { ws, mockSocket, model } = createWebSocketWithUnsentEdits({
        patchThrottleMs: 5000,
      })
      mockSocket.readyState = WebSocket.CLOSED
      ws.sendPatch()

      ws.disconnect()
      vi.advanceTimersByTime(5000)

      expect(ws.getPendingPatches()).toEqual([])
      expect(
        (model as unknown as Model).api.flush().ops.length,
      ).toBeGreaterThan(0)
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
      const badPatchMessage = [4, 1, { type: 'patches', body: [[1, 1]] }]

      mockSocket.simulateMessage(badPatchMessage)

      expect(consoleError).toHaveBeenCalledWith(
        'Failed to apply patches or send clock:',
        expect.anything(),
      )
    })
  })

  describe('messageHandler — patches response', () => {
    it('creates a new model and calls onModelCreate when receiving patches with no existing model', () => {
      const onModelCreate = vi.fn()
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket({
        onModelCreate,
        model: null,
      })

      const sourceModel = createTestModel()
      const patchesMessage = buildPatchesResponseMessage(sourceModel)

      mockSocket.simulateMessage(patchesMessage)

      expect(onModelCreate).toHaveBeenCalledTimes(1)
      const createdModel = onModelCreate.mock.calls[0][0] as GridModel
      expect(createdModel).toBeDefined()
    })

    it('applies all patches in a "patches" message to an existing model without calling onModelCreate', () => {
      const onModelCreate = vi.fn()
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})

      const existingModel = createTestModel()
      const { mockSocket } = createDataGridWebSocket({
        onModelCreate,
        model: existingModel,
      })

      const sourceModel = createTestModel()
      const patchesMessage = buildPatchesResponseMessage(sourceModel)

      mockSocket.simulateMessage(patchesMessage)

      // onModelCreate should NOT be called since the model already existed
      expect(onModelCreate).not.toHaveBeenCalled()
    })

    it('sends a sync message after applying all patches', () => {
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket({ model: null })

      const sourceModel = createTestModel()
      const patchesMessage = buildPatchesResponseMessage(sourceModel)

      mockSocket.simulateMessage(patchesMessage)

      expect(mockSocket.sentMessages.length).toBeGreaterThanOrEqual(1)
      const sent = parseSentMessages(mockSocket)
      const methods = sent.map(arr => arr[2])
      expect(
        methods.some(m => m === 'patch' || m === 'synchronize-clock'),
      ).toBe(true)
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
        const createdModel = onModelCreate.mock.calls[0][0] as GridModel
        expect(createdModel.clock.sid).toEqual(replicaId)
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

    it('calls onSyncEnd when clocks are synchronized', () => {
      const onSyncEnd = vi.fn()
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket({ onSyncEnd })

      mockSocket.simulateMessage([5, 1])

      expect(onSyncEnd).toHaveBeenCalledTimes(1)
    })
  })

  describe('sync lifecycle callbacks', () => {
    it('calls onSyncStart when sending synchronize-clock on "connected" notification', () => {
      const onSyncStart = vi.fn()
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket({
        onSyncStart,
        model: createTestModel(),
      })

      mockSocket.simulateMessage([8, 'connected'])

      expect(onSyncStart).toHaveBeenCalledTimes(1)
    })

    it('calls onSyncStart when sending synchronize-clock on "new-patch" notification', () => {
      const onSyncStart = vi.fn()
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket({
        onSyncStart,
        model: createTestModel(),
      })

      mockSocket.simulateMessage([8, 'new-patch'])

      expect(onSyncStart).toHaveBeenCalledTimes(1)
    })

    it('calls onSyncStart after applying a server patch and flushing pending ops', () => {
      const onSyncStart = vi.fn()
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket({
        onSyncStart,
        model: null,
      })

      const sourceModel = createTestModel()
      const patchMessage = buildPatchResponseMessage(sourceModel)
      mockSocket.simulateMessage(patchMessage)

      // After applying the server patch, the client has no pending ops, so
      // sendClockSync should fall through to sendSyncMessage and trigger onSyncStart
      expect(onSyncStart).toHaveBeenCalled()
    })

    it('does not call onSyncStart on "new-patch" when model is null', () => {
      const onSyncStart = vi.fn()
      vi.spyOn(console, 'warn').mockImplementation(() => {})
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket({
        onSyncStart,
        model: null,
      })

      mockSocket.simulateMessage([8, 'new-patch'])

      expect(onSyncStart).not.toHaveBeenCalled()
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

    it('calls onReplicaConnected on "replica-connected" notification', () => {
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      const onReplicaConnected = vi.fn()
      const { mockSocket } = createDataGridWebSocket({ onReplicaConnected })

      mockSocket.simulateMessage([8, 'replica-connected'])

      expect(onReplicaConnected).toHaveBeenCalledTimes(1)
    })

    it('calls onReplicaDisconnected on "replica-disconnected" notification', () => {
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      const onReplicaDisconnected = vi.fn()
      const { mockSocket } = createDataGridWebSocket({ onReplicaDisconnected })

      mockSocket.simulateMessage([8, 'replica-disconnected'])

      expect(onReplicaDisconnected).toHaveBeenCalledTimes(1)
    })

    it('accepts "ping" notification', () => {
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket()

      expect(() => mockSocket.simulateMessage([8, 'ping'])).not.toThrow()
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

    it('calls onError with the payload on "error" notification', () => {
      const onError = vi.fn()
      vi.spyOn(console, 'warn').mockImplementation(() => {})
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket({ onError })

      mockSocket.simulateMessage([8, 'error', 'something went wrong'])

      expect(onError).toHaveBeenCalledTimes(1)
      expect(onError).toHaveBeenCalledWith('something went wrong')
    })

    it('calls onError with an object payload on "error" notification', () => {
      const onError = vi.fn()
      vi.spyOn(console, 'warn').mockImplementation(() => {})
      vi.spyOn(console, 'debug').mockImplementation(() => {})
      vi.spyOn(console, 'log').mockImplementation(() => {})
      const { mockSocket } = createDataGridWebSocket({ onError })

      const errorPayload = { code: 500, message: 'Internal error' }
      mockSocket.simulateMessage([8, 'error', errorPayload])

      expect(onError).toHaveBeenCalledTimes(1)
      expect(onError).toHaveBeenCalledWith(errorPayload)
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
