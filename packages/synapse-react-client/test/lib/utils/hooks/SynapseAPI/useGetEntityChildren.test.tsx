import { renderHook } from '@testing-library/react-hooks'
import React from 'react'
import {
  useGetEntityChildren,
  useGetEntityChildrenInfinite,
} from '../../../../../src/lib/utils/hooks/SynapseAPI/entity/useGetEntityChildren'
import {
  EntityChildrenRequest,
  EntityChildrenResponse,
  EntityType,
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
    },
  ],
  nextPageToken: null,
}

const SynapseClient = require('../../../../../src/lib/utils/SynapseClient')
SynapseClient.getEntityChildren = jest.fn()

describe('basic functionality', () => {
  beforeEach(() => {
    queryClient.clear()
  })
  it('correctly calls SynapseClient', async () => {
    SynapseClient.getEntityChildren.mockResolvedValueOnce(page1)

    const { result, waitFor } = renderHook(
      () => useGetEntityChildren(request),
      { wrapper },
    )

    await waitFor(() => result.current.isSuccess)

    expect(SynapseClient.getEntityChildren).toBeCalledWith(
      request,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(result.current.data).toEqual(page1)
  })

  it('works with infinite query pagination', async () => {
    SynapseClient.getEntityChildren
      .mockResolvedValueOnce(page1)
      .mockResolvedValueOnce(page2)
    const controller = new AbortController()

    const { result, waitFor } = renderHook(
      () => useGetEntityChildrenInfinite(request),
      { wrapper },
    )

    await waitFor(() => result.current.isSuccess)

    expect(SynapseClient.getEntityChildren).toBeCalledWith(
      request,
      MOCK_CONTEXT_VALUE.accessToken,
    )
    expect(result.current.data?.pages[0]).toEqual(page1)
    expect(result.current.hasNextPage).toBe(true)

    result.current.fetchNextPage()

    await waitFor(() => result.current.isFetching)
    await waitFor(() => !result.current.isFetching)

    expect(SynapseClient.getEntityChildren).toBeCalledWith(
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
