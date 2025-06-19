import { Fragment, useEffect, useState } from 'react'
import Skeleton from '@mui/material/Skeleton'
import { times } from 'lodash-es'
import Box from '@mui/material/Box'
import { BoxProps } from '@mui/material/Box'

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min)
}

export type SkeletonTableProps = BoxProps & {
  numRows?: number
  numCols?: number
  rowHeight?: string
  fullWidthCells?: boolean
}

/**
 * Skeleton component designed to mimic a table with an arbitrary number of rows and columns.
 *
 * Implemented using CSS grid.
 */
export function SkeletonTable(props: SkeletonTableProps) {
  const {
    numRows = 5,
    numCols = 2,
    rowHeight,
    fullWidthCells = false,
    ...boxProps
  } = props
  const [skeletons, setSkeletons] = useState<JSX.Element[]>([])

  useEffect(() => {
    const elements: JSX.Element[] = []
    times(numRows * numCols, i => {
      elements.push(
        <Fragment key={i}>
          <Skeleton
            height={rowHeight}
            width={fullWidthCells ? '100%' : `${getRandomInt(35, 75)}%`}
          ></Skeleton>
        </Fragment>,
      )
    })
    setSkeletons(elements)
  }, [numRows, numCols, rowHeight, fullWidthCells])

  return (
    <Box
      {...boxProps}
      sx={{
        display: 'grid',
        gridTemplateColumns: `auto `.repeat(numCols),
        gap: '8px',
        ...boxProps.sx,
      }}
    >
      {skeletons}
    </Box>
  )
}
