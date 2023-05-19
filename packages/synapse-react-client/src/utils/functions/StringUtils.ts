/**
 * Truncates a string to be a specified length, then optionally append a suffix.
 */
export function truncateString(str: string, maxLength: number, suffix = '…') {
  if (str.length <= maxLength) {
    return str
  }
  return str.substring(0, maxLength) + suffix
}

export function hex2ascii(inputString: string): string {
  const hex: string = inputString.toString()
  let str: string = ''
  for (let n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substring(n, n + 2), 16))
  }
  return str
}
