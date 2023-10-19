import {
  ColumnType,
  ColumnTypeEnum,
  FacetType,
} from '@sage-bionetworks/synapse-types'
import {
  canHaveDefault,
  canHaveMaxListLength,
  canHaveSize,
  configureFacetsForType,
  getAllowedColumnTypes,
} from './TableColumnSchemaEditorUtils'

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
      Object.values(ColumnTypeEnum).forEach((key: ColumnType) => {
        const actual = canHaveDefault(key, true, false)
        expect(actual).toBe(false)
      })
    })
    it('is always false for jsonSubColumn', () => {
      Object.values(ColumnTypeEnum).forEach((key: ColumnType) => {
        const actual = canHaveDefault(key, false, true)
        expect(actual).toBe(false)
      })
    })

    it('certain column types support default values', () => {
      const expectedFalse = [
        ColumnTypeEnum.ENTITYID,
        ColumnTypeEnum.FILEHANDLEID,
      ]
      Object.values(ColumnTypeEnum).forEach((key: ColumnType) => {
        const actual = canHaveDefault(key, false, false)
        expect(actual).toBe(false)
      })
    })
  })
})

// /**
//  * Configure the facet selection based on the column type
//  *
//  * @param type a ColumnType for which to get the facet selection
//  * @param isJsonSubColumnFacet is this a facet for a json subcolumn?
//  * @return the allowed facetTypes, or null if faceting is not allowed
//  */
// export function configureFacetsForType(
//   type: ColumnType | ColumnTypeEnum,
//   isJsonSubColumnFacet: boolean,
// ): (FacetType | undefined)[] | null {
//   let allowedFacetTypes: (FacetType | undefined)[] | null
//   switch (type) {
//     case ColumnTypeEnum.INTEGER:
//     case ColumnTypeEnum.INTEGER_LIST:
//       allowedFacetTypes = ['enumeration', 'range']
//       break
//     case ColumnTypeEnum.STRING:
//     case ColumnTypeEnum.BOOLEAN:
//     case ColumnTypeEnum.USERID:
//     case ColumnTypeEnum.ENTITYID:
//     case ColumnTypeEnum.STRING_LIST:
//     case ColumnTypeEnum.BOOLEAN_LIST:
//     case ColumnTypeEnum.ENTITYID_LIST:
//     case ColumnTypeEnum.USERID_LIST:
//     case ColumnTypeEnum.EVALUATIONID:
//       allowedFacetTypes = ['enumeration']
//       break
//     case ColumnTypeEnum.DOUBLE:
//     case ColumnTypeEnum.DATE:
//     case ColumnTypeEnum.DATE_LIST:
//       allowedFacetTypes = ['range']
//       break
//     default:
//       allowedFacetTypes = null
//   }
//
//   if (allowedFacetTypes && !isJsonSubColumnFacet) {
//     // jsonSubColumn facets MUST have a facet definition, but regular column models do not need one
//     // So allow `undefined` for regular columnModels.
//     allowedFacetTypes = [undefined, ...allowedFacetTypes]
//   }
//   return allowedFacetTypes
// }
//
// export function canHaveDefault(
//   type: ColumnType | ColumnTypeEnum,
//   isView: boolean,
//   isJsonSubColumnFacet: boolean,
// ) {
//   // SWC-6333: if this column is in a view, only allow column types that are mapped to annotation types.
//   if (!isView && !isJsonSubColumnFacet) {
//     switch (type) {
//       case ColumnTypeEnum.ENTITYID:
//       case ColumnTypeEnum.FILEHANDLEID:
//       case ColumnTypeEnum.USERID:
//       case ColumnTypeEnum.MEDIUMTEXT:
//       case ColumnTypeEnum.LARGETEXT:
//       case ColumnTypeEnum.JSON:
//         return false
//       default:
//         return true
//     }
//   } else {
//     return false
//   }
// }
//
// const DEFAULT_STRING_SIZE = 50
// const MAX_STRING_SIZE = 1000
//
// /**
//  * Get the default max size for a given type.
//  *
//  * @param type
//  * @return
//  */
// export function getMaxSizeForType(type: ColumnType | ColumnTypeEnum): number {
//   switch (type) {
//     case ColumnTypeEnum.STRING:
//     case ColumnTypeEnum.STRING_LIST:
//       return DEFAULT_STRING_SIZE
//     case ColumnTypeEnum.LINK:
//       return MAX_STRING_SIZE
//     default:
//       throw new Error(`Type is not known to have a max size: ${type}`)
//   }
// }
//
// export function canHaveRestrictedValues(
//   type: ColumnType | ColumnTypeEnum,
//   isJsonSubColumnFacet: boolean,
// ): boolean {
//   if (isJsonSubColumnFacet) {
//     return false
//   }
//   switch (type) {
//     case ColumnTypeEnum.STRING:
//     case ColumnTypeEnum.INTEGER:
//     case ColumnTypeEnum.ENTITYID:
//       return true
//     default:
//       // all other are false
//       return false
//   }
// }
