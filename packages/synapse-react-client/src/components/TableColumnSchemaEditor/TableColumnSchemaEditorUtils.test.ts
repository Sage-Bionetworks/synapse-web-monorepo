import {
  ColumnModel,
  ColumnType,
  ColumnTypeEnum,
  TableSchemaChangeRequest,
} from '@sage-bionetworks/synapse-types'
import {
  canHaveDefault,
  canHaveMaxListLength,
  canHaveRestrictedValues,
  canHaveSize,
  configureFacetsForType,
  createTableUpdateTransactionRequest,
  getAllowedColumnTypes,
  getMaxSizeForType,
} from './TableColumnSchemaEditorUtils'
import * as SynapseClient from '../../synapse-client/SynapseClient'
import { MOCK_ACCESS_TOKEN } from '../../mocks/MockSynapseContext'
import { SetOptional } from 'type-fest'

describe('TableColumnSchemaEditorUtils', () => {
  describe('getAllowedColumnTypes', () => {
    it('allowed column types for a non-view, regular column model', () => {
      const expected = [
        'STRING',
        'DOUBLE',
        'BOOLEAN',
        'INTEGER',
        'DATE',
        'FILEHANDLEID',
        'ENTITYID',
        'LINK',
        'MEDIUMTEXT',
        'LARGETEXT',
        'USERID',
        'STRING_LIST',
        'INTEGER_LIST',
        'BOOLEAN_LIST',
        'DATE_LIST',
        'USERID_LIST',
        'ENTITYID_LIST',
        'EVALUATIONID',
        'SUBMISSIONID',
        'JSON',
      ]
      const actual = getAllowedColumnTypes(false, false)

      expect(expected.sort()).toEqual(actual.sort())
    })
    it('allowed column types for a view, regular column model', () => {
      const expected = [
        'STRING',
        'DOUBLE',
        'BOOLEAN',
        'INTEGER',
        'DATE',
        'FILEHANDLEID',
        'ENTITYID',
        'LINK',
        // 'MEDIUMTEXT',
        // 'LARGETEXT',
        'USERID',
        'STRING_LIST',
        'INTEGER_LIST',
        'BOOLEAN_LIST',
        'DATE_LIST',
        'USERID_LIST',
        'ENTITYID_LIST',
        'EVALUATIONID',
        'SUBMISSIONID',
        // 'JSON',
      ]
      const actual = getAllowedColumnTypes(true, false)

      expect(expected.sort()).toEqual(actual.sort())
    })

    it('allowed column types for a non-view, jsonSubColumn', () => {
      const expected = [
        'STRING',
        'DOUBLE',
        'BOOLEAN',
        'INTEGER',
        'DATE',
        'FILEHANDLEID',
        'ENTITYID',
        'LINK',
        'MEDIUMTEXT',
        'LARGETEXT',
        'USERID',
        // 'STRING_LIST',
        // 'INTEGER_LIST',
        // 'BOOLEAN_LIST',
        // 'DATE_LIST',
        // 'USERID_LIST',
        // 'ENTITYID_LIST',
        'EVALUATIONID',
        'SUBMISSIONID',
        // 'JSON',
      ]
      const actual = getAllowedColumnTypes(false, true)

      expect(expected.sort()).toEqual(actual.sort())
    })
  })

  it('canHaveSize', () => {
    const expectedTrue = [
      ColumnTypeEnum.STRING,
      ColumnTypeEnum.STRING_LIST,
      ColumnTypeEnum.LINK,
    ]

    Object.values(ColumnTypeEnum).forEach((key: ColumnType) => {
      const actual = canHaveSize(key)
      const expected = expectedTrue.includes(key as ColumnTypeEnum)
      expect(actual).toBe(expected)
    })
  })
  it('canHaveMaxListLength', () => {
    const expectedTrue = [
      ColumnTypeEnum.STRING_LIST,
      ColumnTypeEnum.BOOLEAN_LIST,
      ColumnTypeEnum.DATE_LIST,
      ColumnTypeEnum.INTEGER_LIST,
    ]

    Object.values(ColumnTypeEnum).forEach((key: ColumnType) => {
      const actual = canHaveMaxListLength(key)
      const expected = expectedTrue.includes(key as ColumnTypeEnum)
      expect(actual).toBe(expected)
    })
  })

  describe('configureFacetsForType', () => {
    it('column types that support both enumeration/range', () => {
      const types = [ColumnTypeEnum.INTEGER, ColumnTypeEnum.INTEGER_LIST]

      types.forEach(type => {
        let isJsonSubColumnFacet = false
        expect(configureFacetsForType(type, isJsonSubColumnFacet)).toEqual([
          undefined,
          'enumeration',
          'range',
        ])

        isJsonSubColumnFacet = true
        expect(configureFacetsForType(type, isJsonSubColumnFacet)).toEqual([
          'enumeration',
          'range',
        ])
      })
    })

    it('enumeration-only column types', () => {
      const types = [
        ColumnTypeEnum.STRING,
        ColumnTypeEnum.STRING_LIST,
        ColumnTypeEnum.BOOLEAN,
        ColumnTypeEnum.BOOLEAN_LIST,
        ColumnTypeEnum.USERID,
        ColumnTypeEnum.USERID_LIST,
        ColumnTypeEnum.ENTITYID,
        ColumnTypeEnum.ENTITYID_LIST,
        ColumnTypeEnum.EVALUATIONID,
      ]

      types.forEach(type => {
        let isJsonSubColumnFacet = false
        expect(configureFacetsForType(type, isJsonSubColumnFacet)).toEqual([
          undefined,
          'enumeration',
        ])

        isJsonSubColumnFacet = true
        expect(configureFacetsForType(type, isJsonSubColumnFacet)).toEqual([
          'enumeration',
        ])
      })
    })

    it('range-only column types', () => {
      const types = [
        ColumnTypeEnum.DOUBLE,
        ColumnTypeEnum.DATE,
        ColumnTypeEnum.DATE_LIST,
      ]

      types.forEach(type => {
        let isJsonSubColumnFacet = false
        expect(configureFacetsForType(type, isJsonSubColumnFacet)).toEqual([
          undefined,
          'range',
        ])

        isJsonSubColumnFacet = true
        expect(configureFacetsForType(type, isJsonSubColumnFacet)).toEqual([
          'range',
        ])
      })
    })

    it('unfacetable column types', () => {
      const types = [
        ColumnTypeEnum.JSON,
        ColumnTypeEnum.LINK,
        ColumnTypeEnum.MEDIUMTEXT,
        ColumnTypeEnum.LARGETEXT,
        ColumnTypeEnum.FILEHANDLEID,
      ]

      types.forEach(type => {
        let isJsonSubColumnFacet = false
        expect(configureFacetsForType(type, isJsonSubColumnFacet)).toEqual(null)

        isJsonSubColumnFacet = true
        expect(configureFacetsForType(type, isJsonSubColumnFacet)).toEqual(null)
      })
    })
  })
  describe('canHaveDefault', () => {
    it('is always false for view', () => {
      Object.values(ColumnTypeEnum).forEach((type: ColumnType) => {
        const actual = canHaveDefault(type, true, false)
        expect(actual).toBe(false)
      })
    })
    it('is always false for jsonSubColumn', () => {
      Object.values(ColumnTypeEnum).forEach((type: ColumnType) => {
        const actual = canHaveDefault(type, false, true)
        expect(actual).toBe(false)
      })
    })

    it('certain column types support default values', () => {
      const expectedFalse = [
        ColumnTypeEnum.ENTITYID,
        ColumnTypeEnum.FILEHANDLEID,
        ColumnTypeEnum.USERID,
        ColumnTypeEnum.MEDIUMTEXT,
        ColumnTypeEnum.LARGETEXT,
        ColumnTypeEnum.JSON,
      ]
      Object.values(ColumnTypeEnum).forEach((type: ColumnType) => {
        const actual = canHaveDefault(type, false, false)
        expect(actual).toBe(!expectedFalse.includes(type as ColumnTypeEnum))
      })
    })
  })
  test('getMaxSizeForType', () => {
    const expected: Partial<Record<ColumnTypeEnum, number>> = {
      [ColumnTypeEnum.STRING]: 50,
      [ColumnTypeEnum.STRING_LIST]: 50,
      [ColumnTypeEnum.LINK]: 1000,
    }
    const shouldError = Object.values(ColumnTypeEnum).filter(
      type => expected[type] == null,
    )
    Object.keys(expected).forEach(columnType => {
      const expectedMaxSize = expected[columnType as ColumnTypeEnum]
      const actual = getMaxSizeForType(columnType as ColumnTypeEnum)
      expect(actual).toBe(expectedMaxSize)
    })
    shouldError.forEach((columnType: ColumnType) => {
      expect(() => {
        getMaxSizeForType(columnType)
      }).toThrow()
    })
  })

  describe('canHaveRestrictedValues', () => {
    test('all types for top-level columnModel', () => {
      const expectedTrue = [
        ColumnTypeEnum.STRING,
        ColumnTypeEnum.INTEGER,
        ColumnTypeEnum.ENTITYID,
      ]
      Object.values(ColumnTypeEnum).forEach((type: ColumnType) => {
        const actual = canHaveRestrictedValues(type, false)
        expect(actual).toBe(expectedTrue.includes(type as ColumnTypeEnum))
      })
    })
    test('jsonSubColumnFacet', () => {
      Object.values(ColumnTypeEnum).forEach((key: ColumnType) => {
        const actual = canHaveRestrictedValues(key, true)
        expect(actual).toBe(false)
      })
    })
  })

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
  })
})
