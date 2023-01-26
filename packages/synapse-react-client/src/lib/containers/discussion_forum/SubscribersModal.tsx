import React from 'react'
import { Modal } from 'react-bootstrap'
import { useSubscription } from '../../utils/hooks/SynapseAPI/subscription/useSubscription'
import { SubscriptionObjectType } from '../../utils/synapseTypes/Subscription'
import { Button } from '@mui/material'
import UserCard from '../UserCard'
import { SMALL_USER_CARD } from '../../utils/SynapseConstants'

export type SubscribersModalProps = {
  id: string
  objectType: SubscriptionObjectType
  showModal: boolean
  handleModal: (a: boolean) => void
}

export const SubscribersModal: React.FC<SubscribersModalProps> = ({
  id,
  objectType,
  showModal,
  handleModal,
}) => {
  const { subscribers } = useSubscription(id, objectType)

  return (
    <div className="SubscribersModal">
      {subscribers && subscribers.subscribers.length > 0 && (
        <a
          onClick={() => handleModal(true)}
        >{`Followers (${subscribers.subscribers.length})`}</a>
      )}
      <Modal
        className="bootstrap-4-backport"
        show={showModal}
        onHide={() => handleModal(false)}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Followers</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {subscribers &&
            subscribers.subscribers.map(user => (
              <UserCard
                key={user}
                ownerId={user}
                size={SMALL_USER_CARD}
                showCardOnHover={true}
              />
            ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" onClick={() => handleModal(false)}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
