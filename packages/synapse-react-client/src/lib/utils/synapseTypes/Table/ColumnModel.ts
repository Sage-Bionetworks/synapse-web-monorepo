import { ColumnType } from './ColumnType'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/table/ColumnModel.html
export type ColumnModel = {
  id: string // The immutable ID issued to new columns
  name: string // The display name of the column
  defaultValue?: string // The default value for this column. Columns of type FILEHANDLEID and ENTITYID are not allowed to have default values.
  columnType: ColumnType
  maximumSize?: number // A parameter for columnTypes with a maximum size. For example, ColumnType.strings have a default maximum size of 50 characters, but can be set to a maximumSize of 1 to 1000 characters.
  enumValues?: string[] // Columns of type string can be constrained to an enumeration values set on this list. The maximum number of entries for an enum is 100
  facetType?: 'enumeration' | 'range'
}
