import React from 'react'
import NoSearchResults from '@/assets/icons/NoSearchResults'
import { useGetEntity } from '@/synapse-queries/entity/useEntity'
import { useSearchForumInfinite } from '@/synapse-queries/forum/useForum'
import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material'
import { Match } from '@sage-bionetworks/synapse-client'
import { Project } from '@sage-bionetworks/synapse-types'
import { useEffect, useState } from 'react'
import DiscussionSearchResult from '../Forum/DiscussionSearchResult'
import IconSvg from '../IconSvg/IconSvg'
import { displayToast } from '../ToastMessage/ToastMessage'

const NoSearchResultComponent = (): React.ReactNode => {
  return (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      <NoSearchResults height="181px" sx={{ pt: '40px', pb: '10px' }} />
      <Typography variant="body1">No results with this query</Typography>
      <Typography variant="body1Italic">
        Search the full text of posts, replies, and titles
      </Typography>
    </Box>
  )
}

export type ForumSearchProps = {
  forumId: string
  projectId?: string
  onSearchResultsVisible?: (visible: boolean) => void
}

export const ForumSearch = (props: ForumSearchProps): React.ReactNode => {
  const { onSearchResultsVisible } = props
  const [searchInput, setSearchInput] = useState<string>('')
  const [lastSearchTerm, setLastSearchTerm] = useState<string>('')
  const [isShowingResults, setIsShowingResults] = useState(false)

  const { data: entity } = useGetEntity<Project>(props.projectId, undefined, {
    enabled: !!props.projectId,
  })

  const {
    data: infiniteData,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    error,
  } = useSearchForumInfinite(
    props.forumId,
    { searchString: lastSearchTerm },
    { enabled: !!lastSearchTerm },
  )

  useEffect(() => {
    if (error) {
      displayToast(error.reason, 'danger')
    }
  }, [error])

  const searchResults: Match[] =
    infiniteData?.pages.flatMap(page => page.matches ?? []) ?? []

  const noSearchResult =
    !isLoading && lastSearchTerm && searchResults.length == 0

  const onResetSearch = () => {
    setIsShowingResults(false)
    setSearchInput('')
  }

  function onSearch() {
    setLastSearchTerm(searchInput)
    setIsShowingResults(true)
  }

  useEffect(() => {
    if (onSearchResultsVisible) {
      onSearchResultsVisible(isShowingResults)
    }
  }, [isShowingResults, onSearchResultsVisible])

  return (
    <div className="ForumSearch">
      <div>
        <TextField
          sx={theme => ({
            [theme.breakpoints.down('md')]: {
              width: '100%',
            },
          })}
          type="search"
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
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: searchInput && (
                <InputAdornment position="end">
                  <IconButton
                    size={'small'}
                    onClick={() => {
                      onResetSearch()
                    }}
                  >
                    <IconSvg icon="clear" wrap={false} />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </div>
      {isShowingResults && (
        <>
          {noSearchResult && (
            <>
              {props.projectId && entity && (
                <Typography variant="body1Italic" className="NoResultsText">
                  No results for &quot;{lastSearchTerm}&quot; in {entity?.name}
                </Typography>
              )}
              <NoSearchResultComponent />
            </>
          )}
          {searchResults && (
            <>
              {props.projectId && !noSearchResult && (
                <Typography
                  variant="body1Italic"
                  className="ResultsText"
                  sx={{
                    my: 2,
                    mx: 1,
                  }}
                >
                  Results for &quot;{lastSearchTerm}&quot; in {entity?.name}:
                </Typography>
              )}
              {searchResults.map(match => (
                <div
                  key={`${match.forumId}-${match.threadId}-${match.replyId}`}
                >
                  <DiscussionSearchResult
                    threadId={match.threadId!}
                    replyId={match.replyId}
                  />
                </div>
              ))}
            </>
          )}
          {hasNextPage && (
            <Button
              variant="contained"
              color="primary"
              disabled={isFetchingNextPage}
              onClick={() => {
                fetchNextPage()
              }}
              sx={{
                mx: 1,
                mt: 2,
              }}
            >
              Load more
            </Button>
          )}
        </>
      )}
    </div>
  )
}

export default ForumSearch
