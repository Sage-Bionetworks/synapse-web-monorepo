import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import UserProjects from '../../../../src/lib/containers/user_profile_links/UserProjects'
import { useGetUserProjectsInfinite } from '../../../../src/lib/utils/hooks/SynapseAPI/user/useGetUserProjects'
import { ProjectHeader } from '../../../../src/lib/utils/synapseTypes'
import { SynapseTestContext } from '../../../../mocks/MockSynapseContext'

jest.mock(
  '../../../../src/lib/utils/hooks/SynapseAPI/user/useGetUserProjects',
  () => {
    return {
      useGetUserProjectsInfinite: jest.fn(),
    }
  },
)

const mockFetchNextPage = jest.fn()
const mockUseGetUserProjectsInfinite = useGetUserProjectsInfinite as jest.Mock
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
    jest.clearAllMocks()
  })
  it('loads more available projects when inView', async () => {
    mockAllIsIntersecting(true)
    mockUseGetUserProjectsInfinite.mockReturnValue({
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
