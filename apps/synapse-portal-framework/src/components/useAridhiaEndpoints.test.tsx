import { renderHook } from '@testing-library/react'
import { PropsWithChildren } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  AridhiaConfig,
  PortalContextProvider,
  PortalContextType,
} from './PortalContext'
import { useAridhiaEndpoints } from './useAridhiaEndpoints'

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

function stubOrigin(origin: string) {
  vi.stubGlobal('location', { ...window.location, origin })
}

describe('useAridhiaEndpoints', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('returns the default endpoints when the origin is not staging', () => {
    stubOrigin('https://ampals.synapse.org')

    expect(renderEndpoints({ ...defaultEndpoints, devEndpoints })).toEqual(
      defaultEndpoints,
    )
  })

  it('returns the dev endpoints when the origin contains "staging"', () => {
    stubOrigin('https://staging.ampals.synapse.org')

    expect(renderEndpoints({ ...defaultEndpoints, devEndpoints })).toEqual(
      devEndpoints,
    )
  })

  it('returns the default endpoints on staging when no dev endpoints are configured', () => {
    stubOrigin('https://staging.ampals.synapse.org')

    expect(renderEndpoints(defaultEndpoints)).toEqual(defaultEndpoints)
  })

  it('returns empty endpoints when the portal has no Aridhia config', () => {
    stubOrigin('https://staging.ampals.synapse.org')

    expect(renderEndpoints(undefined)).toEqual({})
  })
})
