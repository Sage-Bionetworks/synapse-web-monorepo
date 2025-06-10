import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { AUTHENTICATION_RECEIPT_LOCALSTORAGE_KEY } from '@/utils/SynapseConstants'
import {
  ErrorResponse,
  ErrorResponseCode,
  LoginResponse,
  TwoFactorAuthErrorResponse,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import StandaloneLoginForm, {
  StandaloneLoginFormProps,
} from './StandaloneLoginForm'

const username = 'myUsername'
const password = 'myPassword'

const successfulLoginResponse: LoginResponse = {
  accessToken: 'abc-123',
  acceptsTermsOfUse: true,
  authenticationReceipt: 'xyz-456',
}

const twoFactorAuthErrorResponse: TwoFactorAuthErrorResponse = {
  concreteType:
    'org.sagebionetworks.repo.model.auth.TwoFactorAuthErrorResponse',
  userId: 123,
  twoFaToken: 'a1b2c3',
  reason: 'need 2fa plz',
  errorCode: ErrorResponseCode.TWO_FA_REQUIRED,
}

const weakPasswordErrorResponse: ErrorResponse = {
  concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
  reason: 'your "password" is weak',
  errorCode: ErrorResponseCode.PASSWORD_RESET_VIA_EMAIL_REQUIRED,
}

function renderComponent(props: StandaloneLoginFormProps) {
  return render(<StandaloneLoginForm {...props} />, {
    wrapper: createWrapper(),
  })
}

describe('StandaloneLoginForm', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    localStorage.removeItem(AUTHENTICATION_RECEIPT_LOCALSTORAGE_KEY)
  })
  const callback = vi.fn()

  it('Log in with username and password', async () => {
    vi.spyOn(SynapseClient, 'login').mockResolvedValue(successfulLoginResponse)

    renderComponent({ sessionCallback: callback })

    await userEvent.click(
      await screen.findByRole('button', { name: 'Sign in with your email' }),
    )

    await userEvent.type(
      screen.getByLabelText('Username or Email Address', { exact: false }),
      username,
    )
    await userEvent.type(
      screen.getByLabelText('Password', { exact: false }),
      password,
    )

    await userEvent.click(screen.getByRole('button', { name: 'Sign in' }))

    await waitFor(() =>
      expect(SynapseClient.login).toHaveBeenCalledWith(
        username,
        password,
        null,
      ),
    )
    await waitFor(() => expect(callback).toHaveBeenCalled())
  })

  it('Log in with email + 2FA TOTP code', async () => {
    vi.spyOn(SynapseClient, 'login').mockResolvedValue(
      twoFactorAuthErrorResponse,
    )

    vi.spyOn(SynapseClient, 'loginWith2fa').mockResolvedValue(
      successfulLoginResponse,
    )

    renderComponent({ sessionCallback: callback })

    await userEvent.click(
      await screen.findByRole('button', { name: 'Sign in with your email' }),
    )

    await userEvent.type(
      screen.getByLabelText('Username or Email Address', { exact: false }),
      username,
    )
    await userEvent.type(
      screen.getByLabelText('Password', { exact: false }),
      password,
    )

    await userEvent.click(screen.getByRole('button', { name: 'Sign in' }))

    await waitFor(() =>
      expect(SynapseClient.login).toHaveBeenCalledWith(
        username,
        password,
        null,
      ),
    )
    expect(callback).not.toHaveBeenCalled()

    let otpInputs: HTMLElement[] = []

    await waitFor(() => {
      otpInputs = screen.getAllByRole('textbox')
      expect(otpInputs).toHaveLength(6)
    })
    for (let i = 0; i < otpInputs.length; i++) {
      await userEvent.type(otpInputs[i], String(i + 1))
    }

    // Once the code is entered, the form should submit automatically
    await waitFor(() => {
      expect(SynapseClient.loginWith2fa).toHaveBeenCalledWith({
        twoFaToken: twoFactorAuthErrorResponse.twoFaToken,
        userId: twoFactorAuthErrorResponse.userId,
        otpCode: '123456',
        otpType: 'TOTP',
      })
      expect(callback).toHaveBeenCalled()
    })
  })

  it('Log in with email + 2FA recovery code', async () => {
    vi.spyOn(SynapseClient, 'login').mockResolvedValue(
      twoFactorAuthErrorResponse,
    )

    vi.spyOn(SynapseClient, 'loginWith2fa').mockResolvedValue(
      successfulLoginResponse,
    )

    renderComponent({ sessionCallback: callback })

    await userEvent.click(
      await screen.findByRole('button', { name: 'Sign in with your email' }),
    )

    await userEvent.type(
      screen.getByLabelText('Username or Email Address', { exact: false }),
      username,
    )
    await userEvent.type(
      screen.getByLabelText('Password', { exact: false }),
      password,
    )

    await userEvent.click(screen.getByRole('button', { name: 'Sign in' }))

    await waitFor(() =>
      expect(SynapseClient.login).toHaveBeenCalledWith(
        username,
        password,
        null,
      ),
    )
    expect(callback).not.toHaveBeenCalled()

    await userEvent.click(await screen.findByText('Use a backup code instead'))

    const recoveryCode = 'abcd-1234-zxcv-5678'
    const recoveryCodeInput = await screen.findByRole('textbox')
    await userEvent.type(recoveryCodeInput, recoveryCode)
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }))

    await waitFor(() => {
      expect(SynapseClient.loginWith2fa).toHaveBeenCalledWith({
        twoFaToken: twoFactorAuthErrorResponse.twoFaToken,
        userId: twoFactorAuthErrorResponse.userId,
        otpCode: recoveryCode,
        otpType: 'RECOVERY_CODE',
      })
      expect(callback).toHaveBeenCalled()
    })
  })

  it('Log in with 2FA code supplied via props', async () => {
    vi.spyOn(SynapseClient, 'loginWith2fa').mockResolvedValue(
      successfulLoginResponse,
    )

    renderComponent({
      sessionCallback: callback,
      twoFactorAuthenticationRequired: twoFactorAuthErrorResponse,
    })

    // Should jump straight to 2fa

    const otpInputs = await screen.findAllByRole('textbox')
    expect(otpInputs).toHaveLength(6)
    for (let i = 0; i < otpInputs.length; i++) {
      await userEvent.type(otpInputs[i], String(i + 1))
    }

    // Once the code is entered, the form should submit automatically
    await waitFor(() => {
      expect(SynapseClient.loginWith2fa).toHaveBeenCalledWith({
        twoFaToken: twoFactorAuthErrorResponse.twoFaToken,
        userId: twoFactorAuthErrorResponse.userId,
        otpCode: '123456',
        otpType: 'TOTP',
      })
      expect(callback).toHaveBeenCalled()
      expect(SynapseClient.login).not.toHaveBeenCalled()
    })
  })

  it('Log in with weak password', async () => {
    vi.spyOn(SynapseClient, 'login').mockRejectedValue({
      reason: 'weak pw',
      errorResponse: weakPasswordErrorResponse,
    })

    renderComponent({ sessionCallback: callback })

    await userEvent.click(
      await screen.findByRole('button', { name: 'Sign in with your email' }),
    )

    await userEvent.type(
      screen.getByLabelText('Username or Email Address', { exact: false }),
      username,
    )
    await userEvent.type(
      screen.getByLabelText('Password', { exact: false }),
      password,
    )

    await userEvent.click(screen.getByRole('button', { name: 'Sign in' }))

    await waitFor(() =>
      expect(SynapseClient.login).toHaveBeenCalledWith(
        username,
        password,
        null,
      ),
    )
    expect(callback).not.toHaveBeenCalled()
    expect(window.location.assign).toHaveBeenCalledWith(
      'http://localhost:3000/changePassword',
    )
  })
})
