import React from 'react'
import { ConfirmationDialog } from '../ConfirmationDialog/ConfirmationDialog'
import { useGetSubscribers } from '../../synapse-queries/subscription/useSubscription'
import { SubscriptionObjectType } from '@sage-bionetworks/synapse-types'
import { Link } from '@mui/material'
import { UserBadge } from '../UserCard/UserBadge'

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
            <UserBadge key={user} userId={user} showCardOnHover={true} />
          ))
        }
        onConfirm={() => handleModal(false)}
        hasCancelButton={false}
      />
    </div>
  )
}
