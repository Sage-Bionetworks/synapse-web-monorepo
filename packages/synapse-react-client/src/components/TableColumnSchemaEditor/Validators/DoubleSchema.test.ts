import { doubleSchema } from './DoubleSchema'

describe('DoubleValidator', () => {
  it('Handles number that are valid DOUBLE types for Synapse tables', () => {
    expect(doubleSchema.parse(0)).toBe(0)
    expect(doubleSchema.parse(-10)).toBe(-10)
    expect(doubleSchema.parse(10)).toBe(10)
    expect(doubleSchema.parse(5e3)).toBe(5e3)
    expect(doubleSchema.parse(5e-3)).toBe(5e-3)
  })

  it('Handles strings that can be parsed as numbers', () => {
    expect(doubleSchema.parse('0')).toBe(0)
    expect(doubleSchema.parse('-10')).toBe(-10)
    expect(doubleSchema.parse('10')).toBe(10)
    expect(doubleSchema.parse('5e3')).toBe(5e3)
    expect(doubleSchema.parse('5e-3')).toBe(5e-3)
  })

  it('Throws error if the string is not a number', () => {
    expect(() => doubleSchema.parse('foo')).toThrow()
  })

  it('Handles NaN/Infinity and returns a string', () => {
    expect(doubleSchema.parse(Infinity)).toBe('Infinity')
    expect(doubleSchema.parse(-Infinity)).toBe('-Infinity')
    expect(doubleSchema.parse(NaN)).toBe('NaN')

    expect(doubleSchema.parse('Infinity')).toBe('Infinity')
    expect(doubleSchema.parse('-Infinity')).toBe('-Infinity')
    expect(doubleSchema.parse('NaN')).toBe('NaN')
  })
})
