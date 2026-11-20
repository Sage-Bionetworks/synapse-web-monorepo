/**
 * How a dataset's data is accessed, derived from the dataset's `source` column.
 * - `open`: publicly available in an external repository (no request needed)
 * - `cpath`: managed by Critical Path Institute's RDCA-DAP
 * - `synapse`: governed by Synapse access requirements
 */
export type DatasetAccessRoute = 'open' | 'cpath' | 'synapse'

// The datasets table records GEO as 'Gene Expression Omnibus'; 'GEO' is kept
// until the canonical source values are settled in AMPALS-519.
const OPEN_SOURCE_VALUES: ReadonlySet<string> = new Set([
  'GEO',
  'Gene Expression Omnibus',
])
const CPATH_SOURCE_VALUE = 'Critical Path Institute'

export function getDatasetAccessRoute(
  source: string | null | undefined,
): DatasetAccessRoute {
  if (source && OPEN_SOURCE_VALUES.has(source)) {
    return 'open'
  }
  if (source === CPATH_SOURCE_VALUE) {
    return 'cpath'
  }
  return 'synapse'
}
