import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  ForumPage,
  ForumPageProps,
} from '../../../../src/lib/containers/discussion_forum/ForumPage'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { FORUM, FORUM_THREAD } from '../../../../src/lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../src/lib/utils/functions/getEndpoint'
import { PaginatedResults } from '../../../../src/lib/utils/synapseTypes'
import { DiscussionThreadBundle } from '../../../../src/lib/utils/synapseTypes/DiscussionBundle'
import {
  SubscriptionObjectType,
  Topic,
  SubscriptionPagedResults,
  SubscriberPagedResults,
} from '../../../../src/lib/utils/synapseTypes/Subscription'
import {
  mockDiscussionThreadBundle,
  mockDiscussionThreadBundle2,
} from '../../../../mocks/discussion/mock_discussion'
import { MOCK_ACCESS_TOKEN } from '../../../../mocks/MockSynapseContext'
import { rest, server } from '../../../../mocks/msw/server'
import { SynapseClient } from '../../../../src/lib/utils'
import { PaginatedIds } from '../../../../src/lib/utils/synapseTypes/PaginatedIds'
import failOnConsole from 'jest-fail-on-console'

const MOCK_FORUM_ID = 'syn123'
const MOCK_SUBSCRIPTION_ID = '123'

let serverSideHasSubscribed = false

const defaultProps: ForumPageProps = {
  forumId: MOCK_FORUM_ID,
  limit: 1,
}

const followRequest: Topic = {
  objectId: MOCK_FORUM_ID,
  objectType: SubscriptionObjectType.FORUM,
}

jest.spyOn(SynapseClient, 'postSubscription')
jest.spyOn(SynapseClient, 'deleteSubscription')

const forumThread: PaginatedResults<DiscussionThreadBundle>[] = [
  {
    totalNumberOfResults: 2,
    results: [mockDiscussionThreadBundle],
  },
  {
    totalNumberOfResults: 2,
    results: [mockDiscussionThreadBundle2],
  },
]

const mockSubscriptionPagedEmptyResult: SubscriptionPagedResults = {
  results: [],
  totalNumberOfResults: 0,
}

const mockSubscriptionPagedResult: SubscriptionPagedResults = {
  results: [
    {
      subscriptionId: MOCK_SUBSCRIPTION_ID,
      subscriberId: 'syn123',
      objectId: MOCK_FORUM_ID,
      objectType: SubscriptionObjectType.FORUM,
      createdOn: '2022-09-29',
    },
  ],
  totalNumberOfResults: 1,
}

function renderComponent() {
  render(<ForumPage {...defaultProps} />, {
    wrapper: createWrapper(),
  })
}

describe('Forum Table test', () => {
  failOnConsole()
  beforeAll(() => {
    server.listen()
  })
  beforeEach(() => {
    server.use(
      rest.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${FORUM_THREAD(
          MOCK_FORUM_ID,
        )}`,
        async (req, res, ctx) => {
          const offset = req.url.searchParams.get('offset') ?? '0'
          return res(ctx.status(200), ctx.json(forumThread[parseInt(offset)]))
        },
      ),
      rest.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/subscription/list`,
        async (req, res, ctx) => {
          const response: SubscriptionPagedResults = serverSideHasSubscribed
            ? mockSubscriptionPagedResult
            : mockSubscriptionPagedEmptyResult
          return res(ctx.status(200), ctx.json(response))
        },
      ),
      rest.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/subscription`,
        async (req, res, ctx) => {
          serverSideHasSubscribed = true
          return res(
            ctx.status(201),
            ctx.json(mockSubscriptionPagedResult.results[0]),
          )
        },
      ),
      rest.delete(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/subscription/:id`,
        async (req, res, ctx) => {
          serverSideHasSubscribed = false
          return res(ctx.status(200), ctx.body(''))
        },
      ),
      rest.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/subscription/subscribers`,
        async (req, res, ctx) => {
          const resp: SubscriberPagedResults = {
            subscribers: [],
          }
          return res(ctx.status(200), ctx.json(resp))
        },
      ),
      rest.get(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}${FORUM}/:id/moderators`,
        async (req, res, ctx) => {
          const resp: PaginatedIds = {
            results: [],
            totalNumberOfResults: 0,
          }
          return res(ctx.status(200), ctx.json(resp))
        },
      ),
    )
  })
  afterEach(() => {
    server.resetHandlers()
    jest.clearAllMocks()
  })
  afterAll(() => server.close())

  it('Renders all headers and a row of data', async () => {
    renderComponent()

    const table = await screen.findByRole('table')
    const tbody = table.querySelector('tbody')!
    const rows = await within(tbody).findAllByRole('row')
    expect(rows).toHaveLength(1) // Only one entity on the first page

    await screen.findByRole('columnheader', { name: 'Topic' })
    await screen.findByRole('columnheader', { name: 'Author' })
    await screen.findByRole('columnheader', { name: 'Active Users' })
    await screen.findByRole('columnheader', { name: 'Views' })
    await screen.findByRole('columnheader', { name: 'Activity' })
  })

  it('Has a follow button', async () => {
    // Initially, not subscribed
    serverSideHasSubscribed = false

    renderComponent()

    // Find follow button
    const followButton = await screen.findByRole('button', { name: 'Follow' })
    await waitFor(() => expect(followButton).not.toBeDisabled())
    await userEvent.click(followButton)

    await waitFor(() =>
      expect(SynapseClient.postSubscription).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        followRequest,
      ),
    )

    // When following the follow button should show Unfollow
    const unFollowButton = await screen.findByRole('button', {
      name: 'Unfollow',
    })
    await waitFor(() => expect(unFollowButton).not.toBeDisabled())
    await userEvent.click(unFollowButton)
    await waitFor(() => {
      expect(SynapseClient.deleteSubscription).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        MOCK_SUBSCRIPTION_ID,
      )
    })
  })

  it('Loads more when there is more data', async () => {
    renderComponent()

    const loadMoreButton = await screen.findByRole('button', {
      name: 'Show more results',
    })
    await userEvent.click(loadMoreButton)

    await waitFor(() => expect(screen.getAllByRole('row')).toHaveLength(3))
  })
})
