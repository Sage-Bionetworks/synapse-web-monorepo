import React from 'react'
import { ORCiDButton } from './ORCiDButton'
import { useEffect, useState } from 'react'
import { VerificationSubmission } from '@sage-bionetworks/synapse-types'
import CheckIcon from '@mui/icons-material/Check'
//agendelTODO: mobe to sage account page
//import { UnbindORCiDDialog } from 'components/ProfileValidation/UnbindORCiD'
import { Box, Typography, useTheme } from '@mui/material'
import { ContinueButton } from './ContinueButton'

import { ReturnToAppButton } from './ReturnToAppButton'

export type VerifyIdentifyProps = {
  verificationSubmission: VerificationSubmission
  onNext: (vs: VerificationSubmission) => void
}

export const VerifyIdentify = (props: VerifyIdentifyProps): React.ReactNode => {
  const theme = useTheme()
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
              variant="body1"
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
          <ORCiDButton sx={{ width: '100%' }} />
        )}
      </Box>
      <ContinueButton
        onClick={() => props.onNext(verificationSubmission)}
        // the continue button is only enabled if ORCiD is bound
        disabled={!verificationSubmission.orcid}
      />
      <ReturnToAppButton />
    </>
  )
}
