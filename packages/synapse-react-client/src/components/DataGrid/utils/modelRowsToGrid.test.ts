import type { UserProfile } from '@sage-bionetworks/synapse-types'
import { describe, expect, it, vi } from 'vitest'
import { Model } from 'json-joy/lib/json-crdt'
import { s } from 'json-joy/lib/json-crdt-patch'
import { applyModelChange } from './applyModelChange'
import createTestModel from './createTestModel'
import { GRID_ROW_REACT_KEY_PROPERTY } from './DataGridUtils'
import { getRowNodes } from './gridRowNodes'
import logicalTimestampToString from './logicalTimestampToString'
import modelRowsToGrid, { createGridRowCache } from './modelRowsToGrid'
import type { GridModel } from '../DataGridTypes'
import type { ReplicaUserInfo } from '../hooks/useGridReplicaUsers'

const SID = 42
const PEER_SID = 7

const NO_REPLICAS: ReadonlyMap<number, ReplicaUserInfo> = new Map()

function makeReplicaUserInfo(
  category: ReplicaUserInfo['category'],
  replicaId: number,
): ReplicaUserInfo {
  return {
    replicaInfo: { replicaId, replicaType: 'USER', createdBy: 'user-1' },
    category,
    profile: {
      userName: 'alice',
      firstName: 'Alice',
      lastName: 'Smith',
    } as UserProfile,
  }
}

const SELF_REPLICAS = new Map([[SID, makeReplicaUserInfo('self', SID)]])

const SELF_AND_PEER_REPLICAS = new Map([
  [SID, makeReplicaUserInfo('self', SID)],
  [PEER_SID, makeReplicaUserInfo('other-user', PEER_SID)],
])

function setRowValidation(
  model: GridModel,
  rowIndex: number,
  rowValidation: { isValid: boolean; allValidationMessages: string[] },
) {
  model.api.obj(['rows', String(rowIndex)]).set({
    metadata: s.obj({ rowValidation: s.con(rowValidation) }),
  })
}

function writeCellAsPeer(
  model: GridModel,
  rowIndex: number,
  colArrayIndex: number,
  value: unknown,
) {
  const peer = (model as unknown as Model).fork(
    PEER_SID,
  ) as unknown as GridModel
  peer.api
    .vec(['rows', String(rowIndex), 'data'])
    .set([[colArrayIndex, s.con(value)]])
  ;(model as unknown as Model).applyPatch(peer.api.flush())
}

