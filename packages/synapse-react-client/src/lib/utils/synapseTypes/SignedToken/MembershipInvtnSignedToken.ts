import { isTypeViaConcreteTypeFactory } from '../../functions/TypeUtils'
import { SignedTokenInterface } from './SignedTokenInterface'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/MembershipInvtnSignedToken.html
export const MEMBERSHIP_INVITATION_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.MembershipInvtnSignedToken'
export type MEMBERSHIP_INVITATION_CONCRETE_TYPE =
  typeof MEMBERSHIP_INVITATION_CONCRETE_TYPE_VALUE

export interface MembershipInvtnSignedToken extends SignedTokenInterface {
  readonly concreteType: MEMBERSHIP_INVITATION_CONCRETE_TYPE
  readonly membershipInvitationId: string //The ID of the membership invitation.
}

export const isMembershipInvtnSignedToken =
  isTypeViaConcreteTypeFactory<MembershipInvtnSignedToken>(
    MEMBERSHIP_INVITATION_CONCRETE_TYPE_VALUE,
  )
