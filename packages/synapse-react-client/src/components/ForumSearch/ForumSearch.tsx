import React, { useEffect, useState } from 'react'
import { forumSearch, getEntity } from '../../synapse-client/SynapseClient'
import {
  DiscussionSearchResponse,
  Match,
} from '@sage-bionetworks/synapse-types'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import DiscussionSearchResult from '../DiscussionSearchResult'
import { Entity } from '@sage-bionetworks/synapse-types'
import { Button, Typography } from '@mui/material'
import NoSearchResults from '../../assets/icons/NoSearchResults'
import IconSvg from '../IconSvg/IconSvg'
import { displayToast } from '../ToastMessage/ToastMessage'

export type ForumSearchProps = {
  forumId: string
  projectId?: string
  onSearchResultsVisible?: (visible: boolean) => void
}

export const ForumSearch = (props: ForumSearchProps) => {
  const { onSearchResultsVisible } = props
  const { accessToken } = useSynapseContext()
  const [searchInput, setSearchInput] = useState<string>('')
  const [searchResult, setSearchResult] = useState<DiscussionSearchResponse>()
  const [matchList, setMatchList] = useState<Match[]>()
  const [entity, setEntity] = useState<Entity | undefined>()
  const [noSearchResult, setNoSearchResult] = useState(false)

  const onSearch = async () => {
    if (onSearchResultsVisible) {
      onSearchResultsVisible(true)
    }
    try {
      setSearchResult(undefined)
      setNoSearchResult(false)
      const searchResponse = await forumSearch(
        {
          searchString: searchInput,
          nextPageToken: undefined,
        },
        props.forumId,
        accessToken,
      )
      if (searchResponse.matches.length == 0) {
        setNoSearchResult(true)
      }
      setSearchResult(searchResponse)
      setMatchList(searchResponse.matches)
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  const onResetSearch = () => {
    if (onSearchResultsVisible) {
      onSearchResultsVisible(false)
    }
    setSearchInput('')
    setSearchResult(undefined)
    setNoSearchResult(false)
    setMatchList(undefined)
  }

  useEffect(() => {
    const fetchEntity = async () => {
      if (props.projectId) {
        const entity = await getEntity(accessToken, props.projectId)
        setEntity(entity)
      }
    }
    fetchEntity()
  }, [accessToken, props.projectId])

  const NoSearchResultComponent = () => {
    return (
      <div className="text-center">
        {NoSearchResults}
        <Typography variant="body1">No results with this query</Typography>
        <Typography variant="body1Italic">
          Search the full text of posts, replies, and titles
        </Typography>
      </div>
    )
  }

  const onLoadMore = async () => {
    const searchResponse = await forumSearch(
      {
        searchString: searchInput,
        nextPageToken: searchResult?.nextPageToken,
      },
      props.forumId,
      accessToken,
    )
    setSearchResult(searchResponse)
    if (matchList) {
      setMatchList([...matchList, ...searchResponse.matches])
    }
  }

  return (
    <div className="ForumSearch">
      <div>
        <span className="SearchIcon">
          <IconSvg icon="search" />
        </span>
        <input
          role="textbox"
          type="search"
          className={`SearchBar  ${searchResult ? 'SearchBarResult' : ''}`}
          placeholder="Search discussions"
          value={searchInput}
          onChange={event => {
            setSearchInput(event.target.value)
          }}
          onKeyDown={(event: any) => {
            if (event.key === 'Enter') {
              onSearch()
            }
          }}
        />
        {searchInput && (
          <button
            className="ClearSearchIcon"
            onClick={() => {
              onResetSearch()
            }}
          >
            <IconSvg icon="clear" />
          </button>
        )}
      </div>
      {noSearchResult && (
        <>
          {props.projectId && (
            <Typography variant="body1Italic" className="NoResultsText">
              No results for &quot;{searchInput}&quot; in {entity?.name}
            </Typography>
          )}
          <NoSearchResultComponent />
        </>
      )}
      {matchList && (
        <>
          {props.projectId && !noSearchResult && (
            <Typography variant="body1Italic" className="ResultsText">
              Results for &quot;{searchInput}&quot; in {entity?.name}
            </Typography>
          )}
          {matchList.map(match => (
            <div key={`${match.forumId}-${match.threadId}-${match.replyId}`}>
              <DiscussionSearchResult
                threadId={match.threadId}
                replyId={match.replyId}
              />
            </div>
          ))}
        </>
      )}
      {searchResult?.nextPageToken && (
        <div className="text-center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              onLoadMore()
            }}
          >
            Load more
          </Button>
        </div>
      )}
    </div>
  )
}

export default ForumSearch
