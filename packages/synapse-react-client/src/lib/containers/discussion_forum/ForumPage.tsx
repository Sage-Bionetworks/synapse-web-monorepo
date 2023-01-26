import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useGetCurrentUserProfile } from '../../utils/hooks/SynapseAPI'
import { useGetModerators } from '../../utils/hooks/SynapseAPI/forum/useForum'
import { useSubscription } from '../../utils/hooks/SynapseAPI/subscription/useSubscription'
import { SRC_SIGN_IN_CLASS } from '../../utils/SynapseConstants'
import { DiscussionFilter } from '../../utils/synapseTypes/DiscussionBundle'
import { SubscriptionObjectType } from '../../utils/synapseTypes/Subscription'
import { displayToast } from '../ToastMessage'
import { ForumTable } from './ForumTable'
import { ForumThreadEditor } from './ForumThreadEditor'
import { SubscribersModal } from './SubscribersModal'

export type ForumPageProps = {
  forumId: string
  limit: number
  onClickLink: () => void
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
          variant={subscription ? 'outline-primary' : 'primary'}
          onClick={() => handleFollowBtn()}
          disabled={isLoading}
        >
          {subscription ? 'Unfollow' : 'Follow'}
        </Button>
        {
          <Button variant="primary" onClick={() => handleNewThreadBtn()}>
            New Thread
          </Button>
        }
        {isCurrentUserModerator && (
          <Button onClick={() => setShowDeletedThread(!showDeletedThread)}>
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
      <Modal
        size="lg"
        show={showThreadModal}
        onHide={() => setShowThreadModal(false)}
        animation={false}
      >
        <Modal.Header>
          <Modal.Title>New Thread</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ForumThreadEditor
            isReply={false}
            id={forumId}
            onClose={() => setShowThreadModal(false)}
          />
        </Modal.Body>
      </Modal>
      <Modal
        className="bootstrap-4-backport"
        show={showSignInModal}
        onHide={() => setShowSignInModal(false)}
        animation={false}
      >
        <Modal.Header closeButton />
        <Modal.Body>{SIGN_IN_TEXT}</Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => setShowSignInModal(false)}
            className={SRC_SIGN_IN_CLASS}
          >
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
