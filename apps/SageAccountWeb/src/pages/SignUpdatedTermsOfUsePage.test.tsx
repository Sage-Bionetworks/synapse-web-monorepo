import type { MockInstance } from 'vitest'
import { server } from '@/mocks/node'
import { TermsOfServiceState } from '@sage-bionetworks/synapse-types'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import Cookies from 'js-cookie'
import { http, HttpResponse } from 'msw'
import { MemoryRouter, Route, Routes } from 'react-router'
import {
  TERMS_OF_USE,
  TERMS_OF_USE_INFO,
  TERMS_OF_USE_STATUS,
} from 'synapse-react-client/utils/APIConstants'
import { ONE_SAGE_REDIRECT_COOKIE_KEY } from 'synapse-react-client/utils/AppUtils/AppUtils'
import { SynapseContextProvider } from 'synapse-react-client/utils/context/SynapseContext'
import {
  BackendDestinationEnum,
  getEndpoint,
} from 'synapse-react-client/utils/functions/getEndpoint'
import { LAST_PLACE_LOCALSTORAGE_KEY } from 'synapse-react-client/utils/SynapseConstants'
import SignUpdatedTermsOfUsePage from './SignUpdatedTermsOfUsePage'

const backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const SIGN_UPDATED_TERMS_PATH = '/authenticated/signUpdatedTermsOfUse'

function renderPage() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  })
  render(
    <QueryClientProvider client={queryClient}>
      <SynapseContextProvider
        synapseContext={{ accessToken: 'user-token', isAuthenticated: true }}
      >
        <MemoryRouter initialEntries={[SIGN_UPDATED_TERMS_PATH]}>
          <Routes>
            <Route
              path={SIGN_UPDATED_TERMS_PATH}
              element={<SignUpdatedTermsOfUsePage />}
            />
            <Route
              path="/authenticated/myaccount"
              element={<p>Account settings page</p>}
            />
            <Route
              path="/authenticated/validate"
              element={<p>Profile validation page</p>}
            />
          </Routes>
        </MemoryRouter>
      </SynapseContextProvider>
    </QueryClientProvider>,
  )
}

async function agreeToTerms() {
  const user = userEvent.setup()
  await user.click(
    await screen.findByRole('checkbox', {
      name: 'I agree to the terms of service',
    }),
  )
  await user.click(screen.getByRole('button', { name: 'Agree and Continue' }))
}

describe('SignUpdatedTermsOfUsePage', () => {
  let replaceLocation: MockInstance<Location['replace']>

  beforeAll(() => server.listen())
  beforeEach(() => {
    localStorage.clear()
    Cookies.remove(ONE_SAGE_REDIRECT_COOKIE_KEY, { path: '/' })
    replaceLocation = vi.spyOn(window.location, 'replace')
    server.use(
      http.get(`${backendOrigin}${TERMS_OF_USE_INFO}`, () =>
        HttpResponse.json({
          latestTermsOfServiceVersion: '1.0.0',
          termsOfServiceUrl: 'https://example.com/terms',
          currentRequirements: {
            requirementDate: '2024-01-01T00:00:00.000Z',
            minimumTermsOfServiceVersion: '1.0.0',
          },
        }),
      ),
      http.get(`${backendOrigin}${TERMS_OF_USE_STATUS}`, () =>
        HttpResponse.json({
          userId: '100',
          userCurrentTermsOfServiceState: TermsOfServiceState.MUST_AGREE_NOW,
          lastAgreementDate: '2024-01-01T00:00:00.000Z',
          lastAgreementVersion: '0.0.1',
        }),
      ),
      http.post(`${backendOrigin}${TERMS_OF_USE}`, () =>
        HttpResponse.json({}, { status: 201 }),
      ),
      http.get(/cdn\.jsdelivr\.net/, () => HttpResponse.text('# Terms')),
    )
  })
  afterEach(() => {
    server.resetHandlers()
    replaceLocation.mockRestore()
  })
  afterAll(() => server.close())

  it('returns to the saved last place after signing', async () => {
    localStorage.setItem(
      LAST_PLACE_LOCALSTORAGE_KEY,
      `${window.location.origin}/authenticated/validate`,
    )
    Cookies.set(ONE_SAGE_REDIRECT_COOKIE_KEY, 'https://www.synapse.org/', {
      path: '/',
    })
    renderPage()

    await agreeToTerms()

    await screen.findByText('Profile validation page')
    expect(replaceLocation).not.toHaveBeenCalled()
  })

  it('follows the source app redirect cookie when there is no saved last place', async () => {
    const sourceAppUrl = 'https://www.synapse.org/Profile:v'
    Cookies.set(ONE_SAGE_REDIRECT_COOKIE_KEY, sourceAppUrl, { path: '/' })
    renderPage()

    await agreeToTerms()

    await vi.waitFor(() =>
      expect(replaceLocation).toHaveBeenCalledWith(sourceAppUrl),
    )
    expect(screen.queryByText('Account settings page')).not.toBeInTheDocument()
  })

  it('goes to account settings when there is no saved last place and no redirect cookie', async () => {
    renderPage()

    await agreeToTerms()

    await screen.findByText('Account settings page')
    expect(replaceLocation).not.toHaveBeenCalled()
  })
})
