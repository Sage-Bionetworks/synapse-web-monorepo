import {
  UserBundle,
  UserGroupHeader,
  UserProfile,
} from '@sage-bionetworks/synapse-types'

export const MOCK_USER_ID = 999
export const MOCK_USER_NAME = 'myUserName'

export const mockUserProfileData = {
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
  email: 'mockemail@fakeemailprovider.xyz',
  twoFactorAuthEnabled: false,
} satisfies UserProfile

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
  twoFactorAuthEnabled: false,
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

export const MOCK_USER_ID_3 = 1001
export const MOCK_USER_NAME_3 = 'heisenberg'

export const mockUserProfileData3: UserProfile = {
  summary:
    'My name is Walter Hartwell White. I live at 308 Negra Arroyo Lane, Albuquerque, New Mexico, 87104.',
  firstName: 'Walter',
  lastName: 'White',
  location: 'Albuquerque, NM, USA',
  industry: 'Chemistry',
  company: 'J. P. Wynne HS',
  position: 'High School Teacher',
  ownerId: MOCK_USER_ID_3.toString(),
  userName: MOCK_USER_NAME_3,
  createdOn: '2008-01-20T18:12:39.000Z',
  url: 'https://sagebase.org',
  twoFactorAuthEnabled: true,
}

export const mockUserBundle3: UserBundle = {
  userId: MOCK_USER_ID_3.toString(),
  userProfile: mockUserProfileData3,
  ORCID: 'https://orcid.org/0000-0000-0000-0000',
  isCertified: true,
  isVerified: true,
  isACTMember: false,
}

export const mockUserGroupHeader3: UserGroupHeader = {
  ownerId: MOCK_USER_ID_3.toString(),
  firstName: mockUserProfileData3.firstName,
  lastName: mockUserProfileData3.lastName,
  userName: MOCK_USER_NAME_3,
  email: 'heisenberg@polloshermanos.com',
  displayName: 'Walter White',
  isIndividual: true,
}

export type MockUserOrTeamData = {
  id: number
  userProfile: UserProfile | null
  userBundle: UserBundle | null
  userGroupHeader: UserGroupHeader
}

export const mockUserData1: MockUserOrTeamData = {
  id: MOCK_USER_ID,
  userProfile: mockUserProfileData,
  userBundle: mockUserBundle,
  userGroupHeader: mockUserGroupHeader,
}

export const mockUserData2: MockUserOrTeamData = {
  id: MOCK_USER_ID_2,
  userProfile: mockUserProfileData2,
  userBundle: mockUserBundle2,
  userGroupHeader: mockUserGroupHeader2,
}

export const mockUserData3: MockUserOrTeamData = {
  id: MOCK_USER_ID_3,
  userProfile: mockUserProfileData3,
  userBundle: mockUserBundle3,
  userGroupHeader: mockUserGroupHeader3,
}

export const mockUserData: MockUserOrTeamData[] = [
  mockUserData1,
  mockUserData2,
  mockUserData3,
]
