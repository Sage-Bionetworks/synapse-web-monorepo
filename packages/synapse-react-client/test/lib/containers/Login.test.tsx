import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as React from 'react'
import StandaloneLoginForm from '../../../src/lib/containers/auth/StandaloneLoginForm'
import { SynapseClient } from '../../../src/lib/utils'
import { LoginResponse } from '../../../src/lib/utils/synapseTypes'
import {
  ErrorResponseCode,
  TwoFactorAuthErrorResponse,
} from '../../../src/lib/utils/synapseTypes/ErrorResponse'

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

describe('Functionality of Login Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  const callback = jest.fn()

  it('Log in with username and password', async () => {
    jest
      .spyOn(SynapseClient, 'login')
      .mockResolvedValue(successfulLoginResponse)

    render(<StandaloneLoginForm sessionCallback={callback} />)

    await userEvent.click(
      await screen.findByRole('button', { name: 'Sign in with your email' }),
    )

    screen.getByLabelText('Username or Email Address', { exact: false })
    screen.getByLabelText('Password', { exact: false })

    await userEvent.click(screen.getByRole('button', { name: 'Sign in' }))

    await waitFor(() => expect(SynapseClient.login).toHaveBeenCalled())
    await waitFor(() => expect(callback).toHaveBeenCalled())
  })

  it('Log in with email + 2FA code', async () => {
    jest
      .spyOn(SynapseClient, 'login')
      .mockResolvedValue(twoFactorAuthErrorResponse)

    jest
      .spyOn(SynapseClient, 'loginWith2fa')
      .mockResolvedValue(successfulLoginResponse)

    render(<StandaloneLoginForm sessionCallback={callback} />)

    await userEvent.click(
      await screen.findByRole('button', { name: 'Sign in with your email' }),
    )

    screen.getByLabelText('Username or Email Address', { exact: false })
    screen.getByLabelText('Password', { exact: false })

    await userEvent.click(screen.getByRole('button', { name: 'Sign in' }))

    await waitFor(() => expect(SynapseClient.login).toHaveBeenCalled())
    expect(callback).not.toHaveBeenCalled()

    const otpInputs = await screen.findAllByRole('textbox')
    expect(otpInputs).toHaveLength(6)
    for (let i = 0; i < otpInputs.length; i++) {
      await userEvent.type(otpInputs[i], String(i + 1))
    }

    // Once the code is entered, the form should submit automatically
    await waitFor(() => {
      expect(SynapseClient.loginWith2fa).toHaveBeenCalled()
      expect(callback).toHaveBeenCalled()
    })
  })

  it('Log in with 2FA code supplied via props', async () => {
    jest
      .spyOn(SynapseClient, 'loginWith2fa')
      .mockResolvedValue(successfulLoginResponse)

    render(
      <StandaloneLoginForm
        sessionCallback={callback}
        twoFactorAuthenticationRequired={twoFactorAuthErrorResponse}
      />,
    )

    // Should jump straight to 2fa

    const otpInputs = await screen.findAllByRole('textbox')
    expect(otpInputs).toHaveLength(6)
    for (let i = 0; i < otpInputs.length; i++) {
      await userEvent.type(otpInputs[i], String(i + 1))
    }

    // Once the code is entered, the form should submit automatically
    await waitFor(() => {
      expect(SynapseClient.loginWith2fa).toHaveBeenCalled()
      expect(callback).toHaveBeenCalled()
      expect(SynapseClient.login).not.toHaveBeenCalled()
    })
  })
})
