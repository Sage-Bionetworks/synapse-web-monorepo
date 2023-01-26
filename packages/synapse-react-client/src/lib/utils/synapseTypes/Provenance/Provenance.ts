import { Reference } from '../ReferenceList'

/**
 * http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/provenance/Used.html
 */
export interface Used {
  wasExecuted: boolean // The enclosed entity was used and also executed in the Activity
  concreteType: USED_URL_CONCRETE_TYPE | USED_ENTITY_CONCRETE_TYPE
}

export const USED_URL_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.provenance.UsedURL'
export type USED_URL_CONCRETE_TYPE = typeof USED_URL_CONCRETE_TYPE_VALUE
/**
 * http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/provenance/UsedURL.html
 */
export interface UsedURL extends Used {
  concreteType: USED_URL_CONCRETE_TYPE
  name: string //	The external URL of the file that was used.
  url: string //	The external URL of the file that was used
}

export const USED_ENTITY_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.provenance.UsedEntity'
export type USED_ENTITY_CONCRETE_TYPE = typeof USED_ENTITY_CONCRETE_TYPE_VALUE
/**
 * http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/provenance/UsedEntity.html
 */
export interface UsedEntity extends Used {
  concreteType: USED_ENTITY_CONCRETE_TYPE
  reference: Reference
}

/**
 * http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/provenance/Activity.html
 */
export type Activity = {
  id: string //	The unique immutable ID
  name: string //	A name for this Activity.
  description?: string // A description of this Activity.
  etag: string //	Synapse employs an Optimistic Concurrency Control (OCC) scheme to handle concurrent updates. Since the E-Tag changes every time an entity is updated it is used to detect when a client's current representation of an object is out-of-date.
  createdOn: string //	The date this object was created.
  modifiedOn: string //	The date this object was last modified.
  createdBy: string //	The user that created this object.
  modifiedBy: string //	The user that last modified this object.
  used?: (UsedEntity | UsedURL)[] //The entities used by this Activity.
}
