import type { DataGridRow } from '../DataGridTypes'

export type ValidationError = {
  rowIndex: number
  columnName: string
  message: string
  pending: boolean
}

export type RowEntry = { rowIndex: number; pending: boolean }

export type LimitedGroup = {
  key: string
  /** Rows in this group, including any that were not kept */
  totalCount: number
  entries: { key: string; rows: RowEntry[]; hiddenRowCount: number }[]
  /** Entries dropped entirely because the row budget ran out */
  hiddenEntryCount: number
}

/** Lists every cell error of rows whose validation is invalid or pending, in row order. */
export function collectValidationErrors(
  rowValues: DataGridRow[],
): ValidationError[] {
  const errors: ValidationError[] = []
  rowValues.forEach((row, rowIndex) => {
    const status = row.__validationStatus
    if (status !== 'invalid' && status !== 'pending') return
    const pending = status === 'pending'
    row.__cellValidationResults?.forEach((messages, columnName) => {
      messages.forEach(message =>
        errors.push({ rowIndex, columnName, message, pending }),
      )
    })
  })
  return errors
}

/** Groups errors two levels deep, preserving first-seen order at each level. */
export function groupErrors(
  errors: ValidationError[],
  groupKey: (error: ValidationError) => string,
  entryKey: (error: ValidationError) => string,
): Map<string, Map<string, RowEntry[]>> {
  const groups = new Map<string, Map<string, RowEntry[]>>()
  errors.forEach(error => {
    const key = groupKey(error)
    if (!groups.has(key)) groups.set(key, new Map())
    const group = groups.get(key)!
    const subKey = entryKey(error)
    if (!group.has(subKey)) group.set(subKey, [])
    group
      .get(subKey)!
      .push({ rowIndex: error.rowIndex, pending: error.pending })
  })
  return groups
}

/**
 * Keeps at most `maxRows` row entries across all groups, in iteration order.
 * Groups reached after the budget is spent are omitted. Within a kept group,
 * `totalCount` still counts every row, and dropped rows and entries are
 * reported through `hiddenRowCount` and `hiddenEntryCount`.
 */
export function limitGroups(
  groups: Map<string, Map<string, RowEntry[]>>,
  maxRows: number,
): LimitedGroup[] {
  const limited: LimitedGroup[] = []
  let remaining = maxRows
  for (const [key, subGroups] of groups) {
    if (remaining <= 0) break
    let totalCount = 0
    let hiddenEntryCount = 0
    const entries: LimitedGroup['entries'] = []
    for (const [subKey, rows] of subGroups) {
      totalCount += rows.length
      if (remaining <= 0) {
        hiddenEntryCount++
        continue
      }
      const shownRows = rows.slice(0, remaining)
      remaining -= shownRows.length
      entries.push({
        key: subKey,
        rows: shownRows,
        hiddenRowCount: rows.length - shownRows.length,
      })
    }
    limited.push({ key, totalCount, entries, hiddenEntryCount })
  }
  return limited
}
