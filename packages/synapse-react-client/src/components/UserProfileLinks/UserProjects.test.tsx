import { SynapseTestContext } from '@/mocks/MockSynapseContext'
import { useGetUserProjectsInfinite } from '@/synapse-queries/user/useGetUserProjects'
import { getUseInfiniteQuerySuccessMock } from '@/testutils/ReactQueryMockUtils'
import { ProjectHeader } from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import UserProjects from './UserProjects'

vi.mock('../../../src/synapse-queries/user/useGetUserProjects', () => {
  return {
    useGetUserProjectsInfinite: vi.fn(),
  }
})

const mockUseGetUserProjectsInfinite = vi.mocked(useGetUserProjectsInfinite)
const userId = '10000'
const page1: Partial<ProjectHeader>[] = [
  {
    id: 'syn1',
    lastActivity: 'today',
    modifiedBy: 10001,
    modifiedOn: 'yesterday',
    name: 'The first',
  },
]

const page2: Partial<ProjectHeader>[] = [
  {
    id: 'syn2',
    lastActivity: 'today',
    modifiedBy: 10001,
    modifiedOn: 'yesterday',
    name: 'The second',
  },
]

function renderComponent() {
  return render(
    <SynapseTestContext>
      <UserProjects userId={userId} />
    </SynapseTestContext>,
  )
}

describe('UserProjects tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  it('loads more available projects when inView', async () => {
    mockAllIsIntersecting(true)
    mockUseGetUserProjectsInfinite.mockReturnValue(
      getUseInfiniteQuerySuccessMock([
        {
          results: page1,
          nextPageToken: '50a0',
        },
        {
          results: page2,
          nextPageToken: null,
        },
      ]),
    )

    renderComponent()
    const item1 = await screen.findAllByText('The first')
    expect(item1).toHaveLength(1)
    const item2 = await screen.findAllByText('The second')
    expect(item2).toHaveLength(1)
  })
})
