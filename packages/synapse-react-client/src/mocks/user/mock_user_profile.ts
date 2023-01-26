import { ACT_TEAM_ID } from '../../lib/utils/SynapseConstants'
import {
  UserBundle,
  UserGroupHeader,
  UserProfile,
} from '../../lib/utils/synapseTypes'

export const MOCK_USER_ID = 999
export const MOCK_USER_NAME = 'myUserName'

export const mockUserProfileData: UserProfile = {
  summary: 'My summary bio',
  firstName: 'First',
  lastName: 'Last',
  location: 'Seattle, WA, USA',
  industry: 'Biotechnology',
  company: 'Sage Bionetworks',
  position: 'My Job Title',
  ownerId: MOCK_USER_ID.toString(),
  userName: MOCK_USER_NAME,
  createdOn: '2018-06-18T21:42:48.000Z',
  url: 'https://sagebase.org',
}

export const mockUserBundle: UserBundle = {
  userId: MOCK_USER_ID.toString(),
  userProfile: mockUserProfileData,
  ORCID: 'https://orcid.org/0000-0000-0000-0000',
  isCertified: true,
  isVerified: true,
  isACTMember: false,
}

export const mockUserGroupHeader: UserGroupHeader = {
  ownerId: MOCK_USER_ID.toString(),
  firstName: mockUserProfileData.firstName,
  lastName: mockUserProfileData.lastName,
  userName: MOCK_USER_NAME,
  email: 'test-user-email@sagebase.org',
  displayName: 'Display Name',
  isIndividual: true,
}

export const MOCK_USER_ID_2 = 1000
export const MOCK_USER_NAME_2 = 'AnotherUser'

export const mockUserProfileData2: UserProfile = {
  summary: 'This is the summary of an additional user',
  firstName: 'John',
  lastName: 'Doe',
  location: 'Boston, MA, USA',
  industry: 'Research Science',
  company: 'Some Company Inc.',
  position: 'Lead Scientist',
  ownerId: MOCK_USER_ID_2.toString(),
  userName: MOCK_USER_NAME_2,
  createdOn: '2018-06-18T21:42:48.000Z',
  url: 'https://sagebase.org',
}

export const mockUserBundle2: UserBundle = {
  userId: MOCK_USER_ID_2.toString(),
  userProfile: mockUserProfileData2,
  ORCID: 'https://orcid.org/0000-0000-0000-0000',
  isCertified: true,
  isVerified: true,
  isACTMember: false,
}

export const mockUserGroupHeader2: UserGroupHeader = {
  ownerId: MOCK_USER_ID_2.toString(),
  firstName: mockUserProfileData2.firstName,
  lastName: mockUserProfileData2.lastName,
  userName: MOCK_USER_NAME_2,
  email: 'another-test-user@sagebase.org',
  displayName: 'Johnathan Doegherty',
  isIndividual: true,
}

type MockUserOrTeamData = {
  id: number
  userProfile: UserProfile | null
  userBundle: UserBundle | null
  userGroupHeader: UserGroupHeader
}

const mockUserData1: MockUserOrTeamData = {
  id: MOCK_USER_ID,
  userProfile: mockUserProfileData,
  userBundle: mockUserBundle,
  userGroupHeader: mockUserGroupHeader,
}

const mockUserData2: MockUserOrTeamData = {
  id: MOCK_USER_ID_2,
  userProfile: mockUserProfileData2,
  userBundle: mockUserBundle2,
  userGroupHeader: mockUserGroupHeader2,
}

const mockActData: MockUserOrTeamData = {
  id: ACT_TEAM_ID,
  userProfile: null,
  userBundle: null,
  userGroupHeader: {
    ownerId: ACT_TEAM_ID.toString(),
    userName: 'Synapse Access and Compliance Team',
    isIndividual: false,
  },
}

export const mockUserData: MockUserOrTeamData[] = [
  mockUserData1,
  mockUserData2,
  mockActData,
]

export const MOCK_TEAM_ID = 987654
