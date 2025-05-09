import { Box, Button, SxProps, TextField, Typography } from '@mui/material'
import { PasswordResetSignedToken } from '@sage-bionetworks/synapse-types'
import { FormEvent, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import {
  ChangePasswordWithToken,
  displayToast,
  SynapseClientError,
  SynapseQueries,
} from 'synapse-react-client'
import { getSearchParam, hexDecodeAndDeserialize } from '../URLUtils'
import { BackButton } from './BackButton'
import { LeftRightPanel } from './LeftRightPanel'
import { SourceAppLogo } from './SourceApp'

export type ResetPasswordProps = {
  returnToUrl: string
}

export type SetPasswordInstructionsProps = {
  title: string
}

export const SetPasswordInstructions = (
  props: SetPasswordInstructionsProps,
) => (
  <div>
    <Typography variant="headline2">{props.title}</Typography>
    <Typography variant="smallText1">
      We recommend using a strong, unique <strong>password</strong> of between
      8-32 characters. A valid password must be at least 8 characters long and
      must include letters, digits (0-9), and special characters
      ~!@#$%^&*_-+=`|\(){}[]:;&quot;&apos;&lt;&gt;,.?/
    </Typography>
  </div>
)

export const ResetPassword = (props: ResetPasswordProps) => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')

  const passwordResetTokenValue = getSearchParam('passwordResetToken')
  const [hasInitiatedResetPassword, setHasInitiatedResetPassword] =
    useState(false)
  const { mutate, isPending } = SynapseQueries.useResetPassword({
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
