/** Configuration to display a DOI, as well as the ability to create one for users with such permission */
export type PortalDOIConfiguration = {
  /** The ID of the portal created with https://rest-docs.synapse.org/rest/POST/portal.html */
  portalId: string
  /** The type of portal resource the card refers to (e.g. STUDY). This is included in the serialized DOI ID. */
  resourceType: string
  /** Ordered list of table columns that contain the ID of the resource that is serialized to the DOI object ID. */
  resourceIdKeyColumns: string[]
  /** Function to transform the type and key attributes to a deterministic DOI ID */
  serializeDoiString: (
    resourceType: string,
    resourceAttributes: Record<string, string>,
  ) => string
}
