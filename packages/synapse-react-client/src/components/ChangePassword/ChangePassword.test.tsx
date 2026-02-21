import {
  getBadRequestChangePasswordHandler,
  getRequires2FAChangePasswordHandler,
  getSuccessfulChangePasswordHandler,
} from '@/mocks/msw/handlers/changePasswordHandlers'
import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import { getResetTwoFactorAuthHandlers } from '@/mocks/msw/handlers/resetTwoFactorAuthHandlers'
import { server } from '@/mocks/msw/server'
import {
  MOCK_USER_ID,
  mockUserProfileData,
} from '@/mocks/user/mock_user_profile'
import SynapseClient from '@/synapse-client'
import { KeyFactory } from '@/synapse-queries'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseContextType } from '@/utils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { noop } from 'lodash-es'
import {
  BEGIN_RESET_2FA_BUTTON_TEXT,
  SEND_RESET_2FA_EMAIL_BUTTON_TEXT,
  TWO_FACTOR_RESET_CONFIRMATION_TEXT,
} from '../Authentication/OneTimePasswordForm'
import * as ToastMessage from '../ToastMessage/ToastMessage'
import ChangePassword, {
  ChangePasswordProps,
  PASSWORD_CHANGED_SUCCESS_MESSAGE,
} from './ChangePassword'
import { TWO_FACTOR_AUTH_CHANGE_PASSWORD_PROMPT } from './useChangePasswordFormState'

const mockDisplayToast = vi
  .spyOn(ToastMessage, 'displayToast')
  .mockImplementation(() => noop)

vi.mock('react-router', () => {
  return {
    Link: vi.fn(() => <></>),
    Navigate: vi.fn(({ to }) => `Redirected to ${to}`),
  }
})

const changePasswordSpy = vi.spyOn(SynapseClient, 'changePassword')
const reset2faSpy = vi.spyOn(SynapseClient, 'resetTwoFactorAuth')

