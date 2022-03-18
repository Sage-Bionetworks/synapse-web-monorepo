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
          <Typography variant='body1'>1. Accounts to have an ORCID. Please link your profile below. </Typography>
          {verificationSubmission.orcid && <Typography variant='body1'>ORCiD: {verificationSubmission.orcid}</Typography>}
          {!verificationSubmission.orcid && <ORCiDButton />}
        <Typography variant='body1'>2. Submit recent identity attestation documentation. This document must be current within the past month. Acceptable forms of documentation, in English, are any one of the following: </Typography>
        <ul>
          <li>
            <p>A letter from a signing official on letterhead attesting to your identity (<a href="https://help.synapse.org/docs/2007072795/signing_official.doc?inst-v=82ba44ea-c50a-4c56-b8f9-f744ebd4620b" rel="nofollow">template here</a>).&nbsp;Note that you <strong>cannot</strong> serve as your own signing official.&nbsp; OR
            </p>
          </li>
          <li>
            <p>A notarized letter attesting to your identity (<a href="https://help.synapse.org/docs/2007072795/notarized_letter.doc?inst-v=82ba44ea-c50a-4c56-b8f9-f744ebd4620b" rel="nofollow">template here</a>) OR
            </p>
          </li>
          <li>
            <p>A copy of your professional license (e.g., a photocopy of your medical license).&nbsp;Note that a copy of a work or university identification badge is <strong>not</strong> an accepted form of identity attestation documentation.
            </p>
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
      </div>
    </>
    
  )
}
