import { Box, SxProps } from '@mui/material'
import React from 'react'

export type SynapsePriceTableCellProps = {
  sx?: SxProps
  role?: string
}

export const SynapsePriceTableCell: React.FunctionComponent<
  React.PropsWithChildren<SynapsePriceTableCellProps>
> = ({ children, sx = {}, role = 'cell' }) => {
  return (
    <Box
      sx={{
        ...sx,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span role={role}>{children}</span>
    </Box>
  )
}
