import { ORCiDButton } from 'components/ProfileValidation/ORCiDButton'
import React, { useEffect, useState } from 'react'
import { VerificationSubmission } from 'synapse-react-client/dist/utils/synapseTypes'
import CheckIcon from '@mui/icons-material/Check'
import { UnbindORCiDDialog } from 'components/ProfileValidation/UnbindORCiD'
import { Box, Button, Typography } from '@mui/material'
import { ContinueButton } from './ContinueButton'

export type VerifyIdentifyProps = {
  verificationSubmission: VerificationSubmission
  onNext: (vs: VerificationSubmission) => void
}

export const VerifyIdentify = (props: VerifyIdentifyProps) => {
  const { verificationSubmission } = props
  const [attachments] = useState(verificationSubmission.attachments)
  const [showORCiDDialog, setShowORCiDDialog] = useState(false)
  useEffect(() => {
    verificationSubmission.attachments = attachments
  }, [attachments, verificationSubmission])

  return (
    <>
      <Box sx={{ marginBottom: '48px' }}>
        {verificationSubmission.orcid && (
          <>
            <Typography style={{ display: 'flex' }} variant="body2">
              <CheckIcon style={{ color: '#32A330', marginRight: '8px' }} />
              Profile linked successfully {/*verificationSubmission.orcid*/}
            </Typography>
            <Button variant="text" onClick={() => setShowORCiDDialog(true)}>
              {' '}
              Unbind ORCiD{' '}
            </Button>
          </>
        )}
        {!verificationSubmission.orcid && (
          <ORCiDButton sx={{ width: '100%' }} />
        )}
      </Box>
      <ContinueButton
        onClick={() => props.onNext(verificationSubmission)}
        // the continue button is only enabled if ORCiD is bound
        disabled={!verificationSubmission.orcid}
      />
      <UnbindORCiDDialog
        show={showORCiDDialog}
        setShow={setShowORCiDDialog}
        orcid={verificationSubmission.orcid}
      />
    </>
  )
}
