import { getSynapseEntityUrl } from 'synapse-react-client/utils/functions/getSynapseEntityUrl'

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

export type DatasetFilesLink = { label: string; href: string }

/**
 * Where a user goes to get a dataset's files: the external repository for
 * open datasets, or the Synapse dataset entity for Synapse-governed ones.
 * C-Path datasets have no files to link to; their access status component
 * already points to RDCA-DAP.
 */
export function getDatasetFilesLink(
  source: string | null | undefined,
  id: string | null | undefined,
  url: string | null | undefined,
): DatasetFilesLink | undefined {
  switch (getDatasetAccessRoute(source)) {
    case 'open':
      return url ? { label: 'Open in GEO', href: url } : undefined
    case 'cpath':
      return undefined
    case 'synapse':
      return id
        ? { label: 'View files', href: getSynapseEntityUrl(id) }
        : undefined
  }
}
