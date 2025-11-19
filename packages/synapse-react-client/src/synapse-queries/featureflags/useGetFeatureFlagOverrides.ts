import { useFeatureFlagOverrides } from '@/utils/hooks/useFeatureFlagOverrides'

/**
 * Hook to access feature flag overrides functionality
 * Re-exported from utils for convenient access in queries
 */
export function useGetFeatureFlagOverrides() {
  return useFeatureFlagOverrides()
}
