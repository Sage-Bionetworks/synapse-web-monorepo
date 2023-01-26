/**
 * Truncates a string to be a specified length, then optionally append a suffix.
 */
export function truncateString(str: string, maxLength: number, suffix = '…') {
  if (str.length <= maxLength) {
    return str
  }
  return str.substring(0, maxLength) + suffix
}
