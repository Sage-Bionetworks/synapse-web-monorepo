import { ProgressCallback, uploadFile } from '@/synapse-client/SynapseClient'
import { useSynapseContext } from '@/stores/SynapseContext/SynapseContext'
import Button, { ButtonProps } from '@/react-ui/components/Button'
import {
  FileUploadComplete,
  UploadCallbackResp,
} from '@sage-bionetworks/synapse-types'
import { ChangeEvent, useRef } from 'react'

export type FileUploadProps = {
  id?: string
  label?: string
  buttonProps?: ButtonProps
  onUploadStart?: () => void
  onComplete?: (response: UploadCallbackResp) => void
}

export function FileUpload(props: FileUploadProps) {
  const {
    id,
    buttonProps = { variant: 'contained' },
    label = 'Browse...',
    onUploadStart,
    onComplete,
  } = props
  const { accessToken } = useSynapseContext()
  const hiddenFileInput = useRef<HTMLInputElement>(null)

  const clickHandler = () => {
    if (hiddenFileInput?.current!) {
      hiddenFileInput.current?.click()
    }
  }

  const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      if (onUploadStart) {
        onUploadStart()
      }
      const file = e.target.files[0]
      const progressCallback: (
        progress: ProgressCallback,
      ) => void = progress => {
        console.log(`Progress: ${progress.value} / ${progress.total}`)
      }
      try {
        const resp: FileUploadComplete = await uploadFile(
          accessToken,
          file.name,
          file,
          undefined,
          undefined,
          progressCallback,
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
        data-testid="file-input"
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
