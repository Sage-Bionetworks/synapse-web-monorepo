import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { UserEvent } from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import {
  getAridhiaAuthenticateHandler,
  getAridhiaCatalogueHandler,
  getAridhiaDatasetSettingsHandler,
  getAridhiaDictionariesHandler,
  getAridhiaRequestsHandler,
  getAridhiaSubmitRequestHandler,
  getAridhiaWorkflowHandler,
  getAridhiaWorkspaceLocationsHandler,
  getAridhiaWorkspacesHandler,
  MOCK_ARIDHIA_AUTHENTICATION_REQUEST,
  MOCK_ARIDHIA_DATASET_CODE,
  MOCK_ARIDHIA_FAIR_PORTAL_URL,
  MOCK_ARIDHIA_GATEWAY,
  MOCK_ARIDHIA_NOT_AUTHORIZED_ERROR,
} from '@/mocks/msw/handlers/aridhiaHandlers'
import { server } from '@/mocks/msw/server'
import {
  fillRjsfTextField,
  getRjsfTextField,
} from '@/testutils/RjsfFormTestUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { AridhiaContextProvider } from '@/utils/context/AridhiaContext'
import { HttpResponse } from 'msw'
import AridhiaAccessStatus from './AridhiaAccessStatus'
import {
  getAridhiaFairPortalDatasetUrl,
  getAridhiaFairPortalRequestUrl,
} from './aridhiaFairPortalUrls'

// The tooltip text `AccessIcon` gives each state, which is also the icon's accessible name.
const NO_ACCESS_ICON_NAME = 'You must request access to this restricted item.'
const PENDING_ACCESS_ICON_NAME =
  'Your access request is pending approval by RDCA-DAP.'
const HAS_ACCESS_ICON_NAME = 'You have access to this item.'

function renderStatus(fairPortalUrl?: string) {
  const Wrapper = createWrapper()
  return render(
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
}

function wizardHandlers() {
  return [
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
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('opens the request wizard in a dialog when no request exists for this dataset', async () => {
    const user = userEvent.setup()
    server.use(getAridhiaAuthenticateHandler(), getAridhiaRequestsHandler())
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

  it('opens the status popover showing the request code when a request is pending, linking to the specific request on the FAIR portal', async () => {
    const user = userEvent.setup()
    server.use(
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
    await user.click(screen.getByRole('button'))

    await waitFor(() =>
      expect(
        screen.getByText('ampals-sdtm_als1003-abc12345', { exact: false }),
      ).toBeInTheDocument(),
    )
    expect(
      screen.getByRole('link', { name: 'View on RDCA-DAP' }),
    ).toHaveAttribute(
      'href',
      getAridhiaFairPortalRequestUrl(
        MOCK_ARIDHIA_FAIR_PORTAL_URL,
        'ampals-sdtm_als1003-abc12345',
      ),
    )
  })

  it('links out to the dataset on the FAIR portal when the request is approved', async () => {
    server.use(
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
