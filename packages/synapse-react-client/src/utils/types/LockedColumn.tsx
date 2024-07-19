/*
  For portals details page: to lock a column (e.g. study, grant) so that the facet values and active filters
  will not appear on the details page. The facet name is given by the URL search param.
  The type is defined here so that other child components in SRC won't generate type errors.
 */
export type LockedColumn = {
  columnName?: string
  value?: string
}
