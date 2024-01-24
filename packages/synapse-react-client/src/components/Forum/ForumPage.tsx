import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useGetCurrentUserProfile } from '../../synapse-queries'
import { useGetModerators } from '../../synapse-queries/forum/useForum'
import { useSubscription } from '../../synapse-queries/subscription/useSubscription'
import { SRC_SIGN_IN_CLASS } from '../../utils/SynapseConstants'
import { DiscussionFilter } from '@sage-bionetworks/synapse-types'
import { SubscriptionObjectType } from '@sage-bionetworks/synapse-types'
import { displayToast } from '../ToastMessage/ToastMessage'
import { ForumTable } from './ForumTable'
import { ForumThreadEditor } from './ForumThreadEditor'
import { SubscribersModal } from './SubscribersModal'
import { ConfirmationDialog } from '../ConfirmationDialog/ConfirmationDialog'

export type ForumPageProps = {
  forumId: string
  limit: number
  onClickLink: (threadId: string) => void
}

const SIGN_IN_TEXT = 'You will need to sign in for access to that resource'

export const ForumPage: React.FC<ForumPageProps> = ({
  forumId,
  limit,
  onClickLink,
}) => {
  const [showThreadModal, setShowThreadModal] = useState(false)
  const [showSignInModal, setShowSignInModal] = useState(false)
  const [showDeletedThread, setShowDeletedThread] = useState(false)
  const [showSubscriberModal, setShowSubscriberModal] = useState(false)
  const { subscription, isLoading, toggleSubscribed } = useSubscription(
    forumId,
    SubscriptionObjectType.FORUM,
  )

  function handleFollowBtn() {
    try {
      toggleSubscribed()
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }
  const { data: moderatorList } = useGetModerators(forumId)
  const { data: currentUserProfile } = useGetCurrentUserProfile()

  const isCurrentUserModerator = moderatorList?.results.includes(
    currentUserProfile?.ownerId ?? '',
  )

  const handleNewThreadBtn = () => {
    if (currentUserProfile?.userName == 'anonymous') {
      setShowSignInModal(true)
    } else {
      setShowThreadModal(true)
    }
  }

  return (
    <div className="ForumTable bootstrap-4-backport">
      <div className="ForumTable__top-level-control">
        <SubscribersModal
          id={forumId}
          objectType={SubscriptionObjectType.FORUM}
          showModal={showSubscriberModal}
          handleModal={setShowSubscriberModal}
        />
        <Button
          variant={subscription ? 'outlined' : 'contained'}
          color="primary"
          onClick={() => handleFollowBtn()}
          disabled={isLoading}
        >
          {subscription ? 'Unfollow' : 'Follow'}
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleNewThreadBtn()}
        >
          New Thread
        </Button>
        {isCurrentUserModerator && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowDeletedThread(!showDeletedThread)}
          >
            {showDeletedThread
              ? 'Hide Deleted Threads'
              : 'Show Deleted Threads'}
          </Button>
        )}
      </div>
      {showDeletedThread && (
        <>
          <Typography variant="h4">Deleted Threads</Typography>
          <ForumTable
            onClickLink={onClickLink}
            forumId={forumId}
            limit={limit}
            filter={DiscussionFilter.DELETED_ONLY}
          />
        </>
      )}
      <ForumTable
        onClickLink={onClickLink}
        forumId={forumId}
        limit={limit}
        filter={DiscussionFilter.EXCLUDE_DELETED}
      />
      <ForumThreadEditor
        isReply={false}
        id={forumId}
        onClose={() => setShowThreadModal(false)}
        isDialog={true}
        openDialog={showThreadModal}
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
