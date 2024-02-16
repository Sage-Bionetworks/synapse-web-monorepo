import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { LoginResponse } from '@sage-bionetworks/synapse-types'
import {
  TwoFactorAuthLoginRequest,
  TwoFactorAuthOtpType,
} from '@sage-bionetworks/synapse-types'
import { TwoFactorAuthErrorResponse } from '@sage-bionetworks/synapse-types'
import { AUTHENTICATION_RECEIPT_LOCALSTORAGE_KEY } from '../SynapseConstants'
import { useMutation } from '@tanstack/react-query'
import { SynapseClientError } from '../SynapseClientError'
import SynapseClient from '../../synapse-client'

export type UseLoginReturn = {
  step:
    | 'CHOOSE_AUTH_METHOD'
    | 'USERNAME_PASSWORD'
    | 'VERIFICATION_CODE'
    | 'RECOVERY_CODE'
    | 'LOGGED_IN'
  onStepChange: Dispatch<SetStateAction<UseLoginReturn['step']>>
  submitUsernameAndPassword: (username: string, password: string) => void
  submitOneTimePassword: (
    code: string,
    /* The type of one time password code that can be used to authenticate through two-factor authentication. Default is based on current value of `step` */
    otpType?: TwoFactorAuthOtpType,
  ) => void
  errorMessage: string | undefined
  isLoading: boolean
}

/**
 * Stateful hook that manages logging into Synapse
 */
