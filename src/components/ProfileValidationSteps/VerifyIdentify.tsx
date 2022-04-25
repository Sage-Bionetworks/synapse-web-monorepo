import { ORCiDButton } from 'components/ORCiDButton'
import React, { useEffect, useState } from 'react'
import { Typography, SynapseComponents } from 'synapse-react-client'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { VerificationSubmission, UploadCallbackResp, FileUploadComplete } from 'synapse-react-client/dist/utils/synapseTypes'
import fileIcon from '../../assets/file-icon.svg'
import EditIcon from '../../assets/RedEditPencil.svg'
import CheckmarkBadge from '../../assets/CheckmarkSecondary.svg'
// import { Button } from 'react-bootstrap'
import { UnbindORCiDDialog } from 'components/UnbindORCiD'

export type VerifyIdentifyProps = {
  verificationSubmission:VerificationSubmission
}

export const VerifyIdentify = (props: VerifyIdentifyProps) => {
  const { verificationSubmission } = props
  const [attachments, setAttachments] = useState(verificationSubmission.attachments)
  const [ showORCiDDialog, setShowORCiDDialog ] = useState(false)
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
      <div className="VerifyIdentify bootstrap-4-backport ValidationSteps">
          <Typography variant='headline1'>In order to validate your identify, we require:</Typography>
            <Typography variant='body1'>1. Accounts to have an ORCID. Please link your profile below. </Typography>
            <div className='orcid-container'>
              {
              verificationSubmission.orcid &&
              <>
                <Typography style={{display:'inline-block', marginRight:'16px'}} variant='body1'><img className='verifyBadgeIcon' src={CheckmarkBadge} alt='CheckmarkBadge'/>ORCiD: {verificationSubmission.orcid}</Typography>
                <button onClick={()=>setShowORCiDDialog(true)}> <img src={EditIcon} alt="edit icon"/></button>
              </>
              }
              {!verificationSubmission.orcid && <ORCiDButton />}
            </div>
          <Typography variant='body1'>2. Submit recent identity attestation documentation. This document must be current within the past month. Acceptable forms of documentation, in English, are any one of the following: </Typography>
          <ul className='list-container'>
            <li>
              <Typography variant='body1'>
                A letter from a signing official on letterhead attesting to your identity (<a href="https://help.synapse.org/docs/2007072795/signing_official.doc?inst-v=82ba44ea-c50a-4c56-b8f9-f744ebd4620b" rel="nofollow">template here</a>).&nbsp;<i>Note that you <strong>cannot</strong> serve as your own signing official.</i>
              </Typography>
              <Typography style={{textAlign:'center'}} variant='body1'>OR</Typography>
            </li>
            <li>
              <Typography variant='body1'>
                A notarized letter attesting to your identity (<a href="https://help.synapse.org/docs/2007072795/notarized_letter.doc?inst-v=82ba44ea-c50a-4c56-b8f9-f744ebd4620b" rel="nofollow">template here</a>)
              </Typography>
              <Typography style={{textAlign:'center'}} variant='body1'>OR</Typography>

            </li>
            <li>
              <Typography variant='body1'>A copy of your professional license (e.g., a photocopy of your medical license).&nbsp;<i>Note that a copy of a work or university identification badge is <strong>not</strong> an accepted form of identity attestation documentation.</i>
              </Typography>
            </li>
          </ul>
          <div className='file-upload-container'>
          {isAttachment && <Typography style={{display:'inline-block'}} variant='body1'><img className='file-icon' src={fileIcon} alt='fileIcon'/>{attachments[0].fileName}</Typography>}
              <SynapseComponents.FileUpload 
              uploadCallback={uploadCallback}
              label={isAttachment ? 'Replace' : 'Select ID File to Upload'}
              variant={isAttachment ? 'light-primary-base' : 'secondary'}
            />
          </div>
      </div>
      <UnbindORCiDDialog show={showORCiDDialog} setShow={setShowORCiDDialog} orcid={verificationSubmission.orcid} />
    </>
    
  )
}
