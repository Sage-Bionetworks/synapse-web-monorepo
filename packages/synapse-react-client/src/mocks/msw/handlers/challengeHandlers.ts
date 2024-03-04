import {
  Challenge,
  ChallengeTeam,
  ChallengeTeamPagedResults,
  CreateChallengeTeamRequest,
  PaginatedIds,
} from '@sage-bionetworks/synapse-types'
import { SynapseApiResponse } from '../handlers'
import { rest } from 'msw'
import {
  MOCK_CHALLENGE_ID,
  mockRegisteredChallengeTeams,
} from '../../challenge/mockChallenge'
import { MOCK_CHALLENGE_PARTICIPANT_TEAM_ID } from '../../team/mockTeam'
import { uniqueId } from 'lodash-es'

const registeredChallengeTeams: ChallengeTeam[] = [
  ...mockRegisteredChallengeTeams,
]

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
      const response: SynapseApiResponse<ChallengeTeamPagedResults> = {
        results: registeredChallengeTeams,
        totalNumberOfResults: registeredChallengeTeams.length,
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
      const response: SynapseApiResponse<ChallengeTeam> = {
        ...request,
        id: uniqueId(),
        etag: 'abcdef0987654321',
      }
      registeredChallengeTeams.push(response)
      return res(ctx.status(200), ctx.json(response))
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
