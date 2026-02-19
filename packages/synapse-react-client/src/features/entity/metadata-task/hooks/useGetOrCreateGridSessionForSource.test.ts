import * as gridSession from '@/synapse-queries/grid/useGridSession'
import { KeyFactory } from '@/synapse-queries'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import * as context from '@/utils/context/SynapseContext'
import { CreateGridRequest } from '@sage-bionetworks/synapse-client'
import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import * as utils from '../utils/getLatestGridSessionForSource'
import useGetOrCreateGridSessionForSource from './useGetOrCreateGridSessionForSource'

const mockSession = { sessionId: 'abc' }
const mockCreateGridSessionResult = { gridSession: { sessionId: 'def' } }
const createRequest: CreateGridRequest = {
  recordSetId: 'syn123',
  concreteType: 'org.sagebionetworks.repo.model.grid.CreateGridRequest',
}

describe('useGetOrCreateGridSessionForSource', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('returns existing session if found', async () => {
    vi.spyOn(utils, 'getLatestGridSessionForSource').mockResolvedValue(
      mockSession,
    )
    vi.spyOn(gridSession, 'useCreateGridSession').mockReturnValue({
      mutateAsync: vi.fn(),
    } as any)
    vi.spyOn(context, 'useSynapseContext').mockReturnValue({
      keyFactory: new KeyFactory('mock-token'),
      synapseClient: {} as any,
    } as any)
    const { result } = renderHook(() => useGetOrCreateGridSessionForSource(), {
      wrapper: createWrapper(),
    })
    const returnValue = await act(() =>
      result.current.mutateAsync({
        sourceId: 'id',
        createRequest: createRequest,
      }),
    )
    expect(returnValue).toBe(mockSession)
  })

  it('creates session if none found', async () => {
    vi.spyOn(utils, 'getLatestGridSessionForSource').mockResolvedValue(null)
    const mutateAsync = vi.fn().mockResolvedValue(mockCreateGridSessionResult)
    vi.spyOn(gridSession, 'useCreateGridSession').mockReturnValue({
      mutateAsync,
    } as any)
    vi.spyOn(context, 'useSynapseContext').mockReturnValue({
      keyFactory: new KeyFactory('mock-token'),
      synapseClient: {} as any,
    } as any)
    const { result } = renderHook(() => useGetOrCreateGridSessionForSource(), {
      wrapper: createWrapper(),
    })
    const returnValue = await act(() =>
      result.current.mutateAsync({
        sourceId: 'id',
        createRequest: createRequest,
      }),
    )
    expect(mutateAsync).toHaveBeenCalledWith(createRequest)
    expect(returnValue).toEqual(mockCreateGridSessionResult.gridSession)
  })
})
