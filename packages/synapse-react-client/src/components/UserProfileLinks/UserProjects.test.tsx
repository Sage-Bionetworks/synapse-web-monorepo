import { SynapseTestContext } from '@/mocks/MockSynapseContext'
import { server } from '@/mocks/msw/server'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  ProjectHeader,
  ProjectHeaderList,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import UserProjects from './UserProjects'

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
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('loads more available projects when inView', async () => {
    server.use(
      http.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}/repo/v1/projects/user/${userId}`,
        ({ request }) => {
          const nextPageToken = new URL(request.url).searchParams.get(
            'nextPageToken',
          )
          const response: ProjectHeaderList =
            nextPageToken === '50a0'
              ? { results: page2 as ProjectHeader[], nextPageToken: null }
              : { results: page1 as ProjectHeader[], nextPageToken: '50a0' }
          return HttpResponse.json(response)
        },
      ),
    )

    renderComponent()
    const item1 = await screen.findAllByText('The first')
    expect(item1).toHaveLength(1)
    act(() => {
      mockAllIsIntersecting(true)
    })
    const item2 = await screen.findAllByText('The second')
    expect(item2).toHaveLength(1)
  })
})
