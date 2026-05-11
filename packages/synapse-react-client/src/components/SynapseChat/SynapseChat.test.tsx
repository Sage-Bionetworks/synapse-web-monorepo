import { useChatState } from '@/components/SynapseChat/useChatState'
import { mockAgentSession } from '@/mocks/chat/mockChat'
import {
  useCreateAgentSession,
  useUpdateAgentSession,
} from '@/synapse-queries/chat/useChat'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SynapseChat, SynapseChatProps } from './SynapseChat'

vi.mock('@/synapse-queries/chat/useChat')
vi.mock('@/components/SynapseChat/useChatState')

const mockUseCreateAgentSession = vi.mocked(useCreateAgentSession)
const mockUseUpdateAgentSession = vi.mocked(useUpdateAgentSession)
const mockUseChatState = vi.mocked(useChatState)

const mockSendChat = vi.fn()

const defaultMockChatState = {
  sendChat: mockSendChat,
  pendingMessage: null,
  chatJobIds: [],
}

const idleMutation = {
  mutate: vi.fn(),
  mutateAsync: vi.fn(),
  data: undefined,
  error: null,
  isError: false,
  isIdle: true,
  isPending: false,
  isSuccess: false,
  failureCount: 0,
  failureReason: null,
  isPaused: false,
  status: 'idle' as const,
  variables: undefined,
  submittedAt: 0,
  reset: vi.fn(),
  context: undefined,
}

const mockPrompts = [
  'Help me fill this out',
  'Help me understand this',
  'Find missing fields',
]

const defaultProps: SynapseChatProps = {
  externalSession: mockAgentSession,
  externalChatState: defaultMockChatState,
  showAccessLevelMenu: false,
}

function renderComponent(props?: Partial<SynapseChatProps>) {
  const user = userEvent.setup()
  render(<SynapseChat {...defaultProps} {...props} />, {
    wrapper: createWrapper(),
  })
  return { user }
}

describe('SynapseChat - suggestedPrompts', () => {
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  beforeEach(() => {
    vi.clearAllMocks()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockUseCreateAgentSession.mockReturnValue(idleMutation as any)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mockUseUpdateAgentSession.mockReturnValue(idleMutation as any)
    mockUseChatState.mockReturnValue(defaultMockChatState)
  })

  it('renders pill chips when suggestedPrompts are provided', () => {
    renderComponent({ suggestedPrompts: mockPrompts })

    mockPrompts.forEach(prompt => {
      expect(screen.getByRole('button', { name: prompt })).toBeInTheDocument()
    })
  })

  it('renders no pill chips when suggestedPrompts is omitted', () => {
    renderComponent({ suggestedPrompts: undefined })

    mockPrompts.forEach(prompt => {
      expect(
        screen.queryByRole('button', { name: prompt }),
      ).not.toBeInTheDocument()
    })
  })

  it('renders no pill chips when suggestedPrompts is an empty array', () => {
    renderComponent({ suggestedPrompts: [] })

    mockPrompts.forEach(prompt => {
      expect(
        screen.queryByRole('button', { name: prompt }),
      ).not.toBeInTheDocument()
    })
  })

  it('clicking a pill populates the text field without sending', async () => {
    const { user } = renderComponent({ suggestedPrompts: mockPrompts })

    await user.click(screen.getByRole('button', { name: mockPrompts[0] }))

    expect(screen.getByRole('textbox')).toHaveValue(mockPrompts[0])
    expect(mockSendChat).not.toHaveBeenCalled()
  })

  it('chips are disabled when no agent session exists', () => {
    renderComponent({
      suggestedPrompts: mockPrompts,
      externalSession: undefined,
    })

    mockPrompts.forEach(prompt => {
      expect(screen.getByRole('button', { name: prompt })).toHaveAttribute(
        'aria-disabled',
        'true',
      )
    })
  })

  it('chips are disabled while a message is pending', () => {
    const pendingChatState = {
      ...defaultMockChatState,
      pendingMessage: 'waiting...',
    }
    renderComponent({
      suggestedPrompts: mockPrompts,
      externalChatState: pendingChatState,
    })

    mockPrompts.forEach(prompt => {
      expect(screen.getByRole('button', { name: prompt })).toHaveAttribute(
        'aria-disabled',
        'true',
      )
    })
  })

  it('text input is present alongside pills', () => {
    renderComponent({ suggestedPrompts: mockPrompts })

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    mockPrompts.forEach(prompt => {
      expect(screen.getByRole('button', { name: prompt })).toBeInTheDocument()
    })
  })
})
