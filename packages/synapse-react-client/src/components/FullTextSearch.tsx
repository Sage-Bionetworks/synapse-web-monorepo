import { Collapse, IconButton, TextField } from '@mui/material'
import React, { ChangeEvent, useRef, useState } from 'react'
import { TextMatchesQueryFilter } from '@sage-bionetworks/synapse-types'
import { useQueryContext } from './QueryContext'
import { useQueryVisualizationContext } from './QueryVisualizationWrapper'
import { HelpPopover } from './HelpPopover/HelpPopover'
import IconSvg from './IconSvg/IconSvg'

// See PLFM-7011
const MIN_SEARCH_QUERY_LENGTH = 3

export type FullTextSearchProps = {
  helpMessage?: string
  helpUrl?: string
}

export const FullTextSearch: React.FunctionComponent<FullTextSearchProps> = ({
  helpMessage = 'This search bar is powered by MySQL Full Text Search.',
  helpUrl,
}: FullTextSearchProps) => {
  const { executeQueryRequest } = useQueryContext()
  const { showSearchBar } = useQueryVisualizationContext()
  const [searchText, setSearchText] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)

  const search = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()

    // The HTML validation doesn't trim the string, so we add an extra check.
    // We don't auto-trim the form text ourselves because the user may still be focused on the input.
    if (searchText.trim().length < MIN_SEARCH_QUERY_LENGTH) {
      searchInputRef.current?.setCustomValidity(
        `Search term must have a minimum of ${MIN_SEARCH_QUERY_LENGTH} characters`,
      )
    } else {
      executeQueryRequest(request => {
        const { additionalFilters = [] } = request.query

        const textMatchesQueryFilter: TextMatchesQueryFilter = {
          concreteType:
            'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
          searchExpression: searchText,
        }
        // PORTALS-2093: does this additional filter already exist?
        const found = additionalFilters.find(
          filter =>
            filter.concreteType == textMatchesQueryFilter.concreteType &&
            filter.searchExpression == textMatchesQueryFilter.searchExpression,
        )
        if (found) {
          return request
        }
        additionalFilters.push(textMatchesQueryFilter)

        request.query.additionalFilters = additionalFilters
        // reset the search text after adding this filter
        setSearchText('')
        return request
      })
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
            inputProps={{
              minLength: MIN_SEARCH_QUERY_LENGTH,
              ref: searchInputRef,
            }}
            InputProps={{
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
                    <IconButton
                      size={'small'}
                      onClick={() => {
                        setSearchText('')
                      }}
                    >
                      <IconSvg icon="close" wrap={false} fontSize={'inherit'} />
                    </IconButton>
                  )}
                  <HelpPopover
                    markdownText={helpMessage}
                    helpUrl={helpUrl}
                    placement="left"
                  />
                </>
              ),
            }}
            onChange={handleChange}
            placeholder="Enter Search Terms"
            value={searchText}
            type="text"
          />
        </form>
      </Collapse>
    </div>
  )
}

export default FullTextSearch
