import { describe, it, expect } from 'vitest'
import getRequiredAttributes from './getRequiredAttributes'

describe('getRequiredAttributes', () => {
  it('returns empty array for undefined/null/non-object', () => {
    expect(getRequiredAttributes(undefined)).toEqual([])
    expect(getRequiredAttributes(null)).toEqual([])
    // @ts-expect-error intentional wrong type
    expect(getRequiredAttributes(5)).toEqual([])
  })

  it('returns required fields from simple schema', () => {
    const schema = {
      type: 'object',
      required: ['a', 'b'],
      properties: {
        a: { type: 'string' },
        b: { type: 'number' },
        c: { type: 'boolean' },
      },
    }
    expect(getRequiredAttributes(schema).sort()).toEqual(['a', 'b'])
  })

  it('deduplicates required fields', () => {
    const schema = {
      type: 'object',
      required: ['a', 'b', 'a'],
    }
    expect(getRequiredAttributes(schema).sort()).toEqual(['a', 'b'])
  })

  it('handles anyOf union of required', () => {
    const schema = {
      anyOf: [{ required: ['x'] }, { required: ['y', 'z'] }, { required: [] }],
    }
    expect(getRequiredAttributes(schema).sort()).toEqual([])
  })

  it('handles oneOf union of required', () => {
    const schema = {
      oneOf: [
        { required: ['m'] },
        { required: ['n'] },
        { required: ['m', 'o'] },
      ],
    }
    expect(getRequiredAttributes(schema).sort()).toEqual([])
  })

  it('ignores non-array required and non-string entries', () => {
    const schema = {
      required: ['a', 5, null, undefined],
      allOf: [{ required: ['b'] }, { required: [Symbol('c') as any, 'd'] }],
    }
    expect(getRequiredAttributes(schema).sort()).toEqual(['a', 'b', 'd'])
  })
})
