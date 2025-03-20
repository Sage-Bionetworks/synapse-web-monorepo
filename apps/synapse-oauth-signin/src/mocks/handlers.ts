import { rest } from 'msw'
import mockOauthClient from './MockOAuthClient'

let hasConsented = false

export function resetConsentedInMockService(newValue: boolean) {
  hasConsented = newValue
}

export const ACCESS_CODE_PROVIDED_BY_SERVER = 'some Access Code' //contains value that will be encoded in the redirect to test for double-encoding
//for the encoded version, because it will be in a URL query parameter URLSearchParams uses application/x-www-form-urlencoded (which encodes spaces as '+' signs)
export const URL_ENCODED_ACCESS_CODE_PROVIDED_BY_SERVER =
  ACCESS_CODE_PROVIDED_BY_SERVER.replaceAll(' ', '+')

export const handlers = [
  rest.get(
    'https://repo-prod.prod.sagebase.org/repo/v1/userProfile',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({}))
    },
  ),

  rest.get(
    'https://repo-prod.prod.sagebase.org/auth/v1/oauth2/client/:id',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockOauthClient))
    },
  ),

  rest.post(
    'https://repo-prod.prod.sagebase.org/auth/v1/oauth2/description',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          clientId: '1234',
          redirect_uri: 'https://some-redirect-uri.abc/redirect',
          scope: [
            'To see your Synapse user ID, which can be used to access your public profile',
          ],
        }),
      )
    },
  ),

  rest.post(
    'https://repo-prod.prod.sagebase.org/auth/v1/login2',
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          accessToken: 'someToken',
          acceptsTermsOfUse: true,
        }),
      )
    },
  ),

  rest.post(
    'https://repo-prod.prod.sagebase.org/auth/v1/oauth2/consentcheck',
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          granted: hasConsented,
        }),
      )
    },
  ),

  rest.post(
    'https://repo-prod.prod.sagebase.org/auth/v1/oauth2/consent',
    (req, res, ctx) => {
      hasConsented = true
      return res(
        ctx.status(200),
        ctx.json({
          access_code: ACCESS_CODE_PROVIDED_BY_SERVER,
        }),
      )
    },
  ),

  rest.delete(
    'https://repo-prod.prod.sagebase.org/auth/v1/sessionAccessToken',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(''))
    },
  ),
]

export function getOAuth2DescriptionWithUnverifiedClientHandler() {
  return rest.post(
    'https://repo-prod.prod.sagebase.org/auth/v1/oauth2/description',
    async (req, res, ctx) => {
      const requestBody = await req.json()
      const clientId = requestBody.clientId
      return res(
        ctx.status(403),
        ctx.json({
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
          reason: `The OAuth client (${clientId}) is not verified.`,
          errorCode: 'OAUTH_CLIENT_NOT_VERIFIED',
        }),
      )
    },
  )
}

export function getOAuth2DescriptionWithInvalidRedirectUriHandler() {
  return rest.post(
    'https://repo-prod.prod.sagebase.org/auth/v1/oauth2/description',
    async (req, res, ctx) => {
      const requestBody = await req.json()
      const redirectUri = requestBody.redirectUri
      return res(
        ctx.status(400),
        ctx.json({
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
          reason: `invalid_redirect_uri. Redirect URI ${redirectUri} is not registered for OpenID Certification`,
          error: 'invalid_redirect_uri',
          error_description: `Redirect URI ${redirectUri} is not registered for OpenID Certification`,
        }),
      )
    },
  )
}
