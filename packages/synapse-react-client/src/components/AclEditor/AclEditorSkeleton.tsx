import { Skeleton, Stack } from '@mui/material'
import React from 'react'
import { SkeletonParagraph, SkeletonTable } from '../Skeleton'

export function AclEditorSkeleton(): React.ReactNode {
  return (
    <Stack
      role={'progressbar'}
      sx={{
        gap: 2,
      }}
    >
      <Skeleton height={50} width={200} />
      <SkeletonParagraph numRows={2} />

      <SkeletonTable numCols={2} numRows={4} rowHeight={'30px'} />

      <Skeleton height={50} width={100} />
      <SkeletonParagraph numRows={2} />
    </Stack>
  )
}
