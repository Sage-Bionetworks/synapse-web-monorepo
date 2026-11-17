import {
  SearchManagementResource,
  SearchManagementResourceType,
} from '@/synapse-queries/searchmanagement/SearchManagementResourceType'

/** Resource names must start with a letter and contain only letters, digits, and underscores. */
export const SEARCH_RESOURCE_NAME_PATTERN = /^[A-Za-z][A-Za-z0-9_]*$/

export const SEARCH_MANAGEMENT_RESOURCE_LABELS: Record<
  SearchManagementResourceType,
  { singular: string; plural: string }
> = {
  TEXT_ANALYZER: { singular: 'Text Analyzer', plural: 'Text Analyzers' },
  COLUMN_ANALYZER_OVERRIDE: {
    singular: 'Column Analyzer Override',
    plural: 'Column Analyzer Overrides',
  },
  SYNONYM_SET: { singular: 'Synonym Set', plural: 'Synonym Sets' },
  SEARCH_PIPELINE: { singular: 'Search Pipeline', plural: 'Search Pipelines' },
  SEARCH_CONFIGURATION: {
    singular: 'Search Configuration',
    plural: 'Search Configurations',
  },
}

/**
 * The `{organizationName}-{name}` form that other resources use to reference a saved resource.
 */
export function getQualifiedName(
  resource: Pick<SearchManagementResource, 'organizationName' | 'name'>,
) {
  return `${resource.organizationName}-${resource.name}`
}

export type SearchResourceReference = { $ref: string }

export function isSearchResourceReference(
  value: unknown,
): value is SearchResourceReference {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof (value as Record<string, unknown>).$ref === 'string'
  )
}
