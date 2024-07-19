import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'

const permissionLevels = [
  'CAN_REVIEW_SUBMISSIONS',
  'IS_EXEMPTION_ELIGIBLE',
  'CAN_REVIEW_SUBMISSIONS_AND_IS_EXEMPTION_ELIGIBLE',
] as const
export type PermissionLevel = (typeof permissionLevels)[number]

const permissionLevelToAccessType: Record<PermissionLevel, ACCESS_TYPE[]> = {
  CAN_REVIEW_SUBMISSIONS: [ACCESS_TYPE.REVIEW_SUBMISSIONS],
  IS_EXEMPTION_ELIGIBLE: [ACCESS_TYPE.EXEMPTION_ELIGIBLE],
  CAN_REVIEW_SUBMISSIONS_AND_IS_EXEMPTION_ELIGIBLE: [
    ACCESS_TYPE.EXEMPTION_ELIGIBLE,
    ACCESS_TYPE.REVIEW_SUBMISSIONS,
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
        permissionLevelToAccessType[key as PermissionLevel],
      )
    )
  })

  return permissionLevel as PermissionLevel
}

export const getAccessTypeFromPermissionLevel = (
  permissionLevel: PermissionLevel,
) => {
  return permissionLevelToAccessType[permissionLevel]
}

export const permissionLevelToLabel: Record<PermissionLevel, string> = {
  CAN_REVIEW_SUBMISSIONS: 'Can Review',
  IS_EXEMPTION_ELIGIBLE: 'Exempt Eligible',
  CAN_REVIEW_SUBMISSIONS_AND_IS_EXEMPTION_ELIGIBLE:
    'Can Review & Exempt Eligible',
}
