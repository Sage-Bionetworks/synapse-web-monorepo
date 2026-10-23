import SynapseClient from '@/synapse-client'
import { SynapseClientError, useSynapseContext } from '@/utils'
import { FeatureFlagEnum, FeatureFlags } from '@/utils/featureflag/FeatureFlags'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'

/**
 * Raw server flag values: `true`/`false` if configured server-side, missing if not.
 * To check whether a feature is on for the user, use `useGetFeatureFlag`.
 */
export function useGetFeatureFlags(
  options?: Partial<UseQueryOptions<FeatureFlags, SynapseClientError>>,
) {
  const { keyFactory } = useSynapseContext()

  return useQuery<FeatureFlags, SynapseClientError>({
    staleTime: Infinity,
    ...options,
    queryKey: keyFactory.getFeatureFlagQueryKey(),
    queryFn: () => SynapseClient.getFeatureFlags(),
  })
}

/**
 * Whether a feature is on for the current user. The server value wins; if unset, the user's
 * Experimental Features choices decide.
 */
export function useGetFeatureFlag(
  featureFlag: FeatureFlagEnum,
  options?: Partial<UseQueryOptions<FeatureFlags, SynapseClientError>>,
): boolean {
  const { isInExperimentalMode, enabledExperimentalFeatures } =
    useSynapseContext()

  const { data: featureFlags } = useGetFeatureFlags(options)

  // true → always enabled; false → always disabled; unset → on if Enable all is on or the user opted into this flag
  return (
    featureFlags?.[featureFlag] ??
    (isInExperimentalMode || enabledExperimentalFeatures.includes(featureFlag))
  )
}
