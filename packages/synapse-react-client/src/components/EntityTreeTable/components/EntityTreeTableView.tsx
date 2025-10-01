import React from 'react'
import { Table, Row } from '@tanstack/react-table'
import { EntityBundleRow } from '../EntityTreeTable'
import { AutoLoadMore } from './AutoLoadMore'
import { useEntityTreeTableContext } from './EntityTreeTableContext'
import StyledTanStackTable from '../../TanStackTable/StyledTanStackTable'
import { TableCellRenderer } from '../../TanStackTable/TableCellRenderer'
import { TrProps } from '../../TanStackTable/types'

type EntityTreeTableViewProps = {
  table: Table<EntityBundleRow>
}

// Custom table row component to handle load-more rows
const EntityTreeTableRow: React.FC<
  TrProps<EntityBundleRow, Row<EntityBundleRow>>
> = ({ row, tableRow, ...rest }) => {
  const { loadingIds, loadMoreChildren } = useEntityTreeTableContext()

  if (!tableRow) return null

  const original = tableRow.original
  if (original.isLoadMore) {
    const colCount = tableRow.getAllCells().length
    const isLoading = loadingIds.has(original.parentId!)

    return (
      <tr {...rest}>
        <td colSpan={colCount}>
          <AutoLoadMore
            depth={original.depth}
            isLoading={isLoading}
            pageToken={original.pageToken}
            onLoadMore={() => {
              loadMoreChildren(original.parentId!, original.pageToken)
            }}
          />
        </td>
      </tr>
    )
  }

  // For normal rows, render cells normally
  return (
    <tr {...rest}>
      {tableRow.getVisibleCells().map(cell => (
        <TableCellRenderer key={cell.id} {...cell} />
      ))}
    </tr>
  )
}

export const EntityTreeTableView: React.FC<EntityTreeTableViewProps> = ({
  table,
}) => {
  return (
    <div style={{ overflowX: 'auto' }}>
      <StyledTanStackTable
        table={table}
        styledTableContainerProps={{
          className: 'entity-tree-table',
        }}
        fullWidth={true}
        slots={{
          Tr: EntityTreeTableRow,
        }}
      />
    </div>
  )
}
