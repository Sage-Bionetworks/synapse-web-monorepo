import { describe, it, expect } from 'vitest'
import { getCellClassName } from './getCellClassName'
import { DataGridRow } from '../DataGridTypes'

describe('getCellClassName', () => {
  const createMockRowData = (
    validationResults?: Map<string, string[]>,
  ): DataGridRow =>
    ({
      __cellValidationResults: validationResults,
    } as DataGridRow)

  it('returns undefined when no classes should be applied', () => {
    const result = getCellClassName({
      rowData: createMockRowData(),
      rowIndex: 0,
      columnId: 'col1',
      selectedRowIndex: null,
    })

    expect(result).toBeUndefined()
  })

  it('returns undefined when row is not selected and no validation errors', () => {
    const result = getCellClassName({
      rowData: createMockRowData(),
      rowIndex: 1,
      columnId: 'col1',
      selectedRowIndex: 0,
    })

    expect(result).toBeUndefined()
  })

  it('adds cell-row-selected class when row is selected', () => {
    const result = getCellClassName({
      rowData: createMockRowData(),
      rowIndex: 0,
      columnId: 'col1',
      selectedRowIndex: 0,
    })

    expect(result).toBe('cell-row-selected')
  })

  it('adds cell-invalid class when cell has validation errors', () => {
    const validationResults = new Map([['col1', ['Error message 1']]])
    const result = getCellClassName({
      rowData: createMockRowData(validationResults),
      rowIndex: 0,
      columnId: 'col1',
      selectedRowIndex: null,
    })

    expect(result).toBe('cell-invalid')
  })

  it('adds both classes when row is selected and cell is invalid', () => {
    const validationResults = new Map([['col1', ['Error message']]])
    const result = getCellClassName({
      rowData: createMockRowData(validationResults),
      rowIndex: 0,
      columnId: 'col1',
      selectedRowIndex: 0,
    })

    expect(result).toBe('cell-row-selected cell-invalid')
  })

  it('does not add cell-invalid class when columnId is not in validation results', () => {
    const validationResults = new Map([['col2', ['Error message']]])
    const result = getCellClassName({
      rowData: createMockRowData(validationResults),
      rowIndex: 0,
      columnId: 'col1',
      selectedRowIndex: null,
    })

    expect(result).toBeUndefined()
  })

  it('does not add cell-invalid class when columnId is undefined', () => {
    const validationResults = new Map([['col1', ['Error message']]])
    const result = getCellClassName({
      rowData: createMockRowData(validationResults),
      rowIndex: 0,
      columnId: undefined,
      selectedRowIndex: null,
    })

    expect(result).toBeUndefined()
  })

  it('does not add cell-invalid class when validation results is undefined', () => {
    const result = getCellClassName({
      rowData: createMockRowData(undefined),
      rowIndex: 0,
      columnId: 'col1',
      selectedRowIndex: null,
    })

    expect(result).toBeUndefined()
  })

  it('handles selectedRowIndex of 0 correctly', () => {
    const result = getCellClassName({
      rowData: createMockRowData(),
      rowIndex: 0,
      columnId: 'col1',
      selectedRowIndex: 0,
    })

    expect(result).toBe('cell-row-selected')
  })

  it('handles negative row indices', () => {
    const result = getCellClassName({
      rowData: createMockRowData(),
      rowIndex: -1,
      columnId: 'col1',
      selectedRowIndex: -1,
    })

    expect(result).toBe('cell-row-selected')
  })

  it('adds cell-invalid class when column has empty error array', () => {
    const validationResults = new Map([['col1', []]])
    const result = getCellClassName({
      rowData: createMockRowData(validationResults),
      rowIndex: 0,
      columnId: 'col1',
      selectedRowIndex: null,
    })

    expect(result).toBe('cell-invalid')
  })

  it('adds cell-invalid class when column has multiple error messages', () => {
    const validationResults = new Map([
      ['col1', ['Error 1', 'Error 2', 'Error 3']],
    ])
    const result = getCellClassName({
      rowData: createMockRowData(validationResults),
      rowIndex: 0,
      columnId: 'col1',
      selectedRowIndex: null,
    })

    expect(result).toBe('cell-invalid')
  })
})
