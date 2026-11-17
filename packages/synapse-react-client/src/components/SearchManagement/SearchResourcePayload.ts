import {
  SearchManagementResource,
  SearchManagementResourceMap,
  SearchManagementResourceType,
} from '@/synapse-queries/searchmanagement/SearchManagementResourceType'
import {
  ColumnAnalyzerOverrideEntry,
  SearchPipelineFromJSON,
} from '@sage-bionetworks/synapse-client'
import { omit } from 'lodash-es'

const RESOURCE_METADATA_FIELDS = [
  'id',
  'organizationName',
  'name',
  'description',
  'etag',
  'createdOn',
  'createdBy',
  'modifiedOn',
  'modifiedBy',
] as const

/**
 * The type-specific fields of a Search Management resource, i.e. everything other than its name, description, and
 * audit metadata.
 */
export type SearchResourcePayload<
  T extends SearchManagementResourceType = SearchManagementResourceType,
> = T extends SearchManagementResourceType
  ? Omit<
      SearchManagementResourceMap[T],
      (typeof RESOURCE_METADATA_FIELDS)[number]
    >
  : never

export const TEXT_ANALYZER_SETTINGS_EXAMPLE = {
  analyzer: {
    default: {
      type: 'custom',
      tokenizer: 'standard',
      filter: ['lowercase'],
    },
  },
}

export const SYNONYM_SET_DEFINITION_EXAMPLE = {
  type: 'synonym_graph',
  synonyms: ['a, b, c', 'x => y'],
}

/** Wire-format (JSON) SearchPipeline, as typed by the user. */
export const SEARCH_PIPELINE_SETTINGS_EXAMPLE = {
  phase_results_processors: [
    {
      'normalization-processor': {
        normalization: { technique: 'min_max' },
        combination: { technique: 'arithmetic_mean' },
      },
    },
  ],
}

export const INLINE_COLUMN_ANALYZER_OVERRIDE_EXAMPLE = {
  overrides: [{ columnName: 'title', semantic: true }],
}

export const EMPTY_COLUMN_ANALYZER_OVERRIDE_ENTRY: ColumnAnalyzerOverrideEntry =
  { columnName: '' }

export function isJsonObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/**
 * Converts wire-format pipeline JSON with a generated `FromJSON` converter, or returns undefined if the JSON doesn't
 * have the shape the converter needs.
 */
export function parseWireSearchPipeline<T>(
  json: unknown,
  fromJSON: (json: Record<string, unknown>) => T,
): T | undefined {
  if (!isJsonObject(json)) {
    return undefined
  }
  const processors = json.phase_results_processors
  if (processors !== undefined && !Array.isArray(processors)) {
    return undefined
  }
  return fromJSON(json)
}

export function getPayload<T extends SearchManagementResourceType>(
  resource: SearchManagementResourceMap[T],
): SearchResourcePayload<T> {
  return omit(resource, RESOURCE_METADATA_FIELDS) as SearchResourcePayload<T>
}

/**
 * The payload a new resource starts with: a small valid example where the payload is required, so users can see the
 * expected shape.
 */
export function getNewResourcePayload(
  resourceType: SearchManagementResourceType,
): SearchResourcePayload {
  switch (resourceType) {
    case 'TEXT_ANALYZER':
      return { settings: TEXT_ANALYZER_SETTINGS_EXAMPLE }
    case 'SYNONYM_SET':
      return { definition: SYNONYM_SET_DEFINITION_EXAMPLE }
    case 'SEARCH_PIPELINE':
      return {
        settings: SearchPipelineFromJSON(SEARCH_PIPELINE_SETTINGS_EXAMPLE),
      }
    case 'COLUMN_ANALYZER_OVERRIDE':
      return { overrides: [EMPTY_COLUMN_ANALYZER_OVERRIDE_ENTRY] }
    case 'SEARCH_CONFIGURATION':
      return {}
  }
}

/**
 * Whether every value the resource type requires is present. JSON syntax errors are tracked separately by the inputs
 * that parse the JSON.
 */
export function isPayloadComplete(
  resourceType: SearchManagementResourceType,
  payload: SearchResourcePayload,
): boolean {
  switch (resourceType) {
    case 'TEXT_ANALYZER':
      return isJsonObject(
        (payload as SearchResourcePayload<'TEXT_ANALYZER'>).settings,
      )
    case 'SYNONYM_SET':
      return isJsonObject(
        (payload as SearchResourcePayload<'SYNONYM_SET'>).definition,
      )
    case 'SEARCH_PIPELINE':
      return (
        (payload as SearchResourcePayload<'SEARCH_PIPELINE'>).settings !==
        undefined
      )
    case 'COLUMN_ANALYZER_OVERRIDE': {
      const { overrides = [] } =
        payload as SearchResourcePayload<'COLUMN_ANALYZER_OVERRIDE'>
      return (
        overrides.length > 0 &&
        overrides.every(entry => !!entry.columnName?.trim())
      )
    }
    case 'SEARCH_CONFIGURATION': {
      const { columnAnalyzerOverrides = [] } =
        payload as SearchResourcePayload<'SEARCH_CONFIGURATION'>
      return columnAnalyzerOverrides.every(override => override !== undefined)
    }
  }
}

/**
 * Combines the editable fields into the resource to send. Updates start from the existing resource so its ID and
 * etag are preserved.
 */
export function buildResource(
  existing: SearchManagementResource | undefined,
  fields: { organizationName: string; name: string; description: string },
  payload: SearchResourcePayload,
): SearchManagementResource {
  const description = fields.description.trim() || undefined
  if (existing) {
    return { ...existing, description, ...payload } as SearchManagementResource
  }
  return {
    organizationName: fields.organizationName,
    name: fields.name,
    description,
    ...payload,
  } as SearchManagementResource
}
