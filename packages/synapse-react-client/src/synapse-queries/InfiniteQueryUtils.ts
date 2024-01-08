import { PaginatedResults } from '@sage-bionetworks/synapse-types'

/**
 * Returns a function that can be used for `getNextPageParam` in `useInfiniteQuery` when the results are
 * Synapse PaginatedResults
 * @param limit
 */
export function getNextPageParamForPaginatedResults(
  lastPage: PaginatedResults<unknown>,
  pages: PaginatedResults<unknown>[],
) {
  // totalNumberOfResults is deprecated, it may not be the correct value
  // For a given service, one of the following is true about totalNumberOfResults
  //   1. If this is not the last page, it's offset + page.results.length + 1
  //   2. If this is the last page, it's the correct total number of results
  //   3. It is always the correct value, regardless of the page
  //   4. It is not present
  // We need to handle all of those cases
  const totalFetchedResults = pages.reduce((acc, page) => {
    return acc + page.results.length
  }, 0)
  if (lastPage.totalNumberOfResults) {
    if (lastPage.totalNumberOfResults > totalFetchedResults) {
      // If the total is present and is greater than everything we've fetched so far, make the new limit the total fetched
      return totalFetchedResults
    } else {
      // There are no more pages to fetch
      return undefined
    }
  } else {
    // If totalNumberOfResults is not present, the limit for the next page will be the total number of fetched results
    if (lastPage.results.length > 0) {
      return totalFetchedResults
    }
    // If the last page has no items, we've hit the end. No more pages to fetch
    // We will end up with an empty last page, but that's ok
    else return undefined
  }
}
