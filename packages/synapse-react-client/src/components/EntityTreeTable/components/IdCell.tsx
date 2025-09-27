import React from 'react'
import { CellContext } from '@tanstack/react-table'
import { EntityBundleRow } from '../EntityTreeTable'
import { Typography } from '@mui/material'

export const IdCell: React.FC<CellContext<EntityBundleRow, unknown>> = ({
  row,
}) => {
  const { entityId } = row.original
  return <Typography variant="body1">{entityId}</Typography>
}
