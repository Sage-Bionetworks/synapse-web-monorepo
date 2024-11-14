import { Button } from '@mui/material'
import React, { useState } from 'react'
import { UploaderState } from '../../utils/hooks/useUploadFileEntity/useUploadFileEntities'
import { DialogBase } from '../DialogBase'
import { EntityUpload, EntityUploadHandle } from './EntityUpload'

type EntityUploadModalProps = {
  entityId: string
  open: boolean
  onClose: () => void
}

export const EntityUploadModal = React.forwardRef(function EntityUploadModal(
  props: EntityUploadModalProps,
  ref: React.ForwardedRef<EntityUploadHandle>,
) {
  const { entityId, open, onClose } = props
  const [uploadState, setUploadState] = useState<UploaderState>('LOADING')

  const disableClose =
    uploadState === 'PROMPT_USER' || uploadState === 'UPLOADING'
  const disableCancel = disableClose || uploadState === 'COMPLETE'

  const disableFinish = uploadState !== 'COMPLETE'

  return (
    <DialogBase
      title={'Upload or Link to File'}
      open={open}
      maxWidth={'md'}
      fullWidth
      content={
        <EntityUpload
          ref={ref}
          entityId={entityId}
          onStateChange={setUploadState}
        />
      }
      onCancel={() => {
        if (!disableClose) {
          onClose()
        }
      }}
      hasCloseButton={!disableClose}
      actions={
        <>
          <Button
            variant={'outlined'}
            onClick={() => {
              onClose()
            }}
            disabled={disableCancel}
          >
            Cancel
          </Button>
          <Button
            variant={'contained'}
            onClick={() => {
              onClose()
            }}
            disabled={disableFinish}
          >
            Finish
          </Button>
        </>
      }
    />
  )
})
