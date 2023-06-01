import {
  Challenge,
  ChallengeTeam,
  ListWrapper,
  PaginatedResults,
  Team,
  TeamMember,
  TeamMembershipStatus,
  UserGroupHeader,
} from '@sage-bionetworks/synapse-types'
import { MOCK_USER_ID, mockUserGroupHeader } from './user/mock_user_profile'

export const MOCK_CHALLENGE_ID = '1234'
export const MOCK_CHALLENGE_PROJECT_ID = 'syn12345678'
export const MOCK_PARTICIPANT_TEAM_ID = '123456'
const etag = 'f1b29c62-e987-4e69-9cec-198bf017a586'

const getRandomId = (len: number) => {
  const exp = Math.pow(10, len - 1)
  return Math.floor(Math.random() * 9 * exp + exp)
}

export const mockChallenge: Challenge = {
  id: MOCK_CHALLENGE_ID,
  etag,
  projectId: MOCK_CHALLENGE_PROJECT_ID,
  participantTeamId: MOCK_PARTICIPANT_TEAM_ID,
}

export const mockChallengeTeamMember: TeamMember = {
  teamId: MOCK_PARTICIPANT_TEAM_ID,
  member: mockUserGroupHeader,
  isAdmin: false,
}

export const mockChallengeTeamMembershipStatus = (
  isMember: boolean = false,
  canJoin: boolean = true,
): TeamMembershipStatus => {
  return {
    teamId: MOCK_PARTICIPANT_TEAM_ID,
    userId: MOCK_USER_ID.toString(),
    isMember,
    hasOpenInvitation: false,
    hasOpenRequest: false,
    canJoin,
    membershipApprovalRequired: false,
    hasUnmetAccessRequirement: false,
    canSendEmail: true,
  }
}

export const mockChallengeTeam = (): ChallengeTeam => {
  const id: string = getRandomId(6).toString()
  const teamId: string = getRandomId(6).toString()
  return {
    id,
    etag,
    challengeId: MOCK_CHALLENGE_ID,
    teamId,
    message: `Message for team ${teamId}`,
  }
}

export const mockChallengeTeamResults = (): PaginatedResults<ChallengeTeam> => {
  const results: ChallengeTeam[] = []
  do {
    results.push(mockChallengeTeam())
  } while (results.length < 10)
  return {
    results,
    totalNumberOfResults: results.length,
  }
}

export const mockTeamList = (teams: ChallengeTeam[]): ListWrapper<Team> => {
  const list: Team[] = teams.map((team: ChallengeTeam, index: number) => {
    const canPublicJoin: boolean = index % 2 === 0
    return {
      id: team.teamId,
      name: `Team ${team.teamId}`,
      description: `Description for team ${team.teamId}`,
      icon: '',
      canPublicJoin,
      etag,
      createdOn: '2023-05-25T14:24:28.840Z',
      modifiedOn: '',
      createdBy: '',
      modifiedBy: '',
    }
  })
  return {
    list,
  }
}
