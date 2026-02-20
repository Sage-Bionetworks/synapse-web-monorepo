import { Facet } from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'

// Constants
export const MAX_FACET_VALUES_SHOWN = 10

const MINUTE_IN_SEC = 60
const HOUR_IN_SEC = MINUTE_IN_SEC * 60
const DAY_IN_SEC = HOUR_IN_SEC * 24
const WEEK_IN_SEC = DAY_IN_SEC * 7
const MONTH_IN_SEC = DAY_IN_SEC * 30
const YEAR_IN_SEC = DAY_IN_SEC * 365

// 'range' is the approximate duration in seconds used to match a stored URL timestamp back to a preset.
// null (ANY_TIME) means no date filter is applied.
export const timeRanges = [
  { id: 'ANY_TIME', label: 'Any Time', range: null },
  { id: 'PAST_HOUR', label: 'Past Hour', range: HOUR_IN_SEC },
  { id: 'PAST_DAY', label: 'Past 24 Hours', range: DAY_IN_SEC },
  { id: 'PAST_WEEK', label: 'Past Week', range: WEEK_IN_SEC },
  { id: 'PAST_MONTH', label: 'Past Month', range: MONTH_IN_SEC },
  { id: 'PAST_YEAR', label: 'Past Year', range: YEAR_IN_SEC },
]

// User-friendly display names
export const FACET_DISPLAY_NAMES: Record<string, string> = {
  node_type: 'Entity Type',
  modified_by: 'Last Modified By',
}

// Facet display order
export const FACET_DISPLAY_ORDER = [
  'node_type',
  'consortium',
  'disease',
  'modified_on',
  'modified_by',
  'created_on',
  'tissue',
  'num_samples',
  'created_by',
]

export const USER_FACET_NAMES = [
  'modified_by',
  'created_by',
  'ModifiedBy',
  'CreatedBy',
]

export const FACET_PLURAL_DISPLAY_NAMES: Record<string, string> = {
  node_type: 'Entity Types',
  consortium: 'Consortiums',
  disease: 'Diseases',
  tissue: 'Tissues',
  num_samples: 'Num Samples',
  modified_by: 'Last Modified By',
  created_by: 'Created By',
}

// Helper functions
/**
 * Get the label for the "All" option in a facet, e.g. "All Entity Types" for the 'node_type' facet
 */
export function getAllFacetLabel(facetName: string): string {
  const pluralName =
    FACET_PLURAL_DISPLAY_NAMES[facetName] || formatFacetName(facetName)
  return `All ${pluralName}`
}

/**
 * Determines if a facet value should be displayed in the UI.
 * Hides 'link' entity types and colon-prefixed values
 */
export function shouldShowFacetValue(
  facetName: string,
  value: string,
): boolean {
  if (!value || value.trim() === '') {
    return false
  }

  const isHiddenEntityType =
    (facetName === 'node_type' || facetName === 'EntityType') &&
    value === 'link'

  const isInternalPrefixedValue = value.includes(':')

  return !isHiddenEntityType && !isInternalPrefixedValue
}

/**
 * Check if a facet is a user facet (e.g., 'modified_by' or 'created_by')
 * Accepts either snake_case or PascalCase facet names.
 */
export const isUserFacet = (name: string): boolean => {
  // Normalize by removing underscores and converting to lowercase
  const normalizedFacetName = name.toLowerCase().replace(/_/g, '')

  return USER_FACET_NAMES.some(
    facet => facet.toLowerCase().replace(/_/g, '') === normalizedFacetName,
  )
}

/**
 * Format facet name: capitalize first letter, replace underscores with spaces
 */
export function formatFacetName(name: string): string {
  return name.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())
}

/**
 * Get user-friendly display name for a facet
 */
export function getFacetDisplayName(facetName: string): string {
  return FACET_DISPLAY_NAMES[facetName] || formatFacetName(facetName)
}

/**
 * Check if a facet should be rendered (some facets like 'link' are hidden)
 */
export function shouldRenderFacet(facet: Facet): boolean {
  // Don't render facets with no constraints (values to click on)
  if (!facet.constraints || facet.constraints.length === 0) {
    return false
  }
  return true
}

/**
 * Get timestamp from URL/query and determine which time range preset it matches
 *
 * @param timestamp - The stored timestamp (in seconds) from the URL/query
 * @returns The ID of the matching time range preset ('PAST_HOUR', 'PAST_DAY', etc.)
 */
export function getSelectedTimeRangeId(timestamp: string): string {
  const storedTimestamp = parseInt(timestamp)

  if (!storedTimestamp) {
    return 'ANY_TIME'
  }

  const diffInSeconds = dayjs().unix() - storedTimestamp

  if (diffInSeconds <= 0) {
    return 'ANY_TIME'
  }

  // Filter out 'ANY_TIME' since it doesn't have a numeric range
  const presets = timeRanges.filter(
    (range): range is { id: string; label: string; range: number } =>
      range.id !== 'ANY_TIME',
  )

  // Find the closest preset by comparing the absolute difference.
  // Ex: If diffInSeconds is 3605, it is 5 seconds away from PAST_HOUR (3600)
  // but 82,795 seconds away from PAST_DAY (86400) so we would match to PAST_HOUR.
  const closest = presets.reduce((best, preset) =>
    Math.abs(diffInSeconds - preset.range) <
    Math.abs(diffInSeconds - best.range)
      ? preset
      : best,
  )

  return closest.id
}

/**
 * Formats a timestamp for display in the applied facets chip.
 *
 * @param timestamp - The stored timestamp (in seconds)
 * @returns A friendly display string
 */
export function formatTimeRangeDisplayValue(timestamp: string): string {
  const storedTimestamp = parseInt(timestamp)

  if (isNaN(storedTimestamp)) {
    return timestamp
  }

  if (storedTimestamp === 0) {
    return 'any time'
  }

  // Try to match to a preset
  const rangeId = getSelectedTimeRangeId(timestamp)
  const matchedRange = timeRanges.find(r => r.id === rangeId)

  if (matchedRange && matchedRange.id !== 'ANY_TIME') {
    return matchedRange.label
  }

  // Fallback to formatted date if no preset matches
  try {
    const valueInMilliseconds = storedTimestamp * 1000
    return new Date(valueInMilliseconds).toLocaleDateString()
  } catch {
    return timestamp
  }
}
