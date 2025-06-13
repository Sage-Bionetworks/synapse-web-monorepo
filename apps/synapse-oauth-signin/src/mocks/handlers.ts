import {
  OIDCAuthorizationRequest,
  OIDCAuthorizationRequestDescription,
  OAuthErrorResponse,
  TermsOfServiceStatus,
  TwoFactorAuthStatus,
} from '@sage-bionetworks/synapse-client'
import { http, HttpResponse } from 'msw'
import { SynapseApiResponse } from 'synapse-react-client/mocks/msw/handlers'
import { Mock, vi } from 'vitest'
import mockOauthClient from './MockOAuthClient'

let hasConsented = false

export function resetConsentedInMockService(newValue: boolean) {
  hasConsented = newValue
}

let mockPostConsentFn = vi.fn()

export function setMockPostConsentFn(fn: Mock<any>) {
  mockPostConsentFn = fn
}

export const ACCESS_CODE_PROVIDED_BY_SERVER = 'some Access Code' //contains value that will be encoded in the redirect to test for double-encoding
//for the encoded version, because it will be in a URL query parameter URLSearchParams uses application/x-www-form-urlencoded (which encodes spaces as '+' signs)
export const URL_ENCODED_ACCESS_CODE_PROVIDED_BY_SERVER =
  ACCESS_CODE_PROVIDED_BY_SERVER.replaceAll(' ', '+')

export const handlers = [
  http.get<never, never, TermsOfServiceStatus>(
    'https://repo-prod.prod.sagebase.org/auth/v1/termsOfUse2/status',
    () =>
      HttpResponse.json(
        {
          userId: '1234',
          userCurrentTermsOfServiceState: 'UP_TO_DATE',
          lastAgreementDate: '2024-10-23T11:09:05.085Z',
          lastAgreementVersion: '1.0.1',
        },
        { status: 200 },
      ),
  ),
  http.get<never, never, TwoFactorAuthStatus>(
    'https://repo-prod.prod.sagebase.org/auth/v1/2fa',
    () =>
      HttpResponse.json(
        {
          status: 'ENABLED',
        },
        { status: 200 },
      ),
  ),

  http.get('https://repo-prod.prod.sagebase.org/repo/v1/userProfile', () => {
    return HttpResponse.json({}, { status: 200 })
  }),

  http.get(
    'https://repo-prod.prod.sagebase.org/auth/v1/oauth2/client/:id',
    () => {
      return HttpResponse.json(mockOauthClient, { status: 200 })
    },
  ),

  http.post(
    'https://repo-prod.prod.sagebase.org/auth/v1/oauth2/description',
    () =>
      HttpResponse.json(
        {
          clientId: '1234',
          redirect_uri: 'https://some-redirect-uri.abc/redirect',
          scope: [
            'To see your Synapse user ID, which can be used to access your public profile',
          ],
        },
        { status: 200 },
      ),
  ),

  http.post('https://repo-prod.prod.sagebase.org/auth/v1/login2', () =>
    HttpResponse.json(
      { accessToken: 'someToken', acceptsTermsOfUse: true },
      { status: 200 },
    ),
  ),

  http.post(
    'https://repo-prod.prod.sagebase.org/auth/v1/oauth2/consentcheck',
    () => HttpResponse.json({ granted: hasConsented }, { status: 200 }),
  ),

  http.post(
    'https://repo-prod.prod.sagebase.org/auth/v1/oauth2/consent',
    () => {
      hasConsented = true
      mockPostConsentFn()
      return HttpResponse.json(
        { access_code: ACCESS_CODE_PROVIDED_BY_SERVER },
        { status: 200 },
      )
    },
  ),

  http.delete(
    'https://repo-prod.prod.sagebase.org/auth/v1/sessionAccessToken',
    () => {
      return HttpResponse.json('', { status: 200 })
    },
  ),
]

export function getOAuth2DescriptionWithUnverifiedClientHandler() {
  return http.post<
    never,
    OIDCAuthorizationRequest,
    SynapseApiResponse<OIDCAuthorizationRequestDescription, OAuthErrorResponse>
  >(
    'https://repo-prod.prod.sagebase.org/auth/v1/oauth2/description',
    async ({ request }) => {
      const { clientId } = await request.json()
      return HttpResponse.json(
        {
          reason: `The OAuth client (${clientId}) is not verified.`,
          errorCode: 'OAUTH_CLIENT_NOT_VERIFIED',
        },
        { status: 403 },
      )
    },
  )
}

export function getOAuth2DescriptionWithInvalidRedirectUriHandler() {
  return http.post<
    never,
    OIDCAuthorizationRequest,
    SynapseApiResponse<OIDCAuthorizationRequestDescription, OAuthErrorResponse>
  >(
    'https://repo-prod.prod.sagebase.org/auth/v1/oauth2/description',
    async ({ request }) => {
      const { redirectUri } = await request.json()
      return HttpResponse.json(
        {
          reason: `invalid_redirect_uri. Redirect URI ${redirectUri} is not registered for OpenID Certification`,
          error: 'invalid_redirect_uri',
          error_description: `Redirect URI ${redirectUri} is not registered for OpenID Certification`,
        },
        { status: 400 },
      )
    },
  )
}
