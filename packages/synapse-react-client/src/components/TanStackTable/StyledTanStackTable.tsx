import React, { useMemo } from 'react'
import { Cell, flexRender, Table } from '@tanstack/react-table'
import {
  StyledTableContainer,
  StyledTableContainerProps,
} from '../styled/StyledTableContainer'
import TableBody from './TableBody'
import {
  getColumnSizeCssVariable,
  getHeaderSizeCssVariable,
} from './TanStackTableUtils'

type StyledTanStackTableProps<T = unknown> = {
  table: Table<T>
  styledTableContainerProps?: StyledTableContainerProps
  fullWidth?: boolean
  cellRenderer?: (cell: Cell<T, unknown>) => React.ReactNode
}

export default function StyledTanStackTable<T = unknown>(
  props: StyledTanStackTableProps<T>,
) {
  const {
    table,
    styledTableContainerProps,
    cellRenderer,
    fullWidth = true,
  } = props

  /**
   * Instead of calling `column.getSize()` on every render for every header
   * and especially every data cell (very expensive),
   * we will calculate all column sizes at once at the root table level in a useMemo
   * and pass the column sizes down as CSS variables to the <table> element.
   *
   * See https://tanstack.com/table/v8/docs/guide/column-sizing#advanced-column-resizing-performance
   */
  const columnSizeVars = useMemo(() => {
    const headers = table.getFlatHeaders()
    const colSizes: { [key: string]: number } = {}
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i]!
      colSizes[getHeaderSizeCssVariable(header.id)] = header.getSize()
      colSizes[getColumnSizeCssVariable(header.column.id)] =
        header.column.getSize()
    }
    return colSizes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table.getState().columnSizingInfo, table.getState().columnSizing])

  const tableWidth = fullWidth ? '100%' : table.getTotalSize()

  return (
    <StyledTableContainer {...styledTableContainerProps}>
      <table style={{ ...columnSizeVars, width: tableWidth }}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{
                      width: `calc(var(${getHeaderSizeCssVariable(
                        header.id,
                      )}) * 1px)`,
                    }}
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
        <TableBody table={table} cellRenderer={cellRenderer} />
      </table>
    </StyledTableContainer>
  )
}
