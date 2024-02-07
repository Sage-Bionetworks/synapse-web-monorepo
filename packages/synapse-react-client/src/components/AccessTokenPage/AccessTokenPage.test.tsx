import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { AccessTokenPage, AccessTokenPageProps } from './AccessTokenPage'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import SynapseClient from '../../synapse-client'
import { SynapseContextType } from '../../utils/context/SynapseContext'
import { AccessTokenRecordList } from '@sage-bionetworks/synapse-types'

const PERSONAL_ACCESS_TOKEN = 'qwertyuiop'

const mockResultsFirstPage: AccessTokenRecordList = {
  results: [
    {
      id: '45',
      userId: '3350396',
      scopes: ['view', 'openid'],
      userInfoClaims: {
        is_certified: null,
        team: {
          values: ['273957'],
        },
        userid: null,
        email: null,
      },
      name: 'My active access token',
      createdOn: '2020-08-23T14:59:19.073Z',
      lastUsed: '2020-10-25T14:59:19.073Z',
      state: 'ACTIVE',
    },
  ],
  nextPageToken: 'npt',
}

const mockResultsSecondPage: AccessTokenRecordList = {
  results: [
    {
      id: '46',
      userId: '3350396',
      scopes: ['view', 'modify', 'download'],
      userInfoClaims: {
        is_certified: null,
        team: {
          values: ['273957'],
        },
        userid: null,
        email: null,
      },
      name: 'My expired access token',
      createdOn: '2020-03-23T14:59:19.073Z',
      lastUsed: '2020-04-23T14:59:19.073Z',
      state: 'EXPIRED',
    },
  ],
  nextPageToken: undefined,
}

function renderComponent(
  props: AccessTokenPageProps,
  wrapperProps?: SynapseContextType,
) {
  const user = userEvent.setup()
  const component = render(<AccessTokenPage {...props} />, {
    wrapper: createWrapper(wrapperProps),
  })
  const openCreateTokenModalButton = screen.getByRole('button', {
    name: 'Create New Token',
  })

  return { user, component, openCreateTokenModalButton }
}

describe('basic functionality', () => {
  jest.spyOn(SynapseClient, 'createPersonalAccessToken').mockResolvedValue({
    token: PERSONAL_ACCESS_TOKEN,
  })

  jest
    .spyOn(SynapseClient, 'deletePersonalAccessToken')
    .mockImplementation(() => Promise.resolve())

  const props: AccessTokenPageProps = {
    title: 'A title',
    body: 'A body',
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('shows the create token modal when the button is clicked and hides when cancelled', async () => {
    const { user, openCreateTokenModalButton } = renderComponent(props)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    // Click 'Create new token' button
    await user.click(openCreateTokenModalButton)

    await screen.findByRole('dialog')

    // close the modal
    await user.click(await screen.findByRole('button', { name: 'Cancel' }))

    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    )
  })

  it('automatically loads the first page of results', async () => {
    jest
      .spyOn(SynapseClient, 'getPersonalAccessTokenRecords')
      .mockResolvedValue(mockResultsFirstPage)

    renderComponent(props)

    await screen.findByText(mockResultsFirstPage.results[0].name)
    expect(SynapseClient.getPersonalAccessTokenRecords).toHaveBeenCalledTimes(1)
  })

  it('re-fetches the list when a token is created', async () => {
    // We can verify the rerender by checking if the API is called twice
    jest
      .spyOn(SynapseClient, 'getPersonalAccessTokenRecords')
      .mockResolvedValueOnce(mockResultsFirstPage)
      .mockResolvedValueOnce(mockResultsSecondPage)

    const { user, openCreateTokenModalButton } = renderComponent(props)

    // Click the button to render the modal
    await user.click(openCreateTokenModalButton)

    // Create a token
    const dialog = screen.getByRole('dialog')
    await user.type(
      within(dialog).getByRole('textbox', { name: 'Token Name' }),
      'New token name',
    )
    await user.click(
      within(dialog).getByRole('button', { name: 'Create Token' }),
    )

    await waitFor(() =>
      expect(SynapseClient.getPersonalAccessTokenRecords).toHaveBeenCalledTimes(
        2,
      ),
    )
  })

  it('rerenders the list when a token is deleted', async () => {
    // We can verify the rerender by checking if the API is called twice
    jest
      .spyOn(SynapseClient, 'getPersonalAccessTokenRecords')
      .mockResolvedValueOnce(mockResultsFirstPage)
      .mockResolvedValueOnce(mockResultsSecondPage)

    const { user } = renderComponent(props)

    // Trigger onDelete on a card.
    const deleteButton = await screen.findByRole('button', {
      name: 'Delete Token',
    })
    await user.click(deleteButton)

    const dialog = screen.getByRole('dialog')
    const deleteConfirmButton = within(dialog).getByRole('button', {
      name: 'Delete Token',
    })
    await user.click(deleteConfirmButton)
    await waitFor(() =>
      expect(SynapseClient.getPersonalAccessTokenRecords).toHaveBeenCalledTimes(
        2,
      ),
    )
  })

  it('loads a second page and shows the load more button only when there is a next page token', async () => {
    jest
      .spyOn(SynapseClient, 'getPersonalAccessTokenRecords')
      .mockResolvedValueOnce(mockResultsFirstPage)
      .mockResolvedValueOnce(mockResultsSecondPage)

    const { user } = renderComponent(props)

    // Only card one is visible initially
    await screen.findByText(mockResultsFirstPage.results[0].name)
    expect(
      screen.queryByText(mockResultsSecondPage.results[0].name),
    ).not.toBeInTheDocument()

    // Verify that we have a 'Load More' button
    const loadMoreButton = await screen.findByRole('button', {
      name: 'Load More',
    })

    // Click the button
    await user.click(loadMoreButton)

    // Both cards are visible
    await screen.findByText(mockResultsFirstPage.results[0].name)
    await screen.findByText(mockResultsSecondPage.results[0].name)

    // No nextPageToken on page two, so there should no longer be a load button
    expect(
      screen.queryByRole('button', { name: 'Load More' }),
    ).not.toBeInTheDocument()

    expect(SynapseClient.getPersonalAccessTokenRecords).toHaveBeenCalledTimes(2)
  })
})
