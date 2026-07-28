export type FileSelectionConstraints = {
  /**
   * If provided, files whose `type` is not included in this list will be rejected.
   */
  acceptedContentTypes?: readonly string[]
  /**
   * If provided, files larger than this will be rejected.
   */
  maxFileSizeBytes?: number
  /**
   * If provided, the total number of files (this selection plus `currentFileCount`) may not exceed this value.
   */
  maxFiles?: number
  /**
   * The number of files already selected/uploaded prior to this selection. Used with `maxFiles`.
   * @default 0
   */
  currentFileCount?: number
}

function formatMegabytes(bytes: number): string {
  return `${Math.round(bytes / (1024 * 1024))} MB`
}

/**
 * Validates a file selection against the given constraints, returning a human-readable error
 * message describing the first violation encountered, or null if the selection is valid.
 */
export function validateFileSelection(
  files: File[],
  constraints: FileSelectionConstraints,
): string | null {
  const {
    acceptedContentTypes,
    maxFileSizeBytes,
    maxFiles,
    currentFileCount = 0,
  } = constraints

  if (maxFiles != null && currentFileCount + files.length > maxFiles) {
    return `You can attach up to ${maxFiles} files.`
  }

  if (
    maxFileSizeBytes != null &&
    files.some(file => file.size > maxFileSizeBytes)
  ) {
    return `Each file must be ${formatMegabytes(maxFileSizeBytes)} or less.`
  }

  if (acceptedContentTypes != null) {
    const unsupportedFiles = files.filter(
      file => !acceptedContentTypes.includes(file.type),
    )
    if (unsupportedFiles.length > 0) {
      return `Unsupported file type: ${unsupportedFiles
        .map(file => file.name)
        .join(', ')}.`
    }
  }

  return null
}
