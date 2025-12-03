import {
  getPermissionLevelFromAccessType,
  permissionLevelToLabel,
} from '@/utils/PermissionLevelToAccessType'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import React from 'react'

export type ReadOnlyPermissionLevelProps = {
  accessType: ACCESS_TYPE[]
}

export function ReadOnlyPermissionLevel(
  props: ReadOnlyPermissionLevelProps,
): string {
  const { accessType } = props

  return (
    permissionLevelToLabel[getPermissionLevelFromAccessType(accessType)] ||
    'Custom'
  )
}
