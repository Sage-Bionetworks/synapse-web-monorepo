import React from 'react'
import { flexRender, Table } from '@tanstack/react-table'
import {
  StyledTableContainer,
  StyledTableContainerProps,
} from '../styled/StyledTableContainer'

type StyledTanStackTableProps<T = unknown> = {
  table: Table<T>
  styledTableContainerProps?: StyledTableContainerProps
}

export default function StyledTanStackTable<T = unknown>(
  props: StyledTanStackTableProps<T>,
) {
  const { table, styledTableContainerProps } = props
  return (
    <StyledTableContainer {...styledTableContainerProps}>
      <table style={{ width: '100%' }}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{ width: header.getSize() }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                    {header.column.getCanResize() && (
                      <div
                        className={`resizer ${
                          header.column.getIsResizing() ? 'isResizing' : ''
                        }`}
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                      />
                    )}
                  </th>
                ))}
              </tr>
            )
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => {
                return (
                  <td
                    key={cell.id}
                    style={{
                      width: cell.column.getSize(),
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </StyledTableContainer>
  )
}
