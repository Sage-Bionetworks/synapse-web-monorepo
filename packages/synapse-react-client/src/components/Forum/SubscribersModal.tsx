import React from 'react'
import { ConfirmationDialog } from '../ConfirmationDialog/ConfirmationDialog'
import { useGetSubscribers } from '../../synapse-queries/subscription/useSubscription'
import { SubscriptionObjectType } from '@sage-bionetworks/synapse-types'
import { Link } from '@mui/material'
import UserCard from '../UserCard/UserCard'
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
  const { data: subscribers } = useGetSubscribers({ objectId: id, objectType })

  return (
    <div className="SubscribersModal">
      {subscribers && subscribers.subscribers.length > 0 && (
        <Link
          onClick={() => handleModal(true)}
        >{`Followers (${subscribers.subscribers.length})`}</Link>
      )}
      <ConfirmationDialog
        open={showModal}
        onCancel={() => handleModal(false)}
        title="Followers"
        content={
          subscribers &&
          subscribers.subscribers.map(user => (
            <UserCard
              key={user}
              ownerId={user}
              size={SMALL_USER_CARD}
              showCardOnHover={true}
            />
          ))
        }
        onConfirm={() => handleModal(false)}
        confirmButtonText="Ok"
        hasCancelButton={false}
      />
    </div>
  )
}
