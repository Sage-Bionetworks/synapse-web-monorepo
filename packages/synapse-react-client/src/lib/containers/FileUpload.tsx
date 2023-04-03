import * as React from 'react'
import { Button, ButtonProps, styled } from '@mui/material'
import { uploadFile } from '../utils/SynapseClient'
import { useSynapseContext } from '../utils/SynapseContext'
import { FileUploadComplete, UploadCallbackResp } from '../utils/synapseTypes'
import { StyledComponent } from '@emotion/styled'

export type FileUploadProps = {
  id?: string
  label?: string
  buttonProps?: ButtonProps
  uploadCallback?: (response: UploadCallbackResp) => void
  context?: any // to distinguish which file was uploaded if we have several FileUpload components on the same page
}

// replicate bootstrap styling
const StyledUploadButton: StyledComponent<ButtonProps> = styled(Button, {
  label: 'StyledUploadButton',
})(({ theme }) => ({
  fontSize: '14px',
  lineHeight: '20px',
  fontWeight: '400',
  color: '#333',
  border: '1px solid transparent',
  '&:hover': {
    textDecoration: 'none',
    backgroundColor: 'transparent',
  },
  '&:focus': {
    outlineColor: '#005fcc',
    outlineStyle: 'auto',
    outlineWidth: '5px',
    outlineOffset: '-2px',
    borderRadius: '4px',
  },
}))

const FileUpload: React.FC<FileUploadProps> = props => {
  const {
    id,
    buttonProps,
    label = 'Browse...',
    uploadCallback,
    context,
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
      const file = e.target.files[0]
      try {
        const resp: FileUploadComplete = await uploadFile(
          accessToken,
          file.name,
          file,
        )
        uploadCallback?.({
          success: true,
          resp: resp,
          context: context,
        })
      } catch (e) {
        console.log('FileUpload: fail to upload file', e)
        uploadCallback?.({
          success: false,
          error: e,
        })
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
      <StyledUploadButton id={id} onClick={clickHandler} {...buttonProps}>
        {label}
      </StyledUploadButton>
    </>
  )
}

export default FileUpload
