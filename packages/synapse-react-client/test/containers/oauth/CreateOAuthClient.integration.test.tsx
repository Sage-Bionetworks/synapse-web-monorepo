import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { rest, server } from '../../../mocks/msw/server'
import {
  CreateOAuthModal,
  CreateOAuthModalProps,
} from '../../../src/components/OAuthClientManagement/CreateOAuthClient'
import { mockClientList1 } from '../../../mocks/oauth/MockClient'
import * as ToastMessage from '../../../src/components/ToastMessage/ToastMessage'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../src/utils/functions/getEndpoint'
import { WarningDialog } from '../../../src/components/SynapseForm/WarningDialog'
import SynapseClient from '../../../src/synapse-client'

const mockToastFn = jest
  .spyOn(ToastMessage, 'displayToast')
  .mockImplementation(() => {})
jest.mock('../../../src/components/SynapseForm/WarningDialog', () => ({
  WarningDialog: jest.fn().mockImplementation(() => {
    return <div></div>
  }),
}))

const mockWarningDialog = WarningDialog

const updatedClient = jest.fn()
const mockClient = mockClientList1.results[0]
const defaultProps: CreateOAuthModalProps = {
  isShowingModal: true,
  onClose: jest.fn(),
  isEdit: false,
  setIsShowingModal: jest.fn(),
  isShowingConfirmModal: false,
  setIsShowingConfirmModal: jest.fn(),
}

function renderComponent(props: CreateOAuthModalProps = defaultProps) {
  render(<CreateOAuthModal {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('Create OAuth Client', () => {
  beforeAll(() => server.listen())
  afterEach(() => {
    jest.clearAllMocks()
    server.restoreHandlers()
    updatedClient.mockClear()
  })
  afterAll(() => server.close())

  it('Shows the modal', async () => {
    renderComponent()
    await screen.findByText('Create New OAuth Client')
    expect(screen.getAllByRole('textbox')).toHaveLength(6)
  })

  it('Creates a client on save', async () => {
    server.use(
      rest.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/auth/v1/oauth2/client`,
        async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(req.body))
        },
      ),
    )
    renderComponent()
    const inputName = await screen.findByLabelText('Client Name')
    const inputHomePage = await screen.findByLabelText('Client Homepage')
    const inputRedirectURI = await screen.findByLabelText('Redirect URI(s)')

    const saveButton = screen.getByRole('button', { name: 'Save' })
    await userEvent.type(inputName, mockClient.client_name)
    await userEvent.type(inputHomePage, mockClient.client_uri!)
    await userEvent.type(inputRedirectURI, mockClient.redirect_uris[0]!)

    await waitFor(() => {
      expect(inputName).toHaveValue(mockClient.client_name)
      expect(inputHomePage).toHaveValue(mockClient.client_uri)
      expect(inputRedirectURI).toHaveValue(mockClient.redirect_uris[0])
    })

    await userEvent.click(saveButton)

    await waitFor(() =>
      expect(mockToastFn).toBeCalledWith('Successfully created', 'success'),
    )
  })

  it('Shows a warning modal when deleteing a client', async () => {
    renderComponent({ ...defaultProps, isEdit: true, client: mockClient })
    const deleteButton = screen.getByRole('button', { name: 'DELETE CLIENT' })
    await userEvent.click(deleteButton)

    expect(mockWarningDialog).toBeCalledWith(
      expect.objectContaining({
        title: 'Are you absolutely sure?',
        content:
          'Editing this detail will render your client invalid and will require you to resubmit verification. This action cannot be undone.',
      }),
      expect.anything(),
    )
  })

  it('Updates a client', async () => {
    server.use(
      rest.put(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/auth/v1/oauth2/client/${mockClient.client_id}`,
        async (req, res, ctx) => {
          return res(ctx.status(200), ctx.json(req.body))
        },
      ),
    )
    const showModal = jest.fn().mockReturnValue(true)

    renderComponent({
      ...defaultProps,
      setIsShowingConfirmModal: showModal,
      isEdit: true,
      client: mockClient,
    })
    const inputName = await screen.findByRole('textbox', {
      name: 'Client Name',
    })
    const saveButton = screen.getByRole('button', { name: 'Save' })
    await userEvent.type(inputName, 'rename')

    await waitFor(() =>
      expect(inputName).toHaveValue(`${mockClient.client_name}rename`),
    )
    await userEvent.click(saveButton)

    await waitFor(() =>
      expect(mockToastFn).toBeCalledWith('Successfully saved', 'success'),
    )
  })

  it('Shows a warning modal when changing redirect uri', async () => {
    const mockIsOAuthClientReverificationRequired = jest
      .spyOn(SynapseClient, 'isOAuthClientReverificationRequired')
      .mockReturnValue(Promise.resolve({ reverificationRequired: true }))
    renderComponent({ ...defaultProps, isEdit: true, client: mockClient })
    const inputRedirectURI = await screen.findByLabelText('Redirect URI(s)')
    const saveButton = screen.getByRole('button', { name: 'Save' })

    await userEvent.type(inputRedirectURI, 'xxx')
    await userEvent.click(saveButton)

    expect(mockWarningDialog).toBeCalledWith(
      expect.objectContaining({
        title: 'Are you absolutely sure?',
        content:
          'Editing this detail will render your client invalid and will require you to resubmit verification. This action cannot be undone.',
      }),
      expect.anything(),
    )
  })
})
