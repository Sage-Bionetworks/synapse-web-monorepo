import { render, screen, waitFor } from '@testing-library/react'
import { server } from '../mocks/server'
import { rest } from 'msw'
import React from 'react'
import { ACCESS_TOKEN_COOKIE_KEY } from 'synapse-react-client/dist/utils/SynapseClient'
import App from '../App'
import userEvent from '@testing-library/user-event'
import { SynapseClient } from 'synapse-react-client'
import { LoginResponse } from 'synapse-react-client/dist/utils/synapseTypes/LoginResponse'
import { POST_SSO_REDIRECT_URL_LOCALSTORAGE_KEY } from 'synapse-react-client/dist/utils/AppUtils'
import { afterEach, describe, expect, test, vi } from 'vitest'

function createParams(prompt?: string) {
  const params = new URLSearchParams()
  params.set('response_type', 'code')
  params.set('client_id', '1234')
  params.set('scope', 'openid')
  params.set('state', '1ga1bi0qm')
  params.set('redirect_uri', 'https://some-client-uri.abc/redirect')
  params.set('claims', JSON.stringify({ id_token: { userid: null } }))
  if (prompt) {
    params.set('prompt', prompt)
  }
  return params
}

function renderApp(prompt?: string, updateHistory = true) {
  if (updateHistory) {
    window.history.pushState(null, '', `/?${createParams(prompt).toString()}`)
  }
  return render(<App />)
}

describe('App integration tests', () => {
  afterEach(() => {
    vi.clearAllMocks()
    document.cookie = ''
  })

  test('Shows login when no token is provided', async () => {
    renderApp()
    await screen.findByRole('button', {
      name: /sign in with your email/i,
    })
  })
  test('Shows login and does not redirect when an expired token is provided', async () => {
    // Need a token in the cookie so the app tries to use it
    document.cookie = `${ACCESS_TOKEN_COOKIE_KEY}=expired`
    // Backend should return with an invalid_token response
    server.use(
      rest.get(
        'https://repo-prod.prod.sagebase.org/repo/v1/userProfile',
        (req, res, ctx) => {
          return res(
            ctx.status(401),
            ctx.json({
              reason: 'invalid_token. The token has expired.',
              error: 'invalid_token',
              error_description: 'The token has expired.',
            }),
          )
        },
      ),
    )

    renderApp()

    // The token was invalid, so the user should be prompted to login
    await screen.findByRole('button', {
      name: /sign in with your email/i,
    })

    // No redirect should have happened
    expect(window.location.replace).not.toHaveBeenCalled()
  })

  test('Stores the token when login is successful', async () => {
    renderApp()

    await userEvent.click(
      await screen.findByRole('button', {
        name: /sign in with your email/i,
      }),
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
    await screen.findByText(/requests permission/)

    // No redirect should have happened
    expect(window.location.replace).not.toHaveBeenCalled()
  })

  test('Consent to app terms', async () => {
    const consentSpy = vi.spyOn(SynapseClient, 'consentToOAuth2Request')

    // Need a token in the cookie so the app tries to use it
    document.cookie = `${ACCESS_TOKEN_COOKIE_KEY}=someToken`

    renderApp()

    // The user has logged in but has not granted consent, so check for the consent text
    await screen.findByText(/requests permission/)

    const consentButton = await screen.findByRole('button', { name: 'Allow' })
    await userEvent.click(consentButton)

    // Should redirect
    // TODO: Verify the redirect URL
    await waitFor(() => expect(window.location.replace).toHaveBeenCalled())
    expect(consentSpy).toHaveBeenCalled()
  })
  test('Deny consent to app terms', async () => {
    const consentSpy = vi.spyOn(SynapseClient, 'consentToOAuth2Request')
    // Need a token in the cookie so the app tries to use it
    document.cookie = `${ACCESS_TOKEN_COOKIE_KEY}=someToken`

    renderApp()

    // The user has logged in but has not granted consent, so check for the consent text
    await screen.findByText(/requests permission/)

    const denyButton = await screen.findByRole('button', { name: 'Deny' })
    await userEvent.click(denyButton)

    // Should redirect
    // TODO: Verify the redirect URL
    await waitFor(() => expect(window.location.replace).toHaveBeenCalled())
    expect(consentSpy).not.toHaveBeenCalled()
  })

  test('Does not redirect if a token is provided and the user has already consented, if prompt is consent', () => {
    const prompt = 'consent'
    // Consent has already been granted:
    const hasGrantedConsent = true
    server.use(
      rest.post(
        'https://repo-prod.prod.sagebase.org/auth/v1/oauth2/consentcheck',
        (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              granted: hasGrantedConsent,
            }),
          )
        },
      ),
    )

    // Need a token in the cookie so the app tries to use it
    document.cookie = `${ACCESS_TOKEN_COOKIE_KEY}=someToken`

    renderApp(prompt)

    expect(window.location.replace).not.toHaveBeenCalled()
  })

  test.todo(
    'Redirects if a token is provided and the user has already consented, and prompt is not consent',
  )
  test.todo('Redirects in error if a the redirect URI is invalid')
  test.todo('Redirects in error if the backend provides an unhandled error')
  test.todo('Shows warning if the client is unverified')

  test('Supports OAuth2 login with 2FA', async () => {
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
      rest.post(
        'https://repo-prod.prod.sagebase.org/auth/v1/oauth2/session2',
        async (req, res, ctx) => {
          const requestBody = await req.json()
          onOAuthSignIn(requestBody)

          return res(
            ctx.status(401),
            ctx.json({
              concreteType:
                'org.sagebionetworks.repo.model.auth.TwoFactorAuthErrorResponse',
              reason: 'Two factor authentication required.',
              errorCode: 'TWO_FA_REQUIRED',
              userId: userId,
              twoFaToken: twoFaToken,
            }),
          )
        },
      ),
      rest.post(
        'https://repo-prod.prod.sagebase.org/auth/v1/2fa/token',
        async (req, res, ctx) => {
          const requestBody = await req.json()
          on2FASignIn(requestBody)
          const responseBody: LoginResponse = {
            accessToken: accessToken,
            authenticationReceipt: authenticationReciept,
            acceptsTermsOfUse: true,
          }
          return res(ctx.status(201), ctx.json(responseBody))
        },
      ),
    )

    // Note - don't use `renderApp` since it sets the URL and instead we want to simulate the redirect from Google
    localStorage.setItem(
      POST_SSO_REDIRECT_URL_LOCALSTORAGE_KEY,
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

    // Verify the TOTP prompt is on-screen and type in '123456'
    await screen.findByText(
      'Enter the 6-digit, time-based verification code provided by your authenticator app.',
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
})
