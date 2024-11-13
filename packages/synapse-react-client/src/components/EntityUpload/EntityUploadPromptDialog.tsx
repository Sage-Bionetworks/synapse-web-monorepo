import { Button, DialogActions } from '@mui/material'
import { noop } from 'lodash-es'
import React from 'react'
import { UseUploadFileEntitiesReturn } from '../../utils/hooks/useUploadFileEntity/useUploadFileEntities'
import { DialogBase } from '../DialogBase'

type EntityUploadPromptDialogProps = {
  activePrompts: UseUploadFileEntitiesReturn['activePrompts']
}

export function EntityUploadPromptDialog(props: EntityUploadPromptDialogProps) {
  const { activePrompts } = props

  if (activePrompts.length === 0) {
    return null
  }

  return (
    <DialogBase
      title={activePrompts[0].title}
      open={true}
      content={activePrompts[0].message}
      // Force the user to make a decision
      onCancel={noop}
      hasCloseButton={false}
      actions={
        <DialogActions>
          {activePrompts[0].onCancelAll && (
            <Button
              variant={'text'}
              color={'error'}
              onClick={activePrompts[0].onCancelAll}
            >
              Cancel All Uploads
            </Button>
          )}
          {activePrompts[0].onSkip && (
            <Button onClick={activePrompts[0].onSkip}>Skip</Button>
          )}
          {activePrompts[0].onConfirmAll && (
            <Button
              variant={'outlined'}
              color={'primary'}
              onClick={activePrompts[0].onConfirmAll}
            >
              Yes to All
            </Button>
          )}
          {activePrompts[0].onConfirm && (
            <Button
              variant={'contained'}
              color={'primary'}
              onClick={activePrompts[0].onConfirm}
            >
              Yes
            </Button>
          )}
        </DialogActions>
      }
    />
  )
}
