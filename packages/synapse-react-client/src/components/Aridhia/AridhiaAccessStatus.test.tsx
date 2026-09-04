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
  MOCK_ARIDHIA_GATEWAY,
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

// The tooltip text `AccessIcon` gives each state, which is also the icon's accessible name.
const NO_ACCESS_ICON_NAME = 'You must request access to this restricted item.'
const HAS_ACCESS_ICON_NAME = 'You have access to this item.'

function renderStatus(url?: string) {
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
            url={url}
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

  it('links out to RDCA-DAP when the request is approved', async () => {
    server.use(
      getAridhiaAuthenticateHandler(),
      getAridhiaRequestsHandler([
        {
          code: 'ampals-sdtm_als1003-abc12345',
          status: 'approved',
          datasets: { code: MOCK_ARIDHIA_DATASET_CODE },
        },
      ]),
    )
    renderStatus('https://portal.rdca.c-path.org/datasets/sdtm_als1003')

    expect(
      await screen.findByRole('img', { name: HAS_ACCESS_ICON_NAME }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://portal.rdca.c-path.org/datasets/sdtm_als1003',
    )
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

    await user.click(await screen.findByLabelText('Location'))
    await user.click(await screen.findByRole('option', { name: 'UK South' }))
    await user.click(await screen.findByLabelText('Workspace'))
    await user.click(
      await screen.findByRole('option', { name: 'My Workspace' }),
    )
    await user.click(screen.getByRole('button', { name: 'Next' }))

    await waitFor(() =>
      expect(getRjsfTextField('project name')).toBeInTheDocument(),
    )
    await fillRjsfTextField(user, 'project name', 'My Research Project')
    await user.click(screen.getByRole('button', { name: 'Next' }))
    await waitFor(() =>
      expect(getRjsfTextField('your name')).toBeInTheDocument(),
    )

    await fillRjsfTextField(user, 'your name', 'Jane Doe')
    await fillRjsfTextField(user, 'email address', 'jane@example.edu')
    await user.click(screen.getByRole('button', { name: 'Next' }))

    await user.click(await screen.findByRole('checkbox'))
    await user.click(screen.getByRole('button', { name: 'Submit request' }))

    const closeButton = await screen.findByRole('button', { name: 'Close' })
    expect(getDialogActions()).toContainElement(closeButton)

    await user.click(closeButton)
    await waitFor(() =>
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument(),
    )
  })
})
