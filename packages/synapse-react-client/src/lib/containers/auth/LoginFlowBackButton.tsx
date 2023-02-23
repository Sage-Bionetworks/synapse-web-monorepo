import { IconButton, SxProps } from '@mui/material'
import IconSvg from '../IconSvg'
import React from 'react'
import { UseLoginReturn } from '../../utils/hooks'

type LoginFormBackButtonProps = {
  step: UseLoginReturn['step']
  onStepChange: (step: UseLoginReturn['step']) => void
  sx?: SxProps
}

function getPreviousStep(currentStep: UseLoginReturn['step']) {
  switch (currentStep) {
    case 'CHOOSE_AUTH_METHOD':
      // Should never happen
      return 'CHOOSE_AUTH_METHOD'
    case 'USERNAME_PASSWORD':
      return 'CHOOSE_AUTH_METHOD'
    case 'VERIFICATION_CODE':
      return 'USERNAME_PASSWORD'
    case 'RECOVERY_CODE':
      return 'VERIFICATION_CODE'
    case 'LOGGED_IN':
      // Should never happen
      return 'LOGGED_IN'
  }
}

export default function LoginFlowBackButton(props: LoginFormBackButtonProps) {
  const { step, onStepChange, sx } = props
  const shouldRender =
    step === 'USERNAME_PASSWORD' || step === 'VERIFICATION_CODE'

  if (!shouldRender) {
    return null
  }
  return (
    <IconButton
      type="button"
      onClick={() => {
        onStepChange(getPreviousStep(step))
      }}
      sx={sx}
    >
      <IconSvg
        icon="arrowBack"
        wrap={false}
        sx={{ height: '24px', width: '24px' }}
      />
    </IconButton>
  )
}
