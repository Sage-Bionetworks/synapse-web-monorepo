import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { SearchQuery, SearchResults } from '@sage-bionetworks/synapse-types'
import { act, renderHook, waitFor } from '@testing-library/react'
import { useSearch, useSearchInfinite } from './useSearch'

const request: SearchQuery = {
  queryTerm: ['search', 'terms'],
}

const page1: SearchResults = {
  hits: [
    {
      id: 'syn123',
      name: 'Result 1',
      modified_on: 2142424,
      modified_by: '100000',
      etag: '000',
      alias: 'result other name',
      path: { path: [] },
      description: '',
      node_type: EntityType.file,
      created_on: 2142424,
      created_by: 'me',
      diagnosis: 'none',
      tissue: '',
      consortium: 'tcga',
      organ: 'lung',
    },
  ],
  found: 2,
  start: 0,
  facets: [],
}

const page2: SearchResults = {
  hits: [
    {
      id: 'syn1234',
      name: 'Result 2',
      modified_on: 2142424,
      modified_by: '100000',
      etag: '000',
      alias: 'result 2 other name',
      path: { path: [] },
      description: '',
      node_type: EntityType.file,
      created_on: 2142424,
      created_by: 'me',
      diagnosis: 'none',
      tissue: '',
      consortium: 'tcga',
      organ: 'lung',
    },
  ],
  found: 2,
  start: 1,
  facets: [],
}

const mockSearchEntities = vi.spyOn(SynapseClient, 'searchEntities')

describe('basic functionality', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('correctly calls SynapseClient', async () => {
    mockSearchEntities.mockResolvedValueOnce(page1)

    const { result } = renderHook(() => useSearch(request), {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)
    })

    expect(mockSearchEntities).toHaveBeenCalledWith(
      request,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(result.current.data).toEqual(page1)
  })

  it('works with infinite query pagination', async () => {
    mockSearchEntities.mockResolvedValueOnce(page1).mockResolvedValueOnce(page2)

    const { result } = renderHook(() => useSearchInfinite(request), {
      wrapper: createWrapper(),
    })
    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(mockSearchEntities).toHaveBeenCalledWith(
      request,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(result.current.data?.pages[0]).toEqual(page1)
    expect(result.current.hasNextPage).toBe(true)

    act(() => {
      result.current.fetchNextPage()
    })

    await waitFor(() => {
      expect(result.current.isFetching).toBe(false)

      expect(mockSearchEntities).toHaveBeenCalledWith(
        {
          ...request,
          start: 1,
        },
        MOCK_CONTEXT_VALUE.accessToken,
      )
      expect(result.current.data?.pages[1]).toEqual(page2)
      expect(result.current.hasNextPage).toBe(false)
    })
  })
})
