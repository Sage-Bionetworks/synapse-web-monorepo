import { useGetCurrentUserProfile, useGetEntityBundle } from '@/synapse-queries'
import { useDeleteReply, useGetReply } from '@/synapse-queries/forum/useReply'
import { formatDate } from '@/utils/functions/DateFormatter'
import {
  DiscussionReplyBundle,
  ObjectType,
} from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import { useState, useRef, useEffect } from 'react'
import IconSvg from '../IconSvg/IconSvg'
import MarkdownSynapse from '../Markdown/MarkdownSynapse/MarkdownSynapse'
import { SkeletonTable } from '../Skeleton/SkeletonTable'
import WarningDialog from '../SynapseForm/WarningDialog'
import { displayToast } from '../ToastMessage/ToastMessage'
import { UserBadge } from '../UserCard/UserBadge'
import { ForumThreadEditor } from './ForumThreadEditor'
import { Box } from '@mui/material'
import { copyStringToClipboard } from '@/utils/functions/StringUtils'
import { REPLY_ID_PARAM_KEY } from './DiscussionConstants'

export type DiscussionReplyProps = {
  reply: DiscussionReplyBundle
  isReplyAuthorModerator?: boolean
  onClickLink?: () => void
}

const handleCopyLink = (id: string) => {
  const baseUrl = `${window.location.origin}${window.location.pathname}`
  const url = `${baseUrl}?${REPLY_ID_PARAM_KEY}=${id}`
  copyStringToClipboard(url).then(() =>
    displayToast('Reply link copied to clipboard', 'info'),
  )
}

export function DiscussionReply(props: DiscussionReplyProps) {
  const { reply, isReplyAuthorModerator = false } = props
  const [showReplyModal, setShowReplyModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const { data: currentUserProfile } = useGetCurrentUserProfile()
  const { data: entityBundle } = useGetEntityBundle(reply.projectId)
  const { data: message, isLoading } = useGetReply(reply)
  const replyRef = useRef<HTMLDivElement>(null)

  const { mutate: deleteReply } = useDeleteReply({
    onSuccess: () => {
      setShowDeleteModal(false)
      displayToast('A reply has been deleted.', 'info')
    },
  })

  const isCurrentUserAuthor = reply.createdBy == currentUserProfile?.ownerId

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const replyId = params.get(REPLY_ID_PARAM_KEY)
    let timerId: ReturnType<typeof setTimeout>
    if (replyId === reply.id && replyRef.current) {
      replyRef.current.style.transition = 'background-color 1s ease'
      replyRef.current.style.backgroundColor = '#fbf4e0'
      replyRef.current.style.borderColor = '#f4dda3'
      timerId = setTimeout(() => {
        if (replyRef.current) {
          replyRef.current.style.backgroundColor = '#f9f9f9'
          replyRef.current.style.borderColor = '#ccc'
        }
      }, 2000)
    }
    return () => {
      if (timerId) {
        clearTimeout(timerId)
      }
    }
  }, [reply.id])

  return (
    <div
      className="reply-container"
      id={`reply._${reply.id}`}
      ref={replyRef}
      role={'article'}
    >
      {isLoading ? (
        <SkeletonTable numCols={1} numRows={4} />
      ) : (
        <>
          {message && (
            <>
              <div>
                <UserBadge
                  userId={reply.createdBy}
                  withAvatar={true}
                  avatarSize="MEDIUM"
                  showCardOnHover={true}
                  showModeratorBadge={isReplyAuthorModerator}
                />
                <div className="message-body">
                  <MarkdownSynapse
                    markdown={message}
                    objectType={ObjectType.REPLY}
                  />
                  <span>
                    posted {formatDate(dayjs(reply.createdOn), 'M/D/YYYY')}
                    {reply.isEdited ? <i>{' (Edited)'}</i> : null}
                  </span>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      marginTop: { xs: '8px', sm: 0 },
                      float: { sm: 'right' },
                    }}
                  >
                    <button onClick={() => handleCopyLink(reply.id)}>
                      <IconSvg icon="link" label={'Copy link to this reply'} />
                    </button>
                    {isCurrentUserAuthor && (
                      <button onClick={() => setShowReplyModal(true)}>
                        <IconSvg icon="edit" label={'Edit reply'} />
                      </button>
                    )}
                    {entityBundle?.permissions.canModerate && (
                      <button onClick={() => setShowDeleteModal(true)}>
                        <IconSvg icon="delete" label={'Delete reply'} />
                      </button>
                    )}
                  </Box>
                </div>
              </div>
              <ForumThreadEditor
                isReply={true}
                initialText={message}
                onClose={() => setShowReplyModal(false)}
                id={reply.id}
                isDialog={true}
                openDialog={showReplyModal}
              />
              <WarningDialog
                open={showDeleteModal}
                title="Confirm Deletion"
                content="Are you sure you want to delete this reply?"
                onCancel={() => {
                  setShowDeleteModal(false)
                }}
                onConfirm={() =>
                  deleteReply({
                    forumId: reply.forumId,
                    threadId: reply.threadId,
                    replyId: reply.id,
                  })
                }
                confirmButtonColor="error"
                confirmButtonText="Delete"
              />
            </>
          )}
        </>
      )}
    </div>
  )
}
