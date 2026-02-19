import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import { server } from '@/mocks/msw/server'
import { MOCK_TEAM_ID, mockTeamUserGroups } from '@/mocks/team/mockTeam'
import {
  mockUserData1,
  mockUserData2,
  mockUserData3,
} from '@/mocks/user/mock_user_profile'
import {
  mockAnonymousUserGroupData,
  mockAuthenticatedGroupData,
  mockPublicGroupData,
} from '@/mocks/usergroup/mockUserGroup'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { getAccessTypeFromPermissionLevel } from '@/utils/PermissionLevelToAccessType'
import {
  MOCK_ANONYMOUS_PRINCIPAL_ID as ANONYMOUS_PRINCIPAL_ID,
  MOCK_AUTHENTICATED_PRINCIPAL_ID as AUTHENTICATED_PRINCIPAL_ID,
  MOCK_PUBLIC_PRINCIPAL_ID as PUBLIC_PRINCIPAL_ID,
} from '@/mocks/realm/mockRealmPrincipal'
import { ResourceAccess } from '@sage-bionetworks/synapse-types'
import { act, renderHook, waitFor } from '@testing-library/react'
import useNotifyNewACLUsers, {
  shouldNotifyUserInNewResourceAccess,
} from './useNotifyNewACLUsers'

const subject = 'the message subject'
const body = 'the message body'

const PUBLIC_PRINCIPAL_IDS = [
  String(AUTHENTICATED_PRINCIPAL_ID),
  String(PUBLIC_PRINCIPAL_ID),
  String(ANONYMOUS_PRINCIPAL_ID),
]

const CURRENT_USER_RESOURCE_ACCESS: ResourceAccess = {
  principalId: mockUserData1.id,
  accessType: getAccessTypeFromPermissionLevel('CAN_ADMINISTER'),
}

const sendMessageSpy = vi.spyOn(SynapseClient, 'sendMessage')

describe('useNotifyNewACLUsers', () => {
  beforeEach(() => vi.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Sends a notification to new users', async () => {
    const initialResourceAccessList: ResourceAccess[] = [
      CURRENT_USER_RESOURCE_ACCESS,
    ]
    const newResourceAccessList: ResourceAccess[] = [
      CURRENT_USER_RESOURCE_ACCESS,
      // add user 2
      {
        principalId: mockUserData2.id,
        accessType: getAccessTypeFromPermissionLevel('CAN_DOWNLOAD'),
      },
    ]

    const { result } = renderHook(
      () =>
        useNotifyNewACLUsers({
          subject,
          body,
          initialResourceAccessList,
          newResourceAccessList,
        }),
      {
        wrapper: createWrapper(),
      },
    )

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    act(() => {
      result.current.sendNotification()
    })

    await waitFor(() => {
      expect(result.current.isPending).toBe(false)
      expect(sendMessageSpy).toHaveBeenCalledTimes(1)
      expect(sendMessageSpy).toHaveBeenCalledWith(
        [String(mockUserData2.id)],
        subject,
        body,
        MOCK_ACCESS_TOKEN,
      )
    })
  })

  it('Does not send a notification if no users should be notified', async () => {
    const initialResourceAccessList: ResourceAccess[] = [
      CURRENT_USER_RESOURCE_ACCESS,
      {
        principalId: mockUserData2.id,
        accessType: getAccessTypeFromPermissionLevel('CAN_DOWNLOAD'),
      },
      {
        principalId: mockUserData3.id,
        accessType: getAccessTypeFromPermissionLevel('CAN_DOWNLOAD'),
      },
    ]
    const newResourceAccessList: ResourceAccess[] = [
      CURRENT_USER_RESOURCE_ACCESS,
      // change permission of user 2
      {
        principalId: mockUserData2.id,
        accessType: getAccessTypeFromPermissionLevel('CAN_EDIT_DELETE'),
      },
      // removed user 3
    ]

    const { result } = renderHook(
      () =>
        useNotifyNewACLUsers({
          subject,
          body,
          initialResourceAccessList,
          newResourceAccessList,
        }),
      {
        wrapper: createWrapper(),
      },
    )

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    act(() => {
      result.current.sendNotification()
    })

    await waitFor(() => {
      expect(result.current.isPending).toBe(false)
      expect(sendMessageSpy).toHaveBeenCalledTimes(0)
    })
  })
})

