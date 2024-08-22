import { Box, Skeleton, Stack } from '@mui/material'
import React from 'react'

function PiePlotSkeleton() {
  return (
    <Box className={'FacetNavPanel'} flexGrow={1}>
      <Box className={'FacetNavPanel__title'}>
        <Skeleton variant={'rectangular'} height={20} width={170} />
        <div style={{ margin: 'auto' }} />
        <Skeleton variant={'rectangular'} height={20} width={20} />
        <Skeleton
          variant={'rectangular'}
          height={20}
          width={20}
          sx={{ ml: 1 }}
        />
      </Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{ minWidth: '435px', flexGrow: 1 }}
        height={200}
        px={2}
      >
        <Skeleton variant={'circular'} width={140} height={140} />
        <Stack gap={1}>
          <Skeleton variant={'rectangular'} height={15} width={220} />
          <Skeleton variant={'rectangular'} height={15} width={220} />
          <Skeleton variant={'rectangular'} height={15} width={220} />
          <Skeleton variant={'rectangular'} height={15} width={220} />
        </Stack>
      </Box>
    </Box>
  )
}

export function PlotsContainerSkeleton() {
  return (
    <Box
      className={'PlotsContainer'}
      display={'flex'}
      flexWrap={'wrap'}
      justifyContent={'space-between'}
      gap={4}
    >
      <PiePlotSkeleton />
      <PiePlotSkeleton />
    </Box>
  )
}
