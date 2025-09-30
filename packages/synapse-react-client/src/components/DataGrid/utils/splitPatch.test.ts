import { GridModel, gridSchema } from '@/components/DataGrid/DataGridTypes'
import {
  getPatchSizeInBytes,
  splitPatch,
} from '@/components/DataGrid/utils/splitPatch'
import { Model } from 'json-joy/lib/json-crdt'
import { decode, encode } from 'json-joy/lib/json-crdt-patch/codec/compact'
import { beforeEach } from 'vitest'

describe('splitPatch', () => {
  let model: GridModel
  let modelCopy: GridModel

  beforeEach(() => {
    model = Model.create(gridSchema)
    model.api.flush()
    modelCopy = model.fork()
  })

  it('splits patches that exceed the maximum size', () => {
    const maxSize = 300 // 300 bytes

    // Create two large strings that could not fit in a single patch
    const largeString = 'a'.repeat(200)
    model.api.vec(['columnNames']).set([[0, largeString]])
    model.api.vec(['columnNames']).set([[1, largeString]])

    const patch = model.api.flush()

    // Call under test -- split the patch into smaller patches
    const splitPatches = splitPatch(patch, maxSize)

    // Verify every patch is within the size limit
    expect(splitPatches.every(p => getPatchSizeInBytes(p) <= maxSize)).toBe(
      true,
    )

    // Ensure this test is valid -- our patch should have been split!
    expect(splitPatches.length).toBeGreaterThan(1)

    // Call under test -- apply the split patches to a copy of the original model
    modelCopy.applyBatch(splitPatches.map(decode))

    // Verify that the split patches applied to the copy result in the same state as the original model
    expect(modelCopy.api.getSnapshot()).toEqual(model.api.getSnapshot())
  })

  it('handles a patch with zero operations', () => {
    const maxSize = 100
    const patch = model.api.flush()
    const opCount = patch.ops?.length ?? 0
    expect(opCount).toBe(0)
    const splitPatches = splitPatch(patch, maxSize)
    expect(splitPatches.length).toBe(0)
  })

  it('returns a single patch if multiple operations fit under the limit', () => {
    const maxSize = 10000
    model.api.vec(['columnNames']).set([[0, 'short']])
    model.api.vec(['columnNames']).set([[1, 'short']])
    const patch = model.api.flush()
    const splitPatches = splitPatch(patch, maxSize)
    expect(splitPatches.length).toBe(1)
    expect(getPatchSizeInBytes(splitPatches[0])).toBeLessThanOrEqual(maxSize)
    expect(splitPatches[0]).toEqual(encode(patch))
  })

  it('returns multiple patches if each operation is individually too large', () => {
    // It's unrealistic for a real patch to have to be this small, but ensures we can handle
    // very large operations that cannot be split further.
    const maxSize = 1
    const largeString = 'a'.repeat(200)
    model.api.vec(['columnNames']).set([[0, largeString]])
    model.api.vec(['columnNames']).set([[1, largeString]])
    const patch = model.api.flush()
    const opCount = patch.ops?.length ?? 0
    expect(opCount).toBeGreaterThan(1)
    const splitPatches = splitPatch(patch, maxSize)
    expect(splitPatches.length).toBe(opCount)
    splitPatches.forEach(p => {
      expect(getPatchSizeInBytes(p)).toBeGreaterThan(maxSize)
    })
  })

  it('returns a single patch if total size is exactly at the limit', () => {
    model.api.vec(['columnNames']).set([[0, '']])
    const patch = model.api.flush()
    const patchSize = getPatchSizeInBytes(encode(patch))
    const splitPatches = splitPatch(patch, patchSize)
    expect(splitPatches.length).toBe(1)
    expect(getPatchSizeInBytes(splitPatches[0])).toEqual(patchSize)
  })
})
