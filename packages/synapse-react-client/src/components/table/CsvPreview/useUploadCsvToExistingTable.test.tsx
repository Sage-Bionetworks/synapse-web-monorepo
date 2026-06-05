import { useTableUpdateTransaction } from '@/synapse-queries/table/useTableUpdateTransaction'
import { getUseMutationMock } from '@/testutils/ReactQueryMockUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseClientError } from '@/utils/index'
import {
  CsvTableDescriptor,
  TableUpdateTransactionRequest,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'
import { act, renderHook } from '@testing-library/react'
import useUploadCsvToExistingTable from './useUploadCsvToExistingTable'

vi.mock('@/synapse-queries/table/useTableUpdateTransaction', () => ({
  useTableUpdateTransaction: vi.fn(),
}))

describe('useUploadCsvToExistingTable', () => {
  const csvTableDescriptor: CsvTableDescriptor = {
    separator: ',',
    quoteCharacter: '"',
    escapeCharacter: '\\',
    lineEnd: '\n',
    isFirstLineHeader: true,
  }
  const fileHandleId = 'someFileHandleId'

  const {
    mock: mockUseTableUpdateTransaction,
    mockMutateAsync: mockTableUpdateTransaction,
  } = getUseMutationMock<
    TableUpdateTransactionResponse,
    SynapseClientError,
    TableUpdateTransactionRequest
  >()

  beforeEach(() => {
    vi.mocked(useTableUpdateTransaction).mockImplementation(
      mockUseTableUpdateTransaction,
    )
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('calls tableTransaction with the provided tableId', async () => {
    const tableId = 'syn123'
    mockTableUpdateTransaction.mockResolvedValue(
      {} as TableUpdateTransactionResponse,
    )

    const { result } = renderHook(() => useUploadCsvToExistingTable(), {
      wrapper: createWrapper(),
    })

    await act(async () => {
      await result.current.mutateAsync({
        tableId,
        csvTableDescriptor,
        fileHandleId,
      })
    })

    expect(mockTableUpdateTransaction).toHaveBeenCalledWith({
      concreteType:
        'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
      entityId: tableId,
      changes: [
        {
          tableId,
          uploadFileHandleId: fileHandleId,
          csvTableDescriptor,
          concreteType:
            'org.sagebionetworks.repo.model.table.UploadToTableRequest',
        },
      ],
    })
  })
})
