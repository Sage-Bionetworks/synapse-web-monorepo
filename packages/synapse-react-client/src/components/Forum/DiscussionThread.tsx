import dayjs from 'dayjs'
import React, { useState } from 'react'
import { formatDate } from '../../utils/functions/DateFormatter'
import { useGetRepliesInfinite } from '../../synapse-queries/forum/useReply'
import {
  useDeleteThread,
  useGetThread,
  useRestoreThread,
} from '../../synapse-queries/forum/useThread'
import { SRC_SIGN_IN_CLASS } from '../../utils/SynapseConstants'
import {
  ALL_ENTITY_BUNDLE_FIELDS,
  ObjectType,
  SubscriptionObjectType,
} from '@sage-bionetworks/synapse-types'
import { displayToast } from '../ToastMessage/ToastMessage'
import { DiscussionReply } from './DiscussionReply'
import { FormControl } from 'react-bootstrap'
import { Button, Typography } from '@mui/material'
import IconSvg from '../IconSvg/IconSvg'
import MarkdownSynapse from '../Markdown/MarkdownSynapse'
import { useSubscription } from '../../synapse-queries/subscription/useSubscription'
import {
  useGetCurrentUserProfile,
  useGetEntityBundle,
} from '../../synapse-queries'
import { ForumThreadEditor } from './ForumThreadEditor'
import WarningDialog from '../SynapseForm/WarningDialog'
import { SubscribersModal } from './SubscribersModal'
import { ConfirmationDialog } from '../ConfirmationDialog/ConfirmationDialog'
import { UserBadge } from '../UserCard/UserBadge'

export type DiscussionThreadProps = {
  threadId: string
  limit: number
}

const FOLLOWING_TEXT = 'You are following this topic. Click to stop following.'
const UNFOLLOWING_TEXT = 'You are not following this topic. Click to follow.'
const SIGN_IN_TEXT = 'You will need to sign in for access to that resource'
const INPUT_PLACEHOLDER = 'Write a reply...'

