import { useState } from 'react'
import styles from './SearchFacetPanel.module.scss'
import dayjs from 'dayjs'
import { EntityType } from '@sage-bionetworks/synapse-client'
import { entityTypeToFriendlyName } from '../../../utils/functions/EntityTypeUtils'
import {
  Box,
  FormControlLabel,
  Button,
  RadioGroup,
  Radio,
  Typography,
  Chip,
  Tooltip,
  Collapse,
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
  getAllFacetLabel,
} from './SearchFacetPanelUtils'

type SearchFacetPanelProps = {
  query: SearchQuery
  setQuery: (newQuery: SearchQuery) => void
  facets: Facet[]
  disabled?: boolean
  expanded: boolean
  onCollapse: () => void
  onAddFacet: (facetName: string, facetValue: string) => void
  onRemoveFacet: (facetName: string, facetValue: string) => void
  onSetRangeFacet: (facetName: string, minValue: string) => void
  onRemoveRangeFacet: (facetName: string) => void
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
  disabled = false,
  onAddFacet,
  onRemoveFacet,
  onSetRangeFacet,
  onRemoveRangeFacet,
  isRangeFacetApplied,
  getAppliedRangeFacet,
  expanded,
  onCollapse,
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
    <Collapse
      in={expanded}
      id="filter-search-results-panel"
      aria-labelledby="filter-results-button-label"
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {hasAppliedFacets && (
            <Button
              onClick={handleResetFilters}
              variant="text"
              size="small"
              className={styles.resetFilterButton}
              disabled={disabled}
            >
              <UTurnLeftIcon sx={{ transform: 'rotate(90deg)' }} />
              <Typography sx={{ fontSize: '16px', fontWeight: 700 }}>
                Reset Filters
              </Typography>
            </Button>
          )}
          <CloseIcon
            sx={{ marginLeft: 'auto', cursor: 'pointer' }}
            onClick={onCollapse}
            aria-expanded={expanded}
            aria-controls="filter-search-results-panel"
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 3,
            flexWrap: 'wrap',
          }}
        >
          {FACET_DISPLAY_ORDER.map(facetName => {
            const facet = facets.find(f => f.name === facetName)

            if (!facet || !shouldRenderFacet(facet)) {
              return null
            }

            return (
              <SearchFacetGroup
                disabled={disabled}
                key={facet.name}
                facet={facet}
                query={query}
                onAddFacet={onAddFacet}
                onRemoveFacet={onRemoveFacet}
                onSetRangeFacet={onSetRangeFacet}
                onRemoveRangeFacet={onRemoveRangeFacet}
                isRangeFacetApplied={isRangeFacetApplied}
                getAppliedRangeFacet={getAppliedRangeFacet}
              />
            )
          })}
        </Box>
      </Box>
    </Collapse>
  )
}

type SearchFacetGroupProps = {
  facet: Facet
  query: SearchQuery
  disabled?: boolean
  onAddFacet: (facetName: string, facetValue: string) => void
  onRemoveFacet: (facetName: string, facetValue: string) => void
  onSetRangeFacet: (facetName: string, minValue: string) => void
  onRemoveRangeFacet: (facetName: string) => void
  isRangeFacetApplied: (facetName: string) => boolean
  getAppliedRangeFacet: (facetName: string) => { min: string } | undefined
}

/**
 * Component for a facet group
 * (ex: Entity Type facet with values 'dataset', 'file', etc)
 */
