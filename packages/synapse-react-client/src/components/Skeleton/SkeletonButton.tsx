import React from 'react'
import { Button, Skeleton } from '@mui/material'

/**
 * Skeleton of a MUI button. The `placeholderText` prompt can be used to customise the length to roughly match the existing button
 */
export const SkeletonButton: React.FC<{ placeholderText?: string }> = ({
  placeholderText = 'Placeholder',
}) => {
  return (
    <Skeleton variant="rectangular">
      <Button>{placeholderText}</Button>
    </Skeleton>
  )
}
