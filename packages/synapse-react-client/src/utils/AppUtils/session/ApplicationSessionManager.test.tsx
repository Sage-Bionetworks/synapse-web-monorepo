import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import { MOCK_USER_ID } from '@/mocks/user/mock_user_profile'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { defaultQueryClientConfig, useSynapseContext } from '../../context'
import { useApplicationSessionContext } from './ApplicationSessionContext'
import ApplicationSessionManager, {
  ApplicationSessionManagerProps,
} from './ApplicationSessionManager'
import { useSessionManager } from './useSessionManager'

vi.mock('./useSessionManager')

function render(props?: ApplicationSessionManagerProps) {
  const queryClient = new QueryClient(defaultQueryClientConfig)
  return renderHook(
    () => ({
      session: useApplicationSessionContext(),
      synapse: useSynapseContext(),
    }),
    {
      wrapper: ({ children }) => {
        return (
          <QueryClientProvider client={queryClient}>
            <MemoryRouter>
              <ApplicationSessionManager {...props}>
                {children}
              </ApplicationSessionManager>
            </MemoryRouter>
          </QueryClientProvider>
        )
      },
    },
  )
}

const mockUseSessionManager = vi.mocked(useSessionManager)

describe('ApplicationSessionManager wiring tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()

    mockUseSessionManager.mockReturnValue({
      sessionContext: {
        token: MOCK_ACCESS_TOKEN,
        realmId: '0',
        userId: MOCK_USER_ID.toString(),
        isAuthenticated: true,
        hasInitializedSession: true,
        refreshSession: vi.fn(),
        clearSession: vi.fn(),
        isLoadingSSO: false,
      },
      token: MOCK_ACCESS_TOKEN,
    })
  })

  it('Provides context to children', async () => {
    const { result } = render({
      downloadCartPageUrl: '/my-downloads',
      appId: 'test-app',
    })

    await waitFor(() => {
      const session = result.current.session
      expect(session.hasInitializedSession).toBe(true)
      expect(session.token).toBe(MOCK_ACCESS_TOKEN)
      expect(session.isAuthenticated).toBe(true)
    })

    await waitFor(() => {
      const synapse = result.current.synapse
      expect(synapse.accessToken).toBe(MOCK_ACCESS_TOKEN)
      expect(synapse.isAuthenticated).toBe(true)
      expect(synapse.downloadCartPageUrl).toBe('/my-downloads')
      expect(synapse.appId).toBe('test-app')
    })
  })

  describe('query keys across session initialization', () => {
    const ENTITY_ID = 'syn123'

    function mockSessionState(state: {
      token?: string
      realmId?: string
      isAuthenticated: boolean
      hasInitializedSession: boolean
    }) {
      mockUseSessionManager.mockReturnValue({
        sessionContext: {
          ...state,
          refreshSession: vi.fn(),
          clearSession: vi.fn(),
          isLoadingSSO: false,
        },
        token: state.token,
      })
    }

    function renderBeforeSessionInitializes() {
      mockSessionState({ isAuthenticated: false, hasInitializedSession: false })
      const rendered = render()
      const keyBeforeSession =
        rendered.result.current.synapse.keyFactory.getEntityQueryKey(ENTITY_ID)
      return { ...rendered, keyBeforeSession }
    }

    // Queries start before the anonymous token arrives. If the keys changed once it did, every one of those queries
    // would run again for each anonymous page load.
    it('keeps query keys when an anonymous session starts in the public realm', () => {
      const { result, rerender, keyBeforeSession } =
        renderBeforeSessionInitializes()

      mockSessionState({
        token: 'anonymous-session-token',
        realmId: '0',
        isAuthenticated: false,
        hasInitializedSession: true,
      })
      rerender()

      expect(
        result.current.synapse.keyFactory.getEntityQueryKey(ENTITY_ID),
      ).toEqual(keyBeforeSession)
    })

    it('uses separate query keys for an anonymous session in another realm', () => {
      const { result, rerender, keyBeforeSession } =
        renderBeforeSessionInitializes()

      mockSessionState({
        token: 'anonymous-session-token',
        realmId: '2',
        isAuthenticated: false,
        hasInitializedSession: true,
      })
      rerender()

      expect(result.current.synapse.realmId).toBe('2')
      expect(
        result.current.synapse.keyFactory.getEntityQueryKey(ENTITY_ID),
      ).not.toEqual(keyBeforeSession)
    })

    it('uses separate query keys once a signed-in session starts', () => {
      const { result, rerender, keyBeforeSession } =
        renderBeforeSessionInitializes()

      mockSessionState({
        token: MOCK_ACCESS_TOKEN,
        realmId: '0',
        isAuthenticated: true,
        hasInitializedSession: true,
      })
      rerender()

      expect(
        result.current.synapse.keyFactory.getEntityQueryKey(ENTITY_ID),
      ).not.toEqual(keyBeforeSession)
    })
  })
})
