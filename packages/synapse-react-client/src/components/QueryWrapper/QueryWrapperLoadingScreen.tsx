import { Box, LinearProgress, Typography } from '@mui/material'
import React from 'react'

type QueryWrapperLoadingScreenProps = { progressMessage?: string }

export default function QueryWrapperLoadingScreen(
  props: QueryWrapperLoadingScreenProps,
) {
  const { progressMessage } = props
  return (
    <Box sx={{ my: 7.5, mx: 15 }}>
      <LinearProgress />
      {progressMessage && (
        <Typography
          variant={'smallText1'}
          sx={{
            color: 'grey.600',
            fontSize: '10px',
            textAlign: 'center',
            my: 1,
          }}
        >
          {progressMessage}
        </Typography>
      )}
    </Box>
  )
}
