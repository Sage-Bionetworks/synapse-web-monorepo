import React from 'react'
import { Skeleton, Stack } from '@mui/material'
import { SkeletonParagraph, SkeletonTable } from '../Skeleton'

export function AclEditorSkeleton() {
  return (
    <Stack gap={2} role={'progressbar'}>
      <Skeleton height={50} width={200} />
      <SkeletonParagraph numRows={2} />

      <SkeletonTable numCols={2} numRows={4} rowHeight={'30px'} />

      <Skeleton height={50} width={100} />
      <SkeletonParagraph numRows={2} />
    </Stack>
  )
}
