import { cloneDeep } from 'lodash-es'
import { SynapseClient, SynapseConstants } from '..'
import { LockedColumn } from '../../containers/QueryContext'
import {
  FacetColumnResult,
  Query,
  QueryBundleRequest,
  QueryResultBundle,
  SelectColumn,
} from '../synapseTypes/'
import {
  isColumnMultiValueFunctionQueryFilter,
  isColumnSingleValueQueryFilter,
} from '../synapseTypes/Table/QueryFilter'

type PartialStateObject = {
  hasMoreData: boolean
  data: QueryResultBundle
}

/**
 * Retrieve the index of a column using the column name
 * @param name the column name
 * @param result the QueryResultBundle containing the columns
 * @returns The index of the column, or -1 if the column doesn't exist in the result
 */
export const getFieldIndex = (
  name: string,
  result: QueryResultBundle | undefined,
) => {
  return (
    result?.selectColumns?.findIndex(el => {
      return el.name === name
    }) ?? -1
  )
}

/**
 * Grab the next page of data, pulling in 25 more rows.
 *
 * @param {*} queryRequest Query request as specified by
 *                         https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/Query.html
 */
export const getNextPageOfData = async (
  queryRequest: QueryBundleRequest,
  data: QueryResultBundle,
  token?: string,
) => {
  return await SynapseClient.getQueryTableResults(queryRequest, token)
    .then((newData: QueryResultBundle) => {
      const oldData: QueryResultBundle = cloneDeep(data)!
      // push on the new data retrieved from the API call
      const hasMoreData =
        newData.queryResult!.queryResults.rows.length ===
          queryRequest.query.limit ?? SynapseConstants.DEFAULT_PAGE_SIZE
      oldData.queryResult!.queryResults.rows.push(
        ...newData.queryResult!.queryResults.rows,
      )
      const newState: PartialStateObject = {
        hasMoreData,
        data: oldData,
      }
      return newState
    })
    .catch(err => {
      console.log('Failed to get data ', err)
      return {} as PartialStateObject
    })
}

export const isFacetAvailable = (
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
      facet => facet.columnName !== lockedColumn?.columnName,
    ).length > 0
  const hasAdditionalFilters =
    Array.isArray(query.additionalFilters) &&
    query.additionalFilters.filter(queryFilter =>
      isColumnSingleValueQueryFilter(queryFilter) ||
      isColumnMultiValueFunctionQueryFilter(queryFilter)
        ? queryFilter.columnName !== lockedColumn?.columnName
        : true,
    ).length > 0

  return hasFacetFilters || hasAdditionalFilters
}
