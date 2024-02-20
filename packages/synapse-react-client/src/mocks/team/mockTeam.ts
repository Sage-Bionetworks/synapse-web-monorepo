import { Team, TeamMembershipStatus } from '@sage-bionetworks/synapse-types'
import {
  MOCK_USER_ID,
  MOCK_USER_ID_2,
  MockUserOrTeamData,
} from '../user/mock_user_profile'
import { ACT_TEAM_ID } from '../../utils/SynapseConstants'

export const MOCK_TEAM_ID = 987654
export const MOCK_TEAM_ID_2 = 987655
export const MOCK_TEAM_ID_3 = 987656
export const MOCK_TEAM_ID_4 = 987657
export const MOCK_CHALLENGE_PARTICIPANT_TEAM_ID = 987658

export const mockTeamData: Readonly<Team> = {
  id: String(MOCK_TEAM_ID),
  name: 'Mock Team',
  description: 'A team that already has super cool fake users',
  icon: '',
  canPublicJoin: true,
  canRequestMembership: true,
  etag: 'f29b79d6-5b63-4641-93c7-30d954b4328c',
  createdOn: '2013-11-02T01:01:18.373Z',
  modifiedOn: '2019-01-31T20:34:40.057Z',
  createdBy: String(MOCK_USER_ID),
  modifiedBy: String(MOCK_USER_ID_2),
}

export const mockTeamData2: Readonly<Team> = {
  id: String(MOCK_TEAM_ID_2),
  name: 'Mock team public can join',
  description: 'A team for fake users to join',
  icon: '',
  canPublicJoin: true,
  canRequestMembership: false,
  etag: 'f29b79d6-5b63-4641-93c7-30d954b4328c',
  createdOn: '2013-11-02T01:01:18.373Z',
  modifiedOn: '2019-01-31T20:34:40.057Z',
  createdBy: String(MOCK_USER_ID),
  modifiedBy: String(MOCK_USER_ID_2),
}

export const mockTeamData3: Readonly<Team> = {
  id: String(MOCK_TEAM_ID_3),
  name: 'Mock team public can request to join',
  description: 'A team for fake users to request to join',
  icon: '',
  canPublicJoin: false,
  canRequestMembership: true,
  etag: 'f29b79d6-5b63-4641-93c7-30d954b4328c',
  createdOn: '2013-11-02T01:01:18.373Z',
  modifiedOn: '2019-01-31T20:34:40.057Z',
  createdBy: String(MOCK_USER_ID),
  modifiedBy: String(MOCK_USER_ID_2),
}

export const mockTeamData4: Readonly<Team> = {
  id: String(MOCK_TEAM_ID_4),
  name: 'Mock team with open invitation',
  description: 'A team that fake users have been invited to join',
  icon: '',
  canPublicJoin: false,
  canRequestMembership: false,
  etag: 'f29b79d6-5b63-4641-93c7-30d954b4328c',
  createdOn: '2013-11-02T01:01:18.373Z',
  modifiedOn: '2019-01-31T20:34:40.057Z',
  createdBy: String(MOCK_USER_ID),
  modifiedBy: String(MOCK_USER_ID_2),
}

export const mockChallengeParticipantTeamData: Readonly<Team> = {
  id: String(MOCK_CHALLENGE_PARTICIPANT_TEAM_ID),
  name: 'Mock team with open invitation',
  description: 'A team that users must join to participate in the challenge',
  icon: '',
  canPublicJoin: true,
  etag: 'f29b79d6-5b63-4641-93c7-30d954b4328c',
  createdOn: '2013-11-02T01:01:18.373Z',
  modifiedOn: '2019-01-31T20:34:40.057Z',
  createdBy: String(MOCK_USER_ID),
  modifiedBy: String(MOCK_USER_ID_2),
}

export const mockTeamUserGroup: MockUserOrTeamData = {
  id: MOCK_TEAM_ID,
  userProfile: null,
  userBundle: null,
  userGroupHeader: {
    ownerId: MOCK_TEAM_ID.toString(),
    userName: mockTeamData.name,
    isIndividual: false,
  },
}

export const mockActData: MockUserOrTeamData = {
  id: ACT_TEAM_ID,
  userProfile: null,
  userBundle: null,
  userGroupHeader: {
    ownerId: ACT_TEAM_ID.toString(),
    userName: 'Synapse Access and Compliance Team',
    isIndividual: false,
  },
}

export const mockTeams: readonly Readonly<Team>[] = [
  mockTeamData,
  mockTeamData2,
  mockTeamData3,
  mockTeamData4,
  mockChallengeParticipantTeamData,
]

export const mockTeamMembershipStatuses: readonly Readonly<TeamMembershipStatus>[] =
  [
    {
      teamId: mockTeamData.id,
      userId: String(MOCK_USER_ID),
      isMember: true,
      hasOpenInvitation: false,
      hasOpenRequest: false,
      canJoin: true,
      membershipApprovalRequired: true,
      hasUnmetAccessRequirement: false,
      canSendEmail: true,
    },
    {
      teamId: mockTeamData2.id,
      userId: String(MOCK_USER_ID),
      isMember: false,
      hasOpenInvitation: false,
      hasOpenRequest: false,
      canJoin: true,
      membershipApprovalRequired: false,
      hasUnmetAccessRequirement: false,
      canSendEmail: false,
    },
    {
      teamId: mockTeamData3.id,
      userId: String(MOCK_USER_ID),
      isMember: false,
      hasOpenInvitation: false,
      hasOpenRequest: false,
      canJoin: false,
      membershipApprovalRequired: true,
      hasUnmetAccessRequirement: false,
      canSendEmail: false,
    },
    {
      teamId: mockTeamData4.id,
      userId: String(MOCK_USER_ID),
      isMember: false,
      hasOpenInvitation: true,
      hasOpenRequest: false,
      canJoin: false,
      membershipApprovalRequired: true,
      hasUnmetAccessRequirement: false,
      canSendEmail: false,
    },
  ]
