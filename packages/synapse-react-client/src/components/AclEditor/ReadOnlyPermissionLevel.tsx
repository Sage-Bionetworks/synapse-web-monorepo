import {
  getPermissionLevelFromAccessType,
  permissionLevelToLabel,
} from '@/utils/PermissionLevelToAccessType'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'

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
