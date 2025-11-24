/**
 * Which property of a facet to use for sorting, can be by value frequency or the facet value itself.
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/FacetColumnSortProperty.html
 */
export type FacetColumnSortProperty =
  /** (Default) Sort by the frequency of a facet value. A secondary sort by value, ascending is always added for consistency. */
  | 'FREQUENCY'
  /** Sort by the natural order of the facet value. */
  | 'VALUE'

/**
 * The sorting direction.
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/FacetColumnSortDirection.html
 */
export type FacetColumnSortDirection =
  /** (Default) Sort descending. */
  | 'DESC'
  /** Sort ascending. */
  | 'ASC'

/**
 * For a column model whose facet type is enumeration, defines the order in which the facet values are returned.
 * If not specified, the default order is frequency, descending with a secondary sort by value ascending.
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/FacetColumnSortConfig.html
 */
export type FacetColumnSortConfig = {
  /** Which property of a facet to use for sorting, can be by value frequency or the facet value itself. */
  property?: FacetColumnSortProperty
  /** The sorting direction. */
  direction?: FacetColumnSortDirection
}
