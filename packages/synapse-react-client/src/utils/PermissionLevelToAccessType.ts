import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'

export enum PermissionLevelEnum {
  CAN_REVIEW_SUBMISSIONS = 'Can review',
  EXEMPTION_ELIGIBLE = 'Exempt eligible',
  CAN_REVIEW_AND_EXEMPTION_ELIGIBLE = 'Can review & exempt eligible',
}

const permissionLevelToAccessType: Record<PermissionLevelEnum, ACCESS_TYPE[]> =
  {
    [PermissionLevelEnum.CAN_REVIEW_SUBMISSIONS]: [
      ACCESS_TYPE.REVIEW_SUBMISSIONS,
    ],
    [PermissionLevelEnum.EXEMPTION_ELIGIBLE]: [ACCESS_TYPE.EXEMPTION_ELIGIBLE],
    [PermissionLevelEnum.CAN_REVIEW_AND_EXEMPTION_ELIGIBLE]: [
      ACCESS_TYPE.REVIEW_SUBMISSIONS,
      ACCESS_TYPE.EXEMPTION_ELIGIBLE,
    ],
  }

const prepAccessTypeForComparison = (accessType: ACCESS_TYPE[]) => {
  return JSON.stringify(accessType.sort())
}

export const getPermissionLevelFromAccessType = (accessType: ACCESS_TYPE[]) => {
  const lookupValue = prepAccessTypeForComparison(accessType)
  const permissionLevel = Object.keys(permissionLevelToAccessType).find(key => {
    return (
      lookupValue ===
      prepAccessTypeForComparison(
        permissionLevelToAccessType[key as PermissionLevelEnum],
      )
    )
  })

  return permissionLevel
}

export const getAccessTypeFromPermissionLevel = (
  permissionLevel: PermissionLevelEnum,
) => {
  return permissionLevelToAccessType[permissionLevel]
}
