import { ACCESS_TYPE, ResourceAccess } from '@sage-bionetworks/synapse-types'
import { consolidateResourceAccessList } from '@/utils/functions/AccessControlListUtils'

export type ProjectVisibility = 'PRIVATE' | 'DISCOVERABLE' | 'PUBLIC'

/**
 * Determines a project's visibility category based on its Access Control List (ACL).
 * - **PUBLIC**: Public group has READ access AND authenticated users have both READ and DOWNLOAD access.
 * - **DISCOVERABLE**: Public group has READ access AND authenticated users have READ access (but lack DOWNLOAD access).
 * - **PRIVATE**: Default state; matches neither condition above.
 */
export function getProjectVisibilityFromACL(
  resourceAccess: ResourceAccess[],
  realmPrincipals: { publicGroup?: string; authenticatedUsers?: string },
): ProjectVisibility {
  const consolidated = consolidateResourceAccessList(resourceAccess)

  // Extract access types for public and authenticated principals
  const publicAccess =
    consolidated.find(
      ra => ra.principalId === Number(realmPrincipals.publicGroup),
    )?.accessType ?? []

  const authAccess =
    consolidated.find(
      ra => ra.principalId === Number(realmPrincipals.authenticatedUsers),
    )?.accessType ?? []

  const publicCanRead = publicAccess.includes(ACCESS_TYPE.READ)
  const authCanRead = authAccess.includes(ACCESS_TYPE.READ)
  const authCanDownload = authAccess.includes(ACCESS_TYPE.DOWNLOAD)

  if (publicCanRead && authCanRead && authCanDownload) {
    return 'PUBLIC'
  }
  if (publicCanRead && authCanRead) {
    return 'DISCOVERABLE'
  }
  return 'PRIVATE'
}
