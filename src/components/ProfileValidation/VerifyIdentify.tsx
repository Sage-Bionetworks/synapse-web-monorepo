import { ORCiDButton } from 'components/ProfileValidation/ORCiDButton'
import React, { useEffect, useState } from 'react'
import { VerificationSubmission } from 'synapse-react-client/dist/utils/synapseTypes'
import CheckIcon from '@mui/icons-material/Check'
//agendelTODO: mobe to sage account page
//import { UnbindORCiDDialog } from 'components/ProfileValidation/UnbindORCiD'
import { Box, Typography } from '@mui/material'
import { ContinueButton } from './ContinueButton'
import theme from 'style/theme'

import { ReturnToAppButton } from './ReturnToAppButton'

export type VerifyIdentifyProps = {
  verificationSubmission: VerificationSubmission
  onNext: (vs: VerificationSubmission) => void
}

export const VerifyIdentify = (props: VerifyIdentifyProps) => {
  const { verificationSubmission } = props
  const [attachments] = useState(verificationSubmission.attachments)

  useEffect(() => {
    verificationSubmission.attachments = attachments
  }, [attachments, verificationSubmission])

  return (
    <>
      <Box sx={{ marginBottom: theme.spacing(5) }}>
        {verificationSubmission.orcid ? (
          <>
            <Typography
              style={{ display: 'flex', marginTop: theme.spacing(5) }}
              variant="body2"
            >
              <CheckIcon style={{ color: '#32A330', marginRight: '8px' }} />
              Profile linked successfully {/*verificationSubmission.orcid*/}
            </Typography>
            {/* per Adam - they can unlink it from the account page, so we don't need this button here 
            <Button variant="text" onClick={() => setShowORCiDDialog(true)}>
              {' '}
              Unbind ORCiD{' '}
            </Button>*/}
          </>
        ) : (
          <ORCiDButton
            sx={{ width: '100%' }}
            redirectAfter={`${window.location.protocol}://${window.location.hostname}/authenticated/validate?step=1`}
          />
        )}
      </Box>
      <ContinueButton
        onClick={() => props.onNext(verificationSubmission)}
        // the continue button is only enabled if ORCiD is bound
        disabled={!verificationSubmission.orcid}
      />
      <ReturnToAppButton />
      {/* agendel todo: move the 'unlink' functionality to sage account page
      <UnbindORCiDDialog
        show={showORCiDDialog}
        setShow={setShowORCiDDialog}
        orcid={verificationSubmission.orcid}
        />*/}
    </>
  )
}
