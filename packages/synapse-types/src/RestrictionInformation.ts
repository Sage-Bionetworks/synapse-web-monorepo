import { UserEntityPermissions } from './UserEntityPermissions'

// see https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/RestrictableObjectType.html
export enum RestrictableObjectType {
  ENTITY = 'ENTITY',
  EVALUATION = 'EVALUATION',
  TEAM = 'TEAM',
}

// see https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/RestrictionInformationRequest.html
export type RestrictionInformationRequest = {
  restrictableObjectType: RestrictableObjectType
  objectId: string
}

// see https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/RestrictionInformationBatchRequest.html
export type RestrictionInformationBatchRequest = {
  /* JSON enum for the types of objects which can be restricted by an AccessRequirement. */
  restrictableObjectType: RestrictableObjectType
  /* The list of IDs to request restriction information about. Limited to a max of 50 object ids. */
  objectIds: string[]
}

// see https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/RestrictionLevel.html
export enum RestrictionLevel {
  OPEN = 'OPEN',
  RESTRICTED_BY_TERMS_OF_USE = 'RESTRICTED_BY_TERMS_OF_USE',
  CONTROLLED_BY_ACT = 'CONTROLLED_BY_ACT',
}

export type RestrictionFulfillment = {
  /* The id of the access requirement that applies */
  accessRequirementId: number
  /* True if the user has an approval for the access requirement or if they are the owner of the data. Note that this property does not take into account an access requirement exemption. */
  isApproved: boolean
  /* True if the user meets the access requirement. Note that this property takes into account the access requirement exemption. */
  isMet: boolean
  /* True if the user is both a data contributor and eligible for exemption on the access requirement. */
  isExempt: boolean
}

// see https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/RestrictionInformationResponse.html
export type RestrictionInformationResponse = {
  /* The id of the restrictable object */
  objectId: number
  restrictionLevel: RestrictionLevel
  hasUnmetAccessRequirement: boolean
  userEntityPermissions?: UserEntityPermissions
  /* The list of restriction fulfillment information for each access requirement that applies to the restrictable object. */
  restrictionDetails: RestrictionFulfillment[]
}

export type RestrictionInformationBatchResponse = {
  restrictionInformation: RestrictionInformationResponse[]
}
