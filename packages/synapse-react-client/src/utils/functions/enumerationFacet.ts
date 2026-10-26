import {
  FacetColumnResult,
  FacetColumnResultValueCount,
} from '@sage-bionetworks/synapse-types'

/**
 * An enumeration facet as the UI lists it, whether the server returned exact counts (FacetColumnResultValues) or
 * binned counts (FacetColumnResultBinnedValues, from the ROUNDING post-processing algorithm).
 */
export type EnumerationFacet = {
  columnName: string
  /** When present, the facet is for the sub-column of `columnName` at this JSON path. */
  jsonPath?: string
  /** Every returned value. For a binned facet, each count is the value's bin minimum, which may be 0. */
  facetValues: FacetColumnResultValueCount[]
  /** Set for a binned facet: each value's exact count lies within [count, count + binSize - 1]. */
  binSize?: number
}

/**
 * Returns the facet as an EnumerationFacet, or undefined for a range facet.
 */
export function getEnumerationFacet(
  facet: FacetColumnResult,
): EnumerationFacet | undefined {
  switch (facet.concreteType) {
    case 'org.sagebionetworks.repo.model.table.FacetColumnResultValues':
      return facet
    case 'org.sagebionetworks.repo.model.table.FacetColumnResultBinnedValues':
      return {
        columnName: facet.columnName,
        jsonPath: facet.jsonPath,
        binSize: facet.binSize,
        facetValues: facet.binnedValues.map(
          ({ value, binMin, isSelected }) => ({
            value,
            count: binMin,
            isSelected,
          }),
        ),
      }
    case 'org.sagebionetworks.repo.model.table.FacetColumnResultRange':
      return undefined
  }
}

/**
 * The enumeration facets in a list of facets, each as an EnumerationFacet.
 */
export function getEnumerationFacets(
  facets: readonly FacetColumnResult[] | undefined,
): EnumerationFacet[] {
  return (facets ?? []).flatMap(facet => getEnumerationFacet(facet) ?? [])
}
