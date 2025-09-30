import React from 'react'
import { Table, Row, flexRender } from '@tanstack/react-table'
import { EntityBundleRow } from '../EntityTreeTable'
import { AutoLoadMore } from './AutoLoadMore'
import { useEntityTreeTableContext } from './EntityTreeTableContext'
import StyledTanStackTable from '../../TanStackTable/StyledTanStackTable'
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
        <td
          key={cell.id}
          style={{ width: `calc(var(--col-${cell.column.id}-size) * 1px)` }}
        >
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
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
