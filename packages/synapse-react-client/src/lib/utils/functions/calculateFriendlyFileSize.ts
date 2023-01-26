const sufixes: string[] = [
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

export function calculateFriendlyFileSize(bytes: number) {
  if (!bytes) {
    return ''
  }
  // https://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable-string
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  // tslint:disable-next-line
  return (
    (!bytes && '0 Bytes') ||
    (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sufixes[i]
  )
}
