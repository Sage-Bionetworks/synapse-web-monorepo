import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ListOrganizationsResponse } from '@sage-bionetworks/synapse-client'
import { renderHook, waitFor } from '@testing-library/react'
import { useListOrganizations } from './useListOrganizations'

const postRepoV1SchemaOrganizationListSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.jsonSchemaServicesClient,
  'postRepoV1SchemaOrganizationList',
)

const page1: ListOrganizationsResponse = {
  page: [{ id: '1', name: 'org.sagebionetworks', createdOn: 'today' }],
  nextPageToken: 'token-for-page-2',
}

const page2: ListOrganizationsResponse = {
  page: [{ id: '2', name: 'org.example', createdOn: 'today' }],
}

describe('useListOrganizations', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('fetches every page of organizations, and returns them flattened', async () => {
    postRepoV1SchemaOrganizationListSpy
      .mockResolvedValueOnce(page1)
      .mockResolvedValueOnce(page2)

    const { result } = renderHook(() => useListOrganizations(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toEqual([...page1.page!, ...page2.page!])
    expect(postRepoV1SchemaOrganizationListSpy).toHaveBeenCalledTimes(2)
    expect(postRepoV1SchemaOrganizationListSpy).toHaveBeenNthCalledWith(
      1,
      { listOrganizationsRequest: { nextPageToken: undefined } },
      expect.objectContaining({ signal: expect.anything() }),
    )
    expect(postRepoV1SchemaOrganizationListSpy).toHaveBeenNthCalledWith(
      2,
      { listOrganizationsRequest: { nextPageToken: page1.nextPageToken } },
      expect.objectContaining({ signal: expect.anything() }),
    )
  })

  it('surfaces the original error (not a wrapped one) when a page fails to load', async () => {
    postRepoV1SchemaOrganizationListSpy.mockRejectedValueOnce(
      new Error('Something went wrong'),
    )

    const { result } = renderHook(() => useListOrganizations(), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isError).toBe(true))
    expect(result.current.error?.message).toBe('Something went wrong')
  })
})
