import React from 'react'
import { Cell, flexRender, Table } from '@tanstack/react-table'
import { getColumnSizeCssVariable } from './TanStackTableUtils'

function DefaultCellRenderer<T = unknown>(cell: Cell<T, unknown>) {
  return (
    <td
      key={cell.id}
      style={{
        width: `calc(var(${getColumnSizeCssVariable(cell.column.id)}) * 1px)`,
        textAlign: cell.column.columnDef.meta?.textAlign,
      }}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  )
}

type TableBodyProps<T = unknown> = {
  table: Table<T>
  cellRenderer?: (cell: Cell<T, unknown>) => React.ReactNode
}

function TableBody<T = unknown>(props: TableBodyProps<T>) {
  const { table, cellRenderer = DefaultCellRenderer } = props
  return (
    <tbody>
      {table.getRowModel().rows.map(row => (
        <tr key={row.id}>{row.getVisibleCells().map(cellRenderer)}</tr>
      ))}
    </tbody>
  )
}

// special memoized wrapper for our table body that we will use during column resizing
// see https://tanstack.com/table/v8/docs/guide/column-sizing#advanced-column-resizing-performance
export default React.memo(TableBody, (prev, next) => {
  return (
    prev.table.options.data === next.table.options.data &&
    prev.cellRenderer === next.cellRenderer
  )
}) as typeof TableBody
