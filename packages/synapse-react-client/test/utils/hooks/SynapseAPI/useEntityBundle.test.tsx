import { renderHook, waitFor } from '@testing-library/react'
import useGetEntityBundle from '../../../../src/synapse-queries/entity/useEntityBundle'
import { EntityBundle } from '@sage-bionetworks/synapse-types'
import { MOCK_CONTEXT_VALUE } from '../../../../src/mocks/MockSynapseContext'
import { createWrapper } from '../../../../src/testutils/TestingLibraryUtils'
import SynapseClient from '../../../../src/synapse-client'

const expected: EntityBundle = {
  entity: {
    id: 'syn123',
    name: 'myEntity',
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
  },
}

jest.spyOn(SynapseClient, 'getEntityBundleV2').mockResolvedValue(expected)

describe('useEntityBundle functionality', () => {
  it('correctly calls SynapseClient', async () => {
    const entityId = 'syn123'

    const { result } = renderHook(() => useGetEntityBundle(entityId), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(SynapseClient.getEntityBundleV2).toBeCalledWith(
      entityId,
      expect.anything(),
      undefined,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(result.current.data).toEqual(expected)
  })
})
