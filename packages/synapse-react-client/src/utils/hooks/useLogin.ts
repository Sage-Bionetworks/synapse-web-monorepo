import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
  ErrorResponseCode,
  LoginResponse,
  TwoFactorAuthLoginRequest,
  TwoFactorAuthOtpType,
  TwoFactorAuthResetRequest,
} from '@sage-bionetworks/synapse-types'
import {
  instanceOfTwoFactorAuthErrorResponse,
  TwoFactorAuthErrorResponse,
} from '@sage-bionetworks/synapse-client/generated/models/TwoFactorAuthErrorResponse'
import { AUTHENTICATION_RECEIPT_LOCALSTORAGE_KEY } from '../SynapseConstants'
import { useMutation } from '@tanstack/react-query'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import SynapseClient from '../../synapse-client'
import { ONE_TIME_PASSWORD_STEP } from '../../components'
import { noop } from 'lodash-es'
import { useResetTwoFactorAuth } from '../../synapse-queries'
import { useOneSageURL } from './useOneSageURL'

export type UseLoginOptions = {
  sessionCallback?: () => void
  twoFaErrorResponse?: TwoFactorAuthErrorResponse
  /* If a twoFactorAuthError is encountered (including passed in the twoFactorAuthenticationRequired arg), this callback will be invoked */
  onTwoFactorAuthRequired?: (
    twoFaToken: Pick<TwoFactorAuthErrorResponse, 'twoFaToken' | 'userId'>,
  ) => void
}

export type UseLoginReturn = {
  step:
    | 'CHOOSE_AUTH_METHOD'
    | 'USERNAME_PASSWORD'
    | ONE_TIME_PASSWORD_STEP
    | 'LOGGED_IN'
  onStepChange: Dispatch<SetStateAction<UseLoginReturn['step']>>
  submitUsernameAndPassword: (username: string, password: string) => void
  submitOneTimePassword: (
    code: string,
    /* The type of one time password code that can be used to authenticate through two-factor authentication. Default is based on current value of `step` */
    otpType?: TwoFactorAuthOtpType,
  ) => void
  /* Trigger sending an email which can be used to disable 2FA */
  beginTwoFactorAuthReset: (twoFaResetEndpoint: string) => void
  twoFactorAuthResetIsPending: boolean
  twoFactorAuthResetIsSuccess: boolean
  errorMessage: string | undefined
  loginIsPending: boolean
}

// When prompting the user for a 2FA code, allow the UI to show only these steps
const VALID_STEPS_DURING_2FA_PROMPT: Array<UseLoginReturn['step']> = [
  'VERIFICATION_CODE',
  'RECOVERY_CODE',
  'LOGGED_IN',
  'DISABLE_2FA_PROMPT',
]

/**
 * Stateful hook that manages logging into Synapse
 */
