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
})
