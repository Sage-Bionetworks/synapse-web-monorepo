import { oauth2PromptFor2FAHandler } from '@/mocks/handlers/oauth2Handlers'
import { server } from '@/mocks/node.js'
import { TwoFactorAuthResetToken } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { vitest } from 'vitest'
import { RESET_2FA_SIGNED_TOKEN_PARAM } from '../../Constants'
import TestWrapper, { TestWrapperProps } from '../../tests/TestWrapper'
import ResetTwoFactorAuth from '../../pages/ResetTwoFactorAuth'

describe('ResetTwoFactorAuth', () => {
  beforeAll(() => {
    server.listen()
  })
  beforeEach(() => {
    vitest.clearAllMocks()
  })

  afterEach(() => {
    server.resetHandlers()
  })

  afterAll(() => {
    server.close()
  })

  const mockTwoFactorAuthResetToken: TwoFactorAuthResetToken = {
    concreteType: 'org.sagebionetworks.repo.model.auth.TwoFactorAuthResetToken',
    userId: 123,
    hmac: 'foo',
    version: 1,
    expiresOn: new Date().toISOString(),
    createdOn: new Date().toISOString(),
  }
  const hexEncodedResetToken = Buffer.from(
    JSON.stringify(mockTwoFactorAuthResetToken),
    'utf-8',
  ).toString('hex')

  function renderComponent(wrapperProps?: TestWrapperProps) {
    const user = userEvent.setup()
    render(<ResetTwoFactorAuth />, {
      wrapper: props => <TestWrapper {...props} {...wrapperProps} />,
    })
    return { user }
  }

  it('Shows an error if no twoFAResetToken is present', async () => {
    renderComponent()

    const alert = await screen.findByRole('alert')
    within(alert).getByText('No token was found in the URL.')
  })
  it('Handles resetting 2FA with password', async () => {
    const { user } = renderComponent({
      memoryRouterProps: {
        initialEntries: [
          `?${RESET_2FA_SIGNED_TOKEN_PARAM}=${hexEncodedResetToken}`,
        ],
      },
    })

    await waitFor(() => {
      expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    })

    const loginWithPasswordButton = screen.getByRole('button', {
      name: 'Sign in with your email',
    })

    await user.click(loginWithPasswordButton)

    const passwordField = screen.getByLabelText('Password')
    const disableTwoFactorAuthButton = screen.getByRole('button', {
      name: 'Disable Two-Factor Authentication',
    })

    expect(disableTwoFactorAuthButton).toBeDisabled()

    await user.type(passwordField, 'myPassword')

    expect(disableTwoFactorAuthButton).toBeEnabled()

    await user.click(disableTwoFactorAuthButton)

    await screen.findByText(
      '2FA has been successfully disabled on your account.',
    )
  })

  it.todo(
    'Handles resetting 2FA with twoFaToken retrieved via 3rd party login',
    async () => {
      server.use(oauth2PromptFor2FAHandler)
      const { user } = renderComponent({
        memoryRouterProps: {
          initialEntries: [
            // TODO: How to simulate that ApplicationSessionManager will redirect the user back here with the twoFaToken after sign-in with external IdP?
            `?${RESET_2FA_SIGNED_TOKEN_PARAM}=${hexEncodedResetToken}`,
          ],
        },
      })

      const disableTwoFactorAuthButton = await screen.findByRole('button', {
        name: 'Disable Two-Factor Authentication',
      })

      // No password is required because the user logged in with an external IdP
      expect(screen.queryByLabelText('Password')).not.toBeInTheDocument()

      expect(disableTwoFactorAuthButton).toBeEnabled()

      await user.click(disableTwoFactorAuthButton)

      await screen.findByText(
        '2FA has been successfully disabled on your account.',
      )
    },
  )
})
