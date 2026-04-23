import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useMetadataTaskTable } from './useMetadataTaskTable'
import { ListCurationTaskRequest } from '@sage-bionetworks/synapse-client'

vi.mock('@/synapse-queries/curation/task/useCurationTask', () => ({
  useGetCurationTasksByProjectInfinite: vi.fn(),
}))

vi.mock('@/synapse-queries/index', () => ({
  useGetEntityBundle: () => ({
    data: { permissions: { canEdit: true } },
    isLoading: false,
  }),
}))

import { useGetCurationTasksInfinite } from '@/synapse-queries/curation/task/useCurationTask'

const mockUseGetCurationTasksByProjectInfinite = vi.mocked(
  useGetCurationTasksInfinite,
)

const defaultTaskPages = {
  pages: [
    {
      bundlePage: [
        {
          task: {
            taskId: 1,
            taskProperties: {
              concreteType:
                'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties',
              fileViewId: 'syn123',
            },
          },
          status: {},
        },
        {
          task: {
            taskId: 2,
            taskProperties: {
              concreteType:
                'org.sagebionetworks.repo.model.curation.metadata.RecordBasedMetadataTaskProperties',
              recordSetId: 'syn124',
            },
          },
          status: {},
        },
      ],
    },
  ],
}

beforeEach(() => {
  mockUseGetCurationTasksByProjectInfinite.mockReturnValue({
    data: defaultTaskPages,
    hasNextPage: false,
    fetchNextPage: vi.fn(),
    isFetchingNextPage: false,
    isLoading: false,
  } as any)
})

describe('useMetadataTaskTable', () => {
  it('returns table and loading states', () => {
    const { result } = renderHook(() =>
      useMetadataTaskTable({
        listCurationTaskRequest: { projectId: 'syn1' },
      }),
    )
    expect(result.current.table).toBeDefined()
    expect(result.current.isLoading).toBe(false)
    expect(result.current.hasNextPage).toBe(false)
    expect(result.current.fetchNextPage).toBeDefined()
    expect(result.current.isFetchingNextPage).toBe(false)
    expect(result.current.table.getRowModel().rows.length).toBe(2)
  })

  it('passes listCurationTaskRequest through to the query hook', () => {
    const request: ListCurationTaskRequest = {
      projectId: 'syn1',
      assignedToMe: true,
    }
    renderHook(() => useMetadataTaskTable({ listCurationTaskRequest: request }))
    expect(mockUseGetCurationTasksByProjectInfinite).toHaveBeenCalledWith(
      request,
    )
  })
})
