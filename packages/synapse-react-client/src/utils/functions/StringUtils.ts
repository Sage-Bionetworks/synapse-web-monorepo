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

/**
 * Returns a hash code from a string. Uses Java's String.hashCode() algorithm: https://devdocs.io/openjdk~8/java/lang/string#hashCode--
 * @param  {String} str The string to hash.
 * @return {Number}    A 32bit integer
 * @see https://stackoverflow.com/a/8831937
 */
export function hashCode(str?: string | null) {
  if (str == null) {
    str = ''
  }
  let hash = 0
  for (let i = 0, len = str.length; i < len; i++) {
    const chr = str.charCodeAt(i)
    hash = (hash << 5) - hash + chr
    hash |= 0 // Convert to 32bit integer
  }
  return hash
}
