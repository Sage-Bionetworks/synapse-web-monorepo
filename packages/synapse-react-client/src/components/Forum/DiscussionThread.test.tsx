import {
  mockDiscussionReplyBundle,
  mockDiscussionThreadBundle,
} from '@/mocks/discussion/mock_discussion'
import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import { server } from '@/mocks/msw/server'
import {
  mockUserProfileData,
  mockUserProfileData2,
} from '@/mocks/user/mock_user_profile'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { THREAD, THREAD_ID, THREAD_REPLIES } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  DiscussionReplyBundle,
  MessageURL,
  PaginatedResults,
  SubscriptionObjectType,
  SubscriptionPagedResults,
  Topic,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { DiscussionThread, DiscussionThreadProps } from './DiscussionThread'

const MOCK_THREAD_ID = '123'
const MOCK_SUBSCRIPTION_ID = '999'

vi.mock('../../synapse-client/SynapseClient', () => ({
  postSubscription: vi.fn(),
  deleteSubscription: vi.fn(),
}))

const mockDeleteSubscription = vi.mocked(SynapseClient.deleteSubscription)

mockDeleteSubscription.mockImplementation(() => {
  // When the subscription is deleted, update the server to return nothing.
  server.use(
    http.post(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}/repo/v1/subscription/list`,
      () => {
        return HttpResponse.json(
          { results: [], totalNumberOfResults: 0 },
          { status: 200 },
        )
      },
    ),
  )

  return Promise.resolve()
})

const mockThread: PaginatedResults<DiscussionReplyBundle>[] = [
  {
    totalNumberOfResults: 2,
    results: [mockDiscussionReplyBundle],
  },
  {
    totalNumberOfResults: 2,
    results: [
      {
        ...mockDiscussionReplyBundle,
        id: '789',
      },
    ],
  },
]

const mockSubscriptionPagedResult: SubscriptionPagedResults = {
  results: [
    {
      subscriptionId: MOCK_SUBSCRIPTION_ID,
      subscriberId: 'syn123',
      objectId: MOCK_THREAD_ID,
      objectType: SubscriptionObjectType.THREAD,
      createdOn: '2022-09-29',
    },
  ],
  totalNumberOfResults: 1,
}

const mockMessageUrl: MessageURL = {
  messageUrl: 'syn456',
}

const followRequest: Topic = {
  objectId: MOCK_THREAD_ID,
  objectType: SubscriptionObjectType.THREAD,
}

const defaultProps: DiscussionThreadProps = {
  threadId: MOCK_THREAD_ID,
  limit: 1,
}

function renderComponent() {
  render(<DiscussionThread {...defaultProps} />, {
    wrapper: createWrapper(),
  })
}

// TODO: Fix flakiness
describe.skip('Discussion Thread test', () => {
  beforeAll(() => {
    server.listen()
  })
  beforeEach(() => {
    server.use(
      http.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${THREAD_ID(
          MOCK_THREAD_ID,
        )}`,
        () => {
          return HttpResponse.json(mockDiscussionThreadBundle, { status: 200 })
        },
      ),
      http.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${THREAD_REPLIES(
          MOCK_THREAD_ID,
        )}`,
        ({ request }) => {
          const offset = new URL(request.url).searchParams.get('offset') ?? '0'
          return HttpResponse.json(mockThread[parseInt(offset)], {
            status: 200,
          })
        },
      ),
      http.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${THREAD}/messageUrl`,
        () => {
          return HttpResponse.json(mockMessageUrl, { status: 200 })
        },
      ),
      http.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/reply/messageUrl`,
        () => {
          return HttpResponse.json(mockMessageUrl, { status: 200 })
        },
      ),
      http.get(`http://localhost/${mockMessageUrl.messageUrl}`, () => {
        return HttpResponse.json('message', { status: 200 })
      }),
      http.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/subscription/list`,
        () => {
          return HttpResponse.json(mockSubscriptionPagedResult, { status: 200 })
        },
      ),
    )
  })
  afterEach(() => {
    server.resetHandlers()
    vi.clearAllMocks()
  })
  afterAll(() => server.close())

  it('Renders the author and thread', async () => {
    renderComponent()

    await screen.findByText(`@${mockUserProfileData.userName}`)
    await screen.findByText(mockDiscussionThreadBundle.title)
  })

  it('Has a follow button', async () => {
    renderComponent()

    let unfollowButton: HTMLButtonElement | undefined
    await waitFor(() => {
      unfollowButton = screen.getByRole<HTMLButtonElement>('button', {
        name: /Unfollow thread/i,
      })
      expect(unfollowButton).not.toBeDisabled()
    })
    await userEvent.click(unfollowButton!)
    await waitFor(() => {
      expect(SynapseClient.deleteSubscription).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        MOCK_SUBSCRIPTION_ID,
      )
    })

    let followButton: HTMLButtonElement | undefined
    await waitFor(() => {
      followButton = screen.getByRole<HTMLButtonElement>('button', {
        name: /Follow thread/i,
      })
      expect(followButton).not.toBeDisabled()
    })

    await userEvent.click(followButton!)
    await waitFor(() => {
      expect(SynapseClient.postSubscription).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        followRequest,
      )
    })
  })

  it('Renders replies', async () => {
    renderComponent()
    expect(
      await screen.findAllByText(`@${mockUserProfileData2.userName}`),
    ).toHaveLength(mockThread[0].results.length)
  })

  it('Loads more when there is more data', async () => {
    renderComponent()

    const loadMoreButton = await screen.findByRole('button', {
      name: 'Show more results',
    })
    await userEvent.click(loadMoreButton)

    await waitFor(() => {
      expect(
        screen.getAllByText(`@${mockUserProfileData2.userName}`),
      ).toHaveLength(
        mockThread[0].results.length + mockThread[1].results.length,
      )
    })
  })
})
