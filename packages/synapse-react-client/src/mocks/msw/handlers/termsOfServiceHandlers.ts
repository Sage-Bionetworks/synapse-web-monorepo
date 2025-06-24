import {
  termsOfServiceInfo,
  termsOfServiceNewUserStatus,
} from '@/mocks/termsOfService/mockTermsOfService'
import { TERMS_OF_USE_INFO, TERMS_OF_USE_STATUS } from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { http, HttpResponse } from 'msw'

export const getTermsOfServiceHandlers = (
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
  termsOfService = termsOfServiceNewUserStatus,
) => [
  http.get(`${backendOrigin}${TERMS_OF_USE_STATUS}`, () => {
    return HttpResponse.json(termsOfService, { status: 201 })
  }),

  http.get(`${backendOrigin}${TERMS_OF_USE_INFO}`, () => {
    return HttpResponse.json(termsOfServiceInfo, { status: 201 })
  }),
]
