import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import {
  useGetProjects,
  useGetProjectsInfinite,
} from '../../../../../src/lib/utils/hooks/SynapseAPI/user/useProjects'
import {
  EntityChildrenRequest,
  EntityType,
  ProjectHeaderList,
} from '../../../../../src/lib/utils/synapseTypes'
import { MOCK_CONTEXT_VALUE } from '../../../../../mocks/MockSynapseContext'
import { QueryClient } from 'react-query'
import { SynapseContextProvider } from '../../../../../src/lib/utils/SynapseContext'
import FullContextProvider from '../../../../../src/lib/utils/FullContextProvider'

const queryClient = new QueryClient()

const wrapper = (props: { children: React.ReactChildren }) => (
  <FullContextProvider
    synapseContext={MOCK_CONTEXT_VALUE}
    queryClient={queryClient}
  >
    {props.children}
  </FullContextProvider>
)

const request: EntityChildrenRequest = {
  parentId: 'syn123',
  includeTypes: [EntityType.FILE],
}

const page1: ProjectHeaderList = {
  results: [
    {
      id: 'syn123',
      name: 'Project 1',
      modifiedOn: 'earlier',
      lastActivity: 'last activity',
      modifiedBy: 100000,
    },
  ],
  nextPageToken: 'token',
}

const page2: ProjectHeaderList = {
  results: [
    {
      id: 'syn321',
      name: 'Project 2',
      modifiedOn: 'earlier',
      lastActivity: 'last activity',
      modifiedBy: 100000,
    },
  ],
  nextPageToken: null,
}

const SynapseClient = require('../../../../../src/lib/utils/SynapseClient')
SynapseClient.getMyProjects = jest.fn()

describe('basic functionality', () => {
  beforeEach(() => {
    queryClient.clear()
  })
  it('correctly calls SynapseClient', async () => {
    SynapseClient.getMyProjects.mockResolvedValueOnce(page1)

    const { result, waitFor } = renderHook(() => useGetProjects(request), {
      wrapper,
    })

    await waitFor(() => result.current.isSuccess)

    expect(SynapseClient.getMyProjects).toBeCalledWith(
      MOCK_CONTEXT_VALUE.accessToken,
      request,
    )
    expect(result.current.data).toEqual(page1)
  })

  it('works with infinite query pagination', async () => {
    SynapseClient.getMyProjects
      .mockResolvedValueOnce(page1)
      .mockResolvedValueOnce(page2)

    const { result, waitFor } = renderHook(
      () => useGetProjectsInfinite(request),
      { wrapper },
    )

    await waitFor(() => result.current.isSuccess)

    expect(SynapseClient.getMyProjects).toBeCalledWith(
      MOCK_CONTEXT_VALUE.accessToken,
      request,
    )
    expect(result.current.data?.pages[0]).toEqual(page1)
    expect(result.current.hasNextPage).toBe(true)

    result.current.fetchNextPage()

    await waitFor(() => result.current.isFetching)
    await waitFor(() => !result.current.isFetching)

    expect(SynapseClient.getMyProjects).toBeCalledWith(
      MOCK_CONTEXT_VALUE.accessToken,
      {
        ...request,
        nextPageToken: page1.nextPageToken,
      },
    )
    expect(result.current.data?.pages[1]).toEqual(page2)
    expect(result.current.hasNextPage).toBe(false)
  })
})
