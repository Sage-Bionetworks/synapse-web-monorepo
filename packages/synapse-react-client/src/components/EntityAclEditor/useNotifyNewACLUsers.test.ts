import { server } from '../../mocks/msw/server'
import { act, renderHook, waitFor } from '@testing-library/react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import useNotifyNewACLUsers from './useNotifyNewACLUsers'
import SynapseClient from '../../synapse-client'
import { ResourceAccess } from '@sage-bionetworks/synapse-types'
import {
  mockUserData1,
  mockUserData2,
} from '../../mocks/user/mock_user_profile'
import { getAccessTypeFromPermissionLevel } from '../../utils/PermissionLevelToAccessType'
import { MOCK_ACCESS_TOKEN } from '../../mocks/MockSynapseContext'
import { MOCK_TEAM_ID } from '../../mocks/team/mockTeam'
import {
  ANONYMOUS_PRINCIPAL_ID,
  AUTHENTICATED_PRINCIPAL_ID,
  PUBLIC_PRINCIPAL_ID,
} from '../../utils/SynapseConstants'

const subject = 'the message subject'
const body = 'the message body'

const CURRENT_USER_RESOURCE_ACCESS: ResourceAccess = {
  principalId: mockUserData1.id,
  accessType: getAccessTypeFromPermissionLevel('CAN_ADMINISTER'),
}

const sendMessageSpy = jest.spyOn(SynapseClient, 'sendMessage')

describe('useNotifyNewACLUsers', () => {
  beforeEach(() => jest.clearAllMocks())
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

  it('Does not send a notification to users that were on the original resource access list', async () => {
    const initialResourceAccessList: ResourceAccess[] = [
      CURRENT_USER_RESOURCE_ACCESS,
      {
        principalId: mockUserData2.id,
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

  it('Does not send a notification to the current user', async () => {
    const initialResourceAccessList: ResourceAccess[] = [
      {
        principalId: MOCK_TEAM_ID,
        accessType: getAccessTypeFromPermissionLevel('CAN_ADMINISTER'),
      },
    ]
    const newResourceAccessList: ResourceAccess[] = [
      {
        principalId: MOCK_TEAM_ID,
        accessType: getAccessTypeFromPermissionLevel('CAN_ADMINISTER'),
      },
      // e.g. the user may be on a team, then explicitly adds themselves
      CURRENT_USER_RESOURCE_ACCESS,
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
  it('Does not send a notification to public users or groups', async () => {
    const initialResourceAccessList: ResourceAccess[] = [
      CURRENT_USER_RESOURCE_ACCESS,
    ]
    const newResourceAccessList: ResourceAccess[] = [
      CURRENT_USER_RESOURCE_ACCESS,
      {
        principalId: AUTHENTICATED_PRINCIPAL_ID,
        accessType: getAccessTypeFromPermissionLevel('CAN_VIEW'),
      },
      {
        principalId: PUBLIC_PRINCIPAL_ID,
        accessType: getAccessTypeFromPermissionLevel('CAN_VIEW'),
      },
      {
        principalId: ANONYMOUS_PRINCIPAL_ID,
        accessType: getAccessTypeFromPermissionLevel('CAN_VIEW'),
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
      expect(sendMessageSpy).toHaveBeenCalledTimes(0)
    })
  })
  it('Does not send a notification to teams', async () => {
    const initialResourceAccessList: ResourceAccess[] = [
      CURRENT_USER_RESOURCE_ACCESS,
    ]
    const newResourceAccessList: ResourceAccess[] = [
      CURRENT_USER_RESOURCE_ACCESS,
      {
        principalId: MOCK_TEAM_ID,
        accessType: getAccessTypeFromPermissionLevel('CAN_ADMINISTER'),
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
      expect(sendMessageSpy).toHaveBeenCalledTimes(0)
    })
  })
})
