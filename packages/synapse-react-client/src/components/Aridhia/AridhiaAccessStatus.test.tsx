import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { UserEvent } from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import {
  getAridhiaAuthenticateHandler,
  getAridhiaCatalogueHandler,
  getAridhiaDatasetSettingsHandler,
  getAridhiaDictionariesHandler,
  getAridhiaRequestsHandler,
  getAridhiaRequestWorkspaceHandler,
  getAridhiaSubmitRequestHandler,
  getAridhiaWorkflowHandler,
  getAridhiaWorkspaceLocationsHandler,
  getAridhiaWorkspacesHandler,
  MOCK_ARIDHIA_AUTHENTICATION_REQUEST,
  MOCK_ARIDHIA_DATASET_CODE,
  MOCK_ARIDHIA_FAIR_PORTAL_URL,
  MOCK_ARIDHIA_GATEWAY,
  MOCK_ARIDHIA_NOT_AUTHORIZED_ERROR,
  MOCK_ARIDHIA_REQUEST_WORKSPACE_NOT_PROVISIONED,
  mockAridhiaRequestListItem,
  mockAridhiaRequestWorkspace,
} from '@/mocks/msw/handlers/aridhiaHandlers'
import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import { server } from '@/mocks/msw/server'
import {
  fillRjsfTextField,
  getRjsfTextField,
} from '@/testutils/RjsfFormTestUtils'
import { createWrapperAndQueryClient } from '@/testutils/TestingLibraryUtils'
import { AridhiaContextProvider } from '@/utils/context/AridhiaContext'
import { FeatureFlagEnum } from '@/utils/featureflag/FeatureFlags'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { HttpResponse } from 'msw'
import AridhiaAccessStatus from './AridhiaAccessStatus'
import { DAR_DATA_ACCESS_TEXT } from './AridhiaDarStatusPopover'
import {
  getAridhiaFairPortalDatasetUrl,
  getAridhiaFairPortalRequestUrl,
} from './aridhiaFairPortalUrls'

// The tooltip text `AccessIcon` gives each state, which is also the icon's accessible name.
const NO_ACCESS_ICON_NAME = 'You must request access to this restricted item.'
const PENDING_ACCESS_ICON_NAME =
  'Your access request is pending approval by RDCA-DAP.'
const HAS_ACCESS_ICON_NAME = 'You have access to this item on RDCA-DAP.'
const DENIED_ACCESS_ICON_NAME =
  'Your access request has been denied by RDCA-DAP.'
const POPOVER_LIST_NAME = 'Your data access requests'
const {
  transferPending: TRANSFER_PENDING_NOTE,
  openWorkspace: OPEN_WORKSPACE,
} = DAR_DATA_ACCESS_TEXT

/** The request's name, which the popover shows, deliberately differs from its code. */
function mockRequest(
  name: string,
  status: 'pending' | 'approved' | 'denied' | 'error',
  updatedAt: string,
  datasetCodes?: string[],
) {
  return mockAridhiaRequestListItem({
    code: `ampals-${MOCK_ARIDHIA_DATASET_CODE}-${name}`,
    name,
    status,
    updatedAt,
    datasetCodes,
  })
}

/** An approved request whose data RDCA-DAP has transferred to its workspace. */
function mockTransferredRequest(name: string, updatedAt: string) {
  return mockAridhiaRequestListItem({
    code: `ampals-${MOCK_ARIDHIA_DATASET_CODE}-${name}`,
    name,
    status: 'approved',
    updatedAt,
    transferredAt: updatedAt,
  })
}

function getPopoverListItems() {
  return within(
    screen.getByRole('list', { name: POPOVER_LIST_NAME }),
  ).getAllByRole('listitem')
}

async function openStatusPopover(user: UserEvent, iconName: string) {
  await screen.findByRole('img', { name: iconName })
  await user.click(
    screen.getByRole('button', { name: 'View data access request status' }),
  )
  await screen.findByRole('list', { name: POPOVER_LIST_NAME })
}

