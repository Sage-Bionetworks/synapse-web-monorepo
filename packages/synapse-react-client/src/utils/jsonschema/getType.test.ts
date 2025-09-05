import { describe, it, expect } from 'vitest'
import { getType } from './getType'

describe('getType', () => {
  it('returns type if present', () => {
    expect(getType({ type: 'string' })).toBe('string')
    expect(getType({ type: ['string', 'number'] })).toEqual([
      'string',
      'number',
    ])
  })

  it('returns undefined if no type and no oneOf', () => {
    expect(getType({})).toBeUndefined()
  })

  it('returns type from oneOf with only one non-null option', () => {
    const schema = { oneOf: [{ type: 'number' }, { type: 'null' }] }
    expect(getType(schema)).toBe('number')
  })

  it('returns undefined if oneOf has multiple non-null options', () => {
    const schema = { oneOf: [{ type: 'string' }, { type: 'number' }] }
    expect(getType(schema)).toBeUndefined()
  })

  it('returns undefined if oneOf is empty', () => {
    expect(getType({ oneOf: [] })).toBeUndefined()
  })

  it('recursively resolves type from nested oneOf', () => {
    const schema = {
      oneOf: [
        { type: 'null' },
        { oneOf: [{ type: 'string' }, { type: 'null' }] },
      ],
    }
    expect(getType(schema)).toBe('string')
  })
})
