import { rest } from 'msw'
import { FeatureFlagEnum, FeatureFlags } from '@sage-bionetworks/synapse-types'
import { BackendDestinationEnum, getEndpoint } from '../../../utils/functions'

const MOCK_FEATURE_FLAGS_VALUE: FeatureFlags = {
  [FeatureFlagEnum.DESCRIPTION_FIELD]: false,
  [FeatureFlagEnum.VIRTUALTABLE_SUPPORT]: false,
  [FeatureFlagEnum.JSONSCHEMA_VALIDATION_STATUS]: false,
  [FeatureFlagEnum.REACT_ENTITY_ACL_EDITOR]: false,
  [FeatureFlagEnum.HOMEPAGE_CHATBOT]: false,
  [FeatureFlagEnum.PORTALS_DROPDOWN]: false,
}

type FeatureFlagHandlerOptions = {
  portalOrigin?: string
  overrides?: Partial<FeatureFlags>
}

export function getFeatureFlagsOverride(
  options: FeatureFlagHandlerOptions = {
    portalOrigin: getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT),
    overrides: {},
  },
) {
  const { portalOrigin, overrides } = options
  return rest.get(`${portalOrigin}Portal/featureflags`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ ...MOCK_FEATURE_FLAGS_VALUE, ...overrides }),
      ctx.set('Content-Type', 'application/json'), // Ensure header names are valid
    )
  })
}
