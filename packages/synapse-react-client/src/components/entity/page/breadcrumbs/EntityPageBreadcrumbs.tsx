import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs'
import { SxProps } from '@mui/material'
import { MouseEventHandler } from 'react'

type BreadcrumbItem = {
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

type EntityPageBreadcrumbsProps = {
  items: BreadcrumbItem[]
  sx?: SxProps
}

const ENTITY_PAGE_MAX_BREADCRUMB_LENGTH = 32

const entityPageBreadcrumbStyle: SxProps = {
  marginTop: '0px',
  padding: '10px 40px',
  backgroundColor: 'grey.200',
  ['& .MuiLink-root']: {
    color: 'text.secondary',
    letterSpacing: 0,
    '&:visited': {
      color: 'text.secondary',
    },
  },
  '& .MuiSvgIcon-root': {
    color: 'grey.500',
  },
}

export default function EntityPageBreadcrumbs(
  props: EntityPageBreadcrumbsProps,
) {
  const { items } = props
  return (
    <Breadcrumbs
      items={items}
      sx={entityPageBreadcrumbStyle}
      maxBreadcrumbLength={ENTITY_PAGE_MAX_BREADCRUMB_LENGTH}
    />
  )
}
