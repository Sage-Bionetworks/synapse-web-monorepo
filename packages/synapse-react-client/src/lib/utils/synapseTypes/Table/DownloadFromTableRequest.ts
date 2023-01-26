import { CsvTableDescriptor } from './CsvTableDescription'
import { SortItem } from './Query'
import { FacetColumnRequest } from './FacetColumnRequest'
import { QueryFilter } from './QueryFilter'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/DownloadFromTableRequest.html
// A CSV table download request.
export type DownloadFromTableRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.DownloadFromTableRequest'
  entityId: string
  writeHeader: boolean // Should the first line contain the columns names as a header in the resulting file? Set to 'true' to include the headers else, 'false'. The default value is 'true'.
  includeRowIdAndRowVersion: boolean // Should the first two columns contain the row ID and row version? The default value is 'true'.
  csvTableDescriptor: CsvTableDescriptor // The description of a csv for upload or download.
  sql: string // The SQL query string.
  selectedFacets?: FacetColumnRequest[] // The selected facet filters.
  includeEntityEtag?: boolean // Optional, default false. When true, a query results against views will include the Etag of each entity in the results. Note: The etag is necessary to update Entities in the view.
  isConsistent?: boolean // Optional, default true. When true, a query will be run only if the index is up-to-date with all changes to the table and a read-lock is successfully acquired on the index. When set to false, the query will be run against the index regardless of the state of the index and without attempting to acquire a read-lock. When isConsistent is set to false the query results will not contain an etag so the results cannot be used as input to a table update.
  offset?: number //  The optional offset into the results
  limit?: number // The optional limit to the results
  sort?: SortItem[]
  additionalFilters?: QueryFilter[]
}