/** The request titles, each linking to its request record on the FAIR portal. */
function getPopoverRequestNames() {
  return within(screen.getByRole('list', { name: POPOVER_LIST_NAME }))
    .getAllByRole('link')
    .filter(link => link.textContent !== OPEN_WORKSPACE)
    .map(link => link.textContent)
}

function expectCatalogLink() {
  expect(
    screen.getByRole('link', { name: 'View dataset in the RDCA-DAP catalog' }),
  ).toHaveAttribute(
    'href',
    getAridhiaFairPortalDatasetUrl(
      MOCK_ARIDHIA_FAIR_PORTAL_URL,
      MOCK_ARIDHIA_DATASET_CODE,
    ),
  )
}

function darFormFeatureFlagOverride(enabled: boolean) {
  return getFeatureFlagsOverride({
    portalOrigin: getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT),
    overrides: { [FeatureFlagEnum.AMPALS_RDCA_DAP_FORM_ENABLED]: enabled },
  })
}

function renderStatus(fairPortalUrl?: string) {
  const { wrapperFn: Wrapper, queryClient } = createWrapperAndQueryClient()
  const result = render(
    <MemoryRouter>
      <Wrapper>
        <AridhiaContextProvider
          apiBasePath={MOCK_ARIDHIA_GATEWAY}
          authenticationRequest={MOCK_ARIDHIA_AUTHENTICATION_REQUEST}
        >
          <AridhiaAccessStatus
            datasetCode={MOCK_ARIDHIA_DATASET_CODE}
            fairPortalUrl={fairPortalUrl}
          />
        </AridhiaContextProvider>
      </Wrapper>
    </MemoryRouter>,
  )
  return { ...result, queryClient }
}

function wizardHandlers() {
  return [
    darFormFeatureFlagOverride(true),
    getAridhiaAuthenticateHandler(),
    getAridhiaRequestsHandler(),
    getAridhiaDatasetSettingsHandler(),
    getAridhiaWorkflowHandler(),
    getAridhiaDictionariesHandler(),
    getAridhiaWorkspaceLocationsHandler(),
    getAridhiaWorkspacesHandler(),
    getAridhiaCatalogueHandler(),
  ]
}

function findNoAccessIcon() {
  return screen.findByRole('img', { name: NO_ACCESS_ICON_NAME })
}

async function openWizard(user: UserEvent) {
  await findNoAccessIcon()
  await user.click(screen.getByRole('button', { name: 'Request data access' }))
}

async function fillAndSubmitWizard(user: UserEvent) {
  await user.click(await screen.findByLabelText('Location'))
  await user.click(await screen.findByRole('option', { name: 'UK South' }))
  await user.click(await screen.findByLabelText('Workspace'))
  await user.click(await screen.findByRole('option', { name: 'My Workspace' }))
  await user.click(screen.getByRole('button', { name: 'Next' }))

  await waitFor(() =>
    expect(getRjsfTextField('project name')).toBeInTheDocument(),
  )
  await fillRjsfTextField(user, 'project name', 'My Research Project')
  await user.click(screen.getByRole('button', { name: 'Next' }))
  await waitFor(() => expect(getRjsfTextField('your name')).toBeInTheDocument())

  await fillRjsfTextField(user, 'your name', 'Jane Doe')
  await fillRjsfTextField(user, 'email address', 'jane@example.edu')
  await user.click(screen.getByRole('button', { name: 'Next' }))

  await user.click(await screen.findByRole('checkbox'))
  await user.click(screen.getByRole('button', { name: 'Submit request' }))
}

/**
 * Which dialog slot holds an action is a layout concern with no accessible expression: the
 * footer must stay pinned while the form content scrolls. Assert on MUI's slot class.
 */
function getDialogActions() {
  return screen.getByRole('dialog').querySelector('.MuiDialogActions-root')
}

