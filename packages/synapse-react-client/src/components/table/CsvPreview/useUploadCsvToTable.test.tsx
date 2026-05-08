import { useCreateEntity } from '@/synapse-queries'
import { useCreateColumnModels } from '@/synapse-queries/table/useColumnModel'
import { useTableUpdateTransaction } from '@/synapse-queries/table/useTableUpdateTransaction'
import { getUseMutationMock } from '@/testutils/ReactQueryMockUtils'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseClientError } from '@/utils/index'
import {
  CsvTableDescriptor,
  TableUpdateTransactionRequest,
  TableUpdateTransactionResponse,
} from '@sage-bionetworks/synapse-client'
import {
  Entity,
  ColumnModel as SynapseTypesColumnModel,
} from '@sage-bionetworks/synapse-types'
import { act, renderHook } from '@testing-library/react'
import { SetOptional } from 'type-fest'
import useUploadCsvToTable from './useUploadCsvToTable'

vi.mock('@/synapse-queries/table/useColumnModel', () => ({
  useCreateColumnModels: vi.fn(),
}))

vi.mock('../../../synapse-queries/entity/useEntity', () => ({
  useCreateEntity: vi.fn(),
}))

vi.mock('@/synapse-queries/table/useTableUpdateTransaction', () => ({
  useTableUpdateTransaction: vi.fn(),
}))

describe('useUploadCsvToTable', () => {
  const csvTableDescriptor: CsvTableDescriptor = {
    separator: ',',
    quoteCharacter: '"',
    escapeCharacter: '\\',
    lineEnd: '\n',
    isFirstLineHeader: true,
  }
  const fileHandleId = 'someFileHandleId'

  const {
    mock: mockUseCreateColumnModels,
    mockMutateAsync: mockCreateColumnModels,
  } = getUseMutationMock<
    SynapseTypesColumnModel[],
    SynapseClientError,
    SetOptional<SynapseTypesColumnModel, 'id'>[]
  >()
  const { mock: mockUseCreateEntity, mockMutateAsync: mockCreateEntity } =
    getUseMutationMock<Entity, SynapseClientError, Entity>()
  const {
    mock: mockUseTableUpdateTransaction,
    mockMutateAsync: mockTableUpdateTransaction,
  } = getUseMutationMock<
    TableUpdateTransactionResponse,
    SynapseClientError,
    TableUpdateTransactionRequest
  >()

  beforeEach(() => {
    vi.mocked(useCreateColumnModels).mockImplementation(
      mockUseCreateColumnModels,
    )
    vi.mocked(useCreateEntity).mockImplementation(mockUseCreateEntity)
    vi.mocked(useTableUpdateTransaction).mockImplementation(
      mockUseTableUpdateTransaction,
    )
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('append flow: only calls tableTransaction when tableId is provided', async () => {
    const tableId = 'syn123'
    mockTableUpdateTransaction.mockResolvedValue(
      {} as TableUpdateTransactionResponse,
    )

    const { result } = renderHook(() => useUploadCsvToTable(), {
      wrapper: createWrapper(),
    })

    await act(async () => {
      await result.current.mutateAsync({
        tableId,
        csvTableDescriptor,
        fileHandleId,
      })
    })

    expect(mockCreateColumnModels).not.toHaveBeenCalled()
    expect(mockCreateEntity).not.toHaveBeenCalled()
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

  it('create flow: creates column models, entity, then runs the table transaction', async () => {
    const parentId = 'syn456'
    const tableName = 'My Table'
    const columnModels = [{ name: 'colA' }] as SetOptional<
      SynapseTypesColumnModel,
      'id'
    >[]
    const createdColumns = [
      { id: 'col-1', name: 'colA' },
    ] as SynapseTypesColumnModel[]
    const newEntityId = 'syn789'

    mockCreateColumnModels.mockResolvedValue(createdColumns)
    mockCreateEntity.mockResolvedValue({ id: newEntityId } as Entity)
    mockTableUpdateTransaction.mockResolvedValue(
      {} as TableUpdateTransactionResponse,
    )

    const { result } = renderHook(() => useUploadCsvToTable(), {
      wrapper: createWrapper(),
    })

    await act(async () => {
      await result.current.mutateAsync({
        csvTableDescriptor,
        fileHandleId,
        createTableProps: { parentId, tableName, columnModels },
      })
    })

    expect(mockCreateColumnModels).toHaveBeenCalledWith(columnModels)
    expect(mockCreateEntity).toHaveBeenCalledWith({
      name: tableName,
      parentId,
      concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
      columnIds: ['col-1'],
    })
    expect(mockTableUpdateTransaction).toHaveBeenCalledWith({
      concreteType:
        'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
      entityId: newEntityId,
      changes: [
        {
          tableId: newEntityId,
          uploadFileHandleId: fileHandleId,
          csvTableDescriptor,
          concreteType:
            'org.sagebionetworks.repo.model.table.UploadToTableRequest',
        },
      ],
    })
  })

  it('propagates errors from inner mutations', async () => {
    mockCreateColumnModels.mockRejectedValue(
      new SynapseClientError(400, 'boom', expect.getState().currentTestName!),
    )

    const { result } = renderHook(() => useUploadCsvToTable(), {
      wrapper: createWrapper(),
    })

    await act(async () => {
      await expect(
        result.current.mutateAsync({
          csvTableDescriptor,
          fileHandleId,
          createTableProps: {
            parentId: 'syn456',
            tableName: 'My Table',
            columnModels: [],
          },
        }),
      ).rejects.toThrow('boom')
    })

    expect(mockCreateEntity).not.toHaveBeenCalled()
    expect(mockTableUpdateTransaction).not.toHaveBeenCalled()
  })
})
