import { Box } from '@mui/material'
import { SynapseComponents } from 'synapse-react-client'
import React from 'react'
import { ContinueButton } from './ContinueButton'
import { VerificationSubmission } from '@sage-bionetworks/synapse-types'
import { ReturnToAppButton } from './ReturnToAppButton'
import { TermsAndConditionsLink } from '../TermsAndConditionsLink'
// import { TermsAndConditionsSignature } from './TermsAndConditionsSignature'

export type TermsAndConditionsWrappedProps = {
  verificationSubmission: VerificationSubmission
  onNext: (verificationSubmission: VerificationSubmission) => void
}

const TermsAndConditionsWrapped: React.FC<TermsAndConditionsWrappedProps> = ({
  onNext,
  verificationSubmission,
}) => {
  const [isFormComplete, setIsFormComplete] = React.useState(false)
  // const [isSignatureComplete, setIsSignatureComplete] = React.useState(false)

  return (
    <Box>
      <SynapseComponents.TermsAndConditions
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
