import { Model } from 'json-joy/lib/json-crdt'
import { gridSchema } from './DataGridTypes'
import { DataGridWebSocket } from './DataGridWebSocket'

describe('DataGridWebSocket', () => {
  class MockWebSocket {
    public sentMessages: string[] = []
    public readyState = 1 // OPEN
    public close = vi.fn()
    public send = (msg: string) => {
      this.sentMessages.push(msg)
    }
    public onopen = () => {}
    public onmessage = () => {}
    public onclose = () => {}
    public onerror = () => {}
  }

  it('sends multiple messages for a large patch', async () => {
    const mockSocket = new MockWebSocket()
    const ws = new DataGridWebSocket({
      replicaId: 1,
      url: 'ws://test',
      socket: mockSocket as any,
      maxPayloadSizeBytes: 100, // very small to force splitting
      model: null,
      patchThrottleMs: 0, // Disable throttling for immediate execution
    })
    // Create a large patch
    const model = Model.create(gridSchema)
    model.api.flush() // Clear initial operations
    // Add several large values to force multiple ops
    for (let i = 0; i < 5; i++) {
      model.api.vec(['columnNames']).set([[i, 'x'.repeat(200)]])
    }

    ws['model'] = model

    // Call sendPatch which will execute on next tick due to { leading: false }
    ws.sendPatch()

    // Wait for the throttled function to execute
    await new Promise(resolve => setTimeout(resolve, 10))

    // Should send more than one message
    expect(mockSocket.sentMessages.length).toBeGreaterThan(1)
    // Each message should be a JSON string with a patch payload
    mockSocket.sentMessages.forEach(msg => {
      const arr = JSON.parse(msg)
      expect(arr[2]).toBe('patch')
      expect(Array.isArray(arr[3])).toBe(true)
    })
  })
})
