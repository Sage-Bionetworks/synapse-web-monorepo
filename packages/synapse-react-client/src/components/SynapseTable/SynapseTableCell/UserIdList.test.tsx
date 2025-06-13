import { MOCK_USER_ID, MOCK_USER_ID_2 } from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen, waitFor } from '@testing-library/react'
import UserIdList, { UserIdListProps } from './UserIdList'

const USER_OR_TEAM_BADGE_TEST_ID = 'UserOrTeamBadge'

vi.mock('../../UserOrTeamBadge', () => ({
  __esModule: true,
  default: () => <div data-testid={USER_OR_TEAM_BADGE_TEST_ID}></div>,
}))

describe('UserIdList: basic functionality', () => {
  const props: UserIdListProps = {
    userIds: [MOCK_USER_ID.toString(), MOCK_USER_ID_2.toString()],
  }

  it('renders badges', async () => {
    render(<UserIdList {...props} />, {
      wrapper: createWrapper(),
    })
    await waitFor(() => {
      const badges = screen.getAllByTestId(USER_OR_TEAM_BADGE_TEST_ID)
      expect(badges).toHaveLength(2)
    })
  })
})
