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
import MarkdownSynapse from '../Markdown/MarkdownSynapse'
import { SkeletonTable } from '../Skeleton/SkeletonTable'
import WarningDialog from '../SynapseForm/WarningDialog'
import { displayToast } from '../ToastMessage/ToastMessage'
import { UserBadge } from '../UserCard/UserBadge'
import { ForumThreadEditor } from './ForumThreadEditor'
import { Box } from '@mui/material'
import { copyStringToClipboard } from '@/utils/functions/StringUtils'

export type DiscussionReplyProps = {
  reply: DiscussionReplyBundle
  isReplyAuthorModerator?: boolean
  onClickLink?: () => void
}

// 11978
const DEFAULT_ON_CLICK_LINK = (id: string) => {
  const baseUrl = `${window.location.origin}${window.location.pathname}`
  const url = `${baseUrl}#${id}`
  copyStringToClipboard(url)
  console.log('Copied thread URL:', url)
}

export function DiscussionReply(props: DiscussionReplyProps) {
  const {
    reply,
    onClickLink = DEFAULT_ON_CLICK_LINK,
    isReplyAuthorModerator = false,
  } = props
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
    if (window.location.hash === `#${reply.id}` && replyRef.current) {
      setTimeout(() => {
        replyRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 200)

      // Optional: highlight briefly
      replyRef.current.style.transition = 'background-color 1s ease'
      replyRef.current.style.backgroundColor = 'rgba(255, 255, 0, 0.3)'
      setTimeout(() => {
        if (replyRef.current) {
          replyRef.current.style.backgroundColor = 'transparent'
        }
      }, 2000)
    }
  }, [reply.id])

  return (
    <div className="reply-container" id={reply.id} ref={replyRef}>
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
                  </span>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      marginTop: { xs: '8px', sm: 0 },
                      float: { sm: 'right' },
                    }}
                  >
                    <button onClick={() => onClickLink(reply.id)}>
                      <IconSvg icon="link" />
                    </button>
                    {isCurrentUserAuthor && (
                      <button onClick={() => setShowReplyModal(true)}>
                        <IconSvg icon="edit" />
                      </button>
                    )}
                    {entityBundle?.permissions.canModerate && (
                      <button onClick={() => setShowDeleteModal(true)}>
                        <IconSvg icon="delete" />
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
