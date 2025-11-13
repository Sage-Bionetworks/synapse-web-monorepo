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
vi.mock('@sage-bionetworks/aridhia-client', () => ({
  AuthenticationApi: vi.fn().mockImplementation(() => ({
    authenticatePost: vi.fn().mockResolvedValue({
      token: 'mock-dap-token',
      user: {
        uuid: 'user-123',
        email: 'test@example.com',
        name: 'Test User',
      },
    }),
  })),
  Configuration: vi.fn().mockImplementation(config => config),
}))

describe('AridhiaContext', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should provide undefined DAP token when not logged in to Synapse', () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <SynapseContextProvider
        synapseContext={{
          accessToken: undefined,
          isInExperimentalMode: false,
          utcTime: false,
        }}
      >
        <AridhiaContextProvider>{children}</AridhiaContextProvider>
      </SynapseContextProvider>
    )

    const { result } = renderHook(() => useAridhiaContext(), { wrapper })

    expect(result.current.dapToken).toBeUndefined()
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBeUndefined()
  })

  it('should exchange Synapse token for DAP token when logged in', async () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <SynapseContextProvider
        synapseContext={{
          accessToken: 'synapse-token-123',
          isInExperimentalMode: false,
          utcTime: false,
        }}
      >
        <AridhiaContextProvider>{children}</AridhiaContextProvider>
      </SynapseContextProvider>
    )

    const { result } = renderHook(() => useAridhiaContext(), { wrapper })

    await waitFor(() => {
      expect(result.current.dapToken).toBe('mock-dap-token')
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

  it('should provide refreshDapToken function', async () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <SynapseContextProvider
        synapseContext={{
          accessToken: 'synapse-token-123',
          isInExperimentalMode: false,
          utcTime: false,
        }}
      >
        <AridhiaContextProvider>{children}</AridhiaContextProvider>
      </SynapseContextProvider>
    )

    const { result } = renderHook(() => useAridhiaContext(), { wrapper })

    await waitFor(() => {
      expect(result.current.dapToken).toBe('mock-dap-token')
    })

    expect(result.current.refreshDapToken).toBeDefined()
    expect(typeof result.current.refreshDapToken).toBe('function')
  })
})
