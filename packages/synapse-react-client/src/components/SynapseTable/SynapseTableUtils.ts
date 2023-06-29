import {
  ColumnModel,
  ColumnType,
  ColumnTypeEnum,
  EntityHeader,
  QueryResultBundle,
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

export const getFileColumnModelId = (
  columnModels?: ColumnModel[],
): string | undefined => {
  if (!columnModels) {
    return undefined
  }
  const entityIdColumnModels: ColumnModel[] | undefined = columnModels?.filter(
    el => el.columnType === ColumnTypeEnum.ENTITYID,
  )
  // if there's a single ENTITYID type column, return that column id
  if (entityIdColumnModels?.length === 1) {
    return entityIdColumnModels[0].id
  }
  // otherwise, if there's an 'id' column, return that column id
  const idColumnModel = entityIdColumnModels?.filter(el => el.name === 'id')
  if (idColumnModel.length === 1) {
    return idColumnModel[0].id
  }
  // else the file ID column was not found
  return undefined
}
