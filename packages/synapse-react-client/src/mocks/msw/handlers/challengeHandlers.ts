import {
  Challenge,
  ChallengeTeam,
  ChallengeTeamPagedResults,
  CreateChallengeTeamRequest,
  PaginatedIds,
} from '@sage-bionetworks/synapse-types'
import { SynapseApiResponse } from '../handlers'
import { http, HttpResponse } from 'msw'
import {
  MOCK_CHALLENGE_ID,
  mockChallengeTeam,
} from '../../challenge/mockChallenge'
import {
  MOCK_CHALLENGE_PARTICIPANT_TEAM_ID,
  MOCK_TEAM_ID_2,
  MOCK_TEAM_ID_3,
  MOCK_TEAM_ID_4,
} from '../../team/mockTeam'
import { uniqueId } from 'lodash-es'

const registeredChallengeTeams = [
  mockChallengeTeam({
    teamId: String(MOCK_TEAM_ID_2),
    challengeId: MOCK_CHALLENGE_ID,
  }),
  mockChallengeTeam({
    teamId: String(MOCK_TEAM_ID_3),
    challengeId: MOCK_CHALLENGE_ID,
  }),
  mockChallengeTeam({
    teamId: String(MOCK_TEAM_ID_4),
    challengeId: MOCK_CHALLENGE_ID,
  }),
]

export function getChallengeHandler(backendOrigin: string) {
  return http.get<{ id: string }, never, SynapseApiResponse<Challenge>>(
    `${backendOrigin}/repo/v1/entity/:id/challenge`,
    ({ params }) => {
      const response: SynapseApiResponse<Challenge> = {
        id: MOCK_CHALLENGE_ID,
        etag: 'f5e9df54-360b-4ede-9a17-f7f5680c8dd4',
        projectId: params.id,
        participantTeamId: String(MOCK_CHALLENGE_PARTICIPANT_TEAM_ID),
      }
      return HttpResponse.json(response, { status: 200 })
    },
  )
}

export function getRegisteredChallengeTeamsHandler(backendOrigin: string) {
  return http.get<
    { challengeId: string },
    never,
    SynapseApiResponse<ChallengeTeamPagedResults>
  >(`${backendOrigin}/repo/v1/challenge/:challengeId/challengeTeam`, () => {
    const response: SynapseApiResponse<ChallengeTeamPagedResults> = {
      results: registeredChallengeTeams,
      totalNumberOfResults: registeredChallengeTeams.length,
    }
    return HttpResponse.json(response, { status: 200 })
  })
}

export function getRegisterTeamForChallengeHandler(backendOrigin: string) {
  return http.post<
    { challengeId: string },
    CreateChallengeTeamRequest,
    SynapseApiResponse<ChallengeTeam>
  >(
    `${backendOrigin}/repo/v1/challenge/:challengeId/challengeTeam`,
    async ({ request }) => {
      const requestBody = await request.json()
      const response: SynapseApiResponse<ChallengeTeam> = {
        ...requestBody,
        id: uniqueId(),
        etag: 'abcdef0987654321',
      }
      registeredChallengeTeams.push(response)
      return HttpResponse.json(response, { status: 200 })
    },
  )
}

export function getSubmissionTeamsHandler(backendOrigin: string) {
  return http.get<
    { challengeId: string },
    never,
    SynapseApiResponse<PaginatedIds>
  >(`${backendOrigin}/repo/v1/challenge/:challengeId/submissionTeams`, () => {
    const response: SynapseApiResponse<PaginatedIds> = {
      results: [],
      totalNumberOfResults: 0,
    }
    return HttpResponse.json(response, { status: 200 })
  })
}

export default function getAllChallengeHandlers(backendOrigin: string) {
  return [
    getChallengeHandler(backendOrigin),
    getSubmissionTeamsHandler(backendOrigin),
    getRegisterTeamForChallengeHandler(backendOrigin),
    getRegisteredChallengeTeamsHandler(backendOrigin),
  ]
}
