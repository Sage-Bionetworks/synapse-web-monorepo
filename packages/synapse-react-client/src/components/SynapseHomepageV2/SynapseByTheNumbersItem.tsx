import { Box, Typography } from '@mui/material'
import React, { ReactElement } from 'react'

export type SynapseByTheNumbersItemProps = {
  title: string
  description: string
  plot: ReactElement
}

export const SynapseByTheNumbersItem: React.FunctionComponent<
  SynapseByTheNumbersItemProps
> = ({ title, description, plot }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        p: '20px',
      }}
    >
      <Box>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '40px',
            color: 'white',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '24px',
            color: 'white',
          }}
        >
          {description}
        </Typography>
      </Box>
      {plot}
    </Box>
  )
}
