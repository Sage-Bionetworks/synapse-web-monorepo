import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import { AccessTokenCardProps } from '../../../../src/lib/containers/personal_access_token/AccessTokenCard'
import {
  AccessTokenPage,
  AccessTokenPageProps,
} from '../../../../src/lib/containers/personal_access_token/AccessTokenPage'
import { CreateAccessTokenModalProps } from '../../../../src/lib/containers/personal_access_token/CreateAccessTokenModal'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { SynapseClient } from '../../../../src/lib/utils'
import { SynapseContextType } from '../../../../src/lib/utils/SynapseContext'
import { AccessTokenRecordList } from '../../../../src/lib/utils/synapseTypes/AccessToken/AccessTokenRecord'

// Mock the CreateAccessTokenModal with a simple dialog with buttons to easily invoke passed props
jest.mock(
  '../../../../src/lib/containers/personal_access_token/CreateAccessTokenModal',
  () => {
    return {
      CreateAccessTokenModal: (props: CreateAccessTokenModalProps) => {
        return (
          <div role="dialog">
            <button onClick={props.onClose}>Invoke onClose</button>
            <button onClick={props.onCreate}>Invoke onCreate</button>
          </div>
        )
      },
    }
  },
)

jest.mock(
  '../../../../src/lib/containers/personal_access_token/AccessTokenCard',
  () => {
    return {
      AccessTokenCard: (props: AccessTokenCardProps) => {
        return (
          <div>
            <p>{props.accessToken.name}</p>
            <button onClick={props.onDelete}>Invoke onDelete</button>
          </div>
        )
      },
    }
  },
)

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
  return render(<AccessTokenPage {...props} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('basic functionality', () => {
  const props: AccessTokenPageProps = {
    title: 'A title',
    body: 'A body',
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('shows the create token modal when the button is clicked and hides when onClose is called', async () => {
    renderComponent(props)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    // Click 'Create new token' button
    await userEvent.click(
      await screen.findByRole('button', { name: 'Create New Token' }),
    )

    await screen.findByRole('dialog')

    // close the modal
    await userEvent.click(
      await screen.findByRole('button', { name: 'Invoke onClose' }),
    )

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

  it('rerenders the list when onCreate is called', async () => {
    // We can verify the rerender by checking if the API is called twice
    jest
      .spyOn(SynapseClient, 'getPersonalAccessTokenRecords')
      .mockResolvedValueOnce(mockResultsFirstPage)
      .mockResolvedValueOnce(mockResultsSecondPage)

    renderComponent(props)

    // Click the button to render the modal
    const openModalButton = await screen.findByRole('button', {
      name: 'Create New Token',
    })
    await userEvent.click(openModalButton)

    // Simulate creation
    const createTokenButton = await screen.findByRole('button', {
      name: 'Invoke onCreate',
    })
    await userEvent.click(createTokenButton)

    await waitFor(() =>
      expect(SynapseClient.getPersonalAccessTokenRecords).toHaveBeenCalledTimes(
        2,
      ),
    )
  })

  it('rerenders the list when onDelete is called', async () => {
    // We can verify the rerender by checking if the API is called twice
    jest
      .spyOn(SynapseClient, 'getPersonalAccessTokenRecords')
      .mockResolvedValueOnce(mockResultsFirstPage)
      .mockResolvedValueOnce(mockResultsSecondPage)

    renderComponent(props)

    // Trigger onDelete on a card.
    const deleteButton = await screen.findByText('Invoke onDelete')
    await userEvent.click(deleteButton)

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

    renderComponent(props)

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
    await userEvent.click(loadMoreButton)

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
