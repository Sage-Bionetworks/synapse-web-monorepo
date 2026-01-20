import {
  FileResult,
  DownloadListItemResult,
} from '@sage-bionetworks/synapse-types'

/**
 * Gets a filename from a file result, falling back to the original item's filename
 * or a default generated name if neither is available.
 *
 * @param fileResult - The file result containing file handle information
 * @param originalItem - The original download list item result
 * @param fallbackFileHandleId - The file handle ID to use for the default name
 * @returns The resolved filename
 */
export function getFileName(
  fileResult: FileResult,
  originalItem?: DownloadListItemResult,
): string {
  return (
    fileResult.fileHandle?.fileName ||
    originalItem?.fileName ||
    `file-${fileResult.fileHandleId}`
  )
}

/**
 * Handles filename collisions by appending a counter suffix to the filename.
 * If the filename has already been used, adds " (N)" before the extension.
 *
 * @param fileName - The original filename
 * @param usedFilenames - Map tracking filename usage counts
 * @returns The deduplicated filename
 */
export function deduplicateFileName(
  fileName: string,
  usedFilenames: Map<string, number>,
): string {
  if (usedFilenames.has(fileName)) {
    const count = usedFilenames.get(fileName)! + 1
    usedFilenames.set(fileName, count)

    // Split filename into base and extension
    const lastDotIndex = fileName.lastIndexOf('.')
    if (lastDotIndex > 0) {
      const baseName = fileName.substring(0, lastDotIndex)
      const extension = fileName.substring(lastDotIndex)
      return `${baseName} (${count})${extension}`
    } else {
      return `${fileName} (${count})`
    }
  } else {
    usedFilenames.set(fileName, 0)
    return fileName
  }
}
