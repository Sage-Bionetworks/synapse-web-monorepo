import { useState } from 'react'
import dayjs from 'dayjs'
import {
  Box,
  FormControlLabel,
  Checkbox,
  Button,
  RadioGroup,
  Radio,
  Typography,
  Chip,
} from '@mui/material'
import UTurnLeftIcon from '@mui/icons-material/UTurnLeft'
import CloseIcon from '@mui/icons-material/Close'
import {
  SearchQuery,
  Facet,
  FacetTypeNames,
} from '@sage-bionetworks/synapse-types'
import { UserBadge } from '../../UserCard/UserBadge'
import {
  MAX_FACET_VALUES_SHOWN,
  FACET_DISPLAY_ORDER,
  getFacetDisplayName,
  shouldRenderFacet,
  timeRanges,
  getSelectedTimeRangeId,
  formatTimeRangeDisplayValue,
  isUserFacet,
  shouldShowFacetValue,
} from './SearchFacetPanelUtils'

const ChipStyles = {
  borderRadius: '48px',
  color: 'var(--synapse-white)',
  backgroundColor: 'var(--synapse-primary-600)',
  width: 'fit-content',
  display: 'flex',
  alignItems: 'center',
  padding: '6px 12px',
}

type SearchFacetPanelProps = {
  query: SearchQuery
  setQuery: (newQuery: SearchQuery) => void
  facets: Facet[]
  onAddFacet: (facetName: string, facetValue: string) => void
  onRemoveFacet: (facetName: string, facetValue: string) => void
  onSetRangeFacet: (facetName: string, minValue: string) => void
  onRemoveRangeFacet: (facetName: string) => void
  isFacetApplied: (facetName: string, facetValue: string) => boolean
  isRangeFacetApplied: (facetName: string) => boolean
  getAppliedRangeFacet: (facetName: string) => { min: string } | undefined
}

/**
 * Main facet panel component that displays all available facets
 */
export function SearchFacetPanel({
  query,
  setQuery,
  facets,
  onAddFacet,
  onRemoveFacet,
  onSetRangeFacet,
  onRemoveRangeFacet,
  isFacetApplied,
  isRangeFacetApplied,
  getAppliedRangeFacet,
}: SearchFacetPanelProps) {
  const hasAppliedFacets =
    (query.booleanQuery && query.booleanQuery.length > 0) ||
    (query.rangeQuery && query.rangeQuery.length > 0)

  const handleResetFilters = () => {
    setQuery({
      ...query,
      booleanQuery: [],
      rangeQuery: [],
      start: 0,
    })
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {hasAppliedFacets && (
        <Button
          onClick={handleResetFilters}
          variant="text"
          size="small"
          sx={{
            padding: '6px 16px',
            gap: '8px',
            color: 'var(--synapse-gray-700) !important',
            border: '1px solid',
            borderColor: 'var(--synapse-gray-700) !important',
            width: 'fit-content',

            '&:hover': {
              textDecoration: 'none',
            },
          }}
        >
          <UTurnLeftIcon sx={{ transform: 'rotate(90deg)' }} />
          <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>
            Reset Filters
          </Typography>
        </Button>
      )}
      <Box
        sx={{ display: 'flex', flexDirection: 'row', gap: 3, flexWrap: 'wrap' }}
      >
        {FACET_DISPLAY_ORDER.map(facetName => {
          const facet = facets.find(f => f.name === facetName)

          if (!facet || !shouldRenderFacet(facet)) {
            return null
          }

          return (
            <SearchFacetGroup
              key={facet.name}
              facet={facet}
              query={query}
              onAddFacet={onAddFacet}
              onRemoveFacet={onRemoveFacet}
              onSetRangeFacet={onSetRangeFacet}
              onRemoveRangeFacet={onRemoveRangeFacet}
              isFacetApplied={isFacetApplied}
              isRangeFacetApplied={isRangeFacetApplied}
              getAppliedRangeFacet={getAppliedRangeFacet}
            />
          )
        })}
      </Box>
    </Box>
  )
}

