import {
  Box,
  TextField,
  InputAdornment,
  Button,
  Typography,
  IconButton,
} from '@mui/material'
import SynapseSearchResultsCard from './SynapseSearchResultsCard'
import SearchIcon from '@mui/icons-material/Search'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import React, { useState, useEffect, useMemo } from 'react'
import { useSearchInfinite } from '@/synapse-queries/search/useSearch'
import { SearchQuery } from '@sage-bionetworks/synapse-types'
import { useDocumentMetadata } from '@/utils/context/DocumentMetadataContext'
import { ArrowForward } from '@mui/icons-material'
import styles from './SynapseSearchPageResults.module.scss'
import { useSuggestion } from '@/synapse-queries/search/useSuggestion'
import { Suggestion } from '@sage-bionetworks/synapse-client'
import SearchPagePortalBanners from './SearchPagePortalBanners'
import { SYNAPSE_ENTITY_ID_REGEX } from '@/utils/functions/RegularExpressions'
import { DEFAULT_SEARCH_QUERY } from '@/utils/searchDefaults'

export type SynapseSearchPageResultsProps = {
  query?: SearchQuery
  setQuery?: (newQuery: SearchQuery) => void
}

export function SynapseSearchPageResults(props: SynapseSearchPageResultsProps) {
  const MIN_SUGGESTION_SCORE = 0.75
  const { query, setQuery } = props

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
        queryTerm: searchInputValue
          ? searchInputValue
              .split(' ')
              .map(term => term.trim())
              .filter(Boolean)
          : [],
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
        queryTerm: suggestion
          .split(' ')
          .map(term => term.trim())
          .filter(Boolean),
      }
      setQuery(newQuery)
    }
  }

  const noResults = data?.pages?.[0]?.hits?.length === 0
  const isSynId = SYNAPSE_ENTITY_ID_REGEX.test(query?.queryTerm?.[0] || '')

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '200px',
          bgcolor: theme => theme.palette.primary.dark,
          py: '40px',
          px: '80px',
          gap: '16px',
          marginBottom: '20px',
        }}
      >
        <TextField
          placeholder="Search…"
          value={searchInputValue}
          onChange={handleInputChange}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              handleSearch()
            }
          }}
          slotProps={{
            input: {
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
          endIcon={<FilterAltOutlinedIcon />}
          sx={{
            py: '10px',
            px: '20px',
            width: '200px',
            bgcolor: 'grey.700',
            color: 'white',
            '&:hover': {
              //remove hover
              boxShadow: 'none',
              color: 'white',
            },
          }}
        >
          Filter By
        </Button>
      </Box>
      {noResults && (
        <div className={styles.didYouMeanCurrentlyShowing}>
          {' '}
          No results found for <b>{query?.queryTerm?.join(' ')}</b>.
        </div>
      )}
      {data && !isSynId && suggestion && !noResults && (
        <div className={styles.didYouMeanContainer}>
          <div className={styles.didYouMeanCurrentlyShowing}>
            Currently showing results for <b>{query?.queryTerm?.join(' ')}</b>.
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
          gap: '25px',
        }}
      >
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        <SearchPagePortalBanners entityIds={entityIdsForPortalBanners} />
        {data &&
          data.pages &&
          data.pages.map((page, pageIndex) =>
            page.hits.map((hit: any) => (
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
    </Box>
  )
}
