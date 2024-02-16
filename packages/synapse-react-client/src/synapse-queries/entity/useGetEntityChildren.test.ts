import { act, renderHook, waitFor } from '@testing-library/react'
import {
  useGetEntityChildren,
  useGetEntityChildrenInfinite,
} from './useGetEntityChildren'
import {
  EntityChildrenRequest,
  EntityChildrenResponse,
  EntityType,
} from '@sage-bionetworks/synapse-types'
import { MOCK_CONTEXT_VALUE } from '../../mocks/MockSynapseContext'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import SynapseClient from '../../synapse-client'

const request: EntityChildrenRequest = {
  parentId: 'syn123',
  includeTypes: [EntityType.FILE],
  includeTotalChildCount: true,
}

const page1: EntityChildrenResponse = {
  page: [
    {
      id: 'syn123',
      name: 'Child 1',
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
  totalChildCount: 2,
  nextPageToken: 'token',
}

const page2: EntityChildrenResponse = {
  page: [
    {
      id: 'syn124',
      name: 'Child 2',
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
  nextPageToken: undefined,
}

const mockGetEntityChildren = jest.spyOn(SynapseClient, 'getEntityChildren')

describe('basic functionality', () => {
  it('correctly calls SynapseClient', async () => {
    mockGetEntityChildren.mockResolvedValueOnce(page1)

    const { result } = renderHook(() => useGetEntityChildren(request), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(SynapseClient.getEntityChildren).toHaveBeenCalledWith(
      request,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(result.current.data).toEqual(page1)
  })

  it('works with infinite query pagination', async () => {
    mockGetEntityChildren
      .mockResolvedValueOnce(page1)
      .mockResolvedValueOnce(page2)
    const controller = new AbortController()

    const { result } = renderHook(() => useGetEntityChildrenInfinite(request), {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true)

      expect(mockGetEntityChildren).toHaveBeenCalledWith(
        request,
        MOCK_CONTEXT_VALUE.accessToken,
        expect.anything(),
      )
      expect(result.current.data?.pages[0]).toEqual(page1)
      expect(result.current.hasNextPage).toBe(true)
    })

    act(() => {
      result.current.fetchNextPage()
    })

    await waitFor(() => {
      expect(result.current.isFetching).toBe(false)

      expect(mockGetEntityChildren).toHaveBeenCalledWith(
        {
          ...request,
          includeTotalChildCount: false,
          nextPageToken: page1.nextPageToken,
        },
        MOCK_CONTEXT_VALUE.accessToken,
        controller.signal,
      )
      expect(result.current.data?.pages[1]).toEqual(page2)
      expect(result.current.hasNextPage).toBe(false)
    })
  })
})
