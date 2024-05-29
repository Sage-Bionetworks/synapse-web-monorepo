import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../utils/functions/getEndpoint'
import { server, rest } from '../server'

export function useGetFeatureFlagsOverride() {
  server.use(
    rest.get(
      `${getEndpoint(
        BackendDestinationEnum.PORTAL_ENDPOINT,
      )}Portal/featureflags`,
      (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            'mock feature flag': true,
          }),
          ctx.set('Content-Type', 'application/json'), // Ensure header names are valid
        )
      },
    ),
  )
}