export function DiscussionThread(props: DiscussionThreadProps) {
  const { threadId, limit } = props

  const [orderByDatePosted, setOrderByDatePosted] = useState(true)
  const [showThreadModal, setShowThreadModal] = useState(false)
  const [showReplyEditor1, setShowReplyEditor1] = useState(false)
  const [showReplyEditor2, setShowReplyEditor2] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showSignInModal, setShowSignInModal] = useState(false)
  const [showRestoreModal, setShowRestoreModal] = useState(false)
  const [showSubscriberModal, setShowSubscriberModal] = useState(false)

  const { threadData, threadBody, togglePin } = useGetThread(threadId)
  const { data: currentUserProfile } = useGetCurrentUserProfile()
  const { data: entityBundle } = useGetEntityBundle(
    threadData?.projectId ?? '',
    undefined,
    ALL_ENTITY_BUNDLE_FIELDS,
    {
      enabled: !!threadData,
    },
  )

  const { subscription, toggleSubscribed, isLoading } = useSubscription(
    threadId,
    SubscriptionObjectType.THREAD,
  )
  const { mutate: deleteThread } = useDeleteThread({
    onSuccess: () => {
      setShowDeleteModal(false)
      displayToast('A thread has been deleted.', 'info')
    },
  })
  const { mutate: restoreThread } = useRestoreThread({
    onSuccess: () => {
      setShowRestoreModal(false)
      displayToast('A thread has been restored.', 'info')
    },
  })

  const isCurrentUserAuthor =
    threadData?.createdBy == currentUserProfile?.ownerId

  function handleFollowBtn() {
    if (currentUserProfile?.userName == 'anonymous') {
      setShowSignInModal(true)
    } else {
      try {
        toggleSubscribed()
      } catch (err: any) {
        displayToast(err.reason as string, 'danger')
      }
    }
  }

  const {
    data: replyData,
    hasNextPage,
    fetchNextPage,
  } = useGetRepliesInfinite(threadId, orderByDatePosted, limit)
  const replies = replyData?.pages.flatMap(page => page.results) ?? []

  return (
    <div className="bootstrap-4-backport DiscussionThread">
      {threadData && threadBody ? (
        <>
          <div style={{ textAlign: 'center' }}>
            <Button
              variant={orderByDatePosted ? 'contained' : 'outlined'}
              onClick={() => setOrderByDatePosted(true)}
            >
              Date Posted
            </Button>
            <Button
              variant={orderByDatePosted ? 'outlined' : 'contained'}
              onClick={() => setOrderByDatePosted(false)}
            >
              Most Recent
            </Button>
          </div>
          <UserBadge
            userId={threadData.createdBy}
            withAvatar={true}
            avatarSize="MEDIUM"
            showCardOnHover={true}
          />
          <div>
            <Typography style={{ marginTop: '4px' }} variant="headline2">
              {threadData.title}
            </Typography>
            <SubscribersModal
              id={threadId}
              objectType={SubscriptionObjectType.THREAD}
              showModal={showSubscriberModal}
              handleModal={setShowSubscriberModal}
            />
          </div>
          <div>
            <MarkdownSynapse
              markdown={threadBody}
              objectType={ObjectType.THREAD}
            />
          </div>
          <span>
            posted {formatDate(dayjs(threadData.createdOn), 'M/D/YYYY')}
          </span>
          <ForumThreadEditor
            isReply={false}
            initialText={threadBody}
            onClose={() => setShowThreadModal(false)}
            initialTitle={threadData?.title}
            id={threadId}
            isDialog={true}
            openDialog={showThreadModal}
          />
        </>
      ) : (
        <></>
      )}
      <div className="control-container">
        {threadData?.isDeleted ? (
          <button onClick={() => setShowRestoreModal(true)}>
            <IconSvg icon="restore" label="Restore deleted thread" />
          </button>
        ) : (
          <>
            <span>
              <button
                className="follow-button"
                aria-label={subscription ? 'Unfollow thread' : 'Follow thread'}
                disabled={isLoading}
                onClick={() => handleFollowBtn()}
              >
                {subscription ? (
                  <IconSvg icon="visibility" label={FOLLOWING_TEXT} />
                ) : (
                  <IconSvg icon="visibilityOff" label={UNFOLLOWING_TEXT} />
                )}
              </button>
            </span>
            {isCurrentUserAuthor && (
              <button onClick={() => setShowThreadModal(true)}>
                <IconSvg icon="edit" label="Edit thread" />
              </button>
            )}

            {entityBundle?.permissions.canModerate ? (
              <>
                <button onClick={() => setShowDeleteModal(true)}>
                  <IconSvg icon="delete" label="Delete thread" />
                </button>
                <button onClick={() => togglePin()}>
                  {threadData?.isPinned ? (
                    <IconSvg
                      icon="pushpin"
                      sx={{ color: 'error.main' }}
                      label="Unpin thread"
                    />
                  ) : (
                    <IconSvg icon="pushpin" label="Pin thread" />
                  )}
                </button>
              </>
            ) : null}
          </>
        )}
      </div>
      {!showReplyEditor1 ? (
        <FormControl
          type="text"
          placeholder={INPUT_PLACEHOLDER}
          onClick={() => {
            currentUserProfile?.userName == 'anonymous'
              ? setShowSignInModal(true)
              : setShowReplyEditor1(true)
          }}
        />
      ) : (
        <ForumThreadEditor
          id={threadId}
          isReply={true}
          onClose={() => setShowReplyEditor1(false)}
          isDialog={false}
        />
      )}
      <div>
        {replies.map(reply => (
          <DiscussionReply key={reply.id} reply={reply} />
        ))}
      </div>
      {replies.length > 0 && (
        <>
          {!showReplyEditor2 ? (
            <FormControl
              type="text"
              placeholder={INPUT_PLACEHOLDER}
              onClick={() => {
                currentUserProfile?.userName == 'anonymous'
                  ? setShowSignInModal(true)
                  : setShowReplyEditor2(true)
              }}
            />
          ) : (
            <ForumThreadEditor
              id={threadId}
              isReply={true}
              onClose={() => setShowReplyEditor2(false)}
              isDialog={false}
            />
          )}
        </>
      )}

      {hasNextPage ? (
        <Button
          variant="outlined"
          onClick={() => {
            fetchNextPage()
          }}
        >
          Show more results
        </Button>
      ) : (
        <></>
      )}
      <WarningDialog
        open={showDeleteModal}
        title="Confirm Deletion"
        content="Are you sure you want to delete this thread?"
        onCancel={() => setShowDeleteModal(false)}
        onConfirm={() => threadData && deleteThread(threadData)}
        confirmButtonColor="error"
        confirmButtonText="Delete"
      />
      <WarningDialog
        open={showRestoreModal}
        title="Confirm Restoration"
        content="Are you sure you want to restore this thread?"
        onCancel={() => setShowRestoreModal(false)}
        onConfirm={() => threadData && restoreThread(threadData)}
        confirmButtonColor="info"
        confirmButtonText="Restore"
      />
      <ConfirmationDialog
        open={showSignInModal}
        title="Sign In Required"
        content={SIGN_IN_TEXT}
        onCancel={() => setShowSignInModal(false)}
        hasCancelButton={false}
        onConfirm={() => setShowSignInModal(false)}
        confirmButtonProps={{
          children: 'Sign In',
          className: SRC_SIGN_IN_CLASS,
        }}
      />
    </div>
  )
}
