import { describe, it, expect } from 'vitest'
import { hexDecodeAndDeserialize, serializeAndHexEncode } from './URLUtils'

describe('hexDecodeAndDeserialize Compatibility', () => {
  it('should correctly decode a basic JSON object', () => {
    const data = { hello: 'world', count: 42 }
    const hex = serializeAndHexEncode(data)

    const result = hexDecodeAndDeserialize(hex)

    expect(result).toEqual(data)
  })

  it('should handle UTF-8 characters (emojis and symbols) correctly', () => {
    const data = { message: 'Fire 🔥 and Ice 🧊', math: 'π ≈ 3.14' }
    const hex = serializeAndHexEncode(data)

    const result = hexDecodeAndDeserialize(hex)

    expect(result).toEqual(data)
    expect(result.message).toContain('🔥')
  })

  it('should handle nested objects and arrays', () => {
    const data = {
      users: [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ],
      meta: { active: true },
    }
    const hex = serializeAndHexEncode(data)

    const result = hexDecodeAndDeserialize(hex)

    expect(result).toEqual(data)
    expect(result.users).toHaveLength(2)
  })

  it('should throw a SyntaxError on invalid JSON hex', () => {
    // Hex for "Not JSON"
    const hex = '4e6f74204a534f4e'

    expect(() => hexDecodeAndDeserialize(hex)).toThrow(SyntaxError)
  })

  it('should handle empty objects', () => {
    const hex = serializeAndHexEncode({})
    expect(hexDecodeAndDeserialize(hex)).toEqual({})
  })
})
