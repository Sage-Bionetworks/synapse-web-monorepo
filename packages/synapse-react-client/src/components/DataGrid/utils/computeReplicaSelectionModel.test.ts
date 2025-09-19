import {
  CrdtId,
  GridModel,
  gridSchema,
} from '@/components/DataGrid/DataGridTypes'
import computeReplicaSelectionModel from '@/components/DataGrid/utils/computeReplicaSelectionModel'
import createTestModel from '@/components/DataGrid/utils/createTestModel'
import { Model } from 'json-joy/lib/json-crdt'
import { SelectionWithId } from 'react-datasheet-grid/dist/types'

describe('computeReplicaSelectionModel', () => {
  let model: GridModel = Model.create(gridSchema)
  let crdtIdRows: CrdtId[] = []
  let crdtIdColumnOrder: CrdtId[] = []

  const nRow = 3
  const nCol = 3

  beforeEach(() => {
    model = createTestModel(nRow, nCol)
    // Collect the CRDT IDs to simplify checking for the correct values
    crdtIdRows = []
    crdtIdColumnOrder = []

    for (let i = 0; i < nCol; i++) {
      const newColumnOrderNode = model.api.arr(['columnOrder']).get(i)
      crdtIdColumnOrder.push({
        rep: newColumnOrderNode.node.id.sid,
        seq: newColumnOrderNode.node.id.time,
      })
    }

    for (let i = 0; i < nRow; i++) {
      const newRowsNode = model.api.arr(['rows']).get(i)
      crdtIdRows.push({
        rep: newRowsNode.node.id.sid,
        seq: newRowsNode.node.id.time,
      })
    }
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
    expect(result.rowSelection).toEqual([crdtIdRows[1]])
    expect(result.columnSelection).toEqual([crdtIdColumnOrder[1]])
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
    expect(result.rowSelection).toEqual([crdtIdRows[1]])
    expect(result.columnSelection).toEqual([
      crdtIdColumnOrder[0],
      crdtIdColumnOrder[1],
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
    expect(result.rowSelection).toEqual([crdtIdRows[1], crdtIdRows[2]])
    expect(result.columnSelection).toEqual([crdtIdColumnOrder[1]])
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
    expect(result.rowSelection).toEqual([crdtIdRows[1], crdtIdRows[2]])
    expect(result.columnSelection).toEqual([
      crdtIdColumnOrder[0],
      crdtIdColumnOrder[1],
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
    expect(result.columnSelection).toEqual([crdtIdColumnOrder[1]])
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
    expect(result.rowSelection).toEqual([crdtIdRows[0]])
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
