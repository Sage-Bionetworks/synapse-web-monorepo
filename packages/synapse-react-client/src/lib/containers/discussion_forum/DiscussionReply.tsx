import dayjs from 'dayjs'
import React, { useState } from 'react'
import { formatDate } from '../../utils/functions/DateFormatter'
import { SMALL_USER_CARD } from '../../utils/SynapseConstants'
import { DiscussionReplyBundle } from '../../utils/synapseTypes/DiscussionBundle'
import UserCard from '../UserCard'
import MarkdownSynapse from '../markdown/MarkdownSynapse'
import { ObjectType } from '../../utils/synapseTypes'
import IconSvg from '../IconSvg'
import { Modal } from 'react-bootstrap'
import { ForumThreadEditor } from './ForumThreadEditor'
import {
  useGetCurrentUserProfile,
  useGetEntityBundle,
} from '../../utils/hooks/SynapseAPI'
import { useGetModerators } from '../../utils/hooks/SynapseAPI/forum/useForum'
import {
  useDeleteReply,
  useGetReply,
} from '../../utils/hooks/SynapseAPI/forum/useReply'
import { displayToast } from '../ToastMessage'
import WarningModal from '../synapse_form_wrapper/WarningModal'
import { SkeletonTable } from '../../assets/skeletons/SkeletonTable'

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
  const { data: moderatorList } = useGetModerators(reply.forumId)
  const { data: entityBundle } = useGetEntityBundle(reply.projectId)
  const { data: message, isLoading } = useGetReply(reply)

  const { mutate: deleteReply } = useDeleteReply({
    onSuccess: () => {
      setShowDeleteModal(false)
      displayToast('A reply has been deleted.', 'info')
    },
  })

  const isCurrentUserAuthor = reply.createdBy == currentUserProfile?.ownerId
  const isCurrentUserModerator = moderatorList?.results.includes(
    currentUserProfile?.ownerId ?? '',
  )

  return (
    <div className="reply-container">
      {isLoading ? (
        <SkeletonTable numCols={1} numRows={4} />
      ) : (
        <>
          {message && (
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
          )}
        </>
      )}
      <Modal
        size="lg"
        show={showReplyModal}
        onHide={() => setShowReplyModal(false)}
        animation={false}
      >
        <Modal.Header>
          <Modal.Title>Edit Reply</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ForumThreadEditor
            isReply={true}
            initialText={message}
            onClose={() => setShowReplyModal(false)}
            id={reply.id}
          />
        </Modal.Body>
      </Modal>
      <WarningModal
        show={showDeleteModal}
        className="bootstrap-4-backport"
        title="Confirm Deletion"
        modalBody="Are you sure you want to delete this reply?"
        onCancel={() => setShowDeleteModal(false)}
        onConfirm={() =>
          deleteReply({
            forumId: reply.forumId,
            threadId: reply.threadId,
            replyId: reply.id,
          })
        }
        confirmButtonVariant="danger"
        confirmButtonText="Delete"
      />
    </div>
  )
}
