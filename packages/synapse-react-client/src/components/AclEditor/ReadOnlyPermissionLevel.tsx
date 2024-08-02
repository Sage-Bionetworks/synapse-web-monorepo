import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import {
  getPermissionLevelFromAccessType,
  permissionLevelToLabel,
} from '../../utils/PermissionLevelToAccessType'

export type ReadOnlyPermissionLevelProps = {
  accessType: ACCESS_TYPE[]
}

export function ReadOnlyPermissionLevel(props: ReadOnlyPermissionLevelProps) {
  const { accessType } = props

  return (
    permissionLevelToLabel[getPermissionLevelFromAccessType(accessType)] ||
    'Custom'
  )
}
