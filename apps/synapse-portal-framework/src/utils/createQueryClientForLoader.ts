import { QueryClient } from '@tanstack/react-query'
import { defaultQueryClientConfig } from 'synapse-react-client/utils/context/FullContextProvider'

/**
 * Creates a fresh QueryClient suitable for use inside a React Router loader.
 * Uses the same configuration as the portal's runtime QueryClient so that
 * dehydrated state produced here is compatible with the HydrationBoundary
 * consumed in the component tree.
 */
export function createQueryClientForLoader(): QueryClient {
  return new QueryClient(defaultQueryClientConfig)
}
