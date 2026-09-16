import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import {
  createWrapper,
  createWrapperAndQueryClient,
} from '@/testutils/TestingLibraryUtils'
import {
  FormTemplate,
  FormTemplateSearchResponse,
} from '@sage-bionetworks/synapse-client'
import { renderHook, waitFor } from '@testing-library/react'
import {
  useCreateFormTemplate,
  useGetFormTemplate,
  useGetFormTemplateVersion,
  useSearchFormTemplatesInfinite,
  useUpdateFormTemplate,
} from './useFormTemplate'

const getByIdSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.accessRequirementServicesClient,
  'getRepoV1AccessRequirementFormTemplateTemplateId',
)
const getByVersionSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.accessRequirementServicesClient,
  'getRepoV1AccessRequirementFormTemplateTemplateIdVersionVersionNumber',
)
const searchSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.accessRequirementServicesClient,
  'postRepoV1AccessRequirementFormTemplateSearch',
)
const createSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.accessRequirementServicesClient,
  'postRepoV1AccessRequirementFormTemplate',
)
const addVersionSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.accessRequirementServicesClient,
  'postRepoV1AccessRequirementFormTemplateTemplateId',
)

const mockTemplate: FormTemplate = {
  id: 'template-1',
  name: 'Test Template',
  etag: 'etag-1',
  versionNumber: 1,
  schema$id: 'org.example-1.0.0',
  steps: [
    {
      title: 'Step 1',
      fields: [{ schemaPath: '/institution', uiDefinition: {} }],
    },
  ],
  deprecated: false,
}

describe('useGetFormTemplate', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('fetches the latest version of a template by id', async () => {
    getByIdSpy.mockResolvedValueOnce(mockTemplate)

    const { result } = renderHook(() => useGetFormTemplate('template-1'), {
      wrapper: createWrapper(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(getByIdSpy).toHaveBeenCalledWith({ templateId: 'template-1' })
    expect(result.current.data).toEqual(mockTemplate)
  })

  it('does not fetch when templateId is undefined', () => {
    const { result } = renderHook(() => useGetFormTemplate(undefined), {
      wrapper: createWrapper(),
    })

    expect(result.current.fetchStatus).toBe('idle')
    expect(getByIdSpy).not.toHaveBeenCalled()
  })
})

describe('useGetFormTemplateVersion', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('fetches a specific version of a template', async () => {
    getByVersionSpy.mockResolvedValueOnce(mockTemplate)

    const { result } = renderHook(
      () => useGetFormTemplateVersion('template-1', 1),
      { wrapper: createWrapper() },
    )

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(getByVersionSpy).toHaveBeenCalledWith({
      templateId: 'template-1',
      versionNumber: 1,
    })
    expect(result.current.data).toEqual(mockTemplate)
  })

  it('does not fetch when versionNumber is undefined', () => {
    const { result } = renderHook(
      () => useGetFormTemplateVersion('template-1', undefined),
      { wrapper: createWrapper() },
    )

    expect(result.current.fetchStatus).toBe('idle')
    expect(getByVersionSpy).not.toHaveBeenCalled()
  })
})

describe('useSearchFormTemplatesInfinite', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('searches templates by name', async () => {
    const response: FormTemplateSearchResponse = {
      results: [mockTemplate],
      nextPageToken: undefined,
    }
    searchSpy.mockResolvedValueOnce(response)

    const { result } = renderHook(
      () => useSearchFormTemplatesInfinite({ name: 'Test' }),
      { wrapper: createWrapper() },
    )

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(searchSpy).toHaveBeenCalledWith({
      formTemplateSearchRequest: { name: 'Test', nextPageToken: undefined },
    })
    expect(result.current.data?.pages[0]).toEqual(response)
  })
})

describe('useCreateFormTemplate', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('seeds the get-by-id cache and invalidates search queries on success', async () => {
    const created: FormTemplate = { ...mockTemplate, id: 'new-id' }
    createSpy.mockResolvedValueOnce(created)
    searchSpy.mockResolvedValue({ results: [], nextPageToken: undefined })

    const { wrapperFn, queryClient } = createWrapperAndQueryClient()

    const { result: searchResult } = renderHook(
      () => useSearchFormTemplatesInfinite(),
      { wrapper: wrapperFn },
    )
    await waitFor(() => expect(searchResult.current.isSuccess).toBe(true))
    expect(searchSpy).toHaveBeenCalledTimes(1)

    const { result: createResult } = renderHook(() => useCreateFormTemplate(), {
      wrapper: wrapperFn,
    })

    createResult.current.mutate({
      name: 'New Template',
      schema$id: 'org.example-1.0.0',
      steps: [],
    })

    await waitFor(() => expect(createResult.current.isSuccess).toBe(true))

    expect(
      queryClient.getQueryData(
        MOCK_CONTEXT_VALUE.keyFactory.getFormTemplateByIdQueryKey('new-id'),
      ),
    ).toEqual(created)

    // Creating a template should invalidate (and thus refetch) any active searches.
    await waitFor(() => expect(searchSpy).toHaveBeenCalledTimes(2))
  })
})

describe('useUpdateFormTemplate', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('sends the etag of the version being replaced and updates the get-by-id cache', async () => {
    const updated: FormTemplate = {
      ...mockTemplate,
      etag: 'etag-2',
      versionNumber: 2,
    }
    addVersionSpy.mockResolvedValueOnce(updated)

    const { wrapperFn, queryClient } = createWrapperAndQueryClient()
    const { result } = renderHook(() => useUpdateFormTemplate(), {
      wrapper: wrapperFn,
    })

    result.current.mutate({
      templateId: 'template-1',
      formTemplate: mockTemplate,
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(addVersionSpy).toHaveBeenCalledWith({
      templateId: 'template-1',
      formTemplate: mockTemplate,
    })
    expect(
      queryClient.getQueryData(
        MOCK_CONTEXT_VALUE.keyFactory.getFormTemplateByIdQueryKey('template-1'),
      ),
    ).toEqual(updated)
  })
})
