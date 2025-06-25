import { useGetCurrentUserProfile, useGetEntityBundle } from '@/synapse-queries'
import { useGetRepliesInfinite } from '@/synapse-queries/forum/useReply'
import {
  useDeleteThread,
  useGetThread,
  useRestoreThread,
} from '@/synapse-queries/forum/useThread'
import { useSubscription } from '@/synapse-queries/subscription/useSubscription'
import { formatDate } from '@/utils/functions/DateFormatter'
import { SRC_SIGN_IN_CLASS } from '@/utils/SynapseConstants'
import {
  Box,
  Button,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import {
  ALL_ENTITY_BUNDLE_FIELDS,
  ObjectType,
  SubscriptionObjectType,
} from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import { useMemo, useState } from 'react'
import { ConfirmationDialog } from '../ConfirmationDialog/ConfirmationDialog'
import IconSvg from '../IconSvg/IconSvg'
import MarkdownSynapse from '../Markdown/MarkdownSynapse'
import WarningDialog from '../SynapseForm/WarningDialog'
import { displayToast } from '../ToastMessage/ToastMessage'
import { UserBadge } from '../UserCard/UserBadge'
import { DiscussionReply } from './DiscussionReply'
import { ForumThreadEditor } from './ForumThreadEditor'
import { SubscribersModal } from './SubscribersModal'
import { useGetModerators } from '@/synapse-queries/forum/useForum'
import { useNativeSearchParams } from '@/utils/hooks/useNativeSearchParams'
import { REPLY_ID_PARAM_KEY } from './DiscussionConstants'

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
  const defaultMargin = '16px'

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

  const { data: moderatorList } = useGetModerators(threadData?.forumId ?? '', {
    enabled: Boolean(threadData?.forumId),
  })

  const isAuthorModerator = moderatorList?.includes(threadData?.createdBy ?? '')

  const [replyId, setReplyIdParam] = useNativeSearchParams(REPLY_ID_PARAM_KEY)

  const replies = useMemo(() => {
    const allReplies = replyData?.pages.flatMap(page => page.results) ?? []
    if (replyId) {
      return allReplies.filter(reply => reply.id === replyId)
    } else {
      return allReplies
    }
  }, [replyData, replyId])

  const handleShowAllRepliesButton = () => {
    setReplyIdParam(null)
  }

  return (
    <div className="DiscussionThread" role={'article'}>
      {threadData && threadBody ? (
        <>
          <Box sx={{ mb: 2, textAlign: 'right' }}>
            <Typography component={'span'} sx={{ mr: 1 }}>
              Sort:
            </Typography>
            <ToggleButtonGroup
              color={'primary'}
              exclusive
              value={orderByDatePosted ? 'datePosted' : 'mostRecent'}
            >
              <ToggleButton
                value={'datePosted'}
                onClick={() => setOrderByDatePosted(true)}
              >
                Date Posted
              </ToggleButton>
              <ToggleButton
                value={'mostRecent'}
                onClick={() => setOrderByDatePosted(false)}
              >
                Most Recent
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <UserBadge
            userId={threadData.createdBy}
            withAvatar={true}
            avatarSize="MEDIUM"
            showCardOnHover={true}
            showModeratorBadge={isAuthorModerator}
          />
          <Box
            sx={theme => ({
              [theme.breakpoints.down('sm')]: {
                display: 'flex',
                flexDirection: 'column-reverse',
                marginBottom: defaultMargin,
                marginTop: defaultMargin,
                '.SubscribersModal': {
                  justifyContent: 'flex-start',
                  marginBottom: defaultMargin,
                },
              },
            })}
          >
            <Typography sx={{ marginTop: '4px' }} variant="headline2">
              {threadData.title}
            </Typography>
            <SubscribersModal
              id={threadId}
              objectType={SubscriptionObjectType.THREAD}
              showModal={showSubscriberModal}
              handleModal={setShowSubscriberModal}
            />
          </Box>
          <div>
            <MarkdownSynapse
              markdown={threadBody}
              objectType={ObjectType.THREAD}
            />
          </div>
          <span>
            posted {formatDate(dayjs(threadData.createdOn), 'M/D/YYYY')}
            {threadData.isEdited ? <i>{' (Edited)'}</i> : null}
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
      <Box
        sx={{
          float: 'right',
          margin: { xs: '8px 0', sm: '0 24px 0 0' },
        }}
      >
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
      </Box>
      <Box sx={{ mt: 2, mb: 3 }}>
        {!showReplyEditor1 ? (
          <TextField
            fullWidth
            placeholder={INPUT_PLACEHOLDER}
            onClick={() => {
              if (currentUserProfile?.userName == 'anonymous') {
                setShowSignInModal(true)
              } else {
                setShowReplyEditor1(true)
              }
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
      </Box>
      {replyId && (
        <Button
          variant="outlined"
          onClick={handleShowAllRepliesButton}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '2px 8px',
            marginBottom: '12px',
            gap: '4px',
          }}
        >
          <IconSvg icon="arrowBack" sx={{ width: '16px' }} />
          <Typography variant="smallText2">Show all replies</Typography>
        </Button>
      )}
      <div>
        {replies.map(reply => {
          const isReplyAuthorModerator = moderatorList?.includes(
            reply.createdBy,
          )
          return (
            <DiscussionReply
              key={reply.id}
              reply={reply}
              isReplyAuthorModerator={isReplyAuthorModerator}
            />
          )
        })}
      </div>
      {replies.length > 0 && (
        <Box
          sx={theme => ({
            mt: 2,
            mb: 3,
            [theme.breakpoints.down('sm')]: {
              MarkdownEditor: {
                display: 'block',
              },
            },
          })}
        >
          {!showReplyEditor2 ? (
            <TextField
              fullWidth
              placeholder={INPUT_PLACEHOLDER}
              onClick={() => {
                if (currentUserProfile?.userName == 'anonymous') {
                  setShowSignInModal(true)
                } else {
                  setShowReplyEditor2(true)
                }
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
        </Box>
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

export default DiscussionThread
