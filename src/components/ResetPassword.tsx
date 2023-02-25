import React, { useEffect, useState } from 'react'
import { SynapseClient, Typography } from 'synapse-react-client'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import {
  ChangePasswordWithToken,
  PasswordResetSignedToken,
} from 'synapse-react-client/dist/utils/synapseTypes/ChangePasswordRequests'
import { getSearchParam, hexDecodeAndDeserialize } from 'URLUtils'
import { Button, InputLabel, TextField } from '@mui/material'
import {
  StyledFormControl,
  StyledInnerContainer,
  StyledOuterContainer,
} from 'components/StyledComponents'
import { Container } from 'react-bootstrap'

export type ResetPasswordProps = {
  returnToUrl: string
}

export const ResetPassword = (props: ResetPasswordProps) => {
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

  return (
    <StyledOuterContainer>
      <StyledInnerContainer>
        <Container>
          {token ? (
            <>
              <form onSubmit={handleChangePasswordWithToken}>
                <StyledFormControl
                  fullWidth
                  required
                  variant="standard"
                  margin="normal"
                >
                  <InputLabel shrink htmlFor="newPassword" required>
                    New password
                  </InputLabel>
                  <TextField
                    fullWidth
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    onChange={e => setNewPassword(e.target.value)}
                    value={newPassword || ''}
                  />
                </StyledFormControl>
                <StyledFormControl
                  fullWidth
                  required
                  variant="standard"
                  margin="normal"
                >
                  <InputLabel shrink htmlFor="confirmPassword" required>
                    Confirm password
                  </InputLabel>
                  <TextField
                    fullWidth
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
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
                >
                  Change Password
                </Button>
              </form>
            </>
          ) : (
            <>
              <Typography variant="headline2">Reset your Password</Typography>
              <Typography variant="body1">
                Please enter your email address or Synapse user name and we'll
                send you instructions to reset your password
              </Typography>
              <StyledFormControl
                fullWidth
                required
                variant="standard"
                margin="normal"
              >
                <TextField
                  fullWidth
                  id="username"
                  name="username"
                  onChange={e => setUserName(e.target.value)}
                  placeholder="Email address-or-username"
                  value={userName || ''}
                />
              </StyledFormControl>
              <Button
                variant="contained"
                fullWidth
                onClick={handleResetPassword}
              >
                Reset my password
              </Button>
            </>
          )}
        </Container>
      </StyledInnerContainer>
    </StyledOuterContainer>
  )
}
