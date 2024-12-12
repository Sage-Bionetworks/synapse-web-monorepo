import Skeleton, { SkeletonProps } from '@mui/material/Skeleton'

/**
 * Skeleton with a display value of `inline-block`. MUI applies `display: block` with high specificity, so it's easiest to just apply the style to the component.
 */
export function SkeletonInlineBlock(props: SkeletonProps) {
  return (
    <Skeleton
      style={{ ...props.style, display: 'inline-block' }}
      {...props}
    ></Skeleton>
  )
}
