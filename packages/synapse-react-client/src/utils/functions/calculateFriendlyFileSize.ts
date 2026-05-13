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
  // 0 for Bytes/KB, 1 for MB, 2 for GB, 3 for TB etc
  const digits = fractionDigits ?? Math.max(0, i - 1)
  // tslint:disable-next-line
  return (
    (bytes == 0 && '0 Bytes') ||
    (bytes / Math.pow(1024, i)).toFixed(digits) + ' ' + suffixes[i]
  )
}
