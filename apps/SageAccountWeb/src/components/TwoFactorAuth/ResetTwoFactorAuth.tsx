import { Alert, Box, Button, Typography } from '@mui/material'
import React, { useMemo, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  displayToast,
  PasswordField,
  StandaloneLoginForm,
  SynapseQueries,
  useApplicationSessionContext,
  useQuerySearchParam,
} from 'synapse-react-client'
import { TwoFactorAuthResetToken } from '@sage-bionetworks/synapse-types'
import { TwoFactorAuthErrorResponse } from 'synapse-client'
import { hexDecodeAndDeserialize } from '../../URLUtils'
import { BackButton } from '../BackButton'
import { LeftRightPanel } from '../LeftRightPanel'
import { SourceAppLogo } from '../SourceApp'
import { RESET_2FA_SIGNED_TOKEN_PARAM } from '../../Constants'

export function ResetTwoFactorAuth() {
  const history = useHistory()
  const { refreshSession, twoFactorAuthSSOErrorResponse } =
    useApplicationSessionContext()

  const twoFactorAuthResetTokenParam = useQuerySearchParam(
    RESET_2FA_SIGNED_TOKEN_PARAM,
  )

  const token = useMemo(() => {
    if (twoFactorAuthResetTokenParam) {
      return hexDecodeAndDeserialize(
        twoFactorAuthResetTokenParam,
      ) as TwoFactorAuthResetToken
    }
    return undefined
  }, [twoFactorAuthResetTokenParam])

  // To disable 2FA, we must send both the token in the search param and a fresh twoFaToken from a login attempt
  const [twoFaRequiredToken, setTwoFaRequiredToken] = useState<
    Pick<TwoFactorAuthErrorResponse, 'twoFaToken' | 'userId'> | undefined
  >()

  const [password, setPassword] = useState('')
  const [showPasswordField, setShowPasswordField] = useState(false)

  const promptForSignIn = token && !(twoFaRequiredToken || showPasswordField)
  const promptConfirmDisable2FA =
    token && (twoFaRequiredToken || showPasswordField)

  const {
    mutate: disableTwoFactorAuth,
    isSuccess,
    isPending,
    error,
    reset: resetDisable2FAMutation,
  } = SynapseQueries.useDisableTwoFactorAuthWithResetToken({
    onSuccess: () => {
      displayToast('2FA has been successfully disabled on your account.')
      history.push('/authenticated/myaccount')
      // We must refresh the session to clear previous 2FA error responses and allow the user to log in.
      refreshSession()
    },
  })

  return (
    <>
      <LeftRightPanel
        className={'ResetPasswords'}
        leftContent={
          <>
            <div className={'panel-logo'}>
              <SourceAppLogo />
            </div>
            <Box sx={{ my: 4 }}>
              {promptForSignIn && (
                <>
                  <StandaloneLoginForm
                    hideRegisterButton
                    hideForgotPasswordButton
                    sessionCallback={() => {
                      // noop
                      // Since the user will not complete the 2FA login on this page, sessionCallback is never invoked
                    }}
                    twoFactorAuthenticationRequired={
                      twoFactorAuthSSOErrorResponse
                    }
                    onTwoFactorAuthRequired={setTwoFaRequiredToken}
                    ssoState={{
                      twoFaResetToken: twoFactorAuthResetTokenParam,
                    }}
                    onPasswordLoginSelected={() => {
                      // We will render our own password form
                      setShowPasswordField(true)
                    }}
                  />
                </>
              )}
              {promptConfirmDisable2FA && (
                <>
                  {showPasswordField && (
                    <BackButton
                      onClick={() => {
                        resetDisable2FAMutation()
                        setShowPasswordField(false)
                      }}
                    />
                  )}
                  <Typography variant={'body1'} my={2}>
                    If you disable two-factor authentication, your account will
                    be less secure. Additionally, you may be unable to download
                    certain data that requires you to have two-factor
                    authentication enabled on your account.
                  </Typography>
                  <Typography variant={'body1'} my={2}>
                    You can re-activate two-factor authentication at any time in
                    your account settings.
                  </Typography>
                  {showPasswordField && (
                    <PasswordField
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  )}
                  <Button
                    fullWidth
                    variant={'contained'}
                    onClick={() => {
                      disableTwoFactorAuth({
                        ...twoFaRequiredToken,
                        twoFaResetToken: token,
                        password: password,
                      })
                    }}
                    disabled={
                      isSuccess || isPending || (showPasswordField && !password)
                    }
                  >
                    Disable Two-Factor Authentication
                  </Button>
                </>
              )}
              {!token && (
                <Box>
                  {history.length > 1 && (
                    <BackButton
                      onClick={() => {
                        history.goBack()
                      }}
                    />
                  )}
                  <Alert severity={'error'}>
                    No token was found in the URL.
                  </Alert>
                </Box>
              )}
              {error && (
                <Alert severity={'error'} sx={{ my: 2 }}>
                  {error.reason}
                </Alert>
              )}
            </Box>
          </>
        }
        rightContent={
          promptForSignIn ? (
            <div>
              <Typography variant="headline2">
                Sign in to your account
              </Typography>
              <Typography variant="smallText1">
                Before you can reset two-factor authentication, you must sign in
                to your account with an identity provider, or enter your
                password.
              </Typography>
            </div>
          ) : (
            <div>
              <Typography variant="headline2">
                Disable Two-Factor Authentication?
              </Typography>
              <Typography variant="smallText1">
                Follow the instructions to confirm disabling two-factor
                authentication on your account.
              </Typography>
            </div>
          )
        }
      ></LeftRightPanel>
    </>
  )
}
