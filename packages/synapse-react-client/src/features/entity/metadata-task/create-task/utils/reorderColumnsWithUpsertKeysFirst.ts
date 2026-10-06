/**
 * Reorders `columnNames` so the upsert key columns appear first, in the order given by
 * `upsertKeys`, followed by the remaining columns in their original relative order. Upsert keys
 * serve as the row identifiers in the Grid curation UI, so they should always be the leftmost
 * columns of the CSV template. Upsert keys not present among `columnNames` are ignored.
 */
export function reorderColumnsWithUpsertKeysFirst(
  columnNames: string[],
  upsertKeys: string[],
): string[] {
  const columnNameSet = new Set(columnNames)
  const presentUpsertKeys = upsertKeys.filter(key => columnNameSet.has(key))
  const upsertKeySet = new Set(presentUpsertKeys)
  const remainingColumns = columnNames.filter(name => !upsertKeySet.has(name))

  return [...presentUpsertKeys, ...remainingColumns]
}
