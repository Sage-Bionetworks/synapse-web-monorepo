import { Collapse, TextField } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent, useRef, useState } from 'react'
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

export type FullTextSearchProps = {
  ftsConfig?: FTSConfig
}

export function FullTextSearch({
  ftsConfig,
}: FullTextSearchProps): React.ReactNode {
  const { executeQueryRequest } = useQueryContext()
  const { showSearchBar } = useQueryVisualizationContext()
  const [searchText, setSearchText] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)

  const { data } = useGetQueryMetadata()
  const columnModels = data?.columnModels

  const search = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    // The HTML validation doesn't trim the string, so we add an extra check.
    // We don't auto-trim the form text ourselves because the user may still be focused on the input.
    if (searchText.trim().length < MIN_SEARCH_QUERY_LENGTH) {
      searchInputRef.current?.setCustomValidity(
        `Search term must have a minimum of ${MIN_SEARCH_QUERY_LENGTH} characters`,
      )
    } else {
      executeQueryRequest(queryBundleRequest =>
        updateQueryUsingSearchTerm(
          queryBundleRequest,
          columnModels,
          searchText,
          setSearchText,
          ftsConfig,
        ),
      )
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    searchInputRef.current?.setCustomValidity('')
    setSearchText(event.currentTarget.value)
  }

  return (
    <div className={`QueryWrapperFullTextSearchInput`}>
      <Collapse in={showSearchBar} timeout={{ enter: 300, exit: 300 }}>
        <form onSubmit={search}>
          <TextField
            sx={{ width: '100%' }}
            onChange={handleChange}
            placeholder="Enter Search Terms"
            value={searchText}
            type="text"
            slotProps={{
              input: {
                startAdornment: (
                  <IconSvg
                    icon="search"
                    wrap={false}
                    sx={{
                      mr: 1,
                      color: 'grey.600',
                    }}
                  />
                ),
                endAdornment: (
                  <>
                    {searchText.length > 0 && (
                      <IconSvgButton
                        icon="close"
                        size="small"
                        onClick={() => {
                          setSearchText('')
                        }}
                      />
                    )}
                    <HelpPopover
                      markdownText={
                        'This search bar is powered by MySQL Full Text Search.'
                      }
                      helpUrl={ftsConfig?.searchHelpURL}
                      placement="left"
                    />
                  </>
                ),
              },

              htmlInput: {
                minLength: MIN_SEARCH_QUERY_LENGTH,
                ref: searchInputRef,
              },
            }}
          />
        </form>
      </Collapse>
    </div>
  )
}

export default FullTextSearch
