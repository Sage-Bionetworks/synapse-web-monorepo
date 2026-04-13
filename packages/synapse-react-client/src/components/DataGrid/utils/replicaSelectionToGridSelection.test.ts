import {
  GridModel,
  ReplicaSelectionModel,
} from '@/components/DataGrid/DataGridTypes'
import computeReplicaSelectionModel from '@/components/DataGrid/utils/computeReplicaSelectionModel'
import createTestModel from '@/components/DataGrid/utils/createTestModel'
import { replicaSelectionToGridSelection } from '@/components/DataGrid/utils/replicaSelectionToGridSelection'
import { SelectionWithId } from '@sage-bionetworks/react-datasheet-grid'

/**
 * NOTE: createTestModel uses json-joy's `s.vec(s.con(''))` for columnNames,
 * which inserts a schema-default '' element at index 0.  After pushing c0…c2,
 * the snapshot snapshot.columnNames = ['', 'c0', 'c1', 'c2'] and
 * snapshot.columnOrder = [0, 1, 2].  Therefore the resolved column name for
 * colIdx N is columnNames[N], i.e.:
 *   colIdx 0 → ''
 *   colIdx 1 → 'c0'
 *   colIdx 2 → 'c1'
 */

describe('replicaSelectionToGridSelection', () => {
  const sid = 456
  const nRow = 4
  const nCol = 3
  let model: GridModel

  beforeEach(() => {
    model = createTestModel(nRow, nCol, sid)
  })

  // ── null / empty inputs ───────────────────────────────────────────────────

  it('returns null when selection is null', () => {
    expect(replicaSelectionToGridSelection(null, model)).toBeNull()
  })

  it('returns null when selection is undefined', () => {
    expect(
      replicaSelectionToGridSelection(
        undefined as unknown as ReplicaSelectionModel,
        model,
      ),
    ).toBeNull()
  })

  it('returns null when the model has no rows', () => {
    const emptyModel = createTestModel(0, nCol, sid)
    const selection: ReplicaSelectionModel = {
      rowSelectAll: true,
      columnSelectAll: true,
    }
    expect(replicaSelectionToGridSelection(selection, emptyModel)).toBeNull()
  })

  it('returns null when rowSelectAll is false and rowSelection is empty', () => {
    const selection: ReplicaSelectionModel = {
      rowSelection: [],
      columnSelectAll: true,
    }
    expect(replicaSelectionToGridSelection(selection, model)).toBeNull()
  })

  it('returns null when columnSelectAll is false and columnSelection is empty', () => {
    const selection: ReplicaSelectionModel = {
      rowSelectAll: true,
      columnSelection: [],
    }
    expect(replicaSelectionToGridSelection(selection, model)).toBeNull()
  })

  it('returns null when rowSelection contains IDs not present in the model', () => {
    const selection: ReplicaSelectionModel = {
      rowSelection: [{ rep: 9999, seq: 9999 }],
      columnSelectAll: true,
    }
    expect(replicaSelectionToGridSelection(selection, model)).toBeNull()
  })

  it('returns null when columnSelection contains IDs not present in the model', () => {
    const selection: ReplicaSelectionModel = {
      rowSelectAll: true,
      columnSelection: [{ rep: 9999, seq: 9999 }],
    }
    expect(replicaSelectionToGridSelection(selection, model)).toBeNull()
  })

  // ── rowSelectAll + columnSelectAll ────────────────────────────────────────

  it('returns full range with undefined columnNames when both selectAll flags are set', () => {
    const selection: ReplicaSelectionModel = {
      rowSelectAll: true,
      columnSelectAll: true,
    }
    const result = replicaSelectionToGridSelection(selection, model)
    expect(result).not.toBeNull()
    expect(result!.minRow).toBe(0)
    expect(result!.maxRow).toBe(nRow - 1)
    expect(result!.columnNames).toBeUndefined()
  })

  // ── rowSelectAll + specific columns ───────────────────────────────────────

  it('covers all rows and resolves specific column names when rowSelectAll is true', () => {
    // Selects columns at grid indices 0 and 1
    const dsSelection: SelectionWithId = {
      min: { col: 0, row: 0, colId: 'c0' },
      max: { col: 1, row: nRow - 1, colId: 'c1' },
    }
    const replicaModel = computeReplicaSelectionModel(dsSelection, model)
    expect(replicaModel.rowSelectAll).toBe(true)

    const result = replicaSelectionToGridSelection(replicaModel, model)
    expect(result).not.toBeNull()
    expect(result!.minRow).toBe(0)
    expect(result!.maxRow).toBe(nRow - 1)
    // colIdx 0 → '' (vec schema default), colIdx 1 → 'c0'
    expect(result!.columnNames).toEqual(new Set(['', 'c0']))
  })

  it('covers all rows and resolves a single column name when rowSelectAll is true', () => {
    const dsSelection: SelectionWithId = {
      min: { col: 2, row: 0, colId: 'c2' },
      max: { col: 2, row: nRow - 1, colId: 'c2' },
    }
    const replicaModel = computeReplicaSelectionModel(dsSelection, model)
    expect(replicaModel.rowSelectAll).toBe(true)

    const result = replicaSelectionToGridSelection(replicaModel, model)
    expect(result).not.toBeNull()
    expect(result!.minRow).toBe(0)
    expect(result!.maxRow).toBe(nRow - 1)
    // colIdx 2 → 'c1'
    expect(result!.columnNames).toEqual(new Set(['c1']))
  })

  // ── specific rows + columnSelectAll ───────────────────────────────────────

  it('covers all columns (undefined columnNames) and resolves specific row range when columnSelectAll is true', () => {
    const dsSelection: SelectionWithId = {
      min: { col: 0, row: 1, colId: 'c0' },
      max: { col: nCol - 1, row: 2, colId: `c${nCol - 1}` },
    }
    const replicaModel = computeReplicaSelectionModel(dsSelection, model)
    expect(replicaModel.columnSelectAll).toBe(true)

    const result = replicaSelectionToGridSelection(replicaModel, model)
    expect(result).not.toBeNull()
    expect(result!.minRow).toBe(1)
    expect(result!.maxRow).toBe(2)
    expect(result!.columnNames).toBeUndefined()
  })

  // ── specific rows + specific columns ──────────────────────────────────────

  it('correctly maps a single cell selection back to its grid coordinates', () => {
    const dsSelection: SelectionWithId = {
      min: { col: 1, row: 2, colId: 'c1' },
      max: { col: 1, row: 2, colId: 'c1' },
    }
    const replicaModel = computeReplicaSelectionModel(dsSelection, model)

    const result = replicaSelectionToGridSelection(replicaModel, model)
    expect(result).not.toBeNull()
    expect(result!.minRow).toBe(2)
    expect(result!.maxRow).toBe(2)
    // colIdx 1 → 'c0'
    expect(result!.columnNames).toEqual(new Set(['c0']))
  })

  it('correctly maps a multi-row, multi-column selection back to its grid coordinates', () => {
    const dsSelection: SelectionWithId = {
      min: { col: 0, row: 1, colId: 'c0' },
      max: { col: 1, row: 3, colId: 'c1' },
    }
    const replicaModel = computeReplicaSelectionModel(dsSelection, model)

    const result = replicaSelectionToGridSelection(replicaModel, model)
    expect(result).not.toBeNull()
    expect(result!.minRow).toBe(1)
    expect(result!.maxRow).toBe(3)
    // colIdx 0 → '', colIdx 1 → 'c0'
    expect(result!.columnNames).toEqual(new Set(['', 'c0']))
  })

  it('derives minRow and maxRow from the minimum and maximum matched row indices', () => {
    // Select rows 0 and 3 (non-contiguous range from CRDT perspective — the function
    // returns min/max, not an exact set of rows)
    const dsSelection: SelectionWithId = {
      min: { col: 2, row: 0, colId: 'c2' },
      max: { col: 2, row: 3, colId: 'c2' },
    }
    const replicaModel = computeReplicaSelectionModel(dsSelection, model)

    const result = replicaSelectionToGridSelection(replicaModel, model)
    expect(result).not.toBeNull()
    expect(result!.minRow).toBe(0)
    expect(result!.maxRow).toBe(3)
    // colIdx 2 → 'c1'
    expect(result!.columnNames).toEqual(new Set(['c1']))
  })

  it('returns a single-row range for a first-row selection', () => {
    const dsSelection: SelectionWithId = {
      min: { col: 0, row: 0, colId: 'c0' },
      max: { col: 0, row: 0, colId: 'c0' },
    }
    const replicaModel = computeReplicaSelectionModel(dsSelection, model)

    const result = replicaSelectionToGridSelection(replicaModel, model)
    expect(result).not.toBeNull()
    expect(result!.minRow).toBe(0)
    expect(result!.maxRow).toBe(0)
    // colIdx 0 → ''
    expect(result!.columnNames).toEqual(new Set(['']))
  })
})
