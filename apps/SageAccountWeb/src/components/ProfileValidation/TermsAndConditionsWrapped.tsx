import { Box, Button } from '@mui/material'
import TermsAndConditions from 'synapse-react-client/dist/containers/TermsAndConditions'

import React from 'react'
import { ContinueButton } from './ContinueButton'
import { VerificationSubmission } from 'synapse-react-client/dist/utils/synapseTypes'
import { ReturnToAppButton } from './ReturnToAppButton'
import { URL_TERMS_CONDITIONS_AGREEMENT } from 'synapse-react-client/dist/utils/SynapseConstants'

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
      <Button
        variant="text"
        href={URL_TERMS_CONDITIONS_AGREEMENT}
        target="_blank"
        sx={{ width: '100%', padding: '6px', marginTop: '10px' }}
      >
        View and Complete Terms and Conditions for Use
      </Button>
      <ReturnToAppButton />
    </Box>
  )
}

export default TermsAndConditionsWrapped
