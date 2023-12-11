import { booleanSchema } from './BooleanSchema'

describe('BooleanSchema', () => {
  it('handles booleans', () => {
    expect(booleanSchema.parse(true)).toEqual(true)
    expect(booleanSchema.parse(false)).toEqual(false)
  })
  it('handles strings', () => {
    expect(booleanSchema.parse('true')).toEqual(true)
    expect(booleanSchema.parse('false')).toEqual(false)
  })
  it('rejects non-booleans', () => {
    expect(() => booleanSchema.parse('')).toThrow()
    expect(() => booleanSchema.parse('foo')).toThrow()
    expect(() => booleanSchema.parse('truee')).toThrow()
    expect(() => booleanSchema.parse(0)).toThrow()
    expect(() => booleanSchema.parse(null)).toThrow()
  })
})
