import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'

const entityPermissionLevels = [
  'CAN_VIEW',
  'CAN_DOWNLOAD',
  'CAN_EDIT',
  'CAN_EDIT_DELETE',
  'CAN_ADMINISTER',
] as const
export type EntityPermissionsLevel = (typeof entityPermissionLevels)[number]

const accessRequirementPermissionLevels = [
  'CAN_REVIEW_SUBMISSIONS',
  'IS_EXEMPTION_ELIGIBLE',
  'CAN_REVIEW_SUBMISSIONS_AND_IS_EXEMPTION_ELIGIBLE',
] as const

export type AccessRequirementPermissionsLevel =
  (typeof accessRequirementPermissionLevels)[number]

const oauthClientPermissionLevels = ['CAN_ADMINISTER_OAUTH_CLIENT'] as const

export type OAuthClientPermissionsLevel =
  (typeof oauthClientPermissionLevels)[number]

export type PermissionLevel =
  | EntityPermissionsLevel
  | AccessRequirementPermissionsLevel
  | OAuthClientPermissionsLevel

const permissionLevelToAccessType: Record<PermissionLevel, ACCESS_TYPE[]> = {
  // Entity
  CAN_VIEW: [ACCESS_TYPE.READ],
  CAN_DOWNLOAD: [ACCESS_TYPE.READ, ACCESS_TYPE.DOWNLOAD],
  CAN_EDIT: [
    ACCESS_TYPE.CREATE,
    ACCESS_TYPE.READ,
    ACCESS_TYPE.DOWNLOAD,
    ACCESS_TYPE.UPDATE,
  ],
  CAN_EDIT_DELETE: [
    ACCESS_TYPE.CREATE,
    ACCESS_TYPE.READ,
    ACCESS_TYPE.DOWNLOAD,
    ACCESS_TYPE.UPDATE,
    ACCESS_TYPE.DELETE,
  ],
  CAN_ADMINISTER: [
    ACCESS_TYPE.READ,
    ACCESS_TYPE.DOWNLOAD,
    ACCESS_TYPE.UPDATE,
    ACCESS_TYPE.DELETE,
    ACCESS_TYPE.CREATE,
    ACCESS_TYPE.CHANGE_PERMISSIONS,
    ACCESS_TYPE.CHANGE_SETTINGS,
    ACCESS_TYPE.MODERATE,
  ],

  // Access Requirements
  CAN_REVIEW_SUBMISSIONS: [ACCESS_TYPE.REVIEW_SUBMISSIONS],
  IS_EXEMPTION_ELIGIBLE: [ACCESS_TYPE.EXEMPTION_ELIGIBLE],
  CAN_REVIEW_SUBMISSIONS_AND_IS_EXEMPTION_ELIGIBLE: [
    ACCESS_TYPE.EXEMPTION_ELIGIBLE,
    ACCESS_TYPE.REVIEW_SUBMISSIONS,
  ],
  CAN_ADMINISTER_OAUTH_CLIENT: [
    ACCESS_TYPE.READ,
    ACCESS_TYPE.CHANGE_PERMISSIONS,
    ACCESS_TYPE.DELETE,
    ACCESS_TYPE.UPDATE,
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
  // Entity
  CAN_VIEW: 'Can view',
  CAN_DOWNLOAD: 'Can download',
  CAN_EDIT: 'Can edit',
  CAN_EDIT_DELETE: 'Can edit & delete',
  CAN_ADMINISTER: 'Administrator',

  // Access requirement
  CAN_REVIEW_SUBMISSIONS: 'Can Review',
  IS_EXEMPTION_ELIGIBLE: 'Exempt Eligible',
  CAN_REVIEW_SUBMISSIONS_AND_IS_EXEMPTION_ELIGIBLE:
    'Can Review & Exempt Eligible',

  // OAuth Client
  CAN_ADMINISTER_OAUTH_CLIENT: 'Administrator',
}
