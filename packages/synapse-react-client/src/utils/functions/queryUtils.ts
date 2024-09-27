import { cloneDeep, isEqual, isEqualWith, isMatch, isNil } from 'lodash-es'
import * as SynapseConstants from '../SynapseConstants'
import { BUNDLE_MASK_QUERY_RESULTS } from '../SynapseConstants'
import {
  ColumnModel,
  ColumnTypeEnum,
  FacetColumnRequest,
  FacetColumnResult,
  JsonSubColumnModel,
  Query,
  QueryBundleRequest,
  QueryResultBundle,
  SelectColumn,
  Table,
} from '@sage-bionetworks/synapse-types'
import {
  isColumnMultiValueFunctionQueryFilter,
  isColumnSingleValueQueryFilter,
  LockedColumn,
  UniqueFacetIdentifier,
} from '../types'
import {
  hasFilesInView,
  isDataset,
  isDatasetCollection,
  isEntityView,
  isFileView,
} from './EntityTypeUtils'

/**
 * Retrieve the index of a column using the column name
 * @param name the column name
 * @param result the QueryResultBundle containing the columns
 * @returns The index of the column, or -1 if the column doesn't exist in the result
 */
export const getFieldIndex = (name?: string, result?: QueryResultBundle) => {
  if (name == undefined) {
    return -1
  }
  return (
    result?.selectColumns?.findIndex(el => {
      return el.name === name
    }) ?? -1
  )
}

/**
 * Retrieve the index of a column using the header column name found inthe query results.
 * Ignores case.
 * @param name the column name
 * @param result the QueryResultBundle containing the columns
 * @returns The index of the column, or -1 if the column doesn't exist in the result
 */
export const getHeaderIndex = (
  name: string,
  result: QueryResultBundle | undefined,
) => {
  const nameLowercase = name.toLowerCase()
  return (
    result?.queryResult?.queryResults.headers.findIndex(el => {
      return el.name.toLowerCase() === nameLowercase
    }) ?? -1
  )
}

/**
 * Returns the indices of the selectColumns with the specified type
 * @param columnType
 * @param selectColumns
 */
export function getTypeIndices(
  columnType: ColumnTypeEnum,
  selectColumns: SelectColumn[] = [],
): number[] {
  return selectColumns.reduce((prev: number[], curr, index) => {
    if (curr.columnType === columnType) {
      return [...prev, index]
    }
    return prev
  }, [])
}

export const hasFacetedSelectColumn = (
  facets?: FacetColumnResult[],
  selectColumns?: SelectColumn[],
): boolean => {
  /**
   *  Facets are available iff
   *    * there is at least one facet AND
   *    * each facet has a corresponding columnModel in the selectColumns AND
   *    * each facets has a valid value other than the null/not set value
   */
  if (facets == null || selectColumns == null) {
    return false
  }

  if (facets.length === 0 || selectColumns.length === 0) {
    return false
  }

  const facetsWithValuesAndColumnModels = facets.filter(facet => {
    return (
      !isSingleNotSetValue(facet) &&
      selectColumns.find(model => model.name === facet.columnName)
    )
  })

  return facetsWithValuesAndColumnModels.length > 0
}

export const isSingleNotSetValue = (facet: FacetColumnResult): boolean => {
  return (
    facet.facetType === 'enumeration' &&
    facet.facetValues.length == 1 &&
    facet.facetValues[0].value == SynapseConstants.VALUE_NOT_SET
  )
}

// TODO Instead of removing the facet from the data, the facet renderers should just be aware of what to hide
export function removeLockedColumnFromFacetData(
  data?: QueryResultBundle,
  lockedColumn?: LockedColumn,
): QueryResultBundle | undefined {
  const lockedColumnName = lockedColumn?.columnName
  if (lockedColumnName && data) {
    // for details page, return data without the "locked" facet
    const dataCopy: QueryResultBundle = cloneDeep(data)
    const facets = dataCopy.facets?.filter(
      item => item.columnName.toLowerCase() !== lockedColumnName.toLowerCase(),
    )
    dataCopy.facets = facets
    return dataCopy
  } else {
    // for other pages, just return the data
    return data
  }
}

/**
 * Returns true iff the query has filters applied that can be reset.
 * This includes facet filters and additional filters that are not applied to a locked column.
 */
export function hasResettableFilters(
  query: Query,
  lockedColumn?: LockedColumn,
): boolean {
  const hasFacetFilters =
    Array.isArray(query.selectedFacets) &&
    query.selectedFacets.filter(
      facet =>
        facet.columnName.toLowerCase() !==
        lockedColumn?.columnName?.toLowerCase(),
    ).length > 0
  const hasAdditionalFilters =
    Array.isArray(query.additionalFilters) &&
    query.additionalFilters.filter(queryFilter =>
      isColumnSingleValueQueryFilter(queryFilter) ||
      isColumnMultiValueFunctionQueryFilter(queryFilter)
        ? queryFilter.columnName.toLowerCase() !==
          lockedColumn?.columnName?.toLowerCase()
        : true,
    ).length > 0

  return hasFacetFilters || hasAdditionalFilters
}

