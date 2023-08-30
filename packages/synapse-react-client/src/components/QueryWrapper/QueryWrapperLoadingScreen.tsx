import { useAtomValue } from 'jotai'
import { Box, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import { useQueryContext } from '../QueryContext'
import { isLoadingNewBundleAtom, tableQueryDataAtom } from './QueryWrapper'

export default function QueryWrapperLoadingScreen() {
  const { asyncJobStatus } = useQueryContext()
  const isLoadingNewBundle = useAtomValue(isLoadingNewBundleAtom)
  const data = useAtomValue(tableQueryDataAtom)
  if (data || !isLoadingNewBundle) {
    return <></>
  }
  return (
    <Box sx={{ mt: 15, mx: 15 }}>
      <LinearProgress />
      {asyncJobStatus?.progressMessage && (
        <Typography
          variant={'smallText1'}
          sx={{
            color: 'grey.600',
            fontSize: '10px',
            textAlign: 'center',
            my: 1,
          }}
        >
          {asyncJobStatus?.progressMessage}
        </Typography>
      )}
    </Box>
  )
}
