import { isTypeViaConcreteTypeFactory } from '../../functions/TypeUtils'

const FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest'
type FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE =
  typeof FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/FacetColumnValuesRequest.html
export type FacetColumnValuesRequest = {
  concreteType: FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE
  columnName: string // The name of the faceted column
  facetValues: string[] // The set of facet values that were selected
}

const FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest'
type FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE =
  typeof FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/FacetColumnRangeRequest.html
export type FacetColumnRangeRequest = {
  concreteType: FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE
  columnName: string // The name of the faceted column
  min?: string
  max?: string
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/FacetColumnRequest.html
export type FacetColumnRequest =
  | FacetColumnValuesRequest
  | FacetColumnRangeRequest

export const isFacetColumnValuesRequest =
  isTypeViaConcreteTypeFactory<FacetColumnValuesRequest>(
    FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE,
  )

export const isFacetColumnRangeRequest =
  isTypeViaConcreteTypeFactory<FacetColumnRangeRequest>(
    FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
  )
