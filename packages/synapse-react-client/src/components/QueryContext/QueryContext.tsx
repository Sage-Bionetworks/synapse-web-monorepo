import { LockedColumn } from '@/utils'
import { ImmutableTableQueryResult } from '@/utils/hooks/useImmutableTableQuery/useImmutableTableQuery'
import { QueryBundleRequest } from '@sage-bionetworks/synapse-types'
import { createContext, PropsWithChildren, useContext } from 'react'
import { ReadonlyDeep } from 'type-fest'
import { TableQueryUseQueryOptions } from '../QueryWrapper/TableQueryUseQueryOptions'

export type QueryContextType = {
  isInfinite: boolean
  /** The entity ID parsed from the SQL query */
  entityId?: string
  /** The optional version number of the table parsed from the SQL query */
  versionNumber: number | undefined
  currentQueryRequest: ReadonlyDeep<QueryBundleRequest>
  nextQueryRequest: ReadonlyDeep<QueryBundleRequest>
  /** Returns a deep clone of the current query bundle request */
  getCurrentQueryRequest: () => QueryBundleRequest
  /** Returns a deep clone of the initial query bundle request */
  getInitQueryRequest: () => QueryBundleRequest
  /** Updates the current query with the passed request */
  executeQueryRequest: ImmutableTableQueryResult['setQuery']
  /** Resets the query to its initial state, clearing all filters added by the user */
  resetQuery: ImmutableTableQueryResult['resetQuery']
  resetDebounceTimer: ImmutableTableQueryResult['resetDebounceTimer']
  addValueToSelectedFacet: ImmutableTableQueryResult['addValueToSelectedFacet']
  setRangeFacetValue: ImmutableTableQueryResult['setRangeFacetValue']
  removeSelectedFacet: ImmutableTableQueryResult['removeSelectedFacet']
  removeValueFromSelectedFacet: ImmutableTableQueryResult['removeValueFromSelectedFacet']
  /** Removes a matching QueryFilter from the query */
  removeQueryFilter: ImmutableTableQueryResult['removeQueryFilter']
  /** Removes a value from a QueryFilter. If no more values remain in the filter, the filter is also removed */
  removeValueFromQueryFilter: ImmutableTableQueryResult['removeValueFromQueryFilter']
  /** Whether facets are available to be filtered upon based on the current data */
  hasFacetedSelectColumn: boolean
  /** Returns true iff the current request has resettable filters applied via facet filters or additionalFilters. Excludes filters applied to a locked column */
  hasResettableFilters: boolean
  // Either open benefactor entity page in a new window or open the sharing settings dialog (in Synapse.org)
  onViewSharingSettingsClicked?: (benefactorId: string) => void
  /** Combines two faceted columns into a single inclusive range selector */
  combineRangeFacetConfig?: ReadonlyDeep<CombineRangeFacetConfig>

  /** react-query UseQueryOptions to fetch the current page of table data */
  rowDataQueryOptions: TableQueryUseQueryOptions['rowDataQueryOptions']
  /** react-query UseInfiniteQueryOptions to fetch infinite rows of table data */
  rowDataInfiniteQueryOptions: TableQueryUseQueryOptions['rowDataInfiniteQueryOptions']
  /** react-query UseQueryOptions to fetch the current query metadata (e.g. column models, facet statistics, total number of rows) */
  queryMetadataQueryOptions: TableQueryUseQueryOptions['queryMetadataQueryOptions']

  /** Navigates to a particular page. The first page has value 1. Note that this has no effect if `isInfinite` is true */
  goToPage: (pageNum: number) => void
  /** The current page number, where page 1 is the first page. Note that this has no effect if `isInfinite` is true. */
  currentPage: number
  /** Updates the page size */
  setPageSize: (pageSize: number) => void
  /** The current page size. */
  pageSize: number

  /**
   * A column name may be "locked" so that it is both (1) not shown to the user that the filter is active, and (2) not modifiable by the user.
   * For example, we may show only the data matching a particular facet value on a Details Page without implying that the shown data is part of a larger table.
   * The presence of a locked filter will result in a client-side modification of the active query and result bundle data.
   */
  lockedColumn: LockedColumn | undefined

  /**
   * PORTALS-3071: For Tables that are not entityviews or a datasets, keep track of the column that should be used for the row entity ID
   */
  fileIdColumnName: string | undefined
  /**
   * PORTALS-3071: For Tables that are not entityviews or a datasets, keep track of the column that should be used for the row (entity) version
   */
  fileVersionColumnName: string | undefined
  /**
   * PORTALS-3071: For Tables that are not entityviews or a datasets, keep track of the column that should be used for the row (entity) name
   */
  fileNameColumnName: string | undefined
}

/**
 * This must be exported to use the context in class components.
 */
export const QueryContext = createContext<QueryContextType | undefined>(
  undefined,
)

export type QueryContextProviderProps = PropsWithChildren<{
  queryContext: QueryContextType
}>

/**
 * Provides data related to a Synapse table query, and functions for iterating through pages of the data.
 */
export const QueryContextProvider = ({
  children,
  queryContext,
}: QueryContextProviderProps) => {
  return (
    <QueryContext.Provider value={queryContext}>
      {children}
    </QueryContext.Provider>
  )
}

/**
 * Returns the QueryContext, including QueryResultBundle
 *
 * @template TIncludedFields - If you know which specific optional fields will be included in the QueryResultBundle,
 * you can specify them in the generic TIncludedFields
 * @template ExcludeOtherFields - If set to true, will remove optional fields besides those specified in TIncludedFields,
 * default false
 */
export function useQueryContext(): QueryContextType {
  const context = useContext(QueryContext)
  if (context === undefined) {
    throw new Error('useQueryContext must be used within a QueryWrapper')
  }
  return context
}

export type CombineRangeFacetConfig = {
  minFacetColumn: string
  maxFacetColumn: string
  label: string
}

export const QueryContextConsumer = QueryContext.Consumer
