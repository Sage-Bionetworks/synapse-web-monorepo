import Button from '@mui/material/Button'
import Skeleton from '@mui/material/Skeleton'

type SkeletonButtonProps = { placeholderText?: string }

/**
 * Skeleton of a MUI button. The `placeholderText` prompt can be used to customise the length to roughly match the existing button
 */
export function SkeletonButton({
  placeholderText = 'Placeholder',
}: SkeletonButtonProps) {
  return (
    <Skeleton variant="rectangular">
      <Button>{placeholderText}</Button>
    </Skeleton>
  )
}
