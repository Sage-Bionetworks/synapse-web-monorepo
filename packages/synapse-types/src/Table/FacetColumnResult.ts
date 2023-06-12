// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/FacetColumnResultValues.html
export type FacetColumnResultValues = {
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnResultValues'
  columnName: string
  facetType: 'enumeration'
  facetValues: FacetColumnResultValueCount[] // The list of QueryFacetResultValue that contain frequency counts for its most frequent values
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/FacetColumnResultValueCount.html
export type FacetColumnResultValueCount = {
  value: string // the value that is in a column
  count: number // the number of times the value appears in the column
  isSelected: boolean // whether this facet was selected by the user
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/FacetColumnResultRange.html
export type FacetColumnResultRange = {
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnResultRange'
  facetType: 'range'
  columnName: string // The name of the faceted column
  columnMin: string // the smallest value in the column
  columnMax: string // the largest value in the column
  selectedMin?: string // the lower bound of the selected range
  selectedMax?: string // the upper bound of the selected range
}

export type FacetColumnResult = FacetColumnResultValues | FacetColumnResultRange
