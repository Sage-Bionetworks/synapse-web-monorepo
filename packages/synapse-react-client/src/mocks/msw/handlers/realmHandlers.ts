import { MOCK_REALM_PRINCIPAL } from '@/mocks/realm/mockRealmPrincipal'
import { http, HttpResponse } from 'msw'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'

export const getRealmPrincipalsHandler = () => {
  return http.get(
    `${getEndpoint(
      BackendDestinationEnum.REPO_ENDPOINT,
    )}/repo/v1/realm/principals`,
    () => {
      return HttpResponse.json(MOCK_REALM_PRINCIPAL)
    },
  )
}

export const getRealmPrincipalsByIdHandler = (realmId: string = '0') => {
  return http.get(
    `${getEndpoint(
      BackendDestinationEnum.REPO_ENDPOINT,
    )}/repo/v1/realm/${realmId}/principals`,
    () => {
      return HttpResponse.json(MOCK_REALM_PRINCIPAL)
    },
  )
}

export const realmHandlers = [
  getRealmPrincipalsHandler(),
  getRealmPrincipalsByIdHandler(),
]
