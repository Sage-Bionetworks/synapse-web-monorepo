import { Box } from '@mui/material'
import TermsAndConditions from 'synapse-react-client/dist/containers/TermsAndConditions'
import React from 'react'
import { ContinueButton } from './ContinueButton'
import { VerificationSubmission } from 'synapse-react-client/dist/utils/synapseTypes'
import { ReturnToAppButton } from './ReturnToAppButton'
import { TermsAndConditionsLink } from 'components/TermsAndConditionsLink'

export type TermsAndConditionsWrappedProps = {
  verificationSubmission: VerificationSubmission
  onNext: (verificationSubmission: VerificationSubmission) => void
}

const TermsAndConditionsWrapped: React.FC<TermsAndConditionsWrappedProps> = ({
  onNext,
  verificationSubmission,
}) => {
  const [isFormComplete, setIsFormComplete] = React.useState(false)

  return (
    <Box>
      <TermsAndConditions
        onFormChange={isFormComplete => {
          setIsFormComplete(isFormComplete)
        }}
        hideLinkToFullTC={true}
      />
      <ContinueButton
        disabled={!isFormComplete}
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
