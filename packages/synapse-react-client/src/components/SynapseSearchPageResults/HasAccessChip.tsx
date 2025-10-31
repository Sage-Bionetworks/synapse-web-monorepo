import { RestrictionUiType } from '../HasAccess/AccessIcon'
import { useGetRestrictionUiType, HasAccessV2 } from '../HasAccess/HasAccessV2'
import { Chip } from '@mui/material'

export interface HasAccessWithTextProps {
  entityId: string
  size?: 'normal' | 'small'
}

export function HasAccessChip({
  entityId,
  size = 'normal',
}: HasAccessWithTextProps) {
  const restrictionUiType = useGetRestrictionUiType(entityId, { enabled: true })

  const getAccessText = () => {
    switch (restrictionUiType) {
      case RestrictionUiType.Accessible:
        return 'Open Access'
      case RestrictionUiType.AccessibleWithTerms:
        return 'View Terms'
      case RestrictionUiType.AccessBlockedByRestriction:
        return 'Request Access'
      case RestrictionUiType.AccessBlockedByACL:
        return 'Access Denied'
      case RestrictionUiType.AccessBlockedToAnonymous:
        return 'Sign In Required'
      case RestrictionUiType.AccessibleExternalFileHandle:
        return 'External Access'
      case undefined:
        return 'Loading...'
      default:
        return ''
    }
  }

  if (!restrictionUiType) {
    return null
  }
  return (
    <Chip
      label={getAccessText()}
      icon={HasAccessV2({ entityId, showButtonText: false })}
      style={{ color: 'inherit' }}
      sx={{
        backgroundColor: '#DAE9E7',
        color: '#265149',
        fontSize: '14px',
        textTransform: 'capitalize',
      }}
    />
  )
}

export default HasAccessChip
