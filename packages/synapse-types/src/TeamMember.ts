import { UserGroupHeader } from './UserGroupHeader'

export type TeamMember = {
  /** The id of the Team. */
  teamId: string
  /** JSON schema for UserHeader POJO. */
  member: UserGroupHeader
  /** True iff the user is an administrator in the Team. */
  isAdmin: boolean
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/MembershipRequest.html
export type MembershipRequest = {
  id: string
  teamId: string
  userId: string
  message?: string //The request message (optional).
  expiresOn?: string //The date this request expires (optional).
  createdOn: string
  createdBy: string
}

// The fields that should be included in the request to create a MembershipRequest
export type CreateMembershipRequestRequest = Pick<
  MembershipRequest,
  'teamId' | 'userId' | 'message' | 'expiresOn'
>

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/TeamMembershipStatus.html
export type TeamMembershipStatus = {
  teamId: string
  userId: string // The principal id of the user.
  isMember: boolean // true if and only if the user is a member of the team
  hasOpenInvitation: boolean // true if and only if the user has an open invitation to join the team
  hasOpenRequest: boolean // true if and only if the user has an open request to join the team
  canJoin: boolean // true if and only if the user requesting this status information can join the user to the team
  membershipApprovalRequired: boolean // true if and only if team admin approval is required for the user to join the team
  hasUnmetAccessRequirement: boolean // true if and only if there is at least one unmet access requirement for the user on the team
  canSendEmail: boolean // true if and only if the user can send an email to the team
}
