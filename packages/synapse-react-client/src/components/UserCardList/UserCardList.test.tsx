import { server } from '@/mocks/msw/server'
import { mockUserProfileData } from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseConstants } from '@/utils'
import { getUserProfileWithProfilePicAttached } from '@/utils/functions/getUserData'
import { UserProfile } from '@sage-bionetworks/synapse-types'
import { render, waitFor } from '@testing-library/react'
import UserCardList, { UserCardListProps } from './UserCardList'

vi.mock(import('../../utils/functions/getUserData'), async importOriginal => {
  const actual = await importOriginal()
  return {
    ...actual,
    getUserProfileWithProfilePicAttached: vi.fn(),
  }
})

const mockGetUserProfileWithProfilePicAttached = vi.mocked(
  getUserProfileWithProfilePicAttached,
)

function renderComponent(props: UserCardListProps) {
  return render(<UserCardList {...props} />, { wrapper: createWrapper() })
}

describe('UserCardList tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => {
    server.restoreHandlers()
    mockGetUserProfileWithProfilePicAttached.mockReset()
  })
  afterAll(() => server.close())

  const userOneId = '1'
  const userTwoId = '2'
  const userThreeId = '3'

  const propsInitial: UserCardListProps = {
    list: [userOneId, userTwoId],
    size: SynapseConstants.MEDIUM_USER_CARD,
  }

  const propsSecond: UserCardListProps = {
    list: [userOneId, userThreeId],
    size: SynapseConstants.MEDIUM_USER_CARD,
  }

  const mockedDataFirstCall: { list: UserProfile[] } = {
    list: [
      { ...mockUserProfileData, ownerId: userOneId },
      { ...mockUserProfileData, ownerId: userTwoId },
    ],
  }

  const mockedDataSecondCall: { list: UserProfile[] } = {
    list: [
      { ...mockUserProfileData, ownerId: userOneId },
      { ...mockUserProfileData, ownerId: userThreeId },
    ],
  }

  it('renders without crashing', () => {
    mockGetUserProfileWithProfilePicAttached.mockResolvedValue(
      mockedDataFirstCall,
    )
    const { container } = renderComponent(propsInitial)
    expect(container).toBeDefined()
  })

  it('fetches profiles for the provided ids and refetches when the id set changes', async () => {
    mockGetUserProfileWithProfilePicAttached.mockResolvedValue(
      mockedDataFirstCall,
    )
    const { rerender } = renderComponent(propsInitial)
    await waitFor(() => {
      expect(mockGetUserProfileWithProfilePicAttached).toHaveBeenCalledWith([
        userOneId,
        userTwoId,
      ])
    })

    mockGetUserProfileWithProfilePicAttached.mockResolvedValue(
      mockedDataSecondCall,
    )
    rerender(<UserCardList {...propsSecond} />)
    await waitFor(() => {
      expect(mockGetUserProfileWithProfilePicAttached).toHaveBeenCalledWith([
        userOneId,
        userThreeId,
      ])
    })
  })

  it('does not fetch when the id list is empty', () => {
    mockGetUserProfileWithProfilePicAttached.mockResolvedValue({ list: [] })
    renderComponent({ list: [], size: SynapseConstants.MEDIUM_USER_CARD })
    expect(mockGetUserProfileWithProfilePicAttached).not.toHaveBeenCalled()
  })
})
