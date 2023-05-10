import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { rest, server } from '../../../../mocks/msw/server'
import {
  CreateOAuthModal,
  CreateOAuthModalProps,
} from '../../../../src/lib/containers/oauth/CreateOAuthClient'
import { mockClientList1 } from '../../../../mocks/oauth/MockClient'
import { displayToast } from '../../../../src/lib/containers/ToastMessage'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../src/lib/utils/functions/getEndpoint'
import { WarningDialog } from '../../../../src/lib/containers/synapse_form_wrapper/WarningDialog'
import { SynapseClient } from '../../../../src/lib/utils'

jest.mock('../../../../src/lib/containers/ToastMessage', () => {
  return { displayToast: jest.fn() }
})
jest.mock(
  '../../../../src/lib/containers/synapse_form_wrapper/WarningDialog',
  () => ({
    WarningDialog: jest.fn().mockImplementation(() => {
      return <div></div>
    }),
  }),
)

const mockWarningDialog = WarningDialog
const mockToastFn = displayToast

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

jest
  .spyOn(SynapseClient, 'isOAuthClientReverificationRequired')
  .mockReturnValue(Promise.resolve({ reverificationRequired: true }))

function renderComponent(props: CreateOAuthModalProps = defaultProps) {
  render(<CreateOAuthModal {...props} />, {
    wrapper: createWrapper(),
  })
}

function setUp(props: CreateOAuthModalProps = defaultProps) {
  const user = userEvent.setup()
  const component = renderComponent(props)
  const inputs = {
    name: screen.getByRole('textbox', { name: 'Client Name' }),
    homePage: screen.getByLabelText('Client Homepage'),
    redirectURI: screen.getByRole('textbox', { name: 'Redirect URI(s)' }),
  }
  const saveButton = screen.getByRole('button', { name: 'Save' })
  return { component, user, inputs, saveButton }
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
    const { user, inputs, saveButton } = setUp()

    await user.type(inputs.name, mockClient.client_name)
    await user.type(inputs.homePage, mockClient.client_uri!)
    await user.type(inputs.redirectURI, mockClient.redirect_uris[0]!)

    await waitFor(() => {
      expect(inputs.name).toHaveValue(mockClient.client_name)
      expect(inputs.homePage).toHaveValue(mockClient.client_uri)
      expect(inputs.redirectURI).toHaveValue(mockClient.redirect_uris[0])
    })

    await user.click(saveButton)

    await waitFor(() =>
      expect(mockToastFn).toBeCalledWith('Successfully created', 'success'),
    )
  })

  it('Shows a warning modal when deleteing a client', async () => {
    const { user } = setUp({
      ...defaultProps,
      isEdit: true,
      client: mockClient,
    })
    const deleteButton = screen.getByRole('button', { name: 'DELETE CLIENT' })
    await user.click(deleteButton)

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

    const { user, inputs, saveButton } = setUp({
      ...defaultProps,
      setIsShowingConfirmModal: showModal,
      isEdit: true,
      client: mockClient,
    })
    await user.type(inputs.name, 'rename')

    await waitFor(() =>
      expect(inputs.name).toHaveValue(`${mockClient.client_name}rename`),
    )
    await user.click(saveButton)

    await waitFor(() =>
      expect(mockToastFn).toBeCalledWith('Successfully saved', 'success'),
    )
  })

  it('Shows a warning modal when changing redirect uri', async () => {
    const { user, inputs, saveButton } = setUp({
      ...defaultProps,
      isEdit: true,
      client: mockClient,
    })

    await user.type(inputs.redirectURI, 'xxx')
    await user.click(saveButton)

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
