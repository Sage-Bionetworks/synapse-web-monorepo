import { styled } from '@mui/material'
import { Cell, Row, Table } from '@tanstack/react-table'
import { identity } from 'lodash-es'
import { memo } from 'react'
import { RequireAllOrNone } from 'type-fest'
import { getSlotProps } from '../../utils/slots/SlotUtils'
import { TableCellRenderer as DefaultTableCellRenderer } from './TableCellRenderer'

type TrHtmlProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>

type TrOwnerState<TData = unknown, TRowType = Row<TData>> = {
  // The row data
  row: TRowType

  /**
   * Data corresponding to the table row. This may be different from row. E.g., the row may be a pointer to virtualized data.
   * If TRowType is not a Tanstack Table Row, then the rowTransform prop passed to TableBody must convert a row to a tableRow.
   *
   * Note: this may be undefined if the virtualized list has not been populated
   */
  tableRow?: Row<TData>
}

export type TrProps<TData = unknown, TRowType = Row<TData>> = TrHtmlProps &
  TrOwnerState<TData, TRowType>

export type TableBodySlots<TData = unknown, TRowType = Row<TData>> = {
  Tbody?: React.ElementType<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLTableSectionElement>,
      HTMLTableSectionElement
    >
  >
  Tr?: React.ElementType<TrProps<TData, TRowType>>
  TableCellRenderer?: React.ElementType<Cell<TData, unknown>>
}

type TableBodySlotProps<TData = unknown, TRowType = Row<TData>> = {
  Tbody?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  >
  Tr?:
    | Partial<TrProps<TData, TRowType>>
    | ((
        ownerState: TrOwnerState<TData, TRowType>,
      ) => Partial<TrProps<TData, TRowType>>)
}

type TableBodyPropsRowOverride<
  TData = unknown,
  TRowType = Row<TData>,
> = RequireAllOrNone<
  {
    /**
     * The rows that should be rendered. By default,this is the TanStack table rows, but this can be an array of any type.
     * One scenario where this is useful is that this can be a virtualized list of row objects.
     *
     * If TRowType is not a Tanstack Table Row, then the rowTransform prop passed to TableBody must convert a row to a tableRow.
     * */
    rows: TRowType[]

    /**
     * A function that transforms an arbitrary row object to a table row. Required when row data is not the set of TanStack Table Rows.
     * @param row the row object to transform
     * @returns a TanStack Table Row, or undefined if the table row is not yet available (e.g. in a virtualized list where the data has not yet been fetched)
     */
    rowTransform: (row: TRowType) => Row<TData> | undefined
  },
  'rows' | 'rowTransform'
>

// Simple wrapper around 'tr' to prevent forwarding invalid HTML attributes
const TableRow = styled('tr', {
  shouldForwardProp: prop => prop !== 'row' && prop !== 'tableRow',
})({})

export type TableBodyProps<TData = unknown, TRowType = Row<TData>> = {
  /** The table instance */
  table: Table<TData>
  slots?: TableBodySlots<TData, TRowType>
  slotProps?: TableBodySlotProps<TData, TRowType>
} & TableBodyPropsRowOverride<TData, TRowType>

/**
 * A table body component for use with @tanstack/react-table. This component renders the rows of the table.
 * @param props
 * @constructor
 */
export function TableBody<TData = unknown, TRowType = Row<TData>>(
  props: TableBodyProps<TData, TRowType>,
) {
  const { table, slots = {}, slotProps = {} } = props

  // By default, use TanStack Table Rows and the identity function as a transform.
  // This can be overridden e.g. to accomplish row virtualization.
  const {
    rows = table.getRowModel().rows as TRowType[],
    rowTransform = identity,
  } = props

  const {
    Tbody = 'tbody',
    Tr = TableRow,
    TableCellRenderer = DefaultTableCellRenderer<TData>,
  } = slots
  const { Tbody: tbodySlotProps = {}, Tr: _trSlotProps = {} } = slotProps

  return (
    <Tbody {...tbodySlotProps}>
      {rows.map((row, index) => {
        const tableRow: Row<TData> | undefined = rowTransform(row)

        const trOwnerState: TrOwnerState<TData, TRowType> = { row, tableRow }
        const trSlotProps = getSlotProps(_trSlotProps, trOwnerState)

        return (
          <Tr
            key={tableRow?.id ?? index}
            {...trSlotProps}
            row={row}
            tableRow={tableRow}
          >
            {tableRow?.getVisibleCells().map((props, index) => (
              <TableCellRenderer key={index} {...props} />
            ))}
          </Tr>
        )
      })}
    </Tbody>
  )
}

// special memoized wrapper for our table body that we will use during column resizing
// see https://tanstack.com/table/v8/docs/guide/column-sizing#advanced-column-resizing-performance
export const MemoizedTableBody = memo(TableBody, (prev, next) => {
  return prev.table.options.data === next.table.options.data
}) as typeof TableBody
