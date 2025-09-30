import { EntityPath } from './EntityHeader'
import { EntityType } from '@sage-bionetworks/synapse-client'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/query/SearchQuery.html
export type SearchQuery = {
  queryTerm?: string[]
  booleanQuery?: KeyValue[]
  rangeQuery?: KeyRange[]
  facetOptions?: SearchFacetOption[]
  returnFields?: string[]
  start?: number
  size?: number
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/SearchResults.html
export type SearchResults = {
  found: number
  start: number
  hits: Hit[]
  facets: Facet[]
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/query/KeyValue.html
export type KeyValue = {
  key: string
  value: string
  not: boolean
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/query/KeyRange.html
export type KeyRange = {
  key: string
  min: string
  max: string
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/query/SearchFacetOption.html
export type SearchFacetOption = {
  name: SearchFieldName
  maxResultCount: number
  sortType: SearchFacetSort
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/query/SearchFieldName.html
export enum SearchFieldName {
  ID = 'Id',
  NAME = 'Name',
  DESCRIPTION = 'Description',
  ENTITY_TYPE = 'EntityType',
  MODIFIED_BY = 'ModifiedBy',
  MODIFIED_ON = 'ModifiedOn',
  CREATED_BY = 'CreatedBy',
  CREATED_ON = 'CreatedOn',
  CONSORTIUM = 'Consortium',
  DIAGNOSIS = 'Diagnosis',
  ORGAN = 'Organ',
  TISSUE = 'Tissue',
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/query/SearchFacetSort.html
export enum SearchFacetSort {
  ALPHA = 'ALPHA',
  COUNT = 'COUNT',
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/Hit.html
export type Hit = {
  id: string // entity ID
  etag: string
  name: string
  alias: string
  path: EntityPath
  description: string
  node_type: EntityType
  created_on: number
  modified_on: number
  created_by: string
  modified_by: string
  diagnosis: string
  tissue: string
  consortium: string
  organ: string
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/Facet.html
export type Facet = {
  name: string
  type: FacetTypeNames
  min: number
  max: number
  constraints: FacetConstraint[]
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/FacetTypeNames.html
export enum FacetTypeNames {
  LITERAL = 'LITERAL',
  DATE = 'DATE',
  CONTINUOUS = 'CONTINUOUS',
}

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/search/FacetConstraint.html
export type FacetConstraint = {
  value: string
  count: number
}
