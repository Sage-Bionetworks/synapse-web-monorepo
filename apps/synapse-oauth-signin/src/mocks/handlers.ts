import { http, HttpResponse } from 'msw'
import mockOauthClient from './MockOAuthClient'

export const handlers = [
  http.get(
    'https://repo-prod.prod.sagebase.org/repo/v1/userProfile',
    ({ request, params }) => {
      return res(ctx.status(200), ctx.json({}))
    },
  ),

  http.get(
    'https://repo-prod.prod.sagebase.org/auth/v1/oauth2/client/:id',
    ({ request, params }) => {
      return HttpResponse.json(mockOauthClient, { status: 200 })
    },
  ),

  http.post(
    'https://repo-prod.prod.sagebase.org/auth/v1/oauth2/description',
    ({ request, params }) => {
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

  http.post(
    'https://repo-prod.prod.sagebase.org/auth/v1/login2',
    ({ request, params }) => {
      return res(
        ctx.status(200),
        ctx.json({
          accessToken: 'someToken',
          acceptsTermsOfUse: true,
        }),
      )
    },
  ),

  http.post(
    'https://repo-prod.prod.sagebase.org/auth/v1/oauth2/consentcheck',
    ({ request, params }) => {
      return res(
        ctx.status(200),
        ctx.json({
          granted: false,
        }),
      )
    },
  ),

  http.post(
    'https://repo-prod.prod.sagebase.org/auth/v1/oauth2/consent',
    ({ request, params }) => {
      return res(
        ctx.status(200),
        ctx.json({
          access_code: 'someAccessCode',
        }),
      )
    },
  ),
]
