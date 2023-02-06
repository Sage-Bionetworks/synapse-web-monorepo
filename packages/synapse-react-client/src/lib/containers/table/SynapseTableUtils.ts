import {
  ColumnType,
  EntityHeader,
  QueryResultBundle,
  UserGroupHeader,
  UserProfile,
} from '../../utils/synapseTypes'

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
