import { describe, it, expect } from 'vitest'
import { enrichRowsWithChangeInfo } from './enrichRowsWithChangeInfo'
import createTestModel from './createTestModel'
import type { DataGridRow } from '../DataGridTypes'
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
})