/**
 * Returns true iff a table query can be added to the download list.
 * @param entity
 * @param entityColumnId
 */
export function canTableQueryBeAddedToDownloadList<T extends Table = Table>(
  entity?: T,
  entityColumnId?: string,
) {
  const viewCannotIncludeFiles =
    // EntityViews without the file bit mask cannot contain files
    (entity && isEntityView(entity) && !hasFilesInView(entity)) ||
    // DatasetCollections cannot contain files
    (entity && isDatasetCollection(entity))

  if (viewCannotIncludeFiles) {
    return false
  }

  return Boolean(
    entityColumnId ||
      (entity &&
        ((isEntityView(entity) && isFileView(entity)) || isDataset(entity))),
  )
}

/**
 * Returns true if the queries necessarily return the same result set, i.e. if they have identical parameters other than
 * limit, offset, sort.
 *
 * Note that this does not query the actual tables, so this only captures the semantic equivalence of the queries.
 */
export function queryRequestsHaveSameTotalResults(
  request1: Query,
  request2: Query,
) {
  const clone1 = cloneDeep(request1)
  delete clone1.limit
  delete clone1.offset
  delete clone1.sort
  const clone2 = cloneDeep(request2)
  delete clone2.limit
  delete clone2.offset
  delete clone2.sort
  return isEqualWith(clone1, clone2, (value1, value2) => {
    if (isNil(value1) && isNil(value2)) {
      // Consider all nil (e.g. undefined/null) values equal
      return true
    }
    return isEqual(value1, value2)
  })
}

/**
 * Remove null/empty values from the query parameters where an undefined value is equivalent.
 *
 * This will ensure a query object is as simple as possible for URL search parameters and also increases the
 * likelihood of a cache hit.
 * @param q
 */
export function removeEmptyQueryParams(q: Query) {
  const query = cloneDeep(q)

  if (query.limit == null) {
    delete query.limit
  }
  if (query.offset == null || query.offset == 0) {
    delete query.offset
  }

  if (query.sort == null || query.sort.length == 0) {
    delete query.sort
  }

  if (query.selectedFacets == null || query.selectedFacets.length == 0) {
    delete query.selectedFacets
  }

  if (query.additionalFilters == null || query.additionalFilters.length == 0) {
    delete query.additionalFilters
  }

  return query
}

/**
 * Given a FacetColumnResult and a set of ColumnModels, return the ColumnModel that
 * matches the FacetColumnResult.
 * @param facet
 * @param columnModels
 */
export function getCorrespondingColumnForFacet(
  facet: FacetColumnResult,
  columnModels: ColumnModel[],
): ColumnModel | JsonSubColumnModel | undefined {
  let columnModel: ColumnModel | JsonSubColumnModel | undefined =
    columnModels.find(model => model.name === facet.columnName)
  if (facet.jsonPath && columnModel && columnModel.jsonSubColumns) {
    columnModel = columnModel.jsonSubColumns.find(
      cm => cm.jsonPath === facet.jsonPath,
    )
  }
  return columnModel
}

/**
 * Given a set of FacetColumnRequests, return the FacetColumnRequest that matches the given UniqueFacetIdentifier.
 * @param facetDefinition
 * @param selectedFacets
 */
export function getCorrespondingSelectedFacet(
  facetDefinition: UniqueFacetIdentifier,
  selectedFacets?: FacetColumnRequest[],
): FacetColumnRequest | undefined {
  return selectedFacets?.find(selectedFacet =>
    facetObjectMatchesDefinition(facetDefinition, selectedFacet),
  )
}

export function facetObjectMatchesDefinition(
  facetDefinition:
    | UniqueFacetIdentifier
    | FacetColumnRequest
    | FacetColumnResult,
  facetObject: UniqueFacetIdentifier | FacetColumnRequest | FacetColumnResult,
) {
  return isMatch(
    {
      columnName: facetDefinition.columnName,
      jsonPath: facetDefinition.jsonPath,
    },
    { columnName: facetObject.columnName, jsonPath: facetObject.jsonPath },
  )
}

export function partitionQueryBundleRequestIntoRowsAndMetadata(
  queryBundleRequest: QueryBundleRequest,
): {
  rowDataRequest: QueryBundleRequest
  queryMetadataRequest: QueryBundleRequest
} {
  const rowDataRequest: QueryBundleRequest = {
    ...queryBundleRequest,
    // Get just the rows (if they were originally requested)
    partMask: queryBundleRequest.partMask & BUNDLE_MASK_QUERY_RESULTS,
  }

  const queryMetadataRequest: QueryBundleRequest = {
    ...queryBundleRequest,
    query: {
      ...queryBundleRequest.query,
      // Remove query fields that don't affect the results.
      offset: undefined,
      limit: undefined,
      sort: undefined,
    },
    // Bitwise remove the query result flag from the mask
    partMask: queryBundleRequest.partMask & ~BUNDLE_MASK_QUERY_RESULTS,
  }

  return {
    rowDataRequest,
    queryMetadataRequest,
  }
}
