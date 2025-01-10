import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment, TextField } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { FTS_SEARCH_PARAM_KEY } from 'synapse-react-client/utils/functions/SqlFunctions'

export function PortalFullTextSearchField() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchInput, setSearchInput] = useState(
    searchParams.get(FTS_SEARCH_PARAM_KEY),
  )

  return (
    <TextField
      size={'small'}
      placeholder="Search by keyword"
      value={searchInput}
      onChange={event => {
        setSearchInput(event.target.value)
      }}
      onKeyDown={(event: any) => {
        if (event.key === 'Enter') {
          const trimmedInput = event.target.value.trim()
          setSearchParams({ FTS_SEARCH_PARAM_KEY: trimmedInput })
        }
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        maxWidth: { xs: '100%', md: '350px' },
        flex: '1 1 350px',
      }}
    />
  )
}

export default PortalFullTextSearchField
