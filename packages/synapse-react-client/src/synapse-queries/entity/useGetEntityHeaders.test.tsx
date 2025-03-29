import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  EntityHeader,
  PaginatedResults,
  ReferenceList,
} from '@sage-bionetworks/synapse-types'
import { renderHook, waitFor } from '@testing-library/react'
import { useGetEntityHeaders } from './useGetEntityHeaders'

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
      isLatestVersion: true,
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

    expect(mockGetEntityHeaders).toHaveBeenCalledWith(
      references,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(result.current.data).toEqual(expected)
  })
})
