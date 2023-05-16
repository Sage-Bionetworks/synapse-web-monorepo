// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/entity/EntityLookupRequest.html

export interface EntityLookupRequest {
  entityName: string
  parentId?: string
}
