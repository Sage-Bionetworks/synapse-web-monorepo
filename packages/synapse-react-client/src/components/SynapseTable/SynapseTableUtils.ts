import {
  ColumnType,
  ColumnTypeEnum,
  EntityHeader,
  QueryResultBundle,
  SortItem,
  UserGroupHeader,
  UserProfile,
} from '@sage-bionetworks/synapse-types'

export const getColumnIndicesWithType = (
  data: QueryResultBundle | undefined,
  ...columnTypes: ColumnType[]
) => {
  const columnsOfTypeEntity: number[] = []
  data?.selectColumns?.forEach((el, index) => {
    if (columnTypes.includes(el.columnType)) {
      columnsOfTypeEntity.push(index)
    }
  })
  return columnsOfTypeEntity
}

export const getUniqueEntities = (
  data: QueryResultBundle,
  mapIdToHeader: Record<
    string,
    EntityHeader | Partial<UserGroupHeader & UserProfile>
  >,
  indices: number[],
) => {
  const distinctEntities = new Set<string>()
  data.queryResult?.queryResults.rows.forEach(row => {
    row.values.forEach((el: string | null, colIndex: number) => {
      // make sure this is a column of type entity and that we haven't retrieved this entity's information prior
      if (
        el != null &&
        indices.includes(colIndex) &&
        !Object.prototype.hasOwnProperty.call(mapIdToHeader, el) &&
        el
      ) {
        distinctEntities.add(el)
      }
    })
  })
  return distinctEntities
}

export function isSortableColumn(columnType: ColumnType) {
  switch (columnType) {
    case ColumnTypeEnum.USERID:
    case ColumnTypeEnum.ENTITYID:
    case ColumnTypeEnum.FILEHANDLEID:
    case ColumnTypeEnum.STRING_LIST:
    case ColumnTypeEnum.INTEGER_LIST:
    case ColumnTypeEnum.BOOLEAN_LIST:
    case ColumnTypeEnum.DATE_LIST:
    case ColumnTypeEnum.USERID_LIST:
    case ColumnTypeEnum.ENTITYID_LIST:
      return false
    default:
      return true
  }
}

/**
 * Utility to search through array of objects and find object with key "column"
 * equal to input parameter "name"
 *
 * @param {*} sortedColumnSelection
 * @param {*} name
 * @returns -1 if not present, otherwise the index of the object
 * @memberof SynapseTable
 */
export function findSelectionIndex(
  sortedColumnSelection: SortItem[],
  name: string,
) {
  if (sortedColumnSelection.length !== 0) {
    // find if the current selection exists already and remove it
    return sortedColumnSelection.findIndex((el: SortItem) => el.column === name)
  }
  return -1
}
