import React from 'react'
import { HeaderContext } from '@tanstack/react-table'
import { EntityBundleRow } from '../EntityTreeTable'
import ColumnHeader from '../../TanStackTable/ColumnHeader'
import { CopyToClipboardIcon } from '../../CopyToClipboardIcon'

export const IdColumnHeader: React.FC<
  HeaderContext<EntityBundleRow, unknown>
> = props => {
  const { table } = props

  // Get all visible rows and extract their entity IDs
  const getVisibleIds = () => {
    const visibleRows = table.getRowModel().rows
    return visibleRows
      .filter(row => !row.original.isLoadMore) // Exclude "Load More" rows
      .map(row => row.original.entityId)
      .join('\n')
  }

  const copyButton = <CopyToClipboardIcon value={getVisibleIds()} sizePx={16} />

  return <ColumnHeader {...props} title="ID" additionalButtons={copyButton} />
}
