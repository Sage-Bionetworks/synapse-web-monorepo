import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import { useGetEntityHeaders } from '../../../../src/synapse-queries/entity/useGetEntityHeaders'
import {
  EntityHeader,
  PaginatedResults,
  ReferenceList,
} from '@sage-bionetworks/synapse-types'
import { MOCK_CONTEXT_VALUE } from '../../../../mocks/MockSynapseContext'
import { QueryClient } from 'react-query'
import { SynapseContextProvider } from '../../../../src/utils/context/SynapseContext'
import FullContextProvider from '../../../../src/utils/context/FullContextProvider'

const queryClient = new QueryClient()

const wrapper = (props: { children: React.ReactChildren }) => (
  <FullContextProvider
    synapseContext={MOCK_CONTEXT_VALUE}
    queryClient={queryClient}
  >
    {props.children}
  </FullContextProvider>
)
const expected: PaginatedResults<EntityHeader> = {
  results: [
    {
      id: 'syn123',
      name: 'My Entity',
      type: 'org.sagebionetworks.repo.model.FileEntity',
      versionNumber: 1,
      versionLabel: '1',
      benefactorId: 122,
      createdOn: 'today',
      modifiedOn: 'earlier',
      createdBy: 'me',
      modifiedBy: 'you',
    },
  ],
}

const SynapseClient = require('../../../../src/synapse-client/SynapseClient')
SynapseClient.getEntityHeaders = jest.fn().mockResolvedValue(expected)

describe('basic functionality', () => {
  beforeEach(() => {
    queryClient.clear()
  })

  it('correctly calls SynapseClient', async () => {
    const references: ReferenceList = [{ targetId: 'syn123' }]

    const { result, waitFor } = renderHook(
      () => useGetEntityHeaders(references),
      { wrapper },
    )

    await waitFor(() => result.current.isSuccess)

    expect(SynapseClient.getEntityHeaders).toBeCalledWith(
      references,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(result.current.data).toEqual(expected)
  })
})
