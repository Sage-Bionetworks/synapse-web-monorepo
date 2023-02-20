import { act, renderHook, waitFor } from '@testing-library/react'
import { SynapseClient } from '../../../../src/lib'
import { LoginResponse } from '../../../../src/lib/utils/synapseTypes'
import { SynapseClientError } from '../../../../src/lib/utils/SynapseClientError'
import {
  ErrorResponseCode,
  TwoFactorAuthErrorResponse,
} from '../../../../src/lib/utils/synapseTypes/ErrorResponse'
import useLogin from '../../../../src/lib/utils/hooks/useLogin'
import { AUTHENTICATION_RECEIPT_LOCALSTORAGE_KEY } from '../../../../src/lib/utils/SynapseConstants'

const successfulLoginResponse: LoginResponse = {
  accessToken: 'abcd',
  sessionToken: 'zxcv',
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
const mockSetAccessTokenCookie = jest
  .spyOn(SynapseClient, 'setAccessTokenCookie')
  .mockResolvedValue(undefined)

describe('useLogin tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    localStorage.clear()
    history.replaceState({}, '', `/`)
  })

  it('Log in with username and password', async () => {
    mockLogIn.mockResolvedValue(successfulLoginResponse)

    const { result } = renderHook(() => useLogin(onSuccessfulLoginFn))

    await act(async () => {
      await result.current.submitUsernameAndPassword(username, password)
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

    const { result } = renderHook(() => useLogin(onSuccessfulLoginFn))

    await act(async () => {
      await result.current.submitUsernameAndPassword(username, password)
    })

    await waitFor(() => {
      expect(mockLogIn).toHaveBeenCalledWith(username, password, null)
      expect(mockSetAccessTokenCookie).not.toHaveBeenCalled()
      expect(result.current.step).toBe('VERIFICATION_CODE')
    })

    await act(async () => {
      await result.current.submitOneTimePassword(timedOneTimePassword, 'TOTP')
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
    const error = new SynapseClientError(
      500,
      'error reason',
      expect.getState().currentTestName!,
    )
    mockLogIn.mockRejectedValue(error)

    const { result } = renderHook(() => useLogin(onSuccessfulLoginFn))

    await act(async () => {
      await result.current.submitUsernameAndPassword(username, password)
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
  })

  test.each([
    ['Regular path', '/'],
    // The hashbang URL is used by SWC but isn't normally compatible with URL.searchParams
    ['SWC-style path', '/#!LoginPlace:0'],
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

      const { result } = renderHook(() => useLogin(onSuccessfulLoginFn))

      await waitFor(() => {
        expect(result.current.step).toBe('VERIFICATION_CODE')
      })

      await act(async () => {
        await result.current.submitOneTimePassword(timedOneTimePassword, 'TOTP')
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

  it('Handles case where twoFaErrorResponse is a passed prop', async () => {
    const timedOneTimePassword = '123456'
    mockLogInWith2FA.mockResolvedValue(successfulLoginResponse)

    const { result } = renderHook(() =>
      useLogin(onSuccessfulLoginFn, twoFactorAuthErrorResponse),
    )

    await waitFor(() => {
      expect(result.current.step).toBe('VERIFICATION_CODE')
    })

    await act(async () => {
      await result.current.submitOneTimePassword(timedOneTimePassword, 'TOTP')
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
    const timedOneTimePassword = '123456'
    const error = new SynapseClientError(
      400,
      'Invalid TOTP',
      expect.getState().currentTestName!,
    )
    mockLogInWith2FA.mockRejectedValue(error)

    const { result } = renderHook(() =>
      useLogin(onSuccessfulLoginFn, twoFactorAuthErrorResponse),
    )

    await waitFor(() => {
      expect(result.current.step).toBe('VERIFICATION_CODE')
    })

    await act(async () => {
      await result.current.submitOneTimePassword(timedOneTimePassword, 'TOTP')
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
  })

  it('Handles 2fa error where there is no token or userId', async () => {
    const timedOneTimePassword = '123456'

    const { result } = renderHook(() => useLogin(onSuccessfulLoginFn))

    await act(async () => {
      await result.current.submitOneTimePassword(timedOneTimePassword, 'TOTP')
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
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation()
    const timedOneTimePassword = '123456'
    const error = new SynapseClientError(
      400,
      'The provided twoFaToken is invalid.',
      expect.getState().currentTestName!,
    )
    mockLogInWith2FA.mockRejectedValue(error)
    const { result } = renderHook(() =>
      useLogin(onSuccessfulLoginFn, twoFactorAuthErrorResponse),
    )

    await act(async () => {
      await result.current.submitOneTimePassword(timedOneTimePassword, 'TOTP')
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
  })

  it('Handles 2fa error where the token is invalid/expired, and clears search params', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation()

    history.replaceState(
      {},
      '',
      `#!LoginPlace:0?` +
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
    const { result } = renderHook(() => useLogin(onSuccessfulLoginFn))

    await act(async () => {
      await result.current.submitOneTimePassword(timedOneTimePassword, 'TOTP')
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
      expect(window.location.href).toBe(
        'http://localhost/#!LoginPlace:0?foo=bar',
      )
    })
    consoleWarnSpy.mockRestore()
  })
})
