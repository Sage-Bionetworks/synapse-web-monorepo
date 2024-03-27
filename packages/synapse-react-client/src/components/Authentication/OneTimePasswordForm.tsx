import React from 'react'
import TOTPForm from './TOTPForm'
import { Link } from '@mui/material'
import RecoveryCodeForm from './RecoveryCodeForm'
import { TwoFactorAuthOtpType } from '@sage-bionetworks/synapse-types'

export type ONE_TIME_PASSWORD_STEP = 'VERIFICATION_CODE' | 'RECOVERY_CODE'

export type OneTimePasswordFormProps = {
  step: ONE_TIME_PASSWORD_STEP
  isLoading: boolean
  onClickUseTOTP: () => void
  onClickUseBackupCode: () => void
  onSubmit: (code: string, otpType: TwoFactorAuthOtpType) => void
}

/**
 * Component that allows the user to enter a one-time password second authentication factor,
 * such as a timed one-time password (TOTP) generated using a shared secret, or a single-use recovery code.
 * @param props
 * @constructor
 */
export default function OneTimePasswordForm(props: OneTimePasswordFormProps) {
  const { step, isLoading, onSubmit, onClickUseBackupCode, onClickUseTOTP } =
    props
  return (
    <>
      {step === 'VERIFICATION_CODE' && (
        <>
          <TOTPForm
            isLoading={isLoading}
            onSubmit={totp => {
              onSubmit(totp, 'TOTP')
            }}
          />
          <Link
            align={'center'}
            color={'grey.700'}
            sx={{ display: 'block', mx: 'auto' }}
            onClick={() => {
              onClickUseBackupCode()
            }}
          >
            Use a backup code instead
          </Link>
        </>
      )}
      {step === 'RECOVERY_CODE' && (
        <>
          <RecoveryCodeForm
            isLoading={isLoading}
            onSubmit={recoveryCode => {
              onSubmit(recoveryCode, 'RECOVERY_CODE')
            }}
          />
          <Link
            align={'center'}
            color={'grey.700'}
            sx={{ display: 'block', mx: 'auto' }}
            onClick={() => {
              onClickUseTOTP()
            }}
          >
            Use authenticator app instead
          </Link>
        </>
      )}
    </>
  )
}
