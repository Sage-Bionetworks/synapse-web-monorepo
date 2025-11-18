import { useCallback } from 'react'
import DialogBase from '@/react-ui/components/DialogBase'
import { TYPE_FILTER, UserGroupHeader } from '@sage-bionetworks/synapse-types'
import UserSearchBoxV2 from '../UserSearchBox/UserSearchBoxV2'

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
          <UserSearchBoxV2
            placeholder="Search for a user or team name"
            onChange={onUserChange}
            typeFilter={TYPE_FILTER.ALL}
            focusOnSelect={true}
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
