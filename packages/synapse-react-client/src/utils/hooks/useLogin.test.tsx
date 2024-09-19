import { act, renderHook, waitFor } from '@testing-library/react'
import SynapseClient from '../../synapse-client'
import { LoginResponse } from '@sage-bionetworks/synapse-types'
import { SynapseClientError } from 'synapse-client/util/SynapseClientError'
import {
  ErrorResponseCode,
  TwoFactorAuthErrorResponse,
} from '@sage-bionetworks/synapse-types'
import useLogin from './useLogin'
import { AUTHENTICATION_RECEIPT_LOCALSTORAGE_KEY } from '../SynapseConstants'
import { createWrapper } from '../../testutils/TestingLibraryUtils'

const successfulLoginResponse: LoginResponse = {
  accessToken: 'abcd',
  acceptsTermsOfUse: true,
  authenticationReceipt: 'asdf',
}

const twoFactorAuthErrorResponse: TwoFactorAuthErrorResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.auth.TwoFactorAuthErrorResponse',
  userId: 123,
  twoFaToken: 'a1b2c3',
  reason: 'need 2fa plz',
  errorCode: ErrorResponseCode.TWO_FA_REQUIRED,
}

const username = 'qwertyuiop'
const password = 'p4ssw0rd'

const onSuccessfulLoginFn = jest.fn()

const mockLogIn = jest.spyOn(SynapseClient, 'login')
const mockLogInWith2FA = jest.spyOn(SynapseClient, 'loginWith2fa')
const mockReset2FA = jest.spyOn(SynapseClient, 'resetTwoFactorAuth')
const mockSetAccessTokenCookie = jest
  .spyOn(SynapseClient, 'setAccessTokenCookie')
  .mockResolvedValue(undefined)

function renderUseLogin(
  sessionCallback: () => void,
  twoFaErrorResponse?: TwoFactorAuthErrorResponse,
) {
  return renderHook(() => useLogin({ sessionCallback, twoFaErrorResponse }), {
    wrapper: createWrapper(),
  })
}

async function verify2FAResetStarted(
  result: ReturnType<typeof renderUseLogin>['result'],
  resetEndpoint: string,
) {
  await waitFor(() => {
    expect(mockReset2FA).toHaveBeenCalledWith({
      userId: twoFactorAuthErrorResponse.userId,
      twoFaToken: twoFactorAuthErrorResponse.twoFaToken,
      twoFaResetEndpoint: resetEndpoint,
    })
    expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
    expect(onSuccessfulLoginFn).not.toHaveBeenCalled()
    expect(result.current.step).toBe('DISABLE_2FA_PROMPT')
  })
}

