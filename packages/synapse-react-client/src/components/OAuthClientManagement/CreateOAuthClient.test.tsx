import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { server } from '@/mocks/msw/server'
import { mockClientList1 } from '@/mocks/oauth/MockClient'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { OIDCSigningAlgorithm } from '@sage-bionetworks/synapse-types'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { noop } from 'lodash-es'
import { http, HttpResponse } from 'msw'
import { WarningDialog } from '../SynapseForm/WarningDialog'
import * as ToastMessage from '../ToastMessage/ToastMessage'
import {
  CreateOAuthModal,
  CreateOAuthModalProps,
  defaultUserInfoSignedResponseAlgorithm,
  warningBody,
  warningHeader,
} from './CreateOAuthClient'

const mockToastFn = vi
  .spyOn(ToastMessage, 'displayToast')
  .mockImplementation(() => noop)
vi.mock('../../../src/components/SynapseForm/WarningDialog', () => ({
  WarningDialog: vi.fn().mockImplementation(() => {
    return <div></div>
  }),
}))

const mockWarningDialog = WarningDialog

const updatedClient = vi.fn()
const mockClient = mockClientList1.results[0]
const defaultProps: CreateOAuthModalProps = {
  isShowingModal: true,
  onClose: vi.fn(),
  isEdit: false,
  setIsShowingModal: vi.fn(),
  isShowingConfirmModal: false,
  setIsShowingConfirmModal: vi.fn(),
}

const createOAuthClientSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.openIDConnectServicesClient,
  'postAuthV1Oauth2Client',
)
const updateOAuthClientSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.openIDConnectServicesClient,
  'putAuthV1Oauth2ClientId',
)

function renderComponent(props: CreateOAuthModalProps = defaultProps) {
  render(<CreateOAuthModal {...props} />, {
    wrapper: createWrapper(),
  })
}

function setUp(props: CreateOAuthModalProps = defaultProps) {
  const user = userEvent.setup()

  // useFakeTimers to ensure that isOAuthClientReverificationRequired is called
  // at least once per test, since the call is wrapped in useDebouncedEffect
  vi.useFakeTimers()

  const component = renderComponent(props)
  const inputs = {
    name: screen.getByRole('textbox', { name: 'Client Name' }),
    homePage: screen.getByLabelText('Client Homepage'),
    redirectURI: screen.getByRole('textbox', { name: 'Redirect URI(s)' }),
    sectorUri: screen.getByRole('textbox', { name: 'Sector Identifier URI' }),
    userInfoSignedResponseAlg: screen.getByRole('combobox', {
      name: 'User Info Signed Response Algorithm',
    }),
  }
  const saveButton = screen.getByRole('button', { name: 'Save' })

  act(() => vi.runOnlyPendingTimers())

  // User real timers for the rest of the test
  vi.useRealTimers()

  return { component, user, inputs, saveButton }
}

function mockVerificationPrecheckService(reverificationRequired: boolean) {
  return http.put(
    `${getEndpoint(
      BackendDestinationEnum.REPO_ENDPOINT,
    )}/auth/v1/oauth2/client/${mockClient.client_id!}/verificationPrecheck`,
    () => {
      return HttpResponse.json(
        { reverificationRequired: reverificationRequired },
        { status: 200 },
      )
    },
  )
}

