import { RestrictableObjectDescriptor } from './RestrictableObjectDescriptor'
import ACCESS_TYPE from '../ACCESS_TYPE'
import { isTypeViaConcreteTypeFactory } from '../../functions/TypeUtils'

export interface TermsOfUseAccessRequirement {
  /* The version number issued to this version on the object. */
  versionNumber: number
  /* The unique immutable ID. Provided by the system, the user may not set this field. */
  id: number
  /* Depricated. Replaced by name. */
  description: string
  /* Name of the AR. Limited to 50 characters and must be unique. Required. */
  name: string
  /* Synapse employs an Optimistic Concurrency Control (OCC) scheme to handle concurrent updates. Since the E-Tag changes every time an entity is updated it is used to detect when a client's current representation of an object is out-of-date. */
  etag: string
  /* The date this object was created. Provided by the system, the user may not set this field. */
  createdOn: string
  /* The date this object was last modified. Provided by the system, the user may not set this field. */
  modifiedOn: string
  /* The user that created this object. Provided by the system, the user may not set this field. */
  createdBy: string
  /* The user that last modified this object. Provided by the system, the user may not set this field. */
  modifiedBy: string
  /* Defaults to 'false'. When 'true', the subjects controlled by this AR are defined by the the'_accessRequirementIds' annotations on individual entities. This property is mutually exclusive with 'subjectIds'. If this is set to 'true' then 'subjectIds' must be excluded or empty. */
  subjectsDefinedByAnnotations: boolean
  /* The IDs of the items controlled by this Access Requirement when 'subjectsDefinedByAnnotations=false'. This property is mutually exclusive with 'subjectsDefinedByAnnotations'. When 'subjectsDefinedByAnnotations=true' then this property must be empty or excluded. Required when creating or updating and 'subjectsDefinedByAnnotations=false' or 'subjectsDefinedByAnnotations' is excluded. */
  subjectIds: Array<RestrictableObjectDescriptor>
  /* The enumeration of possible permission. */
  accessType: ACCESS_TYPE
  /* Indicates which type of AccessRequirement this object represents. Provided by the system, the user may not set this field. */
  concreteType: 'org.sagebionetworks.repo.model.TermsOfUseAccessRequirement'
  /* Terms Of Use for Access, stored directly in the document (versus in a referenced Location) Required when creating or updating.*/
  termsOfUse: string
}

export const isTermsOfUseAccessRequirement =
  isTypeViaConcreteTypeFactory<TermsOfUseAccessRequirement>(
    'org.sagebionetworks.repo.model.TermsOfUseAccessRequirement',
  )
