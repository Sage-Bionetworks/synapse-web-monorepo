import { SynapseTestContext } from '@/mocks/MockSynapseContext'
import { useGetUserChallengesInfinite } from '@/synapse-queries/user/useGetUserChallenges'
import { getUseInfiniteQueryMock } from '@/testutils/ReactQueryMockUtils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import {
  ChallengeWithProjectHeader,
  ChallengeWithProjectHeaderPagedResults,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen } from '@testing-library/react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import UserChallenges from './UserChallenges'

vi.mock('@/synapse-queries/user/useGetUserChallenges', () => {
  return {
    useGetUserChallengesInfinite: vi.fn(),
  }
})

const mockUseGetUserChallengesInfinite = vi.mocked(useGetUserChallengesInfinite)
const userId = '10000'
const page1: ChallengeWithProjectHeader[] = [
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
  } as ChallengeWithProjectHeader,
]

const page2: ChallengeWithProjectHeader[] = [
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
  } as ChallengeWithProjectHeader,
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
    vi.clearAllMocks()
  })
  it('loads more challenges when inView', async () => {
    const { mock, mockFetchNextPage, setSuccess } = getUseInfiniteQueryMock<
      ChallengeWithProjectHeaderPagedResults,
      SynapseClientError
    >()
    mockUseGetUserChallengesInfinite.mockImplementation(mock)

    renderComponent()

    act(() => {
      setSuccess(
        [
          {
            results: page1,
            totalNumberOfResults: 2,
          },
        ],
        true,
      )
    })

    await screen.findByText('The first')
    expect(screen.queryByText('The second')).not.toBeInTheDocument()

    act(() => {
      mockAllIsIntersecting(true)
    })
    expect(mockFetchNextPage).toHaveBeenCalled()

    act(() => {
      setSuccess(
        [
          {
            results: page1,
            totalNumberOfResults: 2,
          },
          {
            results: page2,
            totalNumberOfResults: 2,
          },
        ],
        false,
      )
    })

    await screen.findByText('The second')
  })
})
