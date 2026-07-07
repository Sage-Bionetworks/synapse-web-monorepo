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
const ENTITY_PAGE_TEXT_COLOR = '#4D535A'

const breadcrumbTextStyle: SxProps = {
  fontWeight: 440,
  lineHeight: '20px',
  color: ENTITY_PAGE_TEXT_COLOR,
}

const entityPageBreadcrumbStyle: SxProps = {
  marginTop: '0px',
  padding: '10px 32px',
  ['& .MuiTypography-root']: breadcrumbTextStyle,
  ['& .MuiLink-root']: {
    '&:visited': {
      color: ENTITY_PAGE_TEXT_COLOR,
    },
  },
  ['& .MuiSvgIcon-root']: {
    fontWeight: '300',
    color: ENTITY_PAGE_TEXT_COLOR,
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
