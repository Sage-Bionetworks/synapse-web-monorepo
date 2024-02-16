import { EntityHeader } from './EntityHeader'

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/ChallengePagedResults.html
export type ChallengePagedResults = {
  results: Challenge[]
  totalNumberOfResults: number
}

// http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/Challenge.html
export type Challenge = {
  id: string //The ID of this Challenge object
  projectId: string //The ID of the Project the challenge is used with.
  participantTeamId: string //The ID of the Team which users join to participate in the Challenge
  etag: string
}

export type ChallengeWithProjectHeaderPagedResults = {
  results: ChallengeWithProjectHeader[]
  totalNumberOfResults: number
}

export type ChallengeWithProjectHeader = {
  challenge: Challenge // The Challenge
  projectHeader: EntityHeader // to optimize, include the EntityHeader for the associated Project
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/ChallengeTeam.html
export type ChallengeTeam = {
  id: string
  etag: string
  challengeId: string
  teamId: string
  message?: string
}

// The fields that are required in the request to create a challenge team
export type CreateChallengeTeamRequest = Pick<
  ChallengeTeam,
  'teamId' | 'challengeId' | 'message'
>

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/ChallengeTeamPagedResults.html
export type ChallengeTeamPagedResults = {
  results: ChallengeTeam[]
  totalNumberOfResults: number
}
