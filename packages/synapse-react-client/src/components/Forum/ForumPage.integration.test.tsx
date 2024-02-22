import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { ForumPage, ForumPageProps } from './ForumPage'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { SubscriptionObjectType, Topic } from '@sage-bionetworks/synapse-types'
import { MOCK_ACCESS_TOKEN } from '../../mocks/MockSynapseContext'
import { server } from '../../mocks/msw/server'
import SynapseClient from '../../synapse-client'
import failOnConsole from 'jest-fail-on-console'
import { MOCK_FORUM_ID } from '../../mocks/discussion/mock_discussion'

const defaultProps: ForumPageProps = {
  forumId: MOCK_FORUM_ID,
  limit: 1,
  onClickLink: jest.fn(),
}

const followRequest: Topic = {
  objectId: MOCK_FORUM_ID,
  objectType: SubscriptionObjectType.FORUM,
}

jest.spyOn(SynapseClient, 'postSubscription')
jest.spyOn(SynapseClient, 'deleteSubscription')

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
        expect.any(String),
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
