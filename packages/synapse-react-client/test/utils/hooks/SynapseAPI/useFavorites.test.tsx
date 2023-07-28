import { renderHook, waitFor } from '@testing-library/react'
import { useGetFavorites } from '../../../../src/synapse-queries/user/useFavorites'
import { EntityHeader, PaginatedResults } from '@sage-bionetworks/synapse-types'
import { MOCK_CONTEXT_VALUE } from '../../../../src/mocks/MockSynapseContext'
import SynapseClient from '../../../../src/synapse-client'
import { createWrapper } from '../../../../src/testutils/TestingLibraryUtils'

const expected: PaginatedResults<EntityHeader> = {
  results: [
    {
      id: 'syn123',
      name: 'My Favorite Entity',
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

const mockGetUserFavorites = jest
  .spyOn(SynapseClient, 'getUserFavorites')
  .mockResolvedValue(expected)

describe('useFavorites functionality', () => {
  it('correctly calls SynapseClient', async () => {
    const { result } = renderHook(() => useGetFavorites(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(mockGetUserFavorites).toBeCalledWith(
      MOCK_CONTEXT_VALUE.accessToken,
      undefined,
      undefined,
      'FAVORITED_ON',
      'DESC',
    )
    expect(result.current.data).toEqual(expected)
  })
})
