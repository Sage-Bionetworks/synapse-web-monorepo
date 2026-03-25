import {
  StyledTableContainer,
  StyledTableContainerProps,
} from '@/components/styled/StyledTableContainer'
import {
  ColumnSizingState,
  flexRender,
  Row,
  Table,
} from '@tanstack/react-table'
import { useLayoutEffect, useMemo, useRef, useState } from 'react'
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
  /**
   * When true, uses `table-layout: auto` so the browser sizes columns to fit their content.
   * Column sizes from TanStack act as minimum widths, and columns expand to fit wider content.
   * Resizing still works — dragging a column sets a new minimum width.
   * Defaults to false (fixed layout).
   */
  autoColumnSizing?: boolean
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
  const {
    table,
    styledTableContainerProps,
    fullWidth = true,
    autoColumnSizing = false,
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
   * When autoColumnSizing is true we do a two-phase render:
   *  1. Render with table-layout: auto and no width constraints so the browser
   *     natively sizes each column to its content.
   *  2. After the first paint, measure each <th> and write the real pixel widths
   *     into TanStack's columnSizing state, then switch to table-layout: fixed.
   *
   * This gives content-based initial sizes while still allowing the user to drag
   * a column narrower than its content.
   */
  const tableRef = useRef<HTMLTableElement>(null)

  // Track what columns+visibility combination was last measured so we know when
  // a re-measurement is needed (e.g. columns change or visibility is toggled).
  const columnVisibility = table.getState().columnVisibility
  const [lastMeasuredState, setLastMeasuredState] = useState<{
    columns: typeof table.options.columns
    columnVisibility: typeof columnVisibility
  } | null>(null)

  // hasMeasured is true when auto-sizing is disabled (nothing to do) OR when the
  // current columns+visibility matches the last measured snapshot.
  const hasMeasured =
    !autoColumnSizing ||
    (lastMeasuredState?.columns === table.options.columns &&
      lastMeasuredState?.columnVisibility === columnVisibility)

  // After the browser has laid out the auto-sized table, capture the widths and
  // switch to fixed layout so that the user can resize below the content width.
  // useLayoutEffect runs synchronously after DOM mutations, before the browser
  // paints, which is required for accurate DOM measurements.
  useLayoutEffect(() => {
    if (!autoColumnSizing || hasMeasured || !tableRef.current) return

    const ths = tableRef.current.querySelectorAll(
      ':scope > thead > tr:first-child > th',
    )
    const headers = table.getFlatHeaders()
    const newSizes: ColumnSizingState = {}
    headers.forEach((header, i) => {
      const th = ths[i] as HTMLElement | undefined
      if (th) {
        newSizes[header.column.id] = Math.ceil(th.getBoundingClientRect().width)
      }
    })
    if (Object.keys(newSizes).length > 0) {
      table.setColumnSizing(newSizes)
      setLastMeasuredState({
        columns: table.options.columns,
        columnVisibility,
      })
    }
  }, [autoColumnSizing, columnVisibility, hasMeasured, table])

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

  // Before measurement: let the browser shrink the table to content width so we
  // can read accurate sizes. After measurement: use the exact measured total.
  let tableWidth: string
  if (fullWidth) {
    tableWidth = '100%'
  } else if (!hasMeasured) {
    tableWidth = 'max-content'
  } else {
    tableWidth = `${table.getTotalSize()}px`
  }

  /* When resizing any column we will render this special memoized version of our table body */
  const TableBodyElement = table.getState().columnSizingInfo.isResizingColumn
    ? MemoizedTableBody
    : TableBody

  return (
    <StyledTableContainer {...styledTableContainerProps}>
      <Table
        {...tableSlotProps}
        ref={tableRef}
        style={{
          ...columnSizeVars,
          // Pre-measurement: auto layout so the browser can size columns to content.
          // Post-measurement: fixed layout so the user can resize below content width.
          tableLayout: hasMeasured ? 'fixed' : 'auto',
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
                      // Pre-measurement: no width hint — let the browser size freely.
                      // Post-measurement: exact width from the measured/resized value.
                      ...(hasMeasured && {
                        width: `calc(var(${getHeaderSizeCssVariable(
                          header.id,
                        )}) * 1px)`,
                      }),
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
