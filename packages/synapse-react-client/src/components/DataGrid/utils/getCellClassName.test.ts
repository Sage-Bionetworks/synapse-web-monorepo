import { describe, it, expect } from 'vitest'
import { getCellClassName } from './getCellClassName'
import { DataGridRow } from '../DataGridTypes'
import { SelectionWithId } from '@sage-bionetworks/react-datasheet-grid'
import { Column } from '@sage-bionetworks/react-datasheet-grid'
import type { ReplicaUserInfo } from '../hooks/useGridReplicaUsers'
import { cellChangeKey } from '../hooks/useCellChangeTracker'

describe('getCellClassName', () => {
  const createMockRowData = (
    validationResults?: Map<string, string[]>,
  ): DataGridRow =>
    ({
      __cellValidationResults: validationResults,
    } as DataGridRow)

  const createMockColumns = (): Column[] => [
    { id: 'col1' } as Column,
    { id: 'col2' } as Column,
    { id: 'col3' } as Column,
  ]

  const createMockSelection = (
    minRow: number,
    maxRow: number,
    minCol: number,
    maxCol: number,
  ): SelectionWithId =>
    ({
      min: { row: minRow, col: minCol },
      max: { row: maxRow, col: maxCol },
    } as SelectionWithId)

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

  describe('lastSelection functionality', () => {
    it('adds cell-selected class when cell is within selection bounds', () => {
      const result = getCellClassName({
        rowData: createMockRowData(),
        rowIndex: 1,
        columnId: 'col2',
        selectedRowIndex: null,
        lastSelection: createMockSelection(0, 2, 1, 2),
        colValues: createMockColumns(),
      })

      expect(result).toBe('cell-selected')
    })

    it('does not add cell-selected class when cell is outside row selection bounds', () => {
      const result = getCellClassName({
        rowData: createMockRowData(),
        rowIndex: 3,
        columnId: 'col2',
        selectedRowIndex: null,
        lastSelection: createMockSelection(0, 2, 1, 2),
        colValues: createMockColumns(),
      })

      expect(result).toBeUndefined()
    })

    it('does not add cell-selected class when cell is outside column selection bounds', () => {
      const result = getCellClassName({
        rowData: createMockRowData(),
        rowIndex: 1,
        columnId: 'col1',
        selectedRowIndex: null,
        lastSelection: createMockSelection(0, 2, 1, 2),
        colValues: createMockColumns(),
      })

      expect(result).toBeUndefined()
    })

    it('does not add cell-selected class when lastSelection is null', () => {
      const result = getCellClassName({
        rowData: createMockRowData(),
        rowIndex: 1,
        columnId: 'col2',
        selectedRowIndex: null,
        lastSelection: null,
        colValues: createMockColumns(),
      })

      expect(result).toBeUndefined()
    })

    it('does not add cell-selected class when columnId is undefined', () => {
      const result = getCellClassName({
        rowData: createMockRowData(),
        rowIndex: 1,
        columnId: undefined,
        selectedRowIndex: null,
        lastSelection: createMockSelection(0, 2, 1, 2),
        colValues: createMockColumns(),
      })

      expect(result).toBeUndefined()
    })

    it('does not add cell-selected class when colValues is undefined', () => {
      const result = getCellClassName({
        rowData: createMockRowData(),
        rowIndex: 1,
        columnId: 'col2',
        selectedRowIndex: null,
        lastSelection: createMockSelection(0, 2, 1, 2),
        colValues: undefined,
      })

      expect(result).toBeUndefined()
    })

    it('handles single cell selection', () => {
      const result = getCellClassName({
        rowData: createMockRowData(),
        rowIndex: 1,
        columnId: 'col2',
        selectedRowIndex: null,
        lastSelection: createMockSelection(1, 1, 1, 1),
        colValues: createMockColumns(),
      })

      expect(result).toBe('cell-selected')
    })

    it('combines all three classes when applicable', () => {
      const validationResults = new Map([['col2', ['Error']]])
      const result = getCellClassName({
        rowData: createMockRowData(validationResults),
        rowIndex: 1,
        columnId: 'col2',
        selectedRowIndex: 1,
        lastSelection: createMockSelection(0, 2, 1, 2),
        colValues: createMockColumns(),
      })

      expect(result).toBe('cell-row-selected cell-selected cell-invalid')
    })

    it('handles column not found in colValues', () => {
      const result = getCellClassName({
        rowData: createMockRowData(),
        rowIndex: 1,
        columnId: 'nonexistent',
        selectedRowIndex: null,
        lastSelection: createMockSelection(0, 2, 1, 2),
        colValues: createMockColumns(),
      })

      expect(result).toBeUndefined()
    })

    it('handles edge case where cell is at selection boundary', () => {
      const result = getCellClassName({
        rowData: createMockRowData(),
        rowIndex: 2,
        columnId: 'col3',
        selectedRowIndex: null,
        lastSelection: createMockSelection(0, 2, 1, 2),
        colValues: createMockColumns(),
      })

      expect(result).toBe('cell-selected')
    })
  })

  describe('cell change indicator', () => {
    const makeReplicaUserInfo = (
      category: ReplicaUserInfo['category'],
      replicaId = 101,
    ): ReplicaUserInfo =>
      ({
        replicaInfo: { replicaId, replicaType: 'USER', createdBy: 'user-1' },
        category,
        profile: undefined,
      } as ReplicaUserInfo)

    it('appends the cell-changed--{category} class when the cell has a known change attributed to a known replica', () => {
      const authorSid = 101
      const cellChanges = new Map([[cellChangeKey(0, 'col1'), authorSid]])
      const replicaUserMap = new Map([
        [authorSid, makeReplicaUserInfo('self', authorSid)],
      ])

      const result = getCellClassName({
        rowData: createMockRowData(),
        rowIndex: 0,
        columnId: 'col1',
        selectedRowIndex: null,
        cellChanges,
        replicaUserMap,
      })

      expect(result).toBe('cell-changed--self')
    })

    it('uses the correct category string for other-user', () => {
      const authorSid = 202
      const cellChanges = new Map([[cellChangeKey(1, 'col2'), authorSid]])
      const replicaUserMap = new Map([
        [authorSid, makeReplicaUserInfo('other-user', authorSid)],
      ])

      const result = getCellClassName({
        rowData: createMockRowData(),
        rowIndex: 1,
        columnId: 'col2',
        selectedRowIndex: null,
        cellChanges,
        replicaUserMap,
      })

      expect(result).toBe('cell-changed--other-user')
    })

    it('adds no cell-changed class when the cell has a change entry but replicaUserMap has no entry for that sid', () => {
      const cellChanges = new Map([[cellChangeKey(0, 'col1'), 999]])
      const replicaUserMap = new Map<number, ReplicaUserInfo>() // sid 999 not present

      const result = getCellClassName({
        rowData: createMockRowData(),
        rowIndex: 0,
        columnId: 'col1',
        selectedRowIndex: null,
        cellChanges,
        replicaUserMap,
      })

      expect(result).toBeUndefined()
    })

    it('adds no cell-changed class when cellChanges is undefined', () => {
      const result = getCellClassName({
        rowData: createMockRowData(),
        rowIndex: 0,
        columnId: 'col1',
        selectedRowIndex: null,
        cellChanges: undefined,
      })

      expect(result).toBeUndefined()
    })

    it('adds no cell-changed class when columnId is undefined', () => {
      const authorSid = 101
      const cellChanges = new Map([[cellChangeKey(0, 'col1'), authorSid]])
      const replicaUserMap = new Map([
        [authorSid, makeReplicaUserInfo('self', authorSid)],
      ])

      const result = getCellClassName({
        rowData: createMockRowData(),
        rowIndex: 0,
        columnId: undefined,
        selectedRowIndex: null,
        cellChanges,
        replicaUserMap,
      })

      expect(result).toBeUndefined()
    })

    it('combines cell-row-selected, cell-invalid, and cell-changed--other-user when all three apply', () => {
      const authorSid = 303
      const cellChanges = new Map([[cellChangeKey(0, 'col1'), authorSid]])
      const replicaUserMap = new Map([
        [authorSid, makeReplicaUserInfo('other-user', authorSid)],
      ])
      const validationResults = new Map([['col1', ['Required field']]])

      const result = getCellClassName({
        rowData: createMockRowData(validationResults),
        rowIndex: 0,
        columnId: 'col1',
        selectedRowIndex: 0,
        cellChanges,
        replicaUserMap,
      })

      expect(result).toBe(
        'cell-row-selected cell-invalid cell-changed--other-user',
      )
    })
  })
})
