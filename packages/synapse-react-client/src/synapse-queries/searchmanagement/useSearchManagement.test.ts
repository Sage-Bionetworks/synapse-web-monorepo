import {
  MOCK_SEARCH_MANAGEMENT_PAGE_SIZE,
  searchConfigBindingService,
  searchManagementServices,
} from '@/mocks/msw/handlers/searchManagementHandlers'
import '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { act, renderHook, waitFor } from '@testing-library/react'
import { SearchManagementResourceType } from './SearchManagementResourceType'
import {
  useBindSearchConfiguration,
  useCreateSearchManagementResource,
  useDeleteSearchConfigBinding,
  useGetSearchConfigBinding,
  useGetSearchManagementResource,
  useListAllSearchManagementResources,
  useUpdateSearchManagementResource,
} from './useSearchManagement'

const CONTEXT = { accessToken: 'fake-token' }

function seedSynonymSets(count: number, organizationName: string) {
  for (let i = 0; i < count; i++) {
    searchManagementServices.SYNONYM_SET.create({
      organizationName,
      name: `set_${organizationName.replaceAll('.', '_')}_${i}`,
      definition: { type: 'synonym_graph', synonyms: [`a${i}, b${i}`] },
    })
  }
}

describe('useSearchManagement', () => {
  beforeEach(() => {
    Object.values(searchManagementServices).forEach(service => service.clear())
    searchConfigBindingService.clear()
  })

  it('lists every page of resources, optionally filtered by organization', async () => {
    seedSynonymSets(MOCK_SEARCH_MANAGEMENT_PAGE_SIZE + 2, 'org.a')
    seedSynonymSets(3, 'org.b')

    const { result: all } = renderHook(
      () =>
        useListAllSearchManagementResources(
          SearchManagementResourceType.SYNONYM_SET,
        ),
      { wrapper: createWrapper(CONTEXT) },
    )
    const { result: orgA } = renderHook(
      () =>
        useListAllSearchManagementResources(
          SearchManagementResourceType.SYNONYM_SET,
          { organizationName: 'org.a' },
        ),
      { wrapper: createWrapper(CONTEXT) },
    )

    await waitFor(() => expect(all.current.isSuccess).toBe(true))
    await waitFor(() => expect(orgA.current.isSuccess).toBe(true))
    expect(all.current.data).toHaveLength(MOCK_SEARCH_MANAGEMENT_PAGE_SIZE + 5)
    expect(orgA.current.data).toHaveLength(MOCK_SEARCH_MANAGEMENT_PAGE_SIZE + 2)
    expect(
      orgA.current.data!.every(set => set.organizationName === 'org.a'),
    ).toBe(true)
  })

  it('refreshes lists of the created resource type after a create', async () => {
    const { result } = renderHook(
      () => ({
        list: useListAllSearchManagementResources(
          SearchManagementResourceType.TEXT_ANALYZER,
        ),
        create: useCreateSearchManagementResource(
          SearchManagementResourceType.TEXT_ANALYZER,
        ),
      }),
      { wrapper: createWrapper(CONTEXT) },
    )
    await waitFor(() => expect(result.current.list.data).toEqual([]))

    act(() => {
      result.current.create.mutate({
        organizationName: 'org.a',
        name: 'my_analyzer',
        settings: {
          analyzer: { default: { type: 'custom', tokenizer: 'standard' } },
        },
      })
    })

    await waitFor(() =>
      expect(result.current.list.data?.map(a => a.name)).toEqual([
        'my_analyzer',
      ]),
    )
  })

  it('updates a text analyzer by its numeric ID and caches the result', async () => {
    const created = searchManagementServices.TEXT_ANALYZER.create({
      organizationName: 'org.a',
      name: 'my_analyzer',
      description: 'before',
      settings: {},
    })

    const { result } = renderHook(
      () => ({
        get: useGetSearchManagementResource(
          SearchManagementResourceType.TEXT_ANALYZER,
          created.id!,
        ),
        update: useUpdateSearchManagementResource(
          SearchManagementResourceType.TEXT_ANALYZER,
        ),
      }),
      { wrapper: createWrapper(CONTEXT) },
    )
    await waitFor(() =>
      expect(result.current.get.data?.description).toBe('before'),
    )

    act(() => {
      result.current.update.mutate({
        ...result.current.get.data!,
        description: 'after',
      })
    })

    await waitFor(() => expect(result.current.update.isSuccess).toBe(true))
    expect(result.current.get.data?.description).toBe('after')
    expect(
      searchManagementServices.TEXT_ANALYZER.getOneById(created.id!)
        ?.description,
    ).toBe('after')
  })

  it('reports no binding, then the bound configuration, then no binding after removal', async () => {
    const entityId = 'syn123'
    const { result } = renderHook(
      () => ({
        binding: useGetSearchConfigBinding(entityId),
        bind: useBindSearchConfiguration(),
        unbind: useDeleteSearchConfigBinding(),
      }),
      { wrapper: createWrapper(CONTEXT) },
    )
    await waitFor(() => expect(result.current.binding.isSuccess).toBe(true))
    expect(result.current.binding.data).toBeNull()

    act(() => {
      result.current.bind.mutate({ entityId, searchConfigurationId: '42' })
    })
    await waitFor(() =>
      expect(result.current.binding.data?.searchConfigurationId).toBe('42'),
    )

    act(() => {
      result.current.unbind.mutate(entityId)
    })
    await waitFor(() => expect(result.current.binding.data).toBeNull())
    expect(searchConfigBindingService.getAll()).toEqual([])
  })
})
