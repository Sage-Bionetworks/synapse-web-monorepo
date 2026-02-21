import {
  MOCK_REALM,
  MOCK_REALM_PRINCIPAL,
} from '@/mocks/realm/mockRealmPrincipal'
import { http, HttpResponse } from 'msw'

export const getRealmByIdHandler = (backendOrigin: string) => {
  return http.get(`${backendOrigin}/repo/v1/realm/:id`, () => {
    return HttpResponse.json(MOCK_REALM)
  })
}

export const getRealmPrincipalsHandler = (backendOrigin: string) => {
  return http.get(`${backendOrigin}/repo/v1/realm/principals`, () => {
    return HttpResponse.json(MOCK_REALM_PRINCIPAL)
  })
}

export const getRealmPrincipalsByIdHandler = (backendOrigin: string) => {
  return http.get(`${backendOrigin}/repo/v1/realm/:realmId/principals`, () => {
    return HttpResponse.json(MOCK_REALM_PRINCIPAL)
  })
}

export const getRealmHandlers = (backendOrigin: string) => [
  // More specific routes must come before the wildcard `:id` handler
  getRealmPrincipalsHandler(backendOrigin),
  getRealmPrincipalsByIdHandler(backendOrigin),
  getRealmByIdHandler(backendOrigin),
]
