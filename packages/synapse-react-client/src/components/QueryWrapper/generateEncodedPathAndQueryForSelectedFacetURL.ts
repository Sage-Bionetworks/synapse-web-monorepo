import {
  FacetColumnValuesRequest,
  Query,
} from '@sage-bionetworks/synapse-types'

export type SelectedFacet = {
  facet: string
  facetValue: string
}

const formatSelectedFacetsRequest = (
  selectedFacets: SelectedFacet[],
): FacetColumnValuesRequest[] => {
  return selectedFacets.map(selectedFacet => {
    return {
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
      columnName: selectedFacet.facet,
      facetValues: [selectedFacet.facetValue],
    }
  })
}

const generateEncodedQueryForSelectedFacetURL = (
  sql: string,
  selectedFacets: SelectedFacet[],
): string => {
  const query: Query = {
    sql,
    selectedFacets: formatSelectedFacetsRequest(selectedFacets),
  }
  return encodeURIComponent(JSON.stringify(query))
}

export const generateEncodedPathAndQueryForSelectedFacetURL = (
  path: string,
  sql: string,
  selectedFacets: SelectedFacet[],
): string => {
  const encodedQuery = generateEncodedQueryForSelectedFacetURL(
    sql,
    selectedFacets,
  )
  return `${path}?QueryWrapper0=${encodedQuery}`
}
