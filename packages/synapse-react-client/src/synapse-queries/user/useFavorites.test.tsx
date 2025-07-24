import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { EntityHeader } from '@sage-bionetworks/synapse-types'
import { renderHook, waitFor } from '@testing-library/react'
import { useGetFavorites } from './useFavorites'

const expected: EntityHeader[] = [
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
]

const mockGetUserFavorites = vi
  .spyOn(SynapseClient, 'getAllUserFavorites')
  .mockResolvedValue(expected)

describe('useFavorites functionality', () => {
  it('correctly calls SynapseClient', async () => {
    const { result } = renderHook(() => useGetFavorites(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isLoading).toBe(false))

    expect(mockGetUserFavorites).toHaveBeenCalledWith(
      MOCK_CONTEXT_VALUE.accessToken,
      'FAVORITED_ON',
      'DESC',
    )
    expect(result.current.data).toEqual(expected)
  })
})
