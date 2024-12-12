import { Breadcrumbs, Link, SxProps, Tooltip, Typography } from '@mui/material'
import { MouseEventHandler } from 'react'
import IconSvg from '../../../IconSvg/IconSvg'
import { truncateString } from '../../../../utils/functions/StringUtils'

type BreadcrumbItem = {
  /* The text to show in the breadcrumb item. Strings > 25 characters will be truncated */
  text: string
  /* Whether this item represents the current page. If true, this item will not have a link. Default false */
  current?: boolean
  /* Link for the item */
  href?: string
  /* Event handler fired when the link is clicked */
  onClick?: MouseEventHandler
}

type EntityPageBreadcrumbsProps = {
  items: BreadcrumbItem[]
}

const MAX_BREADCRUMB_LENGTH = 32

function BreadcrumbSeparator() {
  return <IconSvg icon="chevronRight" sx={{ color: 'grey.500' }} />
}

const breadcrumbStyle: SxProps = {
  marginTop: '0px',
  padding: '10px 40px',
  backgroundColor: 'grey.200',
}

const linkStyle: SxProps = {
  color: 'text.secondary',
  letterSpacing: 0,
  '&:visited': {
    color: 'text.secondary',
  },
}

export default function EntityPageBreadcrumbs(
  props: EntityPageBreadcrumbsProps,
) {
  const { items } = props
  return (
    <Breadcrumbs
      separator={<BreadcrumbSeparator />}
      itemsBeforeCollapse={2}
      itemsAfterCollapse={2}
      sx={breadcrumbStyle}
    >
      {items.map((data, index) => {
        const displayedText = truncateString(data.text, MAX_BREADCRUMB_LENGTH)
        const tooltipText = displayedText !== data.text ? data.text : null
        return (
          <Tooltip key={index} title={tooltipText} placement="top">
            <Typography variant={'breadcrumb1'}>
              {data.current ? (
                displayedText
              ) : (
                <Link
                  key={index}
                  href={data.href}
                  onClick={data.onClick}
                  underline="hover"
                  sx={linkStyle}
                >
                  {displayedText}
                </Link>
              )}
            </Typography>
          </Tooltip>
        )
      })}
    </Breadcrumbs>
  )
}
