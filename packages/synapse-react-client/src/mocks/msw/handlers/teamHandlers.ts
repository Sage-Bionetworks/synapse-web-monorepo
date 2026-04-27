import { delay } from '@/synapse-client/HttpClient'
import { IdList } from '@sage-bionetworks/synapse-client'
import {
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
import { http, HttpResponse } from 'msw'
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

export function getTeamHandler(backendOrigin: string) {
  return http.get(`${backendOrigin}/repo/v1/team/:teamId`, ({ params }) => {
    const team = mockedTeamService.getOneById(params.teamId as string)

    if (team) {
      return HttpResponse.json(team, { status: 200 })
    }

    const errorResponse: SynapseApiResponse<ListWrapper<Team>> = {
      concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
      reason: `Team id: '${params.teamId}' does not exist`,
    }
    return HttpResponse.json(errorResponse, { status: 404 })
  })
}

export function getTeamListHandler(backendOrigin: string) {
  return http.post<never, IdList>(
    `${backendOrigin}/repo/v1/teamList`,
    async ({ request }) => {
      const requestBody = await request.json()
      const teams: Team[] = []
      for (const teamId of requestBody.list!) {
        const team = mockedTeamService.getOneById(teamId.toString())
        if (!team) {
          const errorResponse: SynapseApiResponse<ListWrapper<Team>> = {
            concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
            reason: `Team with id ${teamId} not found`,
          }
          return HttpResponse.json(errorResponse, { status: 404 })
        }
        teams.push(team)
      }

      const response: SynapseApiResponse<ListWrapper<Team>> = {
        concreteType: 'org.sagebionetworks.repo.model.Team',
        list: teams,
      }

      return HttpResponse.json(response, { status: 200 })
    },
  )
}

export function getCreateTeamHandler(backendOrigin: string) {
  return http.post<never, CreateTeamRequest>(
    `${backendOrigin}/repo/v1/team`,
    async ({ request }) => {
      const requestBody: CreateTeamRequest = await request.json()

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

      return HttpResponse.json(createdTeam, { status: 201 })
    },
  )
}

export function getTeamMembershipStatusHandler(backendOrigin: string) {
  return http.get(
    `${backendOrigin}/repo/v1/team/:teamId/member/:memberId/membershipStatus`,
    ({ params }) => {
      const teamId = params.teamId as string
      const memberId = params.memberId as string
      let response: SynapseApiResponse<TeamMembershipStatus>
      let status: number

      const team = mockedTeamService.getOneById(teamId)
      if (!team) {
        response = {
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
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
      return HttpResponse.json(response, { status })
    },
  )
}

export function getUpdateTeamMembershipStatusHandler(
  backendOrigin: string,
  mockedInvitationService: BasicMockedCrudService<MembershipInvitation, 'id'>,
) {
  return http.put(
    `${backendOrigin}/repo/v1/team/:teamId/member/:memberId`,
    ({ params }) => {
      const teamId = params.teamId as string
      const memberId = params.memberId as string
      let response: SynapseApiResponse<void> | ''
      let status: number

      const team = mockedTeamService.getOneById(teamId)
      if (!team) {
        response = {
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
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
        // Remove any open invitation for this user/team so subsequent GET reflects the accepted state
        const invitation = mockedInvitationService.getOneByPredicate(
          inv => inv.teamId === teamId && inv.inviteeId === memberId,
        )
        if (invitation?.id) {
          mockedInvitationService.delete(invitation.id)
        }
        response = ''
        status = 201
      }
      return HttpResponse.json(response, { status })
    },
  )
}

export function getCreateTeamMembershipRequestHandler(backendOrigin: string) {
  return http.post<never, CreateMembershipRequestRequest>(
    `${backendOrigin}/repo/v1/membershipRequest`,
    async ({ request }) => {
      const requestBody: CreateMembershipRequestRequest = await request.json()

      const response: SynapseApiResponse<MembershipRequest> = {
        ...requestBody,
        id: uniqueId(),
        createdOn: new Date().toISOString(),
        createdBy: String(MOCK_USER_ID),
      }
      return HttpResponse.json(response, { status: 201 })
    },
  )
}

export function getOpenInvitationsForUserHandler(
  backendOrigin: string,
  mockedInvitationService: BasicMockedCrudService<MembershipInvitation, 'id'>,
) {
  return http.get(
    `${backendOrigin}/repo/v1/user/:userId/openInvitation`,
    ({ params }) => {
      const userInvitations = mockedInvitationService.getMany(
        inv => String(inv.inviteeId) === String(params.userId),
      )
      const response: SynapseApiResponse<
        PaginatedResults<MembershipInvitation>
      > = {
        results: userInvitations,
        totalNumberOfResults: userInvitations.length,
      }
      return HttpResponse.json(response, { status: 200 })
    },
  )
}

export function getDeleteMembershipInvitationHandler(
  backendOrigin: string,
  mockedInvitationService: BasicMockedCrudService<MembershipInvitation, 'id'>,
) {
  return http.delete(
    `${backendOrigin}/repo/v1/membershipInvitation/:invitationId`,
    ({ params }) => {
      const invitationId = params.invitationId as string
      const invitation = mockedInvitationService.getOneById(invitationId)
      if (!invitation) {
        const errorResponse: SynapseApiResponse<void> = {
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
          reason: `Membership invitation with ID ${invitationId} not found`,
        }
        return HttpResponse.json(errorResponse, { status: 404 })
      }
      mockedInvitationService.delete(invitationId)
      return new HttpResponse(null, { status: 204 })
    },
  )
}

export default function getAllTeamHandlers(
  backendOrigin: string,
  initialInvitations: MembershipInvitation[] = [
    ...mockTeamMembershipInvitations,
  ],
) {
  const mockedInvitationService = new BasicMockedCrudService<
    MembershipInvitation,
    'id'
  >({
    initialData: initialInvitations,
    idField: 'id',
  })

  return [
    getTeamHandler(backendOrigin),
    getTeamListHandler(backendOrigin),
    getCreateTeamHandler(backendOrigin),
    getTeamMembershipStatusHandler(backendOrigin),
    getUpdateTeamMembershipStatusHandler(
      backendOrigin,
      mockedInvitationService,
    ),
    getCreateTeamMembershipRequestHandler(backendOrigin),
    getOpenInvitationsForUserHandler(backendOrigin, mockedInvitationService),
    getDeleteMembershipInvitationHandler(
      backendOrigin,
      mockedInvitationService,
    ),
  ]
}