describe('AridhiaAccessStatus', () => {
  it('opens the request wizard in a dialog when no request exists for this dataset and the feature flag is enabled', async () => {
    const user = userEvent.setup()
    server.use(
      darFormFeatureFlagOverride(true),
      getAridhiaAuthenticateHandler(),
      getAridhiaRequestsHandler(),
    )
    renderStatus()

    await findNoAccessIcon()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()

    await user.click(
      screen.getByRole('button', { name: 'Request data access' }),
    )

    expect(
      screen.getByRole('heading', { name: 'Request Data Access' }),
    ).toBeInTheDocument()
  })

  it('does not open the request wizard when the feature flag is disabled, and instead links out to the provided FAIR portal URL', async () => {
    const user = userEvent.setup()
    server.use(
      darFormFeatureFlagOverride(false),
      getAridhiaAuthenticateHandler(),
      getAridhiaRequestsHandler(),
    )
    renderStatus(MOCK_ARIDHIA_FAIR_PORTAL_URL)

    await findNoAccessIcon()
    expect(
      screen.queryByRole('button', { name: 'Request data access' }),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      getAridhiaFairPortalDatasetUrl(
        MOCK_ARIDHIA_FAIR_PORTAL_URL,
        MOCK_ARIDHIA_DATASET_CODE,
      ),
    )

    await user.click(screen.getByRole('link'))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('opens the status popover showing the request name when a request is pending and the feature flag is disabled, linking to the specific request on the FAIR portal', async () => {
    const user = userEvent.setup()
    server.use(
      darFormFeatureFlagOverride(false),
      getAridhiaAuthenticateHandler(),
      getAridhiaRequestsHandler([
        {
          code: 'ampals-sdtm_als1003-abc12345',
          name: 'My Request',
          status: 'pending',
          datasets: [{ code: MOCK_ARIDHIA_DATASET_CODE }],
          updated_at: '2024-01-01T00:00:00Z',
        },
      ]),
    )
    renderStatus(MOCK_ARIDHIA_FAIR_PORTAL_URL)

    await waitFor(() =>
      expect(
        screen.getByRole('img', { name: PENDING_ACCESS_ICON_NAME }),
      ).toBeInTheDocument(),
    )
    await user.click(
      screen.getByRole('button', { name: 'View data access request status' }),
    )

    await waitFor(() =>
      expect(
        screen.getByText('My Request', { exact: false }),
      ).toBeInTheDocument(),
    )
    expect(screen.getByRole('link', { name: 'My Request' })).toHaveAttribute(
      'href',
      getAridhiaFairPortalRequestUrl(
        MOCK_ARIDHIA_FAIR_PORTAL_URL,
        'ampals-sdtm_als1003-abc12345',
      ),
    )
  })

  it('offers a new request and the catalog link, but no data access, when the only request is pending and the feature flag is enabled', async () => {
    const user = userEvent.setup()
    server.use(
      darFormFeatureFlagOverride(true),
      getAridhiaAuthenticateHandler(),
      getAridhiaRequestsHandler([
        mockRequest('Biomarker tables', 'pending', '2024-01-01T00:00:00Z'),
      ]),
    )
    renderStatus(MOCK_ARIDHIA_FAIR_PORTAL_URL)

    await openStatusPopover(user, PENDING_ACCESS_ICON_NAME)

    expect(getPopoverRequestNames()).toEqual(['Biomarker tables'])
    const [item] = getPopoverListItems()
    expect(item).not.toHaveTextContent(TRANSFER_PENDING_NOTE)
    expect(
      screen.queryByRole('link', { name: OPEN_WORKSPACE }),
    ).not.toBeInTheDocument()
    expectCatalogLink()
    expect(
      screen.getByRole('button', { name: 'Submit a new request' }),
    ).toBeInTheDocument()
  })

  it('notes a pending transfer, without fetching a workspace, when the only request is approved but its data has not been transferred', async () => {
    const user = userEvent.setup()
    const workspaceRequestCodes: string[] = []
    server.use(
      darFormFeatureFlagOverride(true),
      getAridhiaAuthenticateHandler(),
      getAridhiaRequestsHandler([
        mockRequest('Demographics', 'approved', '2024-01-01T00:00:00Z'),
      ]),
      getAridhiaRequestWorkspaceHandler(
        {},
        { onRequest: code => workspaceRequestCodes.push(code) },
      ),
    )
    const { queryClient } = renderStatus(MOCK_ARIDHIA_FAIR_PORTAL_URL)

    await openStatusPopover(user, HAS_ACCESS_ICON_NAME)
    await waitFor(() => expect(queryClient.isFetching()).toBe(0))

    const [item] = getPopoverListItems()
    expect(item).toHaveTextContent(TRANSFER_PENDING_NOTE)
    expect(
      within(item).getByRole('link', { name: 'Demographics' }),
    ).toHaveAttribute(
      'href',
      getAridhiaFairPortalRequestUrl(
        MOCK_ARIDHIA_FAIR_PORTAL_URL,
        `ampals-${MOCK_ARIDHIA_DATASET_CODE}-Demographics`,
      ),
    )
    expect(
      screen.queryByRole('link', { name: OPEN_WORKSPACE }),
    ).not.toBeInTheDocument()
    expectCatalogLink()
    expect(
      screen.getByRole('button', { name: 'Submit a new request' }),
    ).toBeInTheDocument()
    expect(workspaceRequestCodes).toEqual([])
  })

  it("fetches a transferred request's workspace only once the status popover opens", async () => {
    const user = userEvent.setup()
    const request = mockTransferredRequest('clinical', '2024-01-01T00:00:00Z')
    const workspaceRequestCodes: string[] = []
    server.use(
      darFormFeatureFlagOverride(true),
      getAridhiaAuthenticateHandler(),
      getAridhiaRequestsHandler([request]),
      getAridhiaRequestWorkspaceHandler(
        { [request.code!]: mockAridhiaRequestWorkspace('clinical-team') },
        { onRequest: code => workspaceRequestCodes.push(code) },
      ),
    )
    const { queryClient } = renderStatus(MOCK_ARIDHIA_FAIR_PORTAL_URL)

    await screen.findByRole('img', { name: HAS_ACCESS_ICON_NAME })
    await waitFor(() => expect(queryClient.isFetching()).toBe(0))
    expect(workspaceRequestCodes).toEqual([])

    await openStatusPopover(user, HAS_ACCESS_ICON_NAME)

    expect(
      await screen.findByRole('link', { name: OPEN_WORKSPACE }),
    ).toBeInTheDocument()
    expect(workspaceRequestCodes).toEqual([request.code])
  })

  it('links each transferred request to its own workspace when two approved requests delivered to different workspaces', async () => {
    const user = userEvent.setup()
    const clinical = mockTransferredRequest('clinical', '2024-06-01T00:00:00Z')
    const genomics = mockTransferredRequest('genomics', '2024-01-01T00:00:00Z')
    server.use(
      darFormFeatureFlagOverride(true),
      getAridhiaAuthenticateHandler(),
      getAridhiaRequestsHandler([clinical, genomics]),
      getAridhiaRequestWorkspaceHandler({
        [clinical.code!]: mockAridhiaRequestWorkspace('clinical-team'),
        [genomics.code!]: mockAridhiaRequestWorkspace('genomics-team'),
      }),
    )
    renderStatus(MOCK_ARIDHIA_FAIR_PORTAL_URL)

    await openStatusPopover(user, HAS_ACCESS_ICON_NAME)

    const [clinicalItem, genomicsItem] = getPopoverListItems()
    for (const [item, name, workspaceName] of [
      [clinicalItem, 'clinical', 'clinical-team'],
      [genomicsItem, 'genomics', 'genomics-team'],
    ] as const) {
      const workspaceLink = await within(item).findByRole('link', {
        name: OPEN_WORKSPACE,
      })
      expect(workspaceLink).toHaveAttribute(
        'href',
        mockAridhiaRequestWorkspace(workspaceName).workspace_inbox_url,
      )
      expect(workspaceLink).toHaveAttribute('target', '_blank')
      // Screen readers announce which request the workspace link belongs to.
      expect(workspaceLink).toHaveAccessibleDescription(name)
      expect(item).toHaveTextContent(
        DAR_DATA_ACCESS_TEXT.transferredTo(workspaceName),
      )
    }
  })

  const NOT_PROVISIONED = (code: string) => ({
    [code]: MOCK_ARIDHIA_REQUEST_WORKSPACE_NOT_PROVISIONED,
  })
  it.each([
    {
      shape: 'checking',
      note: DAR_DATA_ACCESS_TEXT.checkingWorkspace,
      workspaces: NOT_PROVISIONED,
      handlerOptions: (code: string) => ({ unresolvedRequestCodes: [code] }),
    },
    {
      shape: 'being prepared (no inbox URL)',
      note: DAR_DATA_ACCESS_TEXT.workspacePreparing,
      workspaces: NOT_PROVISIONED,
      handlerOptions: () => ({}),
    },
    {
      shape: 'being prepared (404)',
      note: DAR_DATA_ACCESS_TEXT.workspacePreparing,
      workspaces: () => ({}),
      handlerOptions: () => ({}),
    },
    {
      shape: 'unavailable',
      note: DAR_DATA_ACCESS_TEXT.workspaceError,
      workspaces: NOT_PROVISIONED,
      handlerOptions: (code: string) => ({ failingRequestCodes: [code] }),
    },
  ])(
    'notes the workspace is $shape, keeping the request record linked, while a transferred request’s workspace link is unknown',
    async ({ note, workspaces, handlerOptions }) => {
      const user = userEvent.setup()
      const request = mockTransferredRequest(
        'medication',
        '2024-01-01T00:00:00Z',
      )
      server.use(
        darFormFeatureFlagOverride(true),
        getAridhiaAuthenticateHandler(),
        getAridhiaRequestsHandler([request]),
        getAridhiaRequestWorkspaceHandler(
          workspaces(request.code!),
          handlerOptions(request.code!),
        ),
      )
      renderStatus(MOCK_ARIDHIA_FAIR_PORTAL_URL)

      await openStatusPopover(user, HAS_ACCESS_ICON_NAME)

      const [item] = getPopoverListItems()
      await within(item).findByText(note)
      expect(
        within(item).queryByRole('link', { name: OPEN_WORKSPACE }),
      ).not.toBeInTheDocument()
      expect(
        within(item).getByRole('link', { name: 'medication' }),
      ).toHaveAttribute(
        'href',
        getAridhiaFairPortalRequestUrl(
          MOCK_ARIDHIA_FAIR_PORTAL_URL,
          request.code!,
        ),
      )
    },
  )

  it('lists every request for the dataset in the status popover, newest first, without a new-request action when the feature flag is disabled', async () => {
    const user = userEvent.setup()
    server.use(
      darFormFeatureFlagOverride(false),
      getAridhiaAuthenticateHandler(),
      getAridhiaRequestsHandler([
        mockRequest('older-denied', 'denied', '2024-01-01T00:00:00Z'),
        mockRequest('other-dataset', 'approved', '2025-01-01T00:00:00Z', [
          'some_other_dataset',
        ]),
        mockRequest('newer-pending', 'pending', '2024-06-01T00:00:00Z'),
      ]),
    )
    renderStatus(MOCK_ARIDHIA_FAIR_PORTAL_URL)

    await openStatusPopover(user, PENDING_ACCESS_ICON_NAME)

    expect(getPopoverRequestNames()).toEqual(['newer-pending', 'older-denied'])
    const [newerItem, olderItem] = getPopoverListItems()
    expect(newerItem).toHaveTextContent('Pending')
    expect(olderItem).toHaveTextContent('Denied')
    expect(
      screen.queryByRole('button', { name: 'Submit a new request' }),
    ).not.toBeInTheDocument()
  })

  it('shows access, the catalog link, and a new-request action when an older request is approved and a newer one was denied', async () => {
    const user = userEvent.setup()
    server.use(
      darFormFeatureFlagOverride(true),
      getAridhiaAuthenticateHandler(),
      getAridhiaRequestsHandler([
        mockRequest('approved-tables-a-b', 'approved', '2024-01-01T00:00:00Z'),
        mockRequest('denied-table-c', 'denied', '2024-06-01T00:00:00Z'),
      ]),
    )
    renderStatus(MOCK_ARIDHIA_FAIR_PORTAL_URL)

    await openStatusPopover(user, HAS_ACCESS_ICON_NAME)

    expect(getPopoverRequestNames()).toEqual([
      'denied-table-c',
      'approved-tables-a-b',
    ])
    const [deniedItem, approvedItem] = getPopoverListItems()
    expect(deniedItem).not.toHaveTextContent(TRANSFER_PENDING_NOTE)
    expect(
      screen.queryByRole('link', { name: OPEN_WORKSPACE }),
    ).not.toBeInTheDocument()
    expect(approvedItem).toHaveTextContent(TRANSFER_PENDING_NOTE)
    expectCatalogLink()
    expect(
      screen.getByRole('button', { name: 'Submit a new request' }),
    ).toBeInTheDocument()
  })

  it('opens the request wizard from the status popover so a denied request can be resubmitted', async () => {
    const user = userEvent.setup()
    server.use(
      getAridhiaRequestsHandler([
        mockRequest('denied-request', 'denied', '2024-01-01T00:00:00Z'),
      ]),
      ...wizardHandlers(),
    )
    renderStatus(MOCK_ARIDHIA_FAIR_PORTAL_URL)

    await openStatusPopover(user, DENIED_ACCESS_ICON_NAME)
    await user.click(
      screen.getByRole('button', { name: 'Submit a new request' }),
    )

    expect(
      await screen.findByRole('heading', { name: 'Request Data Access' }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('list', { name: POPOVER_LIST_NAME }),
    ).not.toBeInTheDocument()
  })

  it('starts a fresh wizard with a new request code for a second request in the same session', async () => {
    const user = userEvent.setup()
    const submittedCodes: string[] = []
    server.use(
      ...wizardHandlers(),
      getAridhiaSubmitRequestHandler<{ code: string }>(body => {
        submittedCodes.push(body.code)
        server.use(
          getAridhiaRequestsHandler(
            submittedCodes.map(code =>
              mockAridhiaRequestListItem({
                code,
                name: code,
                status: 'pending',
                updatedAt: '2024-01-01T00:00:00Z',
              }),
            ),
          ),
        )
        return HttpResponse.json(
          { ...body, status: 'pending' },
          { status: 201 },
        )
      }),
    )
    renderStatus()
    await openWizard(user)
    await fillAndSubmitWizard(user)
    await user.click(await screen.findByRole('button', { name: 'Close' }))
    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    )

    await openStatusPopover(user, PENDING_ACCESS_ICON_NAME)
    await user.click(
      screen.getByRole('button', { name: 'Submit a new request' }),
    )

    // The previous request's confirmation screen must not reappear.
    expect(
      await screen.findByRole('button', { name: 'Next' }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: 'Close' }),
    ).not.toBeInTheDocument()

    await fillAndSubmitWizard(user)
    expect(
      await screen.findByRole('button', { name: 'Close' }),
    ).toBeInTheDocument()
    expect(submittedCodes).toHaveLength(2)
    expect(submittedCodes[1]).not.toBe(submittedCodes[0])
    for (const code of submittedCodes) {
      expect(code).toMatch(
        new RegExp(`^ampals-${MOCK_ARIDHIA_DATASET_CODE}-[0-9a-f]{8}$`),
      )
    }
  })

  it('links out to the dataset on the FAIR portal when the request is approved and the feature flag is disabled', async () => {
    server.use(
      darFormFeatureFlagOverride(false),
      getAridhiaAuthenticateHandler(),
      getAridhiaRequestsHandler([
        {
          code: 'ampals-sdtm_als1003-abc12345',
          status: 'approved',
          datasets: [{ code: MOCK_ARIDHIA_DATASET_CODE }],
        },
      ]),
    )
    renderStatus(MOCK_ARIDHIA_FAIR_PORTAL_URL)

    expect(
      await screen.findByRole('img', { name: HAS_ACCESS_ICON_NAME }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      getAridhiaFairPortalDatasetUrl(
        MOCK_ARIDHIA_FAIR_PORTAL_URL,
        MOCK_ARIDHIA_DATASET_CODE,
      ),
    )
  })

  it('shows the account-not-linked icon when the token exchange fails eligibility', async () => {
    server.use(
      getAridhiaAuthenticateHandler({ error: 'invalid_token' }, 400),
      getAridhiaRequestsHandler(),
    )
    renderStatus()

    expect(
      await screen.findByRole('img', {
        name: 'Link your RDCA-DAP account to request access to this item.',
      }),
    ).toBeInTheDocument()
  })

  it('shows the account-not-linked icon when the token exchange succeeds but the FAIR API rejects it with a 403', async () => {
    server.use(
      getAridhiaAuthenticateHandler(),
      getAridhiaRequestsHandler([], MOCK_ARIDHIA_NOT_AUTHORIZED_ERROR),
    )
    renderStatus()

    expect(
      await screen.findByRole('img', {
        name: 'Link your RDCA-DAP account to request access to this item.',
      }),
    ).toBeInTheDocument()
  })

  it('renders the wizard navigation buttons in a DialogActions footer, not inside the scrollable content', async () => {
    const user = userEvent.setup()
    server.use(...wizardHandlers())
    renderStatus()
    await openWizard(user)

    const backButton = await screen.findByRole('button', { name: 'Back' })
    const nextButton = screen.getByRole('button', { name: 'Next' })
    const dialogContent = screen
      .getByRole('dialog')
      .querySelector('.MuiDialogContent-root')
    const dialogActions = getDialogActions()

    expect(dialogActions).toContainElement(backButton)
    expect(dialogActions).toContainElement(nextButton)
    expect(dialogContent).not.toContainElement(backButton)
    expect(dialogContent).not.toContainElement(nextButton)
  })

  it('shows a Close action on the submitted confirmation screen that closes the dialog', async () => {
    const user = userEvent.setup()
    server.use(
      ...wizardHandlers(),
      getAridhiaSubmitRequestHandler(body =>
        HttpResponse.json(
          { ...(body as object), status: 'pending' },
          {
            status: 201,
          },
        ),
      ),
    )
    renderStatus()
    await openWizard(user)
    await fillAndSubmitWizard(user)

    const closeButton = await screen.findByRole('button', { name: 'Close' })
    expect(getDialogActions()).toContainElement(closeButton)

    await user.click(closeButton)
    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    )
  })

  it('keeps the submitted confirmation screen open when the post-submission requests refetch changes the background access icon', async () => {
    const user = userEvent.setup()
    server.use(
      ...wizardHandlers(),
      getAridhiaSubmitRequestHandler(body => {
        // Regression test: submitting invalidates the requests list. If the dialog is only mounted
        // when no requests are pending, the confirmation screen unexpectedly disappears after the
        // requests query is invalidated to find the request that was just created.
        server.use(
          getAridhiaRequestsHandler([
            {
              code: 'ampals-sdtm_als1003-abc12345',
              name: 'My Research Project',
              status: 'pending',
              datasets: [{ code: MOCK_ARIDHIA_DATASET_CODE }],
              updated_at: '2024-01-01T00:00:00Z',
            },
          ]),
        )
        return HttpResponse.json(
          { ...(body as object), status: 'pending' },
          { status: 201 },
        )
      }),
    )
    renderStatus()
    await openWizard(user)
    await fillAndSubmitWizard(user)
    expect(
      await screen.findByRole('button', { name: 'Close' }),
    ).toBeInTheDocument()

    // Wait for the invalidated requests query to refetch and flip the access icon to "pending".
    await waitFor(() =>
      expect(
        screen.getByRole('img', {
          name: PENDING_ACCESS_ICON_NAME,
          // The icon is behind the open dialog, so it's excluded from the accessibility tree by default —
          // `hidden: true` can find it.
          hidden: true,
        }),
      ).toBeInTheDocument(),
    )
    // The confirmation screen must still be showing afterward since it wasn't closed by the user.
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
  })
})
