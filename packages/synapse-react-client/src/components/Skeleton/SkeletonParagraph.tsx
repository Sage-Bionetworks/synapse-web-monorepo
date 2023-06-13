import React, { useEffect, useState } from 'react'
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
export const SkeletonParagraph: React.FC<SkeletonParagraphProps> = ({
  numRows = 5,
  rowHeight,
  className,
}) => {
  const [skeletons, setSkeletons] = useState<JSX.Element[]>([])

  useEffect(() => {
    const elements: JSX.Element[] = []
    times(numRows, i => {
      elements.push(
        <React.Fragment key={i}>
          <Skeleton
            height={rowHeight}
            width={i === numRows - 1 ? '35%' : '100%'}
          ></Skeleton>
        </React.Fragment>,
      )
    })
    setSkeletons(elements)
  }, [numRows, rowHeight])

  return <div className={className}>{skeletons}</div>
}
