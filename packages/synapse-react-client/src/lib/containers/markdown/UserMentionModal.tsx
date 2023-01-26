import React, { useCallback } from 'react'
import { Modal } from 'react-bootstrap'
import { TYPE_FILTER, UserGroupHeader } from '../../utils/synapseTypes'
import UserSearchBoxV2 from '../UserSearchBoxV2'

export type UserMentionModalProps = {
  show: boolean
  onClose: () => void
  handleUserTag: (user: string) => void
}

export const UserMentionModal: React.FC<UserMentionModalProps> = ({
  show,
  onClose,
  handleUserTag,
}: UserMentionModalProps) => {
  const onUserChange = useCallback(
    (selected: string | null, header: UserGroupHeader | null) => {
      if (selected && header) {
        handleUserTag(header.userName)
      }
      onClose()
    },
    [onClose, handleUserTag],
  )

  return (
    <>
      <Modal show={show} onHide={onClose} backdrop="static" animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Find User or Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserSearchBoxV2
            placeholder="Search for a user or team name"
            onChange={onUserChange}
            typeFilter={TYPE_FILTER.ALL}
            focusOnSelect={true}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}
