import { getHandlers } from 'synapse-react-client/mocks/msw/handlers'
import {
  BackendDestinationEnum,
  getEndpoint,
} from 'synapse-react-client/utils/functions/getEndpoint'
import twoFactorAuthResetHandlers from './twoFactorAuthResetHandlers'
import { http, HttpResponse } from 'msw'

const backendOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

const additionalHandlers = [
  // Mock anonymous token endpoint
  http.get(`${backendOrigin}/auth/v1/anonymousToken`, () => {
    return HttpResponse.json({
      sessionToken: 'mock-anonymous-token',
    })
  }),
]

const handlers = [
  ...getHandlers(
    backendOrigin,
    getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT),
  ),
  ...additionalHandlers,
  ...twoFactorAuthResetHandlers,
]

export default handlers