export default function useLogin(
  sessionCallback?: () => void,
  twoFaErrorResponse?: TwoFactorAuthErrorResponse,
): UseLoginReturn {
  const [step, setStep] = useState<UseLoginReturn['step']>('CHOOSE_AUTH_METHOD')
  const [errorMessage, setErrorMessage] = useState<string | undefined>()
  const [userId, setUserId] = useState<number>()
  const [twoFaToken, setTwoFaToken] = useState<string>()

  /*
   * In SWC, if logging in with OAuth, the servlet will call POST /oauth2/session2 to get the access token.
   *
   * If the user has 2FA enabled, the servlet will receive a 401 with the userId and twoFaToken in the response.
   * The servlet will then redirect the user to the login page with the userId and twoFaToken in the searchParams.
   *
   * This effect will check if the search params are present, and change the step to 'VERIFICATION_CODE' if they are.
   */
  useEffect(() => {
    // Replace the hash with a slash to handle SWC, which uses a hash in the URL. Otherwise, the searchParams aren't found
    const fullUrl: URL = new URL(window.location.href.replaceAll('#', '/'))

    const { searchParams } = fullUrl
    if (searchParams) {
      const userId = searchParams.get('userId')
      const twoFaToken = searchParams.get('twoFaToken')
      if (userId && twoFaToken) {
        setUserId(parseInt(userId, 10))
        setTwoFaToken(twoFaToken)
        if (
          !['VERIFICATION_CODE', 'RECOVERY_CODE', 'LOGGED_IN'].includes(step)
        ) {
          setStep('VERIFICATION_CODE')
        }
      }
    }
  }, [step])

  /*
   * In client-only apps (like Portals), if logging in with OAuth, the client app will call POST /oauth2/session2 to get the access token.
   *
   * If the user has 2FA enabled, the client app will receive a 401 with the userId and twoFaToken in the response.
   *
   * The app can pass the error response as a prop/argument, and we'll use it here to jump straight to the VERIFICATION_CODE step.
   */
  useEffect(() => {
    if (twoFaErrorResponse) {
      setTwoFaToken(twoFaErrorResponse.twoFaToken)
      setUserId(twoFaErrorResponse.userId)
      if (!['VERIFICATION_CODE', 'RECOVERY_CODE', 'LOGGED_IN'].includes(step)) {
        setStep('VERIFICATION_CODE')
      }
    }
  }, [twoFaErrorResponse])

  /* When the step changes, clear the old error message. */
  useEffect(() => {
    setErrorMessage(undefined)
  }, [step])

  async function finishLogin(loginResponse: LoginResponse) {
    await SynapseClient.setAccessTokenCookie(loginResponse.accessToken)
    localStorage.setItem(
      AUTHENTICATION_RECEIPT_LOCALSTORAGE_KEY,
      loginResponse.authenticationReceipt,
    )
    setStep('LOGGED_IN')

    if (sessionCallback) {
      sessionCallback()
    }
  }

  const {
    mutate: mutateLoginWithUsernameAndPassword,
    isPending: isLoadingLoginWithUsernameAndPassword,
  } = useMutation<
    LoginResponse | TwoFactorAuthErrorResponse | null,
    SynapseClientError,
    { username: string; password: string; authenticationReceipt: string | null }
  >({
    mutationFn: ({ username, password, authenticationReceipt }) =>
      SynapseClient.login(username, password, authenticationReceipt),
    onError: error => {
      setErrorMessage(error.reason)
    },
    onSuccess: async loginResponse => {
      if (loginResponse) {
        if ('errorCode' in loginResponse) {
          setStep('VERIFICATION_CODE')
          setTwoFaToken(loginResponse.twoFaToken)
          setUserId(loginResponse.userId)
        } else {
          await finishLogin(loginResponse)
        }
      }
    },
  })

  const {
    mutate: mutateLoginWith2FACode,
    isPending: isLoadingLoginWith2FACode,
  } = useMutation<LoginResponse, SynapseClientError, TwoFactorAuthLoginRequest>(
    {
      mutationFn: SynapseClient.loginWith2fa,
      onError: e => {
        setErrorMessage(e.reason)
        if (
          // The twoFaToken wasn't transmitted correctly
          e.reason.includes('The provided twoFaToken is invalid') ||
          // The user waited too long to enter the code.
          e.reason.includes('Token has expired')
        ) {
          console.warn(e)
          // Instruct the user refresh to start over.
          setErrorMessage(
            'Something went wrong. Refresh the page and try again.',
          )
          // If the 2FA token is in the search parameters, remove it so the user doesn't just get the same error again.
          if (window.location.href.includes('twoFaToken')) {
            window.history.replaceState(
              {},
              document.title,
              // using regex because SWC hashbang doesn't work with URLSearchParams
              window.location.href.replaceAll(
                /(twoFaToken|userId)=[^&]*&?/g,
                '',
              ),
            )
          }
        }
      },
      onSuccess: finishLogin,
    },
  )

  const submitUsernameAndPassword: UseLoginReturn['submitUsernameAndPassword'] =
    (username, password) => {
      setErrorMessage(undefined)
      const authenticationReceipt = localStorage.getItem(
        AUTHENTICATION_RECEIPT_LOCALSTORAGE_KEY,
      )
      mutateLoginWithUsernameAndPassword({
        username,
        password,
        authenticationReceipt,
      })
    }

  const submitOneTimePassword: UseLoginReturn['submitOneTimePassword'] = (
    code,
    otpType = step === 'RECOVERY_CODE' ? 'RECOVERY_CODE' : 'TOTP',
  ) => {
    setErrorMessage(undefined)
    if (twoFaToken == null || userId == null) {
      // This could happen if the 2FA component exists on its own route, and the user directly navigates to it without first logging in with credentials/OAuth
      setErrorMessage(
        'You did not first log in with your password or a third-party identity provider.',
      )
      return
    }
    const request: TwoFactorAuthLoginRequest = {
      userId: userId,
      twoFaToken: twoFaToken,
      otpCode: code,
      otpType: otpType,
    }
    mutateLoginWith2FACode(request)
  }

  return {
    step,
    onStepChange: setStep,
    submitUsernameAndPassword,
    submitOneTimePassword: submitOneTimePassword,
    errorMessage,
    isLoading:
      isLoadingLoginWithUsernameAndPassword || isLoadingLoginWith2FACode,
  }
}