describe('Create OAuth Client', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(
      http.post(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/auth/v1/oauth2/client`,
        async ({ request }) => {
          return HttpResponse.json(await request.json(), { status: 200 })
        },
      ),
      http.put(
        `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/auth/v1/oauth2/client/${mockClient.client_id!}`,
        async ({ request }) => {
          return HttpResponse.json(await request.json(), { status: 200 })
        },
      ),
      mockVerificationPrecheckService(false),
    )
  })
  afterEach(() => {
    vi.clearAllMocks()
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
    const { user, inputs, saveButton } = setUp()

    expect(inputs.userInfoSignedResponseAlg).toHaveTextContent(
      defaultUserInfoSignedResponseAlgorithm,
    )

    await user.type(inputs.name, mockClient.client_name)
    await user.type(inputs.homePage, mockClient.client_uri!)
    await user.type(inputs.redirectURI, mockClient.redirect_uris[0])
    await user.type(inputs.sectorUri, mockClient.sector_identifier_uri)
    await user.click(inputs.userInfoSignedResponseAlg)
    await user.click(screen.getByRole('option', { name: 'JWT' }))

    await waitFor(() => {
      expect(inputs.name).toHaveValue(mockClient.client_name)
      expect(inputs.homePage).toHaveValue(mockClient.client_uri)
      expect(inputs.redirectURI).toHaveValue(mockClient.redirect_uris[0])
      expect(inputs.sectorUri).toHaveValue(mockClient.sector_identifier_uri)
      expect(inputs.userInfoSignedResponseAlg).toHaveTextContent('JWT')
    })

    await user.click(saveButton)

    expect(createOAuthClientSpy).toHaveBeenLastCalledWith({
      oAuthClient: {
        client_id: undefined,
        client_name: mockClient.client_name,
        client_uri: mockClient.client_uri,
        etag: undefined,
        policy_uri: '',
        redirect_uris: [mockClient.redirect_uris[0]],
        sector_identifier_uri: mockClient.sector_identifier_uri,
        tos_uri: '',
        userinfo_signed_response_alg: OIDCSigningAlgorithm.RS256,
      },
    })

    await waitFor(() =>
      expect(mockToastFn).toHaveBeenCalledWith(
        'Successfully created',
        'success',
      ),
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

    expect(updateOAuthClientSpy).not.toHaveBeenCalled()
    expect(mockWarningDialog).toHaveBeenLastRenderedWithProps(
      expect.objectContaining({
        title: warningHeader,
        content: warningBody,
      }),
    )
  })

  it('Updates a client', async () => {
    const showModal = vi.fn().mockReturnValue(true)

    const { user, inputs, saveButton } = setUp({
      ...defaultProps,
      setIsShowingConfirmModal: showModal,
      isEdit: true,
      client: mockClient,
    })

    expect(inputs.name).toHaveValue(mockClient.client_name)
    expect(inputs.userInfoSignedResponseAlg).toHaveTextContent(
      defaultUserInfoSignedResponseAlgorithm,
    )

    await user.type(inputs.name, 'rename')
    await user.click(inputs.userInfoSignedResponseAlg)
    await user.click(screen.getByRole('option', { name: 'JWT' }))

    await waitFor(() => {
      expect(inputs.name).toHaveValue(`${mockClient.client_name}rename`)
      expect(inputs.userInfoSignedResponseAlg).toHaveTextContent('JWT')
    })
    await user.click(saveButton)

    expect(updateOAuthClientSpy).toHaveBeenLastCalledWith({
      id: mockClient.client_id,
      oAuthClient: {
        client_id: mockClient.client_id,
        client_name: `${mockClient.client_name}rename`,
        client_uri: mockClient.client_uri,
        etag: undefined,
        policy_uri: mockClient.policy_uri,
        redirect_uris: mockClient.redirect_uris,
        sector_identifier_uri: mockClient.sector_identifier_uri,
        tos_uri: mockClient.tos_uri,
        userinfo_signed_response_alg: OIDCSigningAlgorithm.RS256,
      },
    })

    await waitFor(() =>
      expect(mockToastFn).toHaveBeenCalledWith('Successfully saved', 'success'),
    )
  })

  it('Updates client signed response algorithm from JWT to JSON', async () => {
    const { user, inputs, saveButton } = setUp({
      ...defaultProps,
      isEdit: true,
      client: {
        ...mockClient,
        userinfo_signed_response_alg: OIDCSigningAlgorithm.RS256,
      },
    })
    expect(inputs.userInfoSignedResponseAlg).toHaveTextContent('JWT')

    await user.click(inputs.userInfoSignedResponseAlg)
    await user.click(
      screen.getByRole('option', {
        name: defaultUserInfoSignedResponseAlgorithm,
      }),
    )

    await waitFor(() => {
      expect(inputs.userInfoSignedResponseAlg).toHaveTextContent(
        defaultUserInfoSignedResponseAlgorithm,
      )
    })

    await user.click(saveButton)

    expect(updateOAuthClientSpy).toHaveBeenLastCalledWith({
      id: mockClient.client_id,
      oAuthClient: {
        client_id: mockClient.client_id,
        client_name: mockClient.client_name,
        client_uri: mockClient.client_uri,
        policy_uri: mockClient.policy_uri,
        redirect_uris: mockClient.redirect_uris,
        sector_identifier_uri: mockClient.sector_identifier_uri,
        tos_uri: mockClient.tos_uri,
        userinfo_signed_response_alg: undefined,
      },
    })

    await waitFor(() =>
      expect(mockToastFn).toHaveBeenCalledWith('Successfully saved', 'success'),
    )
  })

  it('Shows a warning modal when changing redirect and sector uri', async () => {
    server.use(mockVerificationPrecheckService(true))

    const { user, inputs, saveButton } = setUp({
      ...defaultProps,
      isEdit: true,
      client: mockClient,
    })

    await user.type(inputs.redirectURI, 'xxx')
    await user.type(inputs.sectorUri, '123')

    await waitFor(() => {
      expect(inputs.redirectURI).toHaveValue(
        `${mockClient.redirect_uris[0]}xxx`,
      )
      expect(inputs.sectorUri).toHaveValue(
        `${mockClient.sector_identifier_uri}123`,
      )
    })
    await user.click(saveButton)

    expect(updateOAuthClientSpy).not.toHaveBeenCalled()
    expect(mockWarningDialog).toHaveBeenLastRenderedWithProps(
      expect.objectContaining({
        title: warningHeader,
        content: warningBody,
      }),
    )
  })
})
