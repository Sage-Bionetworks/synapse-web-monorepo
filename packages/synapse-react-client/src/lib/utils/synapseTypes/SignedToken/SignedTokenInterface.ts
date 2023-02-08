import { INVITEE_VERIFICATION_CONCRETE_TYPE } from './InviteeVerificationSignedToken'
import { JOIN_TEAM_CONCRETE_TYPE } from './JoinTeamSignedToken'
import { MEMBERSHIP_INVITATION_CONCRETE_TYPE } from './MembershipInvtnSignedToken'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/SignedTokenInterface.html
export interface SignedTokenInterface {
  readonly hmac: string //The hash message authentication code for the message.
  readonly version: number // The version of the key used to generate the HMAC.
  readonly expiresOn: string //The date-time when this token expires.
  readonly createdOn: string //The date-time the token was generated.
  readonly concreteType: SIGNED_TOKEN_CONCRETE_TYPE
}

export type SIGNED_TOKEN_CONCRETE_TYPE =
  | JOIN_TEAM_CONCRETE_TYPE
  | INVITEE_VERIFICATION_CONCRETE_TYPE
  | MEMBERSHIP_INVITATION_CONCRETE_TYPE
