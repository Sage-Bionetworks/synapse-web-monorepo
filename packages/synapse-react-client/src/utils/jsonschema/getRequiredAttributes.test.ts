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

  it('handles allOf union of required', () => {
    const schema = {
      allOf: [
        { required: ['a', 'b'] },
        { required: ['b', 'c'] },
        { properties: { d: { type: 'string' } } },
      ],
    }
    expect(getRequiredAttributes(schema).sort()).toEqual(['a', 'b', 'c'])
  })

  it('handles anyOf union of required', () => {
    const schema = {
      anyOf: [{ required: ['x'] }, { required: ['y', 'z'] }, { required: [] }],
    }
    expect(getRequiredAttributes(schema).sort()).toEqual(['x', 'y', 'z'])
  })

  it('handles oneOf union of required', () => {
    const schema = {
      oneOf: [
        { required: ['m'] },
        { required: ['n'] },
        { required: ['m', 'o'] },
      ],
    }
    expect(getRequiredAttributes(schema).sort()).toEqual(['m', 'n', 'o'])
  })

  it('traverses nested combinators', () => {
    const schema = {
      allOf: [
        {
          anyOf: [{ required: ['a'] }, { required: ['b'] }],
        },
        {
          oneOf: [
            { required: ['c'] },
            {
              allOf: [{ required: ['d'] }, { required: ['e', 'a'] }],
            },
          ],
        },
      ],
    }
    expect(getRequiredAttributes(schema).sort()).toEqual([
      'a',
      'b',
      'c',
      'd',
      'e',
    ])
  })

  it('ignores non-array required and non-string entries', () => {
    const schema = {
      required: ['a', 5, null, undefined],
      allOf: [{ required: ['b'] }, { required: [Symbol('c') as any, 'd'] }],
    }
    expect(getRequiredAttributes(schema).sort()).toEqual(['a', 'b', 'd'])
  })

  it('avoids infinite recursion on reused schema objects', () => {
    const shared = { required: ['x'] }
    const schema: any = {
      allOf: [shared, { anyOf: [shared, { oneOf: [shared] }] }],
    }
    expect(getRequiredAttributes(schema)).toEqual(['x'])
  })
})
