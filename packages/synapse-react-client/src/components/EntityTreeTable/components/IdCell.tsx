import React from 'react'
import { CellContext } from '@tanstack/react-table'
import { EntityBundleRow } from '../EntityTreeTable'
import { Typography } from '@mui/material'

export const IdCell: React.FC<CellContext<EntityBundleRow, unknown>> = ({
  row,
}) => {
  const { entityId, isLoadMore } = row.original
  // Don't show anything for load more rows
  if (isLoadMore) {
    return null
  }
  return <Typography variant="body1">{entityId}</Typography>
}
