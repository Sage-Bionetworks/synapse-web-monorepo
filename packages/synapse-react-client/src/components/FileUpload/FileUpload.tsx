import React from 'react'
import { Button, ButtonProps } from '@mui/material'
import {
  FileUploadComplete,
  UploadCallbackResp,
} from '@sage-bionetworks/synapse-types'
import { uploadFile } from '../../synapse-client/SynapseClient'
import { useSynapseContext } from '../../utils/context/SynapseContext'

export type FileUploadProps = {
  id?: string
  label?: string
  buttonProps?: ButtonProps
  onUploadStart?: () => void
  onComplete?: (response: UploadCallbackResp) => void
}

export const FileUpload: React.FC<FileUploadProps> = props => {
  const {
    id,
    buttonProps = { variant: 'contained' },
    label = 'Browse...',
    onUploadStart,
    onComplete,
  } = props
  const { accessToken } = useSynapseContext()
  const hiddenFileInput = React.useRef<HTMLInputElement>(null)

  const clickHandler = () => {
    if (hiddenFileInput?.current!) {
      hiddenFileInput.current?.click()
    }
  }

  const changeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      if (onUploadStart) {
        onUploadStart()
      }
      const file = e.target.files[0]
      try {
        const resp: FileUploadComplete = await uploadFile(
          accessToken,
          file.name,
          file,
        )
        if (onComplete) {
          onComplete({
            success: true,
            resp: resp,
          })
        }
      } catch (e) {
        console.log('FileUpload: fail to upload file', e)
        if (onComplete) {
          onComplete({
            success: false,
            error: e,
          })
        }
      }
    }
  }

  return (
    <>
      <input
        type={'file'}
        ref={hiddenFileInput}
        onChange={e => {
          changeHandler(e)
        }}
        style={{ display: 'none' }}
      />
      <Button id={id} onClick={clickHandler} {...buttonProps}>
        {label}
      </Button>
    </>
  )
}

export default FileUpload
