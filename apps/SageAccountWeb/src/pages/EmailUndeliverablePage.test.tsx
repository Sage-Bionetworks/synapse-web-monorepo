import type { MockInstance } from 'vitest'
import { server } from '@/mocks/node'
import { AppContextProvider } from '@/AppContext'
import {
  RETURN_URL_AFTER_EMAIL_UPDATE_LOCALSTORAGE_KEY,
  DISMISSED_EMAIL_UNDELIVERABLE_PROMPT_SESSIONSTORAGE_KEY,
} from '@/utils/StorageKeys'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import Cookies from 'js-cookie'
import { http, HttpResponse } from 'msw'
import { MemoryRouter, Route, Routes, useLocation } from 'react-router'
import { NOTIFICATION_EMAIL } from 'synapse-react-client/utils/APIConstants'
import { ONE_SAGE_REDIRECT_COOKIE_KEY } from 'synapse-react-client/utils/AppUtils/AppUtils'
import { SynapseContextProvider } from 'synapse-react-client/utils/context/SynapseContext'
import {
  BackendDestinationEnum,
  getEndpoint,
} from 'synapse-react-client/utils/functions/getEndpoint'
import { LAST_PLACE_LOCALSTORAGE_KEY } from 'synapse-react-client/utils/SynapseConstants'
import EmailUndeliverablePage from './EmailUndeliverablePage'

const backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const EMAIL_UNDELIVERABLE_PATH = '/authenticated/emailUndeliverable'
const SOURCE_APP_URL = 'https://www.synapse.org'

function AccountSettingsStub() {
  const { hash } = useLocation()
  return <p>Account settings page {hash}</p>
}

function renderPage() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  })
  render(
    <QueryClientProvider client={queryClient}>
      <SynapseContextProvider
        synapseContext={{ accessToken: 'user-token', isAuthenticated: true }}
      >
        <AppContextProvider appContext={{ redirectURL: SOURCE_APP_URL }}>
          <MemoryRouter initialEntries={[EMAIL_UNDELIVERABLE_PATH]}>
            <Routes>
              <Route
                path={EMAIL_UNDELIVERABLE_PATH}
                element={<EmailUndeliverablePage />}
              />
              <Route
                path="/authenticated/myaccount"
                element={<AccountSettingsStub />}
              />
              <Route
                path="/authenticated/certificationquiz"
                element={<p>Certification quiz page</p>}
              />
            </Routes>
          </MemoryRouter>
        </AppContextProvider>
      </SynapseContextProvider>
    </QueryClientProvider>,
  )
}

describe('EmailUndeliverablePage', () => {
  let replaceLocation: MockInstance<Location['replace']>

  beforeAll(() => server.listen())
  beforeEach(() => {
    localStorage.clear()
    sessionStorage.clear()
    Cookies.remove(ONE_SAGE_REDIRECT_COOKIE_KEY, { path: '/' })
    replaceLocation = vi.spyOn(window.location, 'replace')
    server.use(
      http.get(`${backendOrigin}${NOTIFICATION_EMAIL}`, () =>
        HttpResponse.json({
          email: 'user@example.com',
          quarantineStatus: {
            reason: 'PERMANENT_BOUNCE',
            reasonDetails: '550 mailbox unavailable',
            expiration: '2027-01-01T00:00:00.000Z',
          },
        }),
      ),
    )
  })
  afterEach(() => {
    server.resetHandlers()
    replaceLocation.mockRestore()
  })
  afterAll(() => server.close())

  it("shows the user's undeliverable primary email address", async () => {
    renderPage()

    await screen.findByText('user@example.com')
    screen.getByText('Action needed: Update your email address')
  })

  it('dismisses the prompt and returns to the saved last place when the user ignores it', async () => {
    localStorage.setItem(
      LAST_PLACE_LOCALSTORAGE_KEY,
      `${window.location.origin}/authenticated/certificationquiz`,
    )
    renderPage()

    await userEvent.click(
      await screen.findByRole('button', { name: 'Ignore for now' }),
    )

    await screen.findByText('Certification quiz page')
    expect(
      sessionStorage.getItem(
        DISMISSED_EMAIL_UNDELIVERABLE_PROMPT_SESSIONSTORAGE_KEY,
      ),
    ).toBe('true')
    expect(replaceLocation).not.toHaveBeenCalled()
  })

  it('goes to the source app when the user ignores the prompt and there is no saved last place or redirect cookie', async () => {
    renderPage()

    await userEvent.click(
      await screen.findByRole('button', { name: 'Ignore for now' }),
    )

    await vi.waitFor(() =>
      expect(replaceLocation).toHaveBeenCalledWith(SOURCE_APP_URL),
    )
  })

  it('dismisses the prompt, clears the saved last place, and opens the email section of account settings when the user chooses to update their email', async () => {
    localStorage.setItem(
      LAST_PLACE_LOCALSTORAGE_KEY,
      `${window.location.origin}/authenticated/certificationquiz`,
    )
    renderPage()

    await userEvent.click(
      await screen.findByRole('button', { name: 'Update your email' }),
    )

    await screen.findByText('Account settings page #email')
    expect(
      sessionStorage.getItem(
        DISMISSED_EMAIL_UNDELIVERABLE_PROMPT_SESSIONSTORAGE_KEY,
      ),
    ).toBe('true')
    expect(localStorage.getItem(LAST_PLACE_LOCALSTORAGE_KEY)).toBeFalsy()
  })

  it('remembers the source app page to return to after the user verifies their new email', async () => {
    const sourceAppPageUrl = 'https://www.synapse.org/Profile:v'
    Cookies.set(ONE_SAGE_REDIRECT_COOKIE_KEY, sourceAppPageUrl, { path: '/' })
    renderPage()

    await userEvent.click(
      await screen.findByRole('button', { name: 'Update your email' }),
    )

    await screen.findByText('Account settings page #email')
    expect(
      localStorage.getItem(RETURN_URL_AFTER_EMAIL_UPDATE_LOCALSTORAGE_KEY),
    ).toBe(sourceAppPageUrl)
  })

  it('remembers the source app to return to when there is no redirect cookie', async () => {
    renderPage()

    await userEvent.click(
      await screen.findByRole('button', { name: 'Update your email' }),
    )

    await screen.findByText('Account settings page #email')
    expect(
      localStorage.getItem(RETURN_URL_AFTER_EMAIL_UPDATE_LOCALSTORAGE_KEY),
    ).toBe(SOURCE_APP_URL)
  })
})