export default function useLogin(opts: UseLoginOptions): UseLoginReturn {
  const {
    sessionCallback = noop,
    twoFaErrorResponse: twoFaErrorResponseFromProps,
    onTwoFactorAuthRequired = noop,
  } = opts
  const [step, setStep] = useState<UseLoginReturn['step']>('CHOOSE_AUTH_METHOD')
  const [errorMessage, setErrorMessage] = useState<string | undefined>()
  const [twoFaErrorResponse, setTwoFaErrorResponse] = useState<
    TwoFactorAuthErrorResponse | undefined
  >()
  const changePasswordSearchParams = new URLSearchParams()
  changePasswordSearchParams.set(
    'errorCode',
    ErrorResponseCode.PASSWORD_RESET_VIA_EMAIL_REQUIRED,
  )
  const changePasswordUrl = useOneSageURL(
    '/changePassword',
    changePasswordSearchParams,
  )
  /**
   * Update state variable if optional prop changes
   */
  useEffect(() => {
    if (twoFaErrorResponseFromProps) {
      setTwoFaErrorResponse(twoFaErrorResponseFromProps)
    }
  }, [twoFaErrorResponseFromProps])

  /*
   * In SWC, if logging in with OAuth, the servlet will call POST /oauth2/session2 to get the access token.
   *
   * If the user has 2FA enabled, the servlet will receive a 401 with the userId and twoFaToken in the response.
   * The servlet will then redirect the user to the login page with the userId and twoFaToken in the searchParams.
   *
   * This effect will check if the search params are present, and change the step to 'VERIFICATION_CODE' if they are.
   */
  useEffect(() => {
    const fullUrl: URL = new URL(window.location.href)

    const { searchParams } = fullUrl
    if (searchParams) {
      const userId = searchParams.get('userId')
      const twoFaToken = searchParams.get('twoFaToken')
      if (userId && twoFaToken) {
        setTwoFaErrorResponse({
          errorCode: ErrorResponseCode.TWO_FA_REQUIRED,
          reason: '',
          userId: parseInt(userId, 10),
          twoFaToken,
          concreteType:
            'org.sagebionetworks.repo.model.auth.TwoFactorAuthErrorResponse',
        })
        if (!VALID_STEPS_DURING_2FA_PROMPT.includes(step)) {
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
      setTwoFaErrorResponse(twoFaErrorResponse)
      if (!VALID_STEPS_DURING_2FA_PROMPT.includes(step)) {
        setStep('VERIFICATION_CODE')
      }
    }
    // We do NOT want to rerun this effect on step change. It should only run once, when we get the error.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [twoFaErrorResponse])

  /**
   * Call the onTwoFactorAuthRequired callback when a twoFaToken is present
   */
  useEffect(() => {
    if (twoFaErrorResponse) {
      onTwoFactorAuthRequired(twoFaErrorResponse)
    }
  }, [onTwoFactorAuthRequired, twoFaErrorResponse])

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
    isPending: loginWithUsernameAndPasswordIsPending,
  } = useMutation<
    LoginResponse | TwoFactorAuthErrorResponse,
    SynapseClientError,
    { username: string; password: string; authenticationReceipt: string | null }
  >({
    mutationFn: ({ username, password, authenticationReceipt }) =>
      SynapseClient.login(username, password, authenticationReceipt),
    onError: error => {
      setErrorMessage(error.reason)
      const { errorResponse } = error
      if (
        errorResponse &&
        'errorCode' in errorResponse &&
        errorResponse.errorCode ==
          ErrorResponseCode.PASSWORD_RESET_VIA_EMAIL_REQUIRED
      ) {
        window.location.assign(changePasswordUrl.toString())
      }
    },
    onSuccess: async loginResponse => {
      if (loginResponse) {
        if (instanceOfTwoFactorAuthErrorResponse(loginResponse)) {
          setStep('VERIFICATION_CODE')
          setTwoFaErrorResponse(loginResponse)
        } else {
          await finishLogin(loginResponse)
        }
      }
    },
  })

  const {
    mutate: mutateLoginWith2FACode,
    isPending: loginWith2FACodeIsPending,
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

  const {
    mutate: resetTwoFactorAuth,
    isSuccess: twoFactorAuthResetIsSuccess,
    isPending: twoFactorAuthResetIsPending,
  } = useResetTwoFactorAuth({
    onError: e => {
      setErrorMessage(e.reason)
    },
  })

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

  function verifyTwoFaErrorIsPresent(
    twoFaErrorResponse: TwoFactorAuthErrorResponse | null | undefined,
  ): twoFaErrorResponse is TwoFactorAuthErrorResponse {
    if (twoFaErrorResponse == null) {
      // This type of error could happen if the 2FA component exists on its own route, and the user directly navigates to it without first logging in with credentials/OAuth
      setErrorMessage(
        'You did not first log in with your password or a third-party identity provider.',
      )
      return false
    }
    return true
  }

  const submitOneTimePassword: UseLoginReturn['submitOneTimePassword'] = (
    code,
    otpType = step === 'RECOVERY_CODE' ? 'RECOVERY_CODE' : 'TOTP',
  ) => {
    setErrorMessage(undefined)
    if (verifyTwoFaErrorIsPresent(twoFaErrorResponse)) {
      const request: TwoFactorAuthLoginRequest = {
        userId: twoFaErrorResponse.userId!,
        twoFaToken: twoFaErrorResponse.twoFaToken!,
        otpCode: code,
        otpType: otpType,
      }
      mutateLoginWith2FACode(request)
    }
  }

  const beginTwoFactorAuthReset: UseLoginReturn['beginTwoFactorAuthReset'] = (
    twoFaResetEndpoint: string,
  ) => {
    setErrorMessage(undefined)
    if (verifyTwoFaErrorIsPresent(twoFaErrorResponse)) {
      const request: TwoFactorAuthResetRequest = {
        userId: twoFaErrorResponse.userId!,
        twoFaToken: twoFaErrorResponse.twoFaToken,
        twoFaResetEndpoint: twoFaResetEndpoint,
      }
      resetTwoFactorAuth(request)
    }
  }

  return {
    step,
    onStepChange: setStep,
    submitUsernameAndPassword,
    submitOneTimePassword: submitOneTimePassword,
    errorMessage,
    loginIsPending:
      loginWithUsernameAndPasswordIsPending || loginWith2FACodeIsPending,
    beginTwoFactorAuthReset,
    twoFactorAuthResetIsPending,
    twoFactorAuthResetIsSuccess,
  }
}
