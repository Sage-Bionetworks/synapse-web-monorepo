import { delay } from '@/synapse-client/HttpClient'
import {
  CreateMembershipInvitationRequest,
  CreateMembershipRequestRequest,
  CreateTeamRequest,
  ListWrapper,
  MembershipInvitation,
  MembershipRequest,
  PaginatedResults,
  Team,
  TeamMembershipStatus,
} from '@sage-bionetworks/synapse-types'
import { uniqueId } from 'lodash-es'
import { rest } from 'msw'
import {
  mockTeamMembershipInvitations,
  mockTeamMembershipStatuses,
  mockTeams,
} from '../../team/mockTeam'
import { MOCK_USER_ID } from '../../user/mock_user_profile'
import { SynapseApiResponse } from '../handlers'
import BasicMockedCrudService from '../util/BasicMockedCrudService'

const mockedTeamService = new BasicMockedCrudService<Team, 'id'>({
  initialData: mockTeams as Team[],
  idField: 'id',
  autoGenerateId: true,
})

const mockedTeamMembershipService =
  new BasicMockedCrudService<TeamMembershipStatus>({
    initialData: mockTeamMembershipStatuses as TeamMembershipStatus[],
  })

function getTeamMembershipStatusByTeamIdMemberId(
  teamId: string,
  memberId: string,
): TeamMembershipStatus | undefined {
  return mockedTeamMembershipService.getOneByPredicate(
    membership =>
      membership.teamId === teamId && membership.userId === memberId,
  )
}

const teamMembershipInvitations: MembershipInvitation[] = [
  ...mockTeamMembershipInvitations,
]

export function getTeamHandler(backendOrigin: string) {
  return rest.get(
    `${backendOrigin}/repo/v1/team/:teamId`,
    async (req, res, ctx) => {
      const team = mockedTeamService.getOneById(req.params.teamId as string)

      if (team) {
        return res(ctx.status(200), ctx.json(team))
      }

      const errorResponse: SynapseApiResponse<ListWrapper<Team>> = {
        reason: `Team id: '${req.params.teamId}' does not exist`,
      }
      return res(ctx.status(404), ctx.json(errorResponse))
    },
  )
}

export function getTeamListHandler(backendOrigin: string) {
  return rest.post(
    `${backendOrigin}/repo/v1/teamList`,
    async (req, res, ctx) => {
      const requestBody: { list: number[] } = await req.json()
      const teams: Team[] = []
      for (const teamId of requestBody.list) {
        const team = mockedTeamService.getOneById(teamId.toString())
        if (!team) {
          const errorResponse: SynapseApiResponse<ListWrapper<Team>> = {
            reason: `Team with id ${teamId} not found`,
          }
          return res(ctx.status(404), ctx.json(errorResponse))
        }
        teams.push(team)
      }

      const response: SynapseApiResponse<ListWrapper<Team>> = {
        concreteType: 'org.sagebionetworks.repo.model.Team',
        list: teams,
      }

      return res(ctx.status(200), ctx.json(response))
    },
  )
}

export function getCreateTeamHandler(backendOrigin: string) {
  return rest.post(`${backendOrigin}/repo/v1/team`, async (req, res, ctx) => {
    const requestBody: CreateTeamRequest = await req.json()

    const createdTeam = mockedTeamService.create({
      ...requestBody,
      createdBy: String(MOCK_USER_ID),
      createdOn: new Date().toISOString(),
      etag: 'etag',
      modifiedBy: String(MOCK_USER_ID),
      modifiedOn: new Date().toISOString(),
    })

    mockedTeamMembershipService.create({
      teamId: createdTeam.id,
      userId: String(MOCK_USER_ID),
      isMember: true,
      hasOpenInvitation: false,
      hasOpenRequest: false,
      canJoin: false,
      membershipApprovalRequired: false,
      hasUnmetAccessRequirement: false,
      canSendEmail: true,
    })

    // Avoid a race condition where the data in the arrays may not have updated before subsequent calls are made by the client
    await delay(250)

    return res(ctx.status(201), ctx.json(createdTeam))
  })
}

