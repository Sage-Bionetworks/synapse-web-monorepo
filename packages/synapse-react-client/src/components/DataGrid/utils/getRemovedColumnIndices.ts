import { getNamedColumnIndices } from './getNamedColumnIndices'

/**
 * Returns the identity indices of columns that have been removed from the grid, in identity order.
 *
 * A removed column is absent from `columnOrder`, but its name and row data remain in the model, so it
 * can be restored by adding its index back to `columnOrder`. Indices without a name are not treated
 * as removed columns: there is nothing to identify them by.
 */
export function getRemovedColumnIndices(
  columnNames: string[],
  columnOrder: number[],
): number[] {
  const displayedColumnIndices = new Set(columnOrder)
  return getNamedColumnIndices(
    columnNames,
    columnNames.map((_, index) => index),
  ).filter(index => !displayedColumnIndices.has(index))
}
