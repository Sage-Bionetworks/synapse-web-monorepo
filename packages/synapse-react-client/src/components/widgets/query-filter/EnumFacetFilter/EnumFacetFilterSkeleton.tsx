import { FacetFilterSkeleton } from '../FacetFilterSkeleton'
import Skeleton from '@mui/material/Skeleton'
import { EnumFacetFilterUIProps } from './EnumFacetFilterUI'

export function EnumFacetFilterSkeleton(
  props: Pick<EnumFacetFilterUIProps, 'containerAs' | 'dropdownType'>,
) {
  const { containerAs = 'Collapsible', dropdownType = 'Icon' } = props
  if (containerAs === 'Collapsible') {
    return <FacetFilterSkeleton />
  } else {
    // containerAs is 'Dropdown'
    if (dropdownType === 'Icon') {
      return <Skeleton variant={'rectangular'} width={25} height={25} />
    } else {
      return <Skeleton variant={'rectangular'} width={100} height={25} />
    }
  }
}
