import {
  ColumnType,
  ColumnTypeEnum,
  Dataset,
  DatasetCollection,
  ENTITY_VIEW_TYPE_MASK_DATASET,
  ENTITY_VIEW_TYPE_MASK_FILE,
  EntityView,
  SubmissionView,
} from '@sage-bionetworks/synapse-types'
import {
  canHaveDefault,
  canHaveMaxListLength,
  canHaveRestrictedValues,
  canHaveSize,
  configureFacetsForType,
  getAllowedColumnTypes,
  getJsonSchemaItemDefinitionForColumnType,
  getMaxSizeForType,
  getViewScopeForEntity,
} from './TableColumnSchemaEditorUtils'
import { JSONSchema7Definition } from 'json-schema'

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
        ColumnTypeEnum.SUBMISSIONID,
        ColumnTypeEnum.EVALUATIONID,
        ColumnTypeEnum.USERID_LIST,
        ColumnTypeEnum.ENTITYID_LIST,
      ]
      Object.values(ColumnTypeEnum).forEach((type: ColumnType) => {
        const actual = canHaveDefault(type, false, false)
        expect(actual).toBe(!expectedFalse.includes(type as ColumnTypeEnum))
      })
    })
  })
  test('getMaxSizeForType', () => {
    const expected: Partial<Record<ColumnTypeEnum, number>> = {
      [ColumnTypeEnum.STRING]: 1000,
      [ColumnTypeEnum.STRING_LIST]: 1000,
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

  describe('getViewScopeForEntity', () => {
    test('EntityView', () => {
      const entity: EntityView = {
        columnIds: [],
        isSearchEnabled: false,
        id: 'syn1',
        name: 'name',
        etag: 'etag',
        concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
        parentId: 'syn2',
        scopeIds: ['syn789', 'syn482'],
        viewTypeMask: 0x123,
      }
      const scope = getViewScopeForEntity(entity)
      expect(scope).toEqual({
        scope: ['syn789', 'syn482'],
        viewTypeMask: 0x123,
        viewEntityType: 'entityview',
      })
    })
    test('Dataset', () => {
      const entity: Dataset = {
        columnIds: [],
        isSearchEnabled: false,
        id: 'syn1',
        name: 'name',
        etag: 'etag',
        concreteType: 'org.sagebionetworks.repo.model.table.Dataset',
        parentId: 'syn456',
        items: [
          { entityId: 'syn123', versionNumber: 1 },
          { entityId: 'syn456', versionNumber: 7 },
        ],
      }
      const scope = getViewScopeForEntity(entity)
      expect(scope).toEqual({
        scope: ['syn123.1', 'syn456.7'],
        viewTypeMask: ENTITY_VIEW_TYPE_MASK_FILE,
        viewEntityType: 'dataset',
      })
    })

    test('Dataset Collection', () => {
      const entity: DatasetCollection = {
        columnIds: [],
        isSearchEnabled: false,
        id: 'syn1',
        name: 'name',
        etag: 'etag',
        concreteType: 'org.sagebionetworks.repo.model.table.DatasetCollection',
        parentId: 'syn2',
        items: [
          { entityId: 'syn123', versionNumber: 1 },
          { entityId: 'syn456', versionNumber: 7 },
        ],
      }
      const scope = getViewScopeForEntity(entity)
      expect(scope).toEqual({
        scope: ['syn123.1', 'syn456.7'],
        viewTypeMask: ENTITY_VIEW_TYPE_MASK_DATASET,
        viewEntityType: 'datasetcollection',
      })
    })

    test('SubmissionView', () => {
      const entity: SubmissionView = {
        columnIds: [],
        isSearchEnabled: false,
        id: 'syn1',
        name: 'name',
        etag: 'etag',
        concreteType: 'org.sagebionetworks.repo.model.table.SubmissionView',
        parentId: 'syn2',
        scopeIds: ['syn123', 'syn456'],
      }
      const scope = getViewScopeForEntity(entity)
      expect(scope).toEqual({
        scope: ['syn123', 'syn456'],
        viewTypeMask: undefined,
        viewEntityType: 'submissionview',
      })
    })
  })
  describe('getJsonSchemaItemDefinitionForColumnType', () => {
    test.each<[ColumnTypeEnum, JSONSchema7Definition]>([
      [ColumnTypeEnum.STRING, { type: 'string', minLength: 1 }],
      [ColumnTypeEnum.STRING_LIST, { type: 'string', minLength: 1 }],
      [ColumnTypeEnum.INTEGER, { type: 'integer' }],
      [ColumnTypeEnum.INTEGER_LIST, { type: 'integer' }],
      [ColumnTypeEnum.DOUBLE, { type: 'number' }],
      [ColumnTypeEnum.BOOLEAN, { type: 'boolean' }],
      [ColumnTypeEnum.BOOLEAN_LIST, { type: 'boolean' }],
      [ColumnTypeEnum.DATE, { type: 'string', format: 'datetime' }],
      [ColumnTypeEnum.DATE_LIST, { type: 'string', format: 'datetime' }],
      [ColumnTypeEnum.USERID, { type: 'string', minLength: 1 }],
      [ColumnTypeEnum.ENTITYID, { type: 'string', minLength: 1 }],
    ])(`%s`, (columnType, expected) => {
      const actual = getJsonSchemaItemDefinitionForColumnType(columnType)
      expect(actual).toEqual(expected)
    })
  })
})
