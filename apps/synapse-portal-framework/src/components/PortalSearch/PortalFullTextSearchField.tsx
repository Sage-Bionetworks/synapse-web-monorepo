import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import {
  InputAdornment,
  TextField,
  TextFieldProps,
  useTheme,
} from '@mui/material'
import { useSearchParams } from 'react-router'
import { FTS_SEARCH_TERM } from 'synapse-react-client/utils/functions/SqlFunctions'

type PortalFullTextSearchFieldProps = TextFieldProps & {
  placeholder?: string
  path?: string
}

export function PortalFullTextSearchField({
  placeholder = 'Search by keyword',
  path,
  ...props
}: PortalFullTextSearchFieldProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchInput, setSearchInput] = useState(
    searchParams.get(FTS_SEARCH_TERM),
  )
  const theme = useTheme()

  return (
    <TextField
      {...props}
      size={'small'}
      placeholder={placeholder}
      value={searchInput}
      onChange={event => {
        setSearchInput(event.target.value)
      }}
      onKeyDown={(event: any) => {
        if (event.key === 'Enter') {
          const trimmedInput = event.target.value.trim()
          setSearchParams({ FTS_SEARCH_TERM: trimmedInput })
          if (path) {
            window.location.pathname = `${path}`
          }
        }
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: theme.palette.primary.main }} />
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
        ...props.sx,
      }}
    />
  )
}

export default PortalFullTextSearchField
