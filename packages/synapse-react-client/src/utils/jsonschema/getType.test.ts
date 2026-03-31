import { describe, it, expect } from 'vitest'
import { getFlatTypeInfo } from './getType'
import { JSONSchema7 } from 'json-schema'

describe('getType', () => {
  it('returns TypeInfo for simple types', () => {
    expect(getFlatTypeInfo({ type: 'string' })).toEqual({
      type: 'string',
      isArray: false,
    })
    expect(getFlatTypeInfo({ type: 'number' })).toEqual({
      type: 'number',
      isArray: false,
    })
    expect(getFlatTypeInfo({ type: 'boolean' })).toEqual({
      type: 'boolean',
      isArray: false,
    })
    // includes format
    expect(getFlatTypeInfo({ type: 'string', format: 'date-time' })).toEqual({
      type: 'string',
      format: 'date-time',
      isArray: false,
    })
  })

  it('returns TypeInfo for array types', () => {
    expect(
      getFlatTypeInfo({
        type: 'array',
        items: { type: 'string', format: 'date-time' },
      }),
    ).toEqual({
      type: 'string',
      format: 'date-time',
      isArray: true,
    })
  })

  it('handles array with tuple items (takes first item)', () => {
    expect(
      getFlatTypeInfo({
        type: 'array',
        items: [{ type: 'string' }, { type: 'number' }],
      }),
    ).toEqual({
      type: 'string',
      isArray: true,
    })
  })

  it('returns default type if no type and no oneOf', () => {
    expect(getFlatTypeInfo({})).toEqual({
      type: 'string',
      isArray: false,
    })
  })

  it('returns TypeInfo from oneOf with only one non-null option', () => {
    const schema: JSONSchema7 = {
      oneOf: [{ type: 'number' }, { type: 'null' }],
    }
    expect(getFlatTypeInfo(schema)).toEqual({
      type: 'number',
      isArray: false,
    })
  })

  it('returns default if oneOf has multiple non-null options', () => {
    const schema: JSONSchema7 = {
      oneOf: [{ type: 'string' }, { type: 'number' }],
    }
    expect(getFlatTypeInfo(schema)).toEqual({
      type: 'string',
      isArray: false,
    })
  })

  it('returns default if oneOf is empty', () => {
    expect(getFlatTypeInfo({ oneOf: [] })).toEqual({
      type: 'string',
      isArray: false,
    })
  })

  it('recursively resolves TypeInfo from nested oneOf', () => {
    const schema: JSONSchema7 = {
      oneOf: [
        { type: 'null' },
        { oneOf: [{ type: 'string' }, { type: 'null' }] },
      ],
    }
    expect(getFlatTypeInfo(schema)).toEqual({
      type: 'string',
      isArray: false,
    })
  })

  it('handles nested array types in oneOf', () => {
    const schema: JSONSchema7 = {
      oneOf: [{ type: 'null' }, { type: 'array', items: { type: 'number' } }],
    }
    expect(getFlatTypeInfo(schema)).toEqual({
      type: 'number',
      isArray: true,
    })
  })

  it('captures readOnly', () => {
    const schema: JSONSchema7 = {
      type: 'string',
      readOnly: true,
    }
    expect(getFlatTypeInfo(schema)).toEqual({
      type: 'string',
      isArray: false,
      readOnly: true,
    })
  })

  it('captures readOnly without specified type', () => {
    const schema: JSONSchema7 = {
      readOnly: true,
    }
    expect(getFlatTypeInfo(schema)).toEqual({
      type: 'string',
      isArray: false,
      readOnly: true,
    })
  })
})
