import { render } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useApplicationSessionContext } from 'synapse-react-client'
import { consumePortalChatReopenIntent } from 'synapse-react-client/components/SynapseChat/portalChatSessionStorage'
import { useChatDialogContext } from './ChatDialogContext'
import { ChatReopenAfterLogin } from './ChatReopenAfterLogin'

vi.mock('synapse-react-client', () => ({
  useApplicationSessionContext: vi.fn(),
}))

vi.mock(
  'synapse-react-client/components/SynapseChat/portalChatSessionStorage',
  () => ({
    consumePortalChatReopenIntent: vi.fn(),
  }),
)

vi.mock('./ChatDialogContext', () => ({
  useChatDialogContext: vi.fn(),
}))

describe('ChatReopenAfterLogin', () => {
  const openChat = vi.fn()

  beforeEach(() => {
    vi.resetAllMocks()
    vi.mocked(useChatDialogContext).mockReturnValue({
      openChat,
      isChatAvailable: true,
    })
  })

  it('reopens the chat when the user returns authenticated with a stored intent', () => {
    vi.mocked(useApplicationSessionContext).mockReturnValue({
      hasInitializedSession: true,
      isAuthenticated: true,
    } as never)
    vi.mocked(consumePortalChatReopenIntent).mockReturnValue({
      variant: 'curie',
      initialMessage: 'hello',
    })

    render(<ChatReopenAfterLogin />)

    expect(openChat).toHaveBeenCalledWith('hello', { variant: 'curie' })
  })

  it('does not reopen when the session has not initialized', () => {
    vi.mocked(useApplicationSessionContext).mockReturnValue({
      hasInitializedSession: false,
      isAuthenticated: false,
    } as never)

    render(<ChatReopenAfterLogin />)

    expect(consumePortalChatReopenIntent).not.toHaveBeenCalled()
    expect(openChat).not.toHaveBeenCalled()
  })

  it('discards the intent without reopening when the user is not authenticated', () => {
    vi.mocked(useApplicationSessionContext).mockReturnValue({
      hasInitializedSession: true,
      isAuthenticated: false,
    } as never)
    vi.mocked(consumePortalChatReopenIntent).mockReturnValue({
      variant: 'curie',
    })

    render(<ChatReopenAfterLogin />)

    // The intent is consumed (cleared) so it can't trigger a redirect loop, but chat is not reopened.
    expect(consumePortalChatReopenIntent).toHaveBeenCalled()
    expect(openChat).not.toHaveBeenCalled()
  })

  it('does nothing when there is no stored intent', () => {
    vi.mocked(useApplicationSessionContext).mockReturnValue({
      hasInitializedSession: true,
      isAuthenticated: true,
    } as never)
    vi.mocked(consumePortalChatReopenIntent).mockReturnValue(undefined)

    render(<ChatReopenAfterLogin />)

    expect(openChat).not.toHaveBeenCalled()
  })
})
