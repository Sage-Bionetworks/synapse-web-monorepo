import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ListJsonSchemaVersionInfoResponse } from '@sage-bionetworks/synapse-client'
import { renderHook, waitFor } from '@testing-library/react'
import { useListJsonSchemaVersions } from './useListJsonSchemaVersions'

const postRepoV1SchemaVersionListSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.jsonSchemaServicesClient,
  'postRepoV1SchemaVersionList',
)

const page1: ListJsonSchemaVersionInfoResponse = {
  page: [
    {
      organizationName: 'org.sagebionetworks',
      schemaName: 'MySchema',
      versionId: '1',
      $id: 'org.sagebionetworks-MySchema-2.0.0',
      semanticVersion: '2.0.0',
      createdOn: 'today',
    },
  ],
  nextPageToken: 'token-for-page-2',
}

const page2: ListJsonSchemaVersionInfoResponse = {
  page: [
    {
      organizationName: 'org.sagebionetworks',
      schemaName: 'MySchema',
      versionId: '2',
      $id: 'org.sagebionetworks-MySchema-1.0.0',
      semanticVersion: '1.0.0',
      createdOn: 'yesterday',
    },
  ],
}

describe('useListJsonSchemaVersions', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('fetches every page of versions scoped to the given organization and schema, and returns them flattened', async () => {
    postRepoV1SchemaVersionListSpy
      .mockResolvedValueOnce(page1)
      .mockResolvedValueOnce(page2)

    const { result } = renderHook(
      () => useListJsonSchemaVersions('org.sagebionetworks', 'MySchema'),
      { wrapper: createWrapper() },
    )

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toEqual([...page1.page!, ...page2.page!])
    expect(postRepoV1SchemaVersionListSpy).toHaveBeenCalledTimes(2)
    expect(postRepoV1SchemaVersionListSpy).toHaveBeenNthCalledWith(
      1,
      {
        listJsonSchemaVersionInfoRequest: {
          organizationName: 'org.sagebionetworks',
          schemaName: 'MySchema',
          nextPageToken: undefined,
        },
      },
      expect.objectContaining({ signal: expect.anything() }),
    )
    expect(postRepoV1SchemaVersionListSpy).toHaveBeenNthCalledWith(
      2,
      {
        listJsonSchemaVersionInfoRequest: {
          organizationName: 'org.sagebionetworks',
          schemaName: 'MySchema',
          nextPageToken: page1.nextPageToken,
        },
      },
      expect.objectContaining({ signal: expect.anything() }),
    )
  })

  it('does not fetch when schemaName is empty', () => {
    const { result } = renderHook(
      () => useListJsonSchemaVersions('org.sagebionetworks', ''),
      { wrapper: createWrapper() },
    )

    expect(result.current.fetchStatus).toBe('idle')
    expect(postRepoV1SchemaVersionListSpy).not.toHaveBeenCalled()
  })

  it('surfaces the original error (not a wrapped one) when a page fails to load', async () => {
    postRepoV1SchemaVersionListSpy.mockRejectedValueOnce(
      new Error('Something went wrong'),
    )

    const { result } = renderHook(
      () => useListJsonSchemaVersions('org.sagebionetworks', 'MySchema'),
      { wrapper: createWrapper() },
    )

    await waitFor(() => expect(result.current.isError).toBe(true))
    expect(result.current.error?.message).toBe('Something went wrong')
  })
})
