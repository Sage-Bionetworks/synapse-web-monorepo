import { http, HttpResponse } from 'msw'
import {
  BackendDestinationEnum,
  getEndpoint,
} from 'synapse-react-client/utils/functions/getEndpoint'

const handlers = [
  http.post(
    `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}/auth/v1/2fa/disable`,
    () => {
      return new HttpResponse(null, {
        status: 204,
      })
    },
  ),
]

export default handlers
