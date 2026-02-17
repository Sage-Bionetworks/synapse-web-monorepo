import {
  Box,
  TextField,
  InputAdornment,
  Button,
  Typography,
  IconButton,
  Collapse,
  Badge,
} from '@mui/material'
import SynapseSearchResultsCard from './SynapseSearchResultsCard'
import SearchIcon from '@mui/icons-material/Search'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import React, { useState, useEffect, useMemo } from 'react'
import { useSearchInfinite } from '@/synapse-queries/search/useSearch'
import { SearchQuery, KeyRange, Hit } from '@sage-bionetworks/synapse-types'
import { useDocumentMetadata } from '@/utils/context/DocumentMetadataContext'
import { ArrowForward } from '@mui/icons-material'
import styles from './SynapseSearchPageResults.module.scss'
import { useSuggestion } from '@/synapse-queries/search/useSuggestion'
import { Suggestion } from '@sage-bionetworks/synapse-client'
import SearchPagePortalBanners from './SearchPagePortalBanners'
import { SYNAPSE_ENTITY_ID_REGEX } from '@/utils/functions/RegularExpressions'
import { DEFAULT_SEARCH_QUERY } from '@/utils/searchDefaults'
import {
  SearchFacetPanel,
  AppliedFacetsChips,
} from './SearchFacetPanel/SearchFacetPanel'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'

/**
 * Add a literal facet filter to the query
 */
function addFacetToQuery(
  query: SearchQuery,
  facetName: string,
  facetValue: string,
): SearchQuery {
  const booleanQuery = query.booleanQuery || []

  const isFilterAlreadyApplied = booleanQuery.some(
    kv => kv.key === facetName && kv.value === facetValue,
  )

  if (isFilterAlreadyApplied) {
    return query
  }

  return {
    ...query,
    facetOptions: query.facetOptions || DEFAULT_SEARCH_QUERY.facetOptions,
    booleanQuery: [
      ...booleanQuery,
      { key: facetName, value: facetValue, not: false },
    ],
    start: 0, // Reset to first page
  }
}

/**
 * Remove a literal facet filter from the query
 */
function removeFacetFromQuery(
  query: SearchQuery,
  facetName: string,
  facetValue: string,
): SearchQuery {
  const booleanQuery = query.booleanQuery || []

  return {
    ...query,
    facetOptions: query.facetOptions || DEFAULT_SEARCH_QUERY.facetOptions,
    booleanQuery: booleanQuery.filter(
      kv => !(kv.key === facetName && kv.value === facetValue),
    ),
    start: 0,
  }
}

/**
 * Set a range facet (ex, for modified on, created on)
 */
function setRangeFacetInQuery(
  query: SearchQuery,
  facetName: string,
  minValue: string,
): SearchQuery {
  const rangeQuery = query.rangeQuery || []

  // Remove any existing range for this facet
  const filteredRangeQuery = rangeQuery.filter(kr => kr.key !== facetName)

  const maxValue = String(Math.floor(Date.now() / 1000)) // Now in seconds

  return {
    ...query,
    facetOptions: query.facetOptions || DEFAULT_SEARCH_QUERY.facetOptions,
    rangeQuery: [
      ...filteredRangeQuery,
      { key: facetName, min: minValue, max: maxValue },
    ],
    start: 0,
  }
}

/**
 * Remove a range facet from the query
 */
function removeRangeFacetFromQuery(
  query: SearchQuery,
  facetName: string,
): SearchQuery {
  const rangeQuery = query.rangeQuery || []

  return {
    ...query,
    facetOptions: query.facetOptions || DEFAULT_SEARCH_QUERY.facetOptions,
    rangeQuery: rangeQuery.filter(kr => kr.key !== facetName),
    start: 0,
  }
}

/**
 * Check if a facet filter is currently applied
 */
