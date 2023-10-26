import {
  ColumnChange,
  ColumnModel,
  ColumnType,
  ColumnTypeEnum,
  FacetType,
  TableUpdateTransactionRequest,
} from '@sage-bionetworks/synapse-types'
import { SetOptional } from 'type-fest'
import { isEqual } from 'lodash-es'
import { createColumnModels } from '../../synapse-client'

/**
 * These column types can only be used in Tables. They can not be used in views.
 *  See SWC-6333 - for views, only allow column types that are mapped to annotation types.
 */
const unsupportedTypesForViews = [
  ColumnTypeEnum.LARGETEXT,
  ColumnTypeEnum.MEDIUMTEXT,
  ColumnTypeEnum.JSON,
]
export function getAllowedColumnTypes(
  isView: boolean,
  isJsonSubColumnFacet: boolean,
) {
  return Object.values(ColumnTypeEnum)
    .filter(columnType =>
      isView ? !unsupportedTypesForViews.includes(columnType) : true,
    )
    .filter(columnType => {
      if (isJsonSubColumnFacet) {
        switch (columnType) {
          // JSON Subcolumns cannot be JSON or LIST types
          case ColumnTypeEnum.JSON:
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
      return true
    })
}

export function getFacetTypeFriendlyName(facetType: FacetType) {
  switch (facetType) {
    case 'enumeration':
      return 'Values'
    case 'range':
      return 'Range'
    default:
      return facetType
  }
}
export function getColumnTypeFriendlyName(type: ColumnType | ColumnTypeEnum) {
  switch (type) {
    case ColumnTypeEnum.STRING:
      return 'String'
    case ColumnTypeEnum.DOUBLE:
      return 'Double'
    case ColumnTypeEnum.BOOLEAN:
      return 'Boolean'
    case ColumnTypeEnum.INTEGER:
      return 'Integer'
    case ColumnTypeEnum.DATE:
      return 'Date'
    case ColumnTypeEnum.FILEHANDLEID:
      return 'File'
    case ColumnTypeEnum.ENTITYID:
      return 'Entity'
    case ColumnTypeEnum.LINK:
      return 'Link'
    case ColumnTypeEnum.MEDIUMTEXT:
      return 'MediumText'
    case ColumnTypeEnum.LARGETEXT:
      return 'LargeText'
    case ColumnTypeEnum.USERID:
      return 'User'
    case ColumnTypeEnum.STRING_LIST:
      return 'String List'
    case ColumnTypeEnum.INTEGER_LIST:
      return 'Integer List'
    case ColumnTypeEnum.BOOLEAN_LIST:
      return 'Boolean List'
    case ColumnTypeEnum.DATE_LIST:
      return 'Date List'
    case ColumnTypeEnum.USERID_LIST:
      return 'User ID List'
    case ColumnTypeEnum.ENTITYID_LIST:
      return 'Entity ID List'
    case ColumnTypeEnum.EVALUATIONID:
      return 'Evaluation'
    case ColumnTypeEnum.SUBMISSIONID:
      return 'Submission'
    case ColumnTypeEnum.JSON:
      return 'JSON'
    default:
      return type
  }
}

/**
 * Can the given type have a size?
 *
 * @param type
 * @return
 */
export function canHaveSize(type: ColumnType | ColumnTypeEnum): boolean {
  switch (type) {
    case ColumnTypeEnum.STRING:
    case ColumnTypeEnum.STRING_LIST:
    case ColumnTypeEnum.LINK:
      return true
    default:
      // all others are false
      return false
  }
}

export function canHaveMaxListLength(
  type: ColumnType | ColumnTypeEnum,
): boolean {
  switch (type) {
    case ColumnTypeEnum.STRING_LIST:
    case ColumnTypeEnum.BOOLEAN_LIST:
    case ColumnTypeEnum.DATE_LIST:
    case ColumnTypeEnum.INTEGER_LIST:
      return true
    default:
      // all others are false
      return false
  }
}

/**
 * Configure the facet selection based on the column type
 *
 * @param type a ColumnType for which to get the facet selection
 * @param isJsonSubColumnFacet is this a facet for a json subcolumn?
 * @return the allowed facetTypes, or null if faceting is not allowed
 */
export function configureFacetsForType(
  type: ColumnType | ColumnTypeEnum,
  isJsonSubColumnFacet: boolean,
): (FacetType | undefined)[] | null {
  let allowedFacetTypes: (FacetType | undefined)[] | null
  switch (type) {
    case ColumnTypeEnum.INTEGER:
    case ColumnTypeEnum.INTEGER_LIST:
      allowedFacetTypes = ['enumeration', 'range']
      break
    case ColumnTypeEnum.STRING:
    case ColumnTypeEnum.BOOLEAN:
    case ColumnTypeEnum.USERID:
    case ColumnTypeEnum.ENTITYID:
    case ColumnTypeEnum.STRING_LIST:
    case ColumnTypeEnum.BOOLEAN_LIST:
    case ColumnTypeEnum.ENTITYID_LIST:
    case ColumnTypeEnum.USERID_LIST:
    case ColumnTypeEnum.EVALUATIONID:
      allowedFacetTypes = ['enumeration']
      break
    case ColumnTypeEnum.DOUBLE:
    case ColumnTypeEnum.DATE:
    case ColumnTypeEnum.DATE_LIST:
      allowedFacetTypes = ['range']
      break
    default:
      allowedFacetTypes = null
  }

  if (allowedFacetTypes && !isJsonSubColumnFacet) {
    // jsonSubColumn facets MUST have a facet definition, but regular column models do not need one
    // So allow `undefined` for regular columnModels.
    allowedFacetTypes = [undefined, ...allowedFacetTypes]
  }
  return allowedFacetTypes
}

export function canHaveDefault(
  type: ColumnType | ColumnTypeEnum,
  isView: boolean,
  isJsonSubColumnFacet: boolean,
) {
  // SWC-6333: default types are not allowed in views
  if (!isView && !isJsonSubColumnFacet) {
    switch (type) {
      case ColumnTypeEnum.ENTITYID:
      case ColumnTypeEnum.FILEHANDLEID:
      case ColumnTypeEnum.USERID:
      case ColumnTypeEnum.MEDIUMTEXT:
      case ColumnTypeEnum.LARGETEXT:
      case ColumnTypeEnum.JSON:
        return false
      default:
        return true
    }
  } else {
    return false
  }
}

const DEFAULT_STRING_SIZE = 50
const MAX_STRING_SIZE = 1000

/**
 * Get the default max size for a given type.
 *
 * @param type
 * @return
 */
export function getMaxSizeForType(type: ColumnType | ColumnTypeEnum): number {
  switch (type) {
    case ColumnTypeEnum.STRING:
    case ColumnTypeEnum.STRING_LIST:
      return DEFAULT_STRING_SIZE
    case ColumnTypeEnum.LINK:
      return MAX_STRING_SIZE
    default:
      throw new Error(`Type is not known to have a max size: ${type}`)
  }
}

export function canHaveRestrictedValues(
  type: ColumnType | ColumnTypeEnum,
  isJsonSubColumnFacet: boolean,
): boolean {
  if (isJsonSubColumnFacet) {
    return false
  }
  switch (type) {
    case ColumnTypeEnum.STRING:
    case ColumnTypeEnum.INTEGER:
    case ColumnTypeEnum.ENTITYID:
      return true
    default:
      // all other are false
      return false
  }
}

/**
 * Creates the column models for a change request and returns
 * the change request to be passed to the Synapse backend.
 * @param accessToken
 * @param tableId
 * @param oldSchema
 * @param proposedSchema
 */
export async function createTableUpdateTransactionRequest(
  accessToken: string,
  tableId: string,
  oldSchema: ColumnModel[],
  proposedSchema: SetOptional<ColumnModel, 'id'>[],
): Promise<TableUpdateTransactionRequest> {
  // Create any models that do not have an ID, or that have changed
  const oldColumnModelId2Model: Map<string, ColumnModel> = new Map()
  for (const columnModel of oldSchema) {
    oldColumnModelId2Model.set(columnModel.id, columnModel)
  }

  // The newSchema will match the proposed schema, but column models that have been changed will have the ID stripped
  let newSchema: SetOptional<ColumnModel, 'id'>[] = []
  for (const m of proposedSchema) {
    const copy: SetOptional<ColumnModel, 'id'> = {
      ...m,
    }
    if (copy.id != null) {
      // any changes to the existing column model?
      const oldColumnModel: ColumnModel | undefined =
        oldColumnModelId2Model.get(copy.id)
      if (oldColumnModel != undefined && !isEqual(oldColumnModel, copy)) {
        delete copy.id
      }
    }
    newSchema.push(copy)
  }
  const createdColumnModels = (await createColumnModels(accessToken, newSchema))
    .list

  // now that all columns have been created, figure out the column changes (create, update, and no-op)
  // keep track of column ids to figure out what columns were deleted.
  const changes: ColumnChange[] = []
  const columnIds: Set<string | null> = new Set()
  for (let i = 0; i < proposedSchema.length; i++) {
    const oldColumnId: string | null = proposedSchema[i].id ?? null
    const newColumnId: string | null = createdColumnModels[i].id ?? null
    columnIds.add(oldColumnId)
    columnIds.add(newColumnId)
    if (oldColumnId !== newColumnId) {
      changes.push({ oldColumnId, newColumnId })
    }
  }

  // delete columns that are not represented in the changes already (create or update)
  for (const oldColumnModel of oldSchema) {
    const oldColumnId: string | null = oldColumnModel.id
    if (!columnIds.has(oldColumnId)) {
      changes.push({ oldColumnId, newColumnId: null })
    }
  }

  return {
    concreteType:
      'org.sagebionetworks.repo.model.table.TableUpdateTransactionRequest',
    entityId: tableId,
    changes: [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.TableSchemaChangeRequest',
        entityId: tableId,
        changes: changes,
        orderedColumnIds: createdColumnModels.map(cm => cm.id),
      },
    ],
  }
}
