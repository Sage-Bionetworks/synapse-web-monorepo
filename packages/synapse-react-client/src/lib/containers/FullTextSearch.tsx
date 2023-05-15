import { Collapse } from '@mui/material'
import React, { useRef, useState } from 'react'
import { TextMatchesQueryFilter } from '../utils/synapseTypes/Table/QueryFilter'
import {
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
  useQueryContext,
} from './QueryContext'
import { useQueryVisualizationContext } from './QueryVisualizationWrapper'
import { HelpPopover } from './HelpPopover'
import IconSvg from './IconSvg'

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
  const { executeQueryRequest, getLastQueryRequest } = useQueryContext()
  const {
    topLevelControlsState: { showSearchBar, showFacetFilter },
  } = useQueryVisualizationContext()
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
      const lastQueryRequestDeepClone = getLastQueryRequest()

      const { additionalFilters = [] } = lastQueryRequestDeepClone.query

      const textMatchesQueryFilter: TextMatchesQueryFilter = {
        concreteType:
          'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
        searchExpression: searchText,
      }
      // PORTALS-2093: does this additional filter already exist?
      const found = additionalFilters.find(
        filter =>
          filter.concreteType == textMatchesQueryFilter.concreteType &&
          (filter as TextMatchesQueryFilter).searchExpression ==
            textMatchesQueryFilter.searchExpression,
      )
      if (found) {
        return
      }
      additionalFilters.push(textMatchesQueryFilter)

      lastQueryRequestDeepClone.query.additionalFilters = additionalFilters
      executeQueryRequest(lastQueryRequestDeepClone)
      // reset the search text after adding this filter
      setSearchText('')
    }
  }

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    searchInputRef.current?.setCustomValidity('')
    setSearchText(event.currentTarget.value)
  }

  return (
    <div
      className={`QueryWrapperSearchInput ${
        showFacetFilter
          ? QUERY_FILTERS_EXPANDED_CSS
          : QUERY_FILTERS_COLLAPSED_CSS
      }`}
    >
      <Collapse in={showSearchBar} timeout={{ enter: 300, exit: 300 }}>
        <div className="QueryWrapperSearchInput__helppopoverwrapper">
          <form
            className="QueryWrapperSearchInput__searchbar"
            onSubmit={search}
          >
            <span className="QueryWrapperSearchInput__searchbar__searchicon">
              <IconSvg icon="search" />
            </span>
            <input
              ref={searchInputRef}
              minLength={MIN_SEARCH_QUERY_LENGTH}
              onChange={handleChange}
              placeholder="Enter Search Terms"
              value={searchText}
              type="text"
            />
            {searchText.length > 0 && (
              <button
                className="QueryWrapperSearchInput__searchbar__clearbutton"
                type="button"
                onClick={() => {
                  setSearchText('')
                }}
              >
                <IconSvg icon="close" />
              </button>
            )}
          </form>
          <div className="QueryWrapperSearchInput__helppopover">
            <HelpPopover
              markdownText={helpMessage}
              helpUrl={helpUrl}
              placement="left"
            />
          </div>
        </div>
      </Collapse>
    </div>
  )
}

export default FullTextSearch
