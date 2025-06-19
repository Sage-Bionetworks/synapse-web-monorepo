import Skeleton from '@mui/material/Skeleton'
import { Cell, flexRender } from '@tanstack/react-table'
import ExpandableTableDataCell from '../SynapseTable/ExpandableTableDataCell'
import {
  getColumnSizeCssVariable,
  getCommonPinningStyles,
} from './TanStackTableUtils'

export function TableCellRenderer<T = unknown>(cell: Cell<T, unknown>) {
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
        ...getCommonPinningStyles(cell.column),
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
