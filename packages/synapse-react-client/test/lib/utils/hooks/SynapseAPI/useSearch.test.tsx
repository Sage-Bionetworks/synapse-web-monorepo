import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import {
  useSearch,
  useSearchInfinite,
} from '../../../../../src/lib/utils/hooks/SynapseAPI/search/useSearch'
import { EntityType } from '../../../../../src/lib/utils/synapseTypes'
import {
  SearchQuery,
  SearchResults,
} from '../../../../../src/lib/utils/synapseTypes/Search'
import { MOCK_CONTEXT_VALUE } from '../../../../../mocks/MockSynapseContext'
import { QueryClient } from 'react-query'
import { FullContextProvider } from '../../../../../src/lib/utils/FullContextProvider'

const queryClient = new QueryClient()

const wrapper = (props: { children: React.ReactChildren }) => (
  <FullContextProvider
    synapseContext={MOCK_CONTEXT_VALUE}
    queryClient={queryClient}
  >
    {props.children}
  </FullContextProvider>
)

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
      node_type: EntityType.FILE,
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
      node_type: EntityType.FILE,
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

const SynapseClient = require('../../../../../src/lib/utils/SynapseClient')
SynapseClient.searchEntities = jest.fn()

describe('basic functionality', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    queryClient.clear()
  })

  it('correctly calls SynapseClient', async () => {
    SynapseClient.searchEntities.mockResolvedValueOnce(page1)

    const { result, waitFor } = renderHook(() => useSearch(request), {
      wrapper,
    })

    await waitFor(() => {
      return result.current.isSuccess
    })

    expect(SynapseClient.searchEntities).toBeCalledWith(
      request,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(result.current.data).toEqual(page1)
  })

  it('works with infinite query pagination', async () => {
    SynapseClient.searchEntities
      .mockResolvedValueOnce(page1)
      .mockResolvedValueOnce(page2)

    const { result, waitFor } = renderHook(() => useSearchInfinite(request), {
      wrapper,
    })
    await waitFor(() => result.current.isSuccess)

    expect(SynapseClient.searchEntities).toBeCalledWith(
      request,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(result.current.data?.pages[0]).toEqual(page1)
    expect(result.current.hasNextPage).toBe(true)

    result.current.fetchNextPage()

    await waitFor(() => result.current.isFetching)
    await waitFor(() => !result.current.isFetching)

    expect(SynapseClient.searchEntities).toBeCalledWith(
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
