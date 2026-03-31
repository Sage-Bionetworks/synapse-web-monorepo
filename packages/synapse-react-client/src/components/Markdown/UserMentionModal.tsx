import { useCallback } from 'react'
import { DialogBase } from '../DialogBase'
import { TYPE_FILTER, UserGroupHeader } from '@sage-bionetworks/synapse-types'
import UserSearchBox from '../UserSearchBox/UserSearchBox'

export type UserMentionModalProps = {
  show: boolean
  onClose: () => void
  handleUserTag: (user: string) => void
}

export function UserMentionModal({
  show,
  onClose,
  handleUserTag,
}: UserMentionModalProps) {
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
      <DialogBase
        open={show}
        onCancel={onClose}
        title="Find User or Team"
        content={
          <UserSearchBox
            placeholder="Search for a user or team name"
            onChange={onUserChange}
            typeFilter={TYPE_FILTER.ALL}
            autoFocus={true}
          />
        }
        sx={{
          '.MuiDialog-paperFullWidth': {
            overflowY: 'visible',
            '.MuiDialogContent-root': { overflowY: 'visible' },
          },
        }}
      />
    </>
  )
}
