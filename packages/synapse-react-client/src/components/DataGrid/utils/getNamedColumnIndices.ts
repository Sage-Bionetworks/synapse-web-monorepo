/**
 * Filters column identity indices down to those that resolve to a name in `columnNames`.
 *
 * A column's header, width, and row data are all resolved through its name, so an index without
 * one cannot be rendered. The hub patches `columnNames` and `columnOrder` independently, and a
 * render can observe the state between those patches: an index whose name has not arrived yet, or
 * one whose name slot has been unset (a json-joy vector reports an unset slot as `undefined`
 * rather than shortening itself).
 */
export function getNamedColumnIndices(
  columnNames: string[],
  columnIndices: number[],
): number[] {
  return columnIndices.filter(index => Boolean(columnNames[index]))
}
