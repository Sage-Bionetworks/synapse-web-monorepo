import { FacetColumnRequest } from './Table/FacetColumnRequest'
import { SearchFacetOption } from './Search'

/**
 * Request type for the new SearchQueryServicesApi.
 * Note: This API is not yet functional; mock implementations are used for development.
 * https://sagebionetworks.jira.com/browse/PORTALS-4134
 */
export type SearchQueryBundleRequest = {
  concreteType: 'org.sagebionetworks.repo.model.search.query.SearchQueryBundleRequest'
  query: {
    /** Optional free-text search term */
    queryTerm?: string
    /** Facet value/range filters to apply */
    selectedFacets?: FacetColumnRequest[]
    /** Configuration for which facets to return and how to sort them */
    facetOptions?: SearchFacetOption[]
    limit?: number
    offset?: number
  }
  /**
   * Bitmask specifying which parts of the response bundle to include.
   * Uses the same BUNDLE_MASK_* constants as QueryBundleRequest.
   */
  partMask?: number
}
