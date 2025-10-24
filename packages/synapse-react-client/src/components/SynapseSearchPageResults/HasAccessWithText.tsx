import HasAccessV2, { useGetRestrictionUiType } from '../HasAccess/HasAccessV2'
import { RestrictionUiType } from '../HasAccess/AccessIcon'
import styles from './HasAccessWithText.module.css'

export interface HasAccessWithTextProps {
  entityId: string
  size?: 'normal' | 'small'
}

export function HasAccessWithText({
  entityId,
  size = 'normal',
}: HasAccessWithTextProps) {
  const restrictionUiType = useGetRestrictionUiType(entityId, {
    enabled: false,
  })

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
      default:
        return ''
    }
  }

  const chipClassName =
    size === 'small'
      ? `${styles.hasAccessChip} ${styles.small}`
      : styles.hasAccessChip

  return (
    <div className={chipClassName}>
      <HasAccessV2
        entityId={entityId}
        showButtonText={false}
        className={styles.hasAccessIcon}
      />
      <span className={styles.hasAccessText}>{getAccessText()}</span>
    </div>
  )
}

export default HasAccessWithText
