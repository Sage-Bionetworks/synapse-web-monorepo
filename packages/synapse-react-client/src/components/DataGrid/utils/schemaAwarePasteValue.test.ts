import { describe, expect, it, vi } from 'vitest'
import {
  coerceModelCellValue,
  wrapPasteValueWithSchemaCoercion,
} from './schemaAwarePasteValue'
import type { SchemaPropertyInfo } from '@/utils/jsonschema/getSchemaPropertyInfo'
import { createColumn } from './columnFactory'

const optional: SchemaPropertyInfo = {
  type: { type: 'string', isArray: false },
  isRequired: false,
  enumeratedValues: null,
}

const required: SchemaPropertyInfo = {
  type: { type: 'string', isArray: false },
  isRequired: true,
  enumeratedValues: null,
}

describe('coerceModelCellValue', () => {
  it('returns value unchanged when no schema info is provided', () => {
    expect(coerceModelCellValue('hello')).toBe('hello')
    expect(coerceModelCellValue(null)).toBeNull()
    expect(coerceModelCellValue(undefined)).toBeUndefined()
    expect(coerceModelCellValue('')).toBe('')
  })

  it('coerces whitespace-only strings (including stacked newlines from HTML paste) to the schema blank', () => {
    expect(coerceModelCellValue('\n\n\n', optional)).toBeUndefined()
    expect(coerceModelCellValue('   ', optional)).toBeUndefined()
    expect(coerceModelCellValue('\t', optional)).toBeUndefined()
    expect(coerceModelCellValue('\n\n\n', required)).toBeNull()
  })

  it('coerces empty values to undefined for optional columns', () => {
    expect(coerceModelCellValue(null, optional)).toBeUndefined()
    expect(coerceModelCellValue(undefined, optional)).toBeUndefined()
    expect(coerceModelCellValue('', optional)).toBeUndefined()
  })

  it('coerces empty values to null for required columns', () => {
    expect(coerceModelCellValue(null, required)).toBeNull()
    expect(coerceModelCellValue(undefined, required)).toBeNull()
    expect(coerceModelCellValue('', required)).toBeNull()
  })

  it('preserves non-empty values regardless of schema info', () => {
    expect(coerceModelCellValue('hello', optional)).toBe('hello')
    expect(coerceModelCellValue(0, optional)).toBe(0)
    expect(coerceModelCellValue(false, optional)).toBe(false)
    expect(coerceModelCellValue('hello', required)).toBe('hello')
  })

  it('does not coerce empty arrays (left to the column impl)', () => {
    const arr: unknown[] = []
    expect(coerceModelCellValue(arr, optional)).toBe(arr)
    expect(coerceModelCellValue(arr, required)).toBe(arr)
  })
})

describe('wrapPasteValueWithSchemaCoercion', () => {
  type Row = Record<string, unknown>

  it('returns the original pasteValue when schema info is omitted', () => {
    const original = vi.fn(({ rowData }: { rowData: Row }) => rowData)
    const wrapped = wrapPasteValueWithSchemaCoercion<Row, string>(
      original,
      'col',
    )
    expect(wrapped).toBe(original)
  })

  it('returns undefined when the original pasteValue is undefined', () => {
    expect(
      wrapPasteValueWithSchemaCoercion<Row, string>(undefined, 'col', optional),
    ).toBeUndefined()
  })

  it('coerces null pasted values to undefined for optional columns', () => {
    const original = vi.fn(
      ({ rowData, value }: { rowData: Row; value: unknown }) => ({
        ...rowData,
        col: value,
      }),
    )
    const wrapped = wrapPasteValueWithSchemaCoercion<Row, unknown>(
      original,
      'col',
      optional,
    )
    const result = wrapped!({
      rowData: { col: 'old' },
      value: null,
      rowIndex: 0,
    })
    expect(result).toEqual({ col: undefined })
  })

  it('coerces empty pasted values to null for required columns', () => {
    const original = vi.fn(
      ({ rowData, value }: { rowData: Row; value: unknown }) => ({
        ...rowData,
        col: value,
      }),
    )
    const wrapped = wrapPasteValueWithSchemaCoercion<Row, unknown>(
      original,
      'col',
      required,
    )
    const result = wrapped!({ rowData: { col: 'old' }, value: '', rowIndex: 0 })
    expect(result).toEqual({ col: null })
  })

  it('passes non-empty pasted values through unchanged', () => {
    const original = vi.fn(
      ({ rowData, value }: { rowData: Row; value: unknown }) => ({
        ...rowData,
        col: value,
      }),
    )
    const wrapped = wrapPasteValueWithSchemaCoercion<Row, unknown>(
      original,
      'col',
      optional,
    )
    const input = { rowData: { col: 'old' }, value: 'new', rowIndex: 0 }
    const result = wrapped!(input)
    expect(result).toEqual({ col: 'new' })
  })

  it('preserves other row keys when coercing the target column', () => {
    const original = vi.fn(
      ({ rowData, value }: { rowData: Row; value: unknown }) => ({
        ...rowData,
        col: value,
      }),
    )
    const wrapped = wrapPasteValueWithSchemaCoercion<Row, unknown>(
      original,
      'col',
      optional,
    )
    const result = wrapped!({
      rowData: { col: 'old', other: 'keep me' },
      value: '',
      rowIndex: 0,
    })
    expect(result).toEqual({ col: undefined, other: 'keep me' })
  })
})

