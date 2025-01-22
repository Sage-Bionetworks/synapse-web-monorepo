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
  defaultVisibleFacetColumnCount?: number,
): Set<string> {
  const columnsWithExistingFilters = (selectedFacets ?? []).map(
    fcr => fcr.columnName,
  )
  return new Set([
    ...facetColumns.slice(0, defaultVisibleFacetColumnCount ?? 3),
    ...columnsWithExistingFilters,
  ])
}
