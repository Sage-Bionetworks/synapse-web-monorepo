import {
  mockUserData1,
  mockUserData2,
  mockUserData3,
  MockUserOrTeamData,
} from '../user/mock_user_profile'
import { mockTeamUserGroups } from '../team/mockTeam'
import {
  AUTHENTICATED_PRINCIPAL_ID,
  PUBLIC_PRINCIPAL_ID,
} from '../../utils/SynapseConstants'

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
export const mockUserGroupData: MockUserOrTeamData[] = [
  mockUserData1,
  mockUserData2,
  mockUserData3,
  ...mockTeamUserGroups,
  mockAuthenticatedGroupData,
  mockPublicGroupData,
]
