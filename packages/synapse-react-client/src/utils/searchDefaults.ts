import {
  SearchQuery,
  SearchFieldName,
  SearchFacetSort,
} from '@sage-bionetworks/synapse-types'

// Global default search configuration
export const DEFAULT_SEARCH_QUERY: SearchQuery = {
  queryTerm: [],
  facetOptions: [
    {
      name: SearchFieldName.ENTITY_TYPE,
      maxResultCount: 300,
      sortType: SearchFacetSort.COUNT,
    },
    {
      name: SearchFieldName.CONSORTIUM,
      maxResultCount: 300,
      sortType: SearchFacetSort.COUNT,
    },
    {
      name: SearchFieldName.MODIFIED_ON,
      maxResultCount: 300,
      sortType: SearchFacetSort.COUNT,
    },
    {
      name: SearchFieldName.MODIFIED_BY,
      maxResultCount: 300,
      sortType: SearchFacetSort.COUNT,
    },
    {
      name: SearchFieldName.CREATED_ON,
      maxResultCount: 300,
      sortType: SearchFacetSort.COUNT,
    },
    {
      name: SearchFieldName.TISSUE,
      maxResultCount: 300,
      sortType: SearchFacetSort.COUNT,
    },
    {
      name: SearchFieldName.CREATED_BY,
      maxResultCount: 300,
      sortType: SearchFacetSort.COUNT,
    },
  ],
  start: 0,
  size: 30,
}
