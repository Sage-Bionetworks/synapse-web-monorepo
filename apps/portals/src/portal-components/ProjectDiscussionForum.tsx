import * as React from 'react'
import { useGetEntityForum } from 'synapse-react-client/dist/utils/hooks/SynapseAPI/entity/useGetEntityForum'
import { DiscussionThread } from 'synapse-react-client/dist/containers/discussion_forum/DiscussionThread'
import { ForumPage } from 'synapse-react-client/dist/containers/discussion_forum/ForumPage'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useHistory, useLocation } from 'react-router-dom'
import { Box, IconButton } from '@mui/material'

const ProjectDiscussionForum = () => {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const entityId = urlSearchParams.get('id') ?? ''
  const threadId = urlSearchParams.get('threadIdNotAQueryFilterKey') ?? ''
  const location = useLocation()
  const history = useHistory()
  const { data: forum } = useGetEntityForum(entityId)
  const updateThreadId = (threadId?:string) => {
    const searchParams = new URLSearchParams(location.search)
    if (threadId) {
      searchParams.append('threadIdNotAQueryFilterKey', threadId)
    } else {
      searchParams.delete('threadIdNotAQueryFilterKey')
    }
    history.replace({ pathname: location.pathname, search: searchParams.toString() })
  }
  if (threadId) {
    return <Box>
      <IconButton onClick={() => {
        updateThreadId()
      }}>
        <ArrowBackIcon />
      </IconButton>
      <DiscussionThread threadId={threadId} limit={20} />
    </Box>
  } else if (forum && forum.id) {
    return <ForumPage forumId={forum.id} limit={20} onClickLink={threadId => {
      updateThreadId(threadId)
    }} />
  } else {
    return <></>
  }
}

export default ProjectDiscussionForum
