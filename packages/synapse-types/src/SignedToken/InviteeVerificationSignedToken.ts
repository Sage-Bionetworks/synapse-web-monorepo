import { SignedTokenInterface } from './SignedTokenInterface'
import { INVITEE_VERIFICATION_CONCRETE_TYPE } from './SignedTokenConcreteType'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/InviteeVerificationSignedToken.html
export interface InviteeVerificationSignedToken extends SignedTokenInterface {
  readonly concreteType: INVITEE_VERIFICATION_CONCRETE_TYPE
  readonly inviteeId: string //The ID of the invitee.
  readonly membershipInvitationId: string //The ID of the MembershipInvitation to update.
}
