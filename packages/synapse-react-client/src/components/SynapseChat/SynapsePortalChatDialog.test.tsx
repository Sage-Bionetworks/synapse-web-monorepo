import { storeRedirectURLForOneSageLoginAndGotoURL } from '@/utils/AppUtils'
import { render } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { persistPortalChatReopenIntent } from './portalChatSessionStorage'
import { SynapseChatProps } from './SynapseChat'
import { SynapsePortalChatDialog } from './SynapsePortalChatDialog'

const oneSageUrl = new URL('https://accounts.synapse.org/login')

vi.mock('@/utils/AppUtils', () => ({
  storeRedirectURLForOneSageLoginAndGotoURL: vi.fn(),
}))

vi.mock('@/utils/hooks/useOneSageURL', () => ({
  useOneSageURL: vi.fn(() => oneSageUrl),
}))

vi.mock('./portalChatSessionStorage', () => ({
  persistPortalChatReopenIntent: vi.fn(),
}))

vi.mock('../DraggableDialog/DraggableDialog', () => ({
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

let capturedProps: SynapseChatProps | undefined
vi.mock('./SynapseChat', () => ({
  default: (props: SynapseChatProps) => {
    capturedProps = props
    return null
  },
}))

describe('SynapsePortalChatDialog', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    capturedProps = undefined
  })

  it('persists the reopen intent then redirects to OneSage login when anonymous session creation is unauthorized', () => {
    render(
      <SynapsePortalChatDialog
        open
        onClose={vi.fn()}
        variant="curie"
        initialMessage="hello"
      />,
    )

    capturedProps?.onSessionCreationUnauthenticated?.()

    expect(persistPortalChatReopenIntent).toHaveBeenCalledWith({
      variant: 'curie',
      initialMessage: 'hello',
    })
    expect(storeRedirectURLForOneSageLoginAndGotoURL).toHaveBeenCalledWith(
      oneSageUrl.toString(),
    )
  })
})
