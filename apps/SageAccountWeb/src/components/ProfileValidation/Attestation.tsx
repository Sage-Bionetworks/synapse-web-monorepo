import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Typography, SynapseComponents } from 'synapse-react-client'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import {
  VerificationSubmission,
  UploadCallbackResp,
  FileUploadComplete,
} from 'synapse-react-client/dist/utils/synapseTypes'
import { ContinueButton } from './ContinueButton'
import { ReturnToAppButton } from './ReturnToAppButton'

export type AttestationProps = {
  verificationSubmission: VerificationSubmission
  onNext: (vs: VerificationSubmission) => void
}

export type UploadButtonProps = {
  uploadCallback: (data: UploadCallbackResp) => void
}

const UploadButton: React.FC<UploadButtonProps> = ({ uploadCallback }) => {
  const hackSx = {
    position: 'relative',
    'button#uploadButton': {
      fontWeight: 700,
      border: '1px solid #E0E0E0',
      borderRadius: '3px',
      width: '100%',
      color: 'grey.800',
      paddingLeft: '32px',
    },
  }
  const iconSx = {
    zIndex: 10,
    position: 'absolute',
    left: '56.6px',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    color: 'grey.800',
    pointerEvents: 'none',
  }

  /* agendel TODO: we need a component that takes a child component and wraps it in a button */
  return (
    <Box id="hack" sx={hackSx}>
      <CloudUploadOutlinedIcon sx={iconSx} />
      <SynapseComponents.FileUpload
        uploadCallback={uploadCallback}
        label={'Upload from your computer'}
        variant="light-primary-base"
        id="uploadButton"
      />
    </Box>
  )
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
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            Selected file:
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '20px' }}>
            {attachments[0].fileName}
          </Typography>
        </>
      )}
      <UploadButton uploadCallback={uploadCallback} />
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
