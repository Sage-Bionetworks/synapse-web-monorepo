import { AridhiaEndpoints, usePortalContext } from './PortalContext'

/**
 * Returns true if the app is being served from a staging host (the origin contains 'staging').
 */
function isStagingOrigin(): boolean {
  return window.location.origin.includes('staging')
}

/**
 * Resolves the Aridhia endpoints for the current portal. The portal's `devEndpoints` (the C-Path
 * dev hub) are used when the origin contains 'staging'; otherwise the portal's default endpoints
 * are used. To point any other environment (e.g. local development) at the dev hub, override the
 * default endpoints with the dev values in a `.env` file.
 */
export function useAridhiaEndpoints(): AridhiaEndpoints {
  const { aridhiaConfig } = usePortalContext()
  const { devEndpoints, ...defaultEndpoints } = aridhiaConfig ?? {}

  return isStagingOrigin() && devEndpoints ? devEndpoints : defaultEndpoints
}
