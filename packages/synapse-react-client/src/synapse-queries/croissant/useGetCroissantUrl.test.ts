import SynapseClient from '@/synapse-client/index'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { QueryResultBundle } from '@sage-bionetworks/synapse-types'
import { renderHook, waitFor } from '@testing-library/react'
import { useGetCroissantUrl } from './useGetCroissantUrl'
import { vi, describe, it } from 'vitest'

const mockCroissantTableData: QueryResultBundle = {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
  queryResult: {
    concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
    queryResults: {
      tableId: 'syn65903895',
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
      etag: '',
      rows: [{ values: ['syn123', '4', 'some_url'] }],
      headers: [
        { name: 'dataset', columnType: 'STRING' },
        { name: 'dataset_version', columnType: 'INTEGER' },
        { name: 'croissant_file_s3_object', columnType: 'STRING' },
      ],
    },
  },
}

vi.spyOn(SynapseClient, 'getFullQueryTableResults').mockResolvedValue(
  mockCroissantTableData,
)

describe('useGetCroissantUrl', () => {
  it('should return correct URL', async () => {
    const datasetId = 'syn123'
    const datasetVersionNumber = 4
    const hook = renderHook(
      () => useGetCroissantUrl(datasetId, datasetVersionNumber),
      { wrapper: createWrapper() },
    )

    await waitFor(() =>
      expect(hook.result.current).toEqual(
        expect.objectContaining({
          data: 'some_url',
          isLoading: false,
          isSuccess: true,
          isError: false,
        }),
      ),
    )
  })

  it('should return null if no URL found', async () => {
    const datasetId = 'syn123'
    const datasetVersionNumber = 5
    const hook = renderHook(
      () => useGetCroissantUrl(datasetId, datasetVersionNumber),
      { wrapper: createWrapper() },
    )
    await waitFor(() =>
      expect(hook.result.current).toEqual(
        expect.objectContaining({
          data: null,
          isLoading: false,
          isSuccess: true,
          isError: false,
        }),
      ),
    )
  })
})
