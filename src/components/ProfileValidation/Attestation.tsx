import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import theme from 'style/theme'
import { Typography, SynapseComponents } from 'synapse-react-client'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import {
  VerificationSubmission,
  UploadCallbackResp,
  FileUploadComplete,
} from 'synapse-react-client/dist/utils/synapseTypes'
import { ContinueButton } from './ContinueButton'

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
      <Box
        sx={{
          '& #hack > button': {
            border: '1px solid #E0E0E0',
            borderRadius: '3px',
            width: '100%',
          },
        }}
      >
        {/* agendel TODO: we need a component that takes a child component and wraps it in a button 
                    import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined' for the icon here*/}
        <div id="hack">
          <SynapseComponents.FileUpload
            uploadCallback={uploadCallback}
            label={isAttachment ? 'Replace' : 'Select ID File to Upload'}
            variant={/*isAttachment ? */ 'light-primary-base' /*: 'secondary'*/}
          />
          {isAttachment && (
            <>
              <Typography
                style={{ margin: theme.spacing(5, 0) }}
                variant="body2"
              >
                {attachments[0].fileName}
              </Typography>
              <Button variant="outlined" onClick={() => setAttachments([])}>
                Remove
              </Button>
            </>
          )}
        </div>
      </Box>
      <ContinueButton
        disabled={!attachments?.length}
        onClick={() => props.onNext(verificationSubmission)}
      >
        Request Validation
      </ContinueButton>
    </>
  )
}

export default Attestation