type SearchFacetGroupProps = {
  facet: Facet
  query: SearchQuery
  onAddFacet: (facetName: string, facetValue: string) => void
  onRemoveFacet: (facetName: string, facetValue: string) => void
  onSetRangeFacet: (facetName: string, minValue: string) => void
  onRemoveRangeFacet: (facetName: string) => void
  isFacetApplied: (facetName: string, facetValue: string) => boolean
  isRangeFacetApplied: (facetName: string) => boolean
  getAppliedRangeFacet: (facetName: string) => { min: string } | undefined
}

/**
 * Component for a facet group
 * (ex: Entity Type facet with values 'dataset', 'file', etc)
 */
function SearchFacetGroup({
  facet,
  query,
  onAddFacet,
  onRemoveFacet,
  onSetRangeFacet,
  onRemoveRangeFacet,
  isFacetApplied,
  isRangeFacetApplied,
  getAppliedRangeFacet,
}: SearchFacetGroupProps) {
  const displayName = getFacetDisplayName(facet.name)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: '200px' }}>
      <Typography
        variant="smallText2"
        sx={{
          fontSize: '1rem',
          lineHeight: '20px',
          mb: '10px',
          color: 'var(--synapse-gray-900)',
        }}
      >
        {displayName}
      </Typography>
      {facet.type === FacetTypeNames.LITERAL ? (
        <LiteralFacetValues // checkbox list for literal facets
          facet={facet}
          query={query}
          onAddFacet={onAddFacet}
          onRemoveFacet={onRemoveFacet}
          isFacetApplied={isFacetApplied}
        />
      ) : (
        <DateRangeFacetValues // radio buttons for date/continuous facets (can only select one range at a time)
          facet={facet}
          query={query}
          onSetRangeFacet={onSetRangeFacet}
          onRemoveRangeFacet={onRemoveRangeFacet}
          isRangeFacetApplied={isRangeFacetApplied}
          getAppliedRangeFacet={getAppliedRangeFacet}
        />
      )}
    </Box>
  )
}

type LiteralFacetValuesProps = {
  facet: Facet
  query: SearchQuery
  onAddFacet: (facetName: string, facetValue: string) => void
  onRemoveFacet: (facetName: string, facetValue: string) => void
  isFacetApplied: (facetName: string, facetValue: string) => boolean
}

/**
 * Component for rendering literal facet values as checkboxes
 */
