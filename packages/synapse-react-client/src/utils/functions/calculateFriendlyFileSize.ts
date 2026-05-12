const suffixes: string[] = [
  'Bytes',
  'KB',
  'MB',
  'GB',
  'TB',
  'PB',
  'EB',
  'ZB',
  'YB',
]

export function calculateFriendlyFileSize(
  bytes: number | null | undefined,
  fractionDigits?: number,
) {
  if (bytes == null) {
    return ''
  }
  // https://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable-string
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  // Use 2 decimal places for GB and above, 0 for smaller units
  const digits = fractionDigits ?? (i >= 3 ? 2 : 0)
  // tslint:disable-next-line
  return (
    (bytes == 0 && '0 Bytes') ||
    (bytes / Math.pow(1024, i)).toFixed(digits) + ' ' + suffixes[i]
  )
}
