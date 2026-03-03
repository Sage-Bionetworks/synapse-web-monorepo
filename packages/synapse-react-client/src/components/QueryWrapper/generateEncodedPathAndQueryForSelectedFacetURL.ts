import {
  FacetColumnValuesRequest,
  Query,
} from '@sage-bionetworks/synapse-types'
import { generateCompressedQueryURL } from '../../utils/functions/deepLinkingUtils'

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

export const generateEncodedPathAndQueryForSelectedFacetURL = async (
  path: string,
  sql: string,
  selectedFacets: SelectedFacet[],
): Promise<string> => {
  const currentQuery: Query = {
    sql,
    selectedFacets: formatSelectedFacetsRequest(selectedFacets),
  }

  const initQuery: Query = {
    sql,
  }

  return generateCompressedQueryURL(
    path,
    'QueryWrapper',
    0,
    currentQuery,
    initQuery,
  )
}
