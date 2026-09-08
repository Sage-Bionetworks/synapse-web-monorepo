import { truncateString } from '@/utils/functions/StringUtils'
import {
  Breadcrumbs as MuiBreadcrumbs,
  Link,
  SxProps,
  Tooltip,
  Typography,
  Box,
} from '@mui/material'
import { MouseEventHandler } from 'react'
import { Link as RouterLink } from 'react-router'

export type BreadcrumbItem = {
  /* The text to show in the breadcrumb item. Strings > 25 characters will be truncated */
  text: string
  /* Whether this item represents the current page. If true, this item will not have a link. Default false */
  current?: boolean
  /* Link for the item, if using react-router */
  to?: string
  /* Link for the item, if it should be a normal anchor */
  href?: string
  /* Event handler fired when the link is clicked */
  onClick?: MouseEventHandler
}

type BreadcrumbsProps = {
  /** The items to show in the breadcrumbs */
  items: BreadcrumbItem[]
  /** sx passed to the MUI Breadcrumbs */
  sx?: SxProps
  /** If defined, truncate individual item strings to be no longer than this value */
  maxBreadcrumbLength?: number
  iconVariant?: 'twoTone' | 'outlined'
}

const BREADCRUMB_SEPARATOR = (
  <Box
    sx={{
      color: 'grey.400',
    }}
  >
    /
  </Box>
)

export function Breadcrumbs(props: BreadcrumbsProps) {
  const { items, sx, maxBreadcrumbLength } = props
  return (
    <MuiBreadcrumbs
      separator={BREADCRUMB_SEPARATOR}
      itemsBeforeCollapse={2}
      itemsAfterCollapse={2}
      sx={sx}
    >
      {items.map((data, index) => {
        let displayedText = data.text
        if (maxBreadcrumbLength) {
          displayedText = truncateString(data.text, maxBreadcrumbLength)
        }

        const tooltipText = displayedText !== data.text ? data.text : null
        return (
          <Box
            sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            key={index}
          >
            <Tooltip title={tooltipText} placement="top">
              <Typography variant={'breadcrumb1'}>
                {data.current ? (
                  displayedText
                ) : (
                  <Link
                    component={data.to ? RouterLink : Link}
                    to={data.to}
                    href={data.href}
                    onClick={data.onClick}
                    underline="hover"
                  >
                    {displayedText}
                  </Link>
                )}
              </Typography>
            </Tooltip>
          </Box>
        )
      })}
    </MuiBreadcrumbs>
  )
}

export default Breadcrumbs
