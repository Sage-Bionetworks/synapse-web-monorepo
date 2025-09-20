import { describe, it, expect } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useMetadataTaskTable } from './useMetadataTaskTable'

vi.mock('@/synapse-queries/curation/task/useCurationTask', () => ({
  useGetCurationTasksByProjectInfinite: () => ({
    data: {
      pages: [
        {
          page: [
            {
              taskId: 1,
              taskProperties: {
                concreteType:
                  'org.sagebionetworks.repo.model.curation.metadata.FileBasedMetadataTaskProperties',
                fileViewId: 'syn123',
              },
            },
          ],
          nextPageToken: 'foo',
        },
        {
          page: [
            {
              taskId: 2,
              taskProperties: {
                concreteType:
                  'org.sagebionetworks.repo.model.curation.metadata.RecordBasedMetadataTaskProperties',
                fileViewId: 'syn124',
              },
            },
          ],
        },
      ],
    },
    hasNextPage: false,
    fetchNextPage: vi.fn(),
    isLoading: false,
  }),
}))
vi.mock('@/synapse-queries/index', () => ({
  useGetEntityBundle: () => ({
    data: { permissions: { canEdit: true } },
    isLoading: false,
  }),
}))

describe('useMetadataTaskTable', () => {
  it('returns table and loading states', () => {
    const { result } = renderHook(() =>
      useMetadataTaskTable({ projectId: 'syn1' }),
    )
    expect(result.current.table).toBeDefined()
    expect(result.current.isLoading).toBe(false)
    expect(result.current.hasNextPage).toBe(false)
    expect(result.current.fetchNextPage).toBeDefined()
    expect(result.current.isFetchingNextPage).toBe(false)

    expect(result.current.table.getRowModel().rows.length).toBe(2)
  })
})
