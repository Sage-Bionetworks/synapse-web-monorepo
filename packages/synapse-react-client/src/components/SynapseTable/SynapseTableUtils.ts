import {
  hasFilesInView,
  isDataset,
  isDatasetCollection,
  isEntityView,
} from '@/utils/functions/EntityTypeUtils'
import {
  ColumnModel,
  ColumnType,
  ColumnTypeEnum,
  Entity,
  EntityHeader,
  QueryResultBundle,
  Table,
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

/**
 * i.e. the view may have FileEntities in it
 *
 * PORTALS-2010:  Enhance change made for PORTALS-1973.  File specific action will only be shown for rows that represent FileEntities.
 */
export function isFileViewOrDataset(entity?: Table) {
  return (
    entity &&
    ((isEntityView(entity) && hasFilesInView(entity)) || isDataset(entity))
  )
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

export function isSortableColumn(column: ColumnType) {
  switch (column) {
    case ColumnTypeEnum.STRING:
    case ColumnTypeEnum.DOUBLE:
    case ColumnTypeEnum.BOOLEAN:
    case ColumnTypeEnum.INTEGER:
    case ColumnTypeEnum.DATE:
    case ColumnTypeEnum.LINK:
    case ColumnTypeEnum.MEDIUMTEXT:
    case ColumnTypeEnum.LARGETEXT:
      return true
    case ColumnTypeEnum.USERID:
    case ColumnTypeEnum.ENTITYID:
    case ColumnTypeEnum.FILEHANDLEID:
    case ColumnTypeEnum.STRING_LIST:
    case ColumnTypeEnum.INTEGER_LIST:
    case ColumnTypeEnum.BOOLEAN_LIST:
    case ColumnTypeEnum.DATE_LIST:
    case ColumnTypeEnum.USERID_LIST:
    case ColumnTypeEnum.ENTITYID_LIST:
    case ColumnTypeEnum.EVALUATIONID:
    case ColumnTypeEnum.SUBMISSIONID:
    case ColumnTypeEnum.JSON:
      return false
    default:
      console.warn(`Unhandled column type: ${column}`)
      return false
  }
}

export function getDefaultPrimaryKey(
  entity?: Table,
  columnModels?: ColumnModel[],
): string[] | undefined {
  if (
    isFileViewOrDataset(entity) &&
    columnModels?.find(cm => cm.name === 'id')
  ) {
    // If the primary key isn't specified via props, and this is a file view/dataset, we can safely use the 'id' column as primary key, if it is present
    // Note: Synapse tables don't have an internal concept of a primary key
    return ['id']
  }
  return undefined
}

export function isEntityViewOrDatasetOrCollection(entity: Entity): boolean {
  return Boolean(
    entity &&
      (isEntityView(entity) ||
        isDataset(entity) ||
        isDatasetCollection(entity)),
  )
}

export function mapRowToRecord(
  rowData: (string | null)[],
  schema: Record<string, number>,
): Record<string, string | null> {
  return Object.entries(schema).reduce<Record<string, string | null>>(
    (acc, [columnName, columnIndex]) => {
      acc[columnName] = rowData[columnIndex]
      return acc
    },
    {},
  )
}
