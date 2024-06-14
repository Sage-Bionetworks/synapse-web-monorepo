import { rest } from 'msw'
import { server } from '../server'
import { FeatureFlagEnum, FeatureFlags } from '@sage-bionetworks/synapse-types'
import { BackendDestinationEnum, getEndpoint } from '../../../utils/functions'

const MOCK_FEATURE_FLAGS_VALUE: FeatureFlags = {
  [FeatureFlagEnum.DESCRIPTION_FIELD]: false,
  [FeatureFlagEnum.CHANGE_PASSWORD_2FA_CHECK]: false,
  [FeatureFlagEnum.VIRTUALTABLE_SUPPORT]: false,
  [FeatureFlagEnum.JSONSCHEMA_VALIDATION_STATUS]: false,
}

export function useGetFeatureFlagsOverride() {
  server.use(
    rest.get(
      `${getEndpoint(
        BackendDestinationEnum.PORTAL_ENDPOINT,
      )}Portal/featureflags`,
      (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json(MOCK_FEATURE_FLAGS_VALUE),
          ctx.set('Content-Type', 'application/json'), // Ensure header names are valid
        )
      },
    ),
  )
}
