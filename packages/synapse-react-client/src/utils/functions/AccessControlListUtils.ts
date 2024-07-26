import { cloneDeep, isEqual } from 'lodash-es'
import { ResourceAccess } from '@sage-bionetworks/synapse-types'

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
