import { SIGNED_TOKEN_CONCRETE_TYPE } from './SignedTokenConcreteType'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/SignedTokenInterface.html
export interface SignedTokenInterface {
  readonly hmac: string //The hash message authentication code for the message.
  readonly version: number // The version of the key used to generate the HMAC.
  readonly expiresOn: string //The date-time when this token expires.
  readonly createdOn: string //The date-time the token was generated.
  readonly concreteType: SIGNED_TOKEN_CONCRETE_TYPE
}
