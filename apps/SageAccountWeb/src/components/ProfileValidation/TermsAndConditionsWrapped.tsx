import { Box } from '@mui/material'
import TermsAndConditions from 'synapse-react-client/dist/containers/TermsAndConditions'

import React from 'react'
import theme from 'style/theme'
import { ContinueButton } from './ContinueButton'
import { VerificationSubmission } from 'synapse-react-client/dist/utils/synapseTypes'

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
    <Box
      sx={{
        '&  ul': { margin: theme.spacing(0, -8) },
        '&  .terms-conditions .term-list > li': {
          borderLeft: 'none',
          borderRight: 'none',
          '&  label ': { fontSize: '14px' },
          '& .terms-icon': {
            flex: '0 0 70px',
          },
          '& .terms-checked': {
            backgroundColor: theme.palette.primary.main,
          },
          '& .terms-desc ul ': {
            marginLeft: theme.spacing(-3),
          },
        },
        '& .terms-conditions .view-terms .MuiButton-root ': {
          color: theme.palette.primary.main,
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          padding: '0',
          width: '100%',
          fontSize: '14px',
        },
      }}
    >
      <TermsAndConditions
        onFormChange={isFormComplete => {
          setIsFormComplete(isFormComplete)
        }}
      />
      <ContinueButton
        disabled={!isFormComplete}
        onClick={() => onNext(verificationSubmission)}
      />
    </Box>
  )
}

export default TermsAndConditionsWrapped
