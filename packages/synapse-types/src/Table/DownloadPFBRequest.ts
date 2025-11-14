import { FacetColumnRequest } from './FacetColumnRequest'
import { SortItem } from './Query'
import { QueryFilter } from './QueryFilter'

/**
 * Request to download a Portable Format for Biomedical (PFB) file from a table/view query result.
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/DownloadPFBRequest.html
 */
export type DownloadPFBRequest = {
  concreteType: 'org.sagebionetworks.repo.model.table.DownloadPFBRequest'
  entityId: string
  /* Required. Used for the PFB entity.name field of each row added to the resulting avro file. */
  pfbEntityName: string
  /* The list of column names from the select list that should be used to compose the PFB entity id field for each row. The values will be concatenated using an underscore (_). If not provided, the entity id will be set to the concatentation of the implicit ROW_ID and ROW_VERSION of the underlying table. */
  pfbEntityIdColumnNames?: string[]
  /* Set the name of the resulting PFB file. An auto-generated name will be used if omitted. */
  fileName?: string
  /* The SQL query string. */
  sql: string
  /* The selected facet filters. */
  selectedFacets?: FacetColumnRequest[]
  /* Optional, default false. When true, a query results against views will include the Etag of each entity in the results. Note: The etag is necessary to update Entities in the view. */
  includeEntityEtag?: boolean
  /*  The optional offset into the results */
  offset?: number
  /* The optional limit to the results */
  limit?: number
  sort?: SortItem[]
  additionalFilters?: QueryFilter[]
}
