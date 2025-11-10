import { describe, it, expect } from 'vitest'
import { getType } from './getType'
import { JSONSchema7 } from 'json-schema'

describe('getType', () => {
  it('returns TypeInfo for simple types', () => {
    expect(getType({ type: 'string' })).toEqual({
      type: 'string',
    })
    expect(getType({ type: 'number' })).toEqual({
      type: 'number',
    })
    expect(getType({ type: 'boolean' })).toEqual({
      type: 'boolean',
    })
  })

  it('returns TypeInfo for array types', () => {
    expect(
      getType({
        type: 'array',
        items: { type: 'string' },
      }),
    ).toEqual({
      type: 'array',
      itemType: {
        type: 'string',
      },
    })
  })

  it('handles array with tuple items (takes first item)', () => {
    expect(
      getType({
        type: 'array',
        items: [{ type: 'string' }, { type: 'number' }],
      }),
    ).toEqual({
      type: 'array',
      itemType: {
        type: 'string',
      },
    })
  })

  it('returns undefined if no type and no oneOf', () => {
    expect(getType({})).toBeUndefined()
  })

  it('returns TypeInfo from oneOf with only one non-null option', () => {
    const schema: JSONSchema7 = {
      oneOf: [{ type: 'number' }, { type: 'null' }],
    }
    expect(getType(schema)).toEqual({
      type: 'number',
    })
  })

  it('returns undefined if oneOf has multiple non-null options', () => {
    const schema: JSONSchema7 = {
      oneOf: [{ type: 'string' }, { type: 'number' }],
    }
    expect(getType(schema)).toBeUndefined()
  })

  it('returns undefined if oneOf is empty', () => {
    expect(getType({ oneOf: [] })).toBeUndefined()
  })

  it('recursively resolves TypeInfo from nested oneOf', () => {
    const schema: JSONSchema7 = {
      oneOf: [
        { type: 'null' },
        { oneOf: [{ type: 'string' }, { type: 'null' }] },
      ],
    }
    expect(getType(schema)).toEqual({
      type: 'string',
    })
  })

  it('handles nested array types in oneOf', () => {
    const schema: JSONSchema7 = {
      oneOf: [{ type: 'null' }, { type: 'array', items: { type: 'number' } }],
    }
    expect(getType(schema)).toEqual({
      type: 'array',
      itemType: {
        type: 'number',
      },
    })
  })
})
