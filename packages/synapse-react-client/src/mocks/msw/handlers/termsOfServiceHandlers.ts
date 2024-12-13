import { rest } from 'msw'
import {
  TERMS_OF_USE_INFO,
  TERMS_OF_USE_STATUS,
} from '../../../utils/APIConstants'
import {
  termsOfServiceInfo,
  termsOfServiceNewUserStatus,
} from 'src/mocks/termsOfService/mockTermsOfService'
import {
  BackendDestinationEnum,
  getEndpoint,
} from 'src/utils/functions/getEndpoint'

export const getTermsOfServiceHandlers = (
  backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
  termsOfService = termsOfServiceNewUserStatus,
) => [
  rest.get(`${backendOrigin}${TERMS_OF_USE_STATUS}`, async (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json(termsOfService))
  }),

  rest.get(`${backendOrigin}${TERMS_OF_USE_INFO}`, async (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json(termsOfServiceInfo))
  }),
]
