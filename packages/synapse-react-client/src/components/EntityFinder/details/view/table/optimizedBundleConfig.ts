// Shared query options for better caching to reduce API throttling
export const OPTIMIZED_ENTITY_BUNDLE_QUERY_OPTIONS = {
  staleTime: 5 * 60 * 1000, // 5 minutes - data stays fresh longer
  gcTime: 10 * 60 * 1000, // 10 minutes - keep in cache longer
} as const
