import React from 'react'
import { Column, Table } from '@tanstack/react-table'
import { DebouncedInput } from './DebouncedInput'

export function Filter({
  column,
  table,
}: {
  column: Column<any, unknown>
  table: Table<any>
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = (column.getFilterValue() as string) ?? ''

  const sortedUniqueValues: string[] = React.useMemo(
    () =>
      typeof firstValue === 'number'
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()],
  )
  return (
    <DebouncedInput
      type="text"
      options={sortedUniqueValues}
      value={columnFilterValue}
      onChange={value => column.setFilterValue(value)}
      placeholder={`Filter by ${column.id}... (${
        column.getFacetedUniqueValues().size
      })`}
      list={column.id + 'list'}
    />
  )
}
