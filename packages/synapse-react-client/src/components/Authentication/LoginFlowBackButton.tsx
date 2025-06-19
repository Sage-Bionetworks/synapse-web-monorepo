import { UseLoginReturn } from '@/utils/hooks'
import { LOGIN_BACK_BUTTON_CLASS_NAME } from '@/utils/SynapseConstants'
import IconButton from '@mui/material/IconButton'
import { SxProps } from '@mui/material/styles'
import IconSvg from '../IconSvg/IconSvg'

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
    case 'DISABLE_2FA_PROMPT':
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
