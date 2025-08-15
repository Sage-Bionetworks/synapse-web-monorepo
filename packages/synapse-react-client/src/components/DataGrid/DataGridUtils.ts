import { QueryInput, DataGridRow } from './DataGridTypes'
// Query Input can either be an empty string, a SQL query, or a session ID
export const parseQueryInput = (input: string): QueryInput => {
  const trimmedInput = input.trim()
  if (!trimmedInput) {
    return { type: 'empty', input: '' }
  } else if (trimmedInput.toUpperCase().startsWith('SELECT')) {
    return { type: 'sql', input: trimmedInput }
  } else if (/^[A-Za-z]\w*=+$/.test(trimmedInput)) {
    return { type: 'sessionId', input: trimmedInput }
  }
  return { type: 'unknown', input: trimmedInput }
}

export function rowsAreIdentical(a: DataGridRow, b: DataGridRow): boolean {
  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)
  if (aKeys.length !== bKeys.length) return false
  for (const key of aKeys) {
    const aVal = a[key]
    const bVal = b[key]
    // Treat null, undefined, and empty string as equivalent
    const isNullish = (v: string | number | boolean | null | undefined) =>
      v === null || v === undefined || v === ''
    if (isNullish(aVal) && isNullish(bVal)) continue
    if (String(aVal) !== String(bVal)) return false
  }
  return true
}
