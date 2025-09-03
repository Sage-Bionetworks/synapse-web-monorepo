import { describe, it, expect } from 'vitest'
import { getOnlyNonNullOneOfOption } from './getOnlyNonNullOneOfOption'

describe('getOnlyNonNullOneOfOption', () => {
  it('returns the only non-null schema if oneOf has one non-null and one null', () => {
    const schema = { oneOf: [{ type: 'string' }, { type: 'null' }] }
    expect(getOnlyNonNullOneOfOption(schema)).toEqual({ type: 'string' })
  })

  it('returns undefined if no oneOf', () => {
    expect(getOnlyNonNullOneOfOption({ type: 'string' })).toBeUndefined()
  })

  it('returns undefined if oneOf is not an array', () => {
    expect(getOnlyNonNullOneOfOption({ oneOf: null })).toBeUndefined()
  })

  it('returns undefined if oneOf has multiple non-null schemas', () => {
    const schema = {
      oneOf: [{ type: 'string' }, { type: 'number' }, { type: 'null' }],
    }
    expect(getOnlyNonNullOneOfOption(schema)).toBeUndefined()
  })

  it('returns the only non-null schema if oneOf has one non-null and one null (array type)', () => {
    const schema = { oneOf: [{ type: ['null'] }, { type: 'number' }] }
    expect(getOnlyNonNullOneOfOption(schema)).toEqual({ type: 'number' })
  })

  it('returns undefined if oneOf is empty', () => {
    expect(getOnlyNonNullOneOfOption({ oneOf: [] })).toBeUndefined()
  })
})
