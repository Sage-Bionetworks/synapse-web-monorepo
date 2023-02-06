import * as React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import UserIdList, {
  UserIdListProps,
} from '../../../src/lib/containers/UserIdList'
import { act } from '@testing-library/react'
import {
  MOCK_CONTEXT_VALUE,
  SynapseTestContext,
} from '../../../mocks/MockSynapseContext'
import { render, screen, waitFor } from '@testing-library/react'
import {
  mockUserProfileData,
  MOCK_USER_ID,
  MOCK_USER_NAME,
} from '../../../mocks/user/mock_user_profile'
import { SynapseClient } from '../../../src/lib/utils'

jest
  .spyOn(SynapseClient, 'getUserProfiles')
  .mockResolvedValue({ list: [mockUserProfileData] })

describe('UserIdList: basic functionality', () => {
  const props: UserIdListProps = {
    userIds: [`${MOCK_USER_ID}`],
  }

  it('renders and retrieves data without crashing', async () => {
    render(<UserIdList {...props} />, {
      wrapper: SynapseTestContext,
    })
    act(() => {
      mockAllIsIntersecting(true)
    })
    await waitFor(() =>
      expect(SynapseClient.getUserProfiles).toBeCalledWith(
        props.userIds,
        MOCK_CONTEXT_VALUE.accessToken,
      ),
    )
    await screen.findByText(`@${MOCK_USER_NAME}`)
  })
})
