import { GridModel, gridSchema } from '@/components/DataGrid/DataGridTypes'
import {
  getPatchSizeInBytes,
  splitPatch,
} from '@/components/DataGrid/utils/splitPatch'
import { Model } from 'json-joy/lib/json-crdt'
import { decode } from 'json-joy/lib/json-crdt-patch/codec/compact'
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
    const maxSize = 300 // Set a smaller max size for testing

    // Create a large string to exceed max size
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
})
