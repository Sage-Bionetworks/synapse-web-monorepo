import type {
  ColumnAnalyzerOverride,
  NamedSearchPipeline,
  SearchConfiguration,
  SynonymSet,
  TextAnalyzer,
} from '@sage-bionetworks/synapse-client'

/**
 * The organization-scoped resource types managed by the Search Management Services.
 */
export const SearchManagementResourceType = {
  TEXT_ANALYZER: 'TEXT_ANALYZER',
  COLUMN_ANALYZER_OVERRIDE: 'COLUMN_ANALYZER_OVERRIDE',
  SYNONYM_SET: 'SYNONYM_SET',
  SEARCH_PIPELINE: 'SEARCH_PIPELINE',
  SEARCH_CONFIGURATION: 'SEARCH_CONFIGURATION',
} as const

export type SearchManagementResourceType =
  (typeof SearchManagementResourceType)[keyof typeof SearchManagementResourceType]

export type SearchManagementResourceMap = {
  TEXT_ANALYZER: TextAnalyzer
  COLUMN_ANALYZER_OVERRIDE: ColumnAnalyzerOverride
  SYNONYM_SET: SynonymSet
  SEARCH_PIPELINE: NamedSearchPipeline
  SEARCH_CONFIGURATION: SearchConfiguration
}

export type SearchManagementResource<
  T extends SearchManagementResourceType = SearchManagementResourceType,
> = SearchManagementResourceMap[T]

export type SearchManagementResourceListRequest = {
  /** Only list resources owned by this Organization. Omit to list resources from every Organization. */
  organizationName?: string
}

export type SearchManagementResourceListResponse<
  T extends SearchManagementResourceType,
> = {
  results?: SearchManagementResourceMap[T][]
  nextPageToken?: string
}
