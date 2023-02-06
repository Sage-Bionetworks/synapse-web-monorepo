import { render } from '@testing-library/react'
import React from 'react'
import UserCardList, {
  UserCardListProps,
} from '../../../src/lib/containers/UserCardList'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { SynapseConstants } from '../../../src/lib/utils'
import { server } from '../../../mocks/msw/server'

function renderComponent(props: UserCardListProps) {
  return render(<UserCardList {...props} />, { wrapper: createWrapper() })
}

describe('UserCardList tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  const getUserData = require('../../../src/lib/utils/functions/getUserData')
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

  const mockedDataFirstCall = {
    list: [
      {
        ownerId: userOneId,
      },
      {
        ownerId: userTwoId,
      },
    ],
  }

  const mockedDataSecondCall = {
    list: [
      {
        ownerId: userThreeId,
      },
    ],
  }

  let mockImplementation = jest.fn(() => Promise.resolve(mockedDataFirstCall))

  getUserData.getUserProfileWithProfilePicAttached = mockImplementation

  it('renders without crashing', () => {
    const { container } = renderComponent(propsInitial)
    expect(container).toBeDefined()
  })

  it('updates state correctly', () => {
    const spyOnUpdate = jest.spyOn(UserCardList.prototype, 'update')
    const { rerender } = renderComponent(propsInitial)
    expect(spyOnUpdate).toHaveBeenLastCalledWith(propsInitial.list)

    // it should see that it was updated with a new ownerId not already contained
    spyOnUpdate.mockClear()
    mockImplementation = jest.fn(() => Promise.resolve(mockedDataSecondCall))
    rerender(<UserCardList {...propsSecond} />)

    expect(spyOnUpdate).toHaveBeenLastCalledWith([userThreeId])

    // it should see that it was updated with a new ownerId that was contained already
    spyOnUpdate.mockClear()
    mockImplementation = jest.fn() // mock no longer matters
    rerender(<UserCardList {...propsLast} />)
    expect(spyOnUpdate).not.toHaveBeenCalled()
    spyOnUpdate.mockClear()
  })
})
