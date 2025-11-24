import {
  StyledTableContainer,
  StyledTableContainerProps,
} from '@/components/styled/StyledTableContainer'
import { flexRender, Row, Table } from '@tanstack/react-table'
import { useMemo } from 'react'
import { MemoizedTableBody, TableBody, TableBodyProps } from './TableBody'
import {
  getColumnSizeCssVariable,
  getCommonPinningStyles,
  getHeaderSizeCssVariable,
} from './TanStackTableUtils'
import { StyledTanStackTableSlotProps, StyledTanStackTableSlots } from './types'

export type StyledTanStackTableProps<TData = unknown, TRowType = Row<TData>> = {
  table: Table<TData>
  styledTableContainerProps?: StyledTableContainerProps
  fullWidth?: boolean
  slots?: StyledTanStackTableSlots<TData, TRowType>
  slotProps?: StyledTanStackTableSlotProps<TData, TRowType>
} & Pick<TableBodyProps<TData, TRowType>, 'rows' | 'rowTransform'>

/**
 * Component that renders a styled table using @tanstack/react-table. Pass your table instance into the component and
 * it will render the table with the appropriate headers and rows.
 */
export default function StyledTanStackTable<
  TData = unknown,
  TRowType = Row<TData>,
>(props: StyledTanStackTableProps<TData, TRowType>) {
  'use no memo' // skip react compiler for this component
  const {
    table,
    styledTableContainerProps,
    fullWidth = true,
    slots = {},
    slotProps = {},
  } = props
  const {
    Thead = 'thead',
    Th = 'th',
    Table = 'table',
    ...tableBodySlots
  } = slots
  const {
    Table: tableSlotProps = {},
    Thead: theadSlotProps = {},
    Th: thSlotProps = {},
    ...tableBodySlotProps
  } = slotProps

  const tableBodyProps: TableBodyProps<TData, TRowType> = {
    table,
    slots: tableBodySlots,
    slotProps: tableBodySlotProps,
    rows: props.rows!,
    rowTransform: props.rowTransform!,
  }

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
      const header = headers[i]
      colSizes[getHeaderSizeCssVariable(header.id)] = header.getSize()
      colSizes[getColumnSizeCssVariable(header.column.id)] =
        header.column.getSize()
    }
    return colSizes
    // Intentionally limit the dependencies to only recompute when the column sizes change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    table.getState().columnSizingInfo,
    table.getState().columnSizing,
    table.getState().columnVisibility, // If a column is added, its width should be recalculated
  ])

  const tableWidth = fullWidth ? '100%' : `${table.getTotalSize()}px`

  /* When resizing any column we will render this special memoized version of our table body */
  const TableBodyElement = table.getState().columnSizingInfo.isResizingColumn
    ? MemoizedTableBody
    : TableBody

  return (
    <StyledTableContainer {...styledTableContainerProps}>
      <Table
        {...tableSlotProps}
        style={{
          ...columnSizeVars,
          tableLayout: 'fixed',
          width: tableWidth,
          ...tableSlotProps['style'],
        }}
      >
        <Thead {...theadSlotProps}>
          {table.getHeaderGroups().map(headerGroup => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <Th
                    key={header.id}
                    colSpan={header.colSpan}
                    {...thSlotProps}
                    style={{
                      width: `calc(var(${getHeaderSizeCssVariable(
                        header.id,
                      )}) * 1px)`,
                      ...getCommonPinningStyles(header.column),
                      ...thSlotProps['style'],
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
                  </Th>
                ))}
              </tr>
            )
          })}
        </Thead>
        <TableBodyElement<TData, TRowType> {...tableBodyProps} />
      </Table>
    </StyledTableContainer>
  )
}
