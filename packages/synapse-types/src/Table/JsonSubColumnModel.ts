import { ColumnType } from './ColumnType'
import { FacetColumnSortConfig } from './FacetColumnSortConfig'
import { FacetType } from './FacetType'

/**
 * Defines a single sub-column of a column of type JSON. This can be used to enable the faceting of the sub-columns.
 *
 * https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/JsonSubColumnModel.html
 */
export type JsonSubColumnModel = {
  /** The display name of the column */
  name: string
  /** The column type determines the type of data that can be stored in a column. Switching between types (using a transaction with TableUpdateTransactionRequest in the "changes" list) is generally allowed except for switching to "_LIST" suffixed types. In such cases, a new column must be created and data must be copied over manually */
  columnType: ColumnType
  /** Set to one of the enumerated values to indicate a column should be treated as a facet */
  facetType: FacetType
  /** Defines the JSON path of the sub column. Use the '$' char to represent the root of JSON object. If the JSON key of a sub column is 'a', then the jsonPath for that column would be: '$.a'.} */
  jsonPath: string
  /** Configuration for sorting the facets of this column, only allowed if facetType is enumeration. */
  facetSortConfig?: FacetColumnSortConfig
}
