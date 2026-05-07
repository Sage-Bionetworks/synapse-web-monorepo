import { Autocomplete, Collapse, TextField } from '@mui/material'
import React, {
  ChangeEvent,
  SyntheticEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import { HelpPopover } from '../HelpPopover/HelpPopover'
import IconSvg from '../IconSvg/IconSvg'
import { IconSvgButton } from '../IconSvgButton'
import { useQueryContext } from '../QueryContext'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import { useGetQueryMetadata } from '../QueryWrapper/useGetQueryMetadata'
import { updateQueryUsingSearchTerm } from './FullTextSearchUtils'
import { FTSConfig } from '../SynapseTable/SearchV2'

// See PLFM-7011
const MIN_SEARCH_QUERY_LENGTH = 3
const SUGGESTION_DEBOUNCE_MS = 300

export type FullTextSearchProps = {
  ftsConfig?: FTSConfig
}

export function FullTextSearch({
  ftsConfig,
}: FullTextSearchProps): React.ReactNode {
  const { executeQueryRequest } = useQueryContext()
  const { showSearchBar } = useQueryVisualizationContext()
  const [searchText, setSearchText] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const searchInputRef = useRef<HTMLInputElement>(null)

  const { data } = useGetQueryMetadata()
  const columnModels = data?.columnModels

  // Fetch autocomplete suggestions whenever searchText changes (debounced)
  useEffect(() => {
    if (
      !ftsConfig?.getSuggestions ||
      searchText.trim().length < MIN_SEARCH_QUERY_LENGTH
    ) {
      setSuggestions([])
      return
    }
    const { getSuggestions } = ftsConfig
    const timer = setTimeout(() => {
      getSuggestions(searchText)
        .then(setSuggestions)
        .catch(() => setSuggestions([]))
    }, SUGGESTION_DEBOUNCE_MS)
    return () => clearTimeout(timer)
  }, [searchText, ftsConfig])

  const executeSearch = (text: string) => {
    executeQueryRequest(queryBundleRequest =>
      updateQueryUsingSearchTerm(
        queryBundleRequest,
        columnModels,
        text,
        ftsConfig,
      ),
    )
    setSearchText('')
    setSuggestions([])
  }

  const search = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    // The HTML validation doesn't trim the string, so we add an extra check.
    // We don't auto-trim the form text ourselves because the user may still be focused on the input.
    if (searchText.trim().length < MIN_SEARCH_QUERY_LENGTH) {
      searchInputRef.current?.setCustomValidity(
        `Search term must have a minimum of ${MIN_SEARCH_QUERY_LENGTH} characters`,
      )
    } else {
      executeSearch(searchText)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    searchInputRef.current?.setCustomValidity('')
    setSearchText(event.currentTarget.value)
  }

  const startAdornment = (
    <IconSvg
      icon="search"
      wrap={false}
      sx={{
        mr: 1,
        color: 'grey.600',
      }}
    />
  )

  const endAdornment = (
    <>
      {searchText.length > 0 && (
        <IconSvgButton
          icon="close"
          size="small"
          onClick={() => {
            setSearchText('')
            setSuggestions([])
          }}
        />
      )}
      {ftsConfig?.searchHelpURL && (
        <HelpPopover
          markdownText={'This search bar is powered by MySQL Full Text Search.'}
          helpUrl={ftsConfig.searchHelpURL}
          placement="left"
        />
      )}
    </>
  )

  return (
    <div className={`QueryWrapperFullTextSearchInput`}>
      <Collapse in={showSearchBar} timeout={{ enter: 300, exit: 300 }}>
        <form onSubmit={search}>
          {ftsConfig?.getSuggestions ? (
            <Autocomplete
              freeSolo
              options={suggestions}
              inputValue={searchText}
              onInputChange={(_, newValue, reason) => {
                if (reason !== 'input') return
                searchInputRef.current?.setCustomValidity('')
                setSearchText(newValue)
              }}
              onChange={(_, newValue) => {
                // Auto-execute search when a suggestion is selected from the dropdown
                if (
                  typeof newValue === 'string' &&
                  newValue.trim().length >= MIN_SEARCH_QUERY_LENGTH
                ) {
                  executeSearch(newValue)
                }
              }}
              renderInput={params => (
                <TextField
                  {...params}
                  sx={{ width: '100%' }}
                  placeholder="Enter Search Terms"
                  type="text"
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      startAdornment,
                      endAdornment,
                    },
                    htmlInput: {
                      ...params.inputProps,
                      minLength: MIN_SEARCH_QUERY_LENGTH,
                      ref: (node: HTMLInputElement | null) => {
                        searchInputRef.current = node
                        // Also forward Autocomplete's internal ref
                        const { ref } =
                          params.inputProps as React.InputHTMLAttributes<HTMLInputElement> & {
                            ref?: React.Ref<HTMLInputElement>
                          }
                        if (typeof ref === 'function') {
                          ref(node)
                        } else if (ref && 'current' in ref) {
                          ;(
                            ref as React.MutableRefObject<HTMLInputElement | null>
                          ).current = node
                        }
                      },
                    },
                  }}
                />
              )}
            />
          ) : (
            <TextField
              sx={{ width: '100%' }}
              onChange={handleChange}
              placeholder="Enter Search Terms"
              value={searchText}
              type="text"
              slotProps={{
                input: {
                  startAdornment,
                  endAdornment,
                },
                htmlInput: {
                  minLength: MIN_SEARCH_QUERY_LENGTH,
                  ref: searchInputRef,
                },
              }}
            />
          )}
        </form>
      </Collapse>
    </div>
  )
}

export default FullTextSearch
