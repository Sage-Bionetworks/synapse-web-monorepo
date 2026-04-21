import { describe, it, expect } from 'vitest'
import { Model } from 'json-joy/lib/json-crdt'
import { s } from 'json-joy/lib/json-crdt-patch'
import { getCellAuthorSid } from './getCellAuthorSid'
import createTestModel from './createTestModel'
import { GridModel } from '../DataGridTypes'

describe('getCellAuthorSid', () => {
  it('returns the sid of the replica that last wrote the cell', () => {
    const sid = 42
    const model = createTestModel(1, 2, sid)

    expect(getCellAuthorSid(model, 0, 0)).toBe(sid)
    expect(getCellAuthorSid(model, 0, 1)).toBe(sid)
  })

  it('returns null for an out-of-bounds row index', () => {
    const model = createTestModel(1, 2)

    expect(getCellAuthorSid(model, 99, 0)).toBeNull()
  })

  it('returns null for an out-of-bounds column index', () => {
    const model = createTestModel(1, 2)

    expect(getCellAuthorSid(model, 0, 99)).toBeNull()
  })

  it('returns the updated sid after a cell is overwritten by a different replica', () => {
    const originalSid = 10
    const model = createTestModel(1, 2, originalSid)

    // Fork the model as a different replica and overwrite one cell
    const newSid = 20
    const peer = (model as unknown as Model).fork(
      newSid,
    ) as unknown as GridModel
    peer.api.vec(['rows', '0', 'data']).set([[0, s.con('new-value')]])
    const patch = peer.api.flush()
    ;(model as unknown as Model).applyPatch(patch)

    // col 0 was overwritten by the peer — sid should be updated
    expect(getCellAuthorSid(model, 0, 0)).toBe(newSid)
    // col 1 was not touched — still the original sid
    expect(getCellAuthorSid(model, 0, 1)).toBe(originalSid)
  })
})
