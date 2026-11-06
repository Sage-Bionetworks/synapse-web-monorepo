import { useRef, useState } from 'react'

export type KeyedRow<T> = { key: number; value: T }

/**
 * Holds an ordered, editable list with stable React keys. Each mutator returns the next list of values so the caller
 * can report it from the same event handler.
 */
export function useKeyedRows<T>(initialValues: T[]) {
  const nextKey = useRef(initialValues.length)
  const [rows, setRows] = useState<KeyedRow<T>[]>(() =>
    initialValues.map((value, key) => ({ key, value })),
  )

  const commit = (next: KeyedRow<T>[]) => {
    setRows(next)
    return next.map(row => row.value)
  }

  return {
    rows,
    addRow: (value: T) => commit([...rows, { key: nextKey.current++, value }]),
    updateRow: (key: number, value: T) =>
      commit(rows.map(row => (row.key === key ? { key, value } : row))),
    removeRow: (key: number) => commit(rows.filter(row => row.key !== key)),
  }
}