describe('createColumn end-to-end paste behavior', () => {
  it('coerces empty paste to null for a required enumerated (autocomplete) column', () => {
    const column = createColumn({
      columnName: 'platform',
      typeInfo: { type: 'string', isArray: false },
      enumeratedValues: ['ios', 'android'],
      isRequired: true,
      schemaPropertyInfo: {
        type: { type: 'string', isArray: false },
        enumeratedValues: ['ios', 'android'],
        isRequired: true,
      },
    })
    const result = column.pasteValue!({
      rowData: { platform: 'ios' },
      value: '' as never,
      rowIndex: 0,
    })
    expect(result).toEqual({ platform: null })
  })

  it('coerces empty paste to undefined for an optional enumerated (autocomplete) column', () => {
    const column = createColumn({
      columnName: 'platform',
      typeInfo: { type: 'string', isArray: false },
      enumeratedValues: ['ios', 'android'],
      isRequired: false,
      schemaPropertyInfo: {
        type: { type: 'string', isArray: false },
        enumeratedValues: ['ios', 'android'],
        isRequired: false,
      },
    })
    const result = column.pasteValue!({
      rowData: { platform: 'ios' },
      value: '' as never,
      rowIndex: 0,
    })
    expect(result).toEqual({ platform: undefined })
  })

  it('preserves the original paste behavior when no schemaPropertyInfo is provided', () => {
    const column = createColumn({
      columnName: 'platform',
      typeInfo: { type: 'string', isArray: false },
      enumeratedValues: ['ios', 'android'],
      isRequired: true,
    })
    const result = column.pasteValue!({
      rowData: { platform: 'ios' },
      value: '' as never,
      rowIndex: 0,
    })
    expect(result).toEqual({ platform: '' })
  })

  it('coerces empty paste to null for a required number column', () => {
    // floatColumn.parsePastedValue('') returns null (NaN guard); the wrapper then
    // leaves null as-is for required columns.
    const column = createColumn({
      columnName: 'count',
      typeInfo: { type: 'number', isArray: false },
      enumeratedValues: null,
      isRequired: true,
      schemaPropertyInfo: {
        type: { type: 'number', isArray: false },
        enumeratedValues: null,
        isRequired: true,
      },
    })
    const result = column.pasteValue!({
      rowData: { count: 42 },
      value: '' as never,
      rowIndex: 0,
    })
    expect(result).toEqual({ count: null })
  })

  it('coerces empty paste to undefined for an optional number column', () => {
    // floatColumn.parsePastedValue('') returns null; the wrapper coerces null →
    // undefined for optional columns.
    const column = createColumn({
      columnName: 'count',
      typeInfo: { type: 'number', isArray: false },
      enumeratedValues: null,
      isRequired: false,
      schemaPropertyInfo: {
        type: { type: 'number', isArray: false },
        enumeratedValues: null,
        isRequired: false,
      },
    })
    const result = column.pasteValue!({
      rowData: { count: 42 },
      value: '' as never,
      rowIndex: 0,
    })
    expect(result).toEqual({ count: undefined })
  })

  it('coerces empty paste to null for a required boolean column', () => {
    const column = createColumn({
      columnName: 'active',
      typeInfo: { type: 'boolean', isArray: false },
      enumeratedValues: null,
      isRequired: true,
      schemaPropertyInfo: {
        type: { type: 'boolean', isArray: false },
        enumeratedValues: null,
        isRequired: true,
      },
    })
    const result = column.pasteValue!({
      rowData: { active: true },
      value: '' as never,
      rowIndex: 0,
    })
    expect(result).toEqual({ active: null })
  })

  it('coerces empty paste to undefined for an optional boolean column', () => {
    const column = createColumn({
      columnName: 'active',
      typeInfo: { type: 'boolean', isArray: false },
      enumeratedValues: null,
      isRequired: false,
      schemaPropertyInfo: {
        type: { type: 'boolean', isArray: false },
        enumeratedValues: null,
        isRequired: false,
      },
    })
    const result = column.pasteValue!({
      rowData: { active: true },
      value: '' as never,
      rowIndex: 0,
    })
    expect(result).toEqual({ active: undefined })
  })

  it('coerces empty paste to null for a required date-time column', () => {
    const column = createColumn({
      columnName: 'timestamp',
      typeInfo: { type: 'string', isArray: false, format: 'date-time' },
      enumeratedValues: null,
      isRequired: true,
      schemaPropertyInfo: {
        type: { type: 'string', isArray: false, format: 'date-time' },
        enumeratedValues: null,
        isRequired: true,
      },
    })
    const result = column.pasteValue!({
      rowData: { timestamp: '2024-01-01T00:00:00.000Z' },
      value: '' as never,
      rowIndex: 0,
    })
    expect(result).toEqual({ timestamp: null })
  })

  it('coerces empty paste to undefined for an optional date-time column', () => {
    const column = createColumn({
      columnName: 'timestamp',
      typeInfo: { type: 'string', isArray: false, format: 'date-time' },
      enumeratedValues: null,
      isRequired: false,
      schemaPropertyInfo: {
        type: { type: 'string', isArray: false, format: 'date-time' },
        enumeratedValues: null,
        isRequired: false,
      },
    })
    const result = column.pasteValue!({
      rowData: { timestamp: '2024-01-01T00:00:00.000Z' },
      value: '' as never,
      rowIndex: 0,
    })
    expect(result).toEqual({ timestamp: undefined })
  })

  it('mirrors a multi-column paste sequence (text + autocomplete) and coerces empties on both', () => {
    const textCol = createColumn({
      columnName: 'name',
      typeInfo: { type: 'string', isArray: false },
      enumeratedValues: [],
      isRequired: false,
      schemaPropertyInfo: {
        type: { type: 'string', isArray: false },
        enumeratedValues: null,
        isRequired: false,
      },
    })
    const enumCol = createColumn({
      columnName: 'platform',
      typeInfo: { type: 'string', isArray: false },
      enumeratedValues: ['ios', 'android'],
      isRequired: true,
      schemaPropertyInfo: {
        type: { type: 'string', isArray: false },
        enumeratedValues: ['ios', 'android'],
        isRequired: true,
      },
    })

    // react-datasheet-grid's paste handler applies columns sequentially per cell.
    // Start from the existing row, apply text col with empty paste, then enum col.
    let row: Record<string, unknown> = { name: 'Alice', platform: 'ios' }
    row = textCol.pasteValue!({
      rowData: row,
      value: '' as never,
      rowIndex: 0,
    }) as Record<string, unknown>
    row = enumCol.pasteValue!({
      rowData: row,
      value: '' as never,
      rowIndex: 0,
    }) as Record<string, unknown>

    expect(row).toEqual({ name: undefined, platform: null })
  })
})
