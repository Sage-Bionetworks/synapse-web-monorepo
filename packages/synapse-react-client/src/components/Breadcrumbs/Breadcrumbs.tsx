import IconSvg from '@/components/IconSvg/IconSvg'
import { truncateString } from '@/utils/functions/StringUtils'
import MuiBreadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import { SxProps } from '@mui/material/styles'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
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
}

function BreadcrumbSeparator() {
  return <IconSvg icon="chevronRight" />
}

export function Breadcrumbs(props: BreadcrumbsProps) {
  const { items, sx, maxBreadcrumbLength } = props
  return (
    <MuiBreadcrumbs
      separator={<BreadcrumbSeparator />}
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
          <Tooltip key={index} title={tooltipText} placement="top">
            <Typography variant={'breadcrumb1'}>
              {data.current ? (
                displayedText
              ) : (
                <Link
                  component={data.to ? RouterLink : Link}
                  to={data.to}
                  key={index}
                  href={data.href}
                  onClick={data.onClick}
                  underline="hover"
                >
                  {displayedText}
                </Link>
              )}
            </Typography>
          </Tooltip>
        )
      })}
    </MuiBreadcrumbs>
  )
}

export default Breadcrumbs
