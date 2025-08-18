import {
  getOAuth2DescriptionWithInvalidRedirectUriHandler,
  getOAuth2DescriptionWithUnverifiedClientHandler,
  resetConsentedInMockService,
  setMockPostConsentFn,
  URL_ENCODED_ACCESS_CODE_PROVIDED_BY_SERVER,
} from '@/mocks/handlers'
import mockOauthClient from '@/mocks/MockOAuthClient'
import { server } from '@/mocks/server'
import { LoginResponse } from '@sage-bionetworks/synapse-types'
import { QueryClient } from '@tanstack/react-query'
import {
  render,
  screen,
  waitFor,
  waitForOptions,
  within,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { createMemoryRouter, RouterProvider } from 'react-router'
import {
  defaultQueryClientConfig,
  SynapseConstants,
} from 'synapse-react-client'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { getRoutes } from '../routes'

const overrideWaitForOptions: waitForOptions = {
  timeout: 5000,
}

const { ACCESS_TOKEN_COOKIE_KEY, LAST_PLACE_LOCALSTORAGE_KEY } =
  SynapseConstants

type ParamOverrides = Partial<
  Record<
    | 'response_type'
    | 'client_id'
    | 'scope'
    | 'state'
    | 'redirect_uri'
    | 'claims'
    | 'prompt',
    string | null
  >
>

function createParams(paramOverrides?: ParamOverrides) {
  const paramsObject = {
    response_type: 'code',
    client_id: '1234',
    scope: 'openid',
    state: '1ga1bi0qm',
    redirect_uri: 'https://some-client-uri.abc/redirect',
    claims: JSON.stringify({ id_token: { userid: null } }),
    ...paramOverrides,
  }

  const params = new URLSearchParams()
  Object.entries(paramsObject).forEach(([key, value]) => {
    if (value == null) {
      params.delete(key)
    } else {
      params.set(key, value)
    }
  })
  return params
}

function renderApp(paramOverrides?: ParamOverrides, updateHistory = true) {
  // create a query client that is isolated to each test to prevent undesirable cache hits between tests
  const queryClient = new QueryClient(defaultQueryClientConfig)
  const params = createParams(paramOverrides)
  let initialEntries = ['/']
  if (updateHistory) {
    initialEntries = [`/?${params.toString()}`]
  }
  const router = createMemoryRouter(getRoutes({ queryClient }), {
    initialEntries: initialEntries,
  })

  return {
    component: render(<RouterProvider router={router} />),
    params,
    router,
  }
}

describe('App integration tests', () => {
  beforeEach(() => {
    resetConsentedInMockService(false)
  })
  afterEach(() => {
    vi.clearAllMocks()
    document.cookie = ''
  })

  test.skip('Shows login when no token is provided', async () => {
    renderApp()
    await screen.findByRole(
      'button',
      {
        name: /sign in with your email/i,
      },
      overrideWaitForOptions,
    )
  })
  test.skip('Shows login and does not redirect when an expired token is provided', async () => {
    // Need a token in the cookie so the app tries to use it
    document.cookie = `${ACCESS_TOKEN_COOKIE_KEY}=expired`
    // Backend should return with an invalid_token response
    server.use(
      http.get(
        'https://repo-prod.prod.sagebase.org/repo/v1/userProfile',
        () => {
          return HttpResponse.json(
            {
              reason: 'invalid_token. The token has expired.',
              error: 'invalid_token',
              error_description: 'The token has expired.',
            },
            { status: 401 },
          )
        },
      ),
    )

    renderApp()

    // The token was invalid, so the user should be prompted to login
    await screen.findByRole(
      'button',
      {
        name: /sign in with your email/i,
      },
      overrideWaitForOptions,
    )

    // No redirect should have happened
    expect(window.location.replace).not.toHaveBeenCalled()
  })

  test.skip('Stores the token when login is successful', async () => {
    renderApp()

    await userEvent.click(
      await screen.findByRole(
        'button',
        {
          name: /sign in with your email/i,
        },
        overrideWaitForOptions,
      ),
    )
    const usernameField = await screen.findByLabelText('Username', {
      exact: false,
    })
    const passwordField = await screen.findByText('Password')

    await userEvent.type(usernameField, 'myUsername')
    await userEvent.type(passwordField, 'myPassword')

    await userEvent.click(
      await screen.findByRole('button', { name: 'Sign in' }),
    )

    await waitFor(() =>
      expect(document.cookie).toContain(`${ACCESS_TOKEN_COOKIE_KEY}=someToken`),
    )

    await screen.findByText(/requests permission/)

    // No redirect should have happened
    expect(window.location.replace).not.toHaveBeenCalled()
  })

  test('Shows consent screen if a token is provided but the user has not consented', async () => {
    // Need a token in the cookie so the app tries to use it
    document.cookie = `${ACCESS_TOKEN_COOKIE_KEY}=someToken`

    renderApp()

    // The user has logged in but has not granted consent, so check for the consent text
    await screen.findByText(
      /requests permission/,
      undefined,
      overrideWaitForOptions,
    )

    // No redirect should have happened
    expect(window.location.replace).not.toHaveBeenCalled()
  })

  test('Consent to app terms', async () => {
    // Need a token in the cookie so the app tries to use it
    document.cookie = `${ACCESS_TOKEN_COOKIE_KEY}=someToken`

    const { params } = renderApp()
    const mockPostConsentFn = vi.fn()
    setMockPostConsentFn(mockPostConsentFn)
    // The user has logged in but has not granted consent, so check for the consent text
    await screen.findByText(
      /requests permission/,
      undefined,
      overrideWaitForOptions,
    )

    const consentButton = await screen.findByRole('button', { name: 'Allow' })
    await userEvent.click(consentButton)

    // Should redirect back to the client app with the code provided by the server, and the original state provided by the client via the browser.
    await waitFor(() => {
      screen.getByText(`Waiting for ${mockOauthClient.client_name!}...`)
      expect(window.location.replace).toBeCalledTimes(1)
      expect(window.location.replace).toHaveBeenCalledWith(
        `${params.get(
          'redirect_uri',
        )}?code=${URL_ENCODED_ACCESS_CODE_PROVIDED_BY_SERVER}&state=${params.get(
          'state',
        )}`,
      )
      // SWC-7287: verify consent is only called once.
      expect(mockPostConsentFn).toBeCalledTimes(1)
    })
  })

  test('Deny consent to app terms', async () => {
    // Need a token in the cookie so the app tries to use it
    document.cookie = `${ACCESS_TOKEN_COOKIE_KEY}=someToken`

    const { params } = renderApp({ prompt: 'consent' })

    // The user has logged in but has not granted consent, so check for the consent text
    await screen.findByText(mockOauthClient.client_name!)
    await screen.findByText(
      /requests permission/,
      undefined,
      overrideWaitForOptions,
    )

    const denyButton = await screen.findByRole('button', { name: 'Deny' })
    await userEvent.click(denyButton)

    // Should redirect
    // Note that no code is provided because the user denied consent
    // The state is still returned
    // and the 'access_denied' error is sent
    await waitFor(() => {
      expect(window.location.replace).toBeCalledTimes(1)
      expect(window.location.replace).toHaveBeenCalledWith(
        `${params.get('redirect_uri')}?error=access_denied&state=${params.get(
          'state',
        )}`,
      )
    })
  })

  test('Does not redirect if a token is provided and the user has already consented, if prompt is consent', async () => {
    const prompt = 'consent'
    // Consent has already been granted:
    resetConsentedInMockService(true)

    // Need a token in the cookie so the app tries to use it
    document.cookie = `${ACCESS_TOKEN_COOKIE_KEY}=someToken`

    renderApp({ prompt })
    // Verify that the consent button appears
    await screen.findByRole('button', { name: 'Allow' })

    expect(window.location.replace).not.toHaveBeenCalled()
  })

  test('Redirects if a token is provided and the user has already consented, and prompt is none', async () => {
    const prompt = 'none'
    // Consent has already been granted:
    resetConsentedInMockService(true)

    // Need a token in the cookie so the app tries to use it
    document.cookie = `${ACCESS_TOKEN_COOKIE_KEY}=someToken`

    const { params } = renderApp({ prompt })

    await waitFor(() => {
      screen.getByText(`Waiting for ${mockOauthClient.client_name!}...`)
      expect(window.location.replace).toBeCalledTimes(1)
      expect(window.location.replace).toHaveBeenCalledWith(
        `${params.get(
          'redirect_uri',
        )}?code=${URL_ENCODED_ACCESS_CODE_PROVIDED_BY_SERVER}&state=${params.get(
          'state',
        )}`,
      )
    })
  })

  test('Does not modify encoded state - SWC-7272', async () => {
    const prompt = 'none'
    const state = 'somePreEncodedState%3D%3D'
    // Consent has already been granted:
    resetConsentedInMockService(true)

    // Need a token in the cookie so the app tries to use it
    document.cookie = `${ACCESS_TOKEN_COOKIE_KEY}=someToken`

    const { params } = renderApp({ prompt, state })

    await waitFor(() => {
      screen.getByText(`Waiting for ${mockOauthClient.client_name!}...`)
      expect(window.location.replace).toHaveBeenCalledWith(
        `${params.get(
          'redirect_uri',
        )}?code=${URL_ENCODED_ACCESS_CODE_PROVIDED_BY_SERVER}&state=${params.get(
          'state',
        )}`,
      )
    })
  })
  test('Does not encode & before error_description - PORTALS-3493', async () => {
    // Tell service to not prompt, and user is not logged in
    const prompt = 'none'
    const state = 'somePreEncodedState%3D%3D'
    resetConsentedInMockService(false)

    const { params } = renderApp({ prompt, state })

    await waitFor(() => {
      screen.getByText(`consent_required`)
      const expectedSearchParams = new URLSearchParams()
      expectedSearchParams.set('error', 'consent_required')
      expectedSearchParams.set(
        'error_description',
        'Current user has not previously granted permission, and prompt was set to none',
      )
      //sent to https://some-client-uri.abc/redirect?state=state123&error=consent_required&error_description=Current+user+has+not+previously+granted+permission%2C+and+prompt+was+set+to+none
      expect(window.location.replace).toHaveBeenCalledWith(
        `${params.get(
          'redirect_uri',
        )}?${expectedSearchParams.toString()}&state=${params.get('state')}`,
      )
    })
  })

  test('Shows an error if a the redirect URI is invalid', async () => {
    // Configure mock server to throw an error that the redirect_uri is invalid
    server.use(getOAuth2DescriptionWithInvalidRedirectUriHandler())

    const { params } = renderApp()

    const alert = await screen.findByRole(
      'alert',
      undefined,
      overrideWaitForOptions,
    )
    await within(alert).findByText('invalid_redirect_uri', { exact: false })
    await within(alert).findByText(params.get('redirect_uri')!, {
      exact: false,
    })

    expect(window.location.replace).not.toHaveBeenCalled()
  })

  test('Shows an error if the backend provides an unhandled error when providing the authorization code', async () => {
    const errorMsg = 'some error'
    document.cookie = `${ACCESS_TOKEN_COOKIE_KEY}=someToken`

    server.use(
      http.post(
        'https://repo-prod.prod.sagebase.org/auth/v1/oauth2/consent',
        () => {
          return HttpResponse.json(
            {
              reason: errorMsg,
            },
            { status: 500 },
          )
        },
      ),
    )

    renderApp()

    const consentButton = await screen.findByRole('button', { name: 'Allow' })
    await userEvent.click(consentButton)

    const alert = await screen.findByRole(
      'alert',
      undefined,
      overrideWaitForOptions,
    )
    await within(alert).findByText(errorMsg, { exact: false })

    expect(window.location.replace).not.toHaveBeenCalled()
  })

  test('Shows warning if the client is unverified', async () => {
    // Configure mock server to throw an error that the client is not verified
    server.use(getOAuth2DescriptionWithUnverifiedClientHandler())

    renderApp()

    const alert = await screen.findByRole(
      'alert',
      undefined,
      overrideWaitForOptions,
    )
    await within(alert).findByText(
      /The OAuth client \(\d+\) is not verified\./,
      { exact: false },
    )

    expect(window.location.replace).not.toHaveBeenCalled()
  })

  test.skip('Supports OAuth2 login with 2FA', async () => {
    vi.spyOn(window.history, 'replaceState')

    const onOAuthSignIn = vi.fn()
    const on2FASignIn = vi.fn()
    const oauthProvider = 'GOOGLE_OAUTH_2_0'
    const oauthCode = 'abcdef'

    const paramsFromProvider = new URLSearchParams()
    paramsFromProvider.set('provider', oauthProvider)
    paramsFromProvider.set('code', oauthCode)
    paramsFromProvider.set('scope', 'email+profile+openid')
    paramsFromProvider.set('prompt', 'consent')

    const userId = 999
    const twoFaToken = 'a1b2c3d4'
    const accessToken = 'nv879un243980fn2in392uvb'
    const authenticationReciept = 'imv890vm0ewvmim3'

    server.use(
      http.post(
        'https://repo-prod.prod.sagebase.org/auth/v1/oauth2/session2',
        async ({ request }) => {
          const requestBody = await request.json()
          onOAuthSignIn(requestBody)

          return HttpResponse.json(
            {
              concreteType:
                'org.sagebionetworks.repo.model.auth.TwoFactorAuthErrorResponse',
              reason: 'Two factor authentication required.',
              errorCode: 'TWO_FA_REQUIRED',
              userId: userId,
              twoFaToken: twoFaToken,
            },
            { status: 401 },
          )
        },
      ),
      http.post(
        'https://repo-prod.prod.sagebase.org/auth/v1/2fa/token',
        async ({ request }) => {
          const requestBody = await request.json()
          on2FASignIn(requestBody)
          const responseBody: LoginResponse = {
            accessToken: accessToken,
            authenticationReceipt: authenticationReciept,
            acceptsTermsOfUse: true,
          }
          return HttpResponse.json(responseBody, { status: 201 })
        },
      ),
    )

    // Note - don't use `renderApp` since it sets the URL and instead we want to simulate the redirect from Google
    localStorage.setItem(
      LAST_PLACE_LOCALSTORAGE_KEY,
      `/?${createParams().toString()}`,
    )
    window.history.replaceState({}, '', `/?${paramsFromProvider.toString()}`)

    renderApp(undefined, false)

    await waitFor(() => {
      expect(onOAuthSignIn).toHaveBeenCalledWith(
        expect.objectContaining({
          provider: oauthProvider,
          authenticationCode: oauthCode,
        }),
      )
    })

    // No errors should be shown (such as in PORTALS-3094)
    expect(screen.queryByRole('alert')).toBe(null)
    // Verify the TOTP prompt is on-screen and type in '123456'
    await screen.findByText(
      'Enter the 6-digit, time-based verification code provided by your authenticator app.',
      undefined,
      overrideWaitForOptions,
    )
    const otpInputs = await screen.findAllByRole('textbox')
    expect(otpInputs).toHaveLength(6)
    for (let i = 0; i < otpInputs.length; i++) {
      await userEvent.type(otpInputs[i], String(i + 1))
    }
    await waitFor(() => {
      expect(on2FASignIn).toHaveBeenCalledWith(
        expect.objectContaining({
          twoFaToken: twoFaToken,
          userId: userId,
          otpCode: '123456',
          otpType: 'TOTP',
        }),
      )
    })

    // Verify that the authentication is complete and we're redirected to see the OAuth client prompt
    // Verify user is redirected to the client prompt
    await waitFor(() => {
      expect(window.history.replaceState).toHaveBeenLastCalledWith(
        expect.anything(),
        null,
        `/?${createParams().toString()}`,
      )
    })
  })

  test.each(['client_id', 'scope', 'response_type', 'redirect_uri'])(
    `An error is shown if the required parameter %s is missing`,
    async missingParam => {
      renderApp({
        // Delete the param from the URLSearchParams
        [missingParam]: null,
      })

      await waitFor(() => {
        const alert = screen.getByRole('alert')
        within(alert).findByText(
          `Invalid request. Missing required parameter(s): ${missingParam}`,
        )
      })
      expect(window.location.replace).not.toHaveBeenCalled()
    },
  )
})
