import { renderHook } from '@testing-library/react'
import { PropsWithChildren } from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries/index'
import { FeatureFlagEnum } from 'synapse-react-client/utils/featureflag/FeatureFlags'
import { ChatDialogContext } from '../ChatDialogContext'
import { PortalContext, PortalContextType } from '../PortalContext'
import { useIsCurieLauncherAvailable } from './useIsCurieLauncherAvailable'

vi.mock('synapse-react-client/synapse-queries/index', () => ({
  useGetFeatureFlag: vi.fn(),
}))

function setFeatureFlags(portalChat: boolean, curieWidget: boolean) {
  vi.mocked(useGetFeatureFlag).mockImplementation(flag => {
    if (flag === FeatureFlagEnum.PORTAL_CHAT) {
      return portalChat
    }
    if (flag === FeatureFlagEnum.CURIE_CHAT_WIDGET) {
      return curieWidget
    }
    return false
  })
}

function renderUseIsCurieLauncherAvailable(options: {
  isChatAvailable?: boolean
  isCurieLauncherEnabled?: boolean
}) {
  const { isChatAvailable = true, isCurieLauncherEnabled } = options
  const wrapper = ({ children }: PropsWithChildren) => (
    <PortalContext.Provider
      value={{ isCurieLauncherEnabled } as PortalContextType}
    >
      <ChatDialogContext.Provider
        value={{ openChat: vi.fn(), isChatAvailable }}
      >
        {children}
      </ChatDialogContext.Provider>
    </PortalContext.Provider>
  )
  return renderHook(() => useIsCurieLauncherAvailable(), { wrapper })
}

describe('useIsCurieLauncherAvailable', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('is available when the portal opts in, even if the feature flags are disabled', () => {
    setFeatureFlags(false, false)

    const { result } = renderUseIsCurieLauncherAvailable({
      isCurieLauncherEnabled: true,
    })

    expect(result.current).toBe(true)
  })

  it('follows the feature flags when the portal has not opted in', () => {
    setFeatureFlags(true, true)

    const { result } = renderUseIsCurieLauncherAvailable({})

    expect(result.current).toBe(true)
  })

  it('is unavailable when the portal has not opted in and the feature flags are disabled', () => {
    setFeatureFlags(false, false)

    const { result } = renderUseIsCurieLauncherAvailable({})

    expect(result.current).toBe(false)
  })

  it('is unavailable when the portal opts out, even if the feature flags are enabled', () => {
    setFeatureFlags(true, true)

    const { result } = renderUseIsCurieLauncherAvailable({
      isCurieLauncherEnabled: false,
    })

    expect(result.current).toBe(false)
  })

  it('is unavailable when the portal has no chat configured', () => {
    setFeatureFlags(true, true)

    const { result } = renderUseIsCurieLauncherAvailable({
      isChatAvailable: false,
      isCurieLauncherEnabled: true,
    })

    expect(result.current).toBe(false)
  })
})
