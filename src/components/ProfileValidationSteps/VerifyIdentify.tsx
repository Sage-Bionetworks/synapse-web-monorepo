import { ORCiDButton } from 'components/ORCiDButton'
import React, { useEffect, useState } from 'react'
import { Typography, SynapseComponents } from 'synapse-react-client'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { VerificationSubmission, UploadCallbackResp, FileUploadComplete } from 'synapse-react-client/dist/utils/synapseTypes'

export type VerifyIdentifyProps = {
  verificationSubmission:VerificationSubmission
}

export const VerifyIdentify = (props: VerifyIdentifyProps) => {
  const { verificationSubmission } = props
  const [attachments, setAttachments] = useState(verificationSubmission.attachments)
  useEffect(() => {
    verificationSubmission.attachments = attachments    
  }, [attachments, verificationSubmission])
  const uploadCallback = (data: UploadCallbackResp) => {
    if (data.resp && data.success) {
      const uploadResponse:FileUploadComplete = data.resp
      setAttachments([{
        fileName: uploadResponse.fileName,
        id: uploadResponse.fileHandleId
      }])
    } else if (!data.success && data.error) {
      displayToast(data.error.reason as string, 'danger')
    }
  }
  const isAttachment = attachments.length > 0
  return (
    <>
      <div className="VerifyIdentify bootstrap-4-backport">
        <Typography variant='headline3'>In order to validate your identify, we require:</Typography>
        <ol>
          <li>
            <Typography variant='body1'>Accounts to have an ORCID. Please link your profile below. </Typography>
            {verificationSubmission.orcid && <Typography variant='body1'>ORCiD: {verificationSubmission.orcid}</Typography>}
            {!verificationSubmission.orcid && <ORCiDButton />}
          </li>
          <li>
            <Typography variant='body1'>Submit recent identity... </Typography>
            <ul>
              <li>
                A letter...
              </li>
            </ul>
            {isAttachment && <span>{attachments[0].fileName}</span>}
            <span>
                <SynapseComponents.FileUpload 
                uploadCallback={uploadCallback}
                label={isAttachment ? 'Replace' : 'Select ID File to Upload'}
                variant={isAttachment ? 'light-primary-base' : 'primary'}
              />
            </span>
          </li>
        </ol>
      </div>
    </>
    
  )
}
