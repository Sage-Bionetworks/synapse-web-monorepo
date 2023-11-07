import {
  ColumnModel,
  ColumnType,
  ColumnTypeEnum,
  Entity,
  ENTITY_VIEW_TYPE_MASK_DATASET,
  ENTITY_VIEW_TYPE_MASK_FILE,
  FacetType,
  JsonSubColumnModel,
  ViewEntityType,
  ViewScope,
} from '@sage-bionetworks/synapse-types'
import { SetOptional } from 'type-fest'
import {
  ColumnModelFormData,
  JsonSubColumnModelFormData,
} from './TableColumnSchemaFormReducer'
import {
  convertToEntityType,
  isDataset,
  isDatasetCollection,
  isEntityView,
  isSubmissionView,
} from '../../utils/functions/EntityTypeUtils'

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
): ColumnTypeEnum[] {
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
 * Transform the form data for the TableColumnSchemaForm to ColumnModels to be sent to Synapse
 * @param formData the form data to transform
 */
export function transformFormDataToColumnModels(
  formData: ColumnModelFormData[],
): SetOptional<ColumnModel, 'id'>[] {
  return formData.map(
    (formEntry: ColumnModelFormData): SetOptional<ColumnModel, 'id'> => {
      // Remove the isSelected field because it was only used for the UI.
      const { isSelected, ...rest } = formEntry
      const columnModel = rest as SetOptional<ColumnModel, 'id'>
      if (columnModel.jsonSubColumns) {
        columnModel.jsonSubColumns = (
          columnModel.jsonSubColumns as JsonSubColumnModelFormData[]
        ).map(
          (
            jsonSubColumnFormData: JsonSubColumnModelFormData,
          ): JsonSubColumnModel => {
            // isSelected field from the subcolumn for the same reason
            const { isSelected, ...rest } = jsonSubColumnFormData
            return {
              ...rest,
            }
          },
        )
      }
      return columnModel
    },
  )
}

/**
 * Transform ColumnModels returned by Synapse into the form data for the TableColumnSchemaForm.
 * Default column models, if available, are used to determine which columns should not be editable in the form.
 * @param columnModels
 * @param defaultColumns
 */
export function transformColumnModelsToFormData(
  columnModels: SetOptional<ColumnModel, 'id'>[],
  defaultColumns: ColumnModel[] = [],
): ColumnModelFormData[] {
  return columnModels.map((cm): ColumnModelFormData => {
    return {
      ...cm,
      isSelected: false,
      // If the name matches a known default column model, then we consider it to be a default column model itself
      isOriginallyDefaultColumn: defaultColumns.some(
        dcm => dcm.name === cm.name,
      ),
      jsonSubColumns: cm.jsonSubColumns
        ? cm.jsonSubColumns.map(jsc => ({
            ...jsc,
            isSelected: false,
          }))
        : undefined,
    }
  })
}

export function getViewScopeForEntity(entity: Entity): ViewScope | undefined {
  if (isEntityView(entity)) {
    return {
      scope: entity.scopeIds,
      viewTypeMask: entity.viewTypeMask,
      viewEntityType: convertToEntityType(
        entity.concreteType,
      ) as ViewEntityType,
    }
  } else if (isDataset(entity) || isDatasetCollection(entity)) {
    const mask = isDataset(entity)
      ? ENTITY_VIEW_TYPE_MASK_FILE
      : ENTITY_VIEW_TYPE_MASK_DATASET
    return {
      scope: (entity.items ?? []).map(
        item => `${item.entityId}.${item.versionNumber}`,
      ),
      viewTypeMask: mask,
      viewEntityType: convertToEntityType(
        entity.concreteType,
      ) as ViewEntityType,
    }
  } else if (isSubmissionView(entity)) {
    return {
      scope: entity.scopeIds,
      viewTypeMask: undefined,
      viewEntityType: convertToEntityType(
        entity.concreteType,
      ) as ViewEntityType,
    }
  }
  return undefined
}
