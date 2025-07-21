import mockDataset from '@/mocks/entity/mockDataset'
import { mockFileViewEntity } from '@/mocks/entity/mockFileView'
import { mockTableEntity } from '@/mocks/entity/mockTableEntity'
import {
  ColumnModel,
  ColumnTypeEnum,
  QueryResultBundle,
} from '@sage-bionetworks/synapse-types'
import {
  getColumnIndicesWithType,
  getDefaultPrimaryKey,
  getFileColumnModelId,
  getUniqueEntities,
  isSortableColumn,
  mapRowToRecord,
} from './SynapseTableUtils'

describe('Synapse Table Utilities tests', () => {
  describe('Table cell renderer utilities', () => {
    const ENTITYID_INDEX = 0
    const USERID_INDEX = 1
    const DATE_INDEX = 2
    const STRING_LIST_INDEX = 3
    const DATE_LIST_INDEX = 4
    const BOOLEAN_LIST_INDEX = 5
    const INTEGER_LIST_INDEX = 6
    const FILEHANDLEID_INDEX = 7
    const ENTITYIDLIST_INDEX = 8
    const MOCKED_STRING = 'MOCKED_VALUE'
    const MOCKED_STRING_LIST = '["MOCKED_VALUE1","MOCKED_VALUE2"]'
    const MOCK_DATE_VALUE = '1581360939000'
    const MOCKED_DATE_LIST = `[${MOCK_DATE_VALUE}]`
    const MOCKED_BOOLEAN_LIST = '[true, false]'
    const MOCKED_INTEGER_LIST = '[10, 11]'
    const MOCKED_NUM = 1
    const MOCKED_ENTITY_ID_LIST = '["syn123", "syn456"]'
    // The query result bundle has two columns of type entity, the second
    // is of type ENTITYID, the third is USERID
    const mockData: QueryResultBundle = {
      concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle',
      selectColumns: [
        {
          id: MOCKED_STRING,
          name: MOCKED_STRING,
          columnType: ColumnTypeEnum.ENTITYID,
        },
        {
          id: MOCKED_STRING,
          name: MOCKED_STRING,
          columnType: ColumnTypeEnum.USERID,
        },
        {
          id: MOCKED_STRING,
          name: MOCKED_STRING,
          columnType: ColumnTypeEnum.DATE,
        },
        {
          id: MOCKED_STRING,
          name: MOCKED_STRING,
          columnType: ColumnTypeEnum.STRING_LIST,
        },
        {
          id: MOCKED_STRING,
          name: MOCKED_STRING,
          columnType: ColumnTypeEnum.DATE_LIST,
        },
        {
          id: MOCKED_STRING,
          name: MOCKED_STRING,
          columnType: ColumnTypeEnum.BOOLEAN_LIST,
        },
        {
          id: MOCKED_STRING,
          name: MOCKED_STRING,
          columnType: ColumnTypeEnum.INTEGER_LIST,
        },
        {
          id: MOCKED_STRING,
          name: MOCKED_STRING,
          columnType: ColumnTypeEnum.FILEHANDLEID,
        },
        {
          id: MOCKED_ENTITY_ID_LIST,
          name: MOCKED_ENTITY_ID_LIST,
          columnType: ColumnTypeEnum.ENTITYID_LIST,
        },
      ],
      queryResult: {
        concreteType: 'org.sagebionetworks.repo.model.table.QueryResult',
        queryResults: {
          concreteType: 'org.sagebionetworks.repo.model.table.RowSet',
          tableId: MOCKED_STRING,
          etag: MOCKED_STRING,
          headers: [
            {
              columnType: ColumnTypeEnum.ENTITYID,
              name: MOCKED_STRING,
              id: MOCKED_STRING,
            },
            {
              columnType: ColumnTypeEnum.USERID,
              name: MOCKED_STRING,
              id: MOCKED_STRING,
            },
            {
              columnType: ColumnTypeEnum.DATE,
              name: MOCKED_STRING,
              id: MOCKED_STRING,
            },
            {
              id: MOCKED_STRING,
              name: MOCKED_STRING,
              columnType: ColumnTypeEnum.STRING_LIST,
            },
            {
              id: MOCKED_STRING,
              name: MOCKED_STRING,
              columnType: ColumnTypeEnum.DATE_LIST,
            },
            {
              id: MOCKED_STRING,
              name: MOCKED_STRING,
              columnType: ColumnTypeEnum.BOOLEAN_LIST,
            },
            {
              id: MOCKED_STRING,
              name: MOCKED_STRING,
              columnType: ColumnTypeEnum.INTEGER_LIST,
            },
            {
              id: MOCKED_STRING,
              name: MOCKED_STRING,
              columnType: ColumnTypeEnum.FILEHANDLEID,
            },
            {
              id: MOCKED_ENTITY_ID_LIST,
              name: MOCKED_ENTITY_ID_LIST,
              columnType: ColumnTypeEnum.ENTITYID_LIST,
            },
          ],
          rows: [
            {
              values: [
                'syn123',
                'syn120',
                '1567525763000',
                MOCKED_STRING_LIST,
                MOCKED_DATE_LIST,
                MOCKED_BOOLEAN_LIST,
                MOCKED_INTEGER_LIST,
                MOCKED_ENTITY_ID_LIST,
              ],
              versionNumber: MOCKED_NUM,
              rowId: MOCKED_NUM,
            },
            {
              // @ts-ignore
              values: [
                'syn124',
                'syn120',
                null,
                MOCKED_STRING_LIST,
                MOCKED_DATE_LIST,
                MOCKED_BOOLEAN_LIST,
                MOCKED_INTEGER_LIST,
                MOCKED_ENTITY_ID_LIST,
              ],
              versionNumber: MOCKED_NUM,
              rowId: MOCKED_NUM,
            },
            {
              values: [
                'syn125',
                'syn121',
                '1567525763003',
                MOCKED_STRING_LIST,
                MOCKED_DATE_LIST,
                MOCKED_BOOLEAN_LIST,
                MOCKED_INTEGER_LIST,
                MOCKED_ENTITY_ID_LIST,
              ],
              versionNumber: MOCKED_NUM,
              rowId: MOCKED_NUM,
            },
          ],
        },
      },
    }
    it('gets column indicies correctly', () => {
      const entities = getColumnIndicesWithType(
        mockData,
        ColumnTypeEnum.ENTITYID,
      )
      expect(entities).toEqual([ENTITYID_INDEX])
      const userIds = getColumnIndicesWithType(mockData, ColumnTypeEnum.USERID)
      expect(userIds).toEqual([USERID_INDEX])
      const dates = getColumnIndicesWithType(mockData, ColumnTypeEnum.DATE)
      expect(dates).toEqual([DATE_INDEX])
      const stringLists = getColumnIndicesWithType(
        mockData,
        ColumnTypeEnum.STRING_LIST,
      )
      expect(stringLists).toEqual([STRING_LIST_INDEX])
      const dateLists = getColumnIndicesWithType(
        mockData,
        ColumnTypeEnum.DATE_LIST,
      )
      expect(dateLists).toEqual([DATE_LIST_INDEX])
      const booleanLists = getColumnIndicesWithType(
        mockData,
        ColumnTypeEnum.BOOLEAN_LIST,
      )
      expect(booleanLists).toEqual([BOOLEAN_LIST_INDEX])
      const integerLists = getColumnIndicesWithType(
        mockData,
        ColumnTypeEnum.INTEGER_LIST,
      )
      expect(integerLists).toEqual([INTEGER_LIST_INDEX])
      const dateOrIntegerLists = getColumnIndicesWithType(
        mockData,
        ColumnTypeEnum.DATE_LIST,
        ColumnTypeEnum.INTEGER_LIST,
      )
      expect(dateOrIntegerLists).toEqual([DATE_LIST_INDEX, INTEGER_LIST_INDEX])

      const fileHandleId = getColumnIndicesWithType(
        mockData,
        ColumnTypeEnum.FILEHANDLEID,
      )
      expect(fileHandleId).toEqual([FILEHANDLEID_INDEX])

      const entityIdListId = getColumnIndicesWithType(
        mockData,
        ColumnTypeEnum.ENTITYID_LIST,
      )
      expect(entityIdListId).toEqual([ENTITYIDLIST_INDEX])
    })

    it('gets unique entities', () => {
      // test entityId column type
      let mapEntityIdToHeader = {}
      let indicies = [ENTITYID_INDEX]
      let uniqueEntities = getUniqueEntities(
        mockData,
        mapEntityIdToHeader,
        indicies,
      )
      expect(uniqueEntities.size).toEqual(3)
      // test userId column
      mapEntityIdToHeader = {
        syn120: {},
      }
      indicies = [USERID_INDEX]
      uniqueEntities = getUniqueEntities(
        mockData,
        mapEntityIdToHeader,
        indicies,
      )
      expect(uniqueEntities.size).toEqual(1)
    })
  })
  describe('test getFileColumnModelId', () => {
    it('undefined column models', () => {
      expect(getFileColumnModelId(undefined)).toEqual(undefined)
    })
    it('single entityid column model', () => {
      const columnModels: ColumnModel[] = [
        {
          id: '1',
          columnType: ColumnTypeEnum.BOOLEAN,
          name: 'boolColumn',
        },
        {
          id: '2',
          columnType: ColumnTypeEnum.ENTITYID,
          name: 'fileID',
        },
      ]
      expect(getFileColumnModelId(columnModels)).toEqual('2')
    })
    it('multiple entityid column models, one is the id column', () => {
      const columnModels: ColumnModel[] = [
        {
          id: '1',
          columnType: ColumnTypeEnum.BOOLEAN,
          name: 'boolColumn',
        },
        {
          id: '2',
          columnType: ColumnTypeEnum.ENTITYID,
          name: 'benefactorID',
        },
        {
          id: '3',
          columnType: ColumnTypeEnum.ENTITYID,
          name: 'id',
        },
      ]
      expect(getFileColumnModelId(columnModels)).toEqual('3')
    })
    it('multiple entityid column models, no id column', () => {
      const columnModels: ColumnModel[] = [
        {
          id: '1',
          columnType: ColumnTypeEnum.BOOLEAN,
          name: 'boolColumn',
        },
        {
          id: '2',
          columnType: ColumnTypeEnum.ENTITYID,
          name: 'fileID1',
        },
        {
          id: '3',
          columnType: ColumnTypeEnum.ENTITYID,
          name: 'fileID2',
        },
      ]
      expect(getFileColumnModelId(columnModels)).toEqual(undefined)
    })
  })

  describe('isSortableColumn', () => {
    it('throws a warning and returns false for an unknown type', () => {
      const consoleWarnSpy = vi
        .spyOn(console, 'warn')
        .mockImplementation(() => {})

      // Call under test
      expect(isSortableColumn('FAKE_COLUMN_TYPE' as ColumnTypeEnum)).toBe(false)

      expect(consoleWarnSpy).toHaveBeenCalled()
      consoleWarnSpy.mockRestore()
    })

    it('explicitly handles all known types', () => {
      const consoleWarnSpy = vi.spyOn(console, 'warn')
      Object.keys(ColumnTypeEnum).forEach(key => {
        isSortableColumn(key as ColumnTypeEnum)
      })
      expect(consoleWarnSpy).not.toHaveBeenCalled()
    })
  })

  describe('getDefaultPrimaryKey', () => {
    it('returns id for file view', () => {
      expect(
        getDefaultPrimaryKey(mockFileViewEntity, [
          { id: '1234', name: 'id', columnType: ColumnTypeEnum.ENTITYID },
        ]),
      ).toEqual(['id'])
    })

    it('returns id for dataset', () => {
      expect(
        getDefaultPrimaryKey(mockDataset.entity, [
          { id: '1234', name: 'id', columnType: ColumnTypeEnum.ENTITYID },
        ]),
      ).toEqual(['id'])
    })

    it('returns undefined for other types', () => {
      expect(
        getDefaultPrimaryKey(mockTableEntity, [
          { id: '1234', name: 'id', columnType: ColumnTypeEnum.ENTITYID },
        ]),
      ).toEqual(undefined)
    })
  })

  test('mapRowToRecord', () => {
    const data = ['foo', 'bar', null]
    const schemaIndexMap = { fooCol: 0, barCol: 1, nullCol: 2 }
    expect(mapRowToRecord(data, schemaIndexMap)).toEqual({
      fooCol: 'foo',
      barCol: 'bar',
      nullCol: null,
    })
  })
})
