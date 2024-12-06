import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DiscussionThread, DiscussionThreadProps } from './DiscussionThread'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { THREAD, THREAD_ID, THREAD_REPLIES } from '../../utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import { PaginatedResults } from '@sage-bionetworks/synapse-types'
import { DiscussionReplyBundle } from '@sage-bionetworks/synapse-types'
import { MessageURL } from '@sage-bionetworks/synapse-types'
import {
  SubscriptionObjectType,
  SubscriptionPagedResults,
  Topic,
} from '@sage-bionetworks/synapse-types'
import {
  mockDiscussionReplyBundle,
  mockDiscussionThreadBundle,
} from '../../mocks/discussion/mock_discussion'
import { MOCK_ACCESS_TOKEN } from '../../mocks/MockSynapseContext'
import { rest, server } from '../../mocks/msw/server'
import {
  mockUserProfileData,
  mockUserProfileData2,
} from '../../mocks/user/mock_user_profile'
import SynapseClient from '../../synapse-client'

const MOCK_THREAD_ID = '123'
const MOCK_SUBSCRIPTION_ID = '999'

jest.mock('../../synapse-client', () => ({
  postSubscription: jest.fn(),
  deleteSubscription: jest.fn(),
}))

const mockDeleteSubscription = jest.mocked(SynapseClient.deleteSubscription)

mockDeleteSubscription.mockImplementation(() => {
  // When the subscription is deleted, update the server to return nothing.
  server.use(
    rest.post(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}/repo/v1/subscription/list`,
      async (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({ results: [], totalNumberOfResults: 0 }),
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
      rest.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${THREAD_ID(
          MOCK_THREAD_ID,
        )}`,
        async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(mockDiscussionThreadBundle))
        },
      ),
      rest.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${THREAD_REPLIES(
          MOCK_THREAD_ID,
        )}`,
        async (req, res, ctx) => {
          const offset = req.url.searchParams.get('offset') ?? '0'
          return res(ctx.status(200), ctx.json(mockThread[parseInt(offset)]))
        },
      ),
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${THREAD}/messageUrl`,
        async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(mockMessageUrl))
        },
      ),
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/reply/messageUrl`,
        async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(mockMessageUrl))
        },
      ),
      rest.get(
        `http://localhost/${mockMessageUrl.messageUrl}`,
        async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json('message'))
        },
      ),
      rest.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/subscription/list`,
        async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(mockSubscriptionPagedResult))
        },
      ),
    )
  })
  afterEach(() => {
    server.resetHandlers()
    jest.clearAllMocks()
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
