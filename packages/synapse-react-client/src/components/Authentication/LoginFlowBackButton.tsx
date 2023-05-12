import { IconButton, SxProps } from '@mui/material'
import IconSvg from '../IconSvg/IconSvg'
import React from 'react'
import { UseLoginReturn } from '../../utils/hooks'
import { LOGIN_BACK_BUTTON_CLASS_NAME } from '../../utils/SynapseConstants'

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
      // Could have reached this step from either username + password or OAuth sign in, so go back to the beginning
      return 'CHOOSE_AUTH_METHOD'
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
    step === 'USERNAME_PASSWORD' ||
    step === 'VERIFICATION_CODE' ||
    step === 'RECOVERY_CODE'

  if (!shouldRender) {
    return null
  }
  return (
    <IconButton
      className={LOGIN_BACK_BUTTON_CLASS_NAME}
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
