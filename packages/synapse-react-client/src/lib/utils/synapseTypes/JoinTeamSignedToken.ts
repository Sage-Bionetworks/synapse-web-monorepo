// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/JoinTeamSignedToken.html
export type JoinTeamSignedToken = {
  concreteType: string
  hmac: string //The hash message authentication code for the message.
  version: number // The version of the key used to generate the HMAC.
  expiresOn: string //The date-time when this token expires.
  createdOn: string //The date-time the token was generated.
  userId: string //The ID of the user who is acting to add the new member to the Team. The HMAC in the token authenticates that the request is being made by this user.
  teamId: string //The ID of the team which the user was invited to join.
  memberId: string //The ID of the new team member.
}
