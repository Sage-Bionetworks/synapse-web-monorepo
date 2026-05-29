import { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import {
  Autocomplete,
  InputAdornment,
  TextField,
  TextFieldProps,
  useTheme,
} from '@mui/material'
import { useSearchParams, useNavigate } from 'react-router'
import {
  SEARCH_TERM,
  SEARCH_ROLE,
} from 'synapse-react-client/utils/functions/SqlFunctions'
import { useDebouncedEffect } from 'synapse-react-client/utils/hooks/useDebouncedEffect'

const SUGGESTION_DEBOUNCE_MS = 300

type PortalFullTextSearchFieldProps = TextFieldProps & {
  placeholder?: string
  role?: string
  path?: string
  callback?: (searchString: string) => void
  getSuggestions?: (searchText: string) => Promise<string[]>
}

export function PortalFullTextSearchField({
  placeholder = 'Search by keyword',
  path,
  callback,
  role,
  getSuggestions,
  ...props
}: PortalFullTextSearchFieldProps) {
  const [searchParams] = useSearchParams()
  const [searchInput, setSearchInput] = useState(
    searchParams.get(SEARCH_TERM) ?? '',
  )
  const [suggestions, setSuggestions] = useState<string[]>([])
  const theme = useTheme()
  const navigate = useNavigate()

  // Keep the input in sync with URL changes so multiple instances
  // (e.g. sticky nav + search page) reflect the same SEARCH_TERM.
  useEffect(() => {
    setSearchInput(searchParams.get(SEARCH_TERM) ?? '')
  }, [searchParams])

  useDebouncedEffect(
    () => {
      if (!getSuggestions || !searchInput?.trim()) {
        setSuggestions([])
        return
      }
      getSuggestions(searchInput)
        .then(setSuggestions)
        .catch(() => setSuggestions([]))
    },
    [searchInput, getSuggestions],
    SUGGESTION_DEBOUNCE_MS,
  )

  const handleSubmit = (value: string) => {
    const trimmed = value.trim()
    if (!trimmed) return
    if (path) {
      const params = new URLSearchParams()
      params.set(SEARCH_TERM, trimmed)
      if (role) {
        params.set(SEARCH_ROLE, role)
      }
      navigate({
        pathname: path,
        search: `?${params.toString()}`,
      })
    }
    if (callback) {
      callback(trimmed)
      setSearchInput('')
    }
  }

  const startAdornment = (
    <InputAdornment position="start">
      <SearchIcon sx={{ color: theme.palette.primary.main }} />
    </InputAdornment>
  )

  const textFieldSx = {
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    border: '1px solid',
    borderColor: 'grey.300',
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white',
    },
    ...props.sx,
  }

  if (getSuggestions) {
    return (
      <form
        style={{ width: '100%' }}
        onSubmit={e => {
          e.preventDefault()
          handleSubmit(searchInput ?? '')
        }}
      >
        <Autocomplete
          freeSolo
          disableClearable
          options={suggestions}
          inputValue={searchInput ?? ''}
          onInputChange={(_, newValue, reason) => {
            if (reason !== 'input') return
            setSearchInput(newValue)
          }}
          onChange={(_, newValue) => {
            if (typeof newValue === 'string' && newValue.trim()) {
              handleSubmit(newValue)
            }
          }}
          className={props.className}
          renderInput={params => (
            <TextField
              {...params}
              size="small"
              placeholder={placeholder}
              fullWidth
              sx={textFieldSx}
              slotProps={{
                input: {
                  ...params.InputProps,
                  startAdornment,
                },
                htmlInput: params.inputProps,
              }}
            />
          )}
        />
      </form>
    )
  }

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
        if (event.key === 'Enter') {
          handleSubmit((event.target as HTMLInputElement).value)
        }
      }}
      fullWidth
      sx={textFieldSx}
      slotProps={{
        input: {
          startAdornment,
        },
      }}
    />
  )
}

export default PortalFullTextSearchField
