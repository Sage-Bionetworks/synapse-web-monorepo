import { StyledComponent } from '@emotion/styled'
import { Box, BoxProps, styled } from '@mui/material'
import { chunk } from 'lodash-es'
import { ReactNode } from 'react'

const MAX_ITEMS_PER_ROW = 4

type EvenlyDistributedWrappedContainerProps = {
  children: ReactNode[]
}

const FlexContainer: StyledComponent<BoxProps> = styled(Box)(({ theme }) => ({
  display: 'flex',
  rowGap: theme.spacing(3),
  columnGap: 'min(2%, 16px)',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  '& > *': {
    flexGrow: 0.25,
    flexBasis: '23%',
  },
}))

export function chunkItemsIntoEvenlyDistributedGroups<T = unknown>(
  items: Array<T>,
) {
  if (
    // There are less than 4 items
    items.length < MAX_ITEMS_PER_ROW ||
    // The number of items is divisible by 4
    items.length % MAX_ITEMS_PER_ROW === 0 ||
    // The last chunk has 3 items
    items.length % MAX_ITEMS_PER_ROW === 3
  ) {
    // The first n-1 rows will have 4 items, and the last row will have 3-4 items
    return chunk(items, MAX_ITEMS_PER_ROW)
  }

  if (items.length % MAX_ITEMS_PER_ROW === 2) {
    // All rows will have 4, last 2 rows will have 3 items
    const last2Rows = chunk(items.slice(-6), 3)
    const rest = chunk(items.slice(0, -6), MAX_ITEMS_PER_ROW)
    return [...rest, ...last2Rows]
  }

  if (items.length % MAX_ITEMS_PER_ROW === 1) {
    // All rows will have 4, last 2 rows will have 3 and 2 items respectively
    const last2Rows = chunk(items.slice(-5), 3)
    const rest = chunk(items.slice(0, -5), MAX_ITEMS_PER_ROW)
    return [...rest, ...last2Rows]
  }

  console.error(
    `chunkItemsIntoEvenlyDistributedGroups: Invalid number of items: ${items?.length}`,
  )

  return []
}

/**
 * This component will evenly distribute the children in a wrapped container with a maximum of 4 items per row.
 * If the number of children is not divisible by 4, the last row(s) will have 3 or 2 items. No row will have 1 item
 * (unless only one item is provided). This is not possible with pure CSS flex, so this component will use JavaScript
 * to render the children in chunks.
 *
 * @param props
 * @constructor
 */
export function EvenlyDistributedWrappedContainer(
  props: EvenlyDistributedWrappedContainerProps,
) {
  const { children } = props

  const chunks = chunkItemsIntoEvenlyDistributedGroups(children)

  return chunks.map((row, index) => {
    const spaceRowsSx = index !== chunks.length - 1 ? { mb: 3 } : {}
    return <FlexContainer sx={spaceRowsSx}>{row}</FlexContainer>
  })
}
