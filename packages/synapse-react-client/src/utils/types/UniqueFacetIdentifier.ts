/**
 * A facet in a SynapseTable can be uniquely identified with the columnName and optional jsonPath.
 *
 * This type is used for cases where we need to pass just enough data around to identify/look up a facet request or result.
 */
export type UniqueFacetIdentifier = {
  columnName: string
  jsonPath?: string
}
