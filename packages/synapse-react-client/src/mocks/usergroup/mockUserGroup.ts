import {
  MOCK_ANONYMOUS_PRINCIPAL_ID as ANONYMOUS_PRINCIPAL_ID,
  MOCK_AUTHENTICATED_PRINCIPAL_ID as AUTHENTICATED_PRINCIPAL_ID,
  MOCK_PUBLIC_PRINCIPAL_ID as PUBLIC_PRINCIPAL_ID,
} from '@/mocks/realm/mockRealmPrincipal'
import { mockTeamUserGroups } from '../team/mockTeam'
import {
  mockUserData1,
  mockUserData2,
  mockUserData3,
  MockUserOrTeamData,
} from '../user/mock_user_profile'

export const mockPublicGroupData: MockUserOrTeamData = {
  id: PUBLIC_PRINCIPAL_ID,
  userProfile: null,
  userBundle: null,
  userGroupHeader: {
    ownerId: PUBLIC_PRINCIPAL_ID.toString(),
    userName: 'PUBLIC',
    isIndividual: false,
  },
}
export const mockAuthenticatedGroupData: MockUserOrTeamData = {
  id: AUTHENTICATED_PRINCIPAL_ID,
  userProfile: null,
  userBundle: null,
  userGroupHeader: {
    ownerId: AUTHENTICATED_PRINCIPAL_ID.toString(),
    userName: 'AUTHENTICATED_USERS',
    isIndividual: false,
  },
}
export const mockAnonymousUserGroupData: MockUserOrTeamData = {
  id: ANONYMOUS_PRINCIPAL_ID,
  userProfile: null,
  userBundle: null,
  userGroupHeader: {
    ownerId: String(ANONYMOUS_PRINCIPAL_ID),
    firstName: 'Anonymous',
    lastName: '',
    userName: 'anonymous',
    isIndividual: true,
  },
}

export const mockUserGroupData: MockUserOrTeamData[] = [
  mockUserData1,
  mockUserData2,
  mockUserData3,
  ...mockTeamUserGroups,
  mockAuthenticatedGroupData,
  mockPublicGroupData,
  mockAnonymousUserGroupData,
]
