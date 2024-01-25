import {
  ColumnModel,
  ColumnTypeEnum,
  TableSchemaChangeRequest,
} from '@sage-bionetworks/synapse-types'
import { MOCK_ACCESS_TOKEN } from '../../mocks/MockSynapseContext'
import { SetOptional } from 'type-fest'
import { createTableUpdateTransactionRequest } from './TableColumnSchemaUtils'
import SynapseClient from '../../synapse-client'

describe('TableColumnSchemaUtils', () => {
  beforeEach(() => jest.clearAllMocks())
  describe('getTableUpdateTransactionRequest tests', () => {
    const OLD_COLUMN_MODEL_ID1 = '10001'
    const OLD_COLUMN_MODEL_ID2 = '10002'
    const NEW_COLUMN_MODEL_ID = '20001'
    test('reorder with no change', async () => {
      const tableId = 'syn93939'

      const columnModel1: ColumnModel = {
        id: OLD_COLUMN_MODEL_ID1,
        name: 'col1',
        columnType: ColumnTypeEnum.STRING,
      }
      const columnModel2: ColumnModel = {
        id: OLD_COLUMN_MODEL_ID2,
        name: 'col2',
        columnType: ColumnTypeEnum.STRING,
      }

      // test reordering, with no other changes
      const oldColumnModels: ColumnModel[] = [columnModel1, columnModel2]

      const newColumnModels: ColumnModel[] = [
        { ...columnModel2 },
        { ...columnModel1 },
      ]

      jest
        .spyOn(SynapseClient, 'createColumnModels')
        .mockResolvedValue({ list: newColumnModels })

      // Call under test
      const request = await createTableUpdateTransactionRequest(
        MOCK_ACCESS_TOKEN,
        tableId,
        oldColumnModels,
        newColumnModels,
      )
      expect(request.changes.length).toBe(1)
      const tableUpdateRequest: TableSchemaChangeRequest = request
        .changes[0] as TableSchemaChangeRequest
      expect(tableUpdateRequest.orderedColumnIds).toHaveLength(2)
      expect(tableUpdateRequest.orderedColumnIds[0]).toBe(OLD_COLUMN_MODEL_ID2)
      expect(tableUpdateRequest.orderedColumnIds[1]).toBe(OLD_COLUMN_MODEL_ID1)
      expect(tableUpdateRequest.changes).toHaveLength(0)
    })

    test('reorder with a change', async () => {
      const tableId = 'syn93939'

      const columnModel1: ColumnModel = {
        id: OLD_COLUMN_MODEL_ID1,
        name: 'col1',
        columnType: ColumnTypeEnum.STRING,
      }
      const columnModel2: ColumnModel = {
        id: OLD_COLUMN_MODEL_ID2,
        name: 'col2',
        columnType: ColumnTypeEnum.STRING,
      }

      // test reordering, with no other changes
      const oldColumnModels: ColumnModel[] = [columnModel1, columnModel2]

      const modifiedColumnModels: ColumnModel[] = [
        { ...columnModel2 },
        { ...columnModel1, name: 'col1Changed' },
      ]

      jest.spyOn(SynapseClient, 'createColumnModels').mockResolvedValue({
        list: [
          modifiedColumnModels[0],
          { ...modifiedColumnModels[1], id: NEW_COLUMN_MODEL_ID },
        ],
      })

      // Call under test
      const request = await createTableUpdateTransactionRequest(
        MOCK_ACCESS_TOKEN,
        tableId,
        oldColumnModels,
        modifiedColumnModels,
      )
      expect(request.changes.length).toBe(1)
      const tableUpdateRequest: TableSchemaChangeRequest = request
        .changes[0] as TableSchemaChangeRequest
      expect(tableUpdateRequest.orderedColumnIds).toHaveLength(2)
      expect(tableUpdateRequest.orderedColumnIds[0]).toBe(OLD_COLUMN_MODEL_ID2)
      expect(tableUpdateRequest.orderedColumnIds[1]).toBe(NEW_COLUMN_MODEL_ID)
      expect(tableUpdateRequest.changes).toHaveLength(1)
      expect(tableUpdateRequest.changes[0]).toEqual({
        oldColumnId: OLD_COLUMN_MODEL_ID1,
        newColumnId: NEW_COLUMN_MODEL_ID,
      })
    })

    test('add new column', async () => {
      const tableId = 'syn93939'
      const oldColumnModels: ColumnModel[] = []
      const proposedNewColumnModel: SetOptional<ColumnModel, 'id'> = {
        name: 'newCol',
        columnType: ColumnTypeEnum.STRING,
      }
      const changedColumnModels: SetOptional<ColumnModel, 'id'>[] = [
        proposedNewColumnModel,
      ]
      const createdColumnModels: ColumnModel[] = [
        {
          ...proposedNewColumnModel,
          id: NEW_COLUMN_MODEL_ID,
        },
      ]

      jest
        .spyOn(SynapseClient, 'createColumnModels')
        .mockResolvedValue({ list: createdColumnModels })

      const request = await createTableUpdateTransactionRequest(
        MOCK_ACCESS_TOKEN,
        tableId,
        oldColumnModels,
        changedColumnModels,
      )

      expect(request.changes.length).toBe(1)
      const tableUpdateRequest: TableSchemaChangeRequest = request
        .changes[0] as TableSchemaChangeRequest
      expect(tableUpdateRequest.orderedColumnIds).toHaveLength(1)
      expect(tableUpdateRequest.orderedColumnIds[0]).toBe(NEW_COLUMN_MODEL_ID)
      expect(tableUpdateRequest.changes).toHaveLength(1)
      expect(tableUpdateRequest.changes[0]).toMatchObject({
        oldColumnId: null,
        newColumnId: NEW_COLUMN_MODEL_ID,
      })
    })

    test('adding a new column that has an existing ID causes a thrown error', async () => {
      const tableId = 'syn93939'
      const oldSchema: ColumnModel[] = []
      const newColumnModelWithId: ColumnModel = {
        id: NEW_COLUMN_MODEL_ID,
        name: 'newCol',
        columnType: ColumnTypeEnum.STRING,
      }
      const proposedSchema: SetOptional<ColumnModel, 'id'>[] = [
        newColumnModelWithId,
      ]

      const createColumnModelsSpy = jest.spyOn(
        SynapseClient,
        'createColumnModels',
      )

      await expect(() =>
        createTableUpdateTransactionRequest(
          MOCK_ACCESS_TOKEN,
          tableId,
          oldSchema,
          proposedSchema,
        ),
      ).rejects.toThrow(
        `Proposed schema contains a new column model with ID ${NEW_COLUMN_MODEL_ID} that is not in the old schema.`,
      )

      expect(createColumnModelsSpy).not.toHaveBeenCalled()
    })

    test('full test', async () => {
      // In this test, we will change a column, delete a column, and add a column (with appropriately
      // mocked responses)
      // Modify colA, delete colB, no change to colC, and add colD
      const tableId = 'syn93939'
      const colA: ColumnModel = {
        id: '1',
        name: 'colA',
        columnType: ColumnTypeEnum.STRING,
      }
      const colB: ColumnModel = {
        id: '2',
        name: 'colB',
        columnType: ColumnTypeEnum.STRING,
      }
      const colC: ColumnModel = {
        id: '3',
        name: 'colC',
        columnType: ColumnTypeEnum.STRING,
      }
      const colD: SetOptional<ColumnModel, 'id'> = {
        id: undefined,
        name: 'colD',
        columnType: ColumnTypeEnum.STRING,
      }
      const colAModified: ColumnModel = {
        ...colA,
        columnType: ColumnTypeEnum.INTEGER,
      }
      const colAAfterSave: ColumnModel = {
        ...colAModified,
        id: '4',
      }
      const colDAfterSave: ColumnModel = {
        ...colD,
        id: '5',
      }

      const oldSchema: ColumnModel[] = [colA, colB, colC]
      const proposedNewSchema: SetOptional<ColumnModel, 'id'>[] = [
        colAModified,
        colC,
        colD,
      ]
      const newSchemaAfterUpdate: ColumnModel[] = [
        colAAfterSave,
        colC,
        colDAfterSave,
      ]

      jest
        .spyOn(SynapseClient, 'createColumnModels')
        .mockResolvedValue({ list: newSchemaAfterUpdate })

      // Call under test
      const request = await createTableUpdateTransactionRequest(
        MOCK_ACCESS_TOKEN,
        tableId,
        oldSchema,
        proposedNewSchema,
      )

      expect(request.entityId).toEqual(tableId)

      expect(request.changes).toHaveLength(1)

      // changes should consist of a create, an update, and a delete
      const tableUpdates: TableSchemaChangeRequest = request
        .changes[0] as TableSchemaChangeRequest
      expect(tableUpdates.changes).toHaveLength(3)

      // colB should be deleted
      expect(tableUpdates.changes).toContainEqual({
        oldColumnId: '2',
        newColumnId: null,
      })
      expect(tableUpdates.changes).toContainEqual({
        oldColumnId: '1',
        newColumnId: '4',
      })
      expect(tableUpdates.changes).toContainEqual({
        oldColumnId: null,
        newColumnId: '5',
      })
    })
    test('treats undefined/missing fields as equivalent', async () => {
      const tableId = 'syn93939'

      const columnModel1: ColumnModel = {
        id: OLD_COLUMN_MODEL_ID1,
        name: 'col1',
        columnType: ColumnTypeEnum.STRING,
      }

      const oldColumnModels: ColumnModel[] = [columnModel1]

      const newColumnModels: ColumnModel[] = [
        // Add `maximumSize` field, but set it to undefined
        { ...columnModel1, maximumSize: undefined },
      ]

      jest
        .spyOn(SynapseClient, 'createColumnModels')
        .mockResolvedValue({ list: newColumnModels })

      // Call under test
      const request = await createTableUpdateTransactionRequest(
        MOCK_ACCESS_TOKEN,
        tableId,
        oldColumnModels,
        newColumnModels,
      )
      expect(request.changes.length).toBe(1)
      const tableUpdateRequest: TableSchemaChangeRequest = request
        .changes[0] as TableSchemaChangeRequest
      expect(tableUpdateRequest.orderedColumnIds).toHaveLength(1)
      expect(tableUpdateRequest.orderedColumnIds[0]).toBe(OLD_COLUMN_MODEL_ID1)
      expect(tableUpdateRequest.changes).toHaveLength(0)
    })
  })
})
