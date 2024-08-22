import { Box, Skeleton, Stack } from '@mui/material'
import React from 'react'

export function FacetFilterSkeleton() {
  const facetFilterFormRow = (
    <Stack direction={'row'} gap={'10px'} sx={{ my: 1 }}>
      <Skeleton width={'15px'} />
      <Skeleton width={'40%'} />
    </Stack>
  )
  return (
    <Box className={'FacetFilterControls__facet'}>
      <Box className={'FacetFilterHeader'}>
        <Skeleton width={'100%'} />
      </Box>
      <Box>
        {facetFilterFormRow}
        {facetFilterFormRow}
        {facetFilterFormRow}
      </Box>
    </Box>
  )
}

export function FacetFilterControlsSkeleton() {
  return (
    <div className={`FacetFilterControls`}>
      <FacetFilterSkeleton />
      <FacetFilterSkeleton />
      <FacetFilterSkeleton />
      <FacetFilterSkeleton />
    </div>
  )
}
