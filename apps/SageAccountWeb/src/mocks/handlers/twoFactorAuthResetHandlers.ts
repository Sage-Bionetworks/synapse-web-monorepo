import { http, HttpResponse } from 'msw'
import { SynapseUtilityFunctions } from 'synapse-react-client'

const handlers = [
  http.post(
    `${SynapseUtilityFunctions.getEndpoint(
      SynapseUtilityFunctions.BackendDestinationEnum.REPO_ENDPOINT,
    )}/auth/v1/2fa/disable`,
    () => {
      return new HttpResponse(null, {
        status: 204,
      })
    },
  ),
]

export default handlers