describe('shouldNotifyUserInNewResourceAccess', () => {
  const CURRENT_USER_ID = String(mockUserData1.id)
  it('is true for new users and false for existing users', () => {
    const initialResourceAccessList: ResourceAccess[] = [
      CURRENT_USER_RESOURCE_ACCESS,
      {
        principalId: mockUserData2.id,
        accessType: getAccessTypeFromPermissionLevel('CAN_DOWNLOAD'),
      },
    ]

    // User 1 is in the list (and is the current user)
    expect(
      shouldNotifyUserInNewResourceAccess(
        mockUserData1.id,
        initialResourceAccessList,
        mockUserData2.userGroupHeader,
        CURRENT_USER_ID,
        PUBLIC_PRINCIPAL_IDS,
      ),
    ).toBe(false)
    // User 2 is in the list
    expect(
      shouldNotifyUserInNewResourceAccess(
        mockUserData2.id,
        initialResourceAccessList,
        mockUserData2.userGroupHeader,
        String(mockUserData1.id),
        PUBLIC_PRINCIPAL_IDS,
      ),
    ).toBe(false)
    // User 3 is not in the list
    expect(
      shouldNotifyUserInNewResourceAccess(
        mockUserData3.id,
        initialResourceAccessList,
        mockUserData3.userGroupHeader,
        CURRENT_USER_ID,
        PUBLIC_PRINCIPAL_IDS,
      ),
    ).toBe(true)
  })

  it('Does not send a notification to the current user', () => {
    const initialResourceAccessList: ResourceAccess[] = [
      {
        principalId: MOCK_TEAM_ID,
        accessType: getAccessTypeFromPermissionLevel('CAN_ADMINISTER'),
      },
    ]
    // The team is in the list (and is a team) so it should not be notified
    expect(
      shouldNotifyUserInNewResourceAccess(
        MOCK_TEAM_ID,
        initialResourceAccessList,
        mockTeamUserGroups.find(team => team.id === MOCK_TEAM_ID)!
          .userGroupHeader,
        CURRENT_USER_ID,
        PUBLIC_PRINCIPAL_IDS,
      ),
    ).toBe(false)
    // User 1 is not in the list, but is the current user, so they should not be notified
    expect(
      shouldNotifyUserInNewResourceAccess(
        mockUserData1.id,
        initialResourceAccessList,
        mockUserData1.userGroupHeader,
        CURRENT_USER_ID,
        PUBLIC_PRINCIPAL_IDS,
      ),
    ).toBe(false)
  })

  it('Does not send a notification to public users or groups', () => {
    const initialResourceAccessList: ResourceAccess[] = [
      CURRENT_USER_RESOURCE_ACCESS,
    ]

    expect(
      shouldNotifyUserInNewResourceAccess(
        AUTHENTICATED_PRINCIPAL_ID,
        initialResourceAccessList,
        mockAuthenticatedGroupData.userGroupHeader,
        CURRENT_USER_ID,
        PUBLIC_PRINCIPAL_IDS,
      ),
    ).toBe(false)
    expect(
      shouldNotifyUserInNewResourceAccess(
        PUBLIC_PRINCIPAL_ID,
        initialResourceAccessList,
        mockPublicGroupData.userGroupHeader,
        CURRENT_USER_ID,
        PUBLIC_PRINCIPAL_IDS,
      ),
    ).toBe(false)
    expect(
      shouldNotifyUserInNewResourceAccess(
        ANONYMOUS_PRINCIPAL_ID,
        initialResourceAccessList,
        mockAnonymousUserGroupData.userGroupHeader,
        CURRENT_USER_ID,
        PUBLIC_PRINCIPAL_IDS,
      ),
    ).toBe(false)
  })

  it('Does not send a notification to teams', () => {
    const initialResourceAccessList: ResourceAccess[] = [
      CURRENT_USER_RESOURCE_ACCESS,
    ]

    expect(
      shouldNotifyUserInNewResourceAccess(
        MOCK_TEAM_ID,
        initialResourceAccessList,
        mockTeamUserGroups.find(team => team.id === MOCK_TEAM_ID)!
          .userGroupHeader,
        CURRENT_USER_ID,
        PUBLIC_PRINCIPAL_IDS,
      ),
    ).toBe(false)
  })
})
