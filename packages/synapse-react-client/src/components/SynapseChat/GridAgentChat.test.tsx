import { mockAgentSession } from '@/mocks/chat/mockChat'
import { getChatbotHandlers } from '@/mocks/msw/handlers/chatHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { AGENT_SESSION } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { render, screen, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { GridAgentChat, GridAgentChatProps } from './GridAgentChat'

const repoOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

const defaultProps: Omit<GridAgentChatProps, 'onClose'> = {
  gridSessionId: 'test-grid-session',
  usersReplicaId: 7,
  open: true,
}

describe('GridAgentChat', () => {
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = vi.fn()
  })

  // SynapseGrid re-renders on every grid model change, so the chat often re-renders before the
  // agent session request resolves.
  it('creates one agent session when re-rendered before the session is created', async () => {
    let createdSessions = 0
    const { promise: sessionReleased, resolve: releaseSession } =
      Promise.withResolvers<void>()
    server.use(
      http.post(`${repoOrigin}${AGENT_SESSION}`, async () => {
        createdSessions++
        await sessionReleased
        return HttpResponse.json(mockAgentSession, { status: 201 })
      }),
      ...getChatbotHandlers(repoOrigin),
    )

    // A new onClose on each render bypasses memoization, as an unmemoized parent callback would
    const { rerender } = render(
      <GridAgentChat {...defaultProps} onClose={() => {}} />,
      { wrapper: createWrapper() },
    )
    await waitFor(() => expect(createdSessions).toBe(1))
    rerender(<GridAgentChat {...defaultProps} onClose={() => {}} />)
    rerender(<GridAgentChat {...defaultProps} onClose={() => {}} />)

    releaseSession()

    await waitFor(() => expect(screen.getByRole('textbox')).toBeEnabled())
    expect(createdSessions).toBe(1)
  })
})
