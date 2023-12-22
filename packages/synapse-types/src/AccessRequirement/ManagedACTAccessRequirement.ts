import { RestrictableObjectDescriptor } from './RestrictableObjectDescriptor'
import ACCESS_TYPE from '../ACCESS_TYPE'

export const MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_DISPLAY_VALUE =
  'Managed'
export const MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.ManagedACTAccessRequirement'
export type MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE =
  typeof MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE

export type ManagedACTAccessRequirement = {
  /* The version number issued to this version on the object. */
  versionNumber: number
  /* The unique immutable ID. Provided by the system, the user may not set this field. */
  id: number
  /* @deprecated Replaced by name. */
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
  /* Defaults to 'false'. When 'true', the subjects controlled by this AR are defined by the'_accessRequirementIds' annotations on individual entities. This property is mutually exclusive with 'subjectIds'. If this is set to 'true' then 'subjectIds' must be excluded or empty. */
  subjectsDefinedByAnnotations: boolean
  /* The IDs of the items controlled by this Access Requirement when 'subjectsDefinedByAnnotations=false'. This property is mutually exclusive with 'subjectsDefinedByAnnotations'. When 'subjectsDefinedByAnnotations=true' then this property must be empty or excluded. Required when creating or updating and 'subjectsDefinedByAnnotations=false' or 'subjectsDefinedByAnnotations' is excluded. */
  subjectIds: Array<RestrictableObjectDescriptor>
  /* The enumeration of possible permission. */
  accessType: ACCESS_TYPE /* Indicates which type of AccessRequirement this object represents. Provided by the system, the user may not set this field. */
  concreteType: MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE
  /* If true, then accessor needs to be a Synapse Certified User to gain access. */
  isCertifiedUserRequired: boolean
  /* If true, then accessor needs to have their Synapse Profile validated to gain access. */
  isValidatedProfileRequired: boolean
  /* If true, then accessor needs to fill, sign, and submit a Data Use Certificate (DUC) to gain access to the data. */
  isDUCRequired: boolean
  /* If the Data Use Certificate (DUC) is required, creator of this requirement needs to upload a Data Use Certificate (DUC) template. Users have to download this template, fill out, sign and submit it. */
  ducTemplateFileHandleId: string
  /* If true, then accessor needs to submit an Institutional Review Board (IRB) Approval document to gain access to the data. */
  isIRBApprovalRequired: boolean
  /* If true, then accessor needs to upload attachment(s) other than Data Use Certificate (DUC) and Institutional Review Board (IRB) Approval document to gain access to the data. */
  areOtherAttachmentsRequired: boolean
  /* After an AccessApproval is granted for this AccessRequirement, it will be expired after expirationPeriod milliseconds. Set this value to 0 to indicate that AccessApproval will never be expired. */
  expirationPeriod: number
  /* If true, the Intended Data Use Statements submitted to gain access to the data will be presented to public. */
  isIDUPublic: boolean
  /*  If true (default), the Intended Data Use Statement for a research project is required. */
  isIDURequired: boolean
  /* If true, then accessor needs to enable two-factor authentication before gaining access to the data. */
  isTwoFaRequired: boolean
}
