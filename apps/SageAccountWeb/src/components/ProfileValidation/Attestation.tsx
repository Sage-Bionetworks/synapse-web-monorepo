import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'
import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { SynapseComponents } from 'synapse-react-client'
import { displayToast } from 'synapse-react-client'
import {
  VerificationSubmission,
  UploadCallbackResp,
  FileUploadComplete,
} from '@sage-bionetworks/synapse-types'
import { ContinueButton } from './ContinueButton'
import { ReturnToAppButton } from './ReturnToAppButton'

export type AttestationProps = {
  verificationSubmission: VerificationSubmission
  onNext: (vs: VerificationSubmission) => void
}

const Attestation: React.FC<AttestationProps> = (props: AttestationProps) => {
  const { verificationSubmission } = props
  const [attachments, setAttachments] = useState(
    verificationSubmission.attachments,
  )

  useEffect(() => {
    verificationSubmission.attachments = attachments
  }, [attachments, verificationSubmission])
  const uploadCallback = (data: UploadCallbackResp) => {
    if (data.resp && data.success) {
      const uploadResponse: FileUploadComplete = data.resp
      setAttachments([
        {
          fileName: uploadResponse.fileName,
          id: uploadResponse.fileHandleId,
        },
      ])
    } else if (!data.success && data.error) {
      displayToast(data.error.reason as string, 'danger')
    }
  }
  const isAttachment = attachments.length > 0

  return (
    <>
      {isAttachment && (
        <>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            Selected file:
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px' }}>
            {attachments[0].fileName}
          </Typography>
        </>
      )}
      <SynapseComponents.FileUpload
        uploadCallback={uploadCallback}
        label="Upload from your computer"
        buttonProps={{
          variant: 'outlined',
          sx: { color: 'grey.800' },
          fullWidth: true,
          startIcon: <CloudUploadOutlinedIcon />,
        }}
      />
      <ContinueButton
        disabled={!attachments?.length}
        onClick={() => props.onNext(verificationSubmission)}
        sx={{ marginTop: '40px', marginBottom: '10px' }}
      >
        Request validation
      </ContinueButton>
      <ReturnToAppButton />
    </>
  )
}

export default Attestation
