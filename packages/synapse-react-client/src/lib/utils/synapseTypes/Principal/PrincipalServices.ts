// Principal Services
// http://rest-docs.synapse.org/rest/#org.sagebionetworks.repo.web.controller.PrincipalController

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/principal/AliasCheckRequest.html
export type AliasCheckRequest = {
  alias: string
  type: AliasType
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/principal/PrincipalAliasRequest.html
export type PrincipalAliasRequest = {
  alias: string
  type: AliasType
}

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/principal/AliasType.html
export enum AliasType {
  USER_NAME = 'USER_NAME',
  TEAM_NAME = 'TEAM_NAME',
  USER_EMAIL = 'USER_EMAIL',
  USER_OPEN_ID = 'USER_OPEN_ID',
  USER_ORCID = 'USER_ORCID',
}

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/principal/AliasCheckResponse.html
export type AliasCheckResponse = {
  available: boolean //True is the alias is available.
  valid: boolean //True if the alias is valid for the passed type.
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/principal/PrincipalAliasResponse.html
export type PrincipalAliasResponse = {
  principalId: number
}

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/auth/NewUser.html
export type NewUser = {
  email: string
  userName?: string
  firstName?: string
  lastName?: string
  encodedMembershipInvtnSignedToken?: string
}

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/principal/AccountSetupInfo.html
export type AccountSetupInfo = {
  username: string
  password: string
  firstName?: string
  lastName?: string
  emailValidationSignedToken?: EmailValidationSignedToken
}

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/principal/EmailValidationSignedToken.html
export type EmailValidationSignedToken = {
  concreteType: string
  hmac: string
  version: number
  expiresOn: string
  createdOn: string
  email: string
  userId: string
}
