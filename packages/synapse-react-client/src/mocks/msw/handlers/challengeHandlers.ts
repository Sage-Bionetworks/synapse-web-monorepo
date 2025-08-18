import {
  Challenge,
  ChallengeTeam,
  ChallengeTeamPagedResults,
  CreateChallengeTeamRequest,
  PaginatedIds,
} from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'
import {
  MOCK_CHALLENGE_ID,
  mockRegisteredChallengeTeams,
} from '../../challenge/mockChallenge'
import { MOCK_CHALLENGE_PARTICIPANT_TEAM_ID } from '../../team/mockTeam'
import { SynapseApiResponse } from '../handlers'
import BasicMockedCrudService from '../util/BasicMockedCrudService'

const registeredChallengeTeamService = new BasicMockedCrudService<
  ChallengeTeam,
  'id'
>({
  initialData: mockRegisteredChallengeTeams,
  idField: 'id',
  autoGenerateId: true,
})

export function getChallengeHandler(backendOrigin: string) {
  return http.get(
    `${backendOrigin}/repo/v1/entity/:id/challenge`,
    ({ params }) => {
      const response: SynapseApiResponse<Challenge> = {
        id: MOCK_CHALLENGE_ID,
        etag: 'f5e9df54-360b-4ede-9a17-f7f5680c8dd4',
        projectId: params.id as string,
        participantTeamId: String(MOCK_CHALLENGE_PARTICIPANT_TEAM_ID),
      }
      return HttpResponse.json(response, { status: 200 })
    },
  )
}

export function getRegisteredChallengeTeamsHandler(backendOrigin: string) {
  return http.get(
    `${backendOrigin}/repo/v1/challenge/:challengeId/challengeTeam`,
    () => {
      const results = registeredChallengeTeamService.getAll()
      const response: SynapseApiResponse<ChallengeTeamPagedResults> = {
        results: results,
        totalNumberOfResults: results.length,
      }
      return HttpResponse.json(response, { status: 200 })
    },
  )
}

export function getRegisterTeamForChallengeHandler(backendOrigin: string) {
  return http.post<never, CreateChallengeTeamRequest>(
    `${backendOrigin}/repo/v1/challenge/:challengeId/challengeTeam`,
    async ({ request }) => {
      const requestBody = await request.json()
      const created = registeredChallengeTeamService.create({
        ...requestBody,
        etag: 'abcdef0987654321',
      })
      return HttpResponse.json(created, { status: 200 })
    },
  )
}

export function getSubmissionTeamsHandler(backendOrigin: string) {
  return http.get(
    `${backendOrigin}/repo/v1/challenge/:challengeId/submissionTeams`,
    () => {
      const response: SynapseApiResponse<PaginatedIds> = {
        results: [],
        totalNumberOfResults: 0,
      }
      return HttpResponse.json(response, { status: 200 })
    },
  )
}

export default function getAllChallengeHandlers(backendOrigin: string) {
  return [
    getChallengeHandler(backendOrigin),
    getSubmissionTeamsHandler(backendOrigin),
    getRegisterTeamForChallengeHandler(backendOrigin),
    getRegisteredChallengeTeamsHandler(backendOrigin),
  ]
}
