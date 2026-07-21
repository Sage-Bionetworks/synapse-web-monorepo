import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ListOrganizationsResponse } from '@sage-bionetworks/synapse-client'
import { act, renderHook, waitFor } from '@testing-library/react'
import {
  LOADING_ORGANIZATIONS_OPTION,
  useJsonSchemaOrganizations,
} from './useJsonSchemaOrganizations'

const postRepoV1SchemaOrganizationListSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.jsonSchemaServicesClient,
  'postRepoV1SchemaOrganizationList',
)

const SAGEBIONETWORKS_ORG = { id: '1', name: 'org.sagebionetworks' }
const EXAMPLE_ORG = { id: '2', name: 'org.example' }

function renderOrganizationsHook(defaultOrganizationName?: string) {
  return renderHook(() => useJsonSchemaOrganizations(defaultOrganizationName), {
    wrapper: createWrapper(),
  })
}

describe('useJsonSchemaOrganizations', () => {
  beforeEach(() => vi.clearAllMocks())

  it('exposes every organization as an option once loaded', async () => {
    postRepoV1SchemaOrganizationListSpy.mockResolvedValueOnce({
      page: [SAGEBIONETWORKS_ORG, EXAMPLE_ORG],
    })

    const { result } = renderOrganizationsHook()

    await waitFor(() =>
      expect(result.current.isLoadingAllOrganizations).toBe(false),
    )
    expect(result.current.organizationOptions).toEqual([
      SAGEBIONETWORKS_ORG,
      EXAMPLE_ORG,
    ])
  })

  it('shows a loading placeholder option while fetching, and hides it once loaded', async () => {
    let resolveFetch:
      | ((response: ListOrganizationsResponse) => void)
      | undefined
    postRepoV1SchemaOrganizationListSpy.mockReturnValueOnce(
      new Promise(resolve => {
        resolveFetch = resolve
      }),
    )

    const { result } = renderOrganizationsHook()

    expect(result.current.isLoadingAllOrganizations).toBe(true)
    expect(result.current.organizationOptions).toEqual([
      LOADING_ORGANIZATIONS_OPTION,
    ])

    resolveFetch?.({ page: [SAGEBIONETWORKS_ORG] })

    await waitFor(() =>
      expect(result.current.isLoadingAllOrganizations).toBe(false),
    )
    expect(result.current.organizationOptions).toEqual([SAGEBIONETWORKS_ORG])
  })

  it('applies defaultOrganizationName exactly once, and does not reapply it after the list changes again', async () => {
    postRepoV1SchemaOrganizationListSpy.mockResolvedValueOnce({
      page: [SAGEBIONETWORKS_ORG, EXAMPLE_ORG],
    })

    const { result } = renderOrganizationsHook(EXAMPLE_ORG.name)

    await waitFor(() =>
      expect(result.current.selectedOrganization?.name).toBe(EXAMPLE_ORG.name),
    )

    // If the user (or another effect) clears the selection, a later re-render must not silently
    // re-apply the default again.
    act(() => {
      result.current.setSelectedOrganization(null)
    })
    expect(result.current.selectedOrganization).toBeNull()
  })

  it('surfaces isError when organizations fail to load', async () => {
    postRepoV1SchemaOrganizationListSpy.mockRejectedValueOnce(
      new Error('Something went wrong'),
    )

    const { result } = renderOrganizationsHook()

    await waitFor(() => expect(result.current.isError).toBe(true))
    expect(result.current.isLoadingAllOrganizations).toBe(false)
  })
})
