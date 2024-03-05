import { Query } from '@sage-bionetworks/synapse-types'

const generateEncodedQueryForSelectedFacetURL = (
  sql: string,
  facet: string,
  facetValue: string,
): string => {
  const query: Query = {
    sql,
    selectedFacets: [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        columnName: facet,
        facetValues: [facetValue],
      },
    ],
  }
  return encodeURIComponent(JSON.stringify(query))
}

export const generateEncodedPathAndQueryForSelectedFacetURL = (
  path: string,
  sql: string,
  facet: string,
  facetValue: string,
): string => {
  const encodedQuery = generateEncodedQueryForSelectedFacetURL(
    sql,
    facet,
    facetValue,
  )
  return `${path}?QueryWrapper0=${encodedQuery}`
}
