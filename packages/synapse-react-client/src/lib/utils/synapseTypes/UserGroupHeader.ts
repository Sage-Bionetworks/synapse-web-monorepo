export type UserGroupHeader = {
  ownerId: string //	A foreign key to the ID of the 'principal' object for the user.
  firstName?: string //	First Name
  lastName?: string //	Last Name
  userName: string //	A name chosen by the user that uniquely identifies them.
  email?: string //	User's current email address
  displayName?: string //	This is deprecated and will always be null
  isIndividual: boolean //	True if this is a user, false if it is a group
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/principal/UserGroupHeaderResponse.html
export type UserGroupHeaderResponse = {
  list: UserGroupHeader[] // The list of UserGroupHeaders.
}

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/principal/TypeFilter.html
export enum TYPE_FILTER {
  USERS_ONLY = 'USERS_ONLY',
  TEAMS_ONLY = 'TEAMS_ONLY',
  ALL = 'ALL',
}
