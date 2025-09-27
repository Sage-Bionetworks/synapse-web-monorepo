import React from 'react'
import { flexRender, Table } from '@tanstack/react-table'
import { EntityBundleRow } from '../EntityTreeTable'
import { AutoLoadMore } from './AutoLoadMore'
import { useEntityTreeTableContext } from './EntityTreeTableContext'

type EntityTreeTableViewProps = {
  table: Table<EntityBundleRow>
}

export const EntityTreeTableView: React.FC<EntityTreeTableViewProps> = ({
  table,
}) => {
  const { loadingIds, loadMoreChildren, nextPageTokens } =
    useEntityTreeTableContext()

  return (
    <div style={{ overflowX: 'auto' }}>
      <table className="entity-tree-table">
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => {
            const original = row.original
            if (original.isLoadMore) {
              const colCount = table.getAllColumns().length
              const isLoading = loadingIds.has(original.parentId!)

              return (
                <tr key={row.id}>
                  <td colSpan={colCount}>
                    <AutoLoadMore
                      depth={original.depth}
                      isLoading={isLoading}
                      onLoadMore={() => {
                        loadMoreChildren(
                          original.parentId!,
                          nextPageTokens[original.parentId!],
                        )
                      }}
                    />
                  </td>
                </tr>
              )
            }
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
