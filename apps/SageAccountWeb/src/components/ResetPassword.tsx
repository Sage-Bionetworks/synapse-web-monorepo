import React from 'react'
import { Box, Button, SxProps, TextField, Typography } from '@mui/material'
import { PasswordResetSignedToken } from '@sage-bionetworks/synapse-types'
import { FormEvent, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import { getSearchParam, hexDecodeAndDeserialize } from '../URLUtils'
import { BackButton } from './BackButton'
import { LeftRightPanel } from './LeftRightPanel'
import { SourceAppLogo } from './SourceApp'
import { useResetPassword } from 'synapse-react-client/synapse-queries/auth/useResetPassword'
import { displayToast } from 'synapse-react-client/components/ToastMessage'
import ChangePasswordWithToken from 'synapse-react-client/components/ChangePassword/ChangePasswordWithToken'
import { SynapseClientError } from '@sage-bionetworks/synapse-client'
import SetPasswordInstructions from './SetPasswordInstructions'

export type ResetPasswordProps = {
  returnToUrl: string
}

export const ResetPassword = (props: ResetPasswordProps): React.ReactNode => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')

  const passwordResetTokenValue = getSearchParam('passwordResetToken')
  const [hasInitiatedResetPassword, setHasInitiatedResetPassword] =
    useState(false)
  const { mutate, isPending } = useResetPassword({
    onSuccess: () => {
      setHasInitiatedResetPassword(true)
      displayToast(
        'If a matching account was found, then your password reset request has been sent. Please check your email.',
        'success',
      )
    },
    onError: err => {
      displayToast((err as SynapseClientError).reason, 'danger')
    },
  })

  const token = useMemo(() => {
    if (passwordResetTokenValue) {
      return hexDecodeAndDeserialize(
        passwordResetTokenValue,
      ) as PasswordResetSignedToken
    }
    return undefined
  }, [passwordResetTokenValue])

  const handleResetPassword = (clickEvent: FormEvent<HTMLElement>) => {
    clickEvent.preventDefault()
    mutate(userName)
  }

  const formControlSx: SxProps = {
    mb: 2,
  }

  const buttonSx = {
    marginTop: '30px',
  }

  return (
    <>
      <LeftRightPanel
        className={'ResetPasswords'}
        leftContent={
          token ? (
            <>
              <SourceAppLogo />
              <ChangePasswordWithToken
                passwordChangeToken={token}
                onSuccess={() => {
                  window.location.replace(props.returnToUrl)
                }}
              />
            </>
          ) : (
            <Box>
              {navigate.length > 1 && (
                <BackButton
                  onClick={() => {
                    navigate(-1)
                  }}
                />
              )}
              <SourceAppLogo />
              <TextField
                fullWidth
                required
                label={'Email address or username'}
                id="username"
                name="username"
                onChange={e => {
                  setHasInitiatedResetPassword(false)
                  setUserName(e.target.value)
                }}
                value={userName || ''}
                sx={formControlSx}
              />
              <Button
                variant="contained"
                fullWidth
                onClick={e => {
                  void handleResetPassword(e)
                }}
                sx={buttonSx}
                type="button"
                disabled={!userName || hasInitiatedResetPassword || isPending}
              >
                Reset my password
              </Button>
            </Box>
          )
        }
        rightContent={
          token ? (
            <SetPasswordInstructions title="Set a new password" />
          ) : (
            <div>
              <Typography variant="headline2">Reset your password</Typography>
              <Typography variant="body1">
                Please enter your email address or username and we&apos;ll send
                you instructions to reset your password
              </Typography>
            </div>
          )
        }
      ></LeftRightPanel>
    </>
  )
}
