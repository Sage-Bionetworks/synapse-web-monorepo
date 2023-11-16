// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/FacetColumnResultValues.html
export type FacetColumnResultValues = {
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnResultValues'
  columnName: string
  facetType: 'enumeration'
  facetValues: FacetColumnResultValueCount[] // The list of QueryFacetResultValue that contain frequency counts for its most frequent values
  /* When present, these results represent a sub-column identified by its jsonPath. Note: The ColumnName will be the name of the root JSON column. */
  jsonPath?: string
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/FacetColumnResultValueCount.html
export type FacetColumnResultValueCount = {
  /* the value that is in a column */
  value: string
  /* the number of times the value appears in the column */
  count: number
  /* whether this facet was selected by the user */
  isSelected: boolean
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/FacetColumnResultRange.html
export type FacetColumnResultRange = {
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnResultRange'
  facetType: 'range'
  /* The name of the faceted column */
  columnName: string
  /* the smallest value in the column */
  columnMin: string
  /* the largest value in the column */
  columnMax: string
  /* the lower bound of the selected range */
  selectedMin?: string
  /* the upper bound of the selected range */
  selectedMax?: string
  /* When present, these results represent a sub-column identified by its jsonPath. Note: The ColumnName will be the name of the root JSON column. */
  jsonPath?: string
}

export type FacetColumnResult = FacetColumnResultValues | FacetColumnResultRange