function SearchFacetGroup({
  facet,
  disabled = false,
  query,
  onAddFacet,
  onRemoveFacet,
  onSetRangeFacet,
  onRemoveRangeFacet,
  isRangeFacetApplied,
  getAppliedRangeFacet,
}: SearchFacetGroupProps) {
  const displayName = getFacetDisplayName(facet.name)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minWidth: '200px' }}>
      <Typography variant="smallText2" className={styles.displayName}>
        {displayName}
      </Typography>
      {facet.type === FacetTypeNames.LITERAL ? (
        <LiteralFacetValues // checkbox list for literal facets
          disabled={disabled}
          facet={facet}
          query={query}
          onAddFacet={onAddFacet}
          onRemoveFacet={onRemoveFacet}
        />
      ) : (
        <DateRangeFacetValues // radio buttons for date/continuous facets (can only select one range at a time)
          disabled={disabled}
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
  disabled?: boolean
  onAddFacet: (facetName: string, facetValue: string) => void
  onRemoveFacet: (facetName: string, facetValue: string) => void
}

const ALL_FACET_VALUE = '__all__'

/**
 * Component for rendering literal facet values as radio buttons since the backend ANDs boolean query values
 */
function LiteralFacetValues({
  facet,
  query,
  disabled = false,
  onAddFacet,
  onRemoveFacet,
}: LiteralFacetValuesProps) {
  const [showAll, setShowAll] = useState(false)

  // Get values from the search query (url)
  const appliedValues =
    query.booleanQuery
      ?.filter(kv => kv.key === facet.name)
      .map(kv => kv.value) || []

  const selectedValue = appliedValues[0] ?? ALL_FACET_VALUE

  // Get values returned by the search results response
  const availableValues = facet.constraints.map(c => c.value)

  const allValues = Array.from(new Set([...appliedValues, ...availableValues]))

  const filteredValues = allValues.filter(value =>
    shouldShowFacetValue(facet.name, value),
  )

  const displayValues = showAll
    ? filteredValues
    : filteredValues.slice(0, MAX_FACET_VALUES_SHOWN)

  const handleChange = (newValue: string) => {
    appliedValues.forEach(v => onRemoveFacet(facet.name, v))
    if (newValue !== ALL_FACET_VALUE) {
      onAddFacet(facet.name, newValue)
    }
  }

  return (
    <RadioGroup
      name={`literal-facet-${facet.name}`}
      value={selectedValue}
      onChange={e => handleChange(e.target.value)}
    >
      <FormControlLabel
        sx={{ mb: '8px' }}
        disabled={disabled}
        value={ALL_FACET_VALUE}
        control={<Radio size="small" />}
        label={
          <Typography variant="smallText1" sx={{ lineHeight: '20px' }}>
            {getAllFacetLabel(facet.name)}
          </Typography>
        }
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          ...(showAll && { maxHeight: '280px', overflowY: 'auto' }),
        }}
      >
        {displayValues.map(value => (
          <FormControlLabel
            disabled={disabled}
            key={value}
            value={value}
            control={<Radio size="small" />}
            label={
              isUserFacet(facet.name) ? (
                <UserBadge userId={value} />
              ) : (
                <Typography variant="smallText1" sx={{ lineHeight: '20px' }}>
                  {facet.name === 'node_type'
                    ? entityTypeToFriendlyName(value as EntityType) || value
                    : value}
                </Typography>
              )
            }
          />
        ))}
      </Box>
      {filteredValues.length > MAX_FACET_VALUES_SHOWN && !showAll && (
        <Button
          disabled={disabled}
          onClick={() => setShowAll(true)}
          variant="text"
          size="small"
          sx={{ alignSelf: 'flex-start' }}
        >
          Show all {filteredValues.length}
        </Button>
      )}
    </RadioGroup>
  )
}

type DateRangeFacetValuesProps = {
  facet: Facet
  query: SearchQuery
  disabled?: boolean
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
  disabled = false,
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
          disabled={disabled}
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
            className={styles.chipStyles}
            deleteIcon={<CloseIcon className={styles.closeIcon} />}
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
                <Typography variant="smallText1">
                  {kv.key === 'node_type'
                    ? entityTypeToFriendlyName(kv.value as EntityType) ||
                      kv.value
                    : kv.value}
                </Typography>
              )
            }
          />
        )
      })}

      {rangeQuery.map((kr, index) => {
        const displayValue = formatTimeRangeDisplayValue(kr.min)
        const startDate = dayjs(parseInt(kr.min) * 1000).format('MMMM D, YYYY')

        return (
          <Tooltip
            title={`Since ${startDate}`}
            arrow
            key={`${kr.key}-${kr.min}-${index}`}
          >
            <Chip
              className={styles.chipStyles}
              label={`${displayValue}`}
              deleteIcon={<CloseIcon className={styles.closeIcon} />}
              onDelete={() => onRemoveRangeFacet(kr.key)}
            />
          </Tooltip>
        )
      })}
    </Box>
  )
}
