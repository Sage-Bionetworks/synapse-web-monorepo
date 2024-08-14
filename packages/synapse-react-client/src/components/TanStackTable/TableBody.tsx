import React from 'react'
import { Cell, flexRender, Table } from '@tanstack/react-table'
import { getColumnSizeCssVariable } from './TanStackTableUtils'
import ExpandableTableDataCell from '../SynapseTable/ExpandableTableDataCell'
import { Skeleton } from '@mui/material'

function CellRenderer<T = unknown>(cell: Cell<T, unknown>) {
  const getWrapInExpandableTd =
    cell.getContext().table.options.meta?.getWrapInExpandableTd
  const wrapInExpandableTd =
    getWrapInExpandableTd && getWrapInExpandableTd(cell)
  const TableDataCellElement = wrapInExpandableTd
    ? ExpandableTableDataCell
    : 'td'

  const renderPlaceholderData =
    cell.getContext().table.options.meta?.renderPlaceholderData

  return (
    <TableDataCellElement
      key={cell.id}
      style={{
        width: `calc(var(${getColumnSizeCssVariable(cell.column.id)}) * 1px)`,
        textAlign: cell.column.columnDef.meta?.textAlign,
      }}
    >
      {renderPlaceholderData ? (
        <p>
          <Skeleton width={'80%'} height={'20px'} />
        </p>
      ) : (
        flexRender(cell.column.columnDef.cell, cell.getContext())
      )}
    </TableDataCellElement>
  )
}

type TableBodyProps<T = unknown> = {
  table: Table<T>
}

export function TableBody<T = unknown>(props: TableBodyProps<T>) {
  const { table } = props
  return (
    <tbody>
      {table.getRowModel().rows.map(row => (
        <tr key={row.id}>{row.getVisibleCells().map(CellRenderer)}</tr>
      ))}
    </tbody>
  )
}

// special memoized wrapper for our table body that we will use during column resizing
// see https://tanstack.com/table/v8/docs/guide/column-sizing#advanced-column-resizing-performance
export const MemoizedTableBody = React.memo(TableBody, (prev, next) => {
  return prev.table.options.data === next.table.options.data
}) as typeof TableBody
