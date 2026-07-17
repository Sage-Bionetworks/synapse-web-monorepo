import { PortalResourceRedirector } from '@sage-bionetworks/synapse-portal-framework/shared-config/DoiRedirectRoute'
import PortalsDoiIdSerializer from '@sage-bionetworks/synapse-portal-framework/utils/PortalsDoiIdSerializer'

/**
 * Configuration for mapping a DOI to a portal resource URL.
 *
 * To add a new resource type:
 *  1. Add the resource type to the string literal
 *  2. Define the ordered key set that defines this resource in `RESOURCE_TYPE_KEY_CONFIGURATION`
 *  3. Add a case to the switch statement in the doiRedirectConfig function.
 */

export type AMPALSResourceType = 'HOMEPAGE'

/** This configuration defines how each resource type maps to its DOI ID.
 * Once DOIs have been created for a particular resource type, that resource type's key (including order) CANNOT CHANGE
 * or else we will not be able to look up existing DOIs.
 *
 * `as const` provides additional type safety in the `doiRedirector` function.
 */
export const RESOURCE_TYPE_KEY_CONFIGURATION = {
  HOMEPAGE: [],
} as const satisfies Record<AMPALSResourceType, string[]>

export const doiSerializer = new PortalsDoiIdSerializer<AMPALSResourceType>({
  resourceTypeOrderedRequiredAttributes: RESOURCE_TYPE_KEY_CONFIGURATION,
})

/**
 * Maps a portal resource type and its key to a portal resource URL.
 * @param resourceType the type of the portal resource
 * @param resourceAttributes the attributes of the portal resource that comprise its key
 */
export const doiRedirector: PortalResourceRedirector<AMPALSResourceType> = (
  resourceType: AMPALSResourceType,
) => {
  switch (resourceType) {
    case 'HOMEPAGE':
      return '/'
    default:
      throw new Error(
        `Resource type ${resourceType} not supported in this portal.`,
      )
  }
}
