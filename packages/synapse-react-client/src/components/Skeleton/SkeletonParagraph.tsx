import { Fragment, ReactNode, useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton'
import { times } from 'lodash-es'

export type SkeletonParagraphProps = {
  numRows?: number
  rowHeight?: string
  className?: string
}

/**
 * Skeleton component designed to mimic a paragraph.
 */
export function SkeletonParagraph({
  numRows = 5,
  rowHeight,
  className,
}: SkeletonParagraphProps) {
  const [skeletons, setSkeletons] = useState<ReactNode[]>([])

  useEffect(() => {
    const elements: ReactNode[] = []
    times(numRows, i => {
      elements.push(
        <Fragment key={i}>
          <Skeleton
            height={rowHeight}
            width={i === numRows - 1 ? '35%' : '100%'}
          ></Skeleton>
        </Fragment>,
      )
    })
    setSkeletons(elements)
  }, [numRows, rowHeight])

  return <div className={className}>{skeletons}</div>
}
