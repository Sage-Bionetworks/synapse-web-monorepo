import { describe, it, expect } from 'vitest'
import { getLatestGridSessionForSource } from './getLatestGridSessionForSource'
import { QueryClient } from '@tanstack/react-query'
import { KeyFactory } from '@/synapse-queries/KeyFactory'
import { SynapseContextType } from '@/stores/SynapseContext'
import { SynapseClient } from '@sage-bionetworks/synapse-client/SynapseClient'

const mockKeyFactory = new KeyFactory(undefined)
const mockSynapseClient = new SynapseClient()

const baseContext: SynapseContextType = {
  keyFactory: mockKeyFactory,
  synapseClient: mockSynapseClient,
  accessToken: '',
  isAuthenticated: false,
  isInExperimentalMode: false,
  utcTime: false,
  withErrorBoundary: false,
  downloadCartPageUrl: '',
}

describe('getLatestGridSessionForSource', () => {
  it('returns null if no sessions', async () => {
    const queryClient = {
      fetchQuery: () => ({ page: [] }),
    } as unknown as QueryClient
    const result = await getLatestGridSessionForSource('sourceId', {
      queryClient,
      synapseContext: baseContext,
    })
    expect(result).toBeNull()
  })

  it('returns first session if sessions exist', async () => {
    const session = { sessionId: 'abc' }
    const queryClient = {
      fetchQuery: () => ({ page: [session] }),
    } as unknown as QueryClient
    const result = await getLatestGridSessionForSource('sourceId', {
      queryClient,
      synapseContext: baseContext,
    })
    expect(result).toBe(session)
  })
})
