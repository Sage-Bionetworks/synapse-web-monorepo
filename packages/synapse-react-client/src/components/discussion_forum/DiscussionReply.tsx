import dayjs from 'dayjs'
import React, { useState } from 'react'
import { formatDate } from '../../utils/functions/DateFormatter'
import { SMALL_USER_CARD } from '../../utils/SynapseConstants'
import { DiscussionReplyBundle } from '@sage-bionetworks/synapse-types'
import UserCard from '../UserCard/UserCard'
import MarkdownSynapse from '../Markdown/MarkdownSynapse'
import { ObjectType } from '@sage-bionetworks/synapse-types'
import IconSvg from '../IconSvg/IconSvg'
import { ForumThreadEditor } from './ForumThreadEditor'
import {
  useGetCurrentUserProfile,
  useGetEntityBundle,
} from '../../synapse-queries'
import {
  useDeleteReply,
  useGetReply,
} from '../../synapse-queries/forum/useReply'
import { displayToast } from '../ToastMessage/ToastMessage'
import WarningDialog from '../SynapseForm/WarningDialog'
import { SkeletonTable } from '../Skeleton/SkeletonTable'

export type DiscussionReplyProps = {
  reply: DiscussionReplyBundle
  onClickLink?: () => void
}

export const DiscussionReply: React.FC<DiscussionReplyProps> = ({
  reply,
  onClickLink = () => alert('This functionality has not been implemented yet'),
}) => {
  const [showReplyModal, setShowReplyModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const { data: currentUserProfile } = useGetCurrentUserProfile()
  const { data: entityBundle } = useGetEntityBundle(reply.projectId)
  const { data: message, isLoading } = useGetReply(reply)

  const { mutate: deleteReply } = useDeleteReply({
    onSuccess: () => {
      setShowDeleteModal(false)
      displayToast('A reply has been deleted.', 'info')
    },
  })

  const isCurrentUserAuthor = reply.createdBy == currentUserProfile?.ownerId

  return (
    <div className="reply-container">
      {isLoading ? (
        <SkeletonTable numCols={1} numRows={4} />
      ) : (
        <>
          {message && (
            <>
              <div>
                <UserCard
                  withAvatar={true}
                  avatarSize="MEDIUM"
                  showCardOnHover={true}
                  size={SMALL_USER_CARD}
                  ownerId={reply.createdBy}
                />
                <div className="message-body">
                  <MarkdownSynapse
                    markdown={message}
                    objectType={ObjectType.REPLY}
                  />
                  <span>
                    posted {formatDate(dayjs(reply.createdOn), 'M/D/YYYY')}
                  </span>
                  <div style={{ float: 'right' }}>
                    <button onClick={() => onClickLink()}>
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
                  </div>
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
