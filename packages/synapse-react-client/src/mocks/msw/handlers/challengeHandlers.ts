import {
  Challenge,
  ChallengeTeam,
  ChallengeTeamPagedResults,
  CreateChallengeTeamRequest,
  PaginatedIds,
} from '@sage-bionetworks/synapse-types'
import { rest } from 'msw'
import {
  MOCK_CHALLENGE_ID,
  mockRegisteredChallengeTeams,
} from '../../challenge/mockChallenge'
import { MOCK_CHALLENGE_PARTICIPANT_TEAM_ID } from '../../team/mockTeam'
import { SynapseApiResponse } from '../SynapseApiResponse'
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
  return rest.get(
    `${backendOrigin}/repo/v1/entity/:id/challenge`,
    async (req, res, ctx) => {
      const response: SynapseApiResponse<Challenge> = {
        id: MOCK_CHALLENGE_ID,
        etag: 'f5e9df54-360b-4ede-9a17-f7f5680c8dd4',
        projectId: req.params.id as string,
        participantTeamId: String(MOCK_CHALLENGE_PARTICIPANT_TEAM_ID),
      }
      return res(ctx.status(200), ctx.json(response))
    },
  )
}

export function getRegisteredChallengeTeamsHandler(backendOrigin: string) {
  return rest.get(
    `${backendOrigin}/repo/v1/challenge/:challengeId/challengeTeam`,
    async (req, res, ctx) => {
      const results = registeredChallengeTeamService.getAll()
      const response: SynapseApiResponse<ChallengeTeamPagedResults> = {
        results: results,
        totalNumberOfResults: results.length,
      }
      return res(ctx.status(200), ctx.json(response))
    },
  )
}

export function getRegisterTeamForChallengeHandler(backendOrigin: string) {
  return rest.post(
    `${backendOrigin}/repo/v1/challenge/:challengeId/challengeTeam`,
    async (req, res, ctx) => {
      const request: CreateChallengeTeamRequest = await req.json()
      const created = registeredChallengeTeamService.create({
        ...request,
        etag: 'abcdef0987654321',
      })
      return res(ctx.status(200), ctx.json(created))
    },
  )
}

export function getSubmissionTeamsHandler(backendOrigin: string) {
  return rest.get(
    `${backendOrigin}/repo/v1/challenge/:challengeId/submissionTeams`,
    async (req, res, ctx) => {
      const response: SynapseApiResponse<PaginatedIds> = {
        results: [],
        totalNumberOfResults: 0,
      }
      return res(ctx.status(200), ctx.json(response))
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