function LiteralFacetValues({
  facet,
  query,
  onAddFacet,
  onRemoveFacet,
  isFacetApplied,
}: LiteralFacetValuesProps) {
  const [showAll, setShowAll] = useState(false)

  // Get values from the search query (url)
  const appliedValues =
    query.booleanQuery
      ?.filter(kv => kv.key === facet.name)
      .map(kv => kv.value) || []

  // Get values returned by the search results response
  const availableValues = facet.constraints.map(c => c.value)

  const allValues = Array.from(new Set([...appliedValues, ...availableValues]))

  const filteredValues = allValues.filter(value =>
    shouldShowFacetValue(facet.name, value),
  )

  const displayValues = showAll
    ? filteredValues
    : filteredValues.slice(0, MAX_FACET_VALUES_SHOWN)

  const handleToggle = (value: string, checked: boolean) => {
    if (checked) {
      onAddFacet(facet.name, value)
    } else {
      onRemoveFacet(facet.name, value)
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {displayValues.map(value => {
        const isChecked = isFacetApplied(facet.name, value)

        return (
          <FormControlLabel
            key={value}
            sx={{ mb: '8px' }}
            control={
              <Checkbox
                checked={isChecked}
                onChange={e => handleToggle(value, e.target.checked)}
                size="small"
              />
            }
            label={
              isUserFacet(facet.name) ? (
                <UserBadge userId={value} />
              ) : (
                <Typography variant="smallText1" sx={{ lineHeight: '20px' }}>
                  {value}
                </Typography>
              )
            }
          />
        )
      })}
      {filteredValues.length > MAX_FACET_VALUES_SHOWN && !showAll && (
        <Button
          onClick={() => setShowAll(true)}
          variant="text"
          size="small"
          sx={{ alignSelf: 'flex-start' }}
        >
          Show all {filteredValues.length}
        </Button>
      )}
    </Box>
  )
}

type DateRangeFacetValuesProps = {
  facet: Facet
  query: SearchQuery
  onSetRangeFacet: (facetName: string, minValue: string) => void
  onRemoveRangeFacet: (facetName: string) => void
  isRangeFacetApplied: (facetName: string) => boolean
  getAppliedRangeFacet: (facetName: string) => { min: string } | undefined
}

/**
 * Component for rendering date/continuous range facet values
 * Uses dayjs's built-in relative time thresholds to determine selection
 */
function DateRangeFacetValues({
  facet,
  onSetRangeFacet,
  onRemoveRangeFacet,
  getAppliedRangeFacet,
}: DateRangeFacetValuesProps) {
  const appliedRangeFacet = getAppliedRangeFacet(facet.name)

  // Use dayjs's built-in logic to determine which preset matches the stored timestamp (min - Unix timestamp currently in the URL/Search Query)
  const selectedValue = appliedRangeFacet?.min
    ? getSelectedTimeRangeId(appliedRangeFacet.min)
    : 'ANY_TIME'

  const handleChange = (rangeId: string) => {
    const selectedTimeRange = timeRanges.find(r => r.id === rangeId)

    if (!selectedTimeRange?.range) {
      onRemoveRangeFacet(facet.name)
      return
    }

    // Always calculate 'min' relative to the moment of the click.
    // Use dayjs unit-aware subtraction so month/year account for varying lengths.
    const unitMap: Record<string, dayjs.ManipulateType> = {
      PAST_HOUR: 'hour',
      PAST_DAY: 'day',
      PAST_WEEK: 'week',
      PAST_MONTH: 'month',
      PAST_YEAR: 'year',
    }

    /**
     * We use dayjs.subtract() instead of fixed seconds to handle
     * calendar irregularities. dayjs correctly calculates "one month ago"
     * whether the current month has 28, 30, or 31 days.
     */
    const minValue = String(dayjs().subtract(1, unitMap[rangeId]).unix())
    onSetRangeFacet(facet.name, minValue)
  }

  return (
    <RadioGroup
      name={`range-facet-${facet.name}`}
      value={selectedValue}
      onChange={e => handleChange(e.target.value)}
    >
      {timeRanges.map(range => (
        <FormControlLabel
          key={range.label}
          value={range.id}
          control={<Radio size="small" />}
          label={range.label}
          sx={{ mb: 0.5 }}
        />
      ))}
    </RadioGroup>
  )
}

type AppliedFacetsChipsProps = {
  query: SearchQuery
  onRemoveFacet: (facetName: string, facetValue: string) => void
  onRemoveRangeFacet: (facetName: string) => void
}

/**
 * Component that displays applied facets as chips with delete icons
 */
export function AppliedFacetsChips({
  query,
  onRemoveFacet,
  onRemoveRangeFacet,
}: AppliedFacetsChipsProps) {
  const booleanQuery = query.booleanQuery || []
  const rangeQuery = query.rangeQuery || []
  const hasAppliedFacets = booleanQuery.length > 0 || rangeQuery.length > 0

  if (!hasAppliedFacets) {
    return null
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
        alignItems: 'center',
      }}
    >
      {booleanQuery.map((kv, index) => {
        if (!shouldShowFacetValue(kv.key, kv.value)) {
          return null
        }

        return (
          <Chip
            key={`${kv.key}-${kv.value}-${index}`}
            sx={ChipStyles}
            deleteIcon={
              <CloseIcon
                sx={{
                  width: '16px',
                  '& path': {
                    fill: 'var(--synapse-white)',
                  },
                }}
              />
            }
            onDelete={() => onRemoveFacet(kv.key, kv.value)}
            label={
              isUserFacet(kv.key) ? (
                <Box
                  sx={{
                    '& .MuiTypography-root': {
                      color: 'var(--synapse-white)',
                    },
                  }}
                >
                  <UserBadge userId={kv.value} />
                </Box>
              ) : (
                <Typography variant="smallText1">{kv.value}</Typography>
              )
            }
          />
        )
      })}

      {rangeQuery.map((kr, index) => {
        const displayValue = formatTimeRangeDisplayValue(kr.min)

        return (
          <Chip
            sx={ChipStyles}
            key={`${kr.key}-${kr.min}-${index}`}
            label={`${displayValue}`}
            deleteIcon={
              <CloseIcon
                sx={{
                  width: '16px',
                  '& path': {
                    fill: 'var(--synapse-white)',
                  },
                }}
              />
            }
            onDelete={() => onRemoveRangeFacet(kr.key)}
          />
        )
      })}
    </Box>
  )
}
