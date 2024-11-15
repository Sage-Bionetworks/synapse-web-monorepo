import { ProjectStorageLocationUsage } from '@sage-bionetworks/synapse-types'
import { willUploadsExceedStorageLimit } from './willUploadsExceedStorageLimit'

describe('willUploadsExceedStorageLimit', () => {
  test('isOverLimit', () => {
    const usage: ProjectStorageLocationUsage = {
      storageLocationId: 0,
      sumFileBytes: 101,
      maxAllowedFileBytes: 100,
      isOverLimit: true,
    }

    const pendingUploadsInBytes = 0
    expect(
      willUploadsExceedStorageLimit([], usage, pendingUploadsInBytes),
    ).toEqual(true)
  })

  test('no limit', () => {
    const usage: ProjectStorageLocationUsage = {
      storageLocationId: 0,
      sumFileBytes: 101,
      maxAllowedFileBytes: undefined,
      isOverLimit: false,
    }

    const pendingUploadsInBytes = 0
    expect(
      willUploadsExceedStorageLimit(
        [{ size: 1000 } as unknown as File],
        usage,
        pendingUploadsInBytes,
      ),
    ).toEqual(false)
  })

  test('under limit', () => {
    const usage: ProjectStorageLocationUsage = {
      storageLocationId: 0,
      sumFileBytes: 50,
      maxAllowedFileBytes: 100,
      isOverLimit: false,
    }

    const pendingUploadsInBytes = 0
    expect(
      willUploadsExceedStorageLimit(
        [{ size: 25 } as unknown as File],
        usage,
        pendingUploadsInBytes,
      ),
    ).toEqual(false)
  })

  test('over limit', () => {
    const usage: ProjectStorageLocationUsage = {
      storageLocationId: 0,
      sumFileBytes: 50,
      maxAllowedFileBytes: 100,
      isOverLimit: false,
    }

    const pendingUploadsInBytes = 0
    expect(
      willUploadsExceedStorageLimit(
        [{ size: 50 } as unknown as File, { size: 50 } as unknown as File],
        usage,
        pendingUploadsInBytes,
      ),
    ).toEqual(true)
  })

  test('over limit only with pendingUploadsInBytes', () => {
    const usage: ProjectStorageLocationUsage = {
      storageLocationId: 0,
      sumFileBytes: 50,
      maxAllowedFileBytes: 100,
      isOverLimit: false,
    }

    const pendingUploadsInBytes = 50
    expect(
      willUploadsExceedStorageLimit(
        [{ size: 25 } as unknown as File],
        usage,
        pendingUploadsInBytes,
      ),
    ).toEqual(true)
  })
})
