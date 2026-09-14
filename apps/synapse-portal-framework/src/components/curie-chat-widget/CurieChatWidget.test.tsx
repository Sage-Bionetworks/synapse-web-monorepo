import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useGetFeatureFlag } from 'synapse-react-client/synapse-queries/index'
import { FeatureFlagEnum } from 'synapse-react-client/utils/featureflag/FeatureFlags'
import { useChatDialogContext } from '../ChatDialogContext'
import CurieChatDialogLauncher from './CurieChatWidget'

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

describe('CurieChatDialogLauncher', () => {
  const openChat = vi.fn()

  beforeEach(() => {
    vi.resetAllMocks()
    vi.mocked(useChatDialogContext).mockReturnValue({
      openChat,
      isChatAvailable: true,
    })
  })

  it('does not render when portal chat flag is disabled', () => {
    setFeatureFlags(false, true)

    render(<CurieChatDialogLauncher />)

    expect(
      screen.queryByRole('button', { name: /open curie chat/i }),
    ).not.toBeInTheDocument()
  })

  it('does not render when chat context is unavailable', () => {
    vi.mocked(useChatDialogContext).mockReturnValue({
      openChat,
      isChatAvailable: false,
    })
    setFeatureFlags(true, true)

    render(<CurieChatDialogLauncher />)

    expect(
      screen.queryByRole('button', { name: /open curie chat/i }),
    ).not.toBeInTheDocument()
  })

  it('opens curie chat on click without requiring login', async () => {
    const user = userEvent.setup()
    setFeatureFlags(true, true)

    render(<CurieChatDialogLauncher />)

    await user.click(screen.getByRole('button', { name: /open curie chat/i }))

    expect(openChat).toHaveBeenCalledWith('', { variant: 'curie' })
  })
})