describe('useLogin tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    localStorage.clear()
    history.replaceState({}, '', `/`)
  })

  it('Log in with username and password', async () => {
    mockLogIn.mockResolvedValue(successfulLoginResponse)

    const { result } = renderUseLogin(onSuccessfulLoginFn)

    act(() => {
      result.current.submitUsernameAndPassword(username, password)
    })

    await waitFor(() => {
      expect(mockLogIn).toHaveBeenCalledWith(username, password, null)
      expect(mockSetAccessTokenCookie).toHaveBeenCalledWith(
        successfulLoginResponse.accessToken,
      )
      expect(
        localStorage.getItem(AUTHENTICATION_RECEIPT_LOCALSTORAGE_KEY),
      ).toBe(successfulLoginResponse.authenticationReceipt)
      expect(result.current.step).toBe('LOGGED_IN')
      expect(onSuccessfulLoginFn).toHaveBeenCalled()
    })
  })

  it('Log in with username, password, and 2fa verification code', async () => {
    const timedOneTimePassword = '123456'
    mockLogIn.mockResolvedValue(twoFactorAuthErrorResponse)
    mockLogInWith2FA.mockResolvedValue(successfulLoginResponse)

    const { result } = renderUseLogin(onSuccessfulLoginFn)

    act(() => {
      result.current.submitUsernameAndPassword(username, password)
    })

    await waitFor(() => {
      expect(mockLogIn).toHaveBeenCalledWith(username, password, null)
      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
      expect(result.current.step).toBe('VERIFICATION_CODE')
    })

    act(() => {
      result.current.submitOneTimePassword(timedOneTimePassword, 'TOTP')
    })

    await waitFor(() => {
      expect(mockLogInWith2FA).toHaveBeenCalledWith({
        userId: twoFactorAuthErrorResponse.userId,
        twoFaToken: twoFactorAuthErrorResponse.twoFaToken,
        otpCode: timedOneTimePassword,
        otpType: 'TOTP',
      })
      expect(mockSetAccessTokenCookie).toHaveBeenCalledWith(
        successfulLoginResponse.accessToken,
      )
      expect(
        localStorage.getItem(AUTHENTICATION_RECEIPT_LOCALSTORAGE_KEY),
      ).toBe(successfulLoginResponse.authenticationReceipt)
      expect(result.current.step).toBe('LOGGED_IN')
      expect(onSuccessfulLoginFn).toHaveBeenCalled()
    })
  })

  it('Handles error on login', async () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    const error = new SynapseClientError(
      500,
      'error reason',
      expect.getState().currentTestName!,
    )
    mockLogIn.mockRejectedValue(error)

    const { result } = renderUseLogin(onSuccessfulLoginFn)

    act(() => {
      result.current.submitUsernameAndPassword(username, password)
    })

    await waitFor(() => {
      expect(result.current.errorMessage).toBe(error.reason)
      expect(mockLogIn).toHaveBeenCalledWith(username, password, null)
      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
      expect(
        localStorage.getItem(AUTHENTICATION_RECEIPT_LOCALSTORAGE_KEY),
      ).toBe(null)
      expect(onSuccessfulLoginFn).not.toHaveBeenCalled()
    })

    consoleErrorSpy.mockRestore()
  })

  test.each([
    ['Regular path', '/'],
    ['SWC-style path', '/LoginPlace:0'],
  ])(
    'Handles case where 2fa token is provided via search params, %s',
    async (name, path) => {
      history.replaceState(
        {},
        '',
        `${path}?` +
          `twoFaToken=${twoFactorAuthErrorResponse.twoFaToken}` +
          `&userId=${twoFactorAuthErrorResponse.userId}`,
      )

      const timedOneTimePassword = '123456'
      mockLogInWith2FA.mockResolvedValue(successfulLoginResponse)

      const { result } = renderUseLogin(onSuccessfulLoginFn)

      await waitFor(() => {
        expect(result.current.step).toBe('VERIFICATION_CODE')
      })

      act(() => {
        result.current.submitOneTimePassword(timedOneTimePassword, 'TOTP')
      })

      await waitFor(() => {
        expect(mockLogInWith2FA).toHaveBeenCalledWith({
          userId: twoFactorAuthErrorResponse.userId,
          twoFaToken: twoFactorAuthErrorResponse.twoFaToken,
          otpCode: timedOneTimePassword,
          otpType: 'TOTP',
        })
        expect(mockSetAccessTokenCookie).toHaveBeenCalledWith(
          successfulLoginResponse.accessToken,
        )
        expect(
          localStorage.getItem(AUTHENTICATION_RECEIPT_LOCALSTORAGE_KEY),
        ).toBe(successfulLoginResponse.authenticationReceipt)
        expect(result.current.step).toBe('LOGGED_IN')
        expect(onSuccessfulLoginFn).toHaveBeenCalled()
        expect(mockLogIn).not.toHaveBeenCalled()
      })
    },
  )

  test('Handles a trailing hash in SWC (SWC-6985)', async () => {
    history.replaceState(
      {},
      '',
      `/LoginPlace:0?` +
        `userId=${twoFactorAuthErrorResponse.userId}` +
        `&twoFaToken=${twoFactorAuthErrorResponse.twoFaToken}` +
        '#', // Safari adds a trailing hash
    )

    const timedOneTimePassword = '123456'
    mockLogInWith2FA.mockResolvedValue(successfulLoginResponse)

    const { result } = renderUseLogin(onSuccessfulLoginFn)

    await waitFor(() => {
      expect(result.current.step).toBe('VERIFICATION_CODE')
    })

    act(() => {
      result.current.submitOneTimePassword(timedOneTimePassword, 'TOTP')
    })

    await waitFor(() => {
      expect(mockLogInWith2FA).toHaveBeenCalledWith({
        userId: twoFactorAuthErrorResponse.userId,
        twoFaToken: twoFactorAuthErrorResponse.twoFaToken,
        otpCode: timedOneTimePassword,
        otpType: 'TOTP',
      })
      expect(mockSetAccessTokenCookie).toHaveBeenCalledWith(
        successfulLoginResponse.accessToken,
      )
      expect(
        localStorage.getItem(AUTHENTICATION_RECEIPT_LOCALSTORAGE_KEY),
      ).toBe(successfulLoginResponse.authenticationReceipt)
      expect(result.current.step).toBe('LOGGED_IN')
      expect(onSuccessfulLoginFn).toHaveBeenCalled()
      expect(mockLogIn).not.toHaveBeenCalled()
    })
  })

  it('Handles case where twoFaErrorResponse is a passed prop', async () => {
    const timedOneTimePassword = '123456'
    mockLogInWith2FA.mockResolvedValue(successfulLoginResponse)

    const { result } = renderUseLogin(
      onSuccessfulLoginFn,
      twoFactorAuthErrorResponse,
    )

    await waitFor(() => {
      expect(result.current.step).toBe('VERIFICATION_CODE')
    })

    act(() => {
      result.current.submitOneTimePassword(timedOneTimePassword, 'TOTP')
    })

    await waitFor(() => {
      expect(mockLogInWith2FA).toHaveBeenCalledWith({
        userId: twoFactorAuthErrorResponse.userId,
        twoFaToken: twoFactorAuthErrorResponse.twoFaToken,
        otpCode: timedOneTimePassword,
        otpType: 'TOTP',
      })
      expect(mockSetAccessTokenCookie).toHaveBeenCalledWith(
        successfulLoginResponse.accessToken,
      )
      expect(
        localStorage.getItem(AUTHENTICATION_RECEIPT_LOCALSTORAGE_KEY),
      ).toBe(successfulLoginResponse.authenticationReceipt)
      expect(result.current.step).toBe('LOGGED_IN')
      expect(mockLogIn).not.toHaveBeenCalled()
    })
  })

  it('Error on 2fa submission', async () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    const timedOneTimePassword = '123456'
    const error = new SynapseClientError(
      400,
      'Invalid TOTP',
      expect.getState().currentTestName!,
    )
    mockLogInWith2FA.mockRejectedValue(error)

    const { result } = renderUseLogin(
      onSuccessfulLoginFn,
      twoFactorAuthErrorResponse,
    )

    await waitFor(() => {
      expect(result.current.step).toBe('VERIFICATION_CODE')
    })

    act(() => {
      result.current.submitOneTimePassword(timedOneTimePassword, 'TOTP')
    })

    await waitFor(() => {
      expect(mockLogInWith2FA).toHaveBeenCalledWith({
        userId: twoFactorAuthErrorResponse.userId,
        twoFaToken: twoFactorAuthErrorResponse.twoFaToken,
        otpCode: timedOneTimePassword,
        otpType: 'TOTP',
      })
      expect(result.current.errorMessage).toBe(error.reason)
      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
      expect(
        localStorage.getItem(AUTHENTICATION_RECEIPT_LOCALSTORAGE_KEY),
      ).toBe(null)
      expect(result.current.step).toBe('VERIFICATION_CODE')
      expect(mockLogIn).not.toHaveBeenCalled()
    })

    consoleErrorSpy.mockRestore()
  })

  it('Handles 2fa login error where there is no token or userId', async () => {
    const timedOneTimePassword = '123456'

    const { result } = renderUseLogin(onSuccessfulLoginFn)

    act(() => {
      result.current.submitOneTimePassword(timedOneTimePassword, 'TOTP')
    })

    await waitFor(() => {
      expect(mockLogInWith2FA).not.toHaveBeenCalled()
      expect(result.current.errorMessage).toContain(
        'You did not first log in with your password or a third-party identity provider',
      )
      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
      expect(
        localStorage.getItem(AUTHENTICATION_RECEIPT_LOCALSTORAGE_KEY),
      ).toBe(null)
    })
  })

  it('Handles 2fa error where the token is invalid/expired', async () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation()
    const timedOneTimePassword = '123456'
    const error = new SynapseClientError(
      400,
      'The provided twoFaToken is invalid.',
      expect.getState().currentTestName!,
    )
    mockLogInWith2FA.mockRejectedValue(error)
    const { result } = renderUseLogin(
      onSuccessfulLoginFn,
      twoFactorAuthErrorResponse,
    )

    act(() => {
      result.current.submitOneTimePassword(timedOneTimePassword, 'TOTP')
    })

    await waitFor(() => {
      expect(mockLogInWith2FA).toHaveBeenCalledWith({
        userId: twoFactorAuthErrorResponse.userId,
        twoFaToken: twoFactorAuthErrorResponse.twoFaToken,
        otpCode: timedOneTimePassword,
        otpType: 'TOTP',
      })
      expect(consoleWarnSpy).toHaveBeenCalledWith(error)
      expect(result.current.errorMessage).toContain(
        'Something went wrong. Refresh the page and try again.',
      )
      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
      expect(
        localStorage.getItem(AUTHENTICATION_RECEIPT_LOCALSTORAGE_KEY),
      ).toBe(null)
    })
    consoleWarnSpy.mockRestore()
    consoleErrorSpy.mockRestore()
  })

  it('Handles 2fa error where the token is invalid/expired, and clears search params', async () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation()

    history.replaceState(
      {},
      '',
      `/LoginPlace:0?` +
        `twoFaToken=${twoFactorAuthErrorResponse.twoFaToken}` +
        `&userId=${twoFactorAuthErrorResponse.userId}` +
        // add another param to ensure it isn't cleared
        `&foo=bar`,
    )

    const timedOneTimePassword = '123456'
    const error = new SynapseClientError(
      400,
      'The provided twoFaToken is invalid.',
      expect.getState().currentTestName!,
    )
    mockLogInWith2FA.mockRejectedValue(error)
    const { result } = renderUseLogin(onSuccessfulLoginFn)

    act(() => {
      result.current.submitOneTimePassword(timedOneTimePassword, 'TOTP')
    })

    await waitFor(() => {
      expect(mockLogInWith2FA).toHaveBeenCalledWith({
        userId: twoFactorAuthErrorResponse.userId,
        twoFaToken: twoFactorAuthErrorResponse.twoFaToken,
        otpCode: timedOneTimePassword,
        otpType: 'TOTP',
      })
      expect(consoleWarnSpy).toHaveBeenCalledWith(error)
      expect(result.current.errorMessage).toContain(
        'Something went wrong. Refresh the page and try again.',
      )
      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
      expect(
        localStorage.getItem(AUTHENTICATION_RECEIPT_LOCALSTORAGE_KEY),
      ).toBe(null)
      expect(window.location.href).toBe('http://localhost/LoginPlace:0?foo=bar')
    })
    consoleWarnSpy.mockRestore()
    consoleErrorSpy.mockRestore()
  })

  it('Allows the user to begin the 2fa reset process', async () => {
    const resetEndpoint = 'https://test.synapse.org/reset-2fa'

    mockLogIn.mockResolvedValue(twoFactorAuthErrorResponse)
    mockReset2FA.mockResolvedValue()

    const { result } = renderUseLogin(onSuccessfulLoginFn)

    act(() => {
      result.current.submitUsernameAndPassword(username, password)
    })

    await waitFor(() => {
      expect(mockLogIn).toHaveBeenCalledWith(username, password, null)
      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
      expect(result.current.step).toBe('VERIFICATION_CODE')
    })

    // Change the step so the UI shows the correct prompt
    act(() => {
      result.current.onStepChange('DISABLE_2FA_PROMPT')
    })
    await waitFor(() => {
      expect(result.current.step).toBe('DISABLE_2FA_PROMPT')
    })

    // Trigger sending the email
    act(() => {
      result.current.beginTwoFactorAuthReset(resetEndpoint)
    })

    await verify2FAResetStarted(result, resetEndpoint)
  })

  it('Allows the user to begin the 2fa reset process when a 2FA token is passed via props', async () => {
    const resetEndpoint = 'https://test.synapse.org/reset-2fa'

    mockReset2FA.mockResolvedValue()

    const { result } = renderUseLogin(
      onSuccessfulLoginFn,
      twoFactorAuthErrorResponse,
    )

    await waitFor(() => {
      expect(result.current.step).toBe('VERIFICATION_CODE')
    })

    // Change the step so the UI shows the correct prompt
    act(() => {
      result.current.onStepChange('DISABLE_2FA_PROMPT')
    })
    await waitFor(() => {
      expect(result.current.step).toBe('DISABLE_2FA_PROMPT')
    })

    // Trigger sending the email
    act(() => {
      result.current.beginTwoFactorAuthReset(resetEndpoint)
    })

    await verify2FAResetStarted(result, resetEndpoint)
  })

  test.each([
    ['Regular path', '/'],
    ['SWC-style path', '/LoginPlace:0'],
  ])(
    'Allows resetting 2FA when token is provided via search params, %s',
    async (name, path) => {
      history.replaceState(
        {},
        '',
        `${path}?` +
          `twoFaToken=${twoFactorAuthErrorResponse.twoFaToken}` +
          `&userId=${twoFactorAuthErrorResponse.userId}`,
      )

      const resetEndpoint = 'https://test.synapse.org/reset-2fa'
      mockLogInWith2FA.mockResolvedValue(successfulLoginResponse)

      const { result } = renderUseLogin(onSuccessfulLoginFn)

      await waitFor(() => {
        expect(result.current.step).toBe('VERIFICATION_CODE')
      })

      // Change the step so the UI shows the correct prompt
      act(() => {
        result.current.onStepChange('DISABLE_2FA_PROMPT')
      })
      await waitFor(() => {
        expect(result.current.step).toBe('DISABLE_2FA_PROMPT')
      })

      // Trigger sending the email
      act(() => {
        result.current.beginTwoFactorAuthReset(resetEndpoint)
      })

      await verify2FAResetStarted(result, resetEndpoint)
    },
  )

  it('Handles reset 2fa error where there is no token or userId', async () => {
    const resetEndpoint = 'https://test.synapse.org/reset-2fa'
    const { result } = renderUseLogin(onSuccessfulLoginFn)

    act(() => {
      result.current.beginTwoFactorAuthReset(resetEndpoint)
    })

    await waitFor(() => {
      expect(mockReset2FA).not.toHaveBeenCalled()
      expect(result.current.errorMessage).toContain(
        'You did not first log in with your password or a third-party identity provider',
      )
      expect(onSuccessfulLoginFn).not.toHaveBeenCalled()
    })
  })

  it('Returns an error if resetting 2FA fails', async () => {
    const resetEndpoint = 'https://test.synapse.org/reset-2fa'
    const error: SynapseClientError = new SynapseClientError(
      400,
      'error msg',
      expect.getState().currentTestName!,
    )

    mockLogIn.mockResolvedValue(twoFactorAuthErrorResponse)
    mockReset2FA.mockRejectedValue(error)

    const { result } = renderUseLogin(onSuccessfulLoginFn)

    act(() => {
      result.current.submitUsernameAndPassword(username, password)
    })

    await waitFor(() => {
      expect(mockLogIn).toHaveBeenCalledWith(username, password, null)
      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
      expect(result.current.step).toBe('VERIFICATION_CODE')
    })

    act(() => {
      result.current.beginTwoFactorAuthReset(resetEndpoint)
    })

    await waitFor(() => {
      expect(mockReset2FA).toHaveBeenCalledWith({
        userId: twoFactorAuthErrorResponse.userId,
        twoFaToken: twoFactorAuthErrorResponse.twoFaToken,
        twoFaResetEndpoint: resetEndpoint,
      })
      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
      expect(onSuccessfulLoginFn).not.toHaveBeenCalled()
      expect(result.current.errorMessage).toBe(error.reason)
    })
  })
})
