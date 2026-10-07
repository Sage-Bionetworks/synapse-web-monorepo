import { renderHook } from '@testing-library/react'
import { PropsWithChildren } from 'react'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries/index'
import { FeatureFlagEnum } from 'synapse-react-client/utils/featureflag/FeatureFlags'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  AridhiaConfig,
  PortalContextProvider,
  PortalContextType,
} from './PortalContext'
import { useAridhiaEndpoints } from './useAridhiaEndpoints'

vi.mock('synapse-react-client/synapse-queries/index', () => ({
  useGetFeatureFlag: vi.fn(),
}))

const defaultEndpoints = {
  apiBasePath: 'https://gateway.prod.example',
  subjectTokenIssuer: 'sage-prod',
  fairPortalUrl: 'https://fair.prod.example',
}
const devEndpoints = {
  apiBasePath: 'https://gateway.dev.example',
  subjectTokenIssuer: 'sage-dev',
  fairPortalUrl: 'https://fair.dev.example',
}

function renderEndpoints(aridhiaConfig: AridhiaConfig | undefined) {
  const wrapper = ({ children }: PropsWithChildren) => (
    <PortalContextProvider value={{ aridhiaConfig } as PortalContextType}>
      {children}
    </PortalContextProvider>
  )
  return renderHook(() => useAridhiaEndpoints(), { wrapper }).result.current
}

describe('useAridhiaEndpoints', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('returns the default endpoints when the feature flag is disabled', () => {
    vi.mocked(useGetFeatureFlag).mockReturnValue(false)

    expect(renderEndpoints({ ...defaultEndpoints, devEndpoints })).toEqual(
      defaultEndpoints,
    )
    expect(useGetFeatureFlag).toHaveBeenCalledWith(
      FeatureFlagEnum.AMPALS_RDCA_DAP_FORM_ENABLED,
    )
  })

  it('returns the dev endpoints when the feature flag is enabled', () => {
    vi.mocked(useGetFeatureFlag).mockReturnValue(true)

    expect(renderEndpoints({ ...defaultEndpoints, devEndpoints })).toEqual(
      devEndpoints,
    )
  })

  it('returns the default endpoints when the flag is enabled but no dev endpoints are configured', () => {
    vi.mocked(useGetFeatureFlag).mockReturnValue(true)

    expect(renderEndpoints(defaultEndpoints)).toEqual(defaultEndpoints)
  })

  it('returns empty endpoints when the portal has no Aridhia config', () => {
    vi.mocked(useGetFeatureFlag).mockReturnValue(true)

    expect(renderEndpoints(undefined)).toEqual({})
  })
})
