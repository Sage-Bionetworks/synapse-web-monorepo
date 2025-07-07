/** The 'type' of search that the user is performing, typically corresponding to a specific place in the UI */
export type SearchContext = 'synapse_entity' | 'synapse_team' | 'synapse_user'

/** The type of item that was returned in the search results */
export type SearchItemType = 'entity' | 'team' | 'user'

/** Event data associated with a search query */
export type SearchQueryEventData = {
  /** The search term that the user entered */
  query_term: string
  /** The context in which the user performed the search */
  search_context: SearchContext
  /** Serialized boolean filter(s) that may have been applied along with the query_term */
  serialized_boolean_query?: string
  /** Serialized range filter(s) that may have been applied along with the query_term */
  serialized_range_query?: string
  /** The offset of the first result of the page. 0-indexed */
  start_index: number
  /** The page number of the displayed search results. 1-indexed */
  page_index: number
  /** True if the search was performed using the AWS OpenSearch backend */
  opensearch_enabled: boolean
}

/** Event data for the submission of a search query */
export type SearchQuerySubmittedEventData = SearchQueryEventData

/** Event data for the return of a page of search results */
export type SearchResultPageReturnedEventData = SearchQueryEventData & {
  /** The total number of results yielded by this query, if provided by the server */
  total_results?: number
}

/** Event data associated with an individual search result */
export type SearchResultEventData = SearchQueryEventData & {
  /** The type of the item that was returned */
  item_type: SearchItemType
  /** The ID of the item that was returned */
  item_id: string
  /** The rank of the item that was returned in those search results */
  rank: number
}

/** Event data for the return of an individual search result */
export type SearchResultReturnedEventData = SearchResultEventData

/** Event data for when an individual search result is clicked */
export type SearchQueryResultClickedEventData = SearchResultEventData
