import { Box } from '@mui/material'
import { useState } from 'react'
import { TermsAndConditions } from 'synapse-react-client'
import { ContinueButton } from './ContinueButton'
import { VerificationSubmission } from '@sage-bionetworks/synapse-types'
import { ReturnToAppButton } from './ReturnToAppButton'
import { TermsAndConditionsLink } from '../TermsAndConditionsLink'
// import { TermsAndConditionsSignature } from './TermsAndConditionsSignature'

export type TermsAndConditionsWrappedProps = {
  verificationSubmission: VerificationSubmission
  onNext: (verificationSubmission: VerificationSubmission) => void
}

function TermsAndConditionsWrapped({
  onNext,
  verificationSubmission,
}: TermsAndConditionsWrappedProps) {
  const [isFormComplete, setIsFormComplete] = useState(false)
  // const [isSignatureComplete, setIsSignatureComplete] = useState(false)

  return (
    <Box>
      <TermsAndConditions
        termsAndConditionsTableID={
          import.meta.env.VITE_TERMS_AND_CONDITIONS_TABLE_ID
        }
        termsAndConditionsTableVersion={
          import.meta.env.VITE_TERMS_AND_CONDITIONS_TABLE_VERSION
        }
        onFormChange={isFormComplete => {
          setIsFormComplete(isFormComplete)
        }}
        hideLinkToFullTC={true}
      />
      {/* hiding until decisions made around how to capture signature - see PLFM-7757
      <TermsAndConditionsSignature
        canSign={isFormComplete}
        onSigned={isSignatureComplete => {
          setIsSignatureComplete(isSignatureComplete)
        }}
        expectedSignature={`${verificationSubmission.firstName} ${verificationSubmission.lastName}`}
      />
      */}
      <ContinueButton
        disabled={!isFormComplete /* || !isSignatureComplete */}
        onClick={() => onNext(verificationSubmission)}
      />
      <TermsAndConditionsLink
        sx={{ width: '100%', padding: '6px', marginTop: '10px' }}
      />
      <ReturnToAppButton />
    </Box>
  )
}

export default TermsAndConditionsWrapped
