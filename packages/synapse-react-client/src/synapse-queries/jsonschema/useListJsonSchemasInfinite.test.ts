import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ListJsonSchemaInfoResponse } from '@sage-bionetworks/synapse-client'
import { act, renderHook, waitFor } from '@testing-library/react'
import { useListJsonSchemasInfinite } from './useListJsonSchemasInfinite'

const postRepoV1SchemaListSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.jsonSchemaServicesClient,
  'postRepoV1SchemaList',
)

const page1: ListJsonSchemaInfoResponse = {
  page: [
    {
      organizationName: 'org.sagebionetworks',
      schemaName: 'MySchema',
      schemaId: '1',
      createdOn: 'today',
    },
  ],
  nextPageToken: 'token-for-page-2',
}

const page2: ListJsonSchemaInfoResponse = {
  page: [
    {
      organizationName: 'org.sagebionetworks',
      schemaName: 'AnotherSchema',
      schemaId: '2',
      createdOn: 'today',
    },
  ],
}

describe('useListJsonSchemasInfinite', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('fetches schemas scoped to the given organization', async () => {
    postRepoV1SchemaListSpy.mockResolvedValueOnce(page1)

    const { result } = renderHook(
      () => useListJsonSchemasInfinite('org.sagebionetworks'),
      { wrapper: createWrapper() },
    )

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(postRepoV1SchemaListSpy).toHaveBeenCalledWith({
      listJsonSchemaInfoRequest: {
        organizationName: 'org.sagebionetworks',
        nextPageToken: undefined,
      },
    })
    expect(result.current.data?.pages[0]).toEqual(page1)
    expect(result.current.hasNextPage).toBe(true)
  })

  it('fetches subsequent pages using the previous page nextPageToken', async () => {
    postRepoV1SchemaListSpy
      .mockResolvedValueOnce(page1)
      .mockResolvedValueOnce(page2)

    const { result } = renderHook(
      () => useListJsonSchemasInfinite('org.sagebionetworks'),
      { wrapper: createWrapper() },
    )

    await waitFor(() => expect(result.current.hasNextPage).toBe(true))

    act(() => {
      result.current.fetchNextPage()
    })

    await waitFor(() => {
      expect(result.current.data?.pages[1]).toEqual(page2)
      expect(result.current.hasNextPage).toBe(false)
    })

    expect(postRepoV1SchemaListSpy).toHaveBeenLastCalledWith({
      listJsonSchemaInfoRequest: {
        organizationName: 'org.sagebionetworks',
        nextPageToken: page1.nextPageToken,
      },
    })
  })

  it('does not fetch when organizationName is empty', () => {
    const { result } = renderHook(() => useListJsonSchemasInfinite(''), {
      wrapper: createWrapper(),
    })

    expect(result.current.fetchStatus).toBe('idle')
    expect(postRepoV1SchemaListSpy).not.toHaveBeenCalled()
  })
})
