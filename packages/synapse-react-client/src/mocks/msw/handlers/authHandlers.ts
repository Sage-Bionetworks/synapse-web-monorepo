import { http, HttpResponse } from 'msw'
import { MOCK_REALM_PRINCIPAL } from '@/mocks/index'

export function getAuthHandlers(backendOrigin: string) {
  return [
    http.get(`${backendOrigin}/auth/v1/authenticatedOn`, () => {
      return HttpResponse.json(
        { authenticatedOn: new Date().toISOString() },
        { status: 200 },
      )
    }),
    http.get(`${backendOrigin}/auth/v1/anonymousToken`, () => {
      return HttpResponse.json(
        { accessToken: 'mock-anonymous-token' },
        { status: 200 },
      )
    }),

    http.post(`${backendOrigin}/auth/v1/oauth2/introspect`, () => {
      return HttpResponse.json({ active: true }, { status: 200 })
    }),
    http.get(`${backendOrigin}/repo/v1/realm/principals`, () => {
      return HttpResponse.json(MOCK_REALM_PRINCIPAL, { status: 200 })
    }),
  ]
}
