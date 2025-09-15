import { ProjectStorageLocationUsage } from '@sage-bionetworks/synapse-client'

/**
 * Precheck a set of uploads against a storage limit. Returns true if the uploads would cause the limit to be exceeded.
 * @param files the files to upload
 * @param usage the current storage usage
 * @param pendingUploadsInBytes the total size of the pending uploads which have already begun, but have not been accounted for in the usage
 */
export function willUploadsExceedStorageLimit(
  files: ArrayLike<File>,
  usage: ProjectStorageLocationUsage | undefined,
  pendingUploadsInBytes: number,
): boolean {
  if (usage == null) {
    return false
  }
  if (usage.isOverLimit) {
    return true
  }
  if (usage.maxAllowedFileBytes == null) {
    // No limit
    return false
  }

  const estimatedCurrentUsage = usage.sumFileBytes! + pendingUploadsInBytes
  const sumFileSizeBytes = Array.from(files).reduce(
    (acc, file) => acc + file.size,
    0,
  )

  return estimatedCurrentUsage + sumFileSizeBytes > usage.maxAllowedFileBytes
}