function renderComponent(
  changePasswordProps?: ChangePasswordProps,
  wrapperProps?: Partial<SynapseContextType>,
) {
  return render(<ChangePassword {...changePasswordProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

function getUsernameField() {
  return screen.queryByLabelText(/Username or Email Address/i)
}

function getCurrentPasswordField() {
  return screen.getByLabelText(/Current password/i)
}

function getNewPasswordField() {
  return screen.getByLabelText(/New password/i)
}

function getConfirmPasswordField() {
  return screen.getByLabelText(/Confirm password/i)
}

function verifySuccessAlertIsShown() {
  const alert = screen.getByRole('alert')
  within(alert).getByText(PASSWORD_CHANGED_SUCCESS_MESSAGE)
}

function setUp(
  changePasswordProps?: ChangePasswordProps,
  wrapperProps?: Partial<SynapseContextType>,
) {
  const user = userEvent.setup()
  const result = renderComponent(changePasswordProps, wrapperProps)
  const usernameField = getUsernameField()
  const currentPasswordField = getCurrentPasswordField()
  const newPasswordField = getNewPasswordField()
  const confirmPasswordField = getConfirmPasswordField()
  const submitButton = screen.getByRole('button', { name: 'Change Password' })

  return {
    user,
    result,
    usernameField,
    currentPasswordField,
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
  currentPasswordField: HTMLElement,
  newPasswordField: HTMLElement,
  confirmPasswordField: HTMLElement,
  newPassword: string,
  currentPassword: string,
  user: ReturnType<typeof userEvent.setup>,
) {
  const otpInputs: HTMLElement[] = await getTOTPInputs()

  await waitFor(() => {
    const alert = screen.getByRole('alert')
    within(alert).getByText(TWO_FACTOR_AUTH_CHANGE_PASSWORD_PROMPT)

    expect(mockDisplayToast).not.toHaveBeenCalled()
    expect(currentPasswordField).not.toBeInTheDocument()
    expect(newPasswordField).not.toBeInTheDocument()
    expect(confirmPasswordField).not.toBeInTheDocument()

    expect(changePasswordSpy).toHaveBeenCalledTimes(1)
    expect(changePasswordSpy).toHaveBeenCalledWith({
      concreteType:
        'org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword',
      username: mockUserProfileData.userName,
      newPassword: newPassword,
      currentPassword: currentPassword,
    })
  })

  // Type the code. Once the code is entered, the form should submit automatically
  for (let i = 0; i < otpInputs.length; i++) {
    await user.type(otpInputs[i], String(i + 1))
  }
}

describe('ChangePassword tests', () => {
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

    const currentPassword = 'currentPassword'
    const newPassword = 'newPa$$w0rd'

    const {
      user,
      usernameField,
      currentPasswordField,
      newPasswordField,
      confirmPasswordField,
      submitButton,
    } = setUp()

    expect(usernameField).not.toBeInTheDocument() //logged in, username should not be present
    await user.type(currentPasswordField, currentPassword)
    await user.type(newPasswordField, 'abc')
    expect(
      screen.getByText('A valid password must be at least 8 characters long'),
    ).toBeInTheDocument()
    await user.clear(newPasswordField)
    await user.type(newPasswordField, '1234567$')
    expect(
      screen.getByText('A valid password must include letters'),
    ).toBeInTheDocument()
    await user.clear(newPasswordField)
    await user.type(newPasswordField, 'abcdefg$')
    expect(
      screen.getByText('A valid password must include digits (0-9)'),
    ).toBeInTheDocument()
    await user.clear(newPasswordField)
    await user.type(newPasswordField, 'abcd1234')
    expect(
      screen.getByText(
        'A valid password must include special characters ~!@#$%^&*_-+=`|\\(){}[]:;"\'<>,.?/',
      ),
    ).toBeInTheDocument()

    await user.clear(newPasswordField)
    await user.type(newPasswordField, newPassword)
    await user.type(confirmPasswordField, newPassword)

    await user.click(submitButton)

    await waitFor(() => {
      verifySuccessAlertIsShown()
      expect(currentPasswordField).not.toBeInTheDocument()
      expect(newPasswordField).not.toBeInTheDocument()
      expect(confirmPasswordField).not.toBeInTheDocument()
      expect(changePasswordSpy).toHaveBeenCalledTimes(1)
      expect(changePasswordSpy).toHaveBeenCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword',
        username: mockUserProfileData.userName,
        newPassword: newPassword,
        currentPassword: currentPassword,
      })
    })
  })

  it('verify redirect changing password', async () => {
    server.use(
      getSuccessfulChangePasswordHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
      ),
    )

    const currentPassword = 'currentPassword'
    const newPassword = 'newPassword'

    const {
      user,
      usernameField,
      currentPasswordField,
      newPasswordField,
      confirmPasswordField,
      submitButton,
    } = setUp({ redirectToRoute: '/MyHome' })

    expect(usernameField).not.toBeInTheDocument() //logged in, username should not be present
    await user.type(currentPasswordField, currentPassword)
    await user.type(newPasswordField, newPassword)
    await user.type(confirmPasswordField, newPassword)

    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText('Redirected to /MyHome')).toBeInTheDocument()
      expect(currentPasswordField).not.toBeInTheDocument()
      expect(newPasswordField).not.toBeInTheDocument()
      expect(confirmPasswordField).not.toBeInTheDocument()
      expect(changePasswordSpy).toHaveBeenCalledTimes(1)
      expect(changePasswordSpy).toHaveBeenCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword',
        username: mockUserProfileData.userName,
        newPassword: newPassword,
        currentPassword: currentPassword,
      })
    })
  })

  it('anonymous changing password', async () => {
    server.use(
      getSuccessfulChangePasswordHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
      ),
    )
    const userName = 'ralphwiggum'
    const currentPassword = 'currentPassword'
    const newPassword = 'newPassword'

    const {
      user,
      usernameField,
      currentPasswordField,
      newPasswordField,
      confirmPasswordField,
      submitButton,
    } = setUp(
      {},
      {
        keyFactory: new KeyFactory(undefined),
        accessToken: 'anon-token',
        isAuthenticated: false,
      },
    )

    expect(usernameField).toBeInTheDocument() //not logged in, username should be present
    await user.type(usernameField!, userName)
    await user.type(currentPasswordField, currentPassword)
    await user.type(newPasswordField, newPassword)
    await user.type(confirmPasswordField, newPassword)

    await user.click(submitButton)

    await waitFor(() => {
      verifySuccessAlertIsShown()
      expect(usernameField).not.toBeInTheDocument()
      expect(currentPasswordField).not.toBeInTheDocument()
      expect(newPasswordField).not.toBeInTheDocument()
      expect(confirmPasswordField).not.toBeInTheDocument()
      expect(changePasswordSpy).toHaveBeenCalledTimes(1)
      expect(changePasswordSpy).toHaveBeenCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword',
        username: userName,
        newPassword: newPassword,
        currentPassword: currentPassword,
      })
    })
  })

  it('shows error when the confirm password does not match the new password', async () => {
    const currentPassword = 'currentPassword'
    const newPassword = 'newPassword'
    const confirmPassword = 'mismatched'

    const {
      user,
      currentPasswordField,
      newPasswordField,
      confirmPasswordField,
      submitButton,
    } = setUp()

    await user.type(currentPasswordField, currentPassword)
    await user.type(newPasswordField, newPassword)
    await user.type(confirmPasswordField, confirmPassword)

    await user.click(submitButton)

    await waitFor(() => {
      expect(mockDisplayToast).toHaveBeenCalledWith(
        'Passwords do not match.',
        'danger',
      )

      expect(currentPasswordField).toHaveValue(currentPassword)
      expect(newPasswordField).toHaveValue(newPassword)
      expect(confirmPasswordField).toHaveValue(confirmPassword)

      expect(changePasswordSpy).not.toHaveBeenCalled()
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

    const currentPassword = 'currentPassword'
    const newPassword = 'newPassword'

    const {
      user,
      currentPasswordField,
      newPasswordField,
      confirmPasswordField,
      submitButton,
    } = setUp()

    await user.type(currentPasswordField, currentPassword)
    await user.type(newPasswordField, newPassword)
    await user.type(confirmPasswordField, newPassword)

    await user.click(submitButton)

    await waitFor(() => {
      const alert = screen.getByRole('alert')
      within(alert).getByText(errorMessage)

      expect(mockDisplayToast).not.toHaveBeenCalled()
      expect(currentPasswordField).toHaveValue(currentPassword)
      expect(newPasswordField).toHaveValue(newPassword)
      expect(confirmPasswordField).toHaveValue(newPassword)

      expect(changePasswordSpy).toHaveBeenCalledTimes(1)
      expect(changePasswordSpy).toHaveBeenCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword',
        username: mockUserProfileData.userName,
        newPassword: newPassword,
        currentPassword: currentPassword,
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
      // Update the mock server so the second request will succeed
      getSuccessfulChangePasswordHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
      ),
    )

    const currentPassword = 'currentPassword'
    const newPassword = 'newPassword'

    const {
      user,
      currentPasswordField,
      newPasswordField,
      confirmPasswordField,
      submitButton,
    } = setUp()

    await user.type(currentPasswordField, currentPassword)
    await user.type(newPasswordField, newPassword)
    await user.type(confirmPasswordField, newPassword)

    await user.click(submitButton)

    // TOTP form should pop up
    await typeAndSubmitTOTP(
      currentPasswordField,
      newPasswordField,
      confirmPasswordField,
      newPassword,
      currentPassword,
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

      verifySuccessAlertIsShown()
      expect(currentPasswordField).not.toBeInTheDocument()
      expect(newPasswordField).not.toBeInTheDocument()
      expect(confirmPasswordField).not.toBeInTheDocument()
    })
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

    const currentPassword = 'currentPassword'
    const newPassword = 'newPassword'

    const {
      user,
      currentPasswordField,
      newPasswordField,
      confirmPasswordField,
      submitButton,
    } = setUp()

    await user.type(currentPasswordField, currentPassword)
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

      verifySuccessAlertIsShown()
      expect(currentPasswordField).not.toBeInTheDocument()
      expect(newPasswordField).not.toBeInTheDocument()
      expect(confirmPasswordField).not.toBeInTheDocument()
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

    const currentPassword = 'currentPassword'
    const newPassword = 'newPassword'

    const {
      user,
      currentPasswordField,
      newPasswordField,
      confirmPasswordField,
      submitButton,
    } = setUp()

    await user.type(currentPasswordField, currentPassword)
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
      currentPasswordField,
      newPasswordField,
      confirmPasswordField,
      newPassword,
      currentPassword,
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

      expect(mockDisplayToast).not.toHaveBeenCalled()
    })

    // The TOTP form should still be shown
    const otpInputs = await getTOTPInputs()
    expect(otpInputs).toHaveLength(6)
  })

  it('supports requesting 2FA reset using a password', async () => {
    const userId = MOCK_USER_ID
    const twoFaToken = 'mock-2fa-token'
    server.use(
      // The first call will indicate that 2FA is required
      getRequires2FAChangePasswordHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        userId,
        twoFaToken,
      ),
      ...getResetTwoFactorAuthHandlers(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
      ),
    )

    const currentPassword = 'currentPassword'
    const newPassword = 'newPassword'

    const {
      user,
      currentPasswordField,
      newPasswordField,
      confirmPasswordField,
      submitButton,
    } = setUp()

    await user.type(currentPasswordField, currentPassword)
    await user.type(newPasswordField, newPassword)
    await user.type(confirmPasswordField, newPassword)

    await user.click(submitButton)

    // TOTP form should pop up, click to reset
    const show2FAResetOptionsButton = await screen.findByText(
      BEGIN_RESET_2FA_BUTTON_TEXT,
    )
    await user.click(show2FAResetOptionsButton)

    const sendResetEmailButton = await screen.findByRole('button', {
      name: SEND_RESET_2FA_EMAIL_BUTTON_TEXT,
    })

    await user.click(sendResetEmailButton)

    // Verify the alert is shown confirming that an email was sent
    await screen.findByText(TWO_FACTOR_RESET_CONFIRMATION_TEXT)

    // Ensure the user is informed that their password has NOT been changed.
    // They will have to enter their old password after following the link sent via email!
    await screen.findByText(/Your password has not been changed./)

    await waitFor(() => {
      expect(changePasswordSpy).toHaveBeenCalledTimes(1)
      expect(changePasswordSpy).toHaveBeenLastCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.auth.ChangePasswordWithCurrentPassword',
        username: mockUserProfileData.userName,
        newPassword: newPassword,
        currentPassword: currentPassword,
      })

      expect(reset2faSpy).toHaveBeenCalledTimes(1)
      expect(reset2faSpy).toHaveBeenCalledWith({
        userId: MOCK_USER_ID,
        twoFaResetEndpoint: expect.any(String),
        // The current password must be used. A twoFaToken returned by the changePassword service cannot be used to reset 2FA.
        password: currentPassword,
      })

      expect(currentPasswordField).not.toBeInTheDocument()
      expect(newPasswordField).not.toBeInTheDocument()
      expect(confirmPasswordField).not.toBeInTheDocument()
    })
  })
})
