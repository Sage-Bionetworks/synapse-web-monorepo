/**
 * When displaying that there are no results, there are two scenarios:
 * 1. Interactive - the user can modify the query and may have chosen a query with no results
 *    - If the user has not modified the query, show a message that the table is empty
 *    - If the user has modified the query, show a message that there are no results and to try a different input
 * 2. Static - the user cannot modify the query. Show a message that there is no content available.
 */
export enum NoContentPlaceholderType {
  INTERACTIVE = 'INTERACTIVE',
  STATIC = 'STATIC',
}
