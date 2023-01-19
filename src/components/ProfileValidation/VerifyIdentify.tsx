import { ORCiDButton } from 'components/ProfileValidation/ORCiDButton'
import React, { useEffect, useState } from 'react'
import { Typography, } from 'synapse-react-client'
import {
  VerificationSubmission,
} from 'synapse-react-client/dist/utils/synapseTypes'
import EditIcon from '../../assets/RedEditPencil.svg'
import CheckmarkBadge from '../../assets/CheckmarkSecondary.svg'
import { UnbindORCiDDialog } from 'components/ProfileValidation/UnbindORCiD'

export type VerifyIdentifyProps = {
  verificationSubmission: VerificationSubmission
}

export const VerifyIdentify = (props: VerifyIdentifyProps) => {
  const { verificationSubmission } = props
  const [attachments] = useState(
    verificationSubmission.attachments,
  )
  const [showORCiDDialog, setShowORCiDDialog] = useState(false)
  useEffect(() => {
    verificationSubmission.attachments = attachments
  }, [attachments, verificationSubmission])


  return (
    <>
      <div className="VerifyIdentify bootstrap-4-backport ValidationSteps">
        <div className="orcid-container">
          {verificationSubmission.orcid && (
            <>
              <Typography
                style={{ display: 'inline-block', marginRight: '16px' }}
                variant="body1"
              >
                <img
                  className="verifyBadgeIcon"
                  src={CheckmarkBadge}
                  alt="CheckmarkBadge"
                />
                ORCiD: {verificationSubmission.orcid}
              </Typography>
              <button onClick={() => setShowORCiDDialog(true)}>
                {' '}
                <img src={EditIcon} alt="edit icon" />
              </button>
            </>
          )}
          {!verificationSubmission.orcid && <ORCiDButton />}
        </div>
      </div>
      <UnbindORCiDDialog
        show={showORCiDDialog}
        setShow={setShowORCiDDialog}
        orcid={verificationSubmission.orcid}
      />
    </>
  )
}
