import { SynapseTestContext } from '@/mocks/MockSynapseContext'
import { useGetUserTeamsInfinite } from '@/synapse-queries/user/useGetUserTeams'
import { getUseInfiniteQueryMock } from '@/testutils/ReactQueryMockUtils'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import { PaginatedResults, Team } from '@sage-bionetworks/synapse-types'
import { act, render, screen } from '@testing-library/react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import UserTeams from './UserTeams'

vi.mock('@/synapse-queries/user/useGetUserTeams', () => {
  return {
    useGetUserTeamsInfinite: vi.fn(),
  }
})

const mockUseGetUserTeamsInfinite = vi.mocked(useGetUserTeamsInfinite)
const userId = '10000'
const page1: Team[] = [
  {
    id: '100',
    name: 'The first',
  } as Team,
]

const page2: Team[] = [
  {
    id: '101',
    name: 'The second',
  } as Team,
]

function renderComponent() {
  return render(
    <SynapseTestContext>
      <UserTeams userId={userId} />
    </SynapseTestContext>,
  )
}

describe('UserTeams tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  it('loads more teams when inView', async () => {
    const {
      mock: mockUseGetUserTeamsInfiniteImplementation,
      mockFetchNextPage,
      setSuccess,
    } = getUseInfiniteQueryMock<PaginatedResults<Team>, SynapseClientError>()

    mockUseGetUserTeamsInfinite.mockImplementation(
      mockUseGetUserTeamsInfiniteImplementation,
    )

    renderComponent()

    act(() => {
      setSuccess(
        [
          {
            results: page1,
          },
        ],
        true,
      )
    })

    await screen.findByText('The first')

    expect(screen.queryByText('The second')).toBeNull()

    act(() => {
      mockAllIsIntersecting(true)
    })
    expect(mockFetchNextPage).toHaveBeenCalled()

    act(() => {
      setSuccess([{ results: page1 }, { results: page2 }], false)
    })

    await screen.findByText('The second')
  })
})
