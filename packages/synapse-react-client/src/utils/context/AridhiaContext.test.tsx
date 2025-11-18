import { renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it, vi, beforeEach } from 'vitest'
import {
  AridhiaContextProvider,
  useAridhiaContext,
  useAridhiaContextOptional,
} from './AridhiaContext'
import { SynapseContextProvider } from './SynapseContext'
import { PropsWithChildren } from 'react'

// Mock the aridhia-client
vi.mock(
  '@sage-bionetworks/aridhia-client/generated/apis/AuthenticationApi',
  () => ({
    AuthenticationApi: vi.fn().mockImplementation(() => ({
      authenticatePost: vi.fn().mockResolvedValue({
        access_token: 'mock-aridhia-token',
        expires_in: 3600,
        refresh_expires_in: 7200,
        refresh_token: 'mock-refresh-token',
        'not-before-policy': 0,
        session_state: 'mock-session',
        scope: 'openid',
      }),
    })),
  }),
)

vi.mock('@sage-bionetworks/aridhia-client/generated/runtime', () => ({
  Configuration: vi.fn().mockImplementation(config => config),
}))

describe('AridhiaContext', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should provide undefined access token when not logged in to Synapse', () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <SynapseContextProvider
        synapseContext={{
          accessToken: undefined,
          isInExperimentalMode: false,
          utcTime: false,
        }}
      >
        <AridhiaContextProvider
          authenticationRequest={{
            subject_token_type: 'urn:ietf:params:oauth:token-type:access_token',
            subject_token_issuer: 'synapse',
          }}
        >
          {children}
        </AridhiaContextProvider>
      </SynapseContextProvider>
    )

    const { result } = renderHook(() => useAridhiaContext(), { wrapper })

    expect(result.current.accessToken).toBeUndefined()
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBeUndefined()
  })

  it('should exchange Synapse token for Aridhia access token when logged in', async () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <SynapseContextProvider
        synapseContext={{
          accessToken: 'synapse-token-123',
          isInExperimentalMode: false,
          utcTime: false,
        }}
      >
        <AridhiaContextProvider
          authenticationRequest={{
            subject_token_type: 'urn:ietf:params:oauth:token-type:access_token',
            subject_token_issuer: 'synapse',
          }}
        >
          {children}
        </AridhiaContextProvider>
      </SynapseContextProvider>
    )

    const { result } = renderHook(() => useAridhiaContext(), { wrapper })

    await waitFor(() => {
      expect(result.current.accessToken).toBe('mock-aridhia-token')
    })

    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBeUndefined()
  })

  it('should throw error when used outside of provider', () => {
    expect(() => {
      renderHook(() => useAridhiaContext())
    }).toThrow(
      'useAridhiaContext must be used within an AridhiaContextProvider',
    )
  })

  it('should return undefined when using optional hook outside provider', () => {
    const { result } = renderHook(() => useAridhiaContextOptional())
    expect(result.current).toBeUndefined()
  })

  it('should provide refreshAccessToken function', async () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <SynapseContextProvider
        synapseContext={{
          accessToken: 'synapse-token-123',
          isInExperimentalMode: false,
          utcTime: false,
        }}
      >
        <AridhiaContextProvider
          authenticationRequest={{
            subject_token_type: 'urn:ietf:params:oauth:token-type:access_token',
            subject_token_issuer: 'synapse',
          }}
        >
          {children}
        </AridhiaContextProvider>
      </SynapseContextProvider>
    )

    const { result } = renderHook(() => useAridhiaContext(), { wrapper })

    await waitFor(() => {
      expect(result.current.accessToken).toBe('mock-aridhia-token')
    })

    expect(result.current.refreshAccessToken).toBeDefined()
    expect(typeof result.current.refreshAccessToken).toBe('function')
  })
})
