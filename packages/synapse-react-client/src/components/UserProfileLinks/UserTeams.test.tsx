import { SynapseTestContext } from '@/mocks/MockSynapseContext'
import { server } from '@/mocks/msw/server'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { PaginatedResults, Team } from '@sage-bionetworks/synapse-types'
import { act, render, screen } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import UserTeams from './UserTeams'

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
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('loads more teams when inView', async () => {
    const onRequest = vi.fn()
    server.use(
      http.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}/repo/v1/user/${userId}/team`,
        ({ request }) => {
          const offset = new URL(request.url).searchParams.get('offset')
          onRequest(offset)
          const response: PaginatedResults<Team> =
            offset === '0'
              ? { results: page1, totalNumberOfResults: 2 }
              : { results: page2, totalNumberOfResults: 2 }
          return HttpResponse.json(response)
        },
      ),
    )

    renderComponent()

    await screen.findByText('The first')
    expect(screen.queryByText('The second')).toBeNull()
    expect(onRequest).toHaveBeenCalledTimes(1)

    act(() => {
      mockAllIsIntersecting(true)
    })

    await screen.findByText('The second')
    expect(onRequest).toHaveBeenLastCalledWith('1')
  })
})
