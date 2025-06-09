import { server } from '@/mocks/msw/server'
import { mockUserProfileData } from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseConstants } from '@/utils'
import { getUserProfileWithProfilePicAttached } from '@/utils/functions/getUserData'
import { UserProfile } from '@sage-bionetworks/synapse-types'
import { render } from '@testing-library/react'
import UserCardList, { UserCardListProps } from './UserCardList'

vi.mock('../../utils/functions/getUserData', () => ({
  getUserProfileWithProfilePicAttached: vi.fn(),
}))

const mockGetUserProfileWithProfilePicAttached = vi.mocked(
  getUserProfileWithProfilePicAttached,
)

function renderComponent(props: UserCardListProps) {
  return render(<UserCardList {...props} />, { wrapper: createWrapper() })
}

describe('UserCardList tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
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

  const propsLast: UserCardListProps = {
    list: [userThreeId],
    size: SynapseConstants.MEDIUM_USER_CARD,
  }

  const mockedDataFirstCall: { list: UserProfile[] } = {
    list: [
      {
        ...mockUserProfileData,
        ownerId: userOneId,
      },
      {
        ...mockUserProfileData,
        ownerId: userTwoId,
      },
    ],
  }

  const mockedDataSecondCall: { list: UserProfile[] } = {
    list: [
      {
        ...mockUserProfileData,
        ownerId: userThreeId,
      },
    ],
  }

  mockGetUserProfileWithProfilePicAttached.mockResolvedValue(
    mockedDataFirstCall,
  )

  it('renders without crashing', () => {
    const { container } = renderComponent(propsInitial)
    expect(container).toBeDefined()
  })

  it('updates state correctly', () => {
    const spyOnUpdate = vi.spyOn(UserCardList.prototype, 'update')
    const { rerender } = renderComponent(propsInitial)
    expect(spyOnUpdate).toHaveBeenLastCalledWith(propsInitial.list)

    // it should see that it was updated with a new ownerId not already contained
    spyOnUpdate.mockClear()
    mockGetUserProfileWithProfilePicAttached.mockResolvedValue(
      mockedDataSecondCall,
    )
    rerender(<UserCardList {...propsSecond} />)

    expect(spyOnUpdate).toHaveBeenLastCalledWith([userThreeId])

    // it should see that it was updated with a new ownerId that was contained already
    spyOnUpdate.mockClear()
    mockGetUserProfileWithProfilePicAttached.mockReset() // mock no longer matters
    rerender(<UserCardList {...propsLast} />)
    expect(spyOnUpdate).not.toHaveBeenCalled()
    spyOnUpdate.mockClear()
  })
})
