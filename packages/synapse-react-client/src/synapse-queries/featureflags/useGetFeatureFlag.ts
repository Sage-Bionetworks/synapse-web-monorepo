import SynapseClient from '@/synapse-client'
import { SynapseClientError, useSynapseContext } from '@/utils'
import { getFeatureFlagOverrides } from '@/utils/hooks/useFeatureFlagOverrides'
import { FeatureFlagEnum, FeatureFlags } from '@sage-bionetworks/synapse-types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

export function useGetFeatureFlag(
  featureFlag: FeatureFlagEnum,
  options?: Partial<UseQueryOptions<FeatureFlags, SynapseClientError>>,
): boolean {
  const { keyFactory, isInExperimentalMode } = useSynapseContext()

  const { data: featureFlags } = useQuery<FeatureFlags, SynapseClientError>({
    staleTime: Infinity,
    ...options,
    queryKey: keyFactory.getFeatureFlagQueryKey(),
    queryFn: () => SynapseClient.getFeatureFlags(),
  })

  // Track user overrides and listen for changes
  const [userOverrides, setUserOverrides] = useState(getFeatureFlagOverrides())

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'synapseFeatureFlagOverrides') {
        setUserOverrides(getFeatureFlagOverrides())
      }
    }
    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  const globalFlagValue = featureFlags?.[featureFlag]
  const userOverride = userOverrides[featureFlag]

  // Precedence: Global enabled flags cannot be disabled → User overrides → Experimental mode
  if (globalFlagValue === true) {
    return true
  }

  if (userOverride !== undefined) {
    return userOverride
  }

  return isInExperimentalMode
}
