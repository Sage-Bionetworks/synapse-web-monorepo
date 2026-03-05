import { cloneDeep, isEqual } from 'lodash-es'
import { ACCESS_TYPE, ResourceAccess } from '@sage-bionetworks/synapse-types'
import {
  AccessControlList,
  ResourceAccess as SynapseClientResourceAccess,
} from '@sage-bionetworks/synapse-client'

function sortResourceAccessList(
  resourceAccessList: ResourceAccess[],
): ResourceAccess[] {
  const clone = cloneDeep(resourceAccessList)
  // Sort the resource access list by principal ID
  clone.sort((a, b) => b.principalId - a.principalId)
  // In each resource access, sort the access type set
  clone.forEach(ra => ra.accessType.sort())
  return clone
}

/**
 * Compares two objects for equality, ignoring the order of elements in arrays.
 * @param a
 * @param b
 */
export function resourceAccessListIsEqual(
  a: ResourceAccess[],
  b: ResourceAccess[],
) {
  const aSorted = sortResourceAccessList(a)
  const bSorted = sortResourceAccessList(b)

  return isEqual(aSorted, bSorted)
}

/** Conversion utility to go from synapse-client ResourceAccess Set to the SRC SynapseClient ResourceAccess[] type */
export function convertResourceAccessSetToSRC(
  resourceAccessSet?: Set<SynapseClientResourceAccess>,
): ResourceAccess[] {
  return Array.from(resourceAccessSet ?? []).map(item => ({
    principalId: item.principalId ?? -1,
    accessType: Array.isArray(item.accessType)
      ? (item.accessType as ACCESS_TYPE[])
      : (Array.from(item.accessType ?? []) as ACCESS_TYPE[]),
  }))
}

/** Conversion utility to go from synapse-react-client ResourceAccess[] to the synapse-client ResourceAccess Set in an ACL */
export function updateACLWithSRCResourceAccessList(
  acl: AccessControlList | null | undefined,
  resourceAccessList: ResourceAccess[],
): AccessControlList {
  const newAcl = { ...acl }
  newAcl.resourceAccess = new Set(
    resourceAccessList.map(ra => ({
      principalId: ra.principalId,
      accessType: new Set(ra.accessType),
    })),
  )
  return newAcl
}

/**
 * Determines if an entity is publicly accessible by checking if any public principals
 * (authenticated users, public group, or anonymous user) have access in the resource access list.
 *
 * @param resourceAccess - The list of resource access entries to check
 * @param realmPrincipals - An object containing the principal IDs for public groups
 * @param realmPrincipals.authenticatedUsers - The principal ID for authenticated users
 * @param realmPrincipals.publicGroup - The principal ID for the public group
 * @param realmPrincipals.anonymousUser - The principal ID for anonymous users
 * @returns true if any public principal has access, false otherwise
 */
export function isEntityPublic(
  resourceAccess: ResourceAccess[],
  realmPrincipals: {
    authenticatedUsers?: string
    publicGroup?: string
    anonymousUser?: string
  },
): boolean {
  const publicPrincipalIds = [
    realmPrincipals.authenticatedUsers,
    realmPrincipals.publicGroup,
    realmPrincipals.anonymousUser,
  ].filter((id): id is string => id !== undefined)

  return resourceAccess.some(ra =>
    publicPrincipalIds.includes(String(ra.principalId)),
  )
}
