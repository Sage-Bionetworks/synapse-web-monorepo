import React, { useEffect, useState } from 'react'
import {
  getReply,
  getReplyMessageUrl,
  getThread,
  getThreadMessageUrl,
  getUserProfileById,
} from '../../synapse-client/SynapseClient'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import {
  DiscussionReplyBundle,
  DiscussionThreadBundle,
  UserProfile,
} from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import { Skeleton, Typography } from '@mui/material'
import { Col, Row } from 'react-bootstrap'
import IconSvg from '../IconSvg/IconSvg'
import { SkeletonTable } from '../Skeleton/SkeletonTable'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { formatDate } from '../../utils/functions/DateFormatter'
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

const DiscussionSearchResult = (props: DiscussionSearchResultProps) => {
  const { threadId, replyId } = props
  const { accessToken } = useSynapseContext()
  const [threadBundle, setThreadBundle] = useState<DiscussionThreadBundle>()
  const [messageUrl, setMessageUrl] = useState<string>('')
  const [replyBundle, setReplyBundle] = useState<DiscussionReplyBundle>()
  const [replyAuthor, setReplyAuthor] = useState<UserProfile>()
  const [isLoading, setIsLoading] = useState(false)

  const getThreadOrReply = async () => {
    let newMessageUrl
    const thread = await getThread(threadId, accessToken)
    setIsLoading(true)
    if (replyId) {
      const reply = await getReply(replyId, accessToken)
      newMessageUrl = await getReplyMessageUrl(reply.messageKey, accessToken)
      setReplyAuthor(await getUserProfileById(reply.createdBy))
      setReplyBundle(reply)
    } else {
      setReplyAuthor(await getUserProfileById(thread.createdBy))
      newMessageUrl = await getThreadMessageUrl(thread.messageKey, accessToken)
    }
    setMessageUrl(await getMessage(newMessageUrl.messageUrl))
    setThreadBundle(thread)
    setIsLoading(false)
  }

  useEffect(() => {
    getThreadOrReply()
  }, [])

  const getUrl = (threadId: string, projectId: string, replyId?: string) => {
    let url = `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Synapse:${projectId}/discussion/threadId=${threadId}`
    if (replyId) {
      url += `&replyId=${replyId}`
    }
    return url
  }

  return (
    <div className="bootstrap-4-backport search-result-container">
      <Row>
        <Col xs={1}>
          {isLoading ? (
            <Skeleton variant="circular" width="40px" height="40px" />
          ) : replyId ? (
            <IconSvg icon="replyTwoTone" />
          ) : (
            <IconSvg icon="chatTwoTone" />
          )}
        </Col>
        <Col xs={11}>
          {isLoading ? (
            <SkeletonTable numCols={1} numRows={4} />
          ) : (
            <>
              <Typography variant="headline3">
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
                <Typography variant="body1">{messageUrl}</Typography>
              </div>
              <div className="search-result-footer">
                {replyId ? 'Reply' : 'Thread'} by{' '}
                {<UserBadge userId={replyAuthor?.ownerId} />}{' '}
                {formatDate(dayjs(replyBundle?.createdOn))}
              </div>
            </>
          )}
        </Col>
      </Row>
    </div>
  )
}

export default DiscussionSearchResult
