import { Box, SxProps } from '@mui/material'
import React from 'react'

export type SynapsePriceTableCellProps = {
  sx?: SxProps
}

export const SynapsePriceTableCell: React.FunctionComponent<
  React.PropsWithChildren<SynapsePriceTableCellProps>
> = ({ children, sx = {} }) => {
  return (
    <Box
      sx={{
        ...sx,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
    </Box>
  )
}
