import { describe, it, expect } from 'vitest'
import {
  getSearchParam,
  hexDecodeAndDeserialize,
  serializeAndHexEncode,
} from './URLUtils'

describe('getSearchParam', () => {
  function setLocation(search: string) {
    window.history.replaceState({}, '', `/resetPassword${search}`)
  }

  it('returns the value of the param', () => {
    setLocation('?passwordResetToken=abc')

    expect(getSearchParam('passwordResetToken')).toEqual('abc')
  })

  it('returns undefined when the param is absent', () => {
    setLocation('?someOtherParam=abc')

    expect(getSearchParam('passwordResetToken')).toBeUndefined()
  })

  it('returns undefined when the param has no value', () => {
    setLocation('?passwordResetToken')

    expect(getSearchParam('passwordResetToken')).toBeUndefined()
  })

  it('returns the last non-empty value when the param is repeated', () => {
    // A link built by appending a token to a URL that already contained one; only the final
    // token is current.
    setLocation(
      '?passwordResetToken&passwordResetToken=abc&passwordResetToken=def',
    )

    expect(getSearchParam('passwordResetToken')).toEqual('def')
  })
})

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
