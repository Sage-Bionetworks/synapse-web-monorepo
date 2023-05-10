// https://rest-docs.synapse.org/rest/org/sagebionetworks/reflection/model/PaginatedResults.html
export type PaginatedResults<T> = {
  totalNumberOfResults?: number //	Calculating the actual totalNumberOfResults is not longer supported. Therefore, for each page, the totalNumberOfResults is estimated using the current page, limit, and offset. When the page size equals the limit, the totalNumberOfResults will be offset+pageSize+ 1. Otherwise, the totalNumberOfResults will be offset+pageSize.
  results: T[] // The the id of the entity to which this reference refers
}
