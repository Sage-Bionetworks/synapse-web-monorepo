import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment, TextField } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { FTS_SEARCH_TERM } from 'synapse-react-client/utils/functions/SqlFunctions'

export function PortalFullTextSearchField() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchInput, setSearchInput] = useState(
    searchParams.get(FTS_SEARCH_TERM),
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
          setSearchParams({ FTS_SEARCH_TERM: trimmedInput })
        }
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      fullWidth
      sx={{
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        border: '1px solid',
        borderColor: 'grey.300',
        '& .MuiOutlinedInput-root': {
          backgroundColor: 'white',
        },
        mb: '20px',
      }}
    />
  )
}

export default PortalFullTextSearchField
