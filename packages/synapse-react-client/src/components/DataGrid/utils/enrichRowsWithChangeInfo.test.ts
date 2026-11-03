import { describe, it, expect, vi } from 'vitest'
import { Model } from 'json-joy/lib/json-crdt'
import { s } from 'json-joy/lib/json-crdt-patch'
import { enrichRowsWithChangeInfo } from './enrichRowsWithChangeInfo'
import createTestModel from './createTestModel'
import type { DataGridRow, GridModel } from '../DataGridTypes'
import type { ReplicaUserInfo } from '../hooks/useGridReplicaUsers'

function makeReplicaUserInfo(
  category: ReplicaUserInfo['category'],
  replicaId = 42,
): ReplicaUserInfo {
  return {
    replicaInfo: { replicaId, replicaType: 'USER', createdBy: 'user-1' },
    category,
    profile: {
      userName: 'alice',
      firstName: 'Alice',
      lastName: 'Smith',
    } as any,
  } as ReplicaUserInfo
}

describe('enrichRowsWithChangeInfo', () => {
  it('returns the original array when replicaUserMap is empty', () => {
    const model = createTestModel(1, 2, 42)
    const snapshot = model.api.getSnapshot()
    const rows: DataGridRow[] = [{ c0: 'a', c1: 'b' }]
    const result = enrichRowsWithChangeInfo(rows, model, snapshot, new Map())
    expect(result).toBe(rows)
  })

  it('returns the original array when model is null', () => {
    const rows: DataGridRow[] = [{ c0: 'a' }]
    const replicaUserMap = new Map([[42, makeReplicaUserInfo('self')]])
    const result = enrichRowsWithChangeInfo(rows, null, null, replicaUserMap)
    expect(result).toBe(rows)
  })

  it('returns the original array when modelSnapshot is null', () => {
    const model = createTestModel(1, 2, 42)
    const rows: DataGridRow[] = [{ c0: 'a' }]
    const replicaUserMap = new Map([[42, makeReplicaUserInfo('self')]])
    const result = enrichRowsWithChangeInfo(rows, model, null, replicaUserMap)
    expect(result).toBe(rows)
  })

  it('adds __cellChangeInfo to rows when replica is known', () => {
    const sid = 42
    // createTestModel(1, 2) → columnNames=['','c0','c1'], columnOrder=[0,1]
    // columnOrder[0]=0 → columnNames[0]='' → skipped
    // columnOrder[1]=1 → columnNames[1]='c0' → attributed
    const model = createTestModel(1, 2, sid)
    const snapshot = model.api.getSnapshot()
    const rows: DataGridRow[] = [{ c0: 'a', c1: 'b' }]
    const replicaUserMap = new Map([[sid, makeReplicaUserInfo('self', sid)]])

    const result = enrichRowsWithChangeInfo(
      rows,
      model,
      snapshot,
      replicaUserMap,
    )

    expect(result[0].__cellChangeInfo).toEqual({
      c0: { category: 'self', tooltipText: 'You changed this' },
    })
  })

  it('omits columns whose sid is not in replicaUserMap', () => {
    const sid = 42
    const model = createTestModel(1, 2, sid)
    const snapshot = model.api.getSnapshot()
    const rows: DataGridRow[] = [{ c0: 'a', c1: 'b' }]
    // Map does not include sid 42
    const replicaUserMap = new Map([
      [99, makeReplicaUserInfo('other-user', 99)],
    ])

    const result = enrichRowsWithChangeInfo(
      rows,
      model,
      snapshot,
      replicaUserMap,
    )

    // Row should be returned by reference (no change info added)
    expect(result[0]).toBe(rows[0])
    expect(result[0].__cellChangeInfo).toBeUndefined()
  })

  it('returns rows without __cellChangeInfo by reference when no attributed cells', () => {
    const sid = 42
    const model = createTestModel(2, 1, sid)
    const snapshot = model.api.getSnapshot()
    const rows: DataGridRow[] = [{ c0: 'a' }, { c0: 'b' }]
    // Not in map → no attribution
    const replicaUserMap = new Map([
      [99, makeReplicaUserInfo('other-user', 99)],
    ])

    const result = enrichRowsWithChangeInfo(
      rows,
      model,
      snapshot,
      replicaUserMap,
    )

    expect(result[0]).toBe(rows[0])
    expect(result[1]).toBe(rows[1])
  })

  it('includes tooltipText derived from profile for other-user', () => {
    const sid = 7
    // Use 2 cols: columnOrder[1]=1 → columnNames[1]='c0' is the first reachable column
    const model = createTestModel(1, 2, sid)
    const snapshot = model.api.getSnapshot()
    const rows: DataGridRow[] = [{ c0: 'x' }]
    const replicaUserMap = new Map([
      [sid, makeReplicaUserInfo('other-user', sid)],
    ])

    const result = enrichRowsWithChangeInfo(
      rows,
      model,
      snapshot,
      replicaUserMap,
    )

    expect(result[0].__cellChangeInfo?.c0?.tooltipText).toBe(
      'Changed by Alice Smith',
    )
  })

  it('attributes each cell to the replica that last wrote it', () => {
    const originalSid = 10
    const peerSid = 20
    // columnNames=['','c0','c1','c2'] and columnOrder=[0,1,2], so data index 1
    // is 'c0' and index 2 is 'c1'; 'c2' (index 3) is not reachable via columnOrder
    const model = createTestModel(1, 3, originalSid)
    const peer = (model as unknown as Model).fork(
      peerSid,
    ) as unknown as GridModel
    peer.api.vec(['rows', '0', 'data']).set([[1, s.con('new-value')]])
    ;(model as unknown as Model).applyPatch(peer.api.flush())
    const snapshot = model.api.getSnapshot()
    const rows: DataGridRow[] = [{ c0: 'new-value', c1: 'r0c2' }]
    const replicaUserMap = new Map([
      [originalSid, makeReplicaUserInfo('self', originalSid)],
      [peerSid, makeReplicaUserInfo('other-user', peerSid)],
    ])

    const result = enrichRowsWithChangeInfo(
      rows,
      model,
      snapshot,
      replicaUserMap,
    )

    expect(result[0].__cellChangeInfo).toEqual({
      c0: { category: 'other-user', tooltipText: 'Changed by Alice Smith' },
      c1: { category: 'self', tooltipText: 'You changed this' },
    })
  })

  it('omits a cell by an unknown replica in a row that has a known-replica cell', () => {
    const knownSid = 10
    const unknownSid = 20
    // columnOrder=[0,1,2] visits 'c0' (index 1) before 'c1' (index 2), so the
    // unknown author is encountered after the row already has change info
    const model = createTestModel(1, 3, knownSid)
    const peer = (model as unknown as Model).fork(
      unknownSid,
    ) as unknown as GridModel
    peer.api.vec(['rows', '0', 'data']).set([[2, s.con('peer-value')]])
    ;(model as unknown as Model).applyPatch(peer.api.flush())
    const snapshot = model.api.getSnapshot()
    const rows: DataGridRow[] = [{ c0: 'r0c1', c1: 'peer-value' }]
    const replicaUserMap = new Map([
      [knownSid, makeReplicaUserInfo('self', knownSid)],
    ])

    const result = enrichRowsWithChangeInfo(
      rows,
      model,
      snapshot,
      replicaUserMap,
    )

    expect(result[0].__cellChangeInfo).toEqual({
      c0: { category: 'self', tooltipText: 'You changed this' },
    })
  })

  it('returns rows that are not in the model by reference', () => {
    const sid = 42
    const model = createTestModel(1, 2, sid)
    const snapshot = model.api.getSnapshot()
    const rows: DataGridRow[] = [{ c0: 'a' }, { c0: 'b' }]
    const replicaUserMap = new Map([[sid, makeReplicaUserInfo('self', sid)]])

    const result = enrichRowsWithChangeInfo(
      rows,
      model,
      snapshot,
      replicaUserMap,
    )

    expect(result[0].__cellChangeInfo).toBeDefined()
    expect(result[1]).toBe(rows[1])
  })

  it('skips columns that have no cell in the row data', () => {
    const sid = 42
    // columnNames=['','c0','c1'] and each row has 2 cells, so column index 2 ('c1') has no cell
    const model = createTestModel(1, 2, sid)
    model.api.arr(['columnOrder']).push(s.con(2))
    const snapshot = model.api.getSnapshot()
    const rows: DataGridRow[] = [{ c0: 'a', c1: 'b' }]
    const replicaUserMap = new Map([[sid, makeReplicaUserInfo('self', sid)]])

    const result = enrichRowsWithChangeInfo(
      rows,
      model,
      snapshot,
      replicaUserMap,
    )

    expect(result[0].__cellChangeInfo).toEqual({
      c0: { category: 'self', tooltipText: 'You changed this' },
    })
  })

  it('shares one change info object across cells written by the same replica', () => {
    const sid = 42
    const model = createTestModel(2, 3, sid)
    const snapshot = model.api.getSnapshot()
    const rows: DataGridRow[] = [{}, {}]
    const replicaUserMap = new Map([[sid, makeReplicaUserInfo('self', sid)]])

    const result = enrichRowsWithChangeInfo(
      rows,
      model,
      snapshot,
      replicaUserMap,
    )

    const sharedInfo = result[0].__cellChangeInfo?.c0
    expect(sharedInfo).toBeDefined()
    expect(result[0].__cellChangeInfo?.c1).toBe(sharedInfo)
    expect(result[1].__cellChangeInfo?.c0).toBe(sharedInfo)
    expect(result[1].__cellChangeInfo?.c1).toBe(sharedInfo)
  })

  it('looks up each row in the model once, not once per cell', () => {
    const sid = 42
    const nRows = 5
    const nCols = 4
    const model = createTestModel(nRows, nCols, sid)
    const snapshot = model.api.getSnapshot()
    const rows: DataGridRow[] = Array.from({ length: nRows }, () => ({}))
    const replicaUserMap = new Map([[sid, makeReplicaUserInfo('self', sid)]])
    const vecSpy = vi.spyOn(model.api, 'vec')

    enrichRowsWithChangeInfo(rows, model, snapshot, replicaUserMap)

    expect(vecSpy).toHaveBeenCalledTimes(nRows)
  })
})