describe('modelRowsToGrid', () => {
  it('returns no rows without a model', () => {
    const model = createTestModel(1, 2, SID)
    expect(modelRowsToGrid(null, model.api.getSnapshot(), NO_REPLICAS)).toEqual(
      [],
    )
  })

  it('maps each cell to its column name, in column order', () => {
    const model = createTestModel(2, 3, SID)
    model.api.vec(['columnNames']).set([[0, s.con('first')]])
    const snapshot = model.api.getSnapshot()

    const rows = modelRowsToGrid(model, snapshot, NO_REPLICAS)

    snapshot.rows.forEach((snapshotRow, rowIndex) => {
      snapshot.columnOrder.forEach((columnIndex: number) => {
        const columnName = snapshot.columnNames[columnIndex]
        expect(rows[rowIndex][columnName]).toBe(snapshotRow.data[columnIndex])
      })
    })
  })

  it("keys each row by its CRDT node's id", () => {
    const model = createTestModel(3, 1, SID)

    const rows = modelRowsToGrid(model, model.api.getSnapshot(), NO_REPLICAS)

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

    const rows = modelRowsToGrid(model, model.api.getSnapshot(), NO_REPLICAS)

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

    const rows = modelRowsToGrid(model, model.api.getSnapshot(), NO_REPLICAS)

    expect(rows[0].__validationStatus).toBe('pending')
  })

  describe('change info', () => {
    it('adds no change info when no replicas are known', () => {
      const model = createTestModel(2, 2, SID)

      const rows = modelRowsToGrid(model, model.api.getSnapshot(), NO_REPLICAS)

      rows.forEach(row => expect(row.__cellChangeInfo).toBeUndefined())
    })

    it('adds change info for the cells written by a known replica', () => {
      // createTestModel(1, 2) → columnNames=['','c0','c1'], columnOrder=[0,1]
      // columnOrder[0]=0 → columnNames[0]='' → skipped
      // columnOrder[1]=1 → columnNames[1]='c0' → attributed
      const model = createTestModel(1, 2, SID)

      const rows = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        SELF_REPLICAS,
      )

      expect(rows[0].__cellChangeInfo).toEqual({
        c0: { category: 'self', tooltipText: 'You changed this' },
      })
    })

    it('adds no change info to a row whose cells were written by an unknown replica', () => {
      const model = createTestModel(2, 2, SID)
      const otherReplicas = new Map([
        [99, makeReplicaUserInfo('other-user', 99)],
      ])

      const rows = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        otherReplicas,
      )

      rows.forEach(row => expect(row.__cellChangeInfo).toBeUndefined())
    })

    it("includes tooltip text from the author's profile", () => {
      const model = createTestModel(1, 2, PEER_SID)

      const rows = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        SELF_AND_PEER_REPLICAS,
      )

      expect(rows[0].__cellChangeInfo?.c0?.tooltipText).toBe(
        'Changed by Alice Smith',
      )
    })

    it('attributes each cell to the replica that last wrote it', () => {
      // columnNames=['','c0','c1','c2'] and columnOrder=[0,1,2], so data index 1
      // is 'c0' and index 2 is 'c1'; 'c2' (index 3) is not reachable via columnOrder
      const model = createTestModel(1, 3, SID)
      writeCellAsPeer(model, 0, 1, 'new-value')

      const rows = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        SELF_AND_PEER_REPLICAS,
      )

      expect(rows[0].__cellChangeInfo).toEqual({
        c0: { category: 'other-user', tooltipText: 'Changed by Alice Smith' },
        c1: { category: 'self', tooltipText: 'You changed this' },
      })
    })

    it('omits a cell by an unknown replica in a row that has a known-replica cell', () => {
      // columnOrder=[0,1,2] visits 'c0' (index 1) before 'c1' (index 2), so the
      // unknown author is encountered after the row already has change info
      const model = createTestModel(1, 3, SID)
      writeCellAsPeer(model, 0, 2, 'peer-value')

      const rows = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        SELF_REPLICAS,
      )

      expect(rows[0].__cellChangeInfo).toEqual({
        c0: { category: 'self', tooltipText: 'You changed this' },
      })
    })

    it('skips columns that have no cell in the row data', () => {
      // columnNames=['','c0','c1'] and each row has 2 cells, so column index 2 ('c1') has no cell
      const model = createTestModel(1, 2, SID)
      model.api.arr(['columnOrder']).push(s.con(2))

      const rows = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        SELF_REPLICAS,
      )

      expect(rows[0].__cellChangeInfo).toEqual({
        c0: { category: 'self', tooltipText: 'You changed this' },
      })
    })

    it('shares one change info object across cells written by the same replica', () => {
      const model = createTestModel(2, 3, SID)

      const rows = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        SELF_REPLICAS,
      )

      const sharedInfo = rows[0].__cellChangeInfo?.c0
      expect(sharedInfo).toBeDefined()
      expect(rows[0].__cellChangeInfo?.c1).toBe(sharedInfo)
      expect(rows[1].__cellChangeInfo?.c0).toBe(sharedInfo)
      expect(rows[1].__cellChangeInfo?.c1).toBe(sharedInfo)
    })
  })

  describe('with a cache', () => {
    it('returns the previous rows when a change does not touch them', () => {
      const model = createTestModel(3, 2, SID)
      const cache = createGridRowCache()
      const before = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        SELF_REPLICAS,
        cache,
      )

      applyModelChange(
        model,
        {
          type: 'SET_SELECTION',
          replicaId: String(SID),
          selection: { rowSelectAll: true },
        },
        {},
      )
      const after = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        SELF_REPLICAS,
        cache,
      )

      expect(after).toBe(before)
    })

    it('rebuilds only the row that changed', () => {
      const model = createTestModel(3, 2, SID)
      const cache = createGridRowCache()
      const before = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        SELF_REPLICAS,
        cache,
      )

      applyModelChange(
        model,
        { type: 'UPDATE', rowIndex: 1, updatedData: { c0: 'edited' } },
        {},
      )
      const after = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        SELF_REPLICAS,
        cache,
      )

      expect(after).not.toBe(before)
      expect(after[0]).toBe(before[0])
      expect(after[1]).not.toBe(before[1])
      expect(after[1].c0).toBe('edited')
      expect(after[1].__cellChangeInfo?.c0?.category).toBe('self')
      expect(after[2]).toBe(before[2])
    })

    it('rebuilds a row whose cell is rewritten with its current value', () => {
      // Such a write leaves the snapshot's row unchanged, but it still makes
      // the row's validation pending and changes the cell's author
      const model = createTestModel(2, 2, SID)
      setRowValidation(model, 0, { isValid: true, allValidationMessages: [] })
      const cache = createGridRowCache()
      const before = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        NO_REPLICAS,
        cache,
      )
      const snapshotRowBefore = model.api.getSnapshot().rows[0]

      model.api
        .vec(['rows', '0', 'data'])
        .set([[0, s.con(snapshotRowBefore.data[0])]])
      const snapshot = model.api.getSnapshot()
      const after = modelRowsToGrid(model, snapshot, NO_REPLICAS, cache)

      expect(snapshot.rows[0]).toBe(snapshotRowBefore)
      expect(before[0].__validationStatus).toBe('valid')
      expect(after[0]).not.toBe(before[0])
      expect(after[0].__validationStatus).toBe('pending')
      expect(after[1]).toBe(before[1])
    })

    it('updates the change info of a cell another replica rewrites with its current value', () => {
      // The snapshot's row is unchanged, so only the cell's new CRDT id shows the new author
      const model = createTestModel(2, 2, SID)
      const cache = createGridRowCache()
      const before = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        SELF_AND_PEER_REPLICAS,
        cache,
      )

      writeCellAsPeer(model, 0, 1, before[0].c0)
      const after = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        SELF_AND_PEER_REPLICAS,
        cache,
      )

      expect(after[0].c0).toBe(before[0].c0)
      expect(before[0].__cellChangeInfo?.c0?.category).toBe('self')
      expect(after[0].__cellChangeInfo?.c0?.category).toBe('other-user')
      expect(after[1]).toBe(before[1])
    })

    it('updates the change info of every row when the replicas change', () => {
      const model = createTestModel(2, 2, SID)
      const cache = createGridRowCache()
      const before = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        SELF_REPLICAS,
        cache,
      )

      const after = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        new Map([[SID, makeReplicaUserInfo('other-user', SID)]]),
        cache,
      )

      before.forEach(row =>
        expect(row.__cellChangeInfo?.c0?.category).toBe('self'),
      )
      after.forEach(row =>
        expect(row.__cellChangeInfo?.c0?.category).toBe('other-user'),
      )
    })

    it('rebuilds a row when its validation changes', () => {
      const model = createTestModel(1, 2, SID)
      const cache = createGridRowCache()
      const before = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        NO_REPLICAS,
        cache,
      )

      setRowValidation(model, 0, { isValid: true, allValidationMessages: [] })
      const after = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        NO_REPLICAS,
        cache,
      )

      expect(before[0].__validationStatus).toBe('pending')
      expect(after[0].__validationStatus).toBe('valid')
    })

    it('rebuilds every row when the columns are reordered', () => {
      const model = createTestModel(2, 3, SID)
      const cache = createGridRowCache()
      const before = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        NO_REPLICAS,
        cache,
      )

      applyModelChange(
        model,
        { type: 'REORDER_COLUMNS', newColumnOrder: [2, 1, 0] },
        {},
      )
      const after = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        NO_REPLICAS,
        cache,
      )

      expect(after[0]).not.toBe(before[0])
      expect(after[1]).not.toBe(before[1])
      expect(Object.keys(after[0]).slice(0, 2)).toEqual(['c1', 'c0'])
    })

    it('keeps the objects of rows that move when a row is inserted before them', () => {
      const model = createTestModel(2, 2, SID)
      const cache = createGridRowCache()
      const before = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        NO_REPLICAS,
        cache,
      )

      applyModelChange(
        model,
        { type: 'CREATE', rowIndex: 0, rowData: { c0: 'inserted' } },
        {},
      )
      const after = modelRowsToGrid(
        model,
        model.api.getSnapshot(),
        NO_REPLICAS,
        cache,
      )

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

    modelRowsToGrid(model, snapshot, SELF_REPLICAS)

    expect(arrSpy).toHaveBeenCalledTimes(1)
    expect(objSpy).not.toHaveBeenCalled()
    expect(vecSpy).not.toHaveBeenCalled()
    expect(conSpy).not.toHaveBeenCalled()
  })
})
