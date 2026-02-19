import {
  ACCESS_TYPE,
  ResourceAccess,
  UserGroupHeader,
} from '@sage-bionetworks/synapse-types'

/**
 * Utility type to combine a ResourceAccess and the associated UserGroupHeader for that principalId.
 * This allows us to easily sort the ResourceAccess list by the name of the user or team.
 */
export type ResourceAccessAndUserGroupHeader = {
  resourceAccess: ResourceAccess
  userGroupHeader: UserGroupHeader
}

/**
 * Comparator for ResourceAccess list. Sorts by the following criteria:
 * 1. Users or teams with the CHANGE_PERMISSIONS permission should be at the top, sorted alphabetically by username
 * 2. The authenticated group (all users signed in to Synapse)
 * 3. The public group (all users signed in to Synapse, and 'anonymous')
 * 4. All other users or teams, sorted alphabetically by username
 */
export function compareResourceAccessAndUserGroupHeader(
  a: ResourceAccessAndUserGroupHeader,
  b: ResourceAccessAndUserGroupHeader,
  authenticatedPrincipalId?: string,
  publicPrincipalId?: string,
): number {
  enum CompareResult {
    A_FIRST = -1,
    B_FIRST = 1,
  }

  const hasChangePermissionA = a.resourceAccess.accessType.includes(
    ACCESS_TYPE.CHANGE_PERMISSIONS,
  )
  const hasChangePermissionB = b.resourceAccess.accessType.includes(
    ACCESS_TYPE.CHANGE_PERMISSIONS,
  )

  if (hasChangePermissionA && !hasChangePermissionB)
    return CompareResult.A_FIRST
  if (!hasChangePermissionA && hasChangePermissionB)
    return CompareResult.B_FIRST

  // Both have CHANGE_PERMISSIONS or neither have it, proceed with other checks

  // AUTHENTICATED group always appears before PUBLIC group
  if (
    authenticatedPrincipalId &&
    String(a.resourceAccess.principalId) === authenticatedPrincipalId &&
    String(b.resourceAccess.principalId) !== authenticatedPrincipalId
  )
    return CompareResult.A_FIRST
  if (
    authenticatedPrincipalId &&
    String(a.resourceAccess.principalId) !== authenticatedPrincipalId &&
    String(b.resourceAccess.principalId) === authenticatedPrincipalId
  )
    return CompareResult.B_FIRST

  // PUBLIC group always appears before other users / teams
  if (
    publicPrincipalId &&
    String(a.resourceAccess.principalId) === publicPrincipalId &&
    String(b.resourceAccess.principalId) !== publicPrincipalId
  )
    return CompareResult.A_FIRST
  if (
    publicPrincipalId &&
    String(a.resourceAccess.principalId) !== publicPrincipalId &&
    String(b.resourceAccess.principalId) === publicPrincipalId
  )
    return CompareResult.B_FIRST

  // If none of the other cases apply, sort alphabetically by userName
  return a.userGroupHeader.userName.localeCompare(b.userGroupHeader.userName)
}
