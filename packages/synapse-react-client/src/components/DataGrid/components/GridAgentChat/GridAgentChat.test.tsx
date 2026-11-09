import { mockAgentSession } from '@/mocks/chat/mockChat'
import { getChatbotHandlers } from '@/mocks/msw/handlers/chatHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { AGENT_SESSION } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { GridAgentChat, GridAgentChatProps } from './GridAgentChat'

const repoOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

const MESSAGE = 'Which fields are missing?'
const RESPONSE = /This is the only response this agent is told/

const defaultProps: Omit<GridAgentChatProps, 'onClose'> = {
  gridSessionId: 'test-grid-session',
  usersReplicaId: 7,
  open: true,
}

/**
 * Registers the chat handlers, counting agent session creation. The session response waits for
 * `releaseSession`, so a test can act while the session is being created.
 */
function registerChatHandlers() {
  const sessionCreation = { count: 0 }
  const { promise: sessionReleased, resolve: releaseSession } =
    Promise.withResolvers<void>()
  server.use(
    http.post(`${repoOrigin}${AGENT_SESSION}`, async () => {
      sessionCreation.count++
      await sessionReleased
      return HttpResponse.json(mockAgentSession, { status: 201 })
    }),
    ...getChatbotHandlers(repoOrigin),
  )
  return { sessionCreation, releaseSession }
}

function renderChat(props: Partial<GridAgentChatProps> = {}) {
  const user = userEvent.setup()
  // A new onClose on each render bypasses memoization, as an unmemoized parent callback would
  const renderElement = (newProps: Partial<GridAgentChatProps>) => (
    <GridAgentChat {...defaultProps} onClose={() => {}} {...newProps} />
  )
  const result = render(renderElement(props), { wrapper: createWrapper() })
  return {
    user,
    rerender: (newProps: Partial<GridAgentChatProps> = {}) =>
      result.rerender(renderElement({ ...props, ...newProps })),
  }
}

async function sendMessage(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByRole('textbox'), MESSAGE)
  await user.click(screen.getByRole('button', { name: 'Send message' }))
}

describe('GridAgentChat', () => {
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  it('does not create an agent session until the first message is sent', async () => {
    const { sessionCreation, releaseSession } = registerChatHandlers()
    releaseSession()
    const { user } = renderChat()
    // Let any effect that would create the session run
    await act(async () => {})

    expect(sessionCreation.count).toBe(0)
    expect(screen.getByRole('textbox')).toBeEnabled()

    await sendMessage(user)

    expect(await screen.findByText(RESPONSE)).toBeInTheDocument()
    expect(screen.getByText(MESSAGE)).toBeInTheDocument()
    expect(sessionCreation.count).toBe(1)
  })

  // SynapseGrid re-renders on every grid model change, so the chat often re-renders before the
  // agent session request resolves.
  it('creates one agent session when re-rendered while the session is being created', async () => {
    const { sessionCreation, releaseSession } = registerChatHandlers()
    const { user, rerender } = renderChat()

    await sendMessage(user)
    await waitFor(() => expect(sessionCreation.count).toBe(1))
    rerender()
    rerender()
    releaseSession()

    expect(await screen.findByText(RESPONSE)).toBeInTheDocument()
    expect(sessionCreation.count).toBe(1)
  })

  it('keeps the conversation when closed and reopened', async () => {
    const { sessionCreation, releaseSession } = registerChatHandlers()
    releaseSession()
    const { user, rerender } = renderChat()
    await sendMessage(user)
    await screen.findByText(RESPONSE)

    rerender({ open: false })
    expect(screen.queryByText(MESSAGE)).not.toBeInTheDocument()
    rerender({ open: true })

    expect(await screen.findByText(MESSAGE)).toBeInTheDocument()
    expect(screen.getByText(RESPONSE)).toBeInTheDocument()
    expect(sessionCreation.count).toBe(1)
  })
})
