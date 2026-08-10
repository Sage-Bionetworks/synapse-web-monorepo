import {
  Breadcrumbs,
  BreadcrumbItem,
} from '@/components/Breadcrumbs/Breadcrumbs'
import { SxProps } from '@mui/material'

type EntityPageBreadcrumbsProps = {
  items: BreadcrumbItem[]
  sx?: SxProps
}

const ENTITY_PAGE_MAX_BREADCRUMB_LENGTH = 32

const breadcrumbTextStyle: SxProps = {
  fontWeight: 440,
  lineHeight: '20px',
  color: 'redesignGrey.800',
}

const entityPageBreadcrumbStyle: SxProps = {
  marginTop: '0px',
  padding: '20px 32px',
  ['& .MuiTypography-root']: breadcrumbTextStyle,
  ['& .MuiLink-root']: {
    '&:visited': {
      color: 'redesignGrey.800',
    },
  },
  ['& .MuiSvgIcon-root']: {
    fontWeight: '300',
    color: 'redesignGrey.800',
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
      iconVariant="outlined"
    />
  )
}
