import { SignedTokenInterface } from './SignedTokenInterface'
import { isTypeViaConcreteTypeFactory } from '../../functions/TypeUtils'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/InviteeVerificationSignedToken.html
export const INVITEE_VERIFICATION_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.InviteeVerificationSignedToken'
export type INVITEE_VERIFICATION_CONCRETE_TYPE =
  typeof INVITEE_VERIFICATION_CONCRETE_TYPE_VALUE

export interface InviteeVerificationSignedToken extends SignedTokenInterface {
  readonly concreteType: INVITEE_VERIFICATION_CONCRETE_TYPE
  readonly inviteeId: string //The ID of the invitee.
  readonly membershipInvitationId: string //The ID of the MembershipInvitation to update.
}

export const isInviteeVerificationSignedToken =
  isTypeViaConcreteTypeFactory<InviteeVerificationSignedToken>(
    INVITEE_VERIFICATION_CONCRETE_TYPE_VALUE,
  )
