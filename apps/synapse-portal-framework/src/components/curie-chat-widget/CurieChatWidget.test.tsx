import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useSynapseContext } from 'synapse-react-client'
import { useOneSageURL } from 'synapse-react-client/utils/hooks/useOneSageURL'
import { storeRedirectURLForOneSageLoginAndGotoURL } from 'synapse-react-client/utils/AppUtils/index'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries/index'
import { FeatureFlagEnum } from 'synapse-react-client/utils/featureflag/FeatureFlags'
import { useChatDialogContext } from '../ChatDialogContext'
import CurieChatWidget from './CurieChatWidget'

vi.mock('synapse-react-client', () => ({
  useSynapseContext: vi.fn(),
}))

vi.mock('synapse-react-client/utils/hooks/useOneSageURL', () => ({
  useOneSageURL: vi.fn(),
}))

vi.mock('synapse-react-client/utils/AppUtils/index', () => ({
  storeRedirectURLForOneSageLoginAndGotoURL: vi.fn(),
}))

vi.mock('synapse-react-client/synapse-queries/index', () => ({
  useGetFeatureFlag: vi.fn(),
}))

vi.mock('../ChatDialogContext', () => ({
  useChatDialogContext: vi.fn(),
}))

function setFeatureFlags(portalChat: boolean, curieLauncher: boolean) {
  vi.mocked(useGetFeatureFlag).mockImplementation(flag => {
    if (flag === FeatureFlagEnum.PORTAL_CHAT) {
      return portalChat
    }
    if (flag === FeatureFlagEnum.CURIE_CHAT_WIDGET) {
      return curieLauncher
    }
    return false
  })
}

describe('CurieChatWidget', () => {
  const oneSageUrl = new URL('https://onesage.example.org/login')
  const openChat = vi.fn()

  beforeEach(() => {
    vi.resetAllMocks()
    vi.mocked(useOneSageURL).mockReturnValue(oneSageUrl)
    vi.mocked(useChatDialogContext).mockReturnValue({
      openChat,
      isChatAvailable: true,
    })
  })

  it('does not render when portal chat flag is disabled', () => {
    vi.mocked(useSynapseContext).mockReturnValue({
      isAuthenticated: true,
    } as never)
    setFeatureFlags(false, true)

    render(<CurieChatWidget />)

    expect(
      screen.queryByRole('button', { name: /open curie chat/i }),
    ).not.toBeInTheDocument()
  })

  it('does not render when chat context is unavailable', () => {
    vi.mocked(useSynapseContext).mockReturnValue({
      isAuthenticated: true,
    } as never)
    vi.mocked(useChatDialogContext).mockReturnValue({
      openChat,
      isChatAvailable: false,
    })
    setFeatureFlags(true, true)

    render(<CurieChatWidget />)

    expect(
      screen.queryByRole('button', { name: /open curie chat/i }),
    ).not.toBeInTheDocument()
  })

  it('redirects unauthenticated users to OneSage on click', async () => {
    const user = userEvent.setup()
    vi.mocked(useSynapseContext).mockReturnValue({
      isAuthenticated: false,
    } as never)
    setFeatureFlags(true, true)

    render(<CurieChatWidget />)

    await user.click(screen.getByRole('button', { name: /open curie chat/i }))

    expect(storeRedirectURLForOneSageLoginAndGotoURL).toHaveBeenCalledWith(
      oneSageUrl.toString(),
    )
    expect(openChat).not.toHaveBeenCalled()
  })

  it('opens curie chat for authenticated users', async () => {
    const user = userEvent.setup()
    vi.mocked(useSynapseContext).mockReturnValue({
      isAuthenticated: true,
    } as never)
    setFeatureFlags(true, true)

    render(<CurieChatWidget />)

    await user.click(screen.getByRole('button', { name: /open curie chat/i }))

    expect(openChat).toHaveBeenCalledWith('', { variant: 'curie' })
    expect(storeRedirectURLForOneSageLoginAndGotoURL).not.toHaveBeenCalled()
  })
})