export function getTeamMembershipStatusHandler(backendOrigin: string) {
  return rest.get(
    `${backendOrigin}/repo/v1/team/:teamId/member/:memberId/membershipStatus`,
    async (req, res, ctx) => {
      const teamId = req.params.teamId as string
      const memberId = req.params.memberId as string
      let response: SynapseApiResponse<TeamMembershipStatus>
      let status: number

      const team = mockedTeamService.getOneById(teamId)
      if (!team) {
        response = {
          reason: `getTeamMembershipStatusHandler could not locate a team with ID ${teamId}`,
        }
        status = 404
      } else {
        const membershipStatus: TeamMembershipStatus =
          getTeamMembershipStatusByTeamIdMemberId(teamId, memberId) ?? {
            teamId: teamId,
            userId: memberId,
            isMember: false,
            hasOpenInvitation: false, // TODO
            hasOpenRequest: false, // TODO
            canJoin: true, // TODO
            membershipApprovalRequired: false, // TODO
            hasUnmetAccessRequirement: false, // TODO
            canSendEmail: false, // TODO
          }

        response = membershipStatus
        status = 200
      }
      return res(ctx.status(status), ctx.json(response))
    },
  )
}

export function getUpdateTeamMembershipStatusHandler(backendOrigin: string) {
  return rest.put(
    `${backendOrigin}/repo/v1/team/:teamId/member/:memberId`,
    async (req, res, ctx) => {
      const teamId = req.params.teamId as string
      const memberId = req.params.memberId as string
      let response: SynapseApiResponse<void> | ''
      let status: number

      const team = mockedTeamService.getOneById(teamId)
      if (!team) {
        response = {
          reason: `getTeamMembershipStatusHandler could not locate a team with ID ${teamId}`,
        }
        status = 404
      } else {
        const membershipStatus: TeamMembershipStatus = {
          teamId: teamId,
          userId: memberId,
          isMember: true,
          hasOpenInvitation: false, // TODO
          hasOpenRequest: false, // TODO
          canJoin: true, // TODO
          membershipApprovalRequired: false, // TODO
          hasUnmetAccessRequirement: false, // TODO
          canSendEmail: false, // TODO
        }
        mockedTeamMembershipService.create(membershipStatus)
        response = ''
        status = 201
      }
      return res(ctx.status(status), ctx.json(response))
    },
  )
}

export function getCreateTeamMembershipRequestHandler(backendOrigin: string) {
  return rest.post(
    `${backendOrigin}/repo/v1/membershipRequest`,
    async (req, res, ctx) => {
      const requestBody: CreateMembershipRequestRequest = await req.json()

      const response: SynapseApiResponse<MembershipRequest> = {
        ...requestBody,
        id: uniqueId(),
        createdOn: new Date().toISOString(),
        createdBy: String(MOCK_USER_ID),
      }
      return res(ctx.status(201), ctx.json(response))
    },
  )
}

export function getCreateTeamMembershipInvitationHandler(
  backendOrigin: string,
) {
  return rest.post(
    `${backendOrigin}/repo/v1/membershipInvitation`,
    async (req, res, ctx) => {
      const requestBody: CreateMembershipInvitationRequest = await req.json()

      const response: SynapseApiResponse<MembershipInvitation> = {
        ...requestBody,
        id: uniqueId(),
        createdOn: new Date().toISOString(),
        createdBy: String(MOCK_USER_ID),
      }

      teamMembershipInvitations.push(response)
      return res(ctx.status(201), ctx.json(response))
    },
  )
}

export function getOpenInvitationsRequestHandler(backendOrigin: string) {
  return rest.get(
    `${backendOrigin}/repo/v1/user/:userId/openInvitation`,
    async (req, res, ctx) => {
      const userInvitations = teamMembershipInvitations.filter(inv => {
        return String(inv.inviteeId) === String(req.params.userId)
      })
      const response: SynapseApiResponse<
        PaginatedResults<MembershipInvitation>
      > = {
        results: userInvitations,
        totalNumberOfResults: userInvitations.length,
      }
      return res(ctx.status(200), ctx.json(response))
    },
  )
}

export default function getAllTeamHandlers(backendOrigin: string) {
  return [
    getTeamHandler(backendOrigin),
    getTeamListHandler(backendOrigin),
    getCreateTeamHandler(backendOrigin),
    getTeamMembershipStatusHandler(backendOrigin),
    getUpdateTeamMembershipStatusHandler(backendOrigin),
    getCreateTeamMembershipRequestHandler(backendOrigin),
    getCreateTeamMembershipInvitationHandler(backendOrigin),
    getOpenInvitationsRequestHandler(backendOrigin),
  ]
}
