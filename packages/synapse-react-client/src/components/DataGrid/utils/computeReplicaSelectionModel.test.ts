import { GridModel } from '@/components/DataGrid/DataGridTypes'
import computeReplicaSelectionModel from '@/components/DataGrid/utils/computeReplicaSelectionModel'
import createTestModel from '@/components/DataGrid/utils/createTestModel'
import { SelectionWithId } from 'react-datasheet-grid/dist/types'

describe('computeReplicaSelectionModel', () => {
  const sid: number = 123
  let model: GridModel

  const nRow = 3
  const nCol = 3

  beforeEach(() => {
    model = createTestModel(nRow, nCol, sid)
  })

  it('handles a single cell selection', () => {
    const selection: SelectionWithId = {
      min: { col: 1, row: 1, colId: 'c1' },
      max: { col: 1, row: 1, colId: 'c1' },
    }

    // call under test
    const result = computeReplicaSelectionModel(selection, model)

    expect(result).not.toBeNull()
    expect(result.rowSelectAll).not.toBe(true)
    expect(result.columnSelectAll).not.toBe(true)
    expect(result.rowSelection).toHaveLength(1)
    expect(result.columnSelection).toHaveLength(1)
    expect(result.rowSelection).toEqual([{ rep: sid, seq: 38 }])
    expect(result.columnSelection).toEqual([{ rep: sid, seq: 16 }])
  })

  it('handles a single row, multiple columns selection', () => {
    const selection: SelectionWithId = {
      min: { col: 0, row: 1, colId: 'c1' },
      max: { col: 1, row: 1, colId: 'c2' },
    }

    // call under test
    const result = computeReplicaSelectionModel(selection, model)

    expect(result).not.toBeNull()
    expect(result.rowSelectAll).not.toBe(true)
    expect(result.columnSelectAll).not.toBe(true)
    expect(result.rowSelection).toHaveLength(1)
    expect(result.columnSelection).toHaveLength(2)
    expect(result.rowSelection).toEqual([{ rep: sid, seq: 38 }])
    expect(result.columnSelection).toEqual([
      {
        rep: sid,
        seq: 12,
      },
      {
        rep: sid,
        seq: 16,
      },
    ])
  })

  it('handles a single column, multiple rows selection', () => {
    const selection: SelectionWithId = {
      min: { col: 1, row: 1, colId: 'c1' },
      max: { col: 1, row: 2, colId: 'c1' },
    }

    // call under test
    const result = computeReplicaSelectionModel(selection, model)

    expect(result).not.toBeNull()
    expect(result.rowSelectAll).not.toBe(true)
    expect(result.columnSelectAll).not.toBe(true)
    expect(result.rowSelection).toHaveLength(2)
    expect(result.columnSelection).toHaveLength(1)
    expect(result.rowSelection).toEqual([
      {
        rep: sid,
        seq: 38,
      },
      {
        rep: sid,
        seq: 46,
      },
    ])
    expect(result.columnSelection).toEqual([{ rep: sid, seq: 16 }])
  })

  it('handles a multi row, multi column selection', () => {
    const selection: SelectionWithId = {
      min: { col: 0, row: 1, colId: 'c0' },
      max: { col: 1, row: 2, colId: 'c1' },
    }

    // call under test
    const result = computeReplicaSelectionModel(selection, model)

    expect(result).not.toBeNull()
    expect(result.rowSelectAll).not.toBe(true)
    expect(result.columnSelectAll).not.toBe(true)
    expect(result.rowSelection).toHaveLength(2)
    expect(result.columnSelection).toHaveLength(2)
    expect(result.rowSelection).toEqual([
      {
        rep: sid,
        seq: 38,
      },
      {
        rep: sid,
        seq: 46,
      },
    ])
    expect(result.columnSelection).toEqual([
      {
        rep: sid,
        seq: 12,
      },
      {
        rep: sid,
        seq: 16,
      },
    ])
  })

  it('handles a select all rows selection', () => {
    const selection: SelectionWithId = {
      min: { col: 1, row: 0, colId: 'c1' },
      max: { col: 1, row: 2, colId: 'c1' },
    }

    // call under test
    const result = computeReplicaSelectionModel(selection, model)

    expect(result).not.toBeNull()
    expect(result.rowSelectAll).toBe(true)
    expect(result.columnSelectAll).not.toBe(true)
    expect(result.rowSelection).toBeUndefined()
    expect(result.columnSelection).toHaveLength(1)
    expect(result.columnSelection).toEqual([{ rep: sid, seq: 16 }])
  })

  it('handles a select all columns selection', () => {
    const selection: SelectionWithId = {
      min: { col: 0, row: 0, colId: 'c0' },
      max: { col: 2, row: 0, colId: 'c2' },
    }

    // call under test
    const result = computeReplicaSelectionModel(selection, model)

    expect(result).not.toBeNull()
    expect(result.rowSelectAll).not.toBe(true)
    expect(result.columnSelectAll).toBe(true)
    expect(result.rowSelection).toHaveLength(1)
    expect(result.rowSelection).toEqual([{ rep: sid, seq: 30 }])
    expect(result.columnSelection).toBeUndefined()
  })

  it('handles a select all rows and columns selection', () => {
    const selection: SelectionWithId = {
      min: { col: 0, row: 0, colId: 'c0' },
      max: { col: 2, row: 2, colId: 'c2' },
    }

    // call under test
    const result = computeReplicaSelectionModel(selection, model)

    expect(result).not.toBeNull()
    expect(result.rowSelectAll).toBe(true)
    expect(result.columnSelectAll).toBe(true)
    expect(result.rowSelection).toBeUndefined()
    expect(result.columnSelection).toBeUndefined()
  })
})
