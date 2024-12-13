import TOTPForm from './TOTPForm'
import { Alert, Button, Link, Typography } from '@mui/material'
import RecoveryCodeForm from './RecoveryCodeForm'
import { TwoFactorAuthOtpType } from '@sage-bionetworks/synapse-types'
import { UseLoginReturn } from '../../utils/hooks/useLogin'

export type ONE_TIME_PASSWORD_STEP =
  | 'VERIFICATION_CODE'
  | 'RECOVERY_CODE'
  | 'DISABLE_2FA_PROMPT'

export type OneTimePasswordFormProps = {
  /* The current UI step to show */
  step: ONE_TIME_PASSWORD_STEP
  /* Whether the current login request is pending */
  loginIsPending: boolean
  onClickUseTOTP: () => void
  onClickUseBackupCode: () => void
  onSubmit: (code: string, otpType: TwoFactorAuthOtpType) => void
  hideReset2FA?: boolean
  onClickPromptReset2FA?: () => void
  onClickReset2FA?: () => void
  twoFactorAuthResetIsSuccess: UseLoginReturn['twoFactorAuthResetIsSuccess']
  twoFactorAuthResetIsPending: UseLoginReturn['twoFactorAuthResetIsPending']
}

export const SHOW_RECOVERY_CODE_FORM_BUTTON_TEXT = 'Use a backup code instead'
export const SHOW_TOTP_FORM_BUTTON_TEXT = 'Use authenticator app instead'
export const BEGIN_RESET_2FA_BUTTON_TEXT = 'Lost access to your codes?'
export const SEND_RESET_2FA_EMAIL_BUTTON_TEXT = 'Send Instructions'
export const TWO_FACTOR_RESET_CONFIRMATION_TEXT =
  'Instructions to reset two-factor authentication were sent to the primary email address associated with your account.'
/**
 * Component that allows the user to enter a one-time password second authentication factor,
 * such as a timed one-time password (TOTP) generated using a shared secret, or a single-use recovery code.
 *
 * The user may also use this UI to begin the process of disabling 2FA on their account.
 * @param props
 * @constructor
 */
export default function OneTimePasswordForm(props: OneTimePasswordFormProps) {
  const {
    step,
    loginIsPending,
    onSubmit,
    onClickUseBackupCode,
    onClickUseTOTP,
    hideReset2FA,
    onClickPromptReset2FA,
    onClickReset2FA,
    twoFactorAuthResetIsSuccess,
    twoFactorAuthResetIsPending,
  } = props

  return (
    <>
      {step === 'VERIFICATION_CODE' && (
        <>
          <TOTPForm
            loginIsPending={loginIsPending}
            onSubmit={totp => {
              onSubmit(totp, 'TOTP')
            }}
          />
          <Link
            align={'center'}
            color={'grey.700'}
            sx={{ display: 'block', mx: 'auto', my: 2 }}
            onClick={() => {
              onClickUseBackupCode()
            }}
          >
            {SHOW_RECOVERY_CODE_FORM_BUTTON_TEXT}
          </Link>
        </>
      )}
      {step === 'RECOVERY_CODE' && (
        <>
          <RecoveryCodeForm
            loginIsPending={loginIsPending}
            onSubmit={recoveryCode => {
              onSubmit(recoveryCode, 'RECOVERY_CODE')
            }}
          />
          <Link
            align={'center'}
            color={'grey.700'}
            sx={{ display: 'block', mx: 'auto', my: 2 }}
            onClick={() => {
              onClickUseTOTP()
            }}
          >
            {SHOW_TOTP_FORM_BUTTON_TEXT}
          </Link>
        </>
      )}
      {!hideReset2FA &&
        onClickPromptReset2FA &&
        onClickReset2FA &&
        step !== 'DISABLE_2FA_PROMPT' && (
          <Link
            align={'center'}
            color={'grey.700'}
            sx={{ display: 'block', mx: 'auto', my: 2 }}
            onClick={() => {
              onClickPromptReset2FA()
            }}
          >
            {BEGIN_RESET_2FA_BUTTON_TEXT}
          </Link>
        )}
      {step === 'DISABLE_2FA_PROMPT' && onClickReset2FA && (
        <>
          <Typography variant={'body1'} align={'center'} sx={{ my: 2 }}>
            To reset two-factor authentication on your account, an email
            containing instructions will be sent to the primary email address on
            your account.
          </Typography>
          <Button
            fullWidth
            variant={'contained'}
            onClick={onClickReset2FA}
            disabled={
              twoFactorAuthResetIsPending || twoFactorAuthResetIsSuccess
            }
            sx={{ my: 2 }}
          >
            {SEND_RESET_2FA_EMAIL_BUTTON_TEXT}
          </Button>
          {twoFactorAuthResetIsSuccess && (
            <Alert severity={'success'} sx={{ my: 1 }}>
              {TWO_FACTOR_RESET_CONFIRMATION_TEXT}
            </Alert>
          )}
          <Link
            align={'center'}
            color={'grey.700'}
            sx={{ display: 'block', mx: 'auto', my: 2 }}
            onClick={() => {
              onClickUseTOTP()
            }}
          >
            Go back
          </Link>
        </>
      )}
    </>
  )
}
