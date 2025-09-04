import { DataGridRow, Operation, QueryInput } from './DataGridTypes'

// We embed a value into the in row data passed to react-datasheet-grid for use as a render optimization
export const GRID_ROW_REACT_KEY_PROPERTY = '__rowKey'

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

/**
 * Remove no-op operations created by react-datasheet-grid that would result in invalid or undesired changes to the json-joy CRDT model
 * @param newValue
 * @param rowValues
 * @param operations
 */
export function removeNoOpOperations(
  newValue: DataGridRow[],
  rowValues: DataGridRow[],
  operations: Operation[],
) {
  function isNoop(operation: Operation): boolean {
    if (operation.type === 'UPDATE') {
      const oldVal = rowValues.slice(
        operation.fromRowIndex,
        operation.toRowIndex,
      )
      const newVal = newValue.slice(
        operation.fromRowIndex,
        operation.toRowIndex,
      )

      const comparisonResults = oldVal.map((oldItem, idx) =>
        rowsAreIdentical(oldItem, newVal[idx]),
      )
      return comparisonResults.every(Boolean)
    }
    return false
  }

  return operations.filter(op => !isNoop(op))
}
