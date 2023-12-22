import { RestrictableObjectDescriptor } from './RestrictableObjectDescriptor'
import ACCESS_TYPE from '../ACCESS_TYPE'

export const LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE = 'Lock'
export const LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.LockAccessRequirement'
export type LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE =
  typeof LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE

/**
 * JSON schema for Lock Access Requirement, used to lock down the entity while waiting for ACT to review.
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/LockAccessRequirement.html
 */
export type LockAccessRequirement = {
  /* 	The version number issued to this version on the object. */
  versionNumber: number
  /* 	The unique immutable ID. Provided by the system, the user may not set this field. */
  id: number
  /* 	Depricated. Replaced by name. */
  description: string
  /* 	Name of the AR. Limited to 50 characters and must be unique. Required. */
  name: string
  /* 	Synapse employs an Optimistic Concurrency Control (OCC) scheme to handle concurrent updates. Since the E-Tag changes every time an entity is updated it is used to detect when a client's current representation of an object is out-of-date. */
  etag: string
  /* 	The date this object was created. Provided by the system, the user may not set this field. */
  createdOn: string
  /* 	The date this object was last modified. Provided by the system, the user may not set this field. */
  modifiedOn: string
  /* 	The user that created this object. Provided by the system, the user may not set this field. */
  createdBy: string
  /* 	The user that last modified this object. Provided by the system, the user may not set this field. */
  modifiedBy: string
  /* 	Defaults to 'false'. When 'true', the subjects controlled by this AR are defined by the the'_accessRequirementIds' annotations on individual entities. This property is mutually exclusive with 'subjectIds'. If this is set to 'true' then 'subjectIds' must be excluded or empty. */
  subjectsDefinedByAnnotations: boolean
  /* 	The IDs of the items controlled by this Access Requirement when 'subjectsDefinedByAnnotations=false'. This property is mutually exclusive with 'subjectsDefinedByAnnotations'. When 'subjectsDefinedByAnnotations=true' then this property must be empty or excluded. Required when creating or updating and 'subjectsDefinedByAnnotations=false' or 'subjectsDefinedByAnnotations' is excluded. */
  subjectIds: Array<RestrictableObjectDescriptor>
  /* 	The enumeration of possible permission. */
  accessType: ACCESS_TYPE
  /* 	Indicates which type of AccessRequirement this object represents. Provided by the system, the user may not set this field. */
  concreteType: LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE
  /* 	The key of the jira issue created for this Access Requirement. */
  jiraKey: string
}
