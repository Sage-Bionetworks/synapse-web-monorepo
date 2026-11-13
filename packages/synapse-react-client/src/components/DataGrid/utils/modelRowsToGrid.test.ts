import { describe, expect, it, vi } from 'vitest'
import { s } from 'json-joy/lib/json-crdt-patch'
import { applyModelChange } from './applyModelChange'
import createTestModel from './createTestModel'
import { GRID_ROW_REACT_KEY_PROPERTY } from './DataGridUtils'
import { getRowNodes } from './gridRowNodes'
import logicalTimestampToString from './logicalTimestampToString'
import modelRowsToGrid, { createGridRowCache } from './modelRowsToGrid'
import type { GridModel } from '../DataGridTypes'

const SID = 42

function setRowValidation(
  model: GridModel,
  rowIndex: number,
  rowValidation: { isValid: boolean; allValidationMessages: string[] },
) {
  model.api.obj(['rows', String(rowIndex)]).set({
    metadata: s.obj({ rowValidation: s.con(rowValidation) }),
  })
}

describe('modelRowsToGrid', () => {
  it('returns no rows without a model', () => {
    const model = createTestModel(1, 2, SID)
    expect(modelRowsToGrid(null, model.api.getSnapshot())).toEqual([])
  })

  it('maps each cell to its column name, in column order', () => {
    const model = createTestModel(2, 3, SID)
    model.api.vec(['columnNames']).set([[0, s.con('first')]])
    const snapshot = model.api.getSnapshot()

    const rows = modelRowsToGrid(model, snapshot)

    snapshot.rows.forEach((snapshotRow, rowIndex) => {
      snapshot.columnOrder.forEach((columnIndex: number) => {
        const columnName = snapshot.columnNames[columnIndex]
        expect(rows[rowIndex][columnName]).toBe(snapshotRow.data[columnIndex])
      })
    })
  })

  it("keys each row by its CRDT node's id", () => {
    const model = createTestModel(3, 1, SID)

    const rows = modelRowsToGrid(model, model.api.getSnapshot())

    expect(rows.map(row => row[GRID_ROW_REACT_KEY_PROPERTY])).toEqual(
      getRowNodes(model).map(rowNode => logicalTimestampToString(rowNode.id)),
    )
  })

  it('reports validation as valid, invalid, or pending', () => {
    const model = createTestModel(3, 1, SID)
    setRowValidation(model, 0, { isValid: true, allValidationMessages: [] })
    setRowValidation(model, 1, {
      isValid: false,
      allValidationMessages: ['#/c0: is not a valid enum value'],
    })

    const rows = modelRowsToGrid(model, model.api.getSnapshot())

    expect(rows[0].__validationStatus).toBe('valid')
    expect(rows[1].__validationStatus).toBe('invalid')
    expect(rows[1].__cellValidationResults).toEqual(
      new Map([['c0', ['is not a valid enum value']]]),
    )
    expect(rows[2].__validationStatus).toBe('pending')
  })

  it('reports validation as pending once a cell is written after it', () => {
    const model = createTestModel(1, 2, SID)
    setRowValidation(model, 0, { isValid: true, allValidationMessages: [] })
    model.api.vec(['rows', '0', 'data']).set([[1, s.con('new value')]])

    const rows = modelRowsToGrid(model, model.api.getSnapshot())

    expect(rows[0].__validationStatus).toBe('pending')
  })

  describe('with a cache', () => {
    it('returns the previous rows when a change does not touch them', () => {
      const model = createTestModel(3, 2, SID)
      const cache = createGridRowCache()
      const before = modelRowsToGrid(model, model.api.getSnapshot(), cache)

      applyModelChange(
        model,
        {
          type: 'SET_SELECTION',
          replicaId: String(SID),
          selection: { rowSelectAll: true },
        },
        {},
      )
      const after = modelRowsToGrid(model, model.api.getSnapshot(), cache)

      expect(after).toBe(before)
    })

    it('rebuilds only the row that changed', () => {
      const model = createTestModel(3, 2, SID)
      const cache = createGridRowCache()
      const before = modelRowsToGrid(model, model.api.getSnapshot(), cache)

      applyModelChange(
        model,
        { type: 'UPDATE', rowIndex: 1, updatedData: { c0: 'edited' } },
        {},
      )
      const after = modelRowsToGrid(model, model.api.getSnapshot(), cache)

      expect(after).not.toBe(before)
      expect(after[0]).toBe(before[0])
      expect(after[1]).not.toBe(before[1])
      expect(after[1].c0).toBe('edited')
      expect(after[2]).toBe(before[2])
    })

    it('rebuilds a row whose cell is rewritten with its current value', () => {
      // Such a write leaves the snapshot's row unchanged, but it still makes
      // the row's validation pending and changes the cell's author
      const model = createTestModel(2, 2, SID)
      setRowValidation(model, 0, { isValid: true, allValidationMessages: [] })
      const cache = createGridRowCache()
      const before = modelRowsToGrid(model, model.api.getSnapshot(), cache)
      const snapshotRowBefore = model.api.getSnapshot().rows[0]

      model.api
        .vec(['rows', '0', 'data'])
        .set([[0, s.con(snapshotRowBefore.data[0])]])
      const snapshot = model.api.getSnapshot()
      const after = modelRowsToGrid(model, snapshot, cache)

      expect(snapshot.rows[0]).toBe(snapshotRowBefore)
      expect(before[0].__validationStatus).toBe('valid')
      expect(after[0]).not.toBe(before[0])
      expect(after[0].__validationStatus).toBe('pending')
      expect(after[1]).toBe(before[1])
    })

    it('rebuilds a row when its validation changes', () => {
      const model = createTestModel(1, 2, SID)
      const cache = createGridRowCache()
      const before = modelRowsToGrid(model, model.api.getSnapshot(), cache)

      setRowValidation(model, 0, { isValid: true, allValidationMessages: [] })
      const after = modelRowsToGrid(model, model.api.getSnapshot(), cache)

      expect(before[0].__validationStatus).toBe('pending')
      expect(after[0].__validationStatus).toBe('valid')
    })

    it('rebuilds every row when the columns are reordered', () => {
      const model = createTestModel(2, 3, SID)
      const cache = createGridRowCache()
      const before = modelRowsToGrid(model, model.api.getSnapshot(), cache)

      applyModelChange(
        model,
        { type: 'REORDER_COLUMNS', newColumnOrder: [2, 1, 0] },
        {},
      )
      const after = modelRowsToGrid(model, model.api.getSnapshot(), cache)

      expect(after[0]).not.toBe(before[0])
      expect(after[1]).not.toBe(before[1])
      expect(Object.keys(after[0]).slice(0, 2)).toEqual(['c1', 'c0'])
    })

    it('keeps the objects of rows that move when a row is inserted before them', () => {
      const model = createTestModel(2, 2, SID)
      const cache = createGridRowCache()
      const before = modelRowsToGrid(model, model.api.getSnapshot(), cache)

      applyModelChange(
        model,
        { type: 'CREATE', rowIndex: 0, rowData: { c0: 'inserted' } },
        {},
      )
      const after = modelRowsToGrid(model, model.api.getSnapshot(), cache)

      expect(after).toHaveLength(3)
      expect(after[0].c0).toBe('inserted')
      expect(after[1]).toBe(before[0])
      expect(after[2]).toBe(before[1])
    })
  })

  it('reads the rows array once instead of resolving each row by its path', () => {
    // Resolving rows/<index> for every row is quadratic in the row count
    const model = createTestModel(5, 3, SID)
    const snapshot = model.api.getSnapshot()
    const arrSpy = vi.spyOn(model.api, 'arr')
    const objSpy = vi.spyOn(model.api, 'obj')
    const vecSpy = vi.spyOn(model.api, 'vec')
    const conSpy = vi.spyOn(model.api, 'con')

    modelRowsToGrid(model, snapshot)

    expect(arrSpy).toHaveBeenCalledTimes(1)
    expect(objSpy).not.toHaveBeenCalled()
    expect(vecSpy).not.toHaveBeenCalled()
    expect(conSpy).not.toHaveBeenCalled()
  })
})
