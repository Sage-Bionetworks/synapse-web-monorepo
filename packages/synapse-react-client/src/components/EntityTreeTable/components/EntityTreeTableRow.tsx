import React from 'react'
import { Row } from '@tanstack/react-table'
import { EntityBundleRow } from '../EntityTreeTable'
import { AutoLoadMore } from './AutoLoadMore'
import { useEntityTreeTableContext } from './EntityTreeTableContext'
import { TableCellRenderer } from '../../TanStackTable/TableCellRenderer'
import { TrProps } from '../../TanStackTable/types'

export type EntityTreeTableRowProps = TrProps<
  EntityBundleRow,
  Row<EntityBundleRow>
>

// Custom table row component to handle load-more rows
export const EntityTreeTableRow: React.FC<EntityTreeTableRowProps> = ({
  row,
  tableRow,
  ...rest
}) => {
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
