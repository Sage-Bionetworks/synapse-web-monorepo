import { JSONSchema7 } from 'json-schema'
import { computeDefaultColumnOrder } from './computeDefaultColumnOrder'

describe('computeDefaultColumnOrder', () => {
  it('orders columns by their position in the JSON schema properties', () => {
    const columnNames = ['col1', 'col2', 'col3']
    const jsonSchema: JSONSchema7 = {
      properties: {
        col3: { type: 'string' },
        col1: { type: 'string' },
        col2: { type: 'string' },
      },
    }

    expect(computeDefaultColumnOrder(columnNames, jsonSchema)).toEqual([
      2, 0, 1,
    ])
  })

  it('appends columns absent from the schema, in identity-index order', () => {
    const columnNames = ['col1', 'col2', 'col3']
    const jsonSchema: JSONSchema7 = {
      properties: {
        col2: { type: 'string' },
      },
    }

    expect(computeDefaultColumnOrder(columnNames, jsonSchema)).toEqual([
      1, 0, 2,
    ])
  })

  it('falls back to identity order when jsonSchema is undefined', () => {
    const columnNames = ['col1', 'col2', 'col3']

    expect(computeDefaultColumnOrder(columnNames, undefined)).toEqual([0, 1, 2])
  })

  it('falls back to identity order when jsonSchema has no properties', () => {
    const columnNames = ['col1', 'col2']
    const jsonSchema: JSONSchema7 = {}

    expect(computeDefaultColumnOrder(columnNames, jsonSchema)).toEqual([0, 1])
  })

  it('ignores schema properties that do not correspond to a grid column', () => {
    const columnNames = ['col1', 'col2']
    const jsonSchema: JSONSchema7 = {
      properties: {
        unknownColumn: { type: 'string' },
        col2: { type: 'string' },
        col1: { type: 'string' },
      },
    }

    expect(computeDefaultColumnOrder(columnNames, jsonSchema)).toEqual([1, 0])
  })

  it('moves upsert key columns to the beginning, ahead of schema order', () => {
    const columnNames = ['col1', 'col2', 'col3']
    const jsonSchema: JSONSchema7 = {
      properties: {
        col1: { type: 'string' },
        col2: { type: 'string' },
        col3: { type: 'string' },
      },
    }

    expect(
      computeDefaultColumnOrder(columnNames, jsonSchema, ['col3']),
    ).toEqual([2, 0, 1])
  })

  it('preserves the given order of multiple upsert key columns', () => {
    const columnNames = ['col1', 'col2', 'col3']
    const jsonSchema: JSONSchema7 = {
      properties: {
        col1: { type: 'string' },
        col2: { type: 'string' },
        col3: { type: 'string' },
      },
    }

    expect(
      computeDefaultColumnOrder(columnNames, jsonSchema, ['col2', 'col1']),
    ).toEqual([1, 0, 2])
  })

  it('places upsert key columns first even when jsonSchema is undefined', () => {
    const columnNames = ['col1', 'col2', 'col3']

    expect(computeDefaultColumnOrder(columnNames, undefined, ['col2'])).toEqual(
      [1, 0, 2],
    )
  })

  it('ignores upsert key names that do not correspond to a grid column', () => {
    const columnNames = ['col1', 'col2']
    const jsonSchema: JSONSchema7 = {
      properties: {
        col1: { type: 'string' },
        col2: { type: 'string' },
      },
    }

    expect(
      computeDefaultColumnOrder(columnNames, jsonSchema, ['unknownColumn']),
    ).toEqual([0, 1])
  })
})
