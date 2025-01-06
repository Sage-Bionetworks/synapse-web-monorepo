import { styled } from '@mui/material'
import { Row, Table } from '@tanstack/react-table'
import { identity } from 'lodash-es'
import { memo } from 'react'
import { getSlotProps } from '../../utils/slots/SlotUtils'
import { TableCellRenderer as DefaultTableCellRenderer } from './TableCellRenderer'
import {
  TableBodyPropsRowOverride,
  TableBodySlotProps,
  TableBodySlots,
  TrOwnerState,
} from './types'

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
