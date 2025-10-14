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

  it('sends multiple messages for a large patch', () => {
    const mockSocket = new MockWebSocket()
    const ws = new DataGridWebSocket({
      replicaId: 1,
      url: 'ws://test',
      socket: mockSocket as any,
      maxPayloadSizeBytes: 100, // very small to force splitting
      model: null,
    })
    // Create a large patch
    const model = Model.create(gridSchema)
    // Add several large values to force multiple ops
    for (let i = 0; i < 5; i++) {
      model.api.vec(['columnNames']).set([[i, 'x'.repeat(200)]])
    }
    ws['model'] = model
    ws.sendPatch()
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
