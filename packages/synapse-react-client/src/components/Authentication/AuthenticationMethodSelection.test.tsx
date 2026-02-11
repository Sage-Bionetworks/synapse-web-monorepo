import SynapseClient from '@/synapse-client'
import { ARCUS_SOURCE_APP_ID, OAUTH2_PROVIDERS } from '@/utils/SynapseConstants'
import { OAuth2State } from '@/utils'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import AuthenticationMethodSelection from './AuthenticationMethodSelection'
import { createWrapper } from '@/testutils/TestingLibraryUtils'

vi.mock('@/synapse-client', () => ({
  default: {
    getRootURL: vi.fn(),
    oAuthUrlRequest: vi.fn(),
  },
}))

const mockSynapseClient = vi.mocked(SynapseClient)

afterEach(() => {
  vi.clearAllMocks()
  window.location.hash = ''
})

describe('AuthenticationMethodSelection', () => {
  it('renders all default login methods and handles username/password selection', async () => {
    const onSelectUsernameAndPassword = vi.fn()

    render(
      <AuthenticationMethodSelection
        onSelectUsernameAndPassword={onSelectUsernameAndPassword}
      />,
      { wrapper: createWrapper() },
    )

    expect(
      screen.getByRole('button', { name: /sign in with google/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign in with orcid/i }),
    ).toBeInTheDocument()

    const emailButton = screen.getByRole('button', {
      name: /sign in with your email/i,
    })
    await userEvent.click(emailButton)

    expect(onSelectUsernameAndPassword).toHaveBeenCalledTimes(1)
  })

  it('shows only the Arcus SSO button when sourceAppId is arcusbio', () => {
    render(
      <AuthenticationMethodSelection
        onSelectUsernameAndPassword={vi.fn()}
        sourceAppId={ARCUS_SOURCE_APP_ID}
      />,
      { wrapper: createWrapper() },
    )

    expect(
      screen.getByRole('button', { name: /sign in with arcus biosciences/i }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /sign in with google/i }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /sign in with orcid/i }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('button', { name: /sign in with your email/i }),
    ).not.toBeInTheDocument()
  })

  it('initiates the Google OAuth flow when an SSO option is selected', async () => {
    const onBeginOAuthSignIn = vi.fn()
    const state: OAuth2State = { registrationUsername: 'jdoe@example.org' }
    const rootUrl = 'https://signin.synapse.org'
    const expectedRedirect = `${rootUrl}?provider=${OAUTH2_PROVIDERS.GOOGLE}`
    mockSynapseClient.getRootURL.mockReturnValue(rootUrl)
    mockSynapseClient.oAuthUrlRequest.mockResolvedValue({
      authorizationUrl: '#/auth',
    })

    render(
      <AuthenticationMethodSelection
        onBeginOAuthSignIn={onBeginOAuthSignIn}
        onSelectUsernameAndPassword={vi.fn()}
        state={state}
      />,
      { wrapper: createWrapper() },
    )

    const googleButton = screen.getByRole('button', {
      name: /sign in with google/i,
    })
    await userEvent.click(googleButton)

    expect(onBeginOAuthSignIn).toHaveBeenCalledTimes(1)
    expect(mockSynapseClient.oAuthUrlRequest).toHaveBeenCalledWith(
      OAUTH2_PROVIDERS.GOOGLE,
      expectedRedirect,
      expect.objectContaining({
        ...state,
        csrfToken: expect.any(String),
      }),
    )

    await waitFor(() => expect(window.location.hash).toBe('#/auth'))
  })

  it('initiates the Arcus OAuth flow when an SSO option is selected', async () => {
    const onBeginOAuthSignIn = vi.fn()
    const state: OAuth2State = { registrationUsername: 'jdoe@example.org' }
    const rootUrl = 'https://signin.synapse.org'
    const expectedRedirect = `${rootUrl}?provider=${OAUTH2_PROVIDERS.ARCUS}`
    mockSynapseClient.getRootURL.mockReturnValue(rootUrl)
    mockSynapseClient.oAuthUrlRequest.mockResolvedValue({
      authorizationUrl: '#/auth',
    })

    render(
      <AuthenticationMethodSelection
        onBeginOAuthSignIn={onBeginOAuthSignIn}
        onSelectUsernameAndPassword={vi.fn()}
        state={state}
        sourceAppId={ARCUS_SOURCE_APP_ID}
      />,
      { wrapper: createWrapper() },
    )

    const arcusButton = screen.getByRole('button', {
      name: /sign in with arcus biosciences/i,
    })
    await userEvent.click(arcusButton)

    expect(onBeginOAuthSignIn).toHaveBeenCalledTimes(1)
    expect(mockSynapseClient.oAuthUrlRequest).toHaveBeenCalledWith(
      OAUTH2_PROVIDERS.ARCUS,
      expectedRedirect,
      expect.objectContaining({
        ...state,
        csrfToken: expect.any(String),
      }),
    )

    await waitFor(() => expect(window.location.hash).toBe('#/auth'))
  })
})
