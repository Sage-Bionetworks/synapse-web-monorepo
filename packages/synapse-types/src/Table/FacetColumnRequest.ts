export const FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest'
export type FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE =
  typeof FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/FacetColumnValuesRequest.html
export type FacetColumnValuesRequest = {
  concreteType: FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE
  /* The name of the faceted column */
  columnName: string
  /* The set of facet values that were selected */
  facetValues: string[]
  /* To filter on a jsonSubColumn of a JSON column, provide the jsonPath of the sub-column */
  jsonPath?: string
}

export const FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest'
export type FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE =
  typeof FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/FacetColumnRangeRequest.html
export type FacetColumnRangeRequest = {
  concreteType: FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE
  columnName: string // The name of the faceted column
  min?: string
  max?: string
  /* To filter on a jsonSubColumn of a JSON column, provide the jsonPath of the sub-column */
  jsonPath?: string
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/FacetColumnRequest.html
export type FacetColumnRequest =
  | FacetColumnValuesRequest
  | FacetColumnRangeRequest
