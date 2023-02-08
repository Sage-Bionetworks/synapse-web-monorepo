import { isTypeViaConcreteTypeFactory } from '../../functions/TypeUtils'
import { SignedTokenInterface } from './SignedTokenInterface'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/JoinTeamSignedToken.html
export const JOIN_TEAM_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.JoinTeamSignedToken'
export type JOIN_TEAM_CONCRETE_TYPE = typeof JOIN_TEAM_CONCRETE_TYPE_VALUE

export interface JoinTeamSignedToken extends SignedTokenInterface {
  readonly concreteType: JOIN_TEAM_CONCRETE_TYPE
  readonly userId: string //The ID of the user who is acting to add the new member to the Team. The HMAC in the token authenticates that the request is being made by this user.
  readonly teamId: string //The ID of the team which the user was invited to join.
  readonly memberId: string //The ID of the new team member.
}

export const isJoinTeamSignedToken =
  isTypeViaConcreteTypeFactory<JoinTeamSignedToken>(
    JOIN_TEAM_CONCRETE_TYPE_VALUE,
  )
