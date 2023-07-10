import { renderHook, waitFor } from '@testing-library/react'
import React from 'react'
import { useGetEntityHeaders } from '../../../../src/synapse-queries/entity/useGetEntityHeaders'
import {
  EntityHeader,
  PaginatedResults,
  ReferenceList,
} from '@sage-bionetworks/synapse-types'
import { MOCK_CONTEXT_VALUE } from '../../../../mocks/MockSynapseContext'
import { QueryClient } from 'react-query'
import FullContextProvider from '../../../../src/utils/context/FullContextProvider'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import SynapseClient from '../../../../src/synapse-client'

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

const mockGetEntityHeaders = jest
  .spyOn(SynapseClient, 'getEntityHeaders')
  .mockResolvedValue(expected)

describe('basic functionality', () => {
  it('correctly calls SynapseClient', async () => {
    const references: ReferenceList = [{ targetId: 'syn123' }]

    const { result } = renderHook(() => useGetEntityHeaders(references), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(mockGetEntityHeaders).toBeCalledWith(
      references,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(result.current.data).toEqual(expected)
  })
})
