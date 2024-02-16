// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/MembershipInvitation.html
export type MembershipInvitation = {
  id: string //The id of the MembershipInvitation.
  teamId: string //The id of the Team which the user is invited to join.
  inviteeId?: string //The principal ID of the user being invited to join the Team.
  inviteeEmail?: string //The email address of the user being invited to join the Team.
  message?: string //The invitation message (optional).
  expiresOn?: string //The date this invitation expires (optional).
  createdOn: string //The date this MembershipInvitation was created.
  createdBy: string //The ID of the user that created this MembershipInvitation.
}

// The fields that should be included in the request to create a new MembershipInvitation
export type CreateMembershipInvitationRequest = Pick<
  MembershipInvitation,
  'teamId' | 'inviteeId' | 'inviteeEmail' | 'expiresOn' | 'message'
>
