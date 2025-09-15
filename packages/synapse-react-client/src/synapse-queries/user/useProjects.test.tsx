import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  EntityChildrenRequest,
  ProjectHeaderList,
} from '@sage-bionetworks/synapse-types'
import { act, renderHook, waitFor } from '@testing-library/react'
import { useGetProjects, useGetProjectsInfinite } from './useProjects'

const request: EntityChildrenRequest = {
  parentId: 'syn123',
  includeTypes: [EntityType.file],
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

const mockGetMyProjects = vi.spyOn(SynapseClient, 'getMyProjects')

describe('basic functionality', () => {
  it('correctly calls SynapseClient', async () => {
    mockGetMyProjects.mockResolvedValueOnce(page1)

    const { result } = renderHook(() => useGetProjects(request), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(mockGetMyProjects).toHaveBeenCalledWith(
      MOCK_CONTEXT_VALUE.accessToken,
      request,
    )
    expect(result.current.data).toEqual(page1)
  })

  it('works with infinite query pagination', async () => {
    mockGetMyProjects.mockResolvedValueOnce(page1).mockResolvedValueOnce(page2)

    const { result } = renderHook(() => useGetProjectsInfinite(request), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(mockGetMyProjects).toHaveBeenCalledWith(
      MOCK_CONTEXT_VALUE.accessToken,
      request,
    )
    expect(result.current.data?.pages[0]).toEqual(page1)
    expect(result.current.hasNextPage).toBe(true)

    act(() => {
      result.current.fetchNextPage()
    })

    await waitFor(() => {
      expect(result.current.isFetching).toBe(false)

      expect(mockGetMyProjects).toHaveBeenCalledWith(
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
})
