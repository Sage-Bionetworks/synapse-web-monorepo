import { ColumnType } from './ColumnType'
import { JsonSubColumnModel } from './JsonSubColumnModel'
import { FacetType } from './FacetType'
import { FacetColumnSortConfig } from './FacetColumnSortConfig'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/ColumnModel.html
export type ColumnModel = {
  /** The immutable ID issued to new columns */
  id: string
  /** The display name of the column */
  name: string
  /** The default value for this column. Columns of type FILEHANDLEID and ENTITYID are not allowed to have default values. */
  defaultValue?: string
  columnType: ColumnType
  /** A parameter for columnTypes with a maximum size. For example, ColumnTypeEnum.strings have a default maximum size of 50 characters, but can be set to a maximumSize of 1 to 1000 characters. */
  maximumSize?: number
  /** Required if using a columnType with a "_LIST" suffix. Describes the maximum number of values that will appear in that list. Value range 1-100 inclusive. Default 100 */
  maximumListLength?: number
  /** Columns of type string can be constrained to an enumeration values set on this list. The maximum number of entries for an enum is 100 */
  enumValues?: string[]
  /** Set to one of the enumerated values to indicate a column should be treated as a facet */
  facetType?: FacetType
  /** For column of type JSON that represents the combination of multiple sub-columns, this property is used to define each sub-column. */
  jsonSubColumns?: JsonSubColumnModel[]
  /** Configuration for sorting the facets of this column, only allowed if facetType is enumeration. */
  facetSortConfig?: FacetColumnSortConfig
}
