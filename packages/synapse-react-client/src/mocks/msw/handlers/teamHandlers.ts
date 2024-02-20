import { Team, TeamMembershipStatus } from '@sage-bionetworks/synapse-types'
import { SynapseApiResponse } from '../handlers'
import { rest } from 'msw'
import { mockTeamMembershipStatuses, mockTeams } from '../../team/mockTeam'

const teams: Team[] = [...mockTeams]

function getMockTeamById(id: string): Team | undefined {
  return teams.find(team => team.id === id)
}

const teamMemberships: TeamMembershipStatus[] = [...mockTeamMembershipStatuses]
function getTeamMembershipStatusByTeamIdMemberId(
  teamId: string,
  memberId: string,
): TeamMembershipStatus | undefined {
  return teamMemberships.find(
    membership =>
      membership.teamId === teamId && membership.userId === memberId,
  )
}

function addTeamMembershipStatus(teamMembershipStatus: TeamMembershipStatus) {
  teamMemberships.push(teamMembershipStatus)
}

export function getTeamMembershipStatusHandler(backendOrigin: string) {
  return rest.get(
    `${backendOrigin}/repo/v1/team/:teamId/member/:memberId/membershipStatus`,
    async (req, res, ctx) => {
      const teamId = req.params.teamId as string
      const memberId = req.params.memberId as string
      let response: SynapseApiResponse<TeamMembershipStatus>
      let status: number

      const team = getMockTeamById(teamId)
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

      const team = getMockTeamById(teamId)
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
        addTeamMembershipStatus(membershipStatus)
        response = ''
        status = 201
      }
      return res(ctx.status(status), ctx.json(response))
    },
  )
}

export default function getAllTeamHandlers(backendOrigin: string) {
  return [
    getTeamMembershipStatusHandler(backendOrigin),
    getUpdateTeamMembershipStatusHandler(backendOrigin),
  ]
}
