import {
  FacetColumnResult,
  FacetColumnResultValueCount,
} from '@sage-bionetworks/synapse-types'

/**
 * The count the server returns for a facet value whose count is below the AGGREGATE_DATA suppression threshold (k),
 * in place of the count or, for a binned facet, the bin's lower bound (PLFM-10107).
 */
export const SUPPRESSED_FACET_VALUE_COUNT = -1

export function isSuppressedFacetValueCount(count: number): boolean {
  return count === SUPPRESSED_FACET_VALUE_COUNT
}

/**
 * An enumeration facet as the UI lists it, whether the server returned exact counts (FacetColumnResultValues) or
 * binned counts (FacetColumnResultBinnedValues, from the ROUNDING post-processing algorithm).
 */
export type EnumerationFacet = {
  columnName: string
  /** When present, the facet is for the sub-column of `columnName` at this JSON path. */
  jsonPath?: string
  /**
   * Every returned value. For a binned facet, each count is the midpoint of the value's bin, so a value whose exact
   * count is 0 still has a positive count. A count below the suppression threshold is
   * {@link SUPPRESSED_FACET_VALUE_COUNT}.
   */
  facetValues: FacetColumnResultValueCount[]
  /** Set for a binned facet: each value's exact count lies within count ± (binSize - 1) / 2. */
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
    case 'org.sagebionetworks.repo.model.table.FacetColumnResultBinnedValues': {
      // The midpoint of [binMin, binMin + binSize - 1]: counts, plot lengths and sorting err neither high nor low.
      const halfBinWidth = (facet.binSize - 1) / 2
      return {
        columnName: facet.columnName,
        jsonPath: facet.jsonPath,
        binSize: facet.binSize,
        facetValues: facet.binnedValues.map(
          ({ value, binMin, isSelected }) => ({
            value,
            count: isSuppressedFacetValueCount(binMin)
              ? SUPPRESSED_FACET_VALUE_COUNT
              : binMin + halfBinWidth,
            isSelected,
          }),
        ),
      }
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
