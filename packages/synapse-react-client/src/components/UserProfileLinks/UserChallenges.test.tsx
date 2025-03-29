import '@testing-library/jest-dom'
import { SynapseTestContext } from '@/mocks/MockSynapseContext'
import { useGetUserChallengesInfinite } from '@/synapse-queries/user/useGetUserChallenges'
import { ChallengeWithProjectHeader } from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import UserChallenges from './UserChallenges'

jest.mock('../../../src/synapse-queries/user/useGetUserChallenges', () => {
  return {
    useGetUserChallengesInfinite: jest.fn(),
  }
})

const mockFetchNextPage = jest.fn()
const mockUseGetUserChallengesInfinite =
  useGetUserChallengesInfinite as jest.Mock
const userId = '10000'
const page1: Partial<ChallengeWithProjectHeader>[] = [
  {
    challenge: {
      id: '100',
      projectId: 'syn100',
      etag: '123456',
      participantTeamId: '1000',
    },
    projectHeader: {
      id: '100',
      name: 'The first',
      benefactorId: 1,
      createdBy: 'x',
      createdOn: 'today',
      modifiedBy: 'y',
      modifiedOn: 'today',
      type: 'org.sagebionetworks.repo.model.Project',
      isLatestVersion: true,
    },
  },
]

const page2: Partial<ChallengeWithProjectHeader>[] = [
  {
    challenge: {
      id: '101',
      projectId: 'syn101',
      etag: '123456',
      participantTeamId: '1000',
    },
    projectHeader: {
      id: '101',
      name: 'The second',
      benefactorId: 1,
      createdBy: 'x',
      createdOn: 'today',
      modifiedBy: 'y',
      modifiedOn: 'today',
      type: 'org.sagebionetworks.repo.model.Project',
      isLatestVersion: true,
    },
  },
]

function renderComponent() {
  return render(
    <SynapseTestContext>
      <UserChallenges userId={userId} />
    </SynapseTestContext>,
  )
}

describe('UserChallenges tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('loads more challenges when inView', async () => {
    mockAllIsIntersecting(true)
    mockUseGetUserChallengesInfinite.mockReturnValue({
      data: {
        pages: [
          {
            results: page1,
            totalNumberOfResults: 2,
          },
          {
            results: page2,
            totalNumberOfResults: 2,
          },
        ],
        pageParams: [],
      },
      fetchNextPage: mockFetchNextPage,
      hasNextPage: true,
      isLoading: false,
      isSuccess: true,
    })

    renderComponent()
    const item1 = await screen.findAllByText('The first')
    expect(item1).toHaveLength(1)
    const item2 = await screen.findAllByText('The second')
    expect(item2).toHaveLength(1)
  })
})
