import { renderHook } from '@testing-library/react'
import React from 'react'
import { useGetFavorites } from '../../../../src/synapse-queries/user/useFavorites'
import { EntityHeader, PaginatedResults } from '@sage-bionetworks/synapse-types'
import { MOCK_CONTEXT_VALUE } from '../../../../mocks/MockSynapseContext'
import { QueryClient } from 'react-query'
import { SynapseContextProvider } from '../../../../src/utils/context/SynapseContext'
import SynapseClient from '../../../../src/synapse-client'
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
  beforeEach(() => {
    queryClient.clear()
  })

  it('correctly calls SynapseClient', async () => {
    const { result, waitFor } = renderHook(() => useGetFavorites(), { wrapper })

    await waitFor(() => result.current.isSuccess)

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
