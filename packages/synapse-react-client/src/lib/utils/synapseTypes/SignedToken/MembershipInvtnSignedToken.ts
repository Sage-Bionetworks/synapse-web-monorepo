import { isTypeViaConcreteTypeFactory } from '../../functions/TypeUtils'
import { SignedTokenInterface } from './SignedTokenInterface'
import {
  MEMBERSHIP_INVITATION_CONCRETE_TYPE,
  MEMBERSHIP_INVITATION_CONCRETE_TYPE_VALUE,
} from './SignedTokenConcreteType'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/MembershipInvtnSignedToken.html
export interface MembershipInvtnSignedToken extends SignedTokenInterface {
  readonly concreteType: MEMBERSHIP_INVITATION_CONCRETE_TYPE
  readonly membershipInvitationId: string //The ID of the membership invitation.
}

export const isMembershipInvtnSignedToken =
  isTypeViaConcreteTypeFactory<MembershipInvtnSignedToken>(
    MEMBERSHIP_INVITATION_CONCRETE_TYPE_VALUE,
  )
