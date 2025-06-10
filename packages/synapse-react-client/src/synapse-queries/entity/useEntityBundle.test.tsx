import mockFileEntity from '@/mocks/entity/mockFileEntity'
import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { EntityBundle } from '@sage-bionetworks/synapse-types'
import { renderHook, waitFor } from '@testing-library/react'
import useGetEntityBundle from './useEntityBundle'

const expected: EntityBundle = mockFileEntity.bundle

vi.spyOn(SynapseClient, 'getEntityBundleV2').mockResolvedValue(expected)

describe('useEntityBundle functionality', () => {
  it('correctly calls SynapseClient', async () => {
    const entityId = 'syn123'

    const { result } = renderHook(() => useGetEntityBundle(entityId), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(SynapseClient.getEntityBundleV2).toHaveBeenCalledWith(
      entityId,
      expect.anything(),
      undefined,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(result.current.data).toEqual(expected)
  })
})
