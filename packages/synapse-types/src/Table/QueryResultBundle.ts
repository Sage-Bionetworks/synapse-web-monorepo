import { ActionRequiredCount } from '../DownloadListV2'
import { ColumnModel } from './ColumnModel'
import { FacetColumnResult } from './FacetColumnResult'
import { QueryResult } from './QueryResult'
import { SelectColumn } from './SelectColumn'
import { SumFileSizes } from './SumFileSizes'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/QueryResultBundle.html
export interface QueryResultBundle {
  concreteType: 'org.sagebionetworks.repo.model.table.QueryResultBundle'
  queryResult?: QueryResult // A page of query result.
  queryCount?: number // The total number of rows that match the query. Use mask = 0x2 to include in the bundle.
  selectColumns?: SelectColumn[] // The list of SelectColumns from the select clause. Use mask = 0x4 to include in the bundle.
  maxRowsPerPage?: number // The maximum number of rows that can be retrieved in a single call. This is a function of the columns that are selected in the query. Use mask = 0x8 to include in the bundle.
  columnModels?: ColumnModel[] // The list of ColumnModels for the table. Use mask = 0x10 to include in the bundle.
  facets?: FacetColumnResult[] // The list of facets for the search results
  facetPostProcessingApplied?: boolean // True when a facet post-processing algorithm (rounding or noise) was applied to the returned facets, so facet counts are approximate. Absent or false when facet counts are exact.
  queryCountPostProcessingApplied?: boolean // True when a facet post-processing algorithm (rounding or noise) was applied to the queryCount, so the count is approximate. With rounding, the queryCount is the inclusive lower bound of its bin. Absent or false when the queryCount is exact.
  suppressionThreshold?: number // The suppression threshold (k) of an aggregate-only read or an aggregate data preview. A facet count, or a count cell in the query results, of -1 is a non-zero count below this threshold that has been masked. Absent when the read is not aggregate-only.
  sumFileSizes?: SumFileSizes
  lastUpdatedOn?: string
  combinedSql?: string //The SQL that is combination of a the input SQL, FacetRequests, AdditionalFilters, Sorting, and Pagination. Use mask = 0x100 to include in the bundle.
  actionsRequired?: ActionRequiredCount[]
}
