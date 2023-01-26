import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { QueryClient } from 'react-query'
import useGetEntityBundle from '../../../../../lib/utils/hooks/SynapseAPI/entity/useEntityBundle'
import { EntityBundle } from '../../../../../lib/utils/synapseTypes'
import { MOCK_CONTEXT_VALUE } from '../../../../../mocks/MockSynapseContext'
import { SynapseContextProvider } from '../../../../../lib/utils/SynapseContext'

const queryClient = new QueryClient()

const wrapper = (props: { children: React.ReactChildren }) => (
  <SynapseContextProvider
    synapseContext={MOCK_CONTEXT_VALUE}
    queryClient={queryClient}
  >
    {props.children}
  </SynapseContextProvider>
)

const expected: EntityBundle = {
  entity: {
    id: 'syn123',
    name: 'myEntity',
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
  },
}

const SynapseClient = require('../../../../../lib/utils/SynapseClient')
SynapseClient.getEntityBundleV2 = jest.fn().mockResolvedValue(expected)

describe('useEntityBundle functionality', () => {
  beforeEach(() => {
    queryClient.clear()
  })

  it('correctly calls SynapseClient', async () => {
    const entityId = 'syn123'

    const { result, waitFor } = renderHook(() => useGetEntityBundle(entityId), {
      wrapper,
    })

    await waitFor(() => result.current.isSuccess)
    expect(SynapseClient.getEntityBundleV2).toBeCalledWith(
      entityId,
      expect.anything(),
      undefined,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(result.current.data).toEqual(expected)
  })
})
