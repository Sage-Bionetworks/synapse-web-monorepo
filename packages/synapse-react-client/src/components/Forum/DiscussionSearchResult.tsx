import {
  getReply,
  getReplyMessageUrl,
  getThread,
  getThreadMessageUrl,
  getUserProfileById,
} from '@/synapse-client/SynapseClient'
import React from 'react'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { formatDate } from '@/utils/functions/DateFormatter'
import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'
import { Box, Skeleton, Typography } from '@mui/material'
import {
  DiscussionReplyBundle,
  DiscussionThreadBundle,
  UserProfile,
} from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import IconSvg from '../IconSvg/IconSvg'
import { SkeletonParagraph } from '../Skeleton/SkeletonParagraph'
import { UserBadge } from '../UserCard/UserBadge'

export const getMessage = async (url: string): Promise<string> => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: '*/*',
      'Access-Control-Request-Headers': 'authorization',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
  return response.text()
}

export type DiscussionSearchResultProps = {
  threadId: string
  replyId?: string
}

const DiscussionSearchResult = (
  props: DiscussionSearchResultProps,
): React.ReactNode => {
  const { threadId, replyId } = props
  const { accessToken } = useSynapseContext()
  const [threadBundle, setThreadBundle] = useState<DiscussionThreadBundle>()
  const [messageUrl, setMessageUrl] = useState<string>('')
  const [replyBundle, setReplyBundle] = useState<DiscussionReplyBundle>()
  const [replyAuthor, setReplyAuthor] = useState<UserProfile>()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getThreadOrReply = async () => {
      let newMessageUrl
      setIsLoading(true)
      const thread = await getThread(threadId, accessToken)
      if (replyId) {
        const reply = await getReply(replyId, accessToken)
        newMessageUrl = await getReplyMessageUrl(reply.messageKey, accessToken)
        setReplyAuthor(await getUserProfileById(reply.createdBy))
        setReplyBundle(reply)
      } else {
        setReplyAuthor(await getUserProfileById(thread.createdBy))
        newMessageUrl = await getThreadMessageUrl(
          thread.messageKey,
          accessToken,
        )
      }
      setMessageUrl(await getMessage(newMessageUrl.messageUrl))
      setThreadBundle(thread)
      setIsLoading(false)
    }
    getThreadOrReply()
  }, [accessToken, replyId, threadId])

  const getUrl = (threadId: string, projectId: string, replyId?: string) => {
    let url = `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Synapse:${projectId}/discussion/threadId=${threadId}`
    if (replyId) {
      url += `&replyId=${replyId}`
    }
    return url
  }

  return (
    <div className="search-result-container">
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '40px auto',
        }}
      >
        <div>
          {isLoading ? (
            <Skeleton variant="circular" width="30px" height={'30px'} />
          ) : replyId ? (
            <IconSvg icon="replyTwoTone" />
          ) : (
            <IconSvg icon="chatTwoTone" />
          )}
        </div>
        <div>
          {isLoading ? (
            <SkeletonParagraph numRows={4} />
          ) : (
            <>
              <Typography variant="headline3" gutterBottom>
                <a
                  className="link"
                  href={getUrl(
                    threadBundle?.id!,
                    threadBundle?.projectId!,
                    replyBundle?.id,
                  )}
                >
                  {threadBundle?.title}
                </a>
              </Typography>
              <div className="truncated">
                <Typography variant="body1" gutterBottom>
                  {messageUrl}
                </Typography>
              </div>
              <div className="search-result-footer">
                {replyId ? 'Reply' : 'Thread'} by{' '}
                {<UserBadge userId={replyAuthor?.ownerId} />}{' '}
                {formatDate(dayjs(replyBundle?.createdOn))}
              </div>
            </>
          )}
        </div>
      </Box>
    </div>
  )
}

export default DiscussionSearchResult
