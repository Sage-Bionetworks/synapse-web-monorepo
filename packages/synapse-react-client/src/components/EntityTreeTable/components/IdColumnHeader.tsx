import React, { useMemo } from 'react'
import { HeaderContext } from '@tanstack/react-table'
import { EntityBundleRow } from '../EntityTreeTable'
import ColumnHeader from '../../TanStackTable/ColumnHeader'
import { CopyToClipboardIcon } from '../../CopyToClipboardIcon'

export const IdColumnHeader: React.FC<
  HeaderContext<EntityBundleRow, unknown>
> = props => {
  const { table } = props

  // Get all visible rows and extract their entity IDs
  const visibleIds = useMemo(() => {
    const visibleRows = table.getRowModel().rows
    return visibleRows
      .filter(row => !row.original.isLoadMore && row.original.entityId) // Exclude "Load More" rows and rows without entityId
      .map(row => row.original.entityId)
      .join('\n')
  }, [table.getRowModel().rows])

  const copyButton = <CopyToClipboardIcon value={visibleIds} sizePx={16} />

  return <ColumnHeader {...props} title="ID" additionalButtons={copyButton} />
}
