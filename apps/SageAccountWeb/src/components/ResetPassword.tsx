import { Box, Button, TextField, Typography } from '@mui/material'
import { StyledFormControl } from '../components/StyledComponents'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { displayToast, SynapseClient } from 'synapse-react-client'
import {
  ChangePasswordWithToken,
  PasswordResetSignedToken,
} from '@sage-bionetworks/synapse-types'
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
  const [token, setToken] = useState<PasswordResetSignedToken | undefined>()
  const [newPassword, setNewPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  const passwordResetTokenValue = getSearchParam('passwordResetToken')

  useEffect(() => {
    if (passwordResetTokenValue) {
      const hexDecodedPasswordResetToken = hexDecodeAndDeserialize(
        passwordResetTokenValue,
      )
      setToken(hexDecodedPasswordResetToken)
    }
  }, [])

  const handleResetPassword = async (
    clickEvent: React.FormEvent<HTMLElement>,
  ) => {
    clickEvent.preventDefault()
    try {
      await SynapseClient.resetPassword(userName)
        .then(() => {
          displayToast(
            'If a matching account was found, then your password reset request has been sent. Please check your email.',
            'success',
          )
        })
        .catch((err: any) => {
          displayToast(err.reason as string, 'danger')
        })
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  const handleChangePasswordWithToken = async (
    clickEvent: React.FormEvent<HTMLElement>,
  ) => {
    clickEvent.preventDefault()
    try {
      if (newPassword !== confirmPassword) {
        displayToast('Passwords do not match', 'danger')
      } else {
        const changeRequest: ChangePasswordWithToken = {
          newPassword,
          concreteType:
            'org.sagebionetworks.repo.model.auth.ChangePasswordWithToken',
          passwordChangeToken: token as PasswordResetSignedToken,
        }
        await SynapseClient.changePasswordWithToken(changeRequest)
          .then(() => {
            displayToast('Successfully changed', 'success')
          })
          .then(() => window.location.replace(props.returnToUrl))
      }
    } catch (err: any) {
      displayToast(err.reason as string, 'danger')
    }
  }

  const formControlSx = {
    marginTop: '0px',
    marginBottom: '10px',
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
              <form onSubmit={handleChangePasswordWithToken}>
                <StyledFormControl
                  fullWidth
                  required
                  variant="standard"
                  margin="normal"
                  sx={formControlSx}
                >
                  <TextField
                    fullWidth
                    required
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    label={'New password'}
                    onChange={e => setNewPassword(e.target.value)}
                    value={newPassword || ''}
                  />
                </StyledFormControl>
                <StyledFormControl
                  fullWidth
                  required
                  variant="standard"
                  margin="normal"
                  sx={formControlSx}
                >
                  <TextField
                    fullWidth
                    required
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    label={'Confirm password'}
                    onChange={e => setConfirmPassword(e.target.value)}
                    value={confirmPassword || ''}
                  />
                </StyledFormControl>
                <Button
                  className="btn-container"
                  variant="contained"
                  type="submit"
                  fullWidth
                  onSubmit={handleChangePasswordWithToken}
                  sx={buttonSx}
                  disabled={!newPassword || !confirmPassword}
                >
                  Change Password
                </Button>
              </form>
            </>
          ) : (
            <Box>
              <BackButton
                onClick={() => {
                  history.goBack()
                }}
              />
              <SourceAppLogo />
              <StyledFormControl
                fullWidth
                required
                variant="standard"
                margin="normal"
                sx={formControlSx}
              >
                <TextField
                  fullWidth
                  required
                  label={'Email address or username'}
                  id="username"
                  name="username"
                  onChange={e => setUserName(e.target.value)}
                  value={userName || ''}
                />
              </StyledFormControl>
              <Button
                variant="contained"
                fullWidth
                onClick={handleResetPassword}
                sx={buttonSx}
                type="button"
                disabled={!userName}
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
                Please enter your email address or username and we'll send you
                instructions to reset your password
              </Typography>
            </div>
          )
        }
      ></LeftRightPanel>
    </>
  )
}
