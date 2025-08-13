import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import {
  InputAdornment,
  TextField,
  TextFieldProps,
  useTheme,
} from '@mui/material'
import { useSearchParams, useNavigate } from 'react-router'
import {
  FTS_SEARCH_TERM,
  FTS_SEARCH_ROLE,
} from 'synapse-react-client/utils/functions/SqlFunctions'

type PortalFullTextSearchFieldProps = TextFieldProps & {
  placeholder?: string
  role?: string
  path?: string
  callback?: (searchString: string) => void
}

export function PortalFullTextSearchField({
  placeholder = 'Search by keyword',
  path,
  callback,
  role,
  ...props
}: PortalFullTextSearchFieldProps) {
  const [searchParams] = useSearchParams()
  const [searchInput, setSearchInput] = useState(
    searchParams.get(FTS_SEARCH_TERM),
  )
  const theme = useTheme()
  const navigate = useNavigate()

  return (
    <TextField
      {...props}
      size={'small'}
      placeholder={placeholder}
      value={searchInput || ''}
      onChange={event => {
        setSearchInput(event.target.value)
      }}
      onKeyDown={event => {
        const trimmedInput = (event.target as HTMLInputElement).value.trim()
        if (event.key === 'Enter' && trimmedInput.length > 0) {
          if (path) {
            const params = new URLSearchParams()
            params.set(FTS_SEARCH_TERM, trimmedInput)
            if (role) {
              params.set(FTS_SEARCH_ROLE, role)
            }
            navigate({
              pathname: path,
              search: `?${params.toString()}`,
            })
          }
          if (callback) {
            callback(trimmedInput)
          }
        }
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
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: theme.palette.primary.main }} />
            </InputAdornment>
          ),
        },
      }}
    />
  )
}

export default PortalFullTextSearchField
