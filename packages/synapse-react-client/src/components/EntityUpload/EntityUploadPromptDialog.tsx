import {
  PromptInfo,
  UseUploadFileEntitiesReturn,
} from '@/utils/hooks/useUploadFileEntity/useUploadFileEntities'
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material'
import { noop } from 'lodash-es'
import pluralize from 'pluralize'
import { useState } from 'react'
import DialogBase from '@/react-ui/components/DialogBase'

type EntityUploadPromptDialogProps = {
  activePrompts: UseUploadFileEntitiesReturn['activePrompts']
}

function getTitle(promptInfo: PromptInfo) {
  if (promptInfo.type === 'CONFIRM_NEW_VERSION') {
    return 'Update existing file?'
  }
  return ''
}

function getMessage(promptInfo: PromptInfo) {
  if (promptInfo.type === 'CONFIRM_NEW_VERSION') {
    return `A file named "${promptInfo.fileName}" (${promptInfo.existingEntityId}) already exists in this location. Do you want to update the existing file and create a new version?`
  }
  return ''
}

export function EntityUploadPromptDialog(props: EntityUploadPromptDialogProps) {
  const { activePrompts } = props
  const [yesToAllChecked, setYesToAllChecked] = useState(false)

  if (activePrompts.length === 0) {
    return null
  }

  const numberOfOtherConfirmVersionPrompts =
    activePrompts.filter(p => p.info.type === 'CONFIRM_NEW_VERSION').length - 1

  return (
    <DialogBase
      title={getTitle(activePrompts[0].info)}
      open={true}
      content={
        <>
          <Typography variant={'body1'} gutterBottom>
            {getMessage(activePrompts[0].info)}
          </Typography>
          {activePrompts[0].info.type == 'CONFIRM_NEW_VERSION' &&
            numberOfOtherConfirmVersionPrompts > 0 && (
              <FormControlLabel
                control={<Checkbox />}
                value={yesToAllChecked}
                onChange={(_e, value) => setYesToAllChecked(value)}
                label={`Also update ${numberOfOtherConfirmVersionPrompts.toLocaleString()} other uploaded ${pluralize(
                  'file',
                  numberOfOtherConfirmVersionPrompts,
                )} that already exist${
                  numberOfOtherConfirmVersionPrompts == 1 ? 's' : ''
                }`}
              />
            )}
        </>
      }
      // Force the user to make a decision
      onCancel={noop}
      hasCloseButton={false}
      actions={
        <>
          {activePrompts[0].onCancelAll && (
            <Button
              variant={'text'}
              color={'error'}
              onClick={activePrompts[0].onCancelAll}
            >
              Cancel All Uploads
            </Button>
          )}
          <Box sx={{ flexGrow: 1 }} />
          {activePrompts[0].onSkip && (
            <Button onClick={activePrompts[0].onSkip}>No</Button>
          )}
          {activePrompts[0].onConfirm && (
            <Button
              variant={'contained'}
              color={'primary'}
              onClick={() => {
                if (yesToAllChecked) {
                  activePrompts[0].onConfirmAll()
                } else {
                  activePrompts[0].onConfirm()
                }
              }}
            >
              Yes
            </Button>
          )}
        </>
      }
    />
  )
}
