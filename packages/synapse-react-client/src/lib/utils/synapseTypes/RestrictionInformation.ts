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

// see https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/RestrictionLevel.html
export enum RestrictionLevel {
  OPEN = 'OPEN',
  RESTRICTED_BY_TERMS_OF_USE = 'RESTRICTED_BY_TERMS_OF_USE',
  CONTROLLED_BY_ACT = 'CONTROLLED_BY_ACT',
}

// see https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/RestrictionInformationResponse.html
export type RestrictionInformationResponse = {
  restrictionLevel: RestrictionLevel
  hasUnmetAccessRequirement: boolean
}
