import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import UserTeams from './UserTeams'
import { useGetUserTeamsInfinite } from '../../synapse-queries/user/useGetUserTeams'
import { Team } from '@sage-bionetworks/synapse-types'
import { SynapseTestContext } from '../../mocks/MockSynapseContext'

jest.mock('../../../src/synapse-queries/user/useGetUserTeams', () => {
  return {
    useGetUserTeamsInfinite: jest.fn(),
  }
})

const mockFetchNextPage = jest.fn()
const mockUseGetUserTeamsInfinite = useGetUserTeamsInfinite as jest.Mock
const userId = '10000'
const page1: Partial<Team>[] = [
  {
    id: '100',
    name: 'The first',
  },
]

const page2: Partial<Team>[] = [
  {
    id: '101',
    name: 'The second',
  },
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
    jest.clearAllMocks()
  })
  it('loads more teams when inView', async () => {
    mockAllIsIntersecting(true)
    mockUseGetUserTeamsInfinite.mockReturnValue({
      data: {
        pages: [
          {
            results: page1,
            nextPageToken: '50a0',
          },
          {
            results: page2,
            nextPageToken: null,
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
