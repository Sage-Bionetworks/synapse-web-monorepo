import { Box, Button, SxProps, TextField, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  ChangePasswordWithToken,
  displayToast,
  SynapseClient,
  SynapseClientError,
} from 'synapse-react-client'
import { PasswordResetSignedToken } from '@sage-bionetworks/synapse-types'
import { getSearchParam, hexDecodeAndDeserialize } from '../URLUtils'
import { BackButton } from './BackButton'
import { LeftRightPanel } from './LeftRightPanel'
import { SourceAppLogo } from './SourceApp'

export type ResetPasswordProps = {
  returnToUrl: string
}

export const ResetPassword = (props: ResetPasswordProps) => {
  const history = useHistory()
  const [userName, setUserName] = useState('')

  const [hasClickedResetPassword, setHasClickedResetPassword] = useState(false)

  const passwordResetTokenValue = getSearchParam('passwordResetToken')

  const token = useMemo(() => {
    if (passwordResetTokenValue) {
      return hexDecodeAndDeserialize(
        passwordResetTokenValue,
      ) as PasswordResetSignedToken
    }
    return undefined
  }, [passwordResetTokenValue])

  const handleResetPassword = async (
    clickEvent: React.FormEvent<HTMLElement>,
  ) => {
    clickEvent.preventDefault()
    try {
      await SynapseClient.resetPassword(userName)
      setHasClickedResetPassword(true)
      displayToast(
        'If a matching account was found, then your password reset request has been sent. Please check your email.',
        'success',
      )
    } catch (err: unknown) {
      displayToast((err as SynapseClientError).reason, 'danger')
    }
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
              <BackButton
                onClick={() => {
                  history.goBack()
                }}
              />
              <SourceAppLogo />
              <TextField
                fullWidth
                required
                label={'Email address or username'}
                id="username"
                name="username"
                onChange={e => {
                  setHasClickedResetPassword(false)
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
                disabled={!userName || hasClickedResetPassword}
              >
                Reset my password
              </Button>
            </Box>
          )
        }
        rightContent={
          token ? (
            <div>
              <Typography variant="headline2">Set a new password</Typography>
              <Typography variant="smallText1">
                We recommend using a strong, unique <strong>password</strong> of
                between 16-32 characters. You can use letters, numbers, and
                punctuation marks.
              </Typography>
            </div>
          ) : (
            <div>
              <Typography variant="headline2">Reset your password</Typography>
              <Typography variant="subtitle1">
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
