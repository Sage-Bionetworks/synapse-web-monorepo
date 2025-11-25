import { Box, TextField, InputAdornment, Button } from '@mui/material'
import SynapseSearchResultsCard from './SynapseSearchResultsCard'
import SearchIcon from '@mui/icons-material/Search'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import React, { useState } from 'react'
import { useSearchInfinite } from '@/synapse-queries/search/useSearch'
import { SearchQuery } from '@sage-bionetworks/synapse-types'
import { useSearchParams } from 'react-router'
import { SEARCH_PAGE_QUERY_PARAM } from '@/utils/SynapseConstants'

export function SynapseSearchPageResults() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchInputValue, setSearchInputValue] = useState(
    searchParams.get(SEARCH_PAGE_QUERY_PARAM) || '',
  )

  const searchQuery: SearchQuery = {
    queryTerm: searchInputValue ? [searchInputValue] : [],
  }

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useSearchInfinite(searchQuery, {
    enabled: !!searchInputValue,
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(event.target.value)
  }

  const handleSearch = () => {
    setSearchParams(prev => {
      if (searchInputValue) {
        prev.set(SEARCH_PAGE_QUERY_PARAM, searchInputValue)
      } else {
        prev.delete(SEARCH_PAGE_QUERY_PARAM)
      }
      return prev
    })
  }

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
        }}
      >
        <TextField
          placeholder="Search…"
          value={searchInputValue}
          onChange={handleInputChange}
          onKeyDown={e => {
            if (e.key === 'Enter') handleSearch()
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          pr: '150px',
          py: '25px',
          gap: '25px',
        }}
      >
        {isLoading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
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
