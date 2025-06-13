import { Box, Skeleton, Stack } from '@mui/material'

function PiePlotSkeleton() {
  return (
    <Box
      className={'FacetNavPanel'}
      sx={{
        flexGrow: 1,
      }}
    >
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
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 200,
          px: 2,
          minWidth: '435px',
          flexGrow: 1,
        }}
      >
        <Skeleton variant={'circular'} width={140} height={140} />
        <Stack
          sx={{
            gap: 1,
          }}
        >
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
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 4,
      }}
    >
      <PiePlotSkeleton />
      <PiePlotSkeleton />
    </Box>
  )
}
