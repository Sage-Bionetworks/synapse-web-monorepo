import {
  getBadRequestChangePasswordHandler,
  getRequires2FAChangePasswordHandler,
  getSuccessfulChangePasswordHandler,
} from '@/mocks/msw/handlers/changePasswordHandlers'
import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import { server } from '@/mocks/msw/server'
import { MOCK_USER_ID } from '@/mocks/user/mock_user_profile'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { PasswordResetSignedToken } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { noop } from 'lodash-es'
import { MemoryRouter } from 'react-router'
import * as ToastMessage from '../ToastMessage/ToastMessage'
import ChangePasswordWithToken from './ChangePasswordWithToken'
import { TWO_FACTOR_AUTH_CHANGE_PASSWORD_PROMPT } from './useChangePasswordFormState'

const mockDisplayToast = vi
  .spyOn(ToastMessage, 'displayToast')
  .mockImplementation(() => noop)

const changePasswordSpy = vi.spyOn(SynapseClient, 'changePassword')

const passwordResetSignedToken: PasswordResetSignedToken = {
  concreteType: 'org.sagebionetworks.repo.model.auth.PasswordResetSignedToken',
  hmac: 'foo',
  version: 3,
  expiresOn: 'later',
  createdOn: 'now',
  userId: String(MOCK_USER_ID),
  validity: 'valid',
}

const mockOnSuccess = vi.fn()

function renderComponent() {
  return render(
    <MemoryRouter>
      <ChangePasswordWithToken
        passwordChangeToken={passwordResetSignedToken}
        onSuccess={mockOnSuccess}
      />
    </MemoryRouter>,
    { wrapper: createWrapper() },
  )
}

function getNewPasswordField() {
  return screen.getByLabelText(/New password/i)
}

function getConfirmPasswordField() {
  return screen.getByLabelText(/Confirm password/i)
}

function setUp() {
  const user = userEvent.setup()
  const result = renderComponent()
  const newPasswordField = getNewPasswordField()
  const confirmPasswordField = getConfirmPasswordField()
  const submitButton = screen.getByRole('button', { name: 'Change Password' })

  return {
    user,
    result,
    newPasswordField,
    confirmPasswordField,
    submitButton,
  }
}

async function getTOTPInputs() {
  let otpInputs: HTMLElement[] = []
  await waitFor(() => {
    otpInputs = screen.getAllByRole('textbox')
    expect(otpInputs).toHaveLength(6)
  })
  return otpInputs
}

async function typeAndSubmitTOTP(
  newPasswordField: HTMLElement,
  confirmPasswordField: HTMLElement,
  newPassword: string,
  user: ReturnType<typeof userEvent.setup>,
) {
  const otpInputs: HTMLElement[] = await getTOTPInputs()

  await waitFor(() => {
    const alert = screen.getByRole('alert')
    within(alert).getByText(TWO_FACTOR_AUTH_CHANGE_PASSWORD_PROMPT)

    expect(mockDisplayToast).not.toHaveBeenCalled()
    expect(newPasswordField).not.toBeInTheDocument()
    expect(confirmPasswordField).not.toBeInTheDocument()

    expect(changePasswordSpy).toHaveBeenCalledTimes(1)
    expect(changePasswordSpy).toHaveBeenCalledWith({
      concreteType:
        'org.sagebionetworks.repo.model.auth.ChangePasswordWithToken',
      newPassword: newPassword,
      passwordChangeToken: passwordResetSignedToken,
    })
  })

  // Type the code. Once the code is entered, the form should submit automatically
  for (let i = 0; i < otpInputs.length; i++) {
    await user.type(otpInputs[i], String(i + 1))
  }
}