function isFacetApplied(
  query: SearchQuery,
  facetName: string,
  facetValue: string,
): boolean {
  const booleanQuery = query.booleanQuery || []
  return booleanQuery.some(
    kv => kv.key === facetName && kv.value === facetValue,
  )
}

/**
 * Check if a range facet is currently applied
 */
function isRangeFacetApplied(query: SearchQuery, facetName: string): boolean {
  const rangeQuery = query.rangeQuery || []
  return rangeQuery.some(kr => kr.key === facetName)
}

/**
 * Get the applied range facet value for a given facet name
 */
function getAppliedRangeFacet(
  query: SearchQuery,
  facetName: string,
): KeyRange | undefined {
  const rangeQuery = query.rangeQuery || []
  return rangeQuery.find(kr => kr.key === facetName)
}

export type SynapseSearchPageResultsProps = {
  query?: SearchQuery
  setQuery?: (newQuery: SearchQuery) => void
}

export function SynapseSearchPageResults(props: SynapseSearchPageResultsProps) {
  const MIN_SUGGESTION_SCORE = 0.75
  const { query, setQuery } = props
  const [expanded, setExpanded] = useState(false)

  // Set page title (replaces jsniUtils.setPageTitle(DisplayConstants.LABEL_SEARCH) from Java)
  useDocumentMetadata({ title: `Search: ${query?.queryTerm?.join(' ')}` })

  // Capture local state to prevent search from executing on every keystroke
  // Join query terms so that textfield input looks correct
  const [searchInputValue, setSearchInputValue] = useState(
    query?.queryTerm?.join(' ') || '',
  )

  // Sync input value when query prop changes
  // Join query terms so that textfield input looks correct
  useEffect(() => {
    setSearchInputValue(query?.queryTerm?.join(' ') || '')
  }, [query])

  // Execute search
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useSearchInfinite(
    query
      ? {
          ...DEFAULT_SEARCH_QUERY,
          ...query,
          size: 50,
          returnFields: ['path'],
        }
      : { queryTerm: [], size: 50, returnFields: ['path'] },
    {
      enabled: !!query?.queryTerm?.[0],
    },
  )

  // Update local input state
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value)
  }

  // Update query only when user explicitly searches
  // Split query terms to form array
  const handleSearch = () => {
    if (setQuery) {
      const newQuery = {
        ...DEFAULT_SEARCH_QUERY,
        ...query,
        queryTerm: searchInputValue
          ? searchInputValue
              .split(' ')
              .map(term => term.trim())
              .filter(Boolean)
          : [],
        start: 0,
      }
      setQuery(newQuery)
    }
  }

  // Fetch spelling suggestions for the search terms
  const { data: suggestionData } = useSuggestion(
    { searchTerm: query?.queryTerm },

    {
      enabled: !!query?.queryTerm?.[0],
    },
  )

  const suggestion = useMemo(() => {
    const suggestionValues = suggestionData?.suggestions
    const terms = query?.queryTerm || []

    if (!suggestionValues) return null

    // Map original terms to their best suggestions if available
    const suggestionMap = new Map<string, string>()
    let hasSuggestion = false

    for (const suggestionList of suggestionValues) {
      const originalTerm = suggestionList.key
      const suggestions = Array.from(suggestionList.values ?? [])

      // Find the best suggestion for each term with the highest score above the threshold
      const bestSuggestion = suggestions.reduce<Suggestion | null>(
        (best, current) => {
          if (
            current.score === undefined ||
            current.score < MIN_SUGGESTION_SCORE
          ) {
            return best
          }
          if (!best || current.score > best.score!) {
            return current
          }
          return best
        },
        null,
      )

      // If a valid suggestion is found and it's different from the original term, add it to the map
      if (bestSuggestion?.term && bestSuggestion.term !== originalTerm) {
        suggestionMap.set(originalTerm!, bestSuggestion.term)
        hasSuggestion = true
      }
    }

    if (!hasSuggestion) return null

    // Build the corrected search string by replacing misspelled terms
    const correctedTerms = terms.map(term => suggestionMap.get(term) || term)

    return correctedTerms.join(' ')
  }, [suggestionData, query?.queryTerm])

  // Extract entity IDs from search results for relevant portal banner display
  const entityIdsForPortalBanners = useMemo(() => {
    if (!data?.pages || data.pages.length === 0) {
      return []
    }

    const entityIds = new Set<string>()

    const firstPage = data.pages[0]

    if (firstPage?.hits) {
      for (const hit of firstPage.hits) {
        // search result is the top-level Project itself
        if (hit.id) {
          entityIds.add(hit.id)
        }

        if (hit.path?.path) {
          for (const pathEntity of hit.path.path.slice(1)) {
            if (pathEntity.id) {
              entityIds.add(pathEntity.id)
            }
          }
        }
      }
    }

    const finalIds = Array.from(entityIds)

    return finalIds
  }, [data])

  const handleUseSuggestion = () => {
    if (setQuery && suggestion) {
      const newQuery = {
        ...DEFAULT_SEARCH_QUERY,
        ...query,
        queryTerm: suggestion
          .split(' ')
          .map(term => term.trim())
          .filter(Boolean),
        start: 0,
      }
      setQuery(newQuery)
    }
  }

  const noResults = data?.pages?.[0]?.hits?.length === 0
  const isSynId = SYNAPSE_ENTITY_ID_REGEX.test(query?.queryTerm?.[0] || '')

  const facets = data?.pages?.[0]?.facets || []

  // Create handler functions for facet operations
  const handleAddFacet = (facetName: string, facetValue: string) => {
    if (setQuery && query) {
      setQuery(addFacetToQuery(query, facetName, facetValue))
    }
  }

  const handleRemoveFacet = (facetName: string, facetValue: string) => {
    if (setQuery && query) {
      setQuery(removeFacetFromQuery(query, facetName, facetValue))
    }
  }

  const handleSetRangeFacet = (facetName: string, minValue: string) => {
    if (setQuery && query) {
      setQuery(setRangeFacetInQuery(query, facetName, minValue))
    }
  }

  const handleRemoveRangeFacet = (facetName: string) => {
    if (setQuery && query) {
      setQuery(removeRangeFacetFromQuery(query, facetName))
    }
  }

  const handleIsFacetApplied = (facetName: string, facetValue: string) => {
    return query ? isFacetApplied(query, facetName, facetValue) : false
  }

  const handleIsRangeFacetApplied = (facetName: string) => {
    return query ? isRangeFacetApplied(query, facetName) : false
  }

  const handleGetAppliedRangeFacet = (facetName: string) => {
    return query ? getAppliedRangeFacet(query, facetName) : undefined
  }

  const appliedFacetsCount =
    (query?.booleanQuery?.length || 0) + (query?.rangeQuery?.length || 0)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        p: '30px',
        gap: '20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: 'auto',
          gap: '16px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '16px',
            width: '100%',
          }}
        >
          <TextField
            placeholder="Search…"
            sx={{ flex: 1 }}
            value={searchInputValue}
            onChange={handleInputChange}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                handleSearch()
              }
            }}
            slotProps={{
              input: {
                sx: {
                  borderRadius: '96px',
                  boxShadow: '0px 1px 4px var(--synapse-gray-500)',
                  backgroundColor: 'var(--synapse-white)',
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: 'secondary.600' }} />
                  </InputAdornment>
                ),
              },
            }}
          />
          <Button
            variant="outlined"
            startIcon={<FilterAltOutlinedIcon />}
            onClick={() => setExpanded(!expanded)}
            sx={{
              py: '10px',
              px: '20px',
              height: '100%',
              borderRadius: 0,
              width: 'fit-content',
              color: theme => theme.palette.primary.dark,
            }}
          >
            <Typography
              sx={{
                fontWeight: 700,
                lineHeight: '16px',
                display: 'flex',
                gap: '8px',
              }}
            >
              <span>Filter Search Results</span>
              {appliedFacetsCount > 0 && (
                <Badge
                  badgeContent={appliedFacetsCount}
                  color="primary"
                  sx={{
                    '& .MuiBadge-badge': {
                      position: 'static',
                      transform: 'none',
                      height: '18px',
                      minWidth: '18px',
                    },
                  }}
                />
              )}
            </Typography>
          </Button>
        </Box>
        {isLoading && <SynapseSpinner size={40} />}
        <Box>
          {!isLoading && facets.length > 0 && (
            <Collapse in={expanded}>
              <Box
                sx={{
                  border: '1px solid',
                  borderColor: 'var(--synapse-gray-100)',
                  backgroundColor: 'var(--synapse-white)',
                  padding: '25px',
                  boxShadow: '0 4px 16px 0 rgba(0, 0, 0, 0.04)',
                }}
              >
                {query && setQuery && (
                  <SearchFacetPanel
                    query={query}
                    setQuery={setQuery}
                    facets={facets}
                    onAddFacet={handleAddFacet}
                    onRemoveFacet={handleRemoveFacet}
                    onSetRangeFacet={handleSetRangeFacet}
                    onRemoveRangeFacet={handleRemoveRangeFacet}
                    isFacetApplied={handleIsFacetApplied}
                    isRangeFacetApplied={handleIsRangeFacetApplied}
                    getAppliedRangeFacet={handleGetAppliedRangeFacet}
                  />
                )}
              </Box>
            </Collapse>
          )}
        </Box>
      </Box>
      <>
        {noResults && (
          <div className={styles.didYouMeanCurrentlyShowing}>
            {' '}
            No results found for <b>{query?.queryTerm?.join(' ')}</b>.
          </div>
        )}
        {data && !isSynId && suggestion && !noResults && (
          <div className={styles.didYouMeanContainer}>
            <div className={styles.didYouMeanCurrentlyShowing}>
              Currently showing results for <b>{query?.queryTerm?.join(' ')}</b>
              .
            </div>
            <div className={styles.didYouMeanSuggestion}>
              <SearchIcon
                sx={{ color: 'grey.600' }}
                className={styles.searchIcon}
              />
              <Typography variant="body1" className={styles.didYouMeanText}>
                Search for <b className={styles.suggestionText}>{suggestion}</b>{' '}
                instead?
              </Typography>
              <IconButton
                className={styles.didYouMeanArrowContainer}
                onClick={handleUseSuggestion}
                aria-label={`Search for ${suggestion} instead`}
                sx={{
                  borderColor: 'primary.main',
                  svg: { color: 'primary.main' },
                }}
              >
                <ArrowForward />
              </IconButton>
            </div>
          </div>
        )}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '20px',
          }}
        >
          {isLoading && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
          <SearchPagePortalBanners entityIds={entityIdsForPortalBanners} />
          {query && (
            <Box sx={{ alignSelf: 'flex-start' }}>
              <AppliedFacetsChips
                query={query}
                onRemoveFacet={handleRemoveFacet}
                onRemoveRangeFacet={handleRemoveRangeFacet}
              />
            </Box>
          )}
          {data &&
            data.pages &&
            data.pages.map((page, pageIndex) =>
              page.hits.map((hit: Hit) => (
                <SynapseSearchResultsCard
                  key={hit.id + '-' + pageIndex}
                  entityId={hit.id}
                  name={hit.name}
                  entityType={hit.node_type}
                  modifiedOn={hit.modified_on}
                />
              )),
            )}
          {hasNextPage && (
            <Button
              onClick={() => {
                void fetchNextPage()
              }}
              loading={isFetchingNextPage}
              variant="contained"
              sx={{ mt: 2 }}
            >
              {isFetchingNextPage ? 'Loading more...' : 'Load More'}
            </Button>
          )}
        </Box>
      </>
    </Box>
  )
}
