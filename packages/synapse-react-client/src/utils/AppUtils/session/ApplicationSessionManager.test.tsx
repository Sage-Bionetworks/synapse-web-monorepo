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
import { useApplicationSession } from './useApplicationSession'

vi.mock('./useApplicationSession')

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

const mockUseApplicationSession = vi.mocked(useApplicationSession)

describe('ApplicationSessionManager wiring tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()

    mockUseApplicationSession.mockReturnValue({
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
})
