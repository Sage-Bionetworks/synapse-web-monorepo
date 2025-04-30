import { FacetColumnRequest } from '@sage-bionetworks/synapse-types'

/**
 * Determines which facet filters should be shown after loading a new bundle. The shown facets will be the first
 * three available facets, plus any other facets that have a filter applied.
 * @param facetColumns
 * @param selectedFacets
 * @returns the columnNames of the facets that should be shown.
 */
export function getDefaultShownFacetFilters(
  facetColumns: string[],
  selectedFacets?: FacetColumnRequest[],
  initialExpandedFacetControls?: string[],
): Set<string> {
  const columnsWithExistingFilters = (selectedFacets ?? []).map(
    fcr => fcr.columnName,
  )
  if (initialExpandedFacetControls == undefined) {
    return new Set([...facetColumns.slice(0, 3), ...columnsWithExistingFilters])
  } else {
    //  initialExpandedFacetControls is set, use it
    const initialExpandedFacetControlsSet = new Set(
      initialExpandedFacetControls,
    )
    const availableInitialExpandedFacetControls = facetColumns.filter(
      columnName => initialExpandedFacetControlsSet.has(columnName),
    )
    const fillerExpandedFacetControls =
      availableInitialExpandedFacetControls.length < 3
        ? facetColumns.slice(0, 3)
        : []
    return new Set([
      ...fillerExpandedFacetControls,
      ...availableInitialExpandedFacetControls,
      ...columnsWithExistingFilters,
    ])
  }
}
