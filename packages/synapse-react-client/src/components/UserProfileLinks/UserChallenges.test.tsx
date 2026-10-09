import { SynapseTestContext } from '@/mocks/MockSynapseContext'
import { server } from '@/mocks/msw/server'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { ChallengeWithProjectHeader } from '@sage-bionetworks/synapse-types'
import { act, render, screen } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import UserChallenges from './UserChallenges'

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
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('loads more challenges when inView', async () => {
    const onChallengeRequest = vi.fn()
    const challengePages = [page1, page2]
    server.use(
      http.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}/repo/v1/challenge`,
        ({ request }) => {
          const offset = Number(new URL(request.url).searchParams.get('offset'))
          onChallengeRequest(offset)
          return HttpResponse.json({
            results: challengePages[offset / 10].map(item => item.challenge),
            totalNumberOfResults: 2,
          })
        },
      ),
      http.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}/repo/v1/entity/header`,
        async ({ request }) => {
          const body = (
            (await request.json()) as { references: { targetId: string }[] }
          ).references
          const allItems = [...page1, ...page2]
          return HttpResponse.json({
            results: body.map(
              ref =>
                allItems.find(
                  item => item.challenge.projectId === ref.targetId,
                )!.projectHeader,
            ),
          })
        },
      ),
    )

    renderComponent()

    await screen.findByText('The first')
    expect(screen.queryByText('The second')).not.toBeInTheDocument()
    expect(onChallengeRequest).toHaveBeenCalledTimes(1)

    act(() => {
      mockAllIsIntersecting(true)
    })

    await screen.findByText('The second')
    expect(onChallengeRequest).toHaveBeenLastCalledWith(10)
  })
})
