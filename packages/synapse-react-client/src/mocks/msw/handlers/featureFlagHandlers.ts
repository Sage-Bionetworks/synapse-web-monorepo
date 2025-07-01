import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { FeatureFlagEnum, FeatureFlags } from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'

const MOCK_FEATURE_FLAGS_VALUE: FeatureFlags = Object.values(
  FeatureFlagEnum,
).reduce((prev, curr) => {
  return { ...prev, [curr]: false }
}, {} as FeatureFlags)

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
  return http.get(`${portalOrigin}/Portal/featureflags`, () => {
    return HttpResponse.json(
      { ...MOCK_FEATURE_FLAGS_VALUE, ...overrides },
      { status: 200 },
    )
  })
}
