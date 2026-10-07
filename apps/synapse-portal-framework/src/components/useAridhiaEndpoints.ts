import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries/index'
import { FeatureFlagEnum } from 'synapse-react-client/utils/featureflag/FeatureFlags'
import { AridhiaEndpoints, usePortalContext } from './PortalContext'

/**
 * Resolves the Aridhia endpoints for the current portal. The portal's `devEndpoints` (the C-Path
 * dev hub) are used when the `AMPALS_RDCA_DAP_FORM_ENABLED` feature flag is enabled; otherwise the
 * portal's default endpoints are used.
 *
 * Must be rendered within a Synapse context, since the feature flag is fetched from Synapse.
 */
export function useAridhiaEndpoints(): AridhiaEndpoints {
  const { aridhiaConfig } = usePortalContext()
  const useDevEndpoints = useGetFeatureFlag(
    FeatureFlagEnum.AMPALS_RDCA_DAP_FORM_ENABLED,
  )
  const { devEndpoints, ...defaultEndpoints } = aridhiaConfig ?? {}

  return useDevEndpoints && devEndpoints ? devEndpoints : defaultEndpoints
}
