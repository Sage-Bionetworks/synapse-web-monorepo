import {
  SearchQueryResultClickedEventData,
  SearchQuerySubmittedEventData,
  SearchResultPageReturnedEventData,
  SearchResultReturnedEventData,
} from './SearchEventTypes'
import { sendAnalyticsEvent } from './sendAnalyticsEvent'

/**
 * Submits an event to Google Analytics corresponding to a submitted search query.
 *
 * @param eventData - The event data associated with the search query
 */
export function sendSearchQuerySubmittedEvent(
  eventData: SearchQuerySubmittedEventData,
) {
  sendAnalyticsEvent('search_query_submitted', eventData)
}

/**
 * Submits an event to Google Analytics corresponding to a returned page of search results.
 *
 * @param eventData - The event data associated with the search results
 */
export function sendSearchResultsReturnedEvent(
  eventData: SearchResultPageReturnedEventData,
) {
  sendAnalyticsEvent('search_result_page_returned', eventData)
}

/**
 * Submits an event to Google Analytics corresponding to an individual returned search result.
 *
 * @param eventData - The event data associated with the search result
 */
export function sendSearchResultReturnedEvent(
  eventData: SearchResultReturnedEventData,
) {
  sendAnalyticsEvent('search_result_returned', eventData)
}

/**
 * Submits an event to Google Analytics corresponding to a clicked search result.
 *
 * @param eventData - The event data associated with the search result
 */
export function sendSearchResultClickedEvent(
  eventData: SearchQueryResultClickedEventData,
) {
  sendAnalyticsEvent('search_result_clicked', eventData)
}