describe('ChangePasswordWithToken tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => vi.clearAllMocks())
  beforeEach(() => {
    server.use(getFeatureFlagsOverride())
  })
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('allows changing password', async () => {
    server.use(
      getSuccessfulChangePasswordHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
      ),
    )

    const newPassword = 'newPassword'

    const { user, newPasswordField, confirmPasswordField, submitButton } =
      setUp()

    await user.type(newPasswordField, newPassword)
    await user.type(confirmPasswordField, newPassword)

    await user.click(submitButton)

    await waitFor(() => {
      expect(mockOnSuccess).toHaveBeenCalledTimes(1)
      expect(mockDisplayToast).toHaveBeenCalledWith(
        'Password successfully changed.',
        'success',
      )
      expect(newPasswordField).toHaveValue('')
      expect(confirmPasswordField).toHaveValue('')
      expect(changePasswordSpy).toHaveBeenCalledTimes(1)
      expect(changePasswordSpy).toHaveBeenCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithToken',
        newPassword: newPassword,
        passwordChangeToken: passwordResetSignedToken,
      })
    })
  })

  it('shows error when the confirm password does not match the new password', async () => {
    const newPassword = 'newPassword'
    const confirmPassword = 'mismatched'

    const { user, newPasswordField, confirmPasswordField, submitButton } =
      setUp()

    await user.type(newPasswordField, newPassword)
    await user.type(confirmPasswordField, confirmPassword)

    await user.click(submitButton)

    await waitFor(() => {
      expect(mockDisplayToast).toHaveBeenCalledWith(
        'Passwords do not match.',
        'danger',
      )

      expect(newPasswordField).toHaveValue(newPassword)
      expect(confirmPasswordField).toHaveValue(confirmPassword)

      expect(changePasswordSpy).not.toHaveBeenCalled()
      expect(mockOnSuccess).not.toHaveBeenCalled()
    })
  })

  it('shows error when the server returns an error', async () => {
    const errorMessage =
      'The provided username/password combination is incorrect'
    server.use(
      getBadRequestChangePasswordHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        errorMessage,
      ),
    )

    const newPassword = 'newPassword'

    const { user, newPasswordField, confirmPasswordField, submitButton } =
      setUp()

    await user.type(newPasswordField, newPassword)
    await user.type(confirmPasswordField, newPassword)

    await user.click(submitButton)

    await waitFor(() => {
      const alert = screen.getByRole('alert')
      within(alert).getByText(errorMessage)

      expect(mockOnSuccess).not.toHaveBeenCalled()
      expect(mockDisplayToast).not.toHaveBeenCalled()
      expect(newPasswordField).toHaveValue(newPassword)
      expect(confirmPasswordField).toHaveValue(newPassword)

      expect(changePasswordSpy).toHaveBeenCalledTimes(1)
      expect(changePasswordSpy).toHaveBeenCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithToken',
        newPassword: newPassword,
        passwordChangeToken: passwordResetSignedToken,
      })
    })
  })

  it('supports entering a TOTP if the server requires 2FA', async () => {
    const userId = MOCK_USER_ID
    const twoFaToken = 'mock-2fa-token'
    server.use(
      // The first call will indicate that 2FA is required
      getRequires2FAChangePasswordHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        userId,
        twoFaToken,
      ),
    )

    const newPassword = 'newPassword'

    const { user, newPasswordField, confirmPasswordField, submitButton } =
      setUp()

    await user.type(newPasswordField, newPassword)
    await user.type(confirmPasswordField, newPassword)

    await user.click(submitButton)

    // TOTP form should pop up
    await typeAndSubmitTOTP(
      newPasswordField,
      confirmPasswordField,
      newPassword,
      user,
    )
    await waitFor(() => {
      expect(changePasswordSpy).toHaveBeenCalledTimes(2)
      expect(changePasswordSpy).toHaveBeenLastCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithTwoFactorAuthToken',
        newPassword: newPassword,
        twoFaToken: twoFaToken,
        userId: userId,
        otpCode: '123456',
        otpType: 'TOTP',
      })

      expect(mockOnSuccess).toHaveBeenCalledTimes(1)
      expect(mockDisplayToast).toHaveBeenCalledWith(
        'Password successfully changed.',
        'success',
      )
    })

    // The form should be reset
    expect(getNewPasswordField()).toHaveValue('')
    expect(getConfirmPasswordField()).toHaveValue('')
  })

  it('supports entering a recovery code if the server requires 2FA', async () => {
    const userId = MOCK_USER_ID
    const twoFaToken = 'mock-2fa-token'
    server.use(
      // The first call will indicate that 2FA is required
      getRequires2FAChangePasswordHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        userId,
        twoFaToken,
      ),
      // Update the mock server so the second request will succeed
      getSuccessfulChangePasswordHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
      ),
    )

    const newPassword = 'newPassword'

    const { user, newPasswordField, confirmPasswordField, submitButton } =
      setUp()

    await user.type(newPasswordField, newPassword)
    await user.type(confirmPasswordField, newPassword)

    await user.click(submitButton)

    const useRecoveryCodeButton = await screen.findByText(
      'Use a backup code instead',
    )
    await user.click(useRecoveryCodeButton)

    // Type the backup code and submit it
    const recoveryCode = '1234-5678-abcd-edcb'
    const recoveryCodeTextbox = await screen.findByPlaceholderText(
      'Enter backup code',
    )
    await user.type(recoveryCodeTextbox, recoveryCode)
    await user.click(screen.getByRole('button', { name: 'Submit' }))

    await waitFor(() => {
      expect(changePasswordSpy).toHaveBeenCalledTimes(2)
      expect(changePasswordSpy).toHaveBeenLastCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithTwoFactorAuthToken',
        newPassword: newPassword,
        twoFaToken: twoFaToken,
        userId: userId,
        otpCode: recoveryCode,
        otpType: 'RECOVERY_CODE',
      })

      expect(mockOnSuccess).toHaveBeenCalledTimes(1)
      expect(mockDisplayToast).toHaveBeenCalledWith(
        'Password successfully changed.',
        'success',
      )

      // The form should be reset
      expect(getNewPasswordField()).toHaveValue('')
      expect(getConfirmPasswordField()).toHaveValue('')
    })
  })

  it('shows an error when the 2FA submission is invalid', async () => {
    const userId = MOCK_USER_ID
    const twoFaToken = 'mock-2fa-token'
    const errorMessage = 'The provided code is invalid.'
    server.use(
      // The first call will indicate that 2FA is required
      getRequires2FAChangePasswordHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        userId,
        twoFaToken,
      ),
    )

    const newPassword = 'newPassword'

    const { user, newPasswordField, confirmPasswordField, submitButton } =
      setUp()

    await user.type(newPasswordField, newPassword)
    await user.type(confirmPasswordField, newPassword)

    await user.click(submitButton)

    // Wait for the UI to update before we change the server behavior
    await getTOTPInputs()

    server.use(
      // Update the mock server so the next request will fail with a meaningful error
      getBadRequestChangePasswordHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        errorMessage,
      ),
    )

    // TOTP form should pop up
    await typeAndSubmitTOTP(
      newPasswordField,
      confirmPasswordField,
      newPassword,
      user,
    )

    await waitFor(() => {
      // The error should be shown on the screen
      screen.getByText(errorMessage)

      expect(changePasswordSpy).toHaveBeenCalledTimes(2)
      expect(changePasswordSpy).toHaveBeenLastCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithTwoFactorAuthToken',
        newPassword: newPassword,
        twoFaToken: twoFaToken,
        userId: userId,
        otpCode: '123456',
        otpType: 'TOTP',
      })

      expect(mockOnSuccess).not.toHaveBeenCalled()
      expect(mockDisplayToast).not.toHaveBeenCalled()
    })

    // The TOTP form should still be shown
    const otpInputs = await getTOTPInputs()
    expect(otpInputs).toHaveLength(6)
  })
})
